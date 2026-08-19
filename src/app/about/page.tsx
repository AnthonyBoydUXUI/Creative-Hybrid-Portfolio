import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { about, education, fashion, graphics, testimonials, tools, values } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.person}, product service designer in Los Angeles.`,
};

export default function AboutPage() {
  return (
    <>
      <section style={{ padding: "4rem 0 2rem" }}>
        <div
          className="wrap"
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
            alignItems: "start",
          }}
        >
          <div>
            <p className="eyebrow">{about.kicker}</p>
            <h1 className="display">{about.headline}</h1>
            <blockquote style={{ margin: "1.5rem 0" }}>
              <p className="quote">“{about.quote}”</p>
              <footer style={{ color: "var(--muted)" }}>— {about.quoteBy}</footer>
            </blockquote>
            <div className="prose">
              {about.body.map((para) => (
                <p key={para.slice(0, 32)}>{para}</p>
              ))}
            </div>
            <p style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Link className="btn btn-primary" href="/cv">
                View CV
              </Link>
              <Link className="btn btn-ghost" href="/contact">
                Contact
              </Link>
            </p>
          </div>
          <div style={{ position: "relative", aspectRatio: "3 / 4", borderRadius: 16, overflow: "hidden" }}>
            <Image src={about.portrait} alt={about.portraitAlt} fill sizes="(max-width: 800px) 100vw, 40vw" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      <section style={{ padding: "2rem 0" }} aria-labelledby="values-heading">
        <div className="wrap">
          <h2 id="values-heading" className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Values
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))", gap: "1rem", marginTop: "1.25rem" }}>
            {values.map((value) => (
              <article key={value.title} style={{ padding: "1.2rem", border: "1px solid var(--line)", borderRadius: 16, background: "var(--bg-elev)" }}>
                <h3 style={{ margin: 0 }}>{value.title}</h3>
                <p style={{ margin: "0.45rem 0 0", color: "var(--muted)" }}>{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "2rem 0" }} aria-labelledby="fashion-heading">
        <div className="wrap">
          <p className="eyebrow">Design · concepts</p>
          <h2 id="fashion-heading">ALEKSANDR capsule</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))", gap: "1rem" }}>
            {fashion.map((item) => (
              <figure key={item.src} style={{ margin: 0 }}>
                <Image src={item.src} alt={item.alt} width={1200} height={1600} style={{ width: "100%", height: "auto", borderRadius: 16 }} />
                <figcaption style={{ marginTop: "0.6rem" }}>
                  <strong>{item.caption}</strong>
                  <br />
                  <span style={{ color: "var(--muted)" }}>{item.meta}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "2rem 0" }} aria-labelledby="graphics-heading">
        <div className="wrap">
          <h2 id="graphics-heading">Graphic design</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))", gap: "1rem" }}>
            {graphics.map((item) => (
              <figure key={item.src} style={{ margin: 0 }}>
                <Image src={item.src} alt={item.alt} width={800} height={1200} style={{ width: "100%", height: "auto", borderRadius: 16 }} />
                <figcaption style={{ marginTop: "0.6rem" }}>
                  <strong>{item.caption}</strong>
                  <br />
                  <span style={{ color: "var(--muted)" }}>{item.meta}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "2rem 0" }}>
        <div className="wrap">
          <h2>Education</h2>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.75rem" }}>
            {education.map((item) => (
              <li key={item.cred}>
                <strong>{item.cred}</strong>
                <br />
                <span style={{ color: "var(--muted)" }}>
                  {item.org} · {item.dates}
                </span>
              </li>
            ))}
          </ul>
          <h2 style={{ marginTop: "2rem" }}>Tools</h2>
          <p className="prose" style={{ color: "var(--muted)" }}>
            {tools.join(" · ")}
          </p>
        </div>
      </section>

      <section style={{ padding: "1rem 0 4rem" }}>
        <div className="wrap">
          <h2>Recommendation</h2>
          <blockquote
            style={{
              margin: 0,
              padding: "1.35rem 1.4rem",
              border: "1px solid var(--line)",
              borderRadius: 16,
              background: "var(--bg-elev)",
            }}
          >
            <p className="quote">“{testimonials[3].quote}”</p>
            <footer style={{ marginTop: "1rem", color: "var(--muted)" }}>
              <strong style={{ color: "var(--ink)" }}>{testimonials[3].name}</strong>
              <br />
              {testimonials[3].context}
            </footer>
          </blockquote>
        </div>
      </section>
    </>
  );
}
