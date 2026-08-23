import Capabilities from "@/components/services-page/Capabilities";
import OngoingDevelopment from "@/components/services-page/OngoingDevelopment";
import ServicesHero from "@/components/services-page/ServicesHero";
import WebApplications from "@/components/services-page/WebApplications";
import Websites from "@/components/services-page/Websites";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Lunex services for high-performance websites, custom web applications and ongoing development built around your business.",

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title: "Websites & Web Application Development",
    description:
      "High-performance websites, custom web applications and ongoing development built around your business.",
    url: "/services",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lunex services",
      },
    ],
  },
};

const ServicesPage = () => {
  return (
    <main>
      <ServicesHero />
      <Websites />
      <WebApplications />
      <OngoingDevelopment />
      <Capabilities />
    </main>
  );
};

export default ServicesPage;
