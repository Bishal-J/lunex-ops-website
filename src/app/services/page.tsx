import type { Metadata } from "next";

import Capabilities from "@/components/services-page/Capabilities";
import OngoingDevelopment from "@/components/services-page/OngoingDevelopment";
import ServicesHero from "@/components/services-page/ServicesHero";
import WebApplications from "@/components/services-page/WebApplications";
import Websites from "@/components/services-page/Websites";

export const metadata: Metadata = {
  title: "Services | Websites & Web Applications",
  description:
    "Explore Lunex OPS services for strategic website design, custom web application development, and ongoing product improvements built around your business.",

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title: "Services | Lunex OPS",
    description:
      "Strategic website design, custom web applications, and ongoing development for businesses and growing products.",
    url: "/services",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lunex OPS services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Services | Lunex OPS",
    description:
      "Websites, web applications, and ongoing development built around your business.",
    images: ["/og-image.png"],
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
