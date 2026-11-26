import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
<<<<<<< HEAD
import { blogPosts } from "@/data/blogs";
import { SITE_URL } from "./metadata";
=======

const BASE_URL = "https://www.dilukudayakantha.com";
>>>>>>> 049745fd4ce82afcee26e7e8058a8d5779391240

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/projects",
  "/blog",
  "/contact",
];

<<<<<<< HEAD
=======
// ponytail: blog slugs duplicated from app/blog/[slug]/page.tsx until posts move to data/
const blogSlugs = [
  "flutter-architecture-best-practices",
  "building-performant-flutter-apps",
  "state-management-flutter",
  "custom-animations-flutter",
];

>>>>>>> 049745fd4ce82afcee26e7e8058a8d5779391240
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map((route) => ({
<<<<<<< HEAD
      url: `${SITE_URL}${route}`,
=======
      url: `${BASE_URL}${route}`,
>>>>>>> 049745fd4ce82afcee26e7e8058a8d5779391240
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...projects.map((project) => ({
<<<<<<< HEAD
      url: `${SITE_URL}/projects/${project.slug}`,
=======
      url: `${BASE_URL}/projects/${project.slug}`,
>>>>>>> 049745fd4ce82afcee26e7e8058a8d5779391240
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
<<<<<<< HEAD
    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.publishedTime),
=======
    ...blogSlugs.map((slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified,
>>>>>>> 049745fd4ce82afcee26e7e8058a8d5779391240
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
