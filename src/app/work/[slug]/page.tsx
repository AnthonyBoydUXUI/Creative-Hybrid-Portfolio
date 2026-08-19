import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AudioPlayer } from "@/components/AudioPlayer";
import {
  getProject,
  lionessCase,
  mariaCase,
  modularCase,
  projects,
  voa,
} from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Work" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: { images: [project.hero] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article>
      <header style={{ padding: "3.5rem 0 0" }}>
        <div className="wrap">
          <p>
            <Link href="/work">Work</Link>
            <span aria-hidden="true"> / </span>
            <span>{project.title}</span>
          </p>
          <p className="eyebrow" style={{ marginTop: "1.5rem" }}>
            {project.year} · {project.client}
          </p>
          <h1 className="display">{project.title}</h1>
          <p className="lede">{project.summary}</p>
          <dl
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
              gap: "1rem",
              margin: "2rem 0 0",
            }}
          >
            <div>
              <dt className="eyebrow">Role</dt>
              <dd style={{ margin: "0.35rem 0 0" }}>{project.role}</dd>
            </div>
            <div>
              <dt className="eyebrow">Client</dt>
              <dd style={{ margin: "0.35rem 0 0" }}>{project.client}</dd>
            </div>
            <div>
              <dt className="eyebrow">Year</dt>
              <dd style={{ margin: "0.35rem 0 0" }}>{project.year}</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="wrap" style={{ marginTop: "2rem" }}>
        <div style={{ position: "relative", aspectRatio: "16 / 9", borderRadius: 16, overflow: "hidden" }}>
          {project.video ? (
            <video
              poster={project.hero}
              controls
              playsInline
              preload="metadata"
              aria-label={project.heroAlt}
              style={{ width: "100%", height: "100%", objectFit: "cover", background: "#111" }}
            >
              <source src={project.video} type="video/mp4" />
            </video>
          ) : (
            <Image src={project.hero} alt={project.heroAlt} fill priority sizes="100vw" style={{ objectFit: "cover" }} />
          )}
        </div>
      </div>

      <div className="wrap" style={{ padding: "3rem 0 4rem" }}>
        {slug === "vehicle-onboarding" ? <VoaBody /> : null}
        {slug === "lioness" ? <LionessBody /> : null}
        {slug === "modular" ? <ModularBody /> : null}
        {slug === "maria" ? <MariaBody /> : null}

        <nav aria-label="More work" style={{ marginTop: "3rem" }}>
          <p className="eyebrow">More work</p>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: "0.4rem" }}>
            {projects
              .filter((item) => item.slug !== slug)
              .map((item) => (
                <li key={item.slug}>
                  <Link href={`/work/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </article>
  );
}

function VoaBody() {
  return (
    <div style={{ display: "grid", gap: "2.5rem" }}>
      <AudioPlayer
        src={voa.audio.src}
        title={voa.audio.title}
        cover={voa.audio.cover}
        transcript={voa.audio.transcript}
        durationLabel={voa.audio.durationLabel}
      />
      <section>
        <h2>Problem</h2>
        <p className="prose">{voa.problem}</p>
      </section>
      <section>
        <h2>Solution</h2>
        <p className="prose">{voa.solution}</p>
        <p className="prose" style={{ marginTop: "1rem" }}>
          {voa.details}
        </p>
      </section>
      <section>
        <h2>How might we</h2>
        <ul>
          {voa.hmws.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Key insights</h2>
        <p className="prose" style={{ color: "var(--muted)" }}>
          From a six-person research set — reported honestly, not inflated.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))", gap: "1rem", marginTop: "1rem" }}>
          {voa.insights.map((item) => (
            <div key={item.stat} style={{ padding: "1.1rem", border: "1px solid var(--line)", borderRadius: 16, background: "var(--bg-elev)" }}>
              <p className="display" style={{ fontSize: "2.4rem", margin: 0 }}>
                {item.stat}
              </p>
              <p style={{ margin: "0.4rem 0 0", color: "var(--muted)" }}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Interface</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))", gap: "0.75rem" }}>
          {voa.screens.map((screen) => (
            <figure key={screen.src} style={{ margin: 0, borderRadius: 12, overflow: "hidden", background: "var(--bg-elev)" }}>
              <Image src={screen.src} alt={screen.alt} width={800} height={1600} style={{ width: "100%", height: "auto" }} />
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}

function LionessBody() {
  return (
    <div style={{ display: "grid", gap: "2rem" }}>
      <section>
        <h2>Overview</h2>
        <p className="prose">{lionessCase.overview}</p>
      </section>
      <section>
        <h2>Challenge</h2>
        <p className="prose">{lionessCase.challenge}</p>
      </section>
      <section>
        <h2>Objective</h2>
        <p className="prose">{lionessCase.objective}</p>
      </section>
      <section>
        <h2>Solution</h2>
        <p className="prose">{lionessCase.solution}</p>
      </section>
      <section>
        <h2>Product</h2>
        <div style={{ display: "grid", gap: "1rem" }}>
          {lionessCase.images.map((image) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={1600}
              height={1000}
              style={{ width: "100%", height: "auto", borderRadius: 16 }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function ModularBody() {
  return (
    <div style={{ display: "grid", gap: "2rem" }}>
      <section>
        <h2>Background</h2>
        <p className="prose">{modularCase.background}</p>
      </section>
      <section>
        <h2>Problem</h2>
        <p className="prose">{modularCase.problem}</p>
      </section>
      <section>
        <h2>Solution</h2>
        <p className="prose">{modularCase.solution}</p>
      </section>
      <section>
        <h2>How might we</h2>
        <p className="prose">{modularCase.hmw}</p>
      </section>
      <section>
        <h2>Insights</h2>
        <ol>
          {modularCase.insights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>
      <section>
        <h2>About Creative Studio</h2>
        <p className="prose">{modularCase.studio}</p>
      </section>
    </div>
  );
}

function MariaBody() {
  return (
    <div style={{ display: "grid", gap: "2rem" }}>
      <section>
        <h2>Overview</h2>
        <p className="prose">{mariaCase.overview}</p>
      </section>
      <section>
        <h2>Challenge</h2>
        <p className="prose">{mariaCase.challenge}</p>
      </section>
      <section>
        <h2>Objective</h2>
        <p className="prose">{mariaCase.objective}</p>
      </section>
      <section>
        <h2>Solution</h2>
        <p className="prose">{mariaCase.solution}</p>
      </section>
      <section>
        <h2>Campaign</h2>
        <div style={{ display: "grid", gap: "1rem" }}>
          {mariaCase.images.map((image) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={2000}
              height={800}
              style={{ width: "100%", height: "auto", borderRadius: 16 }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
