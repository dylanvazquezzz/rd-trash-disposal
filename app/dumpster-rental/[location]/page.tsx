import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PhoneLink from '@/components/PhoneLink'
import QuoteLink from '@/components/QuoteLink'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rdtrash.org'

type LocationType = 'city' | 'county'

type DumpsterLocation = {
  name: string
  displayName: string
  type: LocationType
  county: string
  phone: string
  phoneFormatted: string
  blurb: string
  areas: string[]
  localContent: string
  contractorTypes: string[]
  lat: number
  lng: number
}

const locations: Record<string, DumpsterLocation> = {
  'miami-dade': {
    name: 'Miami-Dade County',
    displayName: 'Miami-Dade County',
    type: 'county',
    county: 'Miami-Dade',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Roll-off container rental for contractors across Miami-Dade County. 30 & 40 yard dumpsters for job sites from Homestead to Aventura.',
    areas: ['Miami', 'Doral', 'Hialeah', 'Kendall', 'Miami Beach', 'Coral Gables', 'Aventura', 'North Miami', 'Miami Gardens', 'Homestead', 'Cutler Bay', 'Miami Lakes', 'Sweetwater', 'Opa-locka'],
    localContent: "Miami-Dade County is South Florida's largest construction and renovation market — from high-rise condo builds along the coast to commercial buildouts in Doral and large-scale demo projects in the suburbs. We deliver 30 and 40 yard roll-off containers to active job sites throughout the entire county. Roofing contractors, GCs, demolition crews, and remodelers rely on us for reliable drop-off and pickup without the dispatch delays of larger franchises. Long-term rental, recurring service, and COI available on every container.",
    contractorTypes: ['General Contractors', 'Roofing Contractors', 'Demolition Crews', 'Remodelers', 'Property Managers', 'Commercial Developers'],
    lat: 25.77168,
    lng: -80.19179,
  },
  broward: {
    name: 'Broward County',
    displayName: 'Broward County',
    type: 'county',
    county: 'Broward',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Roll-off container rental for contractors across Broward County. 30 & 40 yard dumpsters for job sites from Weston to Deerfield Beach.',
    areas: ['Fort Lauderdale', 'Pompano Beach', 'Hollywood', 'Miramar', 'Coral Springs', 'Davie', 'Plantation', 'Pembroke Pines', 'Weston', 'Deerfield Beach', 'Hallandale Beach', 'Sunrise', 'Margate', 'Tamarac'],
    localContent: "Broward County's construction market spans from beachside condo projects in Fort Lauderdale to large-scale industrial and commercial builds in Davie, Weston, and Pompano's industrial corridors. We drop 30 and 40 yard roll-off containers at job sites throughout Broward — roofing tear-offs, demo debris, full construction cleanouts. Our local crew knows Broward's neighborhoods and responds faster than national franchises. Long-term rental, multi-container jobs, and COI are all available.",
    contractorTypes: ['General Contractors', 'Roofing Contractors', 'Demolition Crews', 'Remodelers', 'Industrial Tenants', 'Commercial Developers'],
    lat: 26.12231,
    lng: -80.14338,
  },
  miami: {
    name: 'Miami',
    displayName: 'Miami',
    type: 'city',
    county: 'Miami-Dade',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Dumpster rental in Miami for contractors. 30 & 40 yard roll-off containers for job sites in Brickell, Wynwood, Downtown, and across Miami.',
    areas: ['Brickell', 'Downtown Miami', 'Wynwood', 'Little Havana', 'Midtown', 'Edgewater', 'Overtown', 'Liberty City', 'Little Haiti', 'Allapattah'],
    localContent: "Miami's construction pace is relentless — high-rise builds, commercial gut-outs, residential renovations, and constant interior demo work across every neighborhood. We deliver 30 and 40 yard roll-off containers to active job sites in Brickell, Wynwood, Downtown, and across the city. Our crew knows Miami's access constraints: limited street space, building loading dock requirements, and tight scheduling. We work around your site conditions. COI available for any building or GC requirement. Long-term and recurring rental available.",
    contractorTypes: ['General Contractors', 'Roofing Contractors', 'Demolition Crews', 'Remodelers', 'Condo Developers', 'Property Managers'],
    lat: 25.76168,
    lng: -80.19179,
  },
  'fort-lauderdale': {
    name: 'Fort Lauderdale',
    displayName: 'Fort Lauderdale',
    type: 'city',
    county: 'Broward',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Dumpster rental in Fort Lauderdale. 30 & 40 yard roll-off containers for roofing, demo, and remodel job sites across Broward.',
    areas: ['Downtown Fort Lauderdale', 'Flagler Village', 'Cypress Creek', 'Las Olas', 'Oakland Park', 'Wilton Manors', 'Victoria Park', 'Tarpon River', 'Colee Hammock', 'Poinsettia Heights'],
    localContent: "Fort Lauderdale is Broward's construction epicenter — from waterfront condo renovations along the New River to large commercial builds on the Cypress Creek corridor. We deliver roll-off containers to active job sites throughout Fort Lauderdale and the surrounding areas. Roofing tear-offs, interior demo, construction site cleanouts — our containers handle the volume. Same-day delivery available on most calls. Long-term rental for multi-phase projects, COI on request.",
    contractorTypes: ['General Contractors', 'Roofing Contractors', 'Demolition Crews', 'Remodelers', 'Marine Industry Contractors', 'Property Managers'],
    lat: 26.12231,
    lng: -80.14338,
  },
  hialeah: {
    name: 'Hialeah',
    displayName: 'Hialeah',
    type: 'city',
    county: 'Miami-Dade',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Dumpster rental in Hialeah. 30 & 40 yard containers for industrial job sites, roofing crews, and demo contractors.',
    areas: ['Palm Springs Mile', 'Hialeah Industrial District', 'Auto Row', 'Hialeah Gardens', 'E 4th Ave Industrial', 'W 49th St Commercial', 'Westland Area', 'Opa-locka Border'],
    localContent: "Hialeah's dense industrial and commercial fabric generates high demand for job-site containers — roofing contractors working the residential neighborhoods, demo crews clearing warehouses along the industrial corridors, and remodelers tackling the constant renovation work across the city. We drop 30 and 40 yard roll-off containers across Hialeah with fast delivery and flexible pickup scheduling. Local crew, direct contact, no call center. COI and invoicing available on every container.",
    contractorTypes: ['Roofing Contractors', 'Demolition Crews', 'General Contractors', 'Remodelers', 'Industrial Operators', 'Property Managers'],
    lat: 25.85794,
    lng: -80.27836,
  },
  doral: {
    name: 'Doral',
    displayName: 'Doral',
    type: 'city',
    county: 'Miami-Dade',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Dumpster rental in Doral. 30 & 40 yard containers for the airport corridor, industrial parks, and commercial job sites.',
    areas: ['Blue Lagoon Industrial', 'Airport Corridor', 'Doral Industrial Park', 'NW 107th Ave Corridor', 'Fontainebleau', 'Virginia Gardens', 'Sweetwater Border', 'Medley Industrial'],
    localContent: "Doral and the airport corridor generate some of the highest-volume commercial and industrial removal work in Miami-Dade. Warehouse gut-outs, construction buildouts in the business parks, large demo projects along NW 107th — the jobs here are consistently bulk. We deliver 30 and 40 yard roll-off containers to Doral job sites and service the entire airport corridor. Long-term rental is common for multi-phase commercial projects in the area. COI available, invoicing standard.",
    contractorTypes: ['General Contractors', 'Warehouse Operators', 'Demolition Crews', 'Roofing Contractors', 'Commercial Developers', 'Industrial Tenants'],
    lat: 25.81973,
    lng: -80.35066,
  },
  'pompano-beach': {
    name: 'Pompano Beach',
    displayName: 'Pompano Beach',
    type: 'city',
    county: 'Broward',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Dumpster rental in Pompano Beach. 30 & 40 yard containers for industrial job sites, roofing, and construction debris.',
    areas: ['Pompano Industrial Park', 'Copans Rd Corridor', 'Dixie Hwy Commercial', 'Powerline Rd Businesses', 'McNab Rd Industrial', 'Sample Rd Commercial', 'Lighthouse Point Area', 'Coconut Creek Pkwy'],
    localContent: "Pompano Beach has one of Broward's largest industrial footprints — the Copans and Powerline corridors are packed with contractors, warehouses, and construction staging. We service roofing crews, GCs, and demolition operations throughout Pompano with reliable 30 and 40 yard roll-off container delivery. These jobs often run long — we offer long-term rental and recurring pickups for active sites. Same-day delivery available. COI on request, invoicing standard.",
    contractorTypes: ['Industrial Contractors', 'Roofing Contractors', 'General Contractors', 'Demolition Crews', 'Warehouse Operators', 'Commercial Developers'],
    lat: 26.23786,
    lng: -80.12480,
  },
  'coral-springs': {
    name: 'Coral Springs',
    displayName: 'Coral Springs',
    type: 'city',
    county: 'Broward',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Dumpster rental in Coral Springs. 30 & 40 yard containers for roofing, remodeling, and residential construction projects.',
    areas: ['Sample Rd Commercial', 'Coral Hills', 'University Dr Corridor', 'Wiles Rd Corridor', 'Atlantic Blvd Commercial', 'Coral Square Area', 'Sawgrass Expressway Corridor', 'NW 80th Ave Industrial'],
    localContent: "Coral Springs is a prime suburban construction market — active roofing contracts after storm season, residential remodels, and steady commercial renovation work across the business parks off University Drive and Sample Road. We deliver 30 and 40 yard containers to job sites throughout Coral Springs and handle recurring pickups for active roofing and remodeling crews. Fast delivery, flexible scheduling, and direct contact with the crew — not a call center. COI available on request.",
    contractorTypes: ['Roofing Contractors', 'Remodelers', 'General Contractors', 'Home Builders', 'Property Managers', 'Commercial Contractors'],
    lat: 26.27119,
    lng: -80.27065,
  },
  hollywood: {
    name: 'Hollywood',
    displayName: 'Hollywood',
    type: 'city',
    county: 'Broward',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Dumpster rental in Hollywood, FL. 30 & 40 yard containers for job sites from the beach corridor to the I-95 industrial strip.',
    areas: ['Hollywood Blvd Commercial', 'Young Circle Area', 'I-95 Business Corridor', 'Sheridan St Corridor', 'Dania Beach Industrial', 'Hollywood Beach', 'Pembroke Rd Corridor', 'S State Rd 7 Corridor'],
    localContent: "Hollywood's construction market runs from waterfront hospitality renovation projects along Hollywood Beach to industrial and commercial buildouts near Dania Beach and the I-95 corridor. We serve roofing contractors, GCs, demo crews, and remodelers throughout Hollywood with 30 and 40 yard roll-off container delivery. Same-day service available on most calls. Long-term rental for extended hotel renovation or commercial buildout projects. COI on request, invoicing standard.",
    contractorTypes: ['General Contractors', 'Roofing Contractors', 'Demolition Crews', 'Hospitality Contractors', 'Remodelers', 'Industrial Operators'],
    lat: 26.01120,
    lng: -80.14949,
  },
}

const containerSizes = [
  {
    size: '30 YD',
    label: 'STANDARD LOAD',
    dims: 'Approx. 22ft × 8ft × 5ft',
    bestFor: [
      'Roofing debris and tear-offs',
      'Bathroom gut-outs and remodels',
      'Medium renovation projects',
      'Smaller demolition jobs',
    ],
    capacity: 'Approx. 9 pickup truck loads',
  },
  {
    size: '40 YD',
    label: 'HEAVY VOLUME',
    dims: 'Approx. 22ft × 8ft × 8ft',
    bestFor: [
      'Full construction site cleanouts',
      'Large-scale demolition projects',
      'Warehouse clearances',
      'Multi-phase and long-term projects',
    ],
    capacity: 'Approx. 12 pickup truck loads',
  },
]

export function generateStaticParams() {
  return Object.keys(locations).map((location) => ({ location }))
}

export async function generateMetadata({
  params,
}: {
  params: { location: string }
}): Promise<Metadata> {
  const data = locations[params.location]
  if (!data) return {}

  const isCounty = data.type === 'county'
  const titleSuffix = isCounty ? 'FL' : `FL | ${data.county} County`

  return {
    title: `Dumpster Rental ${data.displayName}, ${titleSuffix} — 30 & 40 Yard Containers | R&D Trash Disposal`,
    description: `Roll-off dumpster rental in ${data.displayName}, FL. 30 & 40 yard containers for contractors, roofing, demo, and remodeling job sites. Long-term rental available. Licensed & insured. Call ${data.phoneFormatted}.`,
    alternates: {
      canonical: `${siteUrl}/dumpster-rental/${params.location}`,
    },
    openGraph: {
      title: `Dumpster Rental ${data.displayName} FL | R&D Trash Disposal`,
      description: `30 & 40 yard roll-off containers for ${data.displayName} job sites. Long-term rental, COI available. Call ${data.phoneFormatted}.`,
      url: `${siteUrl}/dumpster-rental/${params.location}`,
    },
  }
}

export default function DumpsterLocationPage({
  params,
}: {
  params: { location: string }
}) {
  const data = locations[params.location]
  if (!data) notFound()

  const isCounty = data.type === 'county'
  const businessId = `${siteUrl}/dumpster-rental/${params.location}#business`
  const serviceId = `${siteUrl}/dumpster-rental/${params.location}#service`

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': businessId,
    name: 'R&D Trash Disposal',
    description: `Roll-off dumpster rental in ${data.displayName}, FL. 30 and 40 yard containers for contractors, roofing, demolition, and remodeling job sites. Long-term rental and COI available.`,
    url: `${siteUrl}/dumpster-rental/${params.location}`,
    telephone: `+1${data.phone}`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: isCounty ? data.county : data.name,
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
    areaServed: isCounty
      ? [{ '@type': 'AdministrativeArea', name: `${data.county} County`, containedInPlace: { '@type': 'State', name: 'Florida' } }]
      : [
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
    name: `Dumpster Rental in ${data.displayName}, FL`,
    description: `Roll-off dumpster rental in ${data.displayName}, FL — 30 and 40 yard open-top containers for contractor job sites. Roofing tear-offs, demolition debris, construction cleanouts, and remodeling waste. Long-term and recurring rental available. COI on request.`,
    serviceType: 'Dumpster Rental',
    provider: {
      '@type': 'LocalBusiness',
      '@id': businessId,
      name: 'R&D Trash Disposal',
      telephone: `+1${data.phone}`,
    },
    areaServed: isCounty
      ? { '@type': 'AdministrativeArea', name: `${data.county} County`, containedInPlace: { '@type': 'State', name: 'Florida' } }
      : { '@type': 'City', name: data.name, containedInPlace: { '@type': 'State', name: 'Florida' } },
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        description: 'Pricing based on container size and rental duration. Free estimates provided.',
      },
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Dumpster Rental', item: `${siteUrl}/dumpster-rental` },
      { '@type': 'ListItem', position: 3, name: `Dumpster Rental ${data.displayName}`, item: `${siteUrl}/dumpster-rental/${params.location}` },
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
            src="/dumpster.jpg"
            alt="R&D Trash Disposal roll-off dumpster container"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#010c1c]/85" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-3">
              Roll-Off Container Rental — {isCounty ? data.displayName : `${data.county} County`}
            </p>
            <h1 className="font-display text-white text-6xl sm:text-7xl lg:text-8xl leading-none mb-4">
              DUMPSTER RENTAL
            </h1>
            <h2 className="font-display text-[#F5A623] text-4xl sm:text-5xl leading-none mb-6">
              {data.displayName.toUpperCase()}
            </h2>
            <div className="flex justify-center mb-8">
              <div className="h-1 w-40 rounded-full bg-[#F5A623]" />
            </div>
            <p className="text-white/70 text-xl max-w-2xl mx-auto mb-10">
              {data.blurb}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink
                phone={data.phone}
                display={data.phoneFormatted}
                source="dumpster_location_hero"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#010c1c] font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {data.phoneFormatted}
              </PhoneLink>
              <QuoteLink
                location={data.name}
                serviceType="dumpster_rental"
                source="dumpster_location_hero"
                className="inline-flex items-center justify-center border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:border-white/70 transition-all"
              >
                Get a Container Quote
              </QuoteLink>
            </div>
          </div>
        </section>

        {/* Credentials bar */}
        <section className="bg-[#F5A623] py-5 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                '30 & 40 Cubic Yard Containers',
                'Long-Term Rental Available',
                'Licensed & Insured',
                'COI on Request',
              ].map((item) => (
                <p key={item} className="font-display text-[#010c1c] text-lg tracking-wide uppercase">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Local content + who we serve */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-3">
                  Container Rental in {data.displayName}
                </p>
                <h2 className="font-display text-[#010c1c] text-4xl sm:text-5xl mb-6">
                  BUILT FOR JOB SITES.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {data.localContent}
                </p>
                <p className="mt-4 text-sm text-zinc-400">
                  Call{' '}
                  <PhoneLink
                    phone={data.phone}
                    display={data.phoneFormatted}
                    source="dumpster_location_inline"
                    className="text-amber-400 font-medium"
                  />{' '}
                  or submit a request — we respond within the hour.
                </p>
              </div>
              <div>
                <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-4">
                  Who We Work With
                </p>
                <div className="space-y-3">
                  {data.contractorTypes.map((type) => (
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

        {/* How it works */}
        <section className="bg-[#F5F7FA] py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">The Process</p>
              <h2 className="font-display text-[#010c1c] text-5xl sm:text-6xl mb-4">DROP OFF. LOAD. WE RETURN.</h2>
              <p className="text-gray-500 text-lg">Simple process for {data.displayName} job sites. We handle the logistics.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  num: '01',
                  title: 'We Drop It Off',
                  desc: 'We deliver the container to your job site in ' + data.displayName + ' and place it exactly where you need it.',
                },
                {
                  num: '02',
                  title: 'Your Crew Loads It',
                  desc: 'Load debris at your own pace — days or weeks. No rush, no pressure.',
                },
                {
                  num: '03',
                  title: 'We Pick It Up',
                  desc: "When it's full or you're ready, we haul everything away and dispose of it properly.",
                },
                {
                  num: '04',
                  title: 'Clean Container Returns',
                  desc: 'We bring back a clean container until your project is complete.',
                },
              ].map((step) => (
                <div key={step.num}>
                  <p className="font-display text-7xl text-[#F5A623] leading-none mb-3">{step.num}</p>
                  <h3 className="font-display text-[#010c1c] text-2xl mb-2">{step.title.toUpperCase()}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Container sizes */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">Container Options</p>
              <h2 className="font-display text-[#010c1c] text-5xl sm:text-6xl">30 &amp; 40 YARD CONTAINERS.</h2>
              <p className="mt-3 text-gray-500">Available for delivery across {data.displayName}.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {containerSizes.map((container) => (
                <div key={container.size} className="bg-[#F5F7FA] rounded-2xl p-8 border border-gray-100">
                  <p className="font-display text-8xl sm:text-9xl text-[#F5A623] leading-none mb-2">{container.size}</p>
                  <h3 className="font-display text-[#010c1c] text-3xl mb-1">{container.label}</h3>
                  <p className="text-gray-400 text-sm mb-6">{container.dims}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#010c1c]/40 mb-3">Best For</p>
                  <ul className="space-y-2">
                    {container.bestFor.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#F5A623] flex-shrink-0 mt-1.5" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-xs text-gray-400">{container.capacity}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="py-16 bg-[#F5F7FA]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-3">
              Where We Deliver
            </p>
            <h2 className="font-display text-[#010c1c] text-4xl mb-8">
              {isCounty ? 'AREAS WE SERVE' : 'NEIGHBORHOODS & AREAS WE COVER'}
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {data.areas.map((area) => (
                <span
                  key={area}
                  className="bg-white text-[#010c1c] text-sm font-medium px-3 py-1.5 rounded-full border border-gray-200"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="mt-6 text-gray-500 text-sm max-w-lg mx-auto">
              Don&apos;t see your area? Call us — if it&apos;s in {isCounty ? data.displayName : `${data.county} County`}, we deliver there.
            </p>
          </div>
        </section>

        {/* Why R&D */}
        <section className="bg-[#010c1c] py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-3">
                  Why Contractors Choose R&amp;D in {data.displayName}
                </p>
                <h2 className="font-display text-white text-5xl mb-6">LOCAL CREW. DIRECT CONTACT.</h2>
                <div className="space-y-5">
                  {[
                    {
                      heading: 'Long-term & recurring rental',
                      body: 'Multi-phase projects stay covered. We return clean containers until the job is done.',
                    },
                    {
                      heading: 'Flexible pickup scheduling',
                      body: 'We work around your job site hours, crew, and project timeline — not ours.',
                    },
                    {
                      heading: 'Certificate of insurance',
                      body: 'COI provided on request for any GC, building, or contractor requirement.',
                    },
                    {
                      heading: 'Licensed & insured',
                      body: 'Proper paperwork, proper disposal, no surprises.',
                    },
                    {
                      heading: 'Not a franchise',
                      body: 'Local South Florida crew with direct contact — no call centers, no middlemen.',
                    },
                  ].map((item) => (
                    <div key={item.heading} className="flex gap-4">
                      <div className="w-1 bg-[#F5A623] rounded-full flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-white mb-1">{item.heading}</p>
                        <p className="text-white/60 text-sm leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 rounded-2xl p-8 text-center border border-white/10">
                <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-4">Get a Container Quote</p>
                <h3 className="font-display text-white text-4xl mb-4">RESPOND WITHIN THE HOUR.</h3>
                <p className="text-white/60 text-sm mb-8">
                  Tell us your {data.displayName} job site address, container size, and project timeline. We&apos;ll get back with availability and pricing.
                </p>
                <QuoteLink
                  location={data.name}
                  serviceType="dumpster_rental"
                  source="dumpster_location_why"
                  className="block w-full bg-white text-[#010c1c] font-bold px-6 py-4 rounded-lg text-center hover:bg-gray-100 transition-all mb-4"
                >
                  Request a Quote
                </QuoteLink>
                <PhoneLink
                  phone={data.phone}
                  display={`Call ${data.phoneFormatted}`}
                  source="dumpster_location_why"
                  className="block w-full border-2 border-white/30 text-white font-semibold px-6 py-4 rounded-lg text-center hover:border-white/60 transition-all"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#F5F7FA] py-16 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-[#010c1c] text-5xl mb-4">
              READY TO GET A CONTAINER ON SITE?
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Serving {data.displayName} and all of {isCounty ? data.displayName : `${data.county} County`}. Same-day delivery available on most jobs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink
                phone={data.phone}
                source="dumpster_location_final_cta"
                className="inline-flex items-center justify-center gap-2 bg-[#010c1c] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#0a1e3a] transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {data.phoneFormatted}
              </PhoneLink>
              <QuoteLink
                location={data.name}
                serviceType="dumpster_rental"
                source="dumpster_location_final_cta"
                className="inline-flex items-center justify-center border-2 border-[#010c1c]/20 text-[#010c1c] font-semibold px-8 py-4 rounded-lg hover:border-[#010c1c]/40 transition-all"
              >
                Request a Container Quote
              </QuoteLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
