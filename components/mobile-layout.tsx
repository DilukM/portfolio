"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Home, User, Briefcase, Layers, FileText, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import { useToast } from "@/hooks/use-toast"
import { motion, AnimatePresence } from "framer-motion"

interface MobileLayoutProps {
  children: React.ReactNode
}

export function MobileLayout({ children }: MobileLayoutProps) {
  const [activeSection, setActiveSection] = useState(0)
  const { toast } = useToast()
  const [mounted, setMounted] = useState(false)

  // Handle mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { icon: <Home className="h-6 w-6" />, label: "Home" },
    { icon: <User className="h-6 w-6" />, label: "About" },
    { icon: <Briefcase className="h-6 w-6" />, label: "Services" },
    { icon: <Layers className="h-6 w-6" />, label: "Projects" },
    { icon: <FileText className="h-6 w-6" />, label: "Blog" },
    { icon: <Mail className="h-6 w-6" />, label: "Contact" },
  ]

  const handleNavClick = (index: number) => {
    setActiveSection(index)

    // Add haptic feedback simulation
    if (window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(50)
    }

    toast({
      title: `Navigating to ${navItems[index].label}`,
      description: "Swipe to explore more content",
      duration: 1500,
    })
  }

  if (!mounted) {
    return null
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
        {/* App header */}
        <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 flex items-center justify-between bg-background/70 backdrop-blur-lg border-b border-border/50">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text"
          >
            Flutter Dev
          </motion.h1>
        </header>

        {/* Main content area */}
        <main className="pt-14 pb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {Array.isArray(children) ? children[activeSection] : children}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Bottom navigation */}
        <motion.nav
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          className="fixed bottom-4 left-0 right-0 z-50 px-3"
        >
          <div className="max-w-md mx-auto bg-background/40 backdrop-blur-xl border border-border/30 rounded-full shadow-[0_0_25px_rgba(0,0,0,0.25)] px-2 py-1 flex items-center justify-around overflow-x-auto scrollbar-hide">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={cn(
                  "flex flex-col items-center justify-center gap-0.5 rounded-xl h-14 min-w-[3.5rem] transition-all px-2",
                  activeSection === index &&
                    "bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] text-white",
                )}
                onClick={() => handleNavClick(index)}
              >
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  {item.icon}
                </motion.div>
                <span className="text-[10px] font-medium truncate">{item.label}</span>
              </Button>
            ))}
          </div>
        </motion.nav>
      </div>
    </ThemeProvider>
  )
}

