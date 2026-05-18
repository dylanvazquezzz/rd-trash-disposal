import type { Metadata } from 'next'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PhoneLink from '@/components/PhoneLink'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rdtrash.org'
const phone = '7864083783'
const phoneFormatted = '786-408-3783'

export const metadata: Metadata = {
  title: 'Roll-Off Dumpster Rental for Contractors — Miami-Dade & Broward | R&D Trash Disposal',
  description: 'Roll-off container rental for GCs, roofers, and demo contractors in South Florida. 30 & 40 cubic yard dumpsters. Long-term and recurring rental available. Licensed, insured, COI available. Call 786-408-3783.',
  alternates: {
    canonical: `${siteUrl}/dumpster-rental`,
  },
  openGraph: {
    title: 'Dumpster Rental for Contractors — South Florida | R&D Trash Disposal',
    description: '30 & 40 yard roll-off containers for job sites in Miami-Dade and Broward. Long-term rental available. Licensed & insured.',
    url: `${siteUrl}/dumpster-rental`,
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': `${siteUrl}#organization`,
  name: 'R&D Trash Disposal',
  description: 'Roll-off dumpster rental for contractors across Miami-Dade and Broward County. 30 and 40 yard containers. Long-term and recurring rental available. Licensed and insured.',
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
  '@id': `${siteUrl}/dumpster-rental#service`,
  name: 'Roll-Off Dumpster Rental South Florida',
  description: 'Roll-off container rental for general contractors, roofing contractors, demolition crews, and remodelers in Miami-Dade and Broward County. 30 and 40 yard containers with long-term and recurring rental available. Licensed, insured, COI available on request.',
  serviceType: 'Dumpster Rental',
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
    { '@type': 'ListItem', position: 3, name: 'Dumpster Rental', item: `${siteUrl}/dumpster-rental` },
  ],
}

export default function DumpsterRentalPage() {
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
  .dr-word-mask { overflow: hidden; display: inline-block; }
  .dr-word-inner {
    display: inline-block;
    animation: slideUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) both;
  }
  .dr-w1 { animation-delay: 0.05s; }
  .dr-w2 { animation-delay: 0.2s; }
  .dr-w3 { animation-delay: 0.35s; }
  .dr-accent-line {
    transform-origin: left;
    animation: drawLine 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both;
  }
  .dr-fade { animation: fadeUp 0.6s ease 0.85s both; }
`}</style>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Nav />
      <main>

        {/* Section 1: Hero */}
        <section className="relative pt-32 pb-24 px-4 overflow-hidden">
          <Image
            src="/dumpster.jpg"
            alt="R&D Trash Disposal roll-off dumpster container"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#010c1c]/85" />
          <div className="relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-6 dr-fade" style={{ animationDelay: '0.05s' }}>
              Roll-Off Container Rental — South Florida
            </p>

            {/* Animated H1 */}
            <h1 className="font-display text-white leading-none mb-1" style={{ fontSize: 'clamp(2.5rem, 8vw, 6.5rem)' }}>
              <span className="dr-word-mask block">
                <span className="dr-word-inner dr-w1">DUMPSTER RENTAL</span>
              </span>
            </h1>
            <h1 className="font-display text-white leading-none mb-1" style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}>
              <span className="dr-word-mask block">
                <span className="dr-word-inner dr-w2">FOR CONTRACTORS</span>
              </span>
            </h1>
            <h1 className="font-display leading-none mb-6" style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)', color: '#F5A623' }}>
              <span className="dr-word-mask block">
                <span className="dr-word-inner dr-w3">30 &amp; 40 Cubic Yard Containers</span>
              </span>
            </h1>

            {/* Amber underline draws */}
            <div className="flex justify-center mb-8">
              <div className="dr-accent-line h-1 rounded-full bg-[#F5A623]" style={{ width: '180px' }} />
            </div>

            <p className="dr-fade text-white/70 text-xl max-w-2xl mx-auto mb-10" style={{ animationDelay: '0.9s' }}>
              Open-top roll-off containers for active job sites in Miami-Dade and Broward County. Drop off, load at your pace, we pick up and return clean — on your schedule.
            </p>

            <div className="dr-fade flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '1s' }}>
              <PhoneLink
                phone={phone}
                display={phoneFormatted}
                source="dumpster_rental_hero"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#010c1c] font-bold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {phoneFormatted}
              </PhoneLink>
              <a
                href="/commercial/estimate"
                className="inline-flex items-center justify-center border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-lg text-lg hover:border-white/70 transition-all"
              >
                Get a Container Quote
              </a>
            </div>
          </div>
          </div>
        </section>

        {/* Section 2: Credentials Bar */}
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

        {/* Section 3: How It Works */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">The Process</p>
              <h2 className="font-display text-[#010c1c] text-5xl sm:text-6xl mb-4">DROP OFF. LOAD. WE RETURN.</h2>
              <p className="text-gray-500 text-lg">Simple process. We handle the logistics so you can focus on the job.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  num: '01',
                  title: 'We Drop It Off',
                  desc: 'We deliver the container to your job site and place it exactly where you need it.',
                },
                {
                  num: '02',
                  title: 'Your Crew Loads It',
                  desc: 'Load debris at your own pace — days or weeks. No rush, no pressure.',
                },
                {
                  num: '03',
                  title: 'We Pick It Up',
                  desc: 'When it\'s full or you\'re ready, we haul everything away and dispose of it properly.',
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

        {/* Visual break — subtle pattern */}
        <section
          className="py-14 px-4"
          style={{
            backgroundColor: '#010c1c',
            backgroundImage: 'radial-gradient(circle, rgba(245,166,35,0.12) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        >
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">Our Containers</p>
            <p className="font-display text-white text-4xl sm:text-5xl leading-none">OPEN-TOP ROLL-OFF CONTAINERS.</p>
            <p className="text-white/50 text-base mt-3">Delivered to your job site. Picked up on your schedule.</p>
          </div>
        </section>

        {/* Section 4: Container Sizes */}
        <section className="bg-[#F5F7FA] py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">Container Options</p>
              <h2 className="font-display text-[#010c1c] text-5xl sm:text-6xl">30 &amp; 40 YARD CONTAINERS.</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {/* 30 Yard */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <p className="font-display text-8xl sm:text-9xl text-[#F5A623] leading-none mb-2">30 YD</p>
                <p className="text-gray-400 text-sm mb-1">30 cubic yards</p>
                <h3 className="font-display text-[#010c1c] text-3xl mb-1">STANDARD LOAD</h3>
                <p className="text-gray-400 text-sm mb-6">Approx. 22ft × 8ft × 5ft — 30 cu yd capacity</p>
                <p className="text-xs font-bold uppercase tracking-widest text-[#010c1c]/40 mb-3">Best For</p>
                <ul className="space-y-2">
                  {[
                    'Roofing debris and tear-offs',
                    'Bathroom gut-outs and remodels',
                    'Medium renovation projects',
                    'Smaller demolition jobs',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#F5A623] flex-shrink-0 mt-1.5" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-gray-400">Capacity: approx. 9 pickup truck loads</p>
              </div>

              {/* 40 Yard */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <p className="font-display text-8xl sm:text-9xl text-[#F5A623] leading-none mb-2">40 YD</p>
                <p className="text-gray-400 text-sm mb-1">40 cubic yards</p>
                <h3 className="font-display text-[#010c1c] text-3xl mb-1">HEAVY VOLUME</h3>
                <p className="text-gray-400 text-sm mb-6">Approx. 22ft × 8ft × 8ft — 40 cu yd capacity</p>
                <p className="text-xs font-bold uppercase tracking-widest text-[#010c1c]/40 mb-3">Best For</p>
                <ul className="space-y-2">
                  {[
                    'Full construction site cleanouts',
                    'Large-scale demolition projects',
                    'Warehouse clearances',
                    'Multi-phase and long-term projects',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#F5A623] flex-shrink-0 mt-1.5" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-gray-400">Capacity: approx. 12 pickup truck loads</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Who It's For */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">Built For</p>
              <h2 className="font-display text-[#010c1c] text-5xl sm:text-6xl">BUILT FOR CONTRACTORS.</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'GENERAL CONTRACTORS',
                  desc: 'Ongoing debris management for active job sites. We work around your crew and project timeline.',
                },
                {
                  title: 'ROOFING CONTRACTORS',
                  desc: 'Tear-off material, shingles, underlayment — we handle the volume on any size roof job.',
                },
                {
                  title: 'DEMOLITION CREWS',
                  desc: 'Full interior or exterior demo debris. Multiple containers and recurring pickups available.',
                },
                {
                  title: 'REMODELERS',
                  desc: 'Kitchen gut-outs, bathroom teardowns, flooring removal — load as you go, we handle the rest.',
                },
              ].map((card) => (
                <div key={card.title} className="bg-[#F5F7FA] rounded-2xl p-6 border border-gray-100">
                  <div className="w-3 h-3 rounded-full bg-[#F5A623] mb-4" />
                  <h3 className="font-display text-[#010c1c] text-xl mb-2">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Why Choose Us */}
        <section className="bg-[#010c1c] py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-3">Why Contractors Choose R&amp;D</p>
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
                  Tell us your job site location, container size needed, and project timeline. We&apos;ll get back with availability and pricing.
                </p>
                <a
                  href="/commercial/estimate"
                  className="block w-full bg-white text-[#010c1c] font-bold px-6 py-4 rounded-lg text-center hover:bg-gray-100 transition-all mb-4"
                >
                  Request a Quote
                </a>
                <PhoneLink
                  phone={phone}
                  display={`Call ${phoneFormatted}`}
                  source="dumpster_rental_why"
                  className="block w-full border-2 border-white/30 text-white font-semibold px-6 py-4 rounded-lg text-center hover:border-white/60 transition-all"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Final CTA */}
        <section className="bg-[#F5F7FA] py-16 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-[#010c1c] text-5xl mb-4">READY TO GET A CONTAINER ON SITE?</h2>
            <p className="text-gray-500 text-lg mb-8">
              Serving Miami-Dade and Broward County. Same-day delivery available on most jobs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink
                phone={phone}
                source="dumpster_rental_final_cta"
                className="inline-flex items-center justify-center gap-2 bg-[#010c1c] text-white font-bold px-8 py-4 rounded-lg hover:bg-[#0a1e3a] transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {phoneFormatted}
              </PhoneLink>
              <a
                href="/commercial/estimate"
                className="inline-flex items-center justify-center border-2 border-[#010c1c]/20 text-[#010c1c] font-semibold px-8 py-4 rounded-lg hover:border-[#010c1c]/40 transition-all"
              >
                Request a Container Quote
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
