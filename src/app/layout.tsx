import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const defaultMetadata = {
  metadataBase: new URL("https://www.gynetratechsolutions.com"),
  title: {
    default: "Gynetra - IT Consultant & System Integration Solutions",
    template: "%s | Gynetra",
  },
  description: "Gynetra Tech Solutions - Leading IT Consulting firm specializing in End-to-End System Integration, Custom Software Development, IoT Solutions, and IT Services in Indonesia.",
  keywords: ["gynetra", "IT consultant", "system integration", "software development", "IoT solutions", "IT services Indonesia"],
  authors: [{ name: "Gynetra Tech Solutions" }],
  creator: "Gynetra Tech Solutions",
  publisher: "Gynetra Tech Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.gynetratechsolutions.com",
    siteName: "Gynetra Tech Solutions",
    title: "Gynetra - IT Consultant & System Integration Solutions",
    description: "Gynetra Tech Solutions - Leading IT Consulting firm specializing in End-to-End System Integration, Custom Software Development, IoT Solutions, and IT Services in Indonesia.",
    images: [
      {
        url: "/logogynetra.png",
        width: 512,
        height: 512,
        alt: "Gynetra Tech Solutions Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gynetra - IT Consultant & System Integration Solutions",
    description: "Gynetra Tech Solutions - Leading IT Consulting firm specializing in End-to-End System Integration, Custom Software Development, IoT Solutions, and IT Services in Indonesia.",
    images: ["/logogynetra.png"],
  },
  alternates: {
    canonical: "https://www.gynetratechsolutions.com",
  },
};

export const metadata: Metadata = defaultMetadata;

import SeoSchema from "@/components/SeoSchema";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <SeoSchema />
      </head>
      <body className={`${outfit.variable} ${inter.variable} font-sans antialiased bg-gray-50 text-slate-800`}>
        {children}
      </body>
    </html>
  );
}
