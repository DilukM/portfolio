"use client";

import { ProjectView } from "@/components/project-view";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground">
            The project you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return <ProjectView {...project} />;
}
