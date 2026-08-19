import Link from "next/link";

export default function NotFound() {
  return (
    <section style={{ padding: "5rem 0" }}>
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1 className="display">This page isn’t here.</h1>
        <p className="lede">The link may be old. The work is still on this site.</p>
        <p style={{ marginTop: "1.25rem" }}>
          <Link className="btn btn-primary" href="/">
            Go home
          </Link>
        </p>
      </div>
    </section>
  );
}
