"use client";

import "./globals.css";
import { MobileLayout } from "@/components/mobile-layout";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Effect to reset scroll position when route changes
  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <html lang="en">
      <body className="relative overflow-x-hidden bg-gradient-to-br from-slate-900 to-slate-800">
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
        <div className="fixed inset-0 -z-10 overflow-hidden">
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

        {/* Show MobileLayout once client-side code runs */}
        {isMounted ? (
          <MobileLayout>{children}</MobileLayout>
        ) : (
          // Show a consistent initial state during SSR
          <div style={{ visibility: "hidden" }}>{children}</div>
        )}

        {/* Toast notifications */}
        <Toaster />
      </body>
    </html>
  );
}
