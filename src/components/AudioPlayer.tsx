"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";

type Props = {
  src: string;
  title: string;
  cover: string;
  transcript: string;
  durationLabel: string;
};

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function AudioPlayer({ src, title, cover, transcript, durationLabel }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [open, setOpen] = useState(false);
  const transcriptId = useId();

  function toggle() {
    const node = audioRef.current;
    if (!node) return;
    if (node.paused) {
      void node.play();
    } else {
      node.pause();
    }
  }

  return (
    <figure style={{ margin: 0 }}>
      <div className="player">
        <Image
          className="player-cover"
          src={cover}
          alt=""
          width={140}
          height={140}
        />
        <div style={{ display: "grid", gap: "0.55rem", minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <button type="button" className="icon-btn" onClick={toggle} aria-label={playing ? "Pause Aria voice" : "Play Aria voice"}>
              {playing ? (
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="6" y="5" width="4" height="14" fill="currentColor" />
                  <rect x="14" y="5" width="4" height="14" fill="currentColor" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5v14l11-7L8 5Z" fill="currentColor" />
                </svg>
              )}
            </button>
            <div style={{ minWidth: 0 }}>
              <p style={{ margin: 0, fontWeight: 650, letterSpacing: "-0.02em" }}>{title}</p>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: "0.875rem" }}>
                Voice prototype · {durationLabel}
              </p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: "0.65rem", alignItems: "center" }}>
            <span style={{ fontVariantNumeric: "tabular-nums", fontSize: "0.8rem", color: "var(--muted)" }}>
              {formatTime(time)}
            </span>
            <input
              className="player-meter"
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={time}
              aria-label="Playback position"
              onChange={(event) => {
                const next = Number(event.target.value);
                setTime(next);
                if (audioRef.current) audioRef.current.currentTime = next;
              }}
            />
            <span style={{ fontVariantNumeric: "tabular-nums", fontSize: "0.8rem", color: "var(--muted)" }}>
              {formatTime(duration)}
            </span>
          </div>
        </div>
        <audio
          ref={audioRef}
          src={src}
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onTimeUpdate={(event) => setTime(event.currentTarget.currentTime)}
          onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
          onEnded={() => setPlaying(false)}
        >
          <track kind="captions" src="/audio/aria-onboarding.vtt" srcLang="en" label="English" default />
        </audio>
      </div>
      <p style={{ margin: "0.85rem 0 0" }}>
        <button
          type="button"
          className="btn btn-ghost"
          aria-expanded={open}
          aria-controls={transcriptId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Hide transcript" : "Show transcript"}
        </button>
      </p>
      {open ? (
        <div id={transcriptId} className="prose" style={{ marginTop: "0.85rem", color: "var(--muted)" }}>
          {transcript.split("\n\n").map((para) => (
            <p key={para.slice(0, 24)}>{para}</p>
          ))}
        </div>
      ) : null}
      <figcaption className="sr-only">{title}. {durationLabel}.</figcaption>
    </figure>
  );
}
