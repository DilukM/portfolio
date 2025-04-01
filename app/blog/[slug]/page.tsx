"use client";

import { ArticleView } from "@/components/article-view";
import { StateManagementArticleView } from "@/components/state-management-article-view";
import { CustomAnimationsArticleView } from "@/components/custom-animations-article-view";
import { useParams } from "next/navigation";
import { PerformanceArticleView } from "@/components/performance-article-view";

export default function ArticlePage() {
  const { slug } = useParams();

  // Convert slug to string if it's an array
  const slugString = Array.isArray(slug) ? slug[0] : (slug as string);

  // Render different article views based on the slug
  switch (slugString) {
    case "building-performant-flutter-apps":
      return <PerformanceArticleView slug={slugString} />;
    case "state-management-flutter":
      return <StateManagementArticleView slug={slugString} />;
    case "custom-animations-flutter":
      return <CustomAnimationsArticleView slug={slugString} />;
    case "flutter-architecture-best-practices":
      return <ArticleView slug={slugString} />;
    default:
      return <ArticleView slug={slugString} />;
  }
}
