import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Write to ${site.person} about roles, collaborations, or a question.`,
};

export default function ContactPage() {
  return (
    <section style={{ padding: "4rem 0 3rem" }}>
      <div className="wrap" style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))" }}>
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="display">Ready to collaborate?</h1>
          <p className="lede">
            Thank you for your time. If you want me on your team — or you have a question — I’m listening.
          </p>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.55rem", marginTop: "1.5rem" }}>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
            </li>
            <li>
              <a href={site.linkedin} rel="noreferrer" target="_blank">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="sr-only">Message form</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
