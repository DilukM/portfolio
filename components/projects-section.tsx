"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ExternalLink, Github, ChevronRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "E-commerce", "Social", "Utility", "Games"]

  const projects = [
    {
      title: "ShopEase",
      category: "E-commerce",
      image: "/placeholder.svg?height=300&width=500",
      description: "A feature-rich e-commerce app with cart, payments, and order tracking.",
      technologies: ["Flutter", "Firebase", "Stripe"],
      link: "#",
    },
    {
      title: "SocialConnect",
      category: "Social",
      image: "/placeholder.svg?height=300&width=500",
      description: "Social networking app with real-time messaging and content sharing.",
      technologies: ["Flutter", "Firebase", "WebRTC"],
      link: "#",
    },
    {
      title: "TaskMaster",
      category: "Utility",
      image: "/placeholder.svg?height=300&width=500",
      description: "Productivity app with task management, reminders, and analytics.",
      technologies: ["Flutter", "Hive", "Provider"],
      link: "#",
    },
    {
      title: "PuzzleQuest",
      category: "Games",
      image: "/placeholder.svg?height=300&width=500",
      description: "Engaging puzzle game with multiple levels and achievements.",
      technologies: ["Flutter", "Flame", "Google Play Games"],
      link: "#",
    },
    {
      title: "FitTrack",
      category: "Utility",
      image: "/placeholder.svg?height=300&width=500",
      description: "Fitness tracking app with workout plans and progress monitoring.",
      technologies: ["Flutter", "SQLite", "Health API"],
      link: "#",
    },
    {
      title: "FoodDelivery",
      category: "E-commerce",
      image: "/placeholder.svg?height=300&width=500",
      description: "Food delivery app with restaurant listings and order tracking.",
      technologies: ["Flutter", "Firebase", "Google Maps"],
      link: "#",
    },
  ]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text inline-block mb-4">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground">Showcasing my best work</p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.div key={index} whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant={activeCategory === category ? "default" : "outline"}
                className={cn(
                  "rounded-full text-base px-6",
                  activeCategory === category &&
                    "bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]",
                  activeCategory !== category && "border-purple-500/30",
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                layout
                className="group"
              >
                <Card className="h-full overflow-hidden border border-purple-500/20 bg-background/70 backdrop-blur-lg shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                        {project.category}
                      </Badge>
                    </div>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-purple-500/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex justify-between">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" className="rounded-full border-purple-500/30">
                        <Github className="h-4 w-4 mr-2" /> Code
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="sm"
                        className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="lg" className="group rounded-full border-purple-500/30">
              View All Projects
              <ChevronRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

