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

const MEMORY_PADS = [
  { id: "north", label: "High" },
  { id: "east", label: "Right" },
  { id: "south", label: "Low" },
  { id: "west", label: "Left" },
] as const;

export function MemoryDemo() {
  const reduced = usePrefersReducedMotion();
  const labelId = useId();
  const [status, setStatus] = useState<DemoStatus>("idle");
  const [sequence, setSequence] = useState<number[]>([]);
  const [step, setStep] = useState(0);
  const [lit, setLit] = useState<number | null>(null);
  const [phase, setPhase] = useState<"watch" | "repeat">("watch");
  const [live, setLive] = useState("Memory demo idle. Watch the sequence, then repeat it.");
  const lock = useRef(false);

  const playSequence = async (next: number[]) => {
    lock.current = true;
    setPhase("watch");
    setLive(`Watch ${next.length} moves.`);
    const wait = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms));
    for (const index of next) {
      setLit(index);
      await wait(reduced ? 700 : 420);
      setLit(null);
      await wait(reduced ? 280 : 160);
    }
    setPhase("repeat");
    setStep(0);
    lock.current = false;
    setLive("Your turn. Repeat the sequence.");
  };

  const start = async () => {
    const first = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)];
    setSequence(first);
    setStatus("playing");
    await playSequence(first);
  };

  const press = async (index: number) => {
    if (status !== "playing" || phase !== "repeat" || lock.current) return;
    setLit(index);
    window.setTimeout(() => setLit((current) => (current === index ? null : current)), 180);
    if (sequence[step] !== index) {
      setStatus("fail");
      setLive("Incorrect move. Reset and try again.");
      return;
    }
    const nextStep = step + 1;
    if (nextStep < sequence.length) {
      setStep(nextStep);
      setLive(`Correct. ${nextStep} of ${sequence.length}.`);
      return;
    }
    if (sequence.length >= 4) {
      setStatus("success");
      setLive("Sequence complete. Memory drill finished.");
      return;
    }
    const next = [...sequence, Math.floor(Math.random() * 4)];
    setSequence(next);
    await playSequence(next);
  };

  return (
    <DemoShell title="Memory" principle="Observe → remember → repeat" status={status} live={live}>
      <p id={labelId} className="kk-demo-help" style={{ marginTop: 0 }}>
        {phase === "watch" && status === "playing" ? "Watch the sequence." : "Repeat the sequence in order."}
      </p>
      <div className="kk-pads" role="group" aria-labelledby={labelId}>
        {MEMORY_PADS.map((pad, index) => (
          <button
            key={pad.id}
            type="button"
            className="kk-pad"
            data-lit={lit === index ? "true" : "false"}
            disabled={status !== "playing" || phase !== "repeat"}
            onClick={() => press(index)}
          >
            {pad.label}
          </button>
        ))}
      </div>
      <div className="kk-demo-controls">
        <button type="button" className="btn btn-primary" onClick={start} disabled={status === "playing"}>
          {status === "playing" ? "Sequence running" : "Start memory"}
        </button>
      </div>
      <p className="kk-demo-help">Portfolio demonstration of the observe-then-repeat loop. Not a capture of a 2025 Memory screenshot.</p>
    </DemoShell>
  );
}
