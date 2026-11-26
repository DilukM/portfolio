import type { Metadata } from "next";
import { ServicesSection } from "@/components/services-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mobile app development with Flutter, full-stack web application development with Next.js & Laravel, UI/UX design, and custom software engineering services.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Diluk Udayakantha",
    description:
      "Mobile app development with Flutter, full-stack web application development, and custom software engineering services.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesSection />;
}
