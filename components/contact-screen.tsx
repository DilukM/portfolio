"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactScreen() {
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
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "alex@flutterdev.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "San Francisco, CA",
    },
  ]

  return (
    <div className="h-full overflow-y-auto px-4 py-6">
      <div className="space-y-6">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text inline-block">
            Contact Me
          </h2>
          <p className="text-muted-foreground mt-2">Let's work together</p>
        </div>

        {/* Contact info */}
        <div className="grid grid-cols-1 gap-3">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border border-border/50 bg-background/50 backdrop-blur-sm">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">{info.title}</h3>
                    <p className="text-sm text-muted-foreground">{info.value}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="border border-border/50 bg-background/50 backdrop-blur-sm">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-lg">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Input type="text" placeholder="Your Name" required className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <Input type="email" placeholder="Your Email" required className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <Input type="text" placeholder="Subject" required className="bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <Textarea placeholder="Your Message" required className="min-h-[120px] bg-background/50" />
                  </div>
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Social links */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2">Or connect with me on social media</p>
          <div className="flex justify-center gap-4">
            {["GitHub", "LinkedIn", "Twitter", "Instagram"].map((platform, index) => (
              <Button key={index} variant="outline" size="sm" className="rounded-full">
                {platform}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

