import { MobileLayout } from "@/components/mobile-layout"
import { HomePage } from "@/components/home-page"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { BlogSection } from "@/components/blog-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <MobileLayout>
      <HomePage />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </MobileLayout>
  )
}

