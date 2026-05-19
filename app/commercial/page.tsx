'use client'

import { useState } from 'react'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PhoneLink from '@/components/PhoneLink'
import Reviews from '@/components/Reviews'

const phone = '7864083783'
const phoneFormatted = '786-408-3783'

const serviceCards = [
  {
    label: 'Hauling & Removal',
    title: 'COMMERCIAL JUNK REMOVAL',
    desc: 'Office cleanouts, warehouse haul-away, construction debris, scrap metal. Any volume. Invoicing and COI available on every job.',
    href: '/commercial/junk-removal',
  },
  {
    label: 'Roll-Off Containers',
    title: 'DUMPSTER RENTAL',
    desc: '30 & 40 yard roll-off containers for job sites. Drop off, load, pick up, and return on your schedule. Long-term and recurring available.',
    href: '/dumpster-rental',
  },
  {
    label: 'Interior Demo',
    title: 'DEMOLITION',
    desc: 'Interior demolition for contractors and property owners. Kitchen gut-outs, bathroom teardowns, tile removal, full interior demo.',
    href: '/demolition/miami',
  },
]

const whyUsPoints = [
  {
    heading: 'COI on request',
    body: 'We provide a certificate of insurance for any building, GC, or contractor that requires it.',
  },
  {
    heading: 'Invoicing on every job',
    body: 'Proper invoicing on every commercial job — your accounting team is covered.',
  },
  {
    heading: 'F350 hydraulic fleet',
    body: 'Our hydraulic truck handles volume in one trip — less time on your job site, fewer disruptions.',
  },
  {
    heading: 'We work around your schedule',
    body: 'We schedule around building access, active crews, and your project timeline. Early morning and after hours available.',
  },
]

const commercialFaqs = [
  {
    q: 'Do you provide a Certificate of Insurance (COI)?',
    a: 'Yes. We carry general liability insurance and can provide a COI to any building management company, general contractor, or property owner that requires it before we start work.',
  },
  {
    q: 'Do you invoice on commercial jobs?',
    a: 'Yes — invoicing is standard on every commercial job. We send an invoice the same day the work is completed. If your accounting team needs a specific format or PO number, just let us know when you book.',
  },
  {
    q: 'Can you handle construction site debris removal?',
    a: 'Yes. We remove concrete, drywall, tile, lumber, roofing debris, scrap metal, and mixed demo materials. We work around your crew and schedule — including early morning and after-hours service.',
  },
  {
    q: 'How fast can you turn around a commercial cleanout?',
    a: 'Most commercial jobs can be scheduled same-day or next-day. For large-volume or multi-day jobs, we confirm a timeline when you request a quote. We respond within the hour during business hours.',
  },
  {
    q: 'Can we set up recurring service?',
    a: 'Yes. We work with property managers, GCs, and businesses that need ongoing or recurring haul-away. We can set up a regular schedule — weekly, bi-weekly, or per-project milestone — and invoice each trip.',
  },
  {
    q: 'What size commercial jobs do you take on?',
    a: "Any size. From a single office cleanout to a full warehouse clearance or multi-phase construction site. Our F350 hydraulic truck handles high-volume loads in one trip. Call us and describe the job — we'll tell you what we need to bring.",
  },
]

function CommercialFAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
      {commercialFaqs.map((faq, idx) => (
        <div key={idx}>
          <button
            onClick={() => setOpen(open === idx ? null : idx)}
            className="w-full flex items-center justify-between py-5 text-left gap-4"
          >
            <span className="font-semibold text-[#010c1c] text-base leading-snug">{faq.q}</span>
            <svg
              className={`w-5 h-5 text-[#F5A623] flex-shrink-0 transition-transform duration-200 ${open === idx ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open === idx && (
            <p className="pb-5 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
          )}
        </div>
      ))}
    </div>
  )
}

export default function CommercialHubPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rdtrash.org'

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${siteUrl}#organization`,
    name: 'R&D Trash Disposal',
    description:
      'Commercial junk removal, dumpster rental, and demolition across Miami-Dade and Broward County. Licensed, insured. COI and invoicing available on every job.',
    url: siteUrl,
    telephone: `+1${phone}`,
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '07:00',
        closes: '19:00',
      },
    ],
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Miami-Dade County',
        containedInPlace: { '@type': 'State', name: 'Florida' },
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Broward County',
        containedInPlace: { '@type': 'State', name: 'Florida' },
      },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}/commercial#service`,
    name: 'Commercial Services South Florida',
    description:
      'Commercial junk removal, roll-off dumpster rental, and interior demolition for South Florida businesses. Licensed, insured, COI and invoicing on every job.',
    serviceType: 'Commercial Waste and Demolition Services',
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
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Commercial Services',
        item: `${siteUrl}/commercial`,
      },
    ],
  }

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
        .word-mask { overflow: hidden; display: inline-block; }
        .word-inner {
          display: inline-block;
          animation: slideUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .word-1 { animation-delay: 0.05s; }
        .word-2 { animation-delay: 0.2s; }
        .word-3 { animation-delay: 0.35s; }
        .accent-line {
          transform-origin: left;
          animation: drawLine 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.65s both;
        }
        .sub-fade { animation: fadeUp 0.6s ease 0.9s both; }
      `}</style>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-[#010c1c] pt-36 pb-28 px-4 overflow-hidden">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-6 sub-fade" style={{ animationDelay: '0.05s' }}>
              South Florida Commercial Services
            </p>

            {/* Animated H1 — 3 lines */}
            <h1 className="font-display text-white leading-none mb-2" style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}>
              <span className="word-mask block">
                <span className="word-inner word-1">COMMERCIAL</span>
              </span>
            </h1>
            <h1 className="font-display text-white leading-none mb-2" style={{ fontSize: 'clamp(2.2rem, 7vw, 5.5rem)' }}>
              <span className="word-mask block">
                <span className="word-inner word-2">JUNK REMOVAL &amp; DEMOLITION</span>
              </span>
            </h1>
            <p className="sub-fade text-[#F5A623]/80 font-bold text-sm uppercase tracking-widest mb-8" style={{ animationDelay: '0.5s' }}>
              + Dumpster Rental Available
            </p>

            {/* Amber underline draws across */}
            <div className="flex justify-center mb-8">
              <div className="accent-line h-1 rounded-full bg-[#F5A623]" style={{ width: '200px' }} />
            </div>

            <p className="sub-fade text-white/60 text-lg max-w-2xl mx-auto mb-10">
              Licensed, insured, and equipped for South Florida&apos;s commercial sector. Certificate of insurance available. Invoicing on every job.
            </p>

            <div className="sub-fade flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink
                phone={phone}
                display={phoneFormatted}
                source="commercial_hub_hero"
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
                Request a Commercial Quote
              </a>
            </div>
          </div>
        </section>

        {/* Credentials bar */}
        <section className="bg-[#F5A623] py-5 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                'Licensed & Insured',
                'Certificate of Insurance',
                'Invoicing on Every Job',
                'Trucks, Bobcats & Dumpsters',
              ].map((item) => (
                <p key={item} className="font-display text-[#010c1c] text-lg tracking-wide">
                  {item.toUpperCase()}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Service cards */}
        <section className="bg-white py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">
                What We Handle
              </p>
              <h2 className="font-display text-[#010c1c] text-5xl sm:text-6xl">
                COMMERCIAL SERVICES.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {serviceCards.map((card) => (
                <div
                  key={card.href}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col"
                >
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#F5A623] mb-3">
                    {card.label}
                  </span>
                  <h3 className="font-display text-[#010c1c] text-3xl mb-3">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{card.desc}</p>
                  <a
                    href={card.href}
                    className="bg-[#010c1c] text-white font-bold px-6 py-3 rounded-lg inline-block mt-4 hover:bg-[#0a1e3a] transition-all text-sm text-center"
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment photo strip */}
        <section className="relative h-64 sm:h-80 overflow-hidden">
          <Image
            src="/truck-branded.jpg"
            alt="R&D Trash Disposal truck"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#010c1c]/60" />
          <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
            <div>
              <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">Our Fleet</p>
              <p className="font-display text-white text-4xl sm:text-5xl leading-none">EQUIPPED FOR ANY COMMERCIAL JOB.</p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-white px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">Simple Process</p>
              <h2 className="font-display text-[#010c1c] text-5xl sm:text-6xl">HOW IT WORKS.</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  num: '01',
                  title: 'You Call or Submit',
                  body: 'Describe the job — what needs to go, the location, and your timeline. We respond within the hour with availability and pricing.',
                },
                {
                  num: '02',
                  title: 'We Show Up On Time',
                  body: 'Our crew arrives at the scheduled time with the right equipment for the job. No ghosting, no reschedules.',
                },
                {
                  num: '03',
                  title: 'Job Done. Invoiced.',
                  body: 'We haul everything out, sweep up, and send your invoice the same day. COI provided to any building or GC that requires it.',
                },
              ].map((step) => (
                <div key={step.num} className="bg-[#F5F7FA] rounded-2xl p-8 border border-gray-100">
                  <p className="font-display text-[#F5A623] text-5xl mb-4">{step.num}</p>
                  <h3 className="font-display text-[#010c1c] text-2xl mb-3">{step.title.toUpperCase()}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Take — commercial inline version */}
        <section className="py-20 bg-[#F5F7FA] px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">We Handle It All</p>
              <h2 className="font-display text-[#010c1c] text-5xl sm:text-6xl">WHAT WE TAKE.</h2>
              <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
                If it came off a job site, out of a building, or needs to go — we haul it.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: 'Construction & Demo',
                  items: ['Concrete & masonry', 'Drywall & plaster', 'Tile & flooring', 'Lumber & framing', 'Roofing debris', 'Metal framing & scrap'],
                },
                {
                  title: 'Office & Corporate',
                  items: ['Desks, chairs & cubicles', 'Filing cabinets', 'Computer equipment', 'Office fixtures & shelving', 'Break room appliances', 'Full floor cleanouts'],
                },
                {
                  title: 'Warehouse & Industrial',
                  items: ['Pallets & racking', 'Scrap metal', 'Industrial equipment', 'Storage bins & containers', 'Conveyor parts', 'Bulk material haul-away'],
                },
                {
                  title: 'Restaurant & Hospitality',
                  items: ['Commercial kitchen equipment', 'Refrigeration units', 'Booths & seating', 'Bar & countertop removal', 'Hotel room furniture', 'Renovation debris'],
                },
                {
                  title: 'Property Management',
                  items: ['Tenant cleanout debris', 'Bulk furniture removal', 'Common area waste', 'Renovation materials', 'Appliance removal', 'Recurring pickup service'],
                },
                {
                  title: 'Retail & Storefront',
                  items: ['Display fixtures & shelving', 'Point-of-sale equipment', 'Signage & lighting', 'Flooring & tile', 'Dressing rooms', 'Full store gut-outs'],
                },
              ].map((cat) => (
                <div key={cat.title} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-[#010c1c] hover:shadow-sm transition-all">
                  <h3 className="font-display text-[#010c1c] text-2xl mb-4">{cat.title.toUpperCase()}</h3>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-3.5 h-3.5 text-[#F5A623] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Not sure if we take it */}
            <div className="bg-[#010c1c] rounded-2xl p-8 text-center">
              <h3 className="font-display text-white text-3xl sm:text-4xl mb-2">NOT SURE IF WE TAKE IT?</h3>
              <p className="text-white/70 mb-6 max-w-lg mx-auto">
                If it&apos;s not hazardous waste or chemicals, we can almost certainly haul it. Call us and we&apos;ll tell you on the spot.
              </p>
              <PhoneLink
                phone={phone}
                display={`Call ${phoneFormatted}`}
                source="commercial_what_we_take"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#010c1c] font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* Equipment / skid steer side-by-side */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-3">Our Equipment</p>
                <h2 className="font-display text-[#010c1c] text-5xl mb-6">BUILT FOR HEAVY WORK.</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>We run an F350 hydraulic-bed truck capable of handling bulk commercial loads in a single trip — the kind of volume that takes a residential hauler three runs.</p>
                  <p>For larger jobs that need material moved on-site before haul-away, we bring the equipment to match. Active job sites, warehouse clearances, post-demo cleanup — we come prepared.</p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { v: 'F350 Hydraulic', s: 'Bulk load capacity' },
                    { v: 'COI Available', s: 'On every commercial job' },
                    { v: 'Same/Next Day', s: 'South Florida scheduling' },
                    { v: 'Invoiced', s: 'Standard on all commercial' },
                  ].map((stat) => (
                    <div key={stat.v} className="bg-[#F5F7FA] rounded-xl p-4 border border-gray-100">
                      <p className="font-display text-[#010c1c] text-xl">{stat.v.toUpperCase()}</p>
                      <p className="text-gray-400 text-xs mt-1">{stat.s}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                <Image
                  src="/skid-steer.webp"
                  alt="Commercial equipment — CAT track loader"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <div id="reviews">
          <Reviews />
        </div>

        {/* Why us */}
        <section className="bg-[#F5F7FA] py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">
                Why Businesses Choose R&amp;D
              </p>
              <h2 className="font-display text-[#010c1c] text-5xl sm:text-6xl">
                BUILT FOR COMMERCIAL WORK.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {whyUsPoints.map((item) => (
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
        </section>

        {/* Commercial FAQ */}
        <section className="py-20 bg-[#F5F7FA] px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">FAQ</p>
              <h2 className="font-display text-[#010c1c] text-5xl sm:text-6xl">COMMERCIAL QUESTIONS.</h2>
            </div>
            <CommercialFAQ />
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[#010c1c] py-16 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-white text-5xl mb-4">
              LET&apos;S DISCUSS YOUR PROJECT.
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Submit a commercial request or call direct. Invoicing and COI available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink
                phone={phone}
                display={phoneFormatted}
                source="commercial_hub_cta"
                className="bg-white text-[#010c1c] font-bold px-8 py-4 rounded-lg inline-flex items-center justify-center gap-2 hover:bg-gray-100 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call {phoneFormatted}
              </PhoneLink>
              <a
                href="/commercial/estimate"
                className="border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-lg inline-flex items-center justify-center hover:border-white/70 transition-all"
              >
                Get a Commercial Quote
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
