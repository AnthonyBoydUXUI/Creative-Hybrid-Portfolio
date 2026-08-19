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
        <p className="eyebrow card-meta">
          {project.year} · {project.role}
        </p>
        <h3 className="card-title">{project.title}</h3>
        <p className="card-sub">{project.subtitle}</p>
      </div>
    </Link>
  );
}
