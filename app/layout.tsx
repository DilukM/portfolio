import "./globals.css";
import { MobileLayout } from "@/components/mobile-layout";
import { Toaster } from "@/components/ui/toaster";

export { metadata } from "./metadata";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="relative overflow-x-hidden bg-gradient-to-br from-slate-900 to-slate-800">
        <MobileLayout>{children}</MobileLayout>
        <Toaster />
      </body>
    </html>
  );
}
