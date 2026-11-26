import type { Metadata } from "next";

export const SITE_URL = "https://www.dilukudayakantha.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Diluk Udayakantha | Flutter & Full-Stack Developer",
    template: "%s | Diluk Udayakantha",
  },
  description:
    "Portfolio of Diluk Udayakantha, a Flutter, Dart, and Full-Stack Developer building scalable mobile and web applications.",
  keywords: [
    "Diluk Udayakantha",
    "Flutter Developer",
    "Dart Developer",
    "Full-Stack Developer",
    "Mobile App Developer",
    "Next.js Developer",
    "Sri Lanka",
  ],
  authors: [{ name: "Diluk Udayakantha", url: SITE_URL }],
  creator: "Diluk Udayakantha",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Diluk Udayakantha Portfolio",
    title: "Diluk Udayakantha | Flutter & Full-Stack Developer",
    description:
      "Flutter, Dart, and Full-Stack developer portfolio showcasing mobile apps, web platforms, and technical articles.",
    images: [
      {
        url: "/portrait.jpg",
        width: 800,
        height: 800,
        alt: "Diluk Udayakantha - Flutter & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Diluk Udayakantha | Flutter & Full-Stack Developer",
    description:
      "Flutter, Dart, and Full-Stack developer portfolio showcasing mobile apps, web platforms, and technical articles.",
    images: ["/portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
