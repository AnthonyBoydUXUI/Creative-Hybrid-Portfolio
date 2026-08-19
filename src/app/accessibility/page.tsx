import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "How this site is designed to be usable, perceivable, and operable.",
};

export default function AccessibilityPage() {
  return (
    <section style={{ padding: "4rem 0 3rem" }}>
      <div className="wrap prose">
        <p className="eyebrow">Inclusive by default</p>
        <h1 className="display">Accessibility</h1>
        <p>
          This site is built to meet WCAG 2.2 Level AA. Design follows a simple model: one column of meaning, obvious
          controls, honest labels, and no motion that the person did not ask for.
        </p>
        <h2>What you can expect</h2>
        <ul>
          <li>Semantic headings, landmarks, and skip-to-content.</li>
          <li>Visible focus, keyboard access, and 44px-class targets.</li>
          <li>Color contrast of at least 4.5:1 for body text in light and dark appearance.</li>
          <li>Text alternatives for images, and a transcript for the Aria voice piece.</li>
          <li>Reduced motion respected via <code>prefers-reduced-motion</code>.</li>
          <li>Forms with labels, required fields, and live status.</li>
        </ul>
        <h2>Known limits</h2>
        <p>
          Campaign stills from Lioness and Maria are client artwork and contain small type that is part of the artifact,
          not the page UI. If you need a described version of any image, write and I will provide one.
        </p>
        <h2>Contact</h2>
        <p>
          Accessibility is a conversation. Email{" "}
          <a href={`mailto:${site.email}?subject=Accessibility`}>{site.email}</a> or use the{" "}
          <Link href="/contact">contact form</Link>.
        </p>
      </div>
    </section>
  );
}
