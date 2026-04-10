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
  neighborhoods: string[]
  localContent: string
}

const cities: Record<string, CityData> = {
  miami: {
    name: 'Miami',
    county: 'Miami-Dade',
    phone: '3054500649',
    phoneFormatted: '305-450-0649',
    blurb: 'From Wynwood to Brickell to Little Havana, we cover all of Miami. Call for same-day pickup.',
    neighborhoods: ['Brickell', 'Wynwood', 'Little Havana', 'Coral Gables', 'Coconut Grove', 'Edgewater', 'Downtown', 'Midtown', 'Liberty City', 'Overtown'],
    localContent: "Miami is one of South Florida's most active renovation markets, and we're the crew that handles the mess. Whether it's a Brickell condo gut-out, a Wynwood loft cleanout, or an estate cleanout in Coral Gables, we show up same day and haul everything away. Furniture, appliances, construction debris, yard waste — no job too big or too small in Miami-Dade.",
  },
  'miami-beach': {
    name: 'Miami Beach',
    county: 'Miami-Dade',
    phone: '3054500649',
    phoneFormatted: '305-450-0649',
    blurb: 'Serving Miami Beach and South Beach. Furniture, appliances, cleanouts — same day.',
    neighborhoods: ['South Beach', 'Mid-Beach', 'North Beach', 'Surfside', 'Bal Harbour', 'Bay Harbor Islands'],
    localContent: "Miami Beach's dense condo market means constant unit turnover — and we handle the haul-outs. Dumpster permits on the Beach are a headache, which is why local residents and property managers call us for same-day furniture removal, appliance swaps, and full unit cleanouts from South Beach to Surfside. No dumpster needed, no permit required.",
  },
  hialeah: {
    name: 'Hialeah',
    county: 'Miami-Dade',
    phone: '3054500649',
    phoneFormatted: '305-450-0649',
    blurb: 'Local junk removal in Hialeah. We haul furniture, appliances, yard waste, and more.',
    neighborhoods: ['Hialeah Gardens', 'Palm Springs North', 'Westland', 'Opa-locka', 'Miami Lakes'],
    localContent: "Hialeah is one of the most densely populated cities in Florida, and our team runs routes through it daily. We handle garage cleanouts, furniture removal, and bulk junk haul-away throughout Hialeah and into Hialeah Gardens and Palm Springs North. If it won't fit in your trash can, we'll take it.",
  },
  doral: {
    name: 'Doral',
    county: 'Miami-Dade',
    phone: '3054500649',
    phoneFormatted: '305-450-0649',
    blurb: 'Serving Doral and surrounding areas. Same-day junk removal and demolition available.',
    neighborhoods: ['Blue Lagoon', 'Sweetwater', 'Medley', 'Virginia Gardens', 'Fontainebleau'],
    localContent: "Doral's commercial and residential growth means constant renovation work — and a constant need for debris removal. We serve businesses and homeowners throughout Doral, Sweetwater, and Medley with same-day junk haul-away, office furniture removal, construction debris cleanup, and full property cleanouts. We run routes near the airport corridor daily.",
  },
  kendall: {
    name: 'Kendall',
    county: 'Miami-Dade',
    phone: '3054500649',
    phoneFormatted: '305-450-0649',
    blurb: 'Kendall junk removal and cleanouts. Any size load, same-day service available.',
    neighborhoods: ['Kendale Lakes', 'West Kendall', 'Pinecrest', 'The Hammocks', 'Glenvar Heights', 'Sunset'],
    localContent: "Kendall's single-family neighborhoods generate some of the biggest cleanout jobs we see — full garage haul-outs, furniture removal after a move, shed cleanouts, and bulk junk after a renovation. We cover all of Kendall from Pinecrest to West Kendall to Kendale Lakes, with same-day availability on most requests.",
  },
  homestead: {
    name: 'Homestead',
    county: 'Miami-Dade',
    phone: '3054500649',
    phoneFormatted: '305-450-0649',
    blurb: 'Serving Homestead and South Miami-Dade. Full property cleanouts and junk haul-away.',
    neighborhoods: ['Florida City', 'Leisure City', 'Cutler Bay', 'Naranja', 'Princeton', 'Goulds'],
    localContent: "South Miami-Dade has large lots and older properties that generate big cleanout jobs. We serve Homestead, Florida City, Cutler Bay, and the surrounding agricultural communities with full property cleanouts, post-storm debris removal, bulk junk haul-away, and appliance disposal. If you're clearing land, cleaning out a rental, or doing a full renovation teardown — we've got you covered.",
  },
  aventura: {
    name: 'Aventura',
    county: 'Miami-Dade',
    phone: '3054500649',
    phoneFormatted: '305-450-0649',
    blurb: 'Junk removal in Aventura. Furniture, appliances, estate cleanouts — same day.',
    neighborhoods: ['Williams Island', 'Hallandale Beach', 'Golden Beach', 'Sunny Isles Beach', 'North Miami Beach'],
    localContent: "Aventura and the surrounding high-rise corridor see constant unit flips and estate cleanouts. We specialize in furniture removal and appliance haul-outs for condo renovations — no elevator damage, no building violations, just fast removal. We cover Aventura, Sunny Isles Beach, and Golden Beach with same-day service.",
  },
  'north-miami': {
    name: 'North Miami',
    county: 'Miami-Dade',
    phone: '3054500649',
    phoneFormatted: '305-450-0649',
    blurb: 'North Miami junk removal and demolition. Licensed, insured, same-day available.',
    neighborhoods: ['North Miami Beach', 'Biscayne Park', 'El Portal', 'Miami Shores', 'Ives Estates'],
    localContent: "North Miami and its surrounding communities — Miami Shores, El Portal, Biscayne Park — are a mix of older single-family homes and condos that regularly need full cleanouts. We handle furniture removal, appliance disposal, yard waste haul-away, and demolition debris throughout North Miami and North Miami Beach, same day.",
  },
  'fort-lauderdale': {
    name: 'Fort Lauderdale',
    county: 'Broward',
    phone: '9547088090',
    phoneFormatted: '954-708-8090',
    blurb: 'Fort Lauderdale junk removal and interior demolition. Serving all of Broward County.',
    neighborhoods: ['Las Olas', 'Wilton Manors', 'Victoria Park', 'Flagler Village', 'Tarpon River', 'Colee Hammock', 'Rio Vista'],
    localContent: "Fort Lauderdale is our Broward home base. Las Olas and the barrier island neighborhoods are renovation-heavy — we handle gut-outs in Victoria Park, construction debris on the islands, and estate cleanouts throughout the city. From Wilton Manors to Flagler Village, our crew runs Fort Lauderdale routes daily and can usually get there same day.",
  },
  hollywood: {
    name: 'Hollywood',
    county: 'Broward',
    phone: '9547088090',
    phoneFormatted: '954-708-8090',
    blurb: 'Hollywood FL junk removal. Furniture, appliances, yard waste — same-day haul-away.',
    neighborhoods: ['Hollywood Beach', 'Hallandale Beach', 'Dania Beach', 'West Hollywood', 'Emerald Hills'],
    localContent: "Hollywood, FL sits right between Miami and Fort Lauderdale, and we cover it from the beach to the western developments. We handle estate cleanouts in Emerald Hills, furniture removal along Hollywood Beach, yard waste haul-away in West Hollywood, and appliance disposal throughout the city. Same-day service available most days.",
  },
  'pembroke-pines': {
    name: 'Pembroke Pines',
    county: 'Broward',
    phone: '9547088090',
    phoneFormatted: '954-708-8090',
    blurb: 'Junk removal in Pembroke Pines. Same-day service, licensed and insured.',
    neighborhoods: ['Pembroke Lakes', 'Chapel Trail', 'Silver Lakes', 'Pines City Center', 'Towngate', 'Walnut Creek'],
    localContent: "Pembroke Pines is one of Broward's largest cities, and its planned communities generate steady cleanout work. We handle garage haul-outs in Chapel Trail, furniture removal in Silver Lakes, and full property cleanouts throughout Pembroke Pines. Most residents get same-day or next-day service.",
  },
  miramar: {
    name: 'Miramar',
    county: 'Broward',
    phone: '9547088090',
    phoneFormatted: '954-708-8090',
    blurb: 'Miramar junk removal and cleanouts. We haul anything — call for a free estimate.',
    neighborhoods: ['Monarch Lakes', 'Riviera Isles', 'Sunset Lakes', 'Royal Palm Ranches', 'Nautica'],
    localContent: "Miramar's residential communities have large homes with garages and storage that fill up fast. We handle furniture and appliance removal, full garage cleanouts, renovation debris, and bulk junk haul-away throughout Miramar — from Monarch Lakes to Royal Palm Ranches. Quick turnaround, no hidden fees.",
  },
  'coral-springs': {
    name: 'Coral Springs',
    county: 'Broward',
    phone: '9547088090',
    phoneFormatted: '954-708-8090',
    blurb: 'Coral Springs junk removal and demolition service. Same-day available 7 days a week.',
    neighborhoods: ['Wyndham Lakes', 'Eagle Trace', 'Heron Bay', 'Ramblewood', 'Forest Hills', 'The Crossings'],
    localContent: "Coral Springs is one of the most active home renovation markets in Broward County. We handle demolition debris haul-away, kitchen and bathroom gut-outs, furniture removal, and full property cleanouts throughout Coral Springs. Neighborhoods like Heron Bay and Eagle Trace see constant remodeling work — we're the crew that clears it out.",
  },
  'pompano-beach': {
    name: 'Pompano Beach',
    county: 'Broward',
    phone: '9547088090',
    phoneFormatted: '954-708-8090',
    blurb: 'Pompano Beach junk removal. Furniture, appliances, debris — free estimates.',
    neighborhoods: ['Lighthouse Point', 'Hillsboro Beach', 'Coconut Creek', 'Pompano Beach Highlands', 'Crystal Lake'],
    localContent: "Pompano Beach covers a lot of ground — from the beachside condos to the inland communities like Coconut Creek and Pompano Beach Highlands. We handle furniture and appliance removal, estate cleanouts, construction debris, and yard waste haul-away throughout the area. Licensed and insured, same-day service available.",
  },
  'boca-raton': {
    name: 'Boca Raton',
    county: 'Broward',
    phone: '9547088090',
    phoneFormatted: '954-708-8090',
    blurb: 'Boca Raton junk removal and interior demolition. Licensed, insured, same-day service.',
    neighborhoods: ['Boca Del Mar', 'Mission Bay', 'Broken Sound', 'Woodfield', 'Boca West', 'Mizner Park'],
    localContent: "Boca Raton's upscale residential market means high-value renovations — and the debris that comes with them. We handle interior demolition debris, furniture removal from estate cleanouts, appliance haul-outs, and full property cleanouts in communities like Broken Sound, Boca West, and Woodfield. Discreet, professional service with same-day availability.",
  },
}

const PREFIX = 'junk-removal-'

export function generateStaticParams() {
  return Object.keys(cities).map((city) => ({ city: `${PREFIX}${city}` }))
}

function getCityKey(slug: string): string | null {
  if (!slug.startsWith(PREFIX)) return null
  return slug.slice(PREFIX.length)
}

export async function generateMetadata({
  params,
}: {
  params: { city: string }
}): Promise<Metadata> {
  const cityKey = getCityKey(params.city)
  if (!cityKey) return {}
  const data = cities[cityKey]
  if (!data) return {}

  return {
    title: `Junk Removal ${data.name} FL | Same-Day Service | R&D Trash Disposal`,
    description: `Same-day junk removal and demolition in ${data.name}, FL. Licensed & insured. Furniture, appliances, construction debris, full cleanouts. Free estimates — call ${data.phoneFormatted}.`,
    alternates: {
      canonical: `${siteUrl}/junk-removal-${cityKey}`,
    },
    openGraph: {
      title: `Junk Removal ${data.name} FL | R&D Trash Disposal`,
      description: `Same-day junk removal in ${data.name}. Licensed & insured. Free estimates. Call ${data.phoneFormatted}.`,
      url: `${siteUrl}/junk-removal-${cityKey}`,
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

export default function CityPage({
  params,
}: {
  params: { city: string }
}) {
  const cityKey = getCityKey(params.city)
  if (!cityKey) notFound()

  const data = cities[cityKey]
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
    url: `${siteUrl}/junk-removal-${cityKey}`,
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

        {/* Local content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-3">
                  Serving {data.name}
                </p>
                <h2 className="font-display text-[#0B1E3D] text-4xl sm:text-5xl mb-6">
                  YOUR LOCAL HAULING CREW.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {data.localContent}
                </p>
              </div>
              <div>
                <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-3">
                  Neighborhoods We Cover
                </p>
                <div className="flex flex-wrap gap-2">
                  {data.neighborhoods.map((n) => (
                    <span
                      key={n}
                      className="bg-[#F5F7FA] text-[#0B1E3D] text-sm font-medium px-3 py-1.5 rounded-full border border-gray-200"
                    >
                      {n}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-gray-500 text-sm">
                  Don&apos;t see your neighborhood? Call us — if it&apos;s in {data.county} County, we likely cover it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-[#F5F7FA]">
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
                  className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100"
                >
                  <div className="w-2 h-2 rounded-full bg-[#F5A623] flex-shrink-0" />
                  <span className="text-[#0B1E3D] font-medium">{service}</span>
                </div>
              ))}
            </div>

            {/* Trust bar */}
            <div className="grid grid-cols-3 gap-6 border-t border-gray-200 pt-10">
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
        <section className="py-16 bg-[#0B1E3D]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="font-display text-white text-5xl mb-4">
              READY TO CLEAR IT OUT?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Call us or fill out the estimate form. We serve {data.name} and all surrounding areas in {data.county} County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${data.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-[#F5A623] text-[#0B1E3D] font-bold px-8 py-4 rounded-lg hover:bg-amber-400 transition-all hover:scale-105"
              >
                Call {data.phoneFormatted}
              </a>
              <a
                href="/estimate"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#0B1E3D] transition-all"
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
