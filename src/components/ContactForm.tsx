"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("company")).trim()) {
      setStatus("sent");
      setMessage("Thanks. I’ll be in touch.");
      form.reset();
      return;
    }

    const first = String(data.get("firstName") || "").trim();
    const last = String(data.get("lastName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const body = String(data.get("message") || "").trim();

    setStatus("sending");
    try {
      const response = await fetch("https://formsubmit.co/ajax/" + site.formsubmit, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: `${first} ${last}`.trim(),
          email,
          message: body,
          _subject: `Portfolio inquiry from ${first} ${last}`.trim(),
        }),
      });
      if (!response.ok) throw new Error("send failed");
      setStatus("sent");
      setMessage("Sent. I’ll reply from my inbox.");
      form.reset();
    } catch {
      const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
        `Portfolio inquiry from ${first} ${last}`.trim(),
      )}&body=${encodeURIComponent(body + `\n\n— ${first} ${last} <${email}>`)}`;
      window.location.href = mailto;
      setStatus("error");
      setMessage("I couldn’t reach the mail service, so your email app should open instead.");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate style={{ display: "grid", gap: "1rem" }}>
      <div className="hp" aria-hidden="true">
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))" }}>
        <label className="field">
          <span>First name</span>
          <input className="input" name="firstName" autoComplete="given-name" required />
        </label>
        <label className="field">
          <span>Last name</span>
          <input className="input" name="lastName" autoComplete="family-name" required />
        </label>
      </div>
      <label className="field">
        <span>Email</span>
        <input className="input" name="email" type="email" autoComplete="email" required />
      </label>
      <label className="field">
        <span>Message</span>
        <textarea className="textarea" name="message" required minLength={8} />
      </label>
      <div>
        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
      <p role="status" aria-live="polite" style={{ margin: 0, color: "var(--muted)" }}>
        {message}
      </p>
    </form>
  );
}
