"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Zap, Coffee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const stats = [
    { icon: <Code className="h-5 w-5" />, value: "2+", label: "Years Coding" },
    {
      icon: <Smartphone className="h-5 w-5" />,
      value: "25+",
      label: "Apps Built",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      value: "99%",
      label: "Client Satisfaction",
    },
    {
      icon: <Coffee className="h-5 w-5" />,
      value: "∞",
      label: "Coffee Consumed",
    },
  ];

  const skills = [
    { name: "Flutter", level: 95 },
    { name: "Dart", level: 90 },
    { name: "Firebase", level: 85 },
    { name: "UI/UX Design", level: 80 },
    { name: "State Management", level: 90 },
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
            About Me
          </h2>
          <p className="text-xl text-muted-foreground">Get to know my story</p>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mb-16"
        >
          <Card className="border border-purple-500/20 bg-background/70 backdrop-blur-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.2)]">
            <CardContent className="p-8">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-500/20 blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-600/20 blur-xl"></div>

                <p className="text-lg leading-relaxed relative z-10">
                  I’m a passionate Flutter developer with over 2 years of
                  hands-on experience in building high-performance,
                  cross-platform mobile applications. My expertise lies in
                  crafting intuitive, scalable, and feature-rich apps that not
                  only meet user needs but also align with business goals.
                </p>
                <p className="text-lg leading-relaxed mt-6 relative z-10">
                  Currently, I specialize in developing AI-integrated mobile
                  applications, working closely with startups and international
                  clients to bring intelligent, data-driven solutions to life.
                  From seamless UI/UX design to backend integration, and from
                  RESTful API connectivity to AI/ML model deployment, I ensure
                  every app I build is future-ready and user-centric.
                </p>
                <p className="text-lg leading-relaxed mt-6 relative z-10">
                  With a strong foundation in Dart, Firebase, REST APIs, and
                  machine learning model integration, I’m committed to pushing
                  the boundaries of mobile app development. I thrive in
                  fast-paced environments and enjoy collaborating with diverse
                  teams to deliver impactful tech solutions.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center justify-center p-6 rounded-2xl bg-background/70 backdrop-blur-lg border border-purple-500/20 shadow-[0_0_25px_rgba(168,85,247,0.2)]"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 mb-4 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  {stat.icon}
                </div>
                <span className="text-3xl font-bold mb-1">{stat.value}</span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="mb-16"
        >
          <Card className="border border-purple-500/20 bg-background/70 backdrop-blur-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.2)]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + index * 0.1,
                        }}
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Card className="border border-purple-500/20 bg-background/70 backdrop-blur-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.2)]">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Experience</h3>
              <div className="relative">
                {/* Timeline*/}
                <div className="absolute top-0 bottom-0 left-3 w-0.5 bg-gradient-to-b from-purple-600 to-pink-500"></div>

                <div className="space-y-12">
                  {[
                    {
                      period: "Nov 2024 - Present",
                      title: "Freelance Flutter Developer",
                      company: "Self-Employed",
                      description:
                        "Leading a team of developers to build enterprise-grade Flutter applications with complex state management and custom UI components.",
                    },
                    {
                      period: "Apr 2024 - Nov 2024",
                      title: "Intern Flutter Developer",
                      company: "Silicon Radon Networks",
                      description:
                        "Developed and maintained multiple Flutter applications with Firebase integration, focusing on performance optimization and responsive design.",
                    },
                    {
                      period: "Oct 2022 - Feb 2024",
                      title: "Trainee Software Engineer",
                      company: "Yomboc",
                      description:
                        "Started with native Android development and transitioned to Flutter, building UI components and implementing API integrations.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="relative pl-10"
                    >
                      <div className="absolute left-0 top-1 h-6 w-6 rounded-full border-4 border-background bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                      <p className="text-sm text-muted-foreground mb-1">
                        {item.period}
                      </p>
                      <h4 className="text-xl font-semibold mb-1">
                        {item.title}
                      </h4>
                      <p className="text-base text-muted-foreground mb-2">
                        {item.company}
                      </p>
                      <p className="text-sm">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
