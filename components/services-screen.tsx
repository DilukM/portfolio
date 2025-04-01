"use client"

import { motion } from "framer-motion"
import { Smartphone, Code, Layers, Zap, PenTool, Database } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function ServicesScreen() {
  const services = [
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Flutter App Development",
      description: "Custom cross-platform mobile applications built with Flutter for iOS and Android.",
    },
    {
      icon: <PenTool className="h-10 w-10" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed with the user experience in mind.",
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Backend Integration",
      description: "Seamless integration with Firebase, REST APIs, and other backend services.",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Performance Optimization",
      description: "Optimization for smooth animations and responsive interfaces.",
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: "App Maintenance",
      description: "Ongoing support, updates, and maintenance for existing Flutter applications.",
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Code Review & Consulting",
      description: "Expert review and consultation for your Flutter projects and architecture.",
    },
  ]

  return (
    <div className="h-full overflow-y-auto px-4 py-6">
      <div className="space-y-8">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text inline-block">
            My Services
          </h2>
          <p className="text-muted-foreground mt-2">What I can do for you</p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden">
                <CardHeader className="p-4 pb-2">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white">
                      {service.icon}
                    </div>
                    <CardTitle className="text-base">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-2">
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <div>
          <h3 className="text-lg font-semibold mb-4">My Process</h3>
          <div className="relative">
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
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 mb-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                  {step.number}
                </div>
                <div>
                  <h4 className="text-sm font-medium">{step.title}</h4>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

