import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PhoneLink from '@/components/PhoneLink'

export const metadata: Metadata = {
  title: 'About R&D Trash Disposal | Founded by Randy, David & Dylan',
  description: 'R&D Trash Disposal is a South Florida junk removal company founded by three friends — Randy, David, and Dylan. Licensed & insured, serving Miami-Dade and Broward County.',
  alternates: {
    canonical: 'https://rdtrash.org/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="bg-[#0B1E3D] pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-3">
              South Florida&apos;s Local Crew
            </p>
            <h1 className="font-display text-white text-6xl sm:text-7xl lg:text-8xl leading-none mb-6">
              ABOUT R&amp;D.
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              Three friends. One truck. A name that almost didn&apos;t make the cut.
            </p>
          </div>
        </section>

        {/* Origin story */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="font-display text-[#0B1E3D] text-5xl mb-8">HOW IT STARTED.</h2>
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              <p>
                R&amp;D Trash Disposal was started by three friends — <strong className="text-[#0B1E3D]">Randy, David, and Dylan</strong> — who saw a gap in the South Florida market: junk removal that actually showed up on time, priced fairly, and didn&apos;t leave a mess behind.
              </p>
              <p>
                We almost called it R&amp;D&amp;D Trash Disposal. Turns out three letters is one too many — and it sounded more like a fantasy game than a hauling company. So Randy and David got top billing, Dylan got to build the website, and the name stuck.
              </p>
              <p>
                We started with one truck, a trailer, and a lot of early mornings. Today we run routes through Miami-Dade and Broward County seven days a week — same crew, same standards, just a lot more loads under our belt.
              </p>
              <p>
                We&apos;re not a franchise. We&apos;re not a call center that dispatches strangers. When you call R&amp;D, you get us — licensed, insured, and familiar with every neighborhood from Brickell to Boca Raton.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-[#F5F7FA]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">How We Work</p>
              <h2 className="font-display text-[#0B1E3D] text-5xl sm:text-6xl">THE R&amp;D WAY.</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: 'We Show Up',
                  body: 'Same-day service means same day. We give you a window, we stick to it. No ghosting, no reschedules.',
                },
                {
                  title: 'We Price Fair',
                  body: 'You get a quote before we start. What we say is what you pay — no surprises at the end of the job.',
                },
                {
                  title: 'We Clean Up',
                  body: 'We don\'t just haul — we sweep. You hired us to make the problem disappear, so that\'s what we do.',
                },
              ].map((v) => (
                <div key={v.title} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                  <div className="w-2 h-8 bg-[#F5A623] rounded mb-4" />
                  <h3 className="font-display text-[#0B1E3D] text-2xl mb-2">{v.title.toUpperCase()}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service area */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-3">Where We Work</p>
            <h2 className="font-display text-[#0B1E3D] text-5xl mb-6">OUR COVERAGE.</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We run routes through Miami-Dade and Broward County seven days a week. That includes Miami, Miami Beach, Hialeah, Doral, Kendall, Homestead, Aventura, North Miami, Fort Lauderdale, Hollywood, Pembroke Pines, Miramar, Coral Springs, Pompano Beach, and Boca Raton — plus everywhere in between.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Licensed and insured in the State of Florida. Certificate of insurance available for any commercial job that requires it.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0B1E3D]">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="font-display text-white text-5xl mb-4">READY TO WORK WITH US?</h2>
            <p className="text-white/70 text-lg mb-8">
              Call us or fill out the estimate form. We&apos;ll get back to you fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink
                phone="7864083783"
                display="786-408-3783"
                source="about_cta"
                className="inline-flex items-center justify-center gap-2 bg-[#F5A623] text-[#0B1E3D] font-bold px-8 py-4 rounded-lg text-lg hover:bg-amber-400 transition-all hover:scale-105"
              >
                Call 786-408-3783
              </PhoneLink>
              <a
                href="/estimate"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-[#0B1E3D] transition-all"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
