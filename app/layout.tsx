import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"
import JsonLd from './components/JsonLd'

const BASE_URL = 'https://nadeesha.dev'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL), // ← fixes relative URL warnings

  title: {
    default: 'Nadeesha Hasaranga | Software Developer',
    template: '%s | Nadeesha Hasaranga', // ← subpages get "Page | Nadeesha Hasaranga"
  },

  description:
    'Full-stack developer from Sri Lanka specializing in Next.js, React, Node.js, and modern web architectures.',

  keywords: [
    'Nadeesha Hasaranga',
    'Software Developer',
    'Full Stack Developer',
    'Web Developer',
    'Portfolio',
    'Next.js',
    'React',
    'Node.js',
    'TypeScript',
    'Sri Lanka',
  ],

  authors: [{ name: 'Nadeesha Hasaranga', url: BASE_URL }],
  creator: 'Nadeesha Hasaranga',

  // Canonical URL
  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    title: 'Nadeesha Hasaranga | Software Developer',
    description:
      'Full-stack developer from Sri Lanka specializing in Next.js, React, and modern web architectures.',
    url: BASE_URL,
    siteName: 'Nadeesha Hasaranga',
    images: [
      {
        url: '/images/og-image.png', // ← metadataBase makes this absolute automatically
        width: 1200,
        height: 630,
        alt: 'Nadeesha Hasaranga — Software Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Nadeesha Hasaranga | Software Developer',
    description:
      'Full-stack developer from Sri Lanka specializing in Next.js, React, and modern web architectures.',
    creator: '@NadeeshaHasara2',
    images: ['/images/og-image.png'], // ← metadataBase handles the rest
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: '/images/logo.png', type: 'image/png' },
    ],
    apple: '/images/logo.png',
    shortcut: '/images/logo.png',
  },

  // Google Search Console — add your actual verification token after connecting
  // verification: {
  //   google: 'your-google-verification-token',
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body>
        {/* JSON-LD structured data — tells Google exactly who you are */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Nadeesha Hasaranga',
              url: BASE_URL,
              jobTitle: 'Full Stack Developer',
              description:
                'Full-stack developer from Sri Lanka specializing in Next.js, React, and modern web architectures.',
              image: `${BASE_URL}/images/profile.webp`,
              email: 'hasaranganadeesha2004@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Kadawatha',
                addressCountry: 'LK',
              },
              sameAs: [
                'https://github.com/hasaRanger',
                'https://www.linkedin.com/in/nadeesha-hasaranga',
                'https://x.com/NadeeshaHasara2',
                'https://dev.to/hasaranger',
              ],
              knowsAbout: [
                'JavaScript',
                'TypeScript',
                'React',
                'Next.js',
                'Node.js',
                'Docker',
                'AWS',
              ],
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}