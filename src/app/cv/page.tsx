import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/PrintButton";
import { education, experience } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "CV",
  description: `Curriculum vitae for ${site.person}.`,
};

export default function CvPage() {
  return (
    <section style={{ padding: "4rem 0 3rem" }}>
      <div className="wrap">
        <p className="eyebrow no-print">Curriculum vitae</p>
        <h1 className="display">{site.person}</h1>
        <p className="lede">
          {site.title} · {site.location}
        </p>
        <p className="no-print" style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1.25rem" }}>
          <a className="btn btn-primary" href="/cv.pdf" download>
            Download PDF
          </a>
          <PrintButton />
          <Link className="btn btn-ghost" href="/contact">
            Contact
          </Link>
        </p>
        <p className="prose" style={{ marginTop: "1.5rem" }}>
          {site.hero}
        </p>
        <p style={{ color: "var(--muted)" }}>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          {" · "}
          <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
          {" · "}
          <a href={site.linkedin}>linkedin.com/in/anthonyboyduxui</a>
        </p>

        <h2>Experience</h2>
        <ol style={{ listStyle: "none", padding: 0, display: "grid", gap: "1.5rem" }}>
          {experience.map((job) => (
            <li key={`${job.role}-${job.org}`}>
              <h3 style={{ margin: 0 }}>
                {job.role} · {job.org}
              </h3>
              <p style={{ margin: "0.2rem 0 0.6rem", color: "var(--muted)" }}>
                {job.dates} · {job.location}
              </p>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <h2>Education</h2>
        <ul>
          {education.map((item) => (
            <li key={item.cred}>
              {item.cred}, {item.org} ({item.dates})
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
