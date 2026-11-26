import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Diluk Udayakantha for Flutter mobile app development, full-stack web projects, or freelance inquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Diluk Udayakantha",
    description:
      "Get in touch with Diluk Udayakantha for Flutter mobile app development, full-stack web projects, or freelance inquiries.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactSection />;
}
