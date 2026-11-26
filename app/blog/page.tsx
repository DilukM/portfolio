import type { Metadata } from "next";
import { BlogSection } from "@/components/blog-section";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical articles and guides on Flutter architecture, performance optimization, state management, and custom animations.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Diluk Udayakantha",
    description:
      "Technical articles and guides on Flutter architecture, performance optimization, state management, and custom animations.",
    url: "/blog",
  },
};

export default function BlogPage() {
  return <BlogSection />;
}
