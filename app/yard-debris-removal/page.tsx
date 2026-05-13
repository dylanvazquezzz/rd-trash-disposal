import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PhoneLink from '@/components/PhoneLink'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rdtrash.org'
const phone = '7864083783'
const phoneFormatted = '786-408-3783'

export const metadata: Metadata = {
  title: 'Yard Debris Removal Miami & Broward | Tree Limbs, Storm Debris & More',
  description: 'Yard debris removal in Miami-Dade & Broward. Tree limbs, palm fronds, grass clippings, storm debris — hauled away same day. Licensed & insured. Call 786-408-3783.',
  alternates: { canonical: `${siteUrl}/yard-debris-removal` },
  openGraph: {
    title: 'Yard Debris Removal Miami & Broward | R&D Trash Disposal',
    description: 'Tree limbs, palm fronds, storm debris — same-day haul-away. Licensed & insured. Free estimates.',
    url: `${siteUrl}/yard-debris-removal`,
  },
}

const items = [
  'Tree limbs & branches',
  'Palm fronds',
  'Grass clippings & sod',
  'Storm & hurricane debris',
  'Mulch & soil piles',
  'Fence sections & lumber',
  'Old landscaping materials',
  'Concrete & pavers (limited)',
  'General yard waste',
  'Post-renovation outdoor debris',
]

const schema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  name: 'R&D Trash Disposal',
  description: 'Yard debris removal in Miami-Dade & Broward. Tree limbs, palm fronds, storm debris. Licensed & insured.',
  url: `${siteUrl}/yard-debris-removal`,
  telephone: `+1${phone}`,
  areaServed: ['Miami-Dade County', 'Broward County'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you haul yard debris after a storm?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Post-storm debris removal is one of our most common requests in South Florida. Call early after a storm — availability fills fast after major weather events.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you haul a full fallen tree?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We haul cut sections of fallen trees. The tree needs to be cut into manageable lengths first — we don\'t do chainsaw work, but we haul everything after it\'s cut.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you take soil and mulch piles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes in most cases. Call to confirm volume and access — large soil piles may require additional equipment.',
      },
    },
  ],
}

export default function YardDebrisRemovalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-[#0B1E3D] pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-3">
              Miami-Dade &amp; Broward County
            </p>
            <h1 className="font-display text-white text-6xl sm:text-7xl lg:text-8xl leading-none mb-6">
              YARD DEBRIS REMOVAL
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto mb-10">
              Tree limbs, palm fronds, storm debris — hauled away same day. We cover all of South Florida. Licensed &amp; insured.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink phone={phone} display={phoneFormatted} source="yard_hero" className="inline-flex items-center justify-center gap-2 bg-[#F5A623] text-[#0B1E3D] font-bold px-8 py-4 rounded-lg text-lg hover:bg-amber-400 transition-all hover:scale-105">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call {phoneFormatted}
              </PhoneLink>
              <a href="/estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-[#0B1E3D] transition-all">
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
                  Storm Ready. Year-Round.
                </p>
                <h2 className="font-display text-[#0B1E3D] text-4xl sm:text-5xl mb-6">
                  WE HAUL WHAT THE CITY WON&apos;T TAKE.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  South Florida&apos;s climate means year-round yard work — and storm season means large debris piles can appear overnight. City bulk pickup has limits on volume and type, and most landscapers don&apos;t haul. We fill that gap. We do same-day and next-day yard debris haul-away across Miami-Dade and Broward for homeowners, landscapers, and property managers. After a hurricane or tropical storm, our crews are out running debris routes throughout the county. One pile or an entire property&apos;s worth — we handle it.
                </p>
                <p className="mt-4 text-sm text-zinc-400">
                  Call <PhoneLink phone={phone} display={phoneFormatted} source="yard_inline" className="text-amber-400 font-medium" /> — same-day and next-day slots available.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-4">
                  What We Haul
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {items.map((item) => (
                    <div key={item} className="flex items-center gap-3 bg-[#F5F7FA] rounded-lg px-4 py-3 border border-gray-100">
                      <div className="w-2 h-2 rounded-full bg-[#F5A623] flex-shrink-0" />
                      <span className="text-[#0B1E3D] font-medium text-sm">{item}</span>
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
                  <p className="font-display text-[#0B1E3D] text-2xl">{item.label.toUpperCase()}</p>
                  <p className="text-gray-400 text-sm mt-1">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="font-display text-[#0B1E3D] text-4xl sm:text-5xl mb-10 text-center">
              COMMON QUESTIONS
            </h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((q) => (
                <div key={q.name} className="border-b border-gray-100 pb-6">
                  <h3 className="text-[#0B1E3D] font-semibold text-lg mb-2">{q.name}</h3>
                  <p className="text-gray-600">{q.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0B1E3D]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="font-display text-white text-5xl mb-4">READY TO CLEAR THE YARD?</h2>
            <p className="text-white/70 text-lg mb-8">
              Call us or fill out the estimate form. We serve all of Miami-Dade and Broward County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink phone={phone} display={phoneFormatted} source="yard_cta" className="inline-flex items-center justify-center gap-2 bg-[#F5A623] text-[#0B1E3D] font-bold px-8 py-4 rounded-lg hover:bg-amber-400 transition-all hover:scale-105">
                Call {phoneFormatted}
              </PhoneLink>
              <a href="/estimate" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-[#0B1E3D] transition-all">
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
