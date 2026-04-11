import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rdtrash.org'

type DemoCity = {
  name: string
  county: 'Miami-Dade' | 'Broward'
  phone: string
  phoneFormatted: string
  blurb: string
  neighborhoods: string[]
  localContent: string
  commonJobs: string[]
}

const cities: Record<string, DemoCity> = {
  miami: {
    name: 'Miami',
    county: 'Miami-Dade',
    phone: '3054500649',
    phoneFormatted: '305-450-0649',
    blurb: 'Interior demolition and gut-outs across Miami-Dade. Kitchens, bathrooms, full teardowns — licensed and insured.',
    neighborhoods: ['Brickell', 'Wynwood', 'Little Havana', 'Coral Gables', 'Coconut Grove', 'Edgewater', 'Midtown', 'Overtown'],
    localContent: "Miami's renovation market is one of the most active in Florida — and we're the demo crew that keeps pace with it. From Brickell condo gut-outs to kitchen teardowns in Coral Gables, our team handles full interior demolition, tile removal, cabinet and countertop tear-out, and haul-away all in one job. We're licensed, insured, and available same day in Miami-Dade County.",
    commonJobs: ['Kitchen gut-out', 'Bathroom teardown', 'Tile & flooring removal', 'Cabinet & countertop removal', 'Drywall removal', 'Shed & deck demolition'],
  },
  'miami-beach': {
    name: 'Miami Beach',
    county: 'Miami-Dade',
    phone: '3054500649',
    phoneFormatted: '305-450-0649',
    blurb: 'Demolition contractor serving Miami Beach and South Beach. Unit gut-outs, kitchens, bathrooms.',
    neighborhoods: ['South Beach', 'Mid-Beach', 'North Beach', 'Surfside', 'Bal Harbour'],
    localContent: "Condo renovations on Miami Beach require a demo crew that knows how to work in high-rise buildings without damaging elevators, hallways, or neighboring units. We specialize in contained interior demolition — kitchen gut-outs, bathroom teardowns, and flooring removal in South Beach and Mid-Beach condos. All debris is bagged, hauled, and disposed of properly.",
    commonJobs: ['Condo gut-out', 'Kitchen demolition', 'Bathroom teardown', 'Tile & flooring removal', 'Cabinet removal', 'Debris haul-away'],
  },
  hialeah: {
    name: 'Hialeah',
    county: 'Miami-Dade',
    phone: '3054500649',
    phoneFormatted: '305-450-0649',
    blurb: 'Demolition services in Hialeah. Kitchen and bathroom teardowns, full interior gut-outs.',
    neighborhoods: ['Hialeah Gardens', 'Palm Springs North', 'Westland', 'Opa-locka', 'Miami Lakes'],
    localContent: "Hialeah has some of Miami-Dade's oldest residential housing stock — which means lots of kitchen and bathroom renovations on older homes. We handle full demolition teardowns in Hialeah: tile removal from 1970s kitchens, gut-outs of outdated bathrooms, drywall removal, and full debris haul-away. Fast, clean, and priced fairly.",
    commonJobs: ['Kitchen gut-out', 'Bathroom teardown', 'Tile & flooring removal', 'Drywall removal', 'Cabinet removal', 'Full interior demo'],
  },
  doral: {
    name: 'Doral',
    county: 'Miami-Dade',
    phone: '3054500649',
    phoneFormatted: '305-450-0649',
    blurb: 'Demo contractor in Doral. Commercial and residential interior demolition, same day.',
    neighborhoods: ['Blue Lagoon', 'Sweetwater', 'Medley', 'Virginia Gardens', 'Fontainebleau'],
    localContent: "Doral's mix of corporate offices, warehouses, and newer residential communities creates steady demand for interior demolition work. We handle commercial office gut-outs, warehouse partition removal, kitchen and bathroom teardowns in residential homes, and full interior demo for property flips. Fast turnaround on all jobs in Doral and the surrounding industrial corridor.",
    commonJobs: ['Office gut-out', 'Kitchen demolition', 'Bathroom teardown', 'Partition wall removal', 'Tile & flooring removal', 'Commercial demo'],
  },
  kendall: {
    name: 'Kendall',
    county: 'Miami-Dade',
    phone: '3054500649',
    phoneFormatted: '305-450-0649',
    blurb: 'Demolition contractor in Kendall. Kitchen gut-outs, bathroom teardowns, full interior demo.',
    neighborhoods: ['Kendale Lakes', 'West Kendall', 'Pinecrest', 'The Hammocks', 'Glenvar Heights'],
    localContent: "Kendall's large single-family homes are prime territory for full kitchen and bathroom renovations — and the demolition work that comes first. We serve homeowners throughout Kendall with complete interior demo: kitchen gut-outs, bathroom teardowns, tile removal, drywall demo, and debris haul-away. Clean job site left behind, same day in most cases.",
    commonJobs: ['Kitchen gut-out', 'Bathroom teardown', 'Tile & flooring removal', 'Shed demolition', 'Deck removal', 'Full interior demo'],
  },
  homestead: {
    name: 'Homestead',
    county: 'Miami-Dade',
    phone: '3054500649',
    phoneFormatted: '305-450-0649',
    blurb: 'Demolition services in Homestead and South Miami-Dade. Full teardowns, licensed & insured.',
    neighborhoods: ['Florida City', 'Leisure City', 'Cutler Bay', 'Naranja', 'Princeton'],
    localContent: "South Miami-Dade properties often need more than a standard renovation — they need a full gut before any new work starts. We handle interior demolition for older homes in Homestead, Florida City, Cutler Bay, and surrounding communities. Kitchen and bathroom teardowns, drywall removal, structure clearing, and full debris haul-away. Big jobs welcome.",
    commonJobs: ['Full interior gut-out', 'Kitchen demolition', 'Bathroom teardown', 'Drywall removal', 'Structure clearing', 'Debris haul-away'],
  },
  aventura: {
    name: 'Aventura',
    county: 'Miami-Dade',
    phone: '3054500649',
    phoneFormatted: '305-450-0649',
    blurb: 'Demo contractor in Aventura. Condo gut-outs, kitchen and bathroom teardowns — same day.',
    neighborhoods: ['Williams Island', 'Hallandale Beach', 'Golden Beach', 'Sunny Isles Beach'],
    localContent: "Aventura and Sunny Isles Beach have a high concentration of luxury condos that get flipped and renovated regularly. Our demo crew knows how to work in these buildings cleanly — no mess in common areas, no damage to elevator cabs, all debris properly contained and removed. We handle kitchen gut-outs, bathroom teardowns, and full unit demo in Aventura and up the barrier island corridor.",
    commonJobs: ['Condo gut-out', 'Kitchen demolition', 'Bathroom teardown', 'Tile & flooring removal', 'Cabinet removal', 'High-rise interior demo'],
  },
  'north-miami': {
    name: 'North Miami',
    county: 'Miami-Dade',
    phone: '3054500649',
    phoneFormatted: '305-450-0649',
    blurb: 'Interior demolition in North Miami. Kitchen gut-outs, bathroom teardowns, tile removal.',
    neighborhoods: ['North Miami Beach', 'Biscayne Park', 'El Portal', 'Miami Shores', 'Ives Estates'],
    localContent: "North Miami's older housing stock — a lot of it built in the 1960s through 1980s — is constantly being updated. That means kitchens with popcorn ceilings and original tile that need full gut-outs before renovations can start. We handle interior demolition throughout North Miami, North Miami Beach, Miami Shores, and El Portal with same-day availability and full debris haul-away.",
    commonJobs: ['Kitchen gut-out', 'Bathroom teardown', 'Tile & flooring removal', 'Popcorn ceiling removal', 'Drywall removal', 'Full interior demo'],
  },
  'fort-lauderdale': {
    name: 'Fort Lauderdale',
    county: 'Broward',
    phone: '9547088090',
    phoneFormatted: '954-708-8090',
    blurb: 'Demolition contractor in Fort Lauderdale. Interior gut-outs, kitchen and bathroom demo — Broward County.',
    neighborhoods: ['Las Olas', 'Wilton Manors', 'Victoria Park', 'Flagler Village', 'Tarpon River', 'Rio Vista'],
    localContent: "Fort Lauderdale is Broward's renovation epicenter — Las Olas, Victoria Park, and the barrier islands see constant interior demo work. Our crew handles kitchen and bathroom teardowns, tile removal, cabinet gut-outs, and full interior demolition throughout Fort Lauderdale. We pull the permit if required, haul all debris, and leave a clean job site ready for your contractor.",
    commonJobs: ['Kitchen gut-out', 'Bathroom teardown', 'Tile & flooring removal', 'Cabinet & countertop removal', 'Drywall removal', 'Full interior demo'],
  },
  hollywood: {
    name: 'Hollywood',
    county: 'Broward',
    phone: '9547088090',
    phoneFormatted: '954-708-8090',
    blurb: 'Demolition services in Hollywood, FL. Interior teardowns, kitchen demo, same-day available.',
    neighborhoods: ['Hollywood Beach', 'Hallandale Beach', 'Dania Beach', 'West Hollywood', 'Emerald Hills'],
    localContent: "Hollywood, FL properties range from beachside condos to large suburban homes in Emerald Hills — and both see heavy renovation activity. We handle interior demolition throughout Hollywood: kitchen and bathroom teardowns, tile removal, shed and deck demo, and full gut-outs for flips or full renovations. Broward crew, same-day availability.",
    commonJobs: ['Kitchen gut-out', 'Bathroom teardown', 'Tile & flooring removal', 'Shed demolition', 'Deck removal', 'Full interior demo'],
  },
  'pembroke-pines': {
    name: 'Pembroke Pines',
    county: 'Broward',
    phone: '9547088090',
    phoneFormatted: '954-708-8090',
    blurb: 'Demo contractor in Pembroke Pines. Kitchen and bathroom teardowns, tile removal, same day.',
    neighborhoods: ['Pembroke Lakes', 'Chapel Trail', 'Silver Lakes', 'Towngate', 'Walnut Creek'],
    localContent: "Pembroke Pines has thousands of single-family homes in planned communities that were built in the 1980s and 1990s — and they're all due for kitchen and bathroom updates. We handle the demo side: tile removal, cabinet and countertop tear-out, drywall demo, and full debris haul-away throughout Chapel Trail, Silver Lakes, Towngate, and the rest of Pembroke Pines.",
    commonJobs: ['Kitchen gut-out', 'Bathroom teardown', 'Tile & flooring removal', 'Cabinet removal', 'Drywall removal', 'Full interior demo'],
  },
  miramar: {
    name: 'Miramar',
    county: 'Broward',
    phone: '9547088090',
    phoneFormatted: '954-708-8090',
    blurb: 'Demolition services in Miramar, FL. Interior gut-outs, kitchen demo, licensed and insured.',
    neighborhoods: ['Monarch Lakes', 'Riviera Isles', 'Sunset Lakes', 'Royal Palm Ranches', 'Nautica'],
    localContent: "Miramar homeowners are renovating at a steady pace — and our demo crew covers it. We handle interior demolition for kitchen gut-outs, bathroom teardowns, tile and flooring removal, and full property demolition prep throughout Miramar's residential communities. Quick turnaround, licensed and insured, and we haul everything away same day.",
    commonJobs: ['Kitchen gut-out', 'Bathroom teardown', 'Tile & flooring removal', 'Drywall removal', 'Shed demolition', 'Full interior demo'],
  },
  'coral-springs': {
    name: 'Coral Springs',
    county: 'Broward',
    phone: '9547088090',
    phoneFormatted: '954-708-8090',
    blurb: 'Demo contractor in Coral Springs. Kitchen gut-outs, bathroom teardowns, interior demolition.',
    neighborhoods: ['Wyndham Lakes', 'Eagle Trace', 'Heron Bay', 'Ramblewood', 'Forest Hills'],
    localContent: "Coral Springs is one of Broward's most active renovation markets — the homes in Eagle Trace, Heron Bay, and the city's other established communities are constantly being updated. We're the demo crew that does the teardown before the new kitchen or bathroom goes in. Full gut-outs, tile removal, drywall demo, and debris haul-away throughout Coral Springs.",
    commonJobs: ['Kitchen gut-out', 'Bathroom teardown', 'Tile & flooring removal', 'Cabinet removal', 'Drywall removal', 'Deck & patio removal'],
  },
  'pompano-beach': {
    name: 'Pompano Beach',
    county: 'Broward',
    phone: '9547088090',
    phoneFormatted: '954-708-8090',
    blurb: 'Interior demolition in Pompano Beach. Kitchen and bathroom teardowns, same-day service.',
    neighborhoods: ['Lighthouse Point', 'Coconut Creek', 'Pompano Beach Highlands', 'Crystal Lake', 'Hillsboro Beach'],
    localContent: "Pompano Beach spans from the coastline to inland communities like Coconut Creek — and our demo crew covers all of it. We handle kitchen gut-outs, bathroom teardowns, tile and flooring removal, and structural demo for older properties throughout Pompano Beach. Full debris haul-away included, same-day service available.",
    commonJobs: ['Kitchen gut-out', 'Bathroom teardown', 'Tile & flooring removal', 'Cabinet & countertop removal', 'Drywall removal', 'Full interior demo'],
  },
  'boca-raton': {
    name: 'Boca Raton',
    county: 'Broward',
    phone: '9547088090',
    phoneFormatted: '954-708-8090',
    blurb: 'Demolition contractor in Boca Raton. High-end interior gut-outs, kitchen and bathroom demo.',
    neighborhoods: ['Boca Del Mar', 'Mission Bay', 'Broken Sound', 'Woodfield', 'Boca West', 'Mizner Park'],
    localContent: "Boca Raton's high-value real estate market means renovations are done right — and the demo that precedes them needs to be clean and professional. We handle interior demolition for luxury home renovations throughout Boca Raton: full kitchen gut-outs, bathroom teardowns, tile and marble removal, built-in cabinet demolition, and complete debris haul-away. Discreet, careful work in Broken Sound, Boca West, and all surrounding communities.",
    commonJobs: ['Kitchen gut-out', 'Bathroom teardown', 'Tile & marble removal', 'Built-in cabinet demo', 'Drywall removal', 'Full interior gut-out'],
  },
}

export function generateStaticParams() {
  return Object.keys(cities).map((city) => ({ city }))
}

export async function generateMetadata({
  params,
}: {
  params: { city: string }
}): Promise<Metadata> {
  const data = cities[params.city]
  if (!data) return {}

  return {
    title: `Demolition Contractor ${data.name} FL | Interior Demo | R&D Trash Disposal`,
    description: `Licensed demolition contractor in ${data.name}, FL. Kitchen gut-outs, bathroom teardowns, tile removal, interior demolition with full debris haul-away. Free estimates — call ${data.phoneFormatted}.`,
    alternates: {
      canonical: `${siteUrl}/demolition/${params.city}`,
    },
    openGraph: {
      title: `Demolition Contractor ${data.name} FL | R&D Trash Disposal`,
      description: `Interior demolition in ${data.name}. Kitchen & bathroom teardowns, tile removal, full gut-outs. Licensed & insured. Call ${data.phoneFormatted}.`,
      url: `${siteUrl}/demolition/${params.city}`,
    },
  }
}

export default function DemoPage({
  params,
}: {
  params: { city: string }
}) {
  const data = cities[params.city]
  if (!data) notFound()

  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    name: 'R&D Trash Disposal',
    description: `Licensed demolition contractor in ${data.name}, FL. Interior demolition, kitchen gut-outs, bathroom teardowns.`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: data.name,
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    url: `${siteUrl}/demolition/${params.city}`,
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
              {data.county} County — Licensed &amp; Insured
            </p>
            <h1 className="font-display text-white text-6xl sm:text-7xl lg:text-8xl leading-none mb-6">
              DEMOLITION {data.name.toUpperCase()}
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto mb-10">
              {data.blurb}
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
                Get Instant Estimate
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
                  Demo Work in {data.name}
                </p>
                <h2 className="font-display text-[#0B1E3D] text-4xl sm:text-5xl mb-6">
                  TEAR IT OUT. WE HAUL IT.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {data.localContent}
                </p>
              </div>
              <div>
                <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-3">
                  Common Jobs in {data.name}
                </p>
                <div className="space-y-3">
                  {data.commonJobs.map((job) => (
                    <div
                      key={job}
                      className="flex items-center gap-3 bg-[#F5F7FA] rounded-xl px-5 py-4 border border-gray-100"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#F5A623] flex-shrink-0" />
                      <span className="text-[#0B1E3D] font-medium">{job}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-gray-500 text-sm">
                  Don&apos;t see your job type? Call us — we handle most interior demo work in {data.county} County.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-16 bg-[#F5F7FA]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">
                Full Service
              </p>
              <h2 className="font-display text-[#0B1E3D] text-5xl">
                DEMO + HAUL-AWAY.
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
                Every demolition job includes full debris removal. You don&apos;t need a separate hauling crew.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: 'We Demo', sub: 'Kitchens, bathrooms, tile, drywall, cabinets, decks, sheds — full teardowns' },
                { title: 'We Haul', sub: 'All debris removed same day. No dumpster rental needed' },
                { title: 'We Leave Clean', sub: 'Job site left broom-clean and ready for your next contractor' },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                  <p className="font-display text-[#0B1E3D] text-3xl mb-3">{item.title.toUpperCase()}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.sub}</p>
                </div>
              ))}
            </div>

            {/* Trust bar */}
            <div className="grid grid-cols-3 gap-6 border-t border-gray-200 mt-12 pt-10">
              {[
                { label: 'Licensed & Insured', sub: 'State of Florida' },
                { label: 'Same-Day Service', sub: '7 days a week' },
                { label: 'Instant Estimates', sub: 'No hidden fees' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="font-display text-[#0B1E3D] text-2xl">{item.label.toUpperCase()}</p>
                  <p className="text-gray-400 text-sm mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Neighborhoods */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-3">
              Where We Work
            </p>
            <h2 className="font-display text-[#0B1E3D] text-4xl mb-8">
              NEIGHBORHOODS WE COVER
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {data.neighborhoods.map((n) => (
                <span
                  key={n}
                  className="bg-[#F5F7FA] text-[#0B1E3D] text-sm font-medium px-3 py-1.5 rounded-full border border-gray-200"
                >
                  {n}
                </span>
              ))}
            </div>
            <p className="mt-6 text-gray-500 text-sm max-w-lg mx-auto">
              Don&apos;t see your area? Call us — if it&apos;s in {data.county} County, we likely cover it.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0B1E3D]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="font-display text-white text-5xl mb-4">
              READY TO TEAR IT OUT?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Call us or fill out the estimate form. We serve {data.name} and all of {data.county} County.
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
