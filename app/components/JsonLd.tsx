export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nadeesha Hasaranga",
    "url": "https://nadeesha.dev",
    "image": "https://nadeesha.dev/images/og-image.png",
    "jobTitle": "Software Developer",
    "worksFor": { "@type": "Organization", "name": "Open to work" },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kadawatha",
      "addressCountry": "LK"
    },
    "inLanguages": ["English", "Sinhala"],
    "sameAs": [
      "https://github.com/hasaRanger",
      "https://twitter.com/NadeeshaHasara2",
      "https://linkedin.com/in/nadeesha-hasaranga"
    ]
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
