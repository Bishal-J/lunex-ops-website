import ConceptProjects from "@/components/work-page/ConceptProjects";
import FeaturedProject from "@/components/work-page/FeaturedProject";
import WorkHero from "@/components/work-page/WorkHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work | Lunex OPS",
  description:
    "Explore websites, web applications, and digital product concepts designed and developed by Lunex OPS.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Selected Work | Lunex OPS",
    description:
      "Explore websites, web applications, and digital product concepts by Lunex OPS.",
    url: "/work",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Selected work by Lunex OPS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Work | Lunex OPS",
    description:
      "Explore websites, web applications, and digital product concepts by Lunex OPS.",
    images: ["/og-image.png"],
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
