"use client";

import type React from "react";
import { useEffect } from "react";
import Link from "next/link";
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

  // Reset scroll position when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleNavigation = (event: CustomEvent) => {
      const { index } = event.detail;
      const destination = navItems[index]?.path;
      if (destination) {
        router.push(destination);
      }
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
  }, [router]);

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

  const triggerHaptic = () => {
    if (typeof window !== "undefined" && window.navigator?.vibrate) {
      window.navigator.vibrate(50);
    }
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      forcedTheme="dark"
    >
      {/* Mesh pattern background */}
      <div
        className="fixed inset-0 -z-20 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glowing color patches */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            opacity: [0.3, 0.5, 0.3],
            background: [
              "radial-gradient(circle, rgba(147,51,234,0.3) 0%, rgba(236,72,153,0.3) 100%)",
              "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(147,51,234,0.3) 100%)",
              "radial-gradient(circle, rgba(147,51,234,0.3) 0%, rgba(236,72,153,0.3) 100%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            opacity: [0.3, 0.5, 0.3],
            background: [
              "radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(147,51,234,0.3) 100%)",
              "radial-gradient(circle, rgba(147,51,234,0.3) 0%, rgba(59,130,246,0.3) 100%)",
              "radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(147,51,234,0.3) 100%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
          className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            opacity: [0.4, 0.6, 0.4],
            background: [
              "radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(147,51,234,0.4) 100%)",
              "radial-gradient(circle, rgba(147,51,234,0.4) 0%, rgba(236,72,153,0.4) 100%)",
              "radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(147,51,234,0.4) 100%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            delay: 10,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
        />
      </div>

      <div className="min-h-screen overflow-hidden">
        {/* Main content area */}
        <main className="pt-14 pb-20">
          <AnimatePresence mode="wait">{children}</AnimatePresence>
        </main>

        {/* Bottom navigation */}
        <motion.nav
          aria-label="Primary Navigation"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          className="fixed bottom-4 left-0 right-0 z-50 px-3"
        >
          <div className="max-w-md mx-auto bg-background/40 backdrop-blur-xl border border-border/30 rounded-full shadow-[0_0_25px_rgba(0,0,0,0.25)] px-2 py-1 flex items-center justify-around overflow-x-auto scrollbar-hide">
            {navItems.map((item) => (
              <Button
                key={item.path}
                asChild
                variant="ghost"
                size="sm"
                className={cn(
                  "flex flex-col items-center justify-center gap-0.5 rounded-xl h-14 min-w-[3.5rem] transition-all px-2",
                  pathname === item.path &&
                    "bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] text-white"
                )}
              >
                <Link href={item.path} onClick={triggerHaptic}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {item.icon}
                  </motion.div>
                  <span className="text-[10px] font-medium truncate">
                    {item.label}
                  </span>
                </Link>
              </Button>
            ))}
          </div>
        </motion.nav>
      </div>
    </ThemeProvider>
  );
}
