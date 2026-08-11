import type { NextConfig } from "next";

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com https://cdn.jsdelivr.net https://challenges.cloudflare.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https://res.cloudinary.com https://cdn.jsdelivr.net https://cdn.simpleicons.org https://www.nadeesha.dev",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https://va.vercel-scripts.com https://challenges.cloudflare.com",
      "frame-src 'self' https://challenges.cloudflare.com",
    ].join('; ')
  },
]

const nextConfig: NextConfig = {
  devIndicators: false,
  allowedDevOrigins: ['127.0.0.1'],

  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  },
}

export default nextConfig;
