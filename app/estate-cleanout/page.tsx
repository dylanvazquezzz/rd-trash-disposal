import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PhoneLink from '@/components/PhoneLink'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://rdtrash.org'
const phone = '7864083783'
const phoneFormatted = '786-408-3783'

export const metadata: Metadata = {
  title: 'Estate Cleanout Service Miami & Broward | Full Property Clearance',
  description: 'Professional estate cleanout service in Miami-Dade & Broward. Full property cleared fast. Furniture, appliances, personal property — licensed & insured. Call 786-408-3783.',
  alternates: { canonical: `${siteUrl}/estate-cleanout` },
  openGraph: {
    title: 'Estate Cleanout Service Miami & Broward | R&D Trash Disposal',
    description: 'Full estate and property cleanout service. Fast, discreet, licensed & insured. Miami-Dade & Broward.',
    url: `${siteUrl}/estate-cleanout`,
  },
}

const items = [
  'Furniture & bedroom sets',
  'Appliances',
  'Clothing & personal items',
  'Books, dishes & household goods',
  'Tools & garage contents',
  'Yard equipment & outdoor furniture',
  'Construction & renovation debris',
  'Electronics & TVs',
  'Boxes & storage bins',
  'Full property contents',
]

const schema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  name: 'R&D Trash Disposal',
  description: 'Professional estate cleanout service in Miami-Dade & Broward. Licensed & insured.',
  url: `${siteUrl}/estate-cleanout`,
  telephone: `+1${phone}`,
  areaServed: ['Miami-Dade County', 'Broward County'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How quickly can you schedule an estate cleanout?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Often same-week. Call ${phoneFormatted} for current availability. We prioritize estate jobs that are time-sensitive.`,
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with real estate agents and attorneys?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We regularly work with agents preparing properties for listing and attorneys handling estate settlements. Invoicing available on request.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you take everything, or can I keep certain items?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We take what you want gone. If there are items you want to keep, just mark them or set them aside — we leave anything you specify and haul the rest.',
      },
    },
  ],
}

export default function EstateCleanoutPage() {
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
              ESTATE CLEANOUT
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto mb-10">
              Full property cleared fast. Professional, discreet, and done right. Licensed &amp; insured. Free estimates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink phone={phone} display={phoneFormatted} source="estate_hero" className="inline-flex items-center justify-center gap-2 bg-[#F5A623] text-[#0B1E3D] font-bold px-8 py-4 rounded-lg text-lg hover:bg-amber-400 transition-all hover:scale-105">
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
                  Fast & Professional
                </p>
                <h2 className="font-display text-[#0B1E3D] text-4xl sm:text-5xl mb-6">
                  PROPERTY CLEARED.<br />READY FOR WHAT&apos;S NEXT.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Estate cleanouts require speed, discretion, and a crew that shows up when they say they will. Whether you&apos;re handling a loved one&apos;s property, preparing a home for sale, or clearing a rental between tenants, we move fast and leave the property ready for the next step. We serve attorneys, real estate agents, property managers, and families throughout Miami-Dade and Broward — and we understand that these jobs are often time-sensitive and require a professional, respectful approach. Most estate cleanouts are completed in one to two days depending on property size.
                </p>
                <p className="mt-4 text-sm text-zinc-400">
                  Call <PhoneLink phone={phone} display={phoneFormatted} source="estate_inline" className="text-amber-400 font-medium" /> — invoicing available for agents and attorneys.
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
                { label: 'Same-Week Service', sub: 'Often same-day available' },
                { label: 'Free Estimates', sub: 'Invoicing available' },
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
            <h2 className="font-display text-white text-5xl mb-4">READY TO GET STARTED?</h2>
            <p className="text-white/70 text-lg mb-8">
              Call us or fill out the estimate form. We serve all of Miami-Dade and Broward County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink phone={phone} display={phoneFormatted} source="estate_cta" className="inline-flex items-center justify-center gap-2 bg-[#F5A623] text-[#0B1E3D] font-bold px-8 py-4 rounded-lg hover:bg-amber-400 transition-all hover:scale-105">
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
