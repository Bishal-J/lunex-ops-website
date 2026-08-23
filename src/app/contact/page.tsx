import ContactHero from "@/components/contact-page/ContactHero";
import ProjectForm from "@/components/contact-page/ProjectForm";
import WhatHappensNext from "@/components/contact-page/WhatHappensNext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Have a website, web application or digital product in mind? Tell Lunex OPS what you're building and let's work out what comes next.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Start a Project | Lunex OPS",
    description:
      "Tell Lunex OPS about your project, idea or problem and let's build something useful.",
    url: "/contact",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Start a project with Lunex OPS",
      },
    ],
  },
};

const ContactPage = () => {
  return (
    <main>
      <ContactHero />
      <ProjectForm />
      <WhatHappensNext />
    </main>
  );
};

export default ContactPage;
