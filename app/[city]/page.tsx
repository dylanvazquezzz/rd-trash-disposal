import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PhoneLink from '@/components/PhoneLink'

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
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'From Wynwood to Brickell to Little Havana, we cover all of Miami. Call for same-day pickup.',
    neighborhoods: ['Brickell', 'Wynwood', 'Little Havana', 'Coral Gables', 'Coconut Grove', 'Edgewater', 'Downtown', 'Midtown', 'Liberty City', 'Overtown', 'Allapattah', 'Little Haiti', 'Design District', 'Upper East Side', 'Flagami', 'Westchester', 'Coral Way', 'Shenandoah', 'Spring Garden', 'Model City'],
    localContent: "Miami is one of South Florida's most active renovation markets, and we're the crew that handles the mess. Whether it's a Brickell condo gut-out, a Wynwood loft cleanout, an estate cleanout in Coral Gables, or a garage haul-out in Westchester or Flagami, we show up same day and haul everything away. Furniture, appliances, construction debris, yard waste — from Downtown to Allapattah to the Upper East Side, no job too big or too small in Miami-Dade.",
  },
  'miami-beach': {
    name: 'Miami Beach',
    county: 'Miami-Dade',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Serving Miami Beach and South Beach. Furniture, appliances, cleanouts — same day.',
    neighborhoods: ['South Beach', 'South of Fifth', 'Flamingo / Lummus', 'Mid-Beach', 'North Beach', 'Surfside', 'Bal Harbour', 'Bay Harbor Islands', 'Normandy Isle', 'Normandy Shores', 'La Gorce Island', 'Venetian Islands', 'Palm Island', 'Hibiscus Island', 'Biscayne Point', 'North Shore', 'Sunny Isles Beach', 'Indian Creek'],
    localContent: "Miami Beach's dense condo market means constant unit turnover — and we handle the haul-outs. Dumpster permits on the Beach are a headache, which is why local residents and property managers call us for same-day furniture removal, appliance swaps, and full unit cleanouts from South of Fifth to Bal Harbour. We serve every neighborhood on the barrier island and the surrounding communities. No dumpster needed, no permit required.",
  },
  hialeah: {
    name: 'Hialeah',
    county: 'Miami-Dade',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Local junk removal in Hialeah. We haul furniture, appliances, yard waste, and more.',
    neighborhoods: ['Hialeah Gardens', 'Palm Springs North', 'Palm Springs Lakes', 'Miami Lakes', 'Opa-locka', 'Medley', 'Hialeah Park', 'Country Club', 'Westland', 'East Hialeah', 'West Hialeah', 'North Hialeah', 'Hialeah Heights', 'Garden Lakes', 'Palm Lakes', 'Royal Poinciana', 'Lake Hialeah', 'Carol City'],
    localContent: "Hialeah is one of the most densely populated cities in Florida, and our team runs routes through it daily. We handle garage cleanouts, furniture removal, and bulk junk haul-away across all of Hialeah — from East Hialeah near the airport corridor to West Hialeah and Hialeah Gardens, down through Palm Springs Lakes and north into Miami Lakes and Opa-locka. If it won't fit in your trash can, we'll take it.",
  },
  doral: {
    name: 'Doral',
    county: 'Miami-Dade',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Serving Doral and surrounding areas. Same-day junk removal and demolition available.',
    neighborhoods: ['Blue Lagoon', 'Sweetwater', 'Medley', 'Virginia Gardens', 'Fontainebleau', 'Downtown Doral', 'CityPlace Doral', 'Doral Park', 'Doral Isles', 'Waterford', 'Morgan Levy', 'Miami Springs', 'Flagler Station', 'Palm Springs Mile', 'Northwest Doral', 'Doral Commons', 'Beacon Tradeport', 'Golf Club area'],
    localContent: "Doral's commercial and residential growth means constant renovation work — and a constant need for debris removal. We serve businesses and homeowners throughout Doral, Sweetwater, and Medley with same-day junk haul-away, office furniture removal, construction debris cleanup, and full property cleanouts. From Downtown Doral and CityPlace to the Blue Lagoon corridor, we run routes near the airport daily.",
  },
  kendall: {
    name: 'Kendall',
    county: 'Miami-Dade',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Kendall junk removal and cleanouts. Any size load, same-day service available.',
    neighborhoods: ['Kendale Lakes', 'West Kendall', 'The Hammocks', 'Pinecrest', 'Glenvar Heights', 'Sunset', 'Dadeland', 'South Miami', 'Cutler Ridge', 'Country Walk', 'Palmetto Estates', 'Three Lakes', 'Snapper Creek', 'Coral Reef', 'Quail Heights', 'Richmond Heights', 'Howard Drive', 'Miller Drive', 'Killian Drive', 'East Kendall'],
    localContent: "Kendall's single-family neighborhoods generate some of the biggest cleanout jobs we see — full garage haul-outs, furniture removal after a move, shed cleanouts, and bulk junk after a renovation. We cover all of Kendall from Pinecrest and Dadeland on the east to West Kendall and Country Walk on the west, from Snapper Creek down to Cutler Ridge, with same-day availability on most requests.",
  },
  homestead: {
    name: 'Homestead',
    county: 'Miami-Dade',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Serving Homestead and South Miami-Dade. Full property cleanouts and junk haul-away.',
    neighborhoods: ['Florida City', 'Leisure City', 'Cutler Bay', 'Naranja', 'Princeton', 'Goulds', 'Perrine', 'Palmetto Bay', 'Redland', 'South Dade', 'Silver Palm', 'Biscayne Estates', 'Stiles Manor', 'Country Club Homes', 'Homestead Gardens', 'Palm Drive area', 'Homestead Downtown', 'Ingraham Highway'],
    localContent: "South Miami-Dade has large lots and older properties that generate big cleanout jobs. We serve Homestead, Florida City, Cutler Bay, Palmetto Bay, Perrine, and the surrounding agricultural communities — from Redland and the Ingraham Highway corridor all the way south through Naranja and Princeton. Full property cleanouts, post-storm debris removal, bulk junk haul-away, and appliance disposal. If you're clearing land, cleaning out a rental, or doing a full renovation teardown — we've got you covered.",
  },
  aventura: {
    name: 'Aventura',
    county: 'Miami-Dade',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Junk removal in Aventura. Furniture, appliances, estate cleanouts — same day.',
    neighborhoods: ['Williams Island', 'Hallandale Beach', 'Golden Beach', 'Sunny Isles Beach', 'North Miami Beach', 'Turnberry', 'Porto Vita', 'Hidden Bay', 'Aventura Isles', 'Mystic Pointe', 'Country Club Drive', 'Ojus', 'West Aventura', 'Highland Lakes', 'Skylake', 'North Shore', 'Biscayne Gardens', 'Ives Estates'],
    localContent: "Aventura and the surrounding high-rise corridor see constant unit flips and estate cleanouts. We specialize in furniture removal and appliance haul-outs for condo renovations — no elevator damage, no building violations, just fast removal. We cover Aventura, Sunny Isles Beach, Golden Beach, and the surrounding communities from Hallandale Beach to North Miami Beach and Ojus. Same-day service available.",
  },
  'north-miami': {
    name: 'North Miami',
    county: 'Miami-Dade',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'North Miami junk removal and demolition. Licensed, insured, same-day available.',
    neighborhoods: ['North Miami Beach', 'Biscayne Park', 'El Portal', 'Miami Shores', 'Ives Estates', 'Scott Lake', 'Norland', 'Ojus', 'North Miami Heights', 'Highland Lakes', 'Keystone Islands', 'Arch Creek', 'Biscayne Gardens', 'West Little River', 'Skylake', 'Westview', 'Biscayne Point', 'Palm Springs North'],
    localContent: "North Miami and its surrounding communities are a mix of older single-family homes and condos that regularly need full cleanouts. We handle furniture removal, appliance disposal, yard waste haul-away, and demolition debris across Miami Shores, El Portal, Biscayne Park, Scott Lake, Norland, and everything in between — from West Little River on the south to Ojus and Ives Estates in the north. Same-day service throughout the area.",
  },
  'fort-lauderdale': {
    name: 'Fort Lauderdale',
    county: 'Broward',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Fort Lauderdale junk removal and interior demolition. Serving all of Broward County.',
    neighborhoods: ['Las Olas', 'Wilton Manors', 'Victoria Park', 'Flagler Village', 'Tarpon River', 'Colee Hammock', 'Rio Vista', 'Poinsettia Heights', 'Sailboat Bend', 'Croissant Park', 'Harbordale', 'Nurmi Isles', 'Idlewyld', 'Middle River Terrace', 'Edgewood', 'Lauderdale Manors', 'Oakland Park', 'Coral Ridge', 'Progresso Village', 'Shady Banks'],
    localContent: "Fort Lauderdale is our Broward home base. The barrier island and Las Olas neighborhoods are renovation-heavy — we handle gut-outs in Victoria Park, construction debris along the isles, and estate cleanouts throughout the city. From Wilton Manors and Oakland Park in the north to Rio Vista and Harbordale in the south, and from Sailboat Bend out to Coral Ridge and beyond, our crew runs Fort Lauderdale routes daily.",
  },
  hollywood: {
    name: 'Hollywood',
    county: 'Broward',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Hollywood FL junk removal. Furniture, appliances, yard waste — same-day haul-away.',
    neighborhoods: ['Hollywood Beach', 'Hallandale Beach', 'Dania Beach', 'West Hollywood', 'Emerald Hills', 'Downtown Hollywood', 'Hollywood Lakes', 'Sheridan Hills', 'Parkside', 'Boulevard Gardens', 'Orange Brook', 'East Hollywood', 'South Hollywood', 'North Hollywood', 'Hollywood Hills', 'Liberia', 'Washington Park', 'Diplomat Beach', 'Oakridge', 'Carver Ranches'],
    localContent: "Hollywood, FL sits right between Miami and Fort Lauderdale, and we cover it from the beach to the western communities. We handle estate cleanouts in Emerald Hills and Sheridan Hills, furniture removal along Hollywood Beach and Diplomat Beach, yard waste haul-away in West Hollywood and Orange Brook, and appliance disposal throughout the city. Same-day service available most days.",
  },
  'pembroke-pines': {
    name: 'Pembroke Pines',
    county: 'Broward',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Junk removal in Pembroke Pines. Same-day service, licensed and insured.',
    neighborhoods: ['Chapel Trail', 'Silver Lakes', 'Towngate', 'Walnut Creek', 'Pembroke Falls', 'Pembroke Isles', 'Pines City Center', 'Pembroke Lakes', 'Century Village', 'Palm Cay', 'The Meadows', 'Flamingo Pines', 'Grand Palms', 'Laguna Isles', 'Pembroke Shores', 'Pembroke Pointe', 'Regency Lake', 'Emerald Park', 'Westgate', 'Country Club Ranches'],
    localContent: "Pembroke Pines is one of Broward's largest cities — stretching from the I-95 corridor on the east all the way to the Everglades on the west. We run routes through all of it. Whether you're in Century Village or Palm Cay near Pines Blvd, in the central communities around Pembroke Lakes, or out west in Chapel Trail, Silver Lakes, or Grand Palms, we handle garage haul-outs, furniture removal, full property cleanouts, and construction debris. Most residents get same-day or next-day service.",
  },
  miramar: {
    name: 'Miramar',
    county: 'Broward',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Miramar junk removal and cleanouts. We haul anything — call for a free estimate.',
    neighborhoods: ['Monarch Lakes', 'Riviera Isles', 'Sunset Lakes', 'Royal Palm Ranches', 'Nautica', 'Vizcaya', 'Avalon Trails', 'Miramar Isles', 'Caribbean Isles', 'Tuscan Isles', 'Country Lakes', 'Sunset Falls', 'Grand Palms', 'Miramar Town Center', 'Fairways', 'West Miramar', 'East Miramar', 'Palms at Miramar', 'Andros Isles', 'Silver Shores'],
    localContent: "Miramar's residential communities have large homes with garages and storage that fill up fast. We handle furniture and appliance removal, full garage cleanouts, renovation debris, and bulk junk haul-away throughout Miramar — from East Miramar near I-95 to the far west communities like Royal Palm Ranches, Grand Palms, and Sunset Lakes. Quick turnaround, no hidden fees.",
  },
  'coral-springs': {
    name: 'Coral Springs',
    county: 'Broward',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Coral Springs junk removal and demolition service. Same-day available 7 days a week.',
    neighborhoods: ['Wyndham Lakes', 'Eagle Trace', 'Heron Bay', 'Ramblewood', 'Forest Hills', 'The Crossings', 'Maplewood', 'Pine Ridge', 'Cobblestone Creek', 'Ridgewood', 'Hampton Greens', 'Coral Creek', 'Orchid Hammock', 'Westview', 'Coral Lago', 'Shadow Wood', 'Country Club', 'Kensington', 'Turtle Run', 'Lakeview'],
    localContent: "Coral Springs is one of the most active home renovation markets in Broward County. We handle demolition debris haul-away, kitchen and bathroom gut-outs, furniture removal, and full property cleanouts throughout Coral Springs — from Heron Bay and Eagle Trace in the north to Ramblewood, The Crossings, and Turtle Run throughout the city. We're the crew that clears it out.",
  },
  'pompano-beach': {
    name: 'Pompano Beach',
    county: 'Broward',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Pompano Beach junk removal. Furniture, appliances, debris — free estimates.',
    neighborhoods: ['Lighthouse Point', 'Hillsboro Beach', 'Coconut Creek', 'Pompano Beach Highlands', 'Crystal Lake', 'Palm-Aire', 'The Cove', 'Collier Manor', 'Pompano Beach Isles', 'Pompano Estates', 'Old Pompano', 'Deerfield Beach', 'Margate', 'North Andrews Gardens', 'McNab Park', 'Harbor Village', 'Cresthaven', 'Sunfield', 'Garden Isles', 'Loch Lomond'],
    localContent: "Pompano Beach covers a lot of ground — from Hillsboro Beach and Lighthouse Point on the coast to Coconut Creek and Margate inland. We handle furniture and appliance removal, estate cleanouts, construction debris, and yard waste haul-away across the entire area. From Palm-Aire and The Cove to Old Pompano and Pompano Beach Highlands, licensed and insured, same-day service available.",
  },
  'boca-raton': {
    name: 'Boca Raton',
    county: 'Broward',
    phone: '7864083783',
    phoneFormatted: '786-408-3783',
    blurb: 'Boca Raton junk removal and interior demolition. Licensed, insured, same-day service.',
    neighborhoods: ['Boca Del Mar', 'Mission Bay', 'Broken Sound', 'Woodfield', 'Boca West', 'Mizner Park', 'Boca Lago', 'Boca Pointe', 'Boca Isles', 'Boca Falls', 'Boca Winds', 'The Polo Club', 'Stonebridge', 'Boca Grove', 'Old Floresta', 'Royal Palm Yacht & Country Club', 'Boca Country Club', 'Boca Bath & Tennis', 'Town Place', 'Boca Highlands'],
    localContent: "Boca Raton's upscale residential market means high-value renovations — and the debris that comes with them. We handle interior demolition debris, furniture removal from estate cleanouts, appliance haul-outs, and full property cleanouts across Boca — from Broken Sound and Woodfield in the north to Boca Del Mar, Boca West, and Boca Falls in the south. Discreet, professional service with same-day availability.",
  },
}

const PREFIX = 'junk-removal-'

const commercialCities = new Set([
  'miami', 'doral', 'fort-lauderdale', 'hialeah', 'miami-beach',
  'boca-raton', 'pompano-beach', 'miramar', 'coral-springs', 'hollywood', 'kendall',
])

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
    title: `Junk Removal ${data.name} FL | Same-Day Service`,
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
    areaServed: [data.name, ...data.neighborhoods],
  }

  const richSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: `Junk Removal ${data.name}`, item: `${siteUrl}/junk-removal-${cityKey}` },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: `Do you offer same-day junk removal in ${data.name}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Yes. Call by noon for same-day junk removal in ${data.name} and surrounding areas. Call ${data.phoneFormatted}.`,
            },
          },
          {
            '@type': 'Question',
            name: `What areas of ${data.name} do you serve?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `We serve all of ${data.name} including ${data.neighborhoods.join(', ')}.`,
            },
          },
          {
            '@type': 'Question',
            name: `How much does junk removal cost in ${data.name}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Most junk removal jobs in ${data.name} range from $100 to $600 depending on volume. We offer free estimates — call ${data.phoneFormatted} or request online.`,
            },
          },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(richSchema) }}
      />
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 px-4">
          <Image
            src="/trash.pickuptruck.png"
            alt={`Junk removal truck serving ${data.name}, FL — R&D Trash Disposal`}
            fill
            className="object-cover object-[center_65%]"
            priority
          />
          <div className="absolute inset-0 bg-[#010c1c]/70" />
          <div className="relative z-10 max-w-4xl mx-auto text-center">
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
              <PhoneLink phone={data.phone} display={data.phoneFormatted} source="city_hero" className="inline-flex items-center justify-center gap-2 bg-[#F5A623] text-[#010c1c] font-bold px-8 py-4 rounded-lg text-lg hover:bg-amber-400 transition-all hover:scale-105">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {data.phoneFormatted}
              </PhoneLink>
              <a
                href="/estimate"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-[#010c1c] transition-all"
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
                  Serving {data.name}
                </p>
                <h2 className="font-display text-[#010c1c] text-4xl sm:text-5xl mb-6">
                  YOUR LOCAL HAULING CREW.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {data.localContent}
                </p>
                <p className="mt-3 text-sm text-zinc-400">
                  Call us at <PhoneLink phone={data.phone} display={data.phoneFormatted} source="city_inline" className="text-amber-400 font-medium" /> — we cover {data.name} and surrounding areas.
                </p>
              </div>
              <div>
                <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-3">
                  What We Haul
                </p>
                <h3 className="font-display text-[#010c1c] text-3xl mb-5">
                  WE TAKE IT ALL.
                </h3>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-3 mb-6">
                  {services.map((service) => (
                    <li key={service} className="flex items-center gap-2 text-sm text-[#010c1c]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F5A623] flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
                <a
                  href="/estimate"
                  className="inline-flex items-center gap-1.5 text-[#F5A623] font-semibold text-sm hover:underline"
                >
                  Get a free estimate →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-[#F5F7FA]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">
                Customer Reviews
              </p>
              <h2 className="font-display text-[#010c1c] text-5xl sm:text-6xl">
                WHAT OUR CUSTOMERS SAY.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Carlos M.',
                  location: 'Hialeah, FL',
                  quote: 'Called at 9am and they were at my house by noon. Took a couch, two mattresses, and a ton of yard waste. Guys were professional and the price was fair.',
                },
                {
                  name: 'Jennifer R.',
                  location: 'Kendall, FL',
                  quote: 'We needed a kitchen gutted before our contractor showed up. R&D came in, demo\'d everything, and hauled it all out in one day. Saved us a ton of time.',
                },
                {
                  name: 'Mike T.',
                  location: 'Hollywood, FL',
                  quote: 'Did a full house cleanout for my mom\'s estate. They were respectful, fast, and came back a second time when there was more than expected. Would hire again.',
                },
              ].map(({ name, location, quote }) => (
                <div key={name} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col gap-4">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-[#F5A623]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm flex-1">&ldquo;{quote}&rdquo;</p>
                  <div>
                    <p className="font-semibold text-[#010c1c] text-sm">{name}</p>
                    <p className="text-gray-400 text-xs">{location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commercial cross-link */}
        {commercialCities.has(cityKey) && (
          <section className="py-8 bg-[#F5F7FA] border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
              <p className="text-gray-500 text-sm">
                Need commercial junk removal in {data.name}?{' '}
                <a
                  href={`/commercial/junk-removal/${cityKey}`}
                  className="text-[#F5A623] font-semibold hover:underline"
                >
                  See our commercial service page — invoicing & COI available →
                </a>
              </p>
            </div>
          </section>
        )}

        {/* Neighborhoods */}
        <section className="py-16 bg-[#F5F7FA]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">
                Our Coverage Area
              </p>
              <h2 className="font-display text-[#010c1c] text-5xl sm:text-6xl mb-4">
                NEIGHBORHOODS WE SERVE.
              </h2>
              <p className="text-gray-500 text-base max-w-2xl mx-auto">
                We cover all of {data.name} — every corner of {data.county} County. Same-day service available 7 days a week.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {data.neighborhoods.map((n) => (
                <span
                  key={n}
                  className="bg-white text-[#010c1c] text-sm font-medium px-4 py-2 rounded-full border border-gray-200 shadow-sm"
                >
                  {n}
                </span>
              ))}
            </div>

            <p className="text-center text-gray-400 text-sm mb-12">
              Don&apos;t see your neighborhood?{' '}
              <PhoneLink phone={data.phone} display="Call us" source="city_neighborhoods" className="text-[#F5A623] font-medium hover:underline" />
              {' '}— if it&apos;s in {data.county} County, we cover it.
            </p>

            {/* Trust bar */}
            <div className="grid grid-cols-3 gap-6 border-t border-gray-200 pt-10">
              {[
                { label: 'Licensed & Insured', sub: 'State of Florida' },
                { label: 'Same-Day Service', sub: '7 days a week' },
                { label: 'Instant Estimates', sub: 'No hidden fees' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="font-display text-[#010c1c] text-2xl">{item.label.toUpperCase()}</p>
                  <p className="text-gray-400 text-sm mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why R&D */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">
                Why Choose Us
              </p>
              <h2 className="font-display text-[#010c1c] text-5xl sm:text-6xl">
                WHY R&amp;D.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                {
                  title: 'Licensed & Insured in Florida',
                  body: 'State-licensed and fully insured. Certificate of insurance available on every commercial job.',
                },
                {
                  title: 'Same-Day Service, 7 Days a Week',
                  body: `Call by noon for same-day pickup in ${data.name}. We run routes through ${data.county} County daily.`,
                },
                {
                  title: 'Upfront Pricing, No Hidden Fees',
                  body: 'We quote the full job before we start. What we say is what you pay.',
                },
                {
                  title: "We Haul What Others Won't",
                  body: 'Bulk loads, heavy appliances, full property cleanouts, demolition debris — no job too big.',
                },
              ].map(({ title, body }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#F5A623]/10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#F5A623]" />
                  </div>
                  <div>
                    <h3 className="font-display text-[#010c1c] text-xl mb-2">{title.toUpperCase()}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">Common Questions</p>
              <h2 className="font-display text-[#010c1c] text-5xl sm:text-6xl">FAQ.</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {[
                {
                  q: `Do you offer same-day junk removal in ${data.name}?`,
                  a: `Yes. Call by noon for same-day junk removal in ${data.name} and surrounding areas. We run routes 7 days a week. Call ${data.phoneFormatted} and we'll give you an arrival window.`,
                },
                {
                  q: `What areas of ${data.name} do you serve?`,
                  a: `We serve all of ${data.name} including ${data.neighborhoods.slice(0, 8).join(', ')}, and more. If you're in ${data.county} County, we cover it.`,
                },
                {
                  q: `How much does junk removal cost in ${data.name}?`,
                  a: `Most jobs in ${data.name} run $100–$600 depending on volume. We price by the load — the more you have, the better the per-item rate. Call or fill out the estimate form for an instant quote with no obligation.`,
                },
                {
                  q: `What items do you take?`,
                  a: `We take almost everything: furniture, appliances, mattresses, yard waste, construction debris, electronics, and full property cleanouts. The few things we can't take: hazardous materials, paint, and chemicals.`,
                },
              ].map(({ q, a }) => (
                <div key={q} className="py-6">
                  <h3 className="font-semibold text-[#010c1c] text-lg mb-2">{q}</h3>
                  <p className="text-gray-600 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#010c1c]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="font-display text-white text-5xl mb-4">
              READY TO CLEAR IT OUT?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Call us or fill out the estimate form. We serve {data.name} and all surrounding areas in {data.county} County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink phone={data.phone} display={data.phoneFormatted} source="city_cta" className="inline-flex items-center justify-center gap-2 bg-[#F5A623] text-[#010c1c] font-bold px-8 py-4 rounded-lg hover:bg-amber-400 transition-all hover:scale-105">
                Call {data.phoneFormatted}
              </PhoneLink>
              <a
                href="/estimate"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#010c1c] transition-all"
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
