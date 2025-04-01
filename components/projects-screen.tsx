"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ExternalLink, Github, ChevronRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function ProjectsScreen() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "E-commerce", "Social", "Utility", "Games"]

  const projects = [
    {
      title: "ShopEase",
      category: "E-commerce",
      image: "/placeholder.svg?height=300&width=200",
      description: "A feature-rich e-commerce app with cart, payments, and order tracking.",
      technologies: ["Flutter", "Firebase", "Stripe"],
      link: "#",
    },
    {
      title: "SocialConnect",
      category: "Social",
      image: "/placeholder.svg?height=300&width=200",
      description: "Social networking app with real-time messaging and content sharing.",
      technologies: ["Flutter", "Firebase", "WebRTC"],
      link: "#",
    },
    {
      title: "TaskMaster",
      category: "Utility",
      image: "/placeholder.svg?height=300&width=200",
      description: "Productivity app with task management, reminders, and analytics.",
      technologies: ["Flutter", "Hive", "Provider"],
      link: "#",
    },
    {
      title: "PuzzleQuest",
      category: "Games",
      image: "/placeholder.svg?height=300&width=200",
      description: "Engaging puzzle game with multiple levels and achievements.",
      technologies: ["Flutter", "Flame", "Google Play Games"],
      link: "#",
    },
    {
      title: "FitTrack",
      category: "Utility",
      image: "/placeholder.svg?height=300&width=200",
      description: "Fitness tracking app with workout plans and progress monitoring.",
      technologies: ["Flutter", "SQLite", "Health API"],
      link: "#",
    },
    {
      title: "FoodDelivery",
      category: "E-commerce",
      image: "/placeholder.svg?height=300&width=200",
      description: "Food delivery app with restaurant listings and order tracking.",
      technologies: ["Flutter", "Firebase", "Google Maps"],
      link: "#",
    },
  ]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="h-full overflow-y-auto px-4 py-6">
      <div className="space-y-6">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text inline-block">
            My Projects
          </h2>
          <p className="text-muted-foreground mt-2">Showcasing my best work</p>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              className={cn(
                "rounded-full text-xs whitespace-nowrap",
                activeCategory === category && "bg-gradient-to-r from-purple-600 to-pink-500",
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-4">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              exit={{ opacity: 0, y: -20 }}
              layout
            >
              <Card className="overflow-hidden border border-border/50 bg-background/50 backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{project.title}</h3>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Button variant="ghost" size="sm" className="text-xs">
                    <Github className="h-3.5 w-3.5 mr-1" /> Code
                  </Button>
                  <Button variant="default" size="sm" className="text-xs bg-gradient-to-r from-purple-600 to-pink-500">
                    <ExternalLink className="h-3.5 w-3.5 mr-1" /> Live Demo
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        <div className="flex justify-center">
          <Button variant="outline" className="group">
            View All Projects
            <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}

