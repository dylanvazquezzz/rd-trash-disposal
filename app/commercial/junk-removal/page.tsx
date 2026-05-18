import type { Metadata } from 'next'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PhoneLink from '@/components/PhoneLink'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rdtrash.org'
const phone = '7864083783'
const phoneFormatted = '786-408-3783'

export const metadata: Metadata = {
  title: 'Commercial Junk Removal Miami-Dade & Broward | Licensed & Insured',
  description: 'Commercial junk removal across South Florida. Office cleanouts, warehouse haul-away, construction debris, scrap metal. Invoicing & COI available. Call 786-408-3783.',
  alternates: {
    canonical: `${siteUrl}/commercial/junk-removal`,
  },
  openGraph: {
    title: 'Commercial Junk Removal South Florida | R&D Trash Disposal',
    description: 'Office cleanouts, construction debris, warehouse haul-away. Licensed & insured. Invoicing & COI available. Serving Miami-Dade & Broward.',
    url: `${siteUrl}/commercial/junk-removal`,
  },
}

const services = [
  { title: 'Office Cleanouts', desc: 'Full office furniture removal, equipment disposal, and unit haul-outs for relocating or closing businesses.' },
  { title: 'Warehouse Cleanouts', desc: 'Bulk haul-away for warehouses being cleared, equipment turned over, or inventory liquidated.' },
  { title: 'Construction Debris', desc: 'Concrete, drywall, tile, lumber, and mixed debris from active job sites. We work around your schedule.' },
  { title: 'Scrap Metal Hauling', desc: 'Steel, aluminum, copper, and mixed metal removal from job sites, warehouses, and industrial facilities.' },
  { title: 'Property Management', desc: 'Recurring cleanout service for HOAs, apartment complexes, and commercial property managers.' },
  { title: 'Restaurant & Retail', desc: 'Equipment removal, fixture haul-away, and full store or kitchen cleanouts for businesses turning over.' },
]

const cities = [
  { name: 'Miami', slug: 'miami' },
  { name: 'Doral', slug: 'doral' },
  { name: 'Hialeah', slug: 'hialeah' },
  { name: 'Miami Beach', slug: 'miami-beach' },
  { name: 'Kendall', slug: 'kendall' },
  { name: 'Fort Lauderdale', slug: 'fort-lauderdale' },
  { name: 'Hollywood', slug: 'hollywood' },
  { name: 'Pompano Beach', slug: 'pompano-beach' },
  { name: 'Coral Springs', slug: 'coral-springs' },
  { name: 'Miramar', slug: 'miramar' },
  { name: 'Boca Raton', slug: 'boca-raton' },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': `${siteUrl}#organization`,
  name: 'R&D Trash Disposal',
  description: 'Commercial junk removal across Miami-Dade and Broward County. Office cleanouts, construction debris, warehouse haul-away. Invoicing and COI available.',
  url: siteUrl,
  telephone: `+1${phone}`,
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '19:00',
    },
  ],
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Miami-Dade County', containedInPlace: { '@type': 'State', name: 'Florida' } },
    { '@type': 'AdministrativeArea', name: 'Broward County', containedInPlace: { '@type': 'State', name: 'Florida' } },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${siteUrl}/commercial/junk-removal#service`,
  name: 'Commercial Junk Removal South Florida',
  description: 'Commercial junk removal services across Miami-Dade and Broward County — office cleanouts, warehouse haul-away, construction debris, concrete, tile, drywall, scrap metal, and property management cleanouts. Invoicing and COI available on every job.',
  serviceType: 'Commercial Junk Removal',
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}#organization`,
    name: 'R&D Trash Disposal',
    telephone: `+1${phone}`,
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Miami-Dade County' },
    { '@type': 'AdministrativeArea', name: 'Broward County' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Commercial Services', item: `${siteUrl}/commercial` },
    { '@type': 'ListItem', position: 3, name: 'Commercial Junk Removal', item: `${siteUrl}/commercial/junk-removal` },
  ],
}

export default function CommercialJunkRemovalPage() {
  return (
    <>
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(110%); }
          to   { transform: translateY(0); }
        }
        @keyframes drawLine {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cjr-word-mask { overflow: hidden; display: inline-block; }
        .cjr-word-inner {
          display: inline-block;
          animation: slideUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .cjr-w1 { animation-delay: 0.05s; }
        .cjr-w2 { animation-delay: 0.2s; }
        .cjr-w3 { animation-delay: 0.35s; }
        .cjr-accent-line {
          transform-origin: left;
          animation: drawLine 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both;
        }
        .cjr-fade { animation: fadeUp 0.6s ease 0.85s both; }
      `}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-24 px-4 overflow-hidden">
          <Image
            src="/truck-branded.jpg"
            alt="R&D Trash Disposal commercial fleet"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#010c1c]/80" />
          <div className="relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-6 cjr-fade" style={{ animationDelay: '0.05s' }}>
              South Florida Commercial Service
            </p>

            {/* Animated H1 */}
            <h1 className="font-display text-white leading-none mb-1" style={{ fontSize: 'clamp(2.5rem, 8vw, 6.5rem)' }}>
              <span className="cjr-word-mask block">
                <span className="cjr-word-inner cjr-w1">COMMERCIAL</span>
              </span>
            </h1>
            <h1 className="font-display text-white leading-none mb-1" style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}>
              <span className="cjr-word-mask block">
                <span className="cjr-word-inner cjr-w2">JUNK REMOVAL</span>
              </span>
            </h1>
            <h1 className="font-display leading-none mb-6" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)', color: '#F5A623' }}>
              <span className="cjr-word-mask block">
                <span className="cjr-word-inner cjr-w3">Miami-Dade &amp; Broward County</span>
              </span>
            </h1>

            {/* Amber underline */}
            <div className="flex justify-center mb-8">
              <div className="cjr-accent-line h-1 rounded-full bg-[#F5A623]" style={{ width: '180px' }} />
            </div>

            <p className="cjr-fade text-white/70 text-xl max-w-2xl mx-auto mb-4">
              Licensed and insured commercial hauling for South Florida&apos;s construction, property management, and business sectors. Certificate of insurance available. Invoicing standard on every job.
            </p>
            <p className="cjr-fade text-white/40 text-sm mb-10" style={{ animationDelay: '1s' }}>
              Serving Miami-Dade and Broward County.
            </p>

            <div className="cjr-fade flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '1s' }}>
              <PhoneLink
                phone={phone}
                display={phoneFormatted}
                source="commercial_main_hero"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#010c1c] font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {phoneFormatted}
              </PhoneLink>
              <a
                href="/commercial/estimate"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:border-white/70 transition-all"
              >
                Request Commercial Quote
              </a>
            </div>
          </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-[#F5A623] py-5 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                'Licensed & Insured',
                'Invoicing Available',
                'COI on Request',
                'Volume Pricing',
              ].map((item) => (
                <p key={item} className="font-display text-[#010c1c] text-lg tracking-wide">
                  {item.toUpperCase()}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Who we work with */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">Built for Business</p>
              <h2 className="font-display text-[#010c1c] text-5xl sm:text-6xl mb-4">WHO WE WORK WITH.</h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">
                We&apos;re not a residential hauler trying to handle commercial jobs. This is what we&apos;re set up for.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'General Contractors',
                  desc: 'Job site debris management, post-construction cleanup, and material haul-away. We work around active crews and project timelines.',
                },
                {
                  title: 'Property Management Groups',
                  desc: 'Recurring cleanout service for commercial portfolios. COI available for any building. Invoicing on every job.',
                },
                {
                  title: 'Corporate Facilities',
                  desc: 'Office relocations, full floor cleanouts, equipment disposal. Minimal disruption to tenants and operations.',
                },
                {
                  title: 'Restaurant & Hospitality Groups',
                  desc: 'Kitchen equipment removal, full restaurant and hotel cleanouts. Large-volume, fast turnaround.',
                },
                {
                  title: 'Warehouse & Logistics',
                  desc: 'Bulk haul-away for warehouse clearances, equipment disposal, and inventory turnover. F350 hydraulic truck, 25-ft trailer, roll-off dumpster, and bobcat handle high volume.',
                },
                {
                  title: 'Industrial & Trade',
                  desc: 'Scrap metal, concrete, drywall, tile, and lumber from active job sites and industrial facilities.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-[#F5F7FA] rounded-2xl p-6 border border-gray-100">
                  <h3 className="font-display text-[#010c1c] text-2xl mb-2">{item.title.toUpperCase()}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Scale & Capability */}
        <section className="py-20 bg-[#010c1c]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">Our Capability</p>
              <h2 className="font-display text-white text-5xl sm:text-6xl mb-4">EQUIPPED FOR ANY JOB SIZE.</h2>
            </div>

            {/* 3-stat strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-b border-white/10 pb-10 mb-10">
              {[
                { stat: 'Full Commercial Fleet', sub: 'F350, trailer, dumpster & bobcat' },
                { stat: 'COI Available', sub: 'For any building or contractor requirement' },
                { stat: 'Same Day / Next Day', sub: 'Scheduling across South Florida' },
              ].map((item) => (
                <div key={item.stat} className="text-center">
                  <p className="font-display text-white text-3xl sm:text-4xl mb-2">{item.stat.toUpperCase()}</p>
                  <p className="text-white/50 text-sm">{item.sub}</p>
                </div>
              ))}
            </div>

            {/* 2-column bullet list */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Single-trip bulk haul via F350 hydraulic truck, 25-ft trailer, roll-off dumpster, and bobcat',
                'Proper invoicing on every commercial job',
                'Certificate of insurance provided on request',
                'Scheduling around building access and project timelines',
                'Recurring service agreements for ongoing contracts',
                'Direct contact — no call center, no franchise layer',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F5A623] flex-shrink-0 mt-2" />
                  <p className="text-white/70 text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-[#F5F7FA]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">What We Handle</p>
              <h2 className="font-display text-[#010c1c] text-5xl sm:text-6xl">ANY COMMERCIAL LOAD.</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((s) => (
                <div key={s.title} className="bg-white rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 rounded-full bg-[#F5A623] flex-shrink-0 mt-1.5" />
                    <div>
                      <h3 className="font-display text-[#010c1c] text-xl mb-1">{s.title.toUpperCase()}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-3">Why Businesses Choose Us</p>
                <h2 className="font-display text-[#010c1c] text-5xl mb-6">THE COMMERCIAL DIFFERENCE.</h2>
                <div className="space-y-5">
                  {[
                    { heading: 'Invoiced every time', body: 'Every commercial job comes with a proper invoice. Your accounting team will know exactly what they paid for.' },
                    { heading: 'COI available', body: 'We carry liability insurance and can provide a certificate of insurance for any building, contractor, or property that requires it.' },
                    { heading: 'F350 hydraulic truck, 25-ft trailer, roll-off dumpster, and bobcat', body: 'Built for volume. One trip handles what would take a residential hauler three. Less time on your job site.' },
                    { heading: 'We work around you', body: 'Early morning, after hours, before tenants arrive — tell us when the building is accessible and we schedule around it.' },
                  ].map((item) => (
                    <div key={item.heading} className="flex gap-4">
                      <div className="w-1 bg-[#F5A623] rounded-full flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#010c1c] mb-1">{item.heading}</p>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#010c1c] rounded-2xl p-8 text-center">
                <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-4">Get a Commercial Quote</p>
                <p className="font-display text-white text-4xl mb-4">RESPOND WITHIN THE HOUR.</p>
                <p className="text-white/60 text-sm mb-8">
                  Submit a request with job details and we&apos;ll call or text back fast. No residential form. No guessing on price.
                </p>
                <a
                  href="/commercial/estimate"
                  className="bg-white text-[#010c1c] font-bold px-6 py-4 rounded-lg block w-full text-center hover:bg-gray-100 transition-all mb-4"
                >
                  Request Commercial Quote
                </a>
                <PhoneLink
                  phone={phone}
                  display={`Call ${phoneFormatted}`}
                  source="commercial_main_why"
                  className="border-2 border-white/30 text-white font-semibold px-6 py-4 rounded-lg block w-full text-center hover:border-white/60 transition-all"
                />
              </div>
            </div>
          </div>
        </section>

        {/* City links */}
        <section className="py-20 bg-[#F5F7FA]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-3">Service Area</p>
            <h2 className="font-display text-[#010c1c] text-5xl mb-4">WHERE WE WORK.</h2>
            <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
              Covering Miami-Dade and Broward County. Click your city for local availability and pricing.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {cities.map((city) => (
                <a
                  key={city.slug}
                  href={`/commercial/junk-removal/${city.slug}`}
                  className="bg-white border border-gray-200 text-[#010c1c] font-semibold px-5 py-3 rounded-xl hover:border-[#F5A623] hover:bg-[#FFFBF2] transition-all text-sm"
                >
                  {city.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-[#010c1c]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="font-display text-white text-5xl mb-4">LET&apos;S GET IT DONE.</h2>
            <p className="text-white/70 text-lg mb-8">
              Call direct or submit a commercial quote request. Invoicing and COI available. Serving all of South Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink
                phone={phone}
                display={phoneFormatted}
                source="commercial_main_cta"
                className="bg-white text-[#010c1c] font-bold px-8 py-4 rounded-lg inline-flex items-center justify-center gap-2 hover:bg-gray-100 transition-all hover:scale-105"
              >
                Call {phoneFormatted}
              </PhoneLink>
              <a
                href="/commercial/estimate"
                className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-lg inline-flex items-center justify-center hover:border-white/70 transition-all"
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
