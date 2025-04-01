"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export function HeroScreen() {
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

  return (
    <div className="relative h-full overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-500/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-500/20 blur-3xl"></div>

      <div className="relative h-full flex flex-col items-center justify-center p-6 text-center z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gradient-to-r from-purple-600 to-pink-500">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="Developer Profile"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold mb-2">Alex Morgan</h1>
          <div className="h-8">
            <span className="text-xl bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              {typedText}
              <span className="animate-blink">|</span>
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-8 text-muted-foreground"
        >
          Building beautiful cross-platform mobile experiences with Flutter and Dart
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
            <Download className="mr-2 h-4 w-4" /> Download CV
          </Button>
          <Button variant="outline">
            My Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex gap-4"
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-background/80 backdrop-blur-sm border border-border"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-background/80 backdrop-blur-sm border border-border"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-background/80 backdrop-blur-sm border border-border"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Button>
        </motion.div>

        {/* Swipe indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-xs text-muted-foreground mb-1">Swipe up</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </div>
    </div>
  )
}

