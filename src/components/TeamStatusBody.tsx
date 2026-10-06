import Image from "next/image";
import { teamStatusCase } from "@/lib/content";

const ts = teamStatusCase;

export function TeamStatusBody() {
  return (
    <div className="ts-body">
      <section>
        <h2>The problem</h2>
        <p className="prose">{ts.problem}</p>
        <p className="prose">{ts.principle}</p>
      </section>

      <section>
        <h2>How it came about</h2>
        <p className="prose">{ts.origin}</p>
        <p className="prose">{ts.experiment}</p>
      </section>

      <section>
        <h2>How it works</h2>
        <p className="prose">{ts.worksIntro}</p>
        <div className="ts-parts">
          {ts.parts.map((part) => (
            <article key={part.title}>
              <h3>{part.title}</h3>
              <p>{part.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Document snapshot</h2>
        <p className="prose">{ts.snapshotNote}</p>
        <figure className="ts-frame">
          <Image
            src="/media/team-status/snapshot.jpg"
            alt="Sanitized Team Status document on a dark field, showing Purpose, Core principle, Collaborator A, B, and C blocks with placeholder tasks, and Conventions. Live repository detail is omitted."
            width={1600}
            height={1000}
            sizes="(max-width: 800px) 100vw, 68rem"
            style={{ width: "100%", height: "auto" }}
          />
          <figcaption>
            Same visual shape as the live operating file, with generic collaborator labels and placeholder content. This is a rendering of the sanitized snapshot — not a screenshot of the repository.
          </figcaption>
        </figure>
        <details className="ts-readable">
          <summary>Readable structure of the sanitized snapshot</summary>
          <div>
            <p>
              <strong>Purpose:</strong> A single, shared, current-state view for all AI engineering collaborators — so status doesn’t have to be manually relayed between sessions. Update this file directly as part of your normal workflow.
            </p>
            <p>
              <strong>Core principle:</strong> if you hit something you can’t resolve yourself, flag it under “Needs a decision” in your own block and keep working on anything else in your queue. Don’t stop and wait. Only interrupt directly for something genuinely urgent.
            </p>
            <p className="ts-snapshot-label">In Progress Right Now</p>
            <p className="ts-hint">Each collaborator owns one block. Edit only your own three bullets — never another collaborator’s heading, bullets, or the blank line between blocks.</p>
            <div className="ts-blocks">
              <article>
                <h3>Collaborator A</h3>
                <p>
                  <strong>Now:</strong> [current task, one line]
                </p>
                <p>
                  <strong>Needs a decision:</strong> none
                </p>
                <p>
                  <strong>Awaiting review:</strong> none
                </p>
              </article>
              <article>
                <h3>Collaborator B</h3>
                <p>
                  <strong>Now:</strong> [current task, one line]
                </p>
                <p>
                  <strong>Needs a decision:</strong> [specific, answerable question — not a vague status check]
                </p>
                <p>
                  <strong>Awaiting review:</strong> [PR reference]
                </p>
              </article>
              <article>
                <h3>Collaborator C</h3>
                <p>
                  <strong>Now:</strong> [current task, one line]
                </p>
                <p>
                  <strong>Needs a decision:</strong> none
                </p>
                <p>
                  <strong>Awaiting review:</strong> none
                </p>
              </article>
            </div>
            <p className="ts-snapshot-label">Conventions</p>
            <ul>
              <li>Edit only the three bullets under your own heading.</li>
              <li>Keep it current, not comprehensive — overwrite “Now” when you start or finish something; don’t append a history.</li>
              <li>PR descriptions and the followups log remain the real record of why something was done — this file is only what’s true right now.</li>
            </ul>
          </div>
        </details>
        <p className="prose">{ts.followupsNote}</p>
      </section>

      <section>
        <h2>What it has caught in practice</h2>
        <div className="ts-parts">
          {ts.caught.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2>Why this is worth showing</h2>
        {ts.why.map((paragraph) => (
          <p className="prose" key={paragraph.slice(0, 48)}>
            {paragraph}
          </p>
        ))}
      </section>
    </div>
  );
}
