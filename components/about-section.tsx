"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Zap, Coffee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const stats = [
    { icon: <Code className="h-5 w-5" />, value: "3+", label: "Years Coding" },
    {
      icon: <Smartphone className="h-5 w-5" />,
      value: "25+",
      label: "Projects Completed",
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
    { name: "React.js", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "Figma", level: 85 },
    { name: "Python", level: 75 },
    { name: "TensorFlow", level: 65 },
    { name: "REST API", level: 85 },
    { name: "Git & GitHub", level: 90 },
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
                  I'm a passionate fullstack developer with over 2 years of experience 
                  building robust, scalable web applications. My expertise spans across 
                  multiple technology stacks including the MERN stack (MongoDB, Express.js, 
                  React.js, Node.js), Next.js for modern React applications, Laravel for 
                  PHP-based solutions, and WordPress for content management systems.
                </p>
                <p className="text-lg leading-relaxed mt-6 relative z-10">
                  I specialize in creating end-to-end web solutions - from designing 
                  intuitive user interfaces and implementing responsive frontend designs 
                  to building secure backend APIs, database architecture, and deployment 
                  strategies. Whether it's an e-commerce platform, a business management 
                  system, or a complex web application, I deliver complete solutions.
                </p>
                <p className="text-lg leading-relaxed mt-6 relative z-10">
                  In addition to web development, I have over a year of experience in 
                  cross-platform mobile app development using Flutter. I've built 
                  high-performance mobile applications for startups and international 
                  clients, integrating AI/ML features, real-time data processing, 
                  and seamless user experiences across iOS and Android platforms.
                </p>
                <p className="text-lg leading-relaxed mt-6 relative z-10">
                  With a 4+ years background in UI/UX design, I bring a design-first 
                  approach to every development project. I understand user psychology, 
                  design principles, and accessibility standards, ensuring that every 
                  application I build is not only functional but also intuitive and 
                  visually appealing.
                </p>
                <p className="text-lg leading-relaxed mt-6 relative z-10">
                  From concept to deployment, I'm passionate about transforming ideas 
                  into reliable, real-world software solutions. Whether you need a 
                  fullstack web application, a mobile app, or a complete digital 
                  platform, I have the skills and experience to bring your vision to life.
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
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
                      period: "Nov 2024 – Present",
                      title: "Freelance Software Engineer",
                      company: "Self-Employed / Contract Basis",
                      description:
                        "Collaborating with a startup serving international clients to develop AI-integrated mobile applications using Flutter. Working with local clients developing fullstack web solutions, POS systems and WordPress website developments. Responsible for UI development, API integration, in-app backend functionality, and AI/ML feature integration.",
                    },
                    {
                      period: "Apr 2024 – Nov 2024",
                      title: "Intern Flutter Developer",
                      company: "Silicon Radon Networks – Kandy",
                      description:
                        "Contributed to the development of MVP mobile applications for the restaurant, salon, and e-channeling industries. Handled custom UI creation, REST API integration, and used Git for version control and collaboration.",
                    },
                    {
                      period: "Oct 2022 – Jan 2024",
                      title: "Software Engineering Intern",
                      company: "Yomboc Software Solutions – Colombo",
                      description:
                        "Monitored and maintained an LMS platform, identifying bugs and functional issues. Provided tech-driven solutions to improve internal staff workflows and productivity.",
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
