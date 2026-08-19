import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "What this site collects, and what it does not.",
};

export default function PrivacyPage() {
  return (
    <section style={{ padding: "4rem 0 3rem" }}>
      <div className="wrap prose">
        <p className="eyebrow">Plain language</p>
        <h1 className="display">Privacy</h1>
        <p>
          This is a personal portfolio. It does not sell products, run ads, or build a marketing profile of you.
        </p>
        <h2>What I collect</h2>
        <ul>
          <li>
            If you send the contact form, I receive the name, email, and message you typed so I can reply. That mail
            is processed by FormSubmit and then lands in {site.email}.
          </li>
          <li>
            The host (Vercel) may keep standard server logs such as IP address, user agent, and requested URL for
            security and reliability. I do not use those logs to identify you.
          </li>
          <li>
            Appearance preference (light or dark) is stored only in your browser via <code>localStorage</code>. It never
            leaves your device.
          </li>
        </ul>
        <h2>What I do not collect</h2>
        <p>No analytics pixels, no advertising cookies, no sale of data, no tracking across other sites.</p>
        <h2>Your rights</h2>
        <p>
          Email <a href={`mailto:${site.email}`}>{site.email}</a> to ask what I hold from a message you sent, or to ask
          that I delete it. I will do so unless I am required to keep a record.
        </p>
        <p>Last updated August 2026.</p>
      </div>
    </section>
  );
}
