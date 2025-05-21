"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Code,
  Layers,
  Zap,
  PenTool,
  Database,
  Globe,
  BarChart,
  Figma,
  Brain,
  Server,
  Cpu,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function ServicesSection() {
  const services = [
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile App Development",
      description:
        "Custom cross-platform mobile applications developed using Flutter and Dart for iOS and Android devices.",
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Web App Development",
      description:
        "Responsive and interactive web applications built with modern frameworks like React, Next.js and more.",
    },
    {
      icon: <PenTool className="h-12 w-12" />,
      title: "UI/UX Design",
      description:
        "Stunning and user-centric mobile app designs focused on seamless user experience and visual appeal.",
    },
    {
      icon: <Figma className="h-12 w-12" />,
      title: "Prototype Design",
      description:
        "Creating interactive prototypes and wireframes that visualize your app's flow and functionality before development.",
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: "ML Integration",
      description:
        "Incorporating machine learning models into applications for smart features like image recognition and predictive analytics.",
    },
    {
      icon: <Cpu className="h-12 w-12" />,
      title: "AI-Powered Solutions",
      description:
        "Building intelligent applications with AI capabilities for automation, data analysis, and personalized experiences.",
    },

    {
      icon: <Zap className="h-12 w-12" />,
      title: "Performance Optimization",
      description:
        "Enhancing app speed, responsiveness, and animation smoothness for a high-performance user experience.",
    },
    {
      icon: <Layers className="h-12 w-12" />,
      title: "App Maintenance",
      description:
        "Continuous support, bug fixes, and version upgrades to keep your apps up-to-date and secure.",
    },
    {
      icon: <BarChart className="h-12 w-12" />,
      title: "Data Visualization",
      description:
        "Converting complex data into intuitive charts, graphs, and interactive dashboards for better insights and decision making.",
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "Code Review & Consulting",
      description:
        "Professional code audits, performance tuning, and architectural guidance for your development projects.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="min-h-screen py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text inline-block mb-4">
            My Services
          </h2>
          <p className="text-xl text-muted-foreground">What I can do for you</p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full border border-purple-500/20 bg-background/70 backdrop-blur-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 mb-6 shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card className="border border-purple-500/20 bg-background/70 backdrop-blur-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.2)]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-8 text-center">
                My Development Process
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    number: "01",
                    title: "Discovery",
                    description: "Understanding your needs and requirements",
                  },
                  {
                    number: "02",
                    title: "Design",
                    description: "Creating wireframes and visual designs",
                  },
                  {
                    number: "03",
                    title: "Development",
                    description: "Building the application with Flutter",
                  },
                  {
                    number: "04",
                    title: "Testing",
                    description: "Ensuring quality and performance",
                  },
                  {
                    number: "05",
                    title: "Deployment",
                    description: "Launching to app stores",
                  },
                  {
                    number: "06",
                    title: "Support",
                    description: "Ongoing maintenance and updates",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                      <span className="text-xl font-bold">{step.number}</span>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
