import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" id="footer">
      <div className="wrap footer-grid">
        <div>
          <p className="wordmark" style={{ margin: 0 }}>
            {site.shortName}
          </p>
          <p className="lede" style={{ marginTop: "0.75rem", fontSize: "1.05rem" }}>
            {site.person}
            <br />
            {site.title}
            <br />
            {site.location}
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
          }}
        >
          <div>
            <p className="eyebrow">Navigate</p>
            <ul style={{ listStyle: "none", margin: "0.75rem 0 0", padding: 0, display: "grid", gap: "0.4rem" }}>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Contact</p>
            <ul style={{ listStyle: "none", margin: "0.75rem 0 0", padding: 0, display: "grid", gap: "0.4rem" }}>
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
            <p className="eyebrow">This site</p>
            <ul style={{ listStyle: "none", margin: "0.75rem 0 0", padding: 0, display: "grid", gap: "0.4rem" }}>
              <li>
                <Link href="/accessibility">Accessibility</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
              <li>
                <a href="/cv.pdf" download>
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p style={{ color: "var(--muted)", fontSize: "0.875rem", margin: 0 }}>
          © {year} {site.person}. Designed as little as possible.
        </p>
      </div>
    </footer>
  );
}
