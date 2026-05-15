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
        .word-1 { animation-delay: 0.1s; }
        .word-2 { animation-delay: 0.28s; }
        .accent-line {
          transform-origin: left;
          animation: drawLine 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both;
        }
        .sub-fade {
          animation: fadeUp 0.6s ease 1s both;
        }
      `}</style>

      <Nav />
      <main>

        {/* Hero — animated, no image */}
        <section className="bg-[#010c1c] pt-36 pb-28 px-4 overflow-hidden">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-6 sub-fade" style={{ animationDelay: '0.05s' }}>
              South Florida&apos;s Local Crew
            </p>

            {/* Animated H1 */}
            <h1 className="font-display text-white leading-none mb-6" style={{ fontSize: 'clamp(4rem, 12vw, 9rem)' }}>
              <span className="word-mask">
                <span className="word-inner word-1">ABOUT&nbsp;</span>
              </span>
              <span className="word-mask">
                <span className="word-inner word-2" style={{ color: '#F5A623' }}>R&amp;D.</span>
              </span>
            </h1>

            {/* Amber underline that draws across */}
            <div className="flex justify-center mb-8">
              <div
                className="accent-line h-1 rounded-full bg-[#F5A623]"
                style={{ width: '180px' }}
              />
            </div>

            <p className="sub-fade text-white/60 text-lg max-w-md mx-auto">
              Three friends. One mission. A name that almost didn&apos;t make the cut.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* Left — copy */}
              <div>
                <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-3">Our Story</p>
                <h2 className="font-display text-[#010c1c] text-5xl leading-none mb-8">HOW IT<br />STARTED.</h2>
                <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                  <p>
                    Started by three friends — <strong className="text-[#010c1c]">Randy, David, and Dylan</strong> — who got tired of junk removal companies that didn&apos;t show up. We saw a gap in South Florida: reliable haulers who showed up on time, priced fairly, and left the place clean.
                  </p>
                  <p>
                    We almost called it R&amp;D&amp;D Trash Disposal. Turns out that sounds more like a fantasy game than a hauling company — so two out of three names made the cut. Randy and David got top billing. Dylan built the website.
                  </p>
                  <p>
                    We&apos;re not a franchise. When you call R&amp;D, you get us — same crew, same standards, seven days a week.
                  </p>
                </div>
              </div>

              {/* Right — fleet stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '2', label: 'Trucks in the field' },
                  { value: '1', label: 'Trailer' },
                  { value: '500+', label: 'Jobs completed' },
                  { value: '7', label: 'Days a week' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-[#F5F7FA] rounded-2xl p-6 border border-gray-200 text-center"
                  >
                    <p className="font-display text-[#F5A623] text-5xl">{s.value}</p>
                    <p className="text-[#010c1c] text-sm font-medium mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Pull quote */}
        <section className="bg-[#010c1c] py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-display text-white text-3xl sm:text-4xl leading-snug">
              &ldquo;We&apos;re not a call center that dispatches strangers.<br />
              When you call R&amp;D, you get us.&rdquo;
            </p>
            <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mt-6">
              — Randy, David &amp; Dylan
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-[#F5F7FA]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">How We Work</p>
              <h2 className="font-display text-[#010c1c] text-5xl sm:text-6xl">THE R&amp;D WAY.</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  title: 'We Show Up',
                  body: 'Same-day service means same day. We give you a window and we stick to it. No ghosting, no reschedules.',
                },
                {
                  num: '02',
                  title: 'We Price Fair',
                  body: 'You get a quote before we start. What we say is what you pay — no surprises at the end of the job.',
                },
                {
                  num: '03',
                  title: 'We Clean Up',
                  body: "We don't just haul — we sweep. You hired us to make the problem disappear, so that's what we do.",
                },
              ].map((v) => (
                <div key={v.num} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                  <p className="font-display text-[#F5A623] text-5xl mb-4">{v.num}</p>
                  <h3 className="font-display text-[#010c1c] text-2xl mb-3">{v.title.toUpperCase()}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
            <h2 className="font-display text-[#010c1c] text-5xl sm:text-6xl mb-4">READY TO WORK<br />WITH US?</h2>
            <p className="text-gray-500 text-lg mb-10">
              Call us or fill out the estimate form. We serve all of Miami-Dade and Broward County, seven days a week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink
                phone="7864083783"
                display="786-408-3783"
                source="about_cta"
                className="inline-flex items-center justify-center gap-2 bg-[#F5A623] text-[#010c1c] font-bold px-8 py-4 rounded-lg text-lg hover:bg-amber-400 transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 786-408-3783
              </PhoneLink>
              <a
                href="/estimate"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#010c1c] text-[#010c1c] font-semibold px-8 py-4 rounded-lg text-lg hover:bg-[#010c1c] hover:text-white transition-all"
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
