import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rdtrash.org'

export const metadata: Metadata = {
  title: 'Free Estimate — Junk Removal & Demolition',
  description:
    'Get a free junk removal or demolition estimate from R&D Trash Disposal. Send photos of your items — we respond within hours. Serving Miami-Dade and Broward County.',
  alternates: {
    canonical: `${siteUrl}/estimate`,
  },
  openGraph: {
    title: 'Get a Free Estimate | R&D Trash Disposal',
    description: 'Send us photos and get a real quote within hours. Same-day junk removal and demolition across South Florida.',
    url: `${siteUrl}/estimate`,
  },
}

export default function EstimateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
