import AboutHero from "@/components/about-page/AboutHero";
import HowWeThink from "@/components/about-page/HowWeThink";
import Philosophy from "@/components/about-page/Philosophy";
import WhatIsLunex from "@/components/about-page/WhatIsLunex";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Lunex OPS | Digital Development Studio",
  description:
    "Learn about Lunex OPS, an independent digital development studio building thoughtful websites and custom web applications for growing businesses.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Lunex OPS | Digital Development Studio",
    description:
      "Discover the approach behind Lunex OPS and how we combine thoughtful design with practical engineering.",
    url: "/about",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Lunex OPS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Lunex OPS | Digital Development Studio",
    description:
      "Discover the approach behind Lunex OPS and how we build thoughtful digital products.",
    images: ["/og-image.png"],
  },
};

const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <WhatIsLunex />
      <Philosophy />
      <HowWeThink />
    </main>
  );
};

export default AboutPage;
