"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      })

      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "alex@flutterdev.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "San Francisco, CA",
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
            Contact Me
          </h2>
          <p className="text-xl text-muted-foreground">Let's work together</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={item} whileHover={{ y: -5, x: 5 }}>
                <Card className="border border-purple-500/20 bg-background/70 backdrop-blur-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.2)]">
                  <CardContent className="p-6 flex items-center gap-6">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">{info.title}</h3>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <motion.div variants={item} className="mt-8">
              <Card className="border border-purple-500/20 bg-background/70 backdrop-blur-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.2)]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                  <div className="flex flex-wrap gap-4">
                    {["GitHub", "LinkedIn", "Twitter", "Instagram"].map((platform, index) => (
                      <motion.div key={index} whileHover={{ y: -5 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" className="rounded-full border-purple-500/30">
                          {platform}
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="border border-purple-500/20 bg-background/70 backdrop-blur-lg overflow-hidden shadow-[0_0_25px_rgba(168,85,247,0.2)]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        required
                        className="bg-background/50 border-purple-500/30 h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        required
                        className="bg-background/50 border-purple-500/30 h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder="Subject"
                        required
                        className="bg-background/50 border-purple-500/30 h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        required
                        className="min-h-[150px] bg-background/50 border-purple-500/30 rounded-xl resize-none"
                      />
                    </div>
                  </div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
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
    </section>
  )
}

