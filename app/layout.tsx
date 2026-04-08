import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rdtrash.org'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'R&D Trash Disposal | Same-Day Junk Removal — South Florida',
    template: '%s | R&D Trash Disposal',
  },
  description:
    'Same-day junk removal and demolition in Miami-Dade and Broward County. Furniture, appliances, construction debris, kitchen & bathroom teardowns — we haul it all. Free estimates. Call 305-450-0649.',
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: '/favicon-1024.png', sizes: '1024x1024', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon-1024.png',
    apple: '/favicon-1024.png',
  },
  openGraph: {
    title: 'R&D Trash Disposal | Same-Day Junk Removal — South Florida',
    description: 'Same-day junk removal and demolition across Miami-Dade and Broward. Any trash, any size. Free estimates. Call 305-450-0649.',
    type: 'website',
    url: siteUrl,
    siteName: 'R&D Trash Disposal',
    locale: 'en_US',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'R&D Trash Disposal — Same-Day Junk Removal South Florida' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'R&D Trash Disposal | Same-Day Junk Removal',
    description: 'Same-day junk removal and demolition across South Florida. Free estimates.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  name: 'R&D Trash Disposal',
  description:
    'Same-day junk removal and small-scale demolition service covering Miami-Dade and Broward County, South Florida. Furniture, appliances, yard waste, construction debris, kitchen and bathroom teardowns — we haul it all.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Miami',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.77427,
    longitude: -80.19366,
  },
  url: siteUrl,
  telephone: ['+13054500649', '+19547088090'],
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '20:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Miami', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Miami Beach', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Hialeah', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Doral', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Kendall', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Homestead', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Fort Lauderdale', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Hollywood', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Pembroke Pines', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Miramar', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Coral Springs', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Pompano Beach', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Boca Raton', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'Aventura', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'City', name: 'North Miami', containedInPlace: { '@type': 'State', name: 'Florida' } },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Junk Removal & Demolition Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Junk Removal', description: 'Full-service junk hauling — furniture, appliances, mattresses, electronics, yard waste, and more.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Furniture Removal', description: 'Sofa, bed frame, dresser, and all furniture hauling and disposal.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Appliance Removal', description: 'Washer, dryer, refrigerator, and all appliance removal and disposal.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Yard Waste Removal', description: 'Yard debris, tree branches, mulch, and landscaping waste hauling.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Construction Debris Removal', description: 'Drywall, concrete, tile, lumber, and construction site cleanouts.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kitchen Demolition', description: 'Full kitchen gut-out — cabinets, counters, drywall, and full haul-away.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bathroom Demolition', description: 'Bathroom teardown including tile, vanity, drywall, and full haul-away.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Deck & Patio Removal', description: 'Deck, fence, and patio demolition and debris hauling.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full Cleanouts', description: 'Garage, storage unit, and full property cleanouts.' } },
    ],
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+13054500649',
      contactType: 'customer service',
      areaServed: 'Miami-Dade County',
      availableLanguage: ['English', 'Spanish'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+19547088090',
      contactType: 'customer service',
      areaServed: 'Broward County',
      availableLanguage: ['English', 'Spanish'],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6DSMYLXMSW"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6DSMYLXMSW');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  )
}
