import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Gynetra Tech Solutions | IT Consultant & System Integration",
  description: "Gynetra Tech Solutions (GTS) is a leading IT Consulting firm serving businesses with End-to-End System Integration, Custom Software, and IoT Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${outfit.variable} ${inter.variable} font-sans antialiased bg-gray-50 text-slate-800`}>
        {children}
      </body>
    </html>
  );
}
