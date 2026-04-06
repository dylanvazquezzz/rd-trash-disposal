export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Get Your Estimate',
      description:
        'Fill out our quick form or call us directly. Tell us what you need hauled and we\'ll give you a free, upfront price — no surprise fees.',
    },
    {
      number: '02',
      title: 'We Show Up',
      description:
        'Our crew arrives at your scheduled time — often same day. We do all the heavy lifting and loading. You don\'t have to lift a finger.',
    },
    {
      number: '03',
      title: 'It\'s Gone',
      description:
        'We haul everything away and leave your space clean. Responsible disposal — items are donated, recycled, or properly discarded.',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">
            The Process
          </p>
          <h2 className="font-display text-[#0B1E3D] text-5xl sm:text-6xl">
            3 STEPS. THAT&apos;S IT.
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-md mx-auto">
            We made junk removal as easy as possible. Here&apos;s how it works from first call to clean space.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-[#e5e7eb] z-0" />

          {steps.map((step, idx) => (
            <div key={step.number} className="relative z-10 flex flex-col items-center text-center">
              {/* Number circle */}
              <div className="w-20 h-20 rounded-full bg-[#0B1E3D] flex items-center justify-center mb-6 shadow-lg">
                <span className="font-display text-[#F5A623] text-3xl">{step.number}</span>
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl p-6 shadow-md w-full border border-gray-100 hover:border-[#F5A623] transition-colors">
                <h3 className="font-display text-[#0B1E3D] text-2xl mb-3">
                  {step.title.toUpperCase()}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Arrow connector (mobile) */}
              {idx < steps.length - 1 && (
                <div className="md:hidden mt-6 mb-2 text-gray-300">
                  <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href="/estimate"
            className="inline-flex items-center gap-2 bg-[#0B1E3D] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-[#1a3560] transition-all hover:scale-105 active:scale-95"
          >
            Book Same-Day Pickup
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
