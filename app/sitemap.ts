import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const BASE_URL = "https://www.dilukudayakantha.com";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/projects",
  "/blog",
  "/contact",
];

// ponytail: blog slugs duplicated from app/blog/[slug]/page.tsx until posts move to data/
const blogSlugs = [
  "flutter-architecture-best-practices",
  "building-performant-flutter-apps",
  "state-management-flutter",
  "custom-animations-flutter",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...projects.map((project) => ({
      url: `${BASE_URL}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
