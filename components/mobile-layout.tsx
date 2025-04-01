"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, Layers, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

interface MobileLayoutProps {
  children: React.ReactNode;
}

export function MobileLayout({ children }: MobileLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);

  // Handle mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleNavigation = (event: CustomEvent) => {
      const { index } = event.detail;
      handleNavClick(index);
    };

    window.addEventListener(
      "navigate" as any,
      handleNavigation as EventListener
    );

    return () => {
      window.removeEventListener(
        "navigate" as any,
        handleNavigation as EventListener
      );
    };
  }, []);

  const navItems = [
    { icon: <Home className="h-6 w-6" />, label: "Home", path: "/" },
    { icon: <User className="h-6 w-6" />, label: "About", path: "/about" },
    {
      icon: <Briefcase className="h-6 w-6" />,
      label: "Services",
      path: "/services",
    },
    {
      icon: <Layers className="h-6 w-6" />,
      label: "Projects",
      path: "/projects",
    },
    { icon: <FileText className="h-6 w-6" />, label: "Blog", path: "/blog" },
    { icon: <Mail className="h-6 w-6" />, label: "Contact", path: "/contact" },
  ];

  const handleNavClick = (index: number) => {
    const destination = navItems[index].path;
    router.push(destination);

    // Add haptic feedback simulation
    if (window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(50);
    }
  };

  // Get the current active index based on pathname
  const getActiveIndex = () => {
    const currentPath = pathname || "/";
    const index = navItems.findIndex((item) => currentPath === item.path);
    return index >= 0 ? index : 0;
  };

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      forcedTheme="dark"
    >
      <div className="min-h-screen overflow-hidden">
        {/* Main content area */}
        <main className="pt-14 pb-20">
          <AnimatePresence mode="wait">{children}</AnimatePresence>
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
                  pathname === item.path &&
                    "bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] text-white"
                )}
                onClick={() => handleNavClick(index)}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                </motion.div>
                <span className="text-[10px] font-medium truncate">
                  {item.label}
                </span>
              </Button>
            ))}
          </div>
        </motion.nav>
      </div>
    </ThemeProvider>
  );
}
