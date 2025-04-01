"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Flutter Developer"

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [typedText])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Glow effects */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 -right-20 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16"
        >
          <motion.div variants={item} className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 p-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_0_25px_rgba(168,85,247,0.5)]"
            >
              <div className="bg-background dark:bg-slate-800 rounded-full p-1">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Developer Profile"
                  width={150}
                  height={150}
                  className="rounded-full"
                />
              </div>
            </motion.div>

            <motion.h1 variants={item} className="text-4xl md:text-5xl font-bold mb-2">
              Alex Morgan
            </motion.h1>

            <motion.div variants={item} className="h-8 mb-4">
              <span className="text-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text font-bold">
                {typedText}
                <span className="animate-blink">|</span>
              </span>
            </motion.div>

            <motion.p variants={item} className="text-lg text-muted-foreground mb-8 max-w-md mx-auto md:mx-0">
              Building beautiful cross-platform mobile experiences with Flutter and Dart
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
              <Button variant="outline" className="border-purple-500/50">
                My Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="relative flex-1 w-full max-w-sm">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="relative z-10 bg-background/80 backdrop-blur-lg rounded-2xl border border-border/50 p-6 shadow-[0_0_25px_rgba(168,85,247,0.2)]"
            >
              <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>

              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Mobile App Screenshot"
                width={300}
                height={400}
                className="rounded-lg mb-4 w-full"
              />

              <h3 className="text-lg font-semibold mb-2">Featured Project</h3>
              <p className="text-sm text-muted-foreground mb-4">
                A beautiful e-commerce app built with Flutter and Firebase
              </p>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="rounded-full text-xs">
                  Flutter
                </Button>
                <Button variant="outline" size="sm" className="rounded-full text-xs">
                  Firebase
                </Button>
                <Button variant="outline" size="sm" className="rounded-full text-xs">
                  GetX
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute top-1/4 -right-16 bg-background/80 backdrop-blur-lg rounded-2xl border border-border/50 p-4 shadow-[0_0_25px_rgba(168,85,247,0.2)] hidden md:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">Available for hire</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-1/4 -left-16 bg-background/80 backdrop-blur-lg rounded-2xl border border-border/50 p-4 shadow-[0_0_25px_rgba(168,85,247,0.2)] hidden md:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-sm font-medium">5+ years experience</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center md:justify-start gap-4 mt-8"
        >
          <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </motion.div>
          <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

