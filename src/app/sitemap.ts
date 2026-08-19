import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/about", "/contact", "/cv", "/accessibility", "/privacy"];
  const projectPages = projects.map((project) => `/work/${project.slug}`);
  return [...pages, ...projectPages].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));
}
