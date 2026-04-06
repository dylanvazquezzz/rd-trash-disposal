import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rdtrash.org'

type CityData = {
  name: string
  county: 'Miami-Dade' | 'Broward'
  phone: string
  phoneFormatted: string
  blurb: string
}

const cities: Record<string, CityData> = {
  miami: {
    name: 'Miami',
    county: 'Miami-Dade',
    phone: '3054500649',
    phoneFormatted: '305-450-0649',
    blurb: 'From Wynwood to Brickell to Little Havana, we cover all of Miami. Call for same-day pickup.',
  },
  'miami-beach': {
    name: 'Miami Beach',
    county: 'Miami-Dade',
    phone: '3054500649',
    phoneFormatted: '305-450-0649',
    blurb: 'Serving Miami Beach and South Beach. Furniture, appliances, cleanouts — same day.',
  },
  hialeah: {
    name: 'Hialeah',
    county: 'Miami-Dade',
    phone: '3054500649',
    phoneFormatted: '305-450-0649',
    blurb: 'Local junk removal in Hialeah. We haul furniture, appliances, yard waste, and more.',
  },
  doral: {
    name: 'Doral',
    county: 'Miami-Dade',
    phone: '3054500649',
    phoneFormatted: '305-450-0649',
    blurb: 'Serving Doral and surrounding areas. Same-day junk removal and demolition available.',
  },
  kendall: {
    name: 'Kendall',
    county: 'Miami-Dade',
    phone: '3054500649',
    phoneFormatted: '305-450-0649',
    blurb: 'Kendall junk removal and cleanouts. Any size load, same-day service available.',
  },
  homestead: {
    name: 'Homestead',
    county: 'Miami-Dade',
    phone: '3054500649',
    phoneFormatted: '305-450-0649',
    blurb: 'Serving Homestead and South Miami-Dade. Full property cleanouts and junk haul-away.',
  },
  aventura: {
    name: 'Aventura',
    county: 'Miami-Dade',
    phone: '3054500649',
    phoneFormatted: '305-450-0649',
    blurb: 'Junk removal in Aventura. Furniture, appliances, estate cleanouts — same day.',
  },
  'north-miami': {
    name: 'North Miami',
    county: 'Miami-Dade',
    phone: '3054500649',
    phoneFormatted: '305-450-0649',
    blurb: 'North Miami junk removal and demolition. Licensed, insured, same-day available.',
  },
  'fort-lauderdale': {
    name: 'Fort Lauderdale',
    county: 'Broward',
    phone: '9547088090',
    phoneFormatted: '954-708-8090',
    blurb: 'Fort Lauderdale junk removal and interior demolition. Serving all of Broward County.',
  },
  hollywood: {
    name: 'Hollywood',
    county: 'Broward',
    phone: '9547088090',
    phoneFormatted: '954-708-8090',
    blurb: 'Hollywood FL junk removal. Furniture, appliances, yard waste — same-day haul-away.',
  },
  'pembroke-pines': {
    name: 'Pembroke Pines',
    county: 'Broward',
    phone: '9547088090',
    phoneFormatted: '954-708-8090',
    blurb: 'Junk removal in Pembroke Pines. Same-day service, licensed and insured.',
  },
  miramar: {
    name: 'Miramar',
    county: 'Broward',
    phone: '9547088090',
    phoneFormatted: '954-708-8090',
    blurb: 'Miramar junk removal and cleanouts. We haul anything — call for a free estimate.',
  },
  'coral-springs': {
    name: 'Coral Springs',
    county: 'Broward',
    phone: '9547088090',
    phoneFormatted: '954-708-8090',
    blurb: 'Coral Springs junk removal and demolition service. Same-day available 7 days a week.',
  },
  'pompano-beach': {
    name: 'Pompano Beach',
    county: 'Broward',
    phone: '9547088090',
    phoneFormatted: '954-708-8090',
    blurb: 'Pompano Beach junk removal. Furniture, appliances, debris — free estimates.',
  },
  'boca-raton': {
    name: 'Boca Raton',
    county: 'Broward',
    phone: '9547088090',
    phoneFormatted: '954-708-8090',
    blurb: 'Boca Raton junk removal and interior demolition. Licensed, insured, same-day service.',
  },
}

export function generateStaticParams() {
  return Object.keys(cities).map((city) => ({ city }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>
}): Promise<Metadata> {
  const { city } = await params
  const data = cities[city]
  if (!data) return {}

  return {
    title: `Junk Removal ${data.name} FL | Same-Day Service | R&D Trash Disposal`,
    description: `Same-day junk removal and demolition in ${data.name}, FL. Licensed & insured. Furniture, appliances, construction debris, full cleanouts. Free estimates — call ${data.phoneFormatted}.`,
    alternates: {
      canonical: `${siteUrl}/junk-removal-${city}`,
    },
    openGraph: {
      title: `Junk Removal ${data.name} FL | R&D Trash Disposal`,
      description: `Same-day junk removal in ${data.name}. Licensed & insured. Free estimates. Call ${data.phoneFormatted}.`,
      url: `${siteUrl}/junk-removal-${city}`,
    },
  }
}

const services = [
  'Furniture & sofa removal',
  'Appliance removal',
  'Mattress disposal',
  'Yard waste & debris',
  'Construction debris',
  'Full property cleanouts',
  'Kitchen demolition',
  'Bathroom demolition',
  'Electronics & TV disposal',
  'Estate cleanouts',
]

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>
}) {
  const { city } = await params
  const data = cities[city]
  if (!data) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    name: 'R&D Trash Disposal',
    description: `Same-day junk removal and demolition in ${data.name}, FL. Licensed & insured.`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: data.name,
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    url: `${siteUrl}/junk-removal-${city}`,
    telephone: `+1${data.phone}`,
    areaServed: {
      '@type': 'City',
      name: data.name,
      containedInPlace: { '@type': 'State', name: 'Florida' },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-[#0B1E3D] pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-3">
              {data.county} County
            </p>
            <h1 className="font-display text-white text-6xl sm:text-7xl lg:text-8xl leading-none mb-6">
              JUNK REMOVAL {data.name.toUpperCase()}
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto mb-10">
              {data.blurb} Licensed &amp; insured. Free estimates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${data.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-[#F5A623] text-[#0B1E3D] font-bold px-8 py-4 rounded-lg text-lg hover:bg-amber-400 transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {data.phoneFormatted}
              </a>
              <a
                href="/estimate"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-[#0B1E3D] transition-all"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">
                What We Haul
              </p>
              <h2 className="font-display text-[#0B1E3D] text-5xl sm:text-6xl">
                WE TAKE IT ALL.
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
                Serving {data.name} and all of {data.county} County. Same-day service available 7 days a week.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-12">
              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 bg-[#F5F7FA] rounded-xl px-5 py-4 border border-gray-100"
                >
                  <div className="w-2 h-2 rounded-full bg-[#F5A623] flex-shrink-0" />
                  <span className="text-[#0B1E3D] font-medium">{service}</span>
                </div>
              ))}
            </div>

            {/* Trust bar */}
            <div className="grid grid-cols-3 gap-6 border-t border-gray-100 pt-10">
              {[
                { label: 'Licensed & Insured', sub: 'State of Florida' },
                { label: 'Same-Day Service', sub: '7 days a week' },
                { label: 'Free Estimates', sub: 'No hidden fees' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="font-display text-[#0B1E3D] text-2xl">{item.label.toUpperCase()}</p>
                  <p className="text-gray-400 text-sm mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#F5F7FA]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="font-display text-[#0B1E3D] text-5xl mb-4">
              READY TO CLEAR IT OUT?
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Call us or fill out the estimate form. We serve {data.name} and all surrounding areas in {data.county} County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${data.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-[#0B1E3D] text-white font-semibold px-8 py-4 rounded-lg hover:bg-[#1a3560] transition-all hover:scale-105"
              >
                Call {data.phoneFormatted}
              </a>
              <a
                href="/estimate"
                className="inline-flex items-center justify-center gap-2 bg-[#F5A623] text-[#0B1E3D] font-bold px-8 py-4 rounded-lg hover:bg-amber-400 transition-all hover:scale-105"
              >
                Request Estimate Online
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
