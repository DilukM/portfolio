"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ChevronRight, Tag } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function BlogScreen() {
  const blogPosts = [
    {
      title: "Building Performant Flutter Apps",
      excerpt: "Tips and tricks for optimizing Flutter applications for better performance.",
      image: "/placeholder.svg?height=200&width=400",
      date: "May 15, 2023",
      readTime: "5 min read",
      tags: ["Flutter", "Performance"],
    },
    {
      title: "State Management in Flutter",
      excerpt: "Comparing different state management solutions in Flutter and when to use each.",
      image: "/placeholder.svg?height=200&width=400",
      date: "April 22, 2023",
      readTime: "8 min read",
      tags: ["Flutter", "State Management"],
    },
    {
      title: "Creating Custom Animations in Flutter",
      excerpt: "A deep dive into Flutter's animation system and how to create custom animations.",
      image: "/placeholder.svg?height=200&width=400",
      date: "March 10, 2023",
      readTime: "6 min read",
      tags: ["Flutter", "Animations"],
    },
    {
      title: "Flutter vs React Native in 2023",
      excerpt: "An honest comparison between Flutter and React Native for mobile development.",
      image: "/placeholder.svg?height=200&width=400",
      date: "February 5, 2023",
      readTime: "10 min read",
      tags: ["Flutter", "React Native", "Comparison"],
    },
  ]

  return (
    <div className="h-full overflow-y-auto px-4 py-6">
      <div className="space-y-6">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text inline-block">
            My Blog
          </h2>
          <p className="text-muted-foreground mt-2">Thoughts and insights on Flutter development</p>
        </div>

        {/* Featured post */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="overflow-hidden border border-border/50 bg-background/50 backdrop-blur-sm">
            <div className="relative h-48 overflow-hidden">
              <div className="absolute top-2 left-2 z-10">
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-500">Featured</Badge>
              </div>
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Flutter Architecture"
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg mb-2">Flutter Architecture Best Practices</h3>
              <p className="text-sm text-muted-foreground mb-3">
                A comprehensive guide to structuring your Flutter applications for scalability and maintainability.
              </p>
              <div className="flex items-center text-xs text-muted-foreground gap-4">
                <div className="flex items-center">
                  <Calendar className="h-3.5 w-3.5 mr-1" />
                  June 1, 2023
                </div>
                <div className="flex items-center">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  12 min read
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button variant="default" size="sm" className="w-full bg-gradient-to-r from-purple-600 to-pink-500">
                Read Article
              </Button>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Blog posts */}
        <div className="grid grid-cols-1 gap-4">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border border-border/50 bg-background/50 backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row">
                  <div className="relative h-32 sm:w-32 sm:h-auto overflow-hidden">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1 p-4">
                    <h3 className="font-semibold mb-1">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {post.tags.map((tag, tagIndex) => (
                        <div key={tagIndex} className="flex items-center text-xs text-muted-foreground">
                          <Tag className="h-3 w-3 mr-0.5" />
                          {tag}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-muted-foreground gap-2">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-0.5" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-0.5" />
                          {post.readTime}
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-xs p-0 h-auto">
                        Read <ChevronRight className="h-3 w-3 ml-0.5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <div className="flex justify-center">
          <Button variant="outline" className="group">
            View All Articles
            <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}

