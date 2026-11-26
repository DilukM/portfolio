import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleView } from "@/components/article-view";
import { StateManagementArticleView } from "@/components/state-management-article-view";
import { CustomAnimationsArticleView } from "@/components/custom-animations-article-view";
import { PerformanceArticleView } from "@/components/performance-article-view";
import { blogPosts } from "@/data/blogs";
import { SITE_URL } from "@/app/metadata";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Diluk Udayakantha`,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedTime,
      authors: ["Diluk Udayakantha"],
      tags: post.tags,
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Diluk Udayakantha`,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.image}`,
    datePublished: post.publishedTime,
    dateModified: post.publishedTime,
    url: `${SITE_URL}/blog/${post.slug}`,
    keywords: post.tags.join(", "),
    author: {
      "@type": "Person",
      name: "Diluk Udayakantha",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Diluk Udayakantha",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  let view;
  switch (slug) {
    case "building-performant-flutter-apps":
      view = <PerformanceArticleView slug={slug} />;
      break;
    case "state-management-flutter":
      view = <StateManagementArticleView slug={slug} />;
      break;
    case "custom-animations-flutter":
      view = <CustomAnimationsArticleView slug={slug} />;
      break;
    case "flutter-architecture-best-practices":
      view = <ArticleView slug={slug} />;
      break;
    default:
      notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {view}
    </>
  );
}
