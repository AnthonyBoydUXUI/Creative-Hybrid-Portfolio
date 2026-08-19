import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected product, campaign, and systems work by Anthony S. Boyd.",
};

export default function WorkPage() {
  return (
    <section style={{ padding: "4rem 0 3rem" }}>
      <div className="wrap">
        <p className="eyebrow">Work</p>
        <h1 className="display">Projects that had to work in the world.</h1>
        <p className="lede" style={{ margin: "1rem 0 2rem" }}>
          Interactive video products, a vehicle onboarding system, and a modular studio toolkit — designed with empathy, constraint, and follow-through.
        </p>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
