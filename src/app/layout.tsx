import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { SkipLink } from "@/components/SkipLink";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeScript } from "@/components/ThemeScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.person} — ${site.title}`,
    template: `%s — ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.person, url: site.url }],
  creator: site.person,
  keywords: [
    "Anthony Boyd",
    "product designer",
    "service designer",
    "UX",
    "IMDb",
    "Los Angeles",
    "OurnAI",
  ],
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.person} — ${site.title}`,
    description: site.description,
    images: [{ url: "/media/portrait-fashion.jpg", width: 1024, height: 1024, alt: site.person }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.person} — ${site.title}`,
    description: site.description,
    images: ["/media/portrait-fashion.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f1eb" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e0c" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.person,
  jobTitle: site.title,
  url: site.url,
  email: site.email,
  telephone: site.phoneHref,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    addressCountry: "US",
  },
  sameAs: [site.linkedin, site.github],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SkipLink />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
