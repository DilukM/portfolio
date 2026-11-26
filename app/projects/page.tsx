import type { Metadata } from "next";
import { ProjectsSection } from "@/components/projects-section";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Flutter mobile apps, machine learning integrations, and full-stack web platforms built by Diluk Udayakantha.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Diluk Udayakantha",
    description:
      "Explore Flutter mobile apps, machine learning integrations, and full-stack web platforms built by Diluk Udayakantha.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsSection />;
}
