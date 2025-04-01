import { ArticleView } from "@/components/article-view"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  return <ArticleView slug={params.slug} />
}

