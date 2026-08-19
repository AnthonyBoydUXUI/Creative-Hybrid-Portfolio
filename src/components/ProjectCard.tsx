import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link className="card" href={`/work/${project.slug}`}>
      <div className="card-media">
        <Image
          src={project.thumbnail}
          alt={project.thumbnailAlt}
          fill
          sizes="(max-width: 700px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="card-body">
        <p className="eyebrow" style={{ margin: 0 }}>
          {project.year} · {project.role}
        </p>
        <h3 style={{ margin: 0, fontSize: "1.25rem", letterSpacing: "-0.03em" }}>{project.title}</h3>
        <p style={{ margin: 0, color: "var(--muted)" }}>{project.subtitle}</p>
      </div>
    </Link>
  );
}
