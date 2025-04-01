"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Zap, Coffee } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutScreen() {
  const stats = [
    { icon: <Code className="h-4 w-4" />, value: "5+", label: "Years Coding" },
    { icon: <Smartphone className="h-4 w-4" />, value: "30+", label: "Apps Built" },
    { icon: <Zap className="h-4 w-4" />, value: "99%", label: "Client Satisfaction" },
    { icon: <Coffee className="h-4 w-4" />, value: "∞", label: "Coffee Consumed" },
  ]

  const skills = [
    { name: "Flutter", level: 95 },
    { name: "Dart", level: 90 },
    { name: "Firebase", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "State Management", level: 90 },
  ]

  return (
    <div className="h-full overflow-y-auto px-4 py-6">
      <div className="space-y-8">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text inline-block">
            About Me
          </h2>
          <p className="text-muted-foreground mt-2">Get to know my story</p>
        </div>

        {/* Bio */}
        <Card className="border border-border/50 bg-background/50 backdrop-blur-sm">
          <CardContent className="p-4">
            <p className="text-sm leading-relaxed">
              I'm a passionate Flutter developer with 5+ years of experience building beautiful, high-performance mobile
              applications. My journey began with native Android development, but I fell in love with Flutter's
              capabilities and haven't looked back since.
            </p>
            <p className="text-sm leading-relaxed mt-4">
              I specialize in creating intuitive user interfaces and seamless experiences across platforms. When I'm not
              coding, you'll find me exploring new technologies, contributing to open source, or mentoring aspiring
              developers.
            </p>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50"
            >
              <div className="p-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 mb-2">{stat.icon}</div>
              <span className="text-xl font-bold">{stat.value}</span>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-lg font-semibold mb-4">My Skills</h3>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-1"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-xs text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Experience */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Experience</h3>
          <div className="relative border-l border-border pl-4 space-y-6">
            {[
              {
                period: "2021 - Present",
                title: "Senior Flutter Developer",
                company: "TechInnovate Solutions",
              },
              {
                period: "2019 - 2021",
                title: "Flutter Developer",
                company: "MobileApp Studios",
              },
              {
                period: "2018 - 2019",
                title: "Junior Mobile Developer",
                company: "CodeCraft Technologies",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-6 mt-1.5 h-3 w-3 rounded-full border-2 border-background bg-gradient-to-r from-purple-600 to-pink-500" />
                <p className="text-xs text-muted-foreground">{item.period}</p>
                <h4 className="text-sm font-medium">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.company}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

