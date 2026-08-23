import ConceptProjects from "@/components/work-page/ConceptProjects";
import FeaturedProject from "@/components/work-page/FeaturedProject";
import WorkHero from "@/components/work-page/WorkHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Explore websites, web applications and digital product concepts built by Lunex.",

  alternates: {
    canonical: "/work",
  },

  openGraph: {
    title: "Selected Work",
    description:
      "A collection of websites, applications and digital concepts built by Lunex.",
    url: "/work",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Selected work by Lunex",
      },
    ],
  },
};

const WorkPage = () => {
  return (
    <main>
      <WorkHero />
      <FeaturedProject />
      <ConceptProjects />
    </main>
  );
};

export default WorkPage;
