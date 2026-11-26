import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn about Diluk Udayakantha's background, full-stack and Flutter engineering skills, work experience, and education.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Diluk Udayakantha | Flutter & Full-Stack Developer",
    description:
      "Learn about Diluk Udayakantha's background, full-stack and Flutter engineering skills, work experience, and education.",
    url: "/about",
  },
};

export default function AboutPage() {
  return <AboutSection />;
}
