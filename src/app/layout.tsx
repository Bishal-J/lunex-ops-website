import type { Metadata } from "next";

import { Geist, JetBrains_Mono } from "next/font/google";

import "./globals.css";
import Header from "@/components/headers/Header";
import Footer from "@/components/footers/Footer";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lunex-ops.com"),

  title: {
    default: "Lunex — Digital Development Studio",
    template: "%s | Lunex",
  },

  description:
    "Lunex designs and develops high-performance websites and custom web applications for businesses and startups.",

  openGraph: {
    type: "website",
    siteName: "Lunex",
    title: "Lunex — Digital Development Studio",
    description:
      "High-performance websites and custom web applications built around your business.",
    url: "https://lunex-ops.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lunex — Digital Development Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lunex — Digital Development Studio",
    description:
      "High-performance websites and custom web applications built around your business.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
