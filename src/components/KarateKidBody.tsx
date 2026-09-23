import Image from "next/image";
import { karateKidCase } from "@/lib/content";
import { BalanceDemo, MemoryDemo, PrecisionDemo } from "@/components/KarateKidDemos";

const kk = karateKidCase;

function Frame({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <figure className="kk-frame">
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={900}
        priority={priority}
        sizes="(max-width: 800px) 100vw, 68rem"
        style={{ width: "100%", height: "auto" }}
      />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

function Flow({ items }: { items: string[] }) {
  return (
    <ol className="kk-flow">
      {items.map((item) => (
        <li key={item}>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export function KarateKidBody() {
  return (
    <div className="kk-body">
      <p className="kk-links">
        <a className="btn btn-primary" href={kk.finishedCampaign} target="_blank" rel="noreferrer">
          Explore the finished campaign
        </a>
        <a className="btn btn-ghost" href={kk.finishedVideo} target="_blank" rel="noreferrer">
          Watch the final production
        </a>
      </p>
      <p className="kk-link-note">Finished campaign references from IMDb Creative Studio.</p>

      <section>
        <h2>From watching to participating</h2>
        <p className="prose">{kk.opportunity}</p>
      </section>

      <section>
        <h2>Train like a Karate Kid</h2>
        <p className="prose">{kk.systemIntro}</p>
        <Flow
          items={[
            "IMDb",
            "Enter training",
            "Choose challenge",
            "Precision",
            "Balance",
            "Memory",
            "Complete training",
            "Reward / progression",
          ]}
        />
        <Frame
          src={kk.images.gameSelect.src}
          alt={kk.images.gameSelect.alt}
          caption="Original April 2025 game select. Later challenges stay inactive until earlier drills are complete."
        />
        <div className="kk-pair">
          <Frame
            src={kk.images.celebrationKick.src}
            alt={kk.images.celebrationKick.alt}
            caption="Completion · kick"
          />
          <Frame
            src={kk.images.celebrationBelt.src}
            alt={kk.images.celebrationBelt.alt}
            caption="Completion · earned belt"
          />
        </div>
      </section>

      <section>
        <h2>Designing how the experience plays</h2>
        <p className="prose">{kk.mechanicsLead}</p>
        <p className="kk-demo-disclaimer">
          The three boards below are portfolio demonstrations of the mechanics. They are not the shipped IMDb unit.
        </p>

        <article className="kk-mechanic">
          <h3>Precision</h3>
          <p className="eyebrow">{kk.precision.principle}</p>
          <ul>
            {kk.precision.points.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="kk-pair">
            <Frame src={kk.images.precisionIntro.src} alt={kk.images.precisionIntro.alt} caption="Intro" />
            <Frame src={kk.images.precisionPlay.src} alt={kk.images.precisionPlay.alt} caption="Active play" />
            <Frame src={kk.images.precisionWin.src} alt={kk.images.precisionWin.alt} caption="Success" />
            <Frame src={kk.images.precisionLose.src} alt={kk.images.precisionLose.alt} caption="Failure / retry" />
          </div>
          <PrecisionDemo />
        </article>

        <article className="kk-mechanic">
          <h3>Balance</h3>
          <p className="eyebrow">{kk.balance.principle}</p>
          <ul>
            {kk.balance.points.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="kk-pair">
            <Frame src={kk.images.balanceIntro.src} alt={kk.images.balanceIntro.alt} caption="Intro" />
            <Frame src={kk.images.balancePlay.src} alt={kk.images.balancePlay.alt} caption="Active play" />
            <Frame src={kk.images.balanceWin.src} alt={kk.images.balanceWin.alt} caption="Success" />
            <Frame src={kk.images.balanceLose.src} alt={kk.images.balanceLose.alt} caption="Failure / retry" />
          </div>
          <BalanceDemo />
        </article>

        <article className="kk-mechanic">
          <h3>Memory</h3>
          <p className="eyebrow">{kk.memory.principle}</p>
          <ul>
            {kk.memory.points.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="prose">{kk.memory.note}</p>
          <div className="kk-pair">
            <Frame src={kk.images.memoryIntro.src} alt={kk.images.memoryIntro.alt} caption="Intro" />
            <Frame src={kk.images.memoryRemember.src} alt={kk.images.memoryRemember.alt} caption="Remember once" />
            <Frame src={kk.images.memoryCorrect.src} alt={kk.images.memoryCorrect.alt} caption="Correct" />
            <Frame src={kk.images.memoryIncorrect.src} alt={kk.images.memoryIncorrect.alt} caption="Incorrect" />
            <Frame src={kk.images.memoryWin.src} alt={kk.images.memoryWin.alt} caption="Success" />
            <Frame src={kk.images.memoryLose.src} alt={kk.images.memoryLose.alt} caption="Failure / retry" />
          </div>
          <MemoryDemo />
        </article>
      </section>

      <section>
        <h2>Game system, not static screens</h2>
        <p className="prose">
          The work was a state machine: select, instruct, play, respond, retry or advance. Layouts were expressions of those states — not a gallery of isolated posters.
        </p>
        <Flow items={kk.states} />
      </section>

      <section>
        <h2>Designing beyond the screen</h2>
        <div className="prose">
          {kk.assetsLead.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Flow
          items={["Source art", "Asset separation", "Frame / sprite preparation", "Interaction states", "Implementation"]}
        />
        <figure className="kk-frame kk-sprite">
          <Image
            src={kk.images.handSprite.src}
            alt={kk.images.handSprite.alt}
            width={2000}
            height={215}
            sizes="(max-width: 800px) 100vw, 68rem"
            style={{ width: "100%", height: "auto" }}
          />
          <figcaption>Hand-pose strip</figcaption>
        </figure>
        <div className="kk-objects">
          <Frame src={kk.images.studioDummy.src} alt={kk.images.studioDummy.alt} caption="Wooden dummy" />
          <Frame src={kk.images.studioBall.src} alt={kk.images.studioBall.alt} caption="Balance ball" />
          <Frame src={kk.images.studioStick.src} alt={kk.images.studioStick.alt} caption="Staff" />
        </div>
        <Frame
          src={kk.images.sourceHands.src}
          alt={kk.images.sourceHands.alt}
          caption="Wireframe hands"
        />
      </section>

      <section>
        <h2>The same training. Different input.</h2>
        <p className="prose">{kk.responsive}</p>
        <div className="kk-pair">
          <Frame
            src={kk.images.desktopExpanded.src}
            alt={kk.images.desktopExpanded.alt}
            caption="Desktop · expanded Video Wall+"
          />
          <Frame
            src={kk.images.desktopCollapsed.src}
            alt={kk.images.desktopCollapsed.alt}
            caption="Desktop · collapsed unit"
          />
        </div>
        <div className="kk-pair">
          <Frame
            src={kk.images.mobileSelectPrecision.src}
            alt={kk.images.mobileSelectPrecision.alt}
            caption="Mobile · select and Precision"
          />
          <Frame
            src={kk.images.mobileBalanceMemory.src}
            alt={kk.images.mobileBalanceMemory.alt}
            caption="Mobile · Balance, Memory, completion"
          />
        </div>
        <div className="kk-split">
          <div>
            <h3>Desktop</h3>
            <ul>
              <li>Keyboard / directional input</li>
              <li>Larger interactive canvas</li>
              <li>Expanded Video Wall+ environment</li>
            </ul>
          </div>
          <div>
            <h3>Mobile</h3>
            <ul>
              <li>Touch interaction at the thumb edge</li>
              <li>Same three-game path in a tighter canvas</li>
              <li>IMDb rail remains in view beneath the unit</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>From initial build to production</h2>
        <p className="prose">{kk.production}</p>
        <Frame
          src={kk.images.keyArt.src}
          alt={kk.images.keyArt.alt}
          caption="Public film key art. Final production reference — not the April 2025 interactive build."
        />
        <div className="kk-embed">
          <p className="eyebrow">Final production · IMDb Creative Studio</p>
          <div className="kk-video">
            <iframe
              src={kk.finishedVideoEmbed}
              title="Karate Kid: Legends finished campaign video from IMDb Creative Studio"
              allow="fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <p>
            <a href={kk.finishedVideo} target="_blank" rel="noreferrer">
              Watch the final production on Vimeo
            </a>
          </p>
        </div>
      </section>

      <section>
        <h2>Project timeline</h2>
        <ol className="kk-timeline">
          <li>
            <p className="eyebrow">April 2025</p>
            <h3>Initial Experience</h3>
            <p>Concept + UX + game mechanics</p>
          </li>
          <li>
            <p className="eyebrow">April 2025</p>
            <h3>Design × Design Technology</h3>
            <p>Interaction build + asset production</p>
          </li>
          <li>
            <p className="eyebrow">2025</p>
            <h3>Continued Production</h3>
            <p>IMDb Creative Studio Design + Design Technology</p>
          </li>
          <li>
            <p className="eyebrow">2025</p>
            <h3>Campaign Launch</h3>
            <p>Final international campaign</p>
          </li>
          <li>
            <p className="eyebrow">2026</p>
            <h3>Silver ADDY Recognition</h3>
            <p>Resulting campaign</p>
          </li>
        </ol>
      </section>

      <section>
        <h2>Impact of the finished campaign</h2>
        <p className="prose">{kk.impactIntro}</p>
        <div className="kk-impact">
          {kk.impactStats.map((item) => (
            <div key={item.label}>
              <p className="display" style={{ fontSize: "2.4rem", margin: 0 }}>
                {item.stat}
              </p>
              <p style={{ margin: "0.4rem 0 0", color: "var(--muted)" }}>{item.label}</p>
            </div>
          ))}
        </div>
        <blockquote className="kk-quote">
          {kk.impactQuote.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <footer>
            <cite>
              <a href={kk.finishedCampaign} target="_blank" rel="noreferrer">
                {kk.impactSourceLabel}
              </a>
            </cite>
            <span> · {kk.impactCategory}</span>
          </footer>
        </blockquote>
      </section>

      <section>
        <h2>My contribution</h2>
        <p className="eyebrow">April 2025</p>
        <ul className="kk-contrib">
          {kk.contributions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

    </div>
  );
}
