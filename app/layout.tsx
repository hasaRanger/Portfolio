import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nadeesha Hasaranga — Portfolio',
  description: 'Aspiring Software Developer. Building high-performance web architectures.',
  icons: {
    icon: 'images/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}