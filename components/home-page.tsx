"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Download,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Smartphone,
  Layers,
  PenTool,
  Database,
  Star,
  Users,
  Calendar,
  Award,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { projects } from "@/data/projects";

export function HomePage() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Flutter Developer";

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  // Analytics data
  const analytics = [
    {
      icon: <Layers className="h-5 w-5" />,
      value: "25+",
      label: "Projects Completed",
    },
    {
      icon: <Users className="h-5 w-5" />,
      value: "10+",
      label: "Happy Clients",
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      value: "2+",
      label: "Years Experience",
    },
  ];

  // Services preview
  const services = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Flutter App Development",
      description:
        "Custom cross-platform mobile applications built with Flutter.",
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces designed with the user experience in mind.",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Integration",
      description:
        "Seamless integration with Firebase, REST APIs, and other backend services.",
    },
  ];

  // Featured projects - using first 2 projects from projects.ts
  const featuredProjects = [
    {
      title: projects[0].title,
      image: projects[0].image,
      description: projects[0].description,
      technologies: projects[0].technologies.map((tech) => tech.name),
      slug: projects[0].slug,
    },
    {
      title: projects[1].title,
      image: projects[1].image,
      description: projects[1].description,
      technologies: projects[1].technologies.map((tech) => tech.name),
      slug: projects[1].slug,
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      image: "/placeholder.svg?height=60&width=60",
      content:
        "Alex delivered an exceptional Flutter app that exceeded our expectations. The UI is beautiful and the performance is outstanding.",
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateCorp",
      image: "/placeholder.svg?height=60&width=60",
      content:
        "Working with Alex was a pleasure. Their expertise in Flutter helped us launch our app ahead of schedule with all the features we needed.",
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, HealthTech",
      image: "/placeholder.svg?height=60&width=60",
      content:
        "The attention to detail and commitment to quality is what sets Alex apart. Our Flutter app has received amazing feedback from users.",
    },
  ];

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 py-16 relative overflow-hidden">
        {/* Glow effects */}

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block"
          >
            <div className="p-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_0_25px_rgba(168,85,247,0.5)]">
              <div className="bg-background dark:bg-slate-800 rounded-full p-1">
                <Image
                  src="/portrait.jpg"
                  alt="Developer Profile"
                  width={150}
                  height={150}
                  className="rounded-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl font-bold mb-2"
          >
            DILUK UDAYAKANTHA
          </motion.h1>

          <motion.div variants={item} className="h-8 mb-4">
            <span className="text-2xl bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text font-bold">
              {typedText}
              <span className="animate-blink">|</span>
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="text-lg text-muted-foreground mb-8 max-w-md mx-auto"
          >
            Building beautiful cross-platform mobile experiences with Flutter
            and Dart
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 justify-center mb-8"
          >
            <Button
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
              onClick={() => {
                // Create a link element
                const link = document.createElement("a");
                // Set the href to the path of your CV file in the public folder
                link.href = "/Diluk Udayakantha .pdf";
                // Set download attribute with filename
                link.download = "Diluk Udayakantha .pdf";
                // Append to body
                document.body.appendChild(link);
                // Trigger click
                link.click();
                // Clean up
                document.body.removeChild(link);
              }}
            >
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
            <Button
              variant="outline"
              className="border-purple-500/50"
              onClick={() => {
                // Find the setActiveSection function from your context or create a custom event
                const event = new CustomEvent("navigate", {
                  detail: { index: 3 },
                });
                window.dispatchEvent(event);
              }}
            >
              My Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center gap-4 mt-4"
          >
            <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-background/80 backdrop-blur-sm border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
              >
                <Link
                  href="https://github.com/DilukM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-background/80 backdrop-blur-sm border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
              >
                <Link
                  href="https://www.linkedin.com/in/dilukm/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Summary Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text inline-block mb-2">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch h-full"
          >
            {/* Image placeholder */}
            <motion.div whileHover={{ scale: 1.03 }} className="flex h-full">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.3)]">
                <Image
                  src="/portrait.jpg"
                  alt="About Me"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-transparent"></div>
              </div>
            </motion.div>

            {/* About content and analytics */}
            <div className="flex flex-col justify-between h-full space-y-6">
              <Card className="border border-purple-500/20 bg-background/70 backdrop-blur-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.2)] flex-grow">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="relative flex-grow">
                    {/* Decorative elements */}
                    <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-500/20 blur-xl"></div>
                    <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-600/20 blur-xl"></div>

                    <p className="text-base leading-relaxed relative z-10 mb-4">
                      I’m a passionate Flutter developer with over 2 years of
                      hands-on experience in building high-performance,
                      cross-platform mobile applications. My expertise lies in
                      crafting intuitive, scalable, and feature-rich apps that
                      not only meet user needs but also align with business
                      goals.
                    </p>

                    <div className="flex justify-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="group rounded-full border-purple-500/30"
                          asChild
                        >
                          <Link href="/about">
                            Learn More About Me
                            <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Analytics mini grid within the about section */}
              <div className="grid grid-cols-3 gap-3">
                {analytics.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex flex-col items-center justify-center p-2 rounded-xl bg-background/70 backdrop-blur-lg border border-purple-500/20 shadow-[0_0_10px_rgba(168,85,247,0.2)]"
                  >
                    <div className="p-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 mb-1 shadow-[0_0_5px_rgba(168,85,247,0.5)]">
                      {stat.icon}
                    </div>
                    <span className="text-xl font-bold">{stat.value}</span>
                    <span className="text-[10px] text-muted-foreground text-center">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text inline-block mb-2">
              My Services
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border border-purple-500/20 bg-background/70 backdrop-blur-lg overflow-hidden shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 mb-4 shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-300 group-hover:scale-110">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="group rounded-full border-purple-500/30"
                asChild
              >
                <Link href="/services">
                  View All Services
                  <ChevronRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text inline-block mb-2">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link href={`/projects/${project.slug}`}>
                  <Card className="h-full overflow-hidden border border-purple-500/20 bg-background/70 backdrop-blur-lg shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-lg font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies
                          .slice(0, 3)
                          .map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="border-purple-500/30"
                            >
                              {tech}
                            </Badge>
                          ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="outline"
                            className="border-purple-500/30"
                          >
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="group rounded-full border-purple-500/30"
                asChild
              >
                <Link href="/projects">
                  View All Projects
                  <ChevronRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text inline-block mb-2">
              Client Testimonials
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ x: 5 }}
                className="group"
              >
                <Card className="border border-purple-500/20 bg-background/70 backdrop-blur-lg overflow-hidden shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500/30">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={60}
                            height={60}
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full p-1 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                          <Star className="h-3 w-3 text-white" fill="white" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center mb-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 text-yellow-500"
                                fill="currentColor"
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm italic mb-3">
                          "{testimonial.content}"
                        </p>
                        <div>
                          <h4 className="text-sm font-semibold">
                            {testimonial.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border border-purple-500/20 bg-gradient-to-br from-purple-600/10 to-pink-500/10 backdrop-blur-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.3)]">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to build your next mobile app?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Let's work together to create a beautiful, high-performance
                  Flutter application that your users will love.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                    asChild
                  >
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
