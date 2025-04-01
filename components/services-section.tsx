"use client"

import { motion } from "framer-motion"
import { Smartphone, Code, Layers, Zap, PenTool, Database } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Flutter App Development",
      description: "Custom cross-platform mobile applications built with Flutter for iOS and Android.",
    },
    {
      icon: <PenTool className="h-12 w-12" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed with the user experience in mind.",
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: "Backend Integration",
      description: "Seamless integration with Firebase, REST APIs, and other backend services.",
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Performance Optimization",
      description: "Optimization for smooth animations and responsive interfaces.",
    },
    {
      icon: <Layers className="h-12 w-12" />,
      title: "App Maintenance",
      description: "Ongoing support, updates, and maintenance for existing Flutter applications.",
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "Code Review & Consulting",
      description: "Expert review and consultation for your Flutter projects and architecture.",
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

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text inline-block mb-4">
            My Services
          </h2>
          <p className="text-xl text-muted-foreground">What I can do for you</p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item} whileHover={{ y: -10 }} className="group">
              <Card className="h-full border border-purple-500/20 bg-background/70 backdrop-blur-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 mb-6 shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="border border-purple-500/20 bg-background/70 backdrop-blur-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.2)]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-8 text-center">My Development Process</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { number: "01", title: "Discovery", description: "Understanding your needs and requirements" },
                  { number: "02", title: "Design", description: "Creating wireframes and visual designs" },
                  { number: "03", title: "Development", description: "Building the application with Flutter" },
                  { number: "04", title: "Testing", description: "Ensuring quality and performance" },
                  { number: "05", title: "Deployment", description: "Launching to app stores" },
                  { number: "06", title: "Support", description: "Ongoing maintenance and updates" },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center text-center p-6 rounded-2xl bg-background/50 backdrop-blur-lg border border-purple-500/20"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-xl mb-4 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                      {step.number}
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

