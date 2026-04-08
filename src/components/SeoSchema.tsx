"use client";

export default function SeoSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gynetra Tech Solutions",
    alternateName: "Gynetra",
    url: "https://www.gynetratechsolutions.com",
    logo: "https://www.gynetratechsolutions.com/logogynetra.png",
    description: "Leading IT Consulting firm specializing in End-to-End System Integration, Custom Software Development, IoT Solutions, and IT Services in Indonesia.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}