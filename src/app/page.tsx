import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { about, projects, testimonials } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section style={{ padding: "4.5rem 0 3rem" }}>
        <div className="wrap" style={{ display: "grid", gap: "1.5rem" }}>
          <p className="eyebrow">{site.title}</p>
          <h1 className="display">{site.tagline}</h1>
          <p className="lede">{site.hero}</p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link className="btn btn-primary" href="/work">
              See the work
            </Link>
            <Link className="btn btn-ghost" href="/cv">
              Download CV
            </Link>
          </div>
        </div>
      </section>

      <section style={{ padding: "1rem 0 4rem" }} aria-labelledby="about-heading">
        <div
          className="wrap"
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
            alignItems: "center",
          }}
        >
          <div style={{ position: "relative", aspectRatio: "4 / 5", borderRadius: 16, overflow: "hidden" }}>
            <Image
              src={about.studio}
              alt={about.studioAlt}
              fill
              priority
              sizes="(max-width: 800px) 100vw, 40vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <p className="eyebrow" id="about-heading">
              About
            </p>
            <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Seeking customer-centered design? I’m your designer.
            </h2>
            <p className="lede">{about.body[0]}</p>
            <p style={{ marginTop: "1.25rem" }}>
              <Link className="btn btn-ghost" href="/about">
                Read more
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "1rem 0 4rem" }} aria-labelledby="work-heading">
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "end", marginBottom: "1.5rem" }}>
            <div>
              <p className="eyebrow" id="work-heading">
                Selected work
              </p>
              <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                See results.
              </h2>
            </div>
            <Link href="/work">All projects</Link>
          </div>
          <div style={{ display: "grid", gap: "1.1rem", gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))" }}>
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "1rem 0 5rem" }} aria-labelledby="voices-heading">
        <div className="wrap">
          <p className="eyebrow" id="voices-heading">
            From stakeholders
          </p>
          <h2 className="display" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>
            Testimonials
          </h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            {testimonials.slice(0, 3).map((item) => (
              <blockquote
                key={item.name}
                style={{
                  margin: 0,
                  padding: "1.35rem 1.4rem",
                  border: "1px solid var(--line)",
                  borderRadius: 16,
                  background: "var(--bg-elev)",
                }}
              >
                <p className="quote">“{item.quote}”</p>
                <footer style={{ marginTop: "1rem", color: "var(--muted)" }}>
                  <strong style={{ color: "var(--ink)" }}>{item.name}</strong>
                  <br />
                  {item.context}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
