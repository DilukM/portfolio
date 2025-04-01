"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, Heart, MessageCircle, ChevronRight } from "lucide-react"
import Image from "next/image"

interface ArticleViewProps {
  slug: string
}

export function ArticleView({ slug }: ArticleViewProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [article, setArticle] = useState<any>(null)
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)

  // Simulate loading article data
  useEffect(() => {
    // In a real app, you would fetch the article data based on the slug
    const timer = setTimeout(() => {
      // Mock article data
      setArticle({
        title: "Flutter Architecture Best Practices",
        excerpt: "A comprehensive guide to structuring your Flutter applications for scalability and maintainability.",
        content: `
          <p>When building Flutter applications, having a solid architecture is crucial for maintainability, scalability, and testability. In this article, we'll explore best practices for structuring your Flutter applications.</p>
          
          <h2>The Importance of Architecture</h2>
          <p>A well-designed architecture helps you manage complexity as your app grows. It makes it easier to add new features, fix bugs, and onboard new developers to your project.</p>
          
          <p>Some key benefits of a good architecture include:</p>
          <ul>
            <li>Separation of concerns</li>
            <li>Testability</li>
            <li>Maintainability</li>
            <li>Scalability</li>
          </ul>
          
          <h2>Popular Architecture Patterns</h2>
          <p>There are several architecture patterns commonly used in Flutter development:</p>
          
          <h3>1. MVC (Model-View-Controller)</h3>
          <p>MVC is one of the oldest architecture patterns. It separates your application into three components:</p>
          <ul>
            <li><strong>Model:</strong> Data and business logic</li>
            <li><strong>View:</strong> UI components</li>
            <li><strong>Controller:</strong> Handles user input and updates the model</li>
          </ul>
          
          <h3>2. MVVM (Model-View-ViewModel)</h3>
          <p>MVVM is a popular pattern that works well with Flutter:</p>
          <ul>
            <li><strong>Model:</strong> Data and business logic</li>
            <li><strong>View:</strong> UI components (Flutter widgets)</li>
            <li><strong>ViewModel:</strong> Connects the View and Model, handles UI logic</li>
          </ul>
          
          <h3>3. BLoC (Business Logic Component)</h3>
          <p>BLoC is a pattern developed by Google specifically for Flutter:</p>
          <ul>
            <li>Uses streams for state management</li>
            <li>Separates business logic from UI</li>
            <li>Makes testing easier</li>
          </ul>
          
          <h2>Project Structure</h2>
          <p>A well-organized project structure makes it easier to navigate and maintain your codebase. Here's a recommended structure:</p>
          
          <pre>
          lib/
          ├── app/
          │   ├── app.dart
          │   └── theme.dart
          ├── core/
          │   ├── constants/
          │   ├── errors/
          │   ├── network/
          │   └── utils/
          ├── data/
          │   ├── models/
          │   ├── repositories/
          │   └── services/
          ├── domain/
          │   ├── entities/
          │   └── usecases/
          ├── presentation/
          │   ├── blocs/
          │   ├── pages/
          │   └── widgets/
          └── main.dart
          </pre>
          
          <h2>State Management</h2>
          <p>Choosing the right state management solution is crucial for your Flutter app. Popular options include:</p>
          <ul>
            <li>Provider</li>
            <li>Riverpod</li>
            <li>BLoC/Cubit</li>
            <li>GetX</li>
            <li>MobX</li>
          </ul>
          
          <p>Each has its pros and cons, so choose based on your project's complexity and your team's familiarity.</p>
          
          <h2>Dependency Injection</h2>
          <p>Dependency injection helps make your code more modular and testable. Consider using packages like:</p>
          <ul>
            <li>get_it</li>
            <li>injectable</li>
            <li>provider (for simple cases)</li>
          </ul>
          
          <h2>Conclusion</h2>
          <p>Building Flutter apps with a solid architecture will save you time and headaches in the long run. Start with a clean architecture, use appropriate state management, and follow best practices for code organization.</p>
          
          <p>Remember, the best architecture is one that works for your specific project and team. Don't be afraid to adapt these patterns to fit your needs.</p>
        `,
        author: {
          name: "Alex Morgan",
          image: "/placeholder.svg?height=60&width=60",
          role: "Senior Flutter Developer",
        },
        date: "June 1, 2023",
        readTime: "12 min read",
        image: "/placeholder.svg?height=400&width=800",
        tags: ["Flutter", "Architecture", "Best Practices"],
        relatedArticles: [
          {
            title: "State Management in Flutter",
            excerpt: "Comparing different state management solutions in Flutter and when to use each.",
            image: "/placeholder.svg?height=200&width=400",
            slug: "state-management-flutter",
          },
          {
            title: "Creating Custom Animations in Flutter",
            excerpt: "A deep dive into Flutter's animation system and how to create custom animations.",
            image: "/placeholder.svg?height=200&width=400",
            slug: "custom-animations-flutter",
          },
        ],
      })
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [slug])

  const handleBack = () => {
    router.back()
  }

  const handleShare = () => {
    // In a real app, implement sharing functionality
    alert("Sharing article: " + slug)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full border-4 border-t-purple-600 border-r-transparent border-b-pink-500 border-l-transparent animate-spin mb-4"></div>
          <p className="text-muted-foreground">Loading article...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Floating back button */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="fixed top-16 left-3 z-40">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/70 backdrop-blur-lg border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          onClick={handleBack}
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
      </motion.div>

      {/* Article header */}
      <div className="relative">
        <div className="h-48 md:h-64 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90 z-10"></div>
          <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
        </div>

        <div className="relative -mt-24 z-20 px-3 sm:px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Card className="border border-purple-500/20 bg-background/80 backdrop-blur-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.2)]">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {article.tags.map((tag: string, index: number) => (
                    <Badge
                      key={index}
                      className="bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">{article.title}</h1>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden mr-3">
                      <Image
                        src={article.author.image || "/placeholder.svg"}
                        alt={article.author.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{article.author.name}</p>
                      <p className="text-xs text-muted-foreground">{article.author.role}</p>
                    </div>
                  </div>
                  <div className="sm:ml-auto flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5 mr-1" />
                    {article.date}
                    <span className="mx-2">•</span>
                    <Clock className="h-3.5 w-3.5 mr-1" />
                    {article.readTime}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-between">
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`rounded-full border-purple-500/30 ${liked ? "bg-pink-500/10 text-pink-500" : ""}`}
                      onClick={() => setLiked(!liked)}
                    >
                      <Heart className={`h-4 w-4 mr-1 ${liked ? "fill-pink-500" : ""}`} />
                      Like
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full border-purple-500/30">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      Comment
                    </Button>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`rounded-full border-purple-500/30 ${bookmarked ? "bg-purple-500/10 text-purple-500" : ""}`}
                      onClick={() => setBookmarked(!bookmarked)}
                    >
                      <Bookmark className={`h-4 w-4 mr-1 ${bookmarked ? "fill-purple-500" : ""}`} />
                      Save
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full border-purple-500/30"
                      onClick={handleShare}
                    >
                      <Share2 className="h-4 w-4 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Article content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="px-3 sm:px-4 py-6"
      >
        <Card className="border border-purple-500/20 bg-background/80 backdrop-blur-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.2)]">
          <CardContent className="p-4 sm:p-6">
            <div className="prose prose-invert max-w-none prose-headings:text-purple-300 prose-a:text-pink-400 prose-strong:text-white prose-code:text-pink-300 prose-pre:bg-slate-800 prose-pre:border prose-pre:border-purple-500/20 prose-pre:rounded-lg">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Related articles */}
      <div className="px-3 sm:px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text inline-block mb-4">
            Related Articles
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {article.relatedArticles.map((relatedArticle: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full overflow-hidden border border-purple-500/20 bg-background/80 backdrop-blur-lg shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                <div className="relative h-32 sm:h-40 overflow-hidden">
                  <Image
                    src={relatedArticle.image || "/placeholder.svg"}
                    alt={relatedArticle.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{relatedArticle.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4">{relatedArticle.excerpt}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group p-0 h-auto text-purple-400 hover:text-purple-300"
                    onClick={() => router.push(`/blog/${relatedArticle.slug}`)}
                  >
                    Read Article
                    <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="fixed bottom-20 right-3 z-40 flex flex-col gap-2"
      >
        <Button
          variant="outline"
          size="icon"
          className={`rounded-full bg-background/70 backdrop-blur-lg border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)] h-10 w-10 ${liked ? "bg-pink-500/20" : ""}`}
          onClick={() => setLiked(!liked)}
        >
          <Heart className={`h-4 w-4 ${liked ? "fill-pink-500 text-pink-500" : ""}`} />
          <span className="sr-only">Like</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className={`rounded-full bg-background/70 backdrop-blur-lg border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)] h-10 w-10 ${bookmarked ? "bg-purple-500/20" : ""}`}
          onClick={() => setBookmarked(!bookmarked)}
        >
          <Bookmark className={`h-4 w-4 ${bookmarked ? "fill-purple-500 text-purple-500" : ""}`} />
          <span className="sr-only">Bookmark</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/70 backdrop-blur-lg border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.3)] h-10 w-10"
          onClick={handleShare}
        >
          <Share2 className="h-4 w-4" />
          <span className="sr-only">Share</span>
        </Button>
      </motion.div>
    </div>
  )
}

