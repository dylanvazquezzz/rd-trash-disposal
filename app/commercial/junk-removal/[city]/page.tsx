import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PhoneLink from '@/components/PhoneLink'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rdtrash.org'

type CommercialCity = {
  name: string
  county: 'Miami-Dade' | 'Broward'
  phone: string
  phoneFormatted: string
  blurb: string
  areas: string[]
  localContent: string
  clientTypes: string[]
  lat: number
  lng: number
}

const cities: Record<string, CommercialCity> = {
  miami: {
    name: 'Miami',
    county: 'Miami-Dade',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Commercial junk removal for Miami businesses. Office cleanouts, construction debris, warehouse haul-outs — invoicing and COI available.',
    areas: ['Brickell', 'Downtown Miami', 'Wynwood', 'Doral Corridor', 'NW Industrial', 'Little Havana', 'Midtown', 'Edgewater', 'Overtown', 'Liberty City'],
    localContent: "Miami's commercial market moves fast — offices get cleared, restaurants close and reopen, construction crews leave debris behind. We work directly with property managers, GCs, and business owners across Brickell, Wynwood, and the downtown corridor. Whether it's an office gut-out, post-renovation debris on a job site, or a full commercial cleanout, we show up with a hydraulic-bed F350 and haul everything out in one trip. Invoicing and certificate of insurance available on every job.",
    clientTypes: ['Property Managers', 'General Contractors', 'Office Managers', 'Restaurant Owners', 'Retail Businesses', 'HOAs'],
    lat: 25.76168,
    lng: -80.19179,
  },
  doral: {
    name: 'Doral',
    county: 'Miami-Dade',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Commercial junk removal in Doral. Warehouse cleanouts, office debris, construction haul-away — bulk loads welcome.',
    areas: ['Blue Lagoon', 'Medley', 'Airport Corridor', 'Virginia Gardens', 'Sweetwater', 'Doral Industrial Park', 'NW 107th Ave Corridor', 'Fontainebleau'],
    localContent: "Doral is Miami-Dade's commercial engine — the airport corridor, industrial parks, and business campuses generate a constant flow of junk removal work. We service warehouses being cleared, offices being relocated, construction sites needing debris haul-away, and distribution centers doing equipment turnover. Our F350 runs the Doral corridor daily. Bulk loads, recurring contracts, and same-day service all available. Invoicing standard on every commercial job.",
    clientTypes: ['Warehouse Operators', 'Logistics Companies', 'Property Managers', 'General Contractors', 'Office Tenants', 'Distribution Centers'],
    lat: 25.81973,
    lng: -80.35066,
  },
  'fort-lauderdale': {
    name: 'Fort Lauderdale',
    county: 'Broward',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Commercial junk removal in Fort Lauderdale. Office cleanouts, job site debris, marine industry haul-away.',
    areas: ['Downtown Fort Lauderdale', 'Cypress Creek', 'Las Olas', 'Flagler Village', 'Wilton Manors', 'Oakland Park', 'Pompano Corridor', 'I-95 Business Corridor'],
    localContent: "Fort Lauderdale is Broward's commercial and hospitality hub — and commercial junk removal here spans everything from downtown office cleanouts to marina-adjacent warehouse hauls. We work with GCs, property managers, and business owners throughout Fort Lauderdale and the Cypress Creek corridor. Construction debris, office furniture, bulk commercial waste — we haul it all with our hydraulic-bed truck. COI available, invoicing standard, same-day service on most calls.",
    clientTypes: ['Property Managers', 'General Contractors', 'Marine Industry', 'Hospitality & Hotels', 'Office Tenants', 'Retail Businesses'],
    lat: 26.12231,
    lng: -80.14338,
  },
  hialeah: {
    name: 'Hialeah',
    county: 'Miami-Dade',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Commercial junk removal in Hialeah. Industrial cleanouts, warehouse haul-away, construction debris removal.',
    areas: ['Palm Springs Mile', 'Hialeah Industrial District', 'Auto Row', 'Hialeah Gardens', 'Westland', 'Opa-locka Corridor', 'W 49th St Commercial', 'E 4th Ave Industrial'],
    localContent: "Hialeah's dense industrial and commercial base — auto shops, light manufacturing, warehouses, and the Palm Springs Mile retail corridor — generates steady commercial removal work. We serve business owners and property managers throughout Hialeah with fast, reliable junk haul-away. Metal scrap, concrete debris, warehouse cleanouts, commercial furniture removal — our hydraulic-bed truck handles bulk loads that smaller operators can't. Invoicing and COI on every job.",
    clientTypes: ['Auto Industry Businesses', 'Light Manufacturers', 'Warehouse Operators', 'Retail Property Managers', 'General Contractors', 'Industrial Tenants'],
    lat: 25.85794,
    lng: -80.27836,
  },
  'miami-beach': {
    name: 'Miami Beach',
    county: 'Miami-Dade',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Commercial junk removal in Miami Beach. Hotel & hospitality cleanouts, condo property management, retail haul-away.',
    areas: ['South Beach', 'Mid-Beach', 'North Beach', 'Lincoln Road', 'Collins Ave Corridor', 'Alton Road', 'Surfside', 'Bal Harbour'],
    localContent: "Miami Beach's commercial landscape is driven by hospitality and high-density condo management. Hotels turning over rooms, property managers clearing units between tenants, restaurants closing or remodeling, retail on Lincoln Road changing hands — all of it generates removal work. We understand the operational constraints of working on the Beach: permit requirements, building hours, elevator access. COI provided for every building that requires it. Invoicing standard.",
    clientTypes: ['Hotel & Hospitality', 'Condo Property Managers', 'Restaurant Owners', 'Retail Property Managers', 'Building Managers', 'Event Venues'],
    lat: 25.79065,
    lng: -80.13005,
  },
  'boca-raton': {
    name: 'Boca Raton',
    county: 'Broward',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Commercial junk removal in Boca Raton. Corporate office cleanouts, medical office haul-away, retail removal.',
    areas: ['Boca Corporate Center', 'Arvida Parkway', 'Town Center Corridor', 'Broken Sound', 'Glades Rd Commercial', 'Yamato Rd Offices', 'East Boca Commercial', 'Medical Arts District'],
    localContent: "Boca Raton's corporate and medical office market is one of South Florida's most active. Office relocations, medical practice cleanouts, corporate furniture disposal, and post-renovation debris — we handle commercial removal for businesses throughout Boca's office corridors and the Town Center area. Our crew is professional and discreet. COI provided, invoicing available, and we work around your schedule to minimize disruption to your tenants or clients.",
    clientTypes: ['Corporate Property Managers', 'Medical Practices', 'Law Firms', 'Office Tenants', 'General Contractors', 'Retail Property Managers'],
    lat: 26.35479,
    lng: -80.08309,
  },
  'pompano-beach': {
    name: 'Pompano Beach',
    county: 'Broward',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Commercial junk removal in Pompano Beach. Industrial haul-away, warehouse cleanouts, construction debris.',
    areas: ['Pompano Industrial Park', 'Copans Rd Corridor', 'Dixie Hwy Commercial', 'Powerline Rd Businesses', 'McNab Rd Industrial', 'Coconut Creek Pkwy', 'Sample Rd Commercial', 'Lighthouse Point Area'],
    localContent: "Pompano Beach has one of Broward's largest industrial footprints — warehouses, distribution, light manufacturing, and construction staging all concentrated along the Copans and Powerline corridors. We service these businesses with bulk junk haul-away, warehouse cleanouts, construction debris removal, and scrap metal disposal. Our hydraulic-bed F350 is built for the kind of volume that these jobs produce. Invoicing standard, COI available on request.",
    clientTypes: ['Industrial Tenants', 'Warehouse Operators', 'General Contractors', 'Distribution Companies', 'Manufacturing Facilities', 'Property Managers'],
    lat: 26.23786,
    lng: -80.12480,
  },
  miramar: {
    name: 'Miramar',
    county: 'Broward',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Commercial junk removal in Miramar. Corporate cleanouts, office haul-away, construction debris removal.',
    areas: ['Miramar Pkwy Corporate', 'Pembroke Commerce Center', 'Red Road Corridor', 'SW 145th Ave Businesses', 'Miramar Industrial', 'Pembroke Pines Border', 'Palm Ave Commercial', 'University Dr Corridor'],
    localContent: "Miramar is home to major corporate facilities and a growing commercial sector along the Miramar Parkway and Pembroke Commerce corridors. Companies relocating, doing office turnovers, or running construction projects call us for fast, professional junk removal. We understand the expectations of corporate environments — on time, invoiced properly, COI in hand. Our hydraulic-bed truck handles bulk commercial loads and we work around building access schedules.",
    clientTypes: ['Corporate Facilities Teams', 'Property Managers', 'General Contractors', 'Office Tenants', 'Distribution Companies', 'HOA Management'],
    lat: 25.98724,
    lng: -80.23285,
  },
  'coral-springs': {
    name: 'Coral Springs',
    county: 'Broward',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Commercial junk removal in Coral Springs. Office cleanouts, retail haul-away, construction site debris.',
    areas: ['Sample Rd Commercial', 'Coral Hills Business Park', 'University Dr Corridor', 'Wiles Rd Businesses', 'Atlantic Blvd Commercial', 'Coral Square Area', 'Sawgrass Expressway Corridor', 'NW 80th Ave Industrial'],
    localContent: "Coral Springs has a dense mix of medical offices, retail strips, and suburban business parks spread along Sample Road, University Drive, and Atlantic Boulevard. We service commercial tenants and property managers throughout the city — office cleanouts, retail store haul-outs, medical office furniture disposal, and post-construction debris removal. Professional service with invoicing and COI available. Same-day service on most Coral Springs commercial calls.",
    clientTypes: ['Medical Offices', 'Retail Property Managers', 'Office Tenants', 'General Contractors', 'Business Park Managers', 'Restaurant Owners'],
    lat: 26.27119,
    lng: -80.27065,
  },
  hollywood: {
    name: 'Hollywood',
    county: 'Broward',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Commercial junk removal in Hollywood, FL. Hospitality cleanouts, office haul-away, construction debris.',
    areas: ['Hollywood Blvd Commercial', 'Young Circle Area', 'I-95 Business Corridor', 'Sheridan St Commercial', 'Dania Beach Industrial', 'Hollywood Beach Hospitality', 'Pembroke Rd Businesses', 'S State Rd 7 Corridor'],
    localContent: "Hollywood sits between Miami and Fort Lauderdale — and its commercial base reflects both markets. Hospitality properties along the beach, office parks along the I-95 corridor, and industrial tenants near Dania Beach all generate consistent commercial removal work. We service hotels doing room turnovers, businesses relocating on Hollywood Boulevard, GCs clearing construction debris, and property managers doing full commercial cleanouts. Invoicing and COI available on every job.",
    clientTypes: ['Hotel & Hospitality', 'Property Managers', 'General Contractors', 'Retail Businesses', 'Office Tenants', 'Industrial Tenants'],
    lat: 26.01120,
    lng: -80.14949,
  },
  kendall: {
    name: 'Kendall',
    county: 'Miami-Dade',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Commercial junk removal in Kendall. Medical office cleanouts, retail haul-away, construction debris removal.',
    areas: ['Baptist Health Area', 'Kendall Dr Commercial', 'Dadeland Corridor', 'Miller Rd Businesses', 'Sunset Dr Commercial', 'SW 88th St Strip', 'Westchester Medical', 'Hammocks Business Park'],
    localContent: "Kendall's commercial core is anchored by Baptist Health, the Dadeland corridor, and a dense network of medical offices and retail strips along Kendall Drive. We work with medical practices doing office turnovers, retail property managers clearing out spaces, and GCs handling post-renovation debris in the area. Kendall businesses expect professional service — and we deliver: on time, properly invoiced, COI provided for any building that requires it.",
    clientTypes: ['Medical Practices', 'Retail Property Managers', 'Office Tenants', 'General Contractors', 'Healthcare Facilities', 'HOA Management'],
    lat: 25.67899,
    lng: -80.37168,
  },
}

const commercialServices = [
  'Office furniture & equipment removal',
  'Warehouse cleanouts',
  'Construction debris hauling',
  'Concrete, tile & drywall removal',
  'Scrap metal hauling',
  'Post-construction cleanup',
  'Property management cleanouts',
  'Restaurant & retail equipment removal',
  'Bulk trash removal',
  'Recurring service available',
]

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
    title: `Commercial Junk Removal ${data.name} FL | Licensed & Insured`,
    description: `Commercial junk removal in ${data.name}, FL. Office cleanouts, warehouse haul-away, construction debris, scrap metal. Invoicing & COI available. Free estimates — call ${data.phoneFormatted}.`,
    alternates: {
      canonical: `${siteUrl}/commercial/junk-removal/${params.city}`,
    },
    openGraph: {
      title: `Commercial Junk Removal ${data.name} FL | R&D Trash Disposal`,
      description: `Commercial junk removal in ${data.name}. Office cleanouts, construction debris, bulk haul-away. Invoicing & COI available. Call ${data.phoneFormatted}.`,
      url: `${siteUrl}/commercial/junk-removal/${params.city}`,
    },
  }
}

export default function CommercialCityPage({
  params,
}: {
  params: { city: string }
}) {
  const data = cities[params.city]
  if (!data) notFound()

  const businessId = `${siteUrl}/commercial/junk-removal/${params.city}#business`
  const serviceId = `${siteUrl}/commercial/junk-removal/${params.city}#service`

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': businessId,
    name: 'R&D Trash Disposal',
    description: `Commercial junk removal in ${data.name}, FL. Office cleanouts, warehouse haul-away, construction debris, and scrap metal hauling. Invoicing and COI available.`,
    url: `${siteUrl}/commercial/junk-removal/${params.city}`,
    telephone: `+1${data.phone}`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: data.name,
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: data.lat,
      longitude: data.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '07:00',
        closes: '19:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: data.name, containedInPlace: { '@type': 'State', name: 'Florida' } },
      ...data.areas.map((area) => ({ '@type': 'Place', name: area })),
    ],
    parentOrganization: {
      '@type': 'Organization',
      '@id': `${siteUrl}#organization`,
      name: 'R&D Trash Disposal',
      url: siteUrl,
    },
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': serviceId,
    name: `Commercial Junk Removal in ${data.name}, FL`,
    description: `Commercial junk removal services in ${data.name}, FL — office cleanouts, warehouse haul-away, construction debris removal, concrete and tile disposal, scrap metal hauling, and property management cleanouts. Invoicing and COI available.`,
    serviceType: 'Commercial Junk Removal',
    provider: {
      '@type': 'LocalBusiness',
      '@id': businessId,
      name: 'R&D Trash Disposal',
      telephone: `+1${data.phone}`,
    },
    areaServed: {
      '@type': 'City',
      name: data.name,
      containedInPlace: { '@type': 'State', name: 'Florida' },
    },
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        description: 'Pricing based on volume and job type. Free estimates provided.',
      },
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Commercial Junk Removal', item: `${siteUrl}/commercial/junk-removal` },
      { '@type': 'ListItem', position: 3, name: `Commercial Junk Removal ${data.name}`, item: `${siteUrl}/commercial/junk-removal/${params.city}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 px-4">
          <Image
            src="/trash.pickuptruck.png"
            alt="R&D Trash Disposal truck and trailer"
            fill
            className="object-cover object-[center_65%]"
            priority
          />
          <div className="absolute inset-0 bg-[#010c1c]/70" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-3">
              Commercial Service — {data.county} County
            </p>
            <h1 className="font-display text-white text-6xl sm:text-7xl lg:text-8xl leading-none mb-6">
              COMMERCIAL JUNK REMOVAL {data.name.toUpperCase()}
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto mb-10">
              {data.blurb}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink
                phone={data.phone}
                display={data.phoneFormatted}
                source="commercial_city_hero"
                className="inline-flex items-center justify-center gap-2 bg-[#F5A623] text-[#010c1c] font-bold px-8 py-4 rounded-lg text-lg hover:bg-amber-400 transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {data.phoneFormatted}
              </PhoneLink>
              <a
                href="/commercial/estimate"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-[#010c1c] transition-all"
              >
                Request Commercial Quote
              </a>
            </div>
          </div>
        </section>

        {/* Local content + who we serve */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-3">
                  Commercial Work in {data.name}
                </p>
                <h2 className="font-display text-[#010c1c] text-4xl sm:text-5xl mb-6">
                  BUILT FOR BUSINESS.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {data.localContent}
                </p>
                <p className="mt-4 text-sm text-zinc-400">
                  Call <PhoneLink phone={data.phone} display={data.phoneFormatted} source="commercial_city_inline" className="text-amber-400 font-medium" /> or submit a request — we respond within the hour.
                </p>
              </div>
              <div>
                <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-4">
                  Who We Work With
                </p>
                <div className="space-y-3">
                  {data.clientTypes.map((type) => (
                    <div
                      key={type}
                      className="flex items-center gap-3 bg-[#F5F7FA] rounded-xl px-5 py-4 border border-gray-100"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#F5A623] flex-shrink-0" />
                      <span className="text-[#010c1c] font-medium">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-[#F5F7FA]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">
                What We Handle
              </p>
              <h2 className="font-display text-[#010c1c] text-5xl sm:text-6xl">
                ANY COMMERCIAL LOAD.
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
                Serving {data.name} and all of {data.county} County. F350 hydraulic truck — built for bulk.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-12">
              {commercialServices.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100"
                >
                  <div className="w-2 h-2 rounded-full bg-[#F5A623] flex-shrink-0" />
                  <span className="text-[#010c1c] font-medium">{service}</span>
                </div>
              ))}
            </div>

            {/* Trust bar */}
            <div className="grid grid-cols-3 gap-6 border-t border-gray-200 pt-10">
              {[
                { label: 'Licensed & Insured', sub: 'State of Florida' },
                { label: 'Invoicing Available', sub: 'Standard on all commercial jobs' },
                { label: 'COI on Request', sub: 'For buildings that require it' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="font-display text-[#010c1c] text-2xl">{item.label.toUpperCase()}</p>
                  <p className="text-gray-400 text-sm mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-3">
              Where We Work
            </p>
            <h2 className="font-display text-[#010c1c] text-4xl mb-8">
              BUSINESS DISTRICTS WE COVER
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {data.areas.map((area) => (
                <span
                  key={area}
                  className="bg-[#F5F7FA] text-[#010c1c] text-sm font-medium px-3 py-1.5 rounded-full border border-gray-200"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="mt-6 text-gray-500 text-sm max-w-lg mx-auto">
              Don&apos;t see your area? Call us — if it&apos;s in {data.county} County, we cover it.
            </p>
          </div>
        </section>

        {/* Internal link to residential JR page for this city */}
        <section className="py-10 bg-[#F5F7FA]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-gray-500 text-sm">
              Need residential junk removal in {data.name}?{' '}
              <a
                href={`/junk-removal-${params.city}`}
                className="text-[#F5A623] font-semibold hover:underline"
              >
                See our residential service page →
              </a>
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#010c1c]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="font-display text-white text-5xl mb-4">
              READY TO GET IT CLEARED?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Submit a commercial request or call direct. We serve {data.name} and all of {data.county} County. Invoicing and COI available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink
                phone={data.phone}
                display={data.phoneFormatted}
                source="commercial_city_cta"
                className="inline-flex items-center justify-center gap-2 bg-[#F5A623] text-[#010c1c] font-bold px-8 py-4 rounded-lg hover:bg-amber-400 transition-all hover:scale-105"
              >
                Call {data.phoneFormatted}
              </PhoneLink>
              <a
                href="/commercial/estimate"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#010c1c] transition-all"
              >
                Request Commercial Quote
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
