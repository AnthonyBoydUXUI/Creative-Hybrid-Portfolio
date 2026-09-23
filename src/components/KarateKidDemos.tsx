"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";

type DemoStatus = "idle" | "playing" | "success" | "fail";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return reduced;
}

function DemoShell({
  title,
  principle,
  status,
  live,
  children,
}: {
  title: string;
  principle: string;
  status: DemoStatus;
  live: string;
  children: ReactNode;
}) {
  return (
    <div className="kk-demo">
      <div className="kk-demo-head">
        <p className="eyebrow">{title}</p>
        <p className="kk-demo-principle">{principle}</p>
      </div>
      {children}
      <p className="sr-only" aria-live="polite">
        {live}
      </p>
      <p className="kk-demo-status" data-state={status}>
        {status === "idle" && "Ready"}
        {status === "playing" && "In play"}
        {status === "success" && "Challenge complete"}
        {status === "fail" && "Reset and try again"}
      </p>
    </div>
  );
}

export function PrecisionDemo() {
  const reduced = usePrefersReducedMotion();
  const [status, setStatus] = useState<DemoStatus>("idle");
  const [side, setSide] = useState<"left" | "right">("left");
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState(0);
  const [seconds, setSeconds] = useState(20);
  const [live, setLive] = useState("Precision demo idle. Use Block left or Block right when a target highlights.");
  const timer = useRef<number | null>(null);
  const clock = useRef<number | null>(null);

  const stop = () => {
    if (timer.current) window.clearTimeout(timer.current);
    if (clock.current) window.clearInterval(clock.current);
    timer.current = null;
    clock.current = null;
  };

  useEffect(() => () => stop(), []);

  const nextTarget = () => {
    setSide(Math.random() > 0.5 ? "right" : "left");
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setMisses((count) => {
        const next = count + 1;
        setLive(`Miss. ${next} missed.`);
        if (next >= 3) {
          setStatus("fail");
          stop();
        }
        return next;
      });
    }, reduced ? 4000 : 1400);
  };

  const start = () => {
    stop();
    setHits(0);
    setMisses(0);
    setSeconds(20);
    setStatus("playing");
    setLive("Precision started. Block the highlighted side.");
    nextTarget();
    clock.current = window.setInterval(() => {
      setSeconds((value) => {
        if (value <= 1) {
          stop();
          setStatus((current) => (current === "playing" ? "success" : current));
          setLive("Time complete. Precision drill finished.");
          return 0;
        }
        return value - 1;
      });
    }, 1000);
  };

  const strike = (direction: "left" | "right") => {
    if (status !== "playing") return;
    if (direction === side) {
      setHits((count) => count + 1);
      setLive(`Hit ${direction}.`);
      nextTarget();
    } else {
      setMisses((count) => {
        const next = count + 1;
        setLive(`Wrong side. ${next} missed.`);
        if (next >= 3) {
          setStatus("fail");
          stop();
        } else {
          nextTarget();
        }
        return next;
      });
    }
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        strike("left");
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        strike("right");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <DemoShell title="Precision" principle="Accuracy + timing + controlled response" status={status} live={live}>
      <div className="kk-demo-stage" aria-label="Precision training demonstration">
        <div className="kk-dummy" data-target={status === "playing" ? side : ""}>
          <span className="kk-dummy-arm" data-side="left" />
          <span className="kk-dummy-body" />
          <span className="kk-dummy-arm" data-side="right" />
        </div>
        <dl className="kk-demo-stats">
          <div>
            <dt>Hits</dt>
            <dd>{hits}</dd>
          </div>
          <div>
            <dt>Missed</dt>
            <dd>
              {misses} / 3
            </dd>
          </div>
          <div>
            <dt>Time</dt>
            <dd>{seconds}s</dd>
          </div>
        </dl>
      </div>
      <div className="kk-demo-controls">
        <button type="button" className="btn btn-ghost" onClick={() => strike("left")} disabled={status !== "playing"}>
          Block left
        </button>
        <button type="button" className="btn btn-primary" onClick={status === "playing" ? stop : start}>
          {status === "playing" ? "Stop" : "Start precision"}
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => strike("right")} disabled={status !== "playing"}>
          Block right
        </button>
      </div>
      <p className="kk-demo-help">Arrow keys or the block buttons. Three misses ends the drill.</p>
    </DemoShell>
  );
}

export function BalanceDemo() {
  const reduced = usePrefersReducedMotion();
  const [status, setStatus] = useState<DemoStatus>("idle");
  const [position, setPosition] = useState(0);
  const [outs, setOuts] = useState(0);
  const [seconds, setSeconds] = useState(16);
  const [live, setLive] = useState("Balance demo idle. Hold Tilt left or Tilt right to keep the marker in the zone.");
  const keys = useRef({ left: false, right: false });
  const frame = useRef<number | null>(null);
  const clock = useRef<number | null>(null);
  const zone = 0.28;

  const stop = () => {
    if (frame.current) cancelAnimationFrame(frame.current);
    if (clock.current) window.clearInterval(clock.current);
    frame.current = null;
    clock.current = null;
    keys.current = { left: false, right: false };
  };

  useEffect(() => () => stop(), []);

  const start = () => {
    stop();
    setPosition(0);
    setOuts(0);
    setSeconds(16);
    setStatus("playing");
    setLive("Balance started. Keep the marker inside the highlighted zone.");
    let value = 0;
    let last = performance.now();
    let outLatch = false;
    const drift = reduced ? 0.00008 : 0.00022;
    const tick = (now: number) => {
      const delta = Math.min(32, now - last);
      last = now;
      const input = (keys.current.right ? 1 : 0) - (keys.current.left ? 1 : 0);
      value += (input * 0.0014 - Math.sign(value || 1) * drift * (0.6 + Math.abs(value))) * delta;
      value = Math.max(-1, Math.min(1, value));
      setPosition(value);
      const outside = Math.abs(value) > zone;
      if (outside && !outLatch) {
        outLatch = true;
        setOuts((count) => {
          const next = count + 1;
          setLive(`Out of zone. ${next} of 3.`);
          if (next >= 3) {
            setStatus("fail");
            stop();
          }
          return next;
        });
      }
      if (!outside) outLatch = false;
      frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    clock.current = window.setInterval(() => {
      setSeconds((value) => {
        if (value <= 1) {
          stop();
          setStatus((current) => (current === "playing" ? "success" : current));
          setLive("Stance held. Balance drill finished.");
          return 0;
        }
        return value - 1;
      });
    }, 1000);
  };

  const hold = (direction: "left" | "right", down: boolean) => {
    keys.current[direction] = down;
  };

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        keys.current.left = true;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        keys.current.right = true;
      }
    };
    const up = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") keys.current.left = false;
      if (event.key === "ArrowRight") keys.current.right = false;
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  const marker = `${((position + 1) / 2) * 100}%`;

  return (
    <DemoShell title="Balance" principle="Control + equilibrium + sustained input" status={status} live={live}>
      <div className="kk-demo-stage" aria-label="Balance training demonstration">
        <div className="kk-stick" role="img" aria-label={`Balance marker at ${Math.round(position * 100)} percent from center`}>
          <span className="kk-zone" />
          <span className="kk-ball" style={{ left: marker }} />
        </div>
        <dl className="kk-demo-stats">
          <div>
            <dt>Out</dt>
            <dd>
              {outs} / 3
            </dd>
          </div>
          <div>
            <dt>Time</dt>
            <dd>{seconds}s</dd>
          </div>
        </dl>
      </div>
      <div className="kk-demo-controls">
        <button
          type="button"
          className="btn btn-ghost"
          disabled={status !== "playing"}
          onPointerDown={() => hold("left", true)}
          onPointerUp={() => hold("left", false)}
          onPointerLeave={() => hold("left", false)}
        >
          Tilt left
        </button>
        <button type="button" className="btn btn-primary" onClick={status === "playing" ? stop : start}>
          {status === "playing" ? "Stop" : "Start balance"}
        </button>
        <button
          type="button"
          className="btn btn-ghost"
          disabled={status !== "playing"}
          onPointerDown={() => hold("right", true)}
          onPointerUp={() => hold("right", false)}
          onPointerLeave={() => hold("right", false)}
        >
          Tilt right
        </button>
      </div>
      <p className="kk-demo-help">Hold a tilt control or an arrow key. Three exits from the zone ends the drill.</p>
    </DemoShell>
  );
}

const MEMORY_KEYS = [
  { id: "Shift", code: "ShiftLeft" },
  { id: "Alt", code: "AltLeft" },
  { id: "Ctrl", code: "ControlLeft" },
] as const;

const MEMORY_COMBOS: (typeof MEMORY_KEYS)[number]["id"][][] = [
  ["Shift", "Alt"],
  ["Alt", "Ctrl"],
  ["Shift", "Ctrl"],
];

export function MemoryDemo() {
  const reduced = usePrefersReducedMotion();
  const labelId = useId();
  const [status, setStatus] = useState<DemoStatus>("idle");
  const [combo, setCombo] = useState<(typeof MEMORY_KEYS)[number]["id"][]>(["Shift", "Alt"]);
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState<"watch" | "repeat">("watch");
  const [feedback, setFeedback] = useState<"none" | "good" | "bad">("none");
  const [live, setLive] = useState("Memory demo idle. A key combination is shown once, then you repeat it.");

  const start = () => {
    const next = MEMORY_COMBOS[Math.floor(Math.random() * MEMORY_COMBOS.length)];
    setCombo(next);
    setStep(0);
    setFeedback("none");
    setStatus("playing");
    setPhase("watch");
    setLive(`Remember ${next.join(" then ")}.`);
    window.setTimeout(
      () => {
        setPhase("repeat");
        setLive("Your turn. Repeat the combination in order.");
      },
      reduced ? 1600 : 2200,
    );
  };

  const press = (id: (typeof MEMORY_KEYS)[number]["id"]) => {
    if (status !== "playing" || phase !== "repeat") return;
    if (combo[step] !== id) {
      setFeedback("bad");
      setStatus("fail");
      setLive("Incorrect key. Reset and try again.");
      return;
    }
    const nextStep = step + 1;
    if (nextStep < combo.length) {
      setStep(nextStep);
      setLive(`Correct. ${nextStep} of ${combo.length}.`);
      return;
    }
    setFeedback("good");
    setStatus("success");
    setLive("Combination complete. Memory drill finished.");
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const match = MEMORY_KEYS.find((key) => event.code === key.code || event.key === key.id);
      if (!match) return;
      event.preventDefault();
      press(match.id);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <DemoShell title="Memory" principle="Observe → remember → repeat" status={status} live={live}>
      <p id={labelId} className="kk-demo-help" style={{ marginTop: 0 }}>
        {status === "idle" && "A short key combination will appear once."}
        {status === "playing" && phase === "watch" && "Remember these keys."}
        {status === "playing" && phase === "repeat" && "Your turn."}
        {status === "success" && "Sequence held."}
        {status === "fail" && "Missed combination."}
      </p>
      <p className="kk-combo" data-feedback={feedback} aria-live="polite">
        {status === "idle" ? "—" : phase === "watch" || status !== "playing" ? combo.join("  →  ") : "•  •"}
      </p>
      <div className="kk-keys" role="group" aria-labelledby={labelId}>
        {MEMORY_KEYS.map((key) => (
          <button
            key={key.id}
            type="button"
            className="kk-pad"
            disabled={status !== "playing" || phase !== "repeat"}
            onClick={() => press(key.id)}
          >
            {key.id}
          </button>
        ))}
      </div>
      <div className="kk-demo-controls">
        <button type="button" className="btn btn-primary" onClick={start} disabled={status === "playing" && phase === "watch"}>
          {status === "playing" && phase === "watch" ? "Memorize" : "Start memory"}
        </button>
      </div>
      <p className="kk-demo-help">
        Portfolio demonstration of the Shift / Alt style combination from the April 2025 Memory build. Use the keys or the buttons.
      </p>
    </DemoShell>
  );
}
