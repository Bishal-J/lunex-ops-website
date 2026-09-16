import ContactHero from "@/components/contact-page/ContactHero";
import ProjectForm from "@/components/contact-page/ProjectForm";
import WhatHappensNext from "@/components/contact-page/WhatHappensNext";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Project | Lunex OPS",
  description:
    "Have a website, web application, or digital product in mind? Tell Lunex OPS about your project and explore what comes next.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Start a Project | Lunex OPS",
    description:
      "Tell Lunex OPS about your project, idea, or problem and explore the next steps.",
    url: "/contact",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Start a project with Lunex OPS",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Start a Project | Lunex OPS",
    description:
      "Tell Lunex OPS about your project, idea, or problem and explore the next steps.",
    images: ["/og-image.png"],
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
