"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Zap, Coffee } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const stats = [
    { icon: <Code className="h-5 w-5" />, value: "5+", label: "Years Coding" },
    { icon: <Smartphone className="h-5 w-5" />, value: "30+", label: "Apps Built" },
    { icon: <Zap className="h-5 w-5" />, value: "99%", label: "Client Satisfaction" },
    { icon: <Coffee className="h-5 w-5" />, value: "∞", label: "Coffee Consumed" },
  ]

  const skills = [
    { name: "Flutter", level: 95 },
    { name: "Dart", level: 90 },
    { name: "Firebase", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "State Management", level: 90 },
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

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text inline-block mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground">Get to know my story</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Bio */}
          <motion.div variants={item}>
            <Card className="border border-purple-500/20 bg-background/70 backdrop-blur-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.2)]">
              <CardContent className="p-8">
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-500/20 blur-xl"></div>
                  <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-600/20 blur-xl"></div>

                  <p className="text-lg leading-relaxed relative z-10">
                    I'm a passionate Flutter developer with 5+ years of experience building beautiful, high-performance
                    mobile applications. My journey began with native Android development, but I fell in love with
                    Flutter's capabilities and haven't looked back since.
                  </p>
                  <p className="text-lg leading-relaxed mt-6 relative z-10">
                    I specialize in creating intuitive user interfaces and seamless experiences across platforms. When
                    I'm not coding, you'll find me exploring new technologies, contributing to open source, or mentoring
                    aspiring developers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="flex flex-col items-center justify-center p-6 rounded-2xl bg-background/70 backdrop-blur-lg border border-purple-500/20 shadow-[0_0_25px_rgba(168,85,247,0.2)]"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 mb-4 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                    {stat.icon}
                  </div>
                  <span className="text-3xl font-bold mb-1">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={item}>
            <Card className="border border-purple-500/20 bg-background/70 backdrop-blur-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.2)]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience */}
          <motion.div variants={item}>
            <Card className="border border-purple-500/20 bg-background/70 backdrop-blur-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.2)]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Experience</h3>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute top-0 bottom-0 left-3 w-0.5 bg-gradient-to-b from-purple-600 to-pink-500"></div>

                  <div className="space-y-12">
                    {[
                      {
                        period: "2021 - Present",
                        title: "Senior Flutter Developer",
                        company: "TechInnovate Solutions",
                        description:
                          "Leading a team of developers to build enterprise-grade Flutter applications with complex state management and custom UI components.",
                      },
                      {
                        period: "2019 - 2021",
                        title: "Flutter Developer",
                        company: "MobileApp Studios",
                        description:
                          "Developed and maintained multiple Flutter applications with Firebase integration, focusing on performance optimization and responsive design.",
                      },
                      {
                        period: "2018 - 2019",
                        title: "Junior Mobile Developer",
                        company: "CodeCraft Technologies",
                        description:
                          "Started with native Android development and transitioned to Flutter, building UI components and implementing API integrations.",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative pl-10"
                      >
                        <div className="absolute left-0 top-1 h-6 w-6 rounded-full border-4 border-background bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                        <p className="text-sm text-muted-foreground mb-1">{item.period}</p>
                        <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                        <p className="text-base text-muted-foreground mb-2">{item.company}</p>
                        <p className="text-sm">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

