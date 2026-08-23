import type { Metadata } from "next";

import FinalCta from "@/components/home-page/FinalCta";
import HeroSection from "@/components/home-page/Hero";
import Industries from "@/components/home-page/Industries";
import LunexDifference from "@/components/home-page/LunexDifference";
import Process from "@/components/home-page/Process";
import SelectedWork from "@/components/home-page/SelectedWork";
import ServicesPreview from "@/components/home-page/ServicesPreview";
import WhyLunex from "@/components/home-page/WhyLunex";

export const metadata: Metadata = {
  title: "Websites & Web Applications Built for Growth",
  description:
    "Lunex OPS designs and develops high-performance websites and custom web applications for businesses and startups.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Websites & Web Applications Built for Growth",
    description:
      "Lunex OPS designs and develops high-performance websites and custom web applications for businesses and startups.",
    url: "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lunex OPS — Websites and web applications engineered for growth",
      },
    ],
  },
};

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <ServicesPreview />
      <LunexDifference />
      <SelectedWork />
      <Industries />
      <Process />
      <WhyLunex />
      <FinalCta />
    </main>
  );
};

export default HomePage;
