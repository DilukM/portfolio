import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { SITE_URL } from "./metadata";

export const metadata: Metadata = {
  title: "Diluk Udayakantha | Flutter & Full-Stack Developer",
  description:
    "Diluk Udayakantha is a Flutter, Dart, and Full-Stack Developer building smart, scalable mobile and web applications.",
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Diluk Udayakantha",
      url: SITE_URL,
      image: `${SITE_URL}/portrait.jpg`,
      jobTitle: "Flutter & Full-Stack Developer",
      email: "contact@dilukudayakantha.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Malabe",
        addressCountry: "LK",
      },
      sameAs: [
        "https://github.com/DilukM",
        "https://www.linkedin.com/in/dilukm/",
        "https://www.fiverr.com/s/GzbDqK3",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Diluk Udayakantha Portfolio",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </>
  );
}
