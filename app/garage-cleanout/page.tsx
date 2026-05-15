import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PhoneLink from '@/components/PhoneLink'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rdtrash.org'
const phone = '7864083783'
const phoneFormatted = '786-408-3783'

export const metadata: Metadata = {
  title: 'Garage Cleanout Service Miami & Broward | Same-Day Available',
  description: 'Full garage cleanout service in Miami-Dade & Broward. We haul everything — furniture, tools, boxes, junk. Licensed & insured. Free estimate — call 786-408-3783.',
  alternates: { canonical: `${siteUrl}/garage-cleanout` },
  openGraph: {
    title: 'Garage Cleanout Service Miami & Broward | R&D Trash Disposal',
    description: 'Same-day garage cleanout. We haul everything — tools, furniture, junk. Licensed & insured. Free estimates.',
    url: `${siteUrl}/garage-cleanout`,
  },
}

const items = [
  'Old furniture & appliances',
  'Boxes & miscellaneous junk',
  'Power tools & equipment',
  'Bikes & sporting goods',
  'Lawn equipment',
  'Shelving & cabinets',
  'Construction debris',
  'Paint cans (non-hazardous)',
  'Holiday decorations & storage',
  'Anything else piling up',
]

const schema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  name: 'R&D Trash Disposal',
  description: 'Full garage cleanout service in Miami-Dade & Broward. Licensed & insured.',
  url: `${siteUrl}/garage-cleanout`,
  telephone: `+1${phone}`,
  areaServed: ['Miami-Dade County', 'Broward County'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need to sort or bag anything before you arrive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. We take it as-is. You don\'t need to prepare, sort, or bag anything before we show up.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if there\'s too much for one load?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We\'ll tell you upfront if it needs multiple trips and price it accordingly. No surprises.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you take everything in the garage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Almost everything. We don\'t take hazardous materials like fuel or chemicals, but everything else goes. Call us if you\'re unsure about a specific item.',
      },
    },
  ],
}

export default function GarageCleanoutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-[#010c1c] pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-3">
              Miami-Dade &amp; Broward County
            </p>
            <h1 className="font-display text-white text-6xl sm:text-7xl lg:text-8xl leading-none mb-6">
              GARAGE CLEANOUT
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto mb-10">
              We clear it all out. No sorting, no prep — just call and we&apos;ll be there. Same-day service available. Licensed &amp; insured.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink phone={phone} display={phoneFormatted} source="garage_hero" className="inline-flex items-center justify-center gap-2 bg-[#F5A623] text-[#010c1c] font-bold px-8 py-4 rounded-lg text-lg hover:bg-amber-400 transition-all hover:scale-105">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {phoneFormatted}
              </PhoneLink>
              <a href="/estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-[#010c1c] transition-all">
                Get Free Estimate
              </a>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-3">
                  One Call, Done
                </p>
                <h2 className="font-display text-[#010c1c] text-4xl sm:text-5xl mb-6">
                  WE LEAVE IT EMPTY.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Garage cleanouts are one of our most requested jobs — and one of the most satisfying. South Florida garages tend to become storage for everything over the years: old furniture, broken appliances, boxes from moves years ago, lawn equipment that stopped working, and anything else that didn&apos;t have another place to go. We show up, load it all, and leave your garage completely clear. Most garage cleanouts in Kendall, Pembroke Pines, Coral Springs, and Miramar take two to four hours. Call by noon for same-day availability.
                </p>
                <p className="mt-4 text-sm text-zinc-400">
                  Call <PhoneLink phone={phone} display={phoneFormatted} source="garage_inline" className="text-amber-400 font-medium" /> — we cover all of Miami-Dade and Broward.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-4">
                  What We Remove
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {items.map((item) => (
                    <div key={item} className="flex items-center gap-3 bg-[#F5F7FA] rounded-lg px-4 py-3 border border-gray-100">
                      <div className="w-2 h-2 rounded-full bg-[#F5A623] flex-shrink-0" />
                      <span className="text-[#010c1c] font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="py-12 bg-[#F5F7FA] border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: 'Licensed & Insured', sub: 'State of Florida' },
                { label: 'Same-Day Service', sub: '7 days a week' },
                { label: 'Free Estimates', sub: 'No hidden fees' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="font-display text-[#010c1c] text-2xl">{item.label.toUpperCase()}</p>
                  <p className="text-gray-400 text-sm mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="font-display text-[#010c1c] text-4xl sm:text-5xl mb-10 text-center">
              COMMON QUESTIONS
            </h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((q) => (
                <div key={q.name} className="border-b border-gray-100 pb-6">
                  <h3 className="text-[#010c1c] font-semibold text-lg mb-2">{q.name}</h3>
                  <p className="text-gray-600">{q.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#010c1c]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="font-display text-white text-5xl mb-4">READY TO CLEAR IT OUT?</h2>
            <p className="text-white/70 text-lg mb-8">
              Call us or fill out the estimate form. We serve all of Miami-Dade and Broward County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink phone={phone} display={phoneFormatted} source="garage_cta" className="inline-flex items-center justify-center gap-2 bg-[#F5A623] text-[#010c1c] font-bold px-8 py-4 rounded-lg hover:bg-amber-400 transition-all hover:scale-105">
                Call {phoneFormatted}
              </PhoneLink>
              <a href="/estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#010c1c] transition-all">
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
