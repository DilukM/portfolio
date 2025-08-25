"use client";

import type React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  // Globe,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // Reset form using the ref
      if (formRef.current) {
        formRef.current.reset();
      }

      // Show success toast
      toast({
        title: "Success!",
        description:
          "Your message has been sent successfully. I'll get back to you soon.",
        duration: 5000,
        className: "bg-green-500 text-white border-none",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      // Show error toast
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
        duration: 5000,
        className: "bg-red-500 text-white border-none",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "contact@dilukudayakantha.com",
      action: "mailto:contact@dilukudayakantha.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+94 77 2684 541",
      action: "tel:+94772684541",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Malabe, Sri Lanka",
      action: "https://maps.google.com/?q=Malabe,Sri+Lanka",
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
            Contact Me
          </h2>
          <p className="text-xl text-muted-foreground">Let's work together</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open(info.action, "_blank")}
                  className="cursor-pointer"
                >
                  <Card className="border border-purple-500/20 bg-background/70 backdrop-blur-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.2)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(168,85,247,0.4)] hover:border-purple-500/40">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-6">
                        <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-medium mb-1">
                            {info.title}
                          </h3>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="mt-8"
            >
              <Card className="border border-purple-500/20 bg-background/70 backdrop-blur-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.2)]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Connect With Me
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    {[
                      {
                        name: "GitHub",
                        icon: <Github className="h-5 w-5" />,
                        link: "https://github.com/DilukM",
                        color: "hover:text-gray-800 dark:hover:text-white",
                      },
                      {
                        name: "LinkedIn",
                        icon: <Linkedin className="h-5 w-5" />,
                        link: "https://www.linkedin.com/in/dilukm/",
                        color: "hover:text-blue-600",
                      },
                      {
                        name: "Facebook",
                        icon: <Facebook className="h-5 w-5" />,
                        link: "https://www.facebook.com/diluk.mihiranga.1",
                        color: "hover:text-blue-500",
                      },
                      {
                        name: "Instagram",
                        icon: <Instagram className="h-5 w-5" />,
                        link: "https://www.instagram.com/_shadow__walker__/",
                        color: "hover:text-pink-500",
                      },
                      {
                        name: "Fiverr",
                        icon: (
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path
                              d="M12.68,5.62a3,3,0,0,0-.58-.21,2.49,2.49,0,0,0-.58-.07,1.45,1.45,0,0,0-1.15.45A1.88,1.88,0,0,0,10,7.06V8.31h2.68v2.52H10V20H6.59V10.83h-2V8.31h2V6.86a3.8,3.8,0,0,1,1.27-3,4.72,4.72,0,0,1,3.29-1.13,8.53,8.53,0,0,1,1.25.08,10.32,10.32,0,0,1,1.07.26Z"
                              fill="none"
                            />
                            <path
                              d="M16.38,6.74a2,2,0,0,1-1.45-.54,1.78,1.78,0,0,1-.57-1.35,1.77,1.77,0,0,1,.57-1.36A2.08,2.08,0,0,1,16.38,3a2.1,2.1,0,0,1,1.46.52,1.8,1.8,0,0,1,.56,1.36,1.8,1.8,0,0,1-.56,1.36A2.06,2.06,0,0,1,16.38,6.74ZM18.05,20h-3.4V8.31h3.4Z"
                              fill="none"
                            />
                          </svg>
                        ),
                        link: "https://www.fiverr.com/s/GzbDqK3",
                        color: "text-white hover:text-green-500",
                      },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-full border border-purple-500/30 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] ${social.color}`}
                        title={social.name}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Card className="border border-purple-500/20 bg-background/70 backdrop-blur-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.2)]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <div>
                      <Input
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        required
                        className="bg-background/50 border-purple-500/30 h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        required
                        className="bg-background/50 border-purple-500/30 h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <Input
                        name="subject"
                        type="text"
                        placeholder="Subject"
                        required
                        className="bg-background/50 border-purple-500/30 h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        className="min-h-[150px] bg-background/50 border-purple-500/30 rounded-xl resize-none"
                      />
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
