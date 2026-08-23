import AboutHero from "@/components/about-page/AboutHero";
import HowWeThink from "@/components/about-page/HowWeThink";
import Philosophy from "@/components/about-page/Philosophy";
import WhatIsLunex from "@/components/about-page/WhatIsLunex";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Lunex",
  description:
    "Lunex is an independent digital development studio building serious websites and web applications for ambitious businesses.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Lunex",
    description:
      "A small studio building serious digital products through thoughtful design and engineering.",
    url: "/about",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About Lunex",
      },
    ],
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
