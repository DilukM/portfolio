"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ChevronRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function BlogSection() {
  const router = useRouter()

  const blogPosts = [
    {
      title: "Building Performant Flutter Apps",
      excerpt: "Tips and tricks for optimizing Flutter applications for better performance.",
      image: "/placeholder.svg?height=200&width=400",
      date: "May 15, 2023",
      readTime: "5 min read",
      tags: ["Flutter", "Performance"],
      slug: "building-performant-flutter-apps",
    },
    {
      title: "State Management in Flutter",
      excerpt: "Comparing different state management solutions in Flutter and when to use each.",
      image: "/placeholder.svg?height=200&width=400",
      date: "April 22, 2023",
      readTime: "8 min read",
      tags: ["Flutter", "State Management"],
      slug: "state-management-flutter",
    },
    {
      title: "Creating Custom Animations in Flutter",
      excerpt: "A deep dive into Flutter's animation system and how to create custom animations.",
      image: "/placeholder.svg?height=200&width=400",
      date: "March 10, 2023",
      readTime: "6 min read",
      tags: ["Flutter", "Animations"],
      slug: "custom-animations-flutter",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const handleReadArticle = (slug: string) => {
    router.push(`/blog/${slug}`)
  }

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text inline-block mb-4">
            My Blog
          </h2>
          <p className="text-xl text-muted-foreground">Thoughts and insights on Flutter development</p>
        </motion.div>

        {/* Featured post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -10 }}
          className="mb-12 group cursor-pointer"
          onClick={() => handleReadArticle("flutter-architecture-best-practices")}
        >
          <Card className="overflow-hidden border border-purple-500/20 bg-background/70 backdrop-blur-lg shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
            <div className="relative h-64 overflow-hidden">
              <div className="absolute top-4 left-4 z-10">
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                  Featured
                </Badge>
              </div>
              <Image
                src="/placeholder.svg?height=300&width=800"
                alt="Flutter Architecture"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Flutter Architecture Best Practices</h3>
              <p className="text-lg text-muted-foreground mb-6">
                A comprehensive guide to structuring your Flutter applications for scalability and maintainability.
                Learn how to organize your code, manage state effectively, and create reusable components.
              </p>
              <div className="flex items-center text-sm text-muted-foreground gap-6 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  June 1, 2023
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  12 min read
                </div>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  Read Article
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Blog posts */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => handleReadArticle(post.slug)}
            >
              <Card className="h-full overflow-hidden border border-purple-500/20 bg-background/70 backdrop-blur-lg shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-1">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="border-purple-500/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full group rounded-full border-purple-500/30 hover:bg-purple-500/10"
                  >
                    Read Article
                    <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="lg" className="group rounded-full border-purple-500/30">
              View All Articles
              <ChevronRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

