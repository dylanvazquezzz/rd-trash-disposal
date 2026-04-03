export default function Services() {
  const services = [
    {
      title: 'Junk Removal',
      subtitle: 'Any item. Any load. Gone same day.',
      description:
        'We haul everything — furniture, appliances, mattresses, electronics, yard waste, construction debris, and more. You point, we load. No item too big, no load too heavy.',
      items: [
        'Furniture & sofas',
        'Appliances (all types)',
        'Mattresses & box springs',
        'Electronics & TVs',
        'Yard waste & debris',
        'Construction leftovers',
        'Office equipment',
        'Hot tubs & sheds',
      ],
      cta: 'Get Junk Removal Quote',
      accent: '#F5A623',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Demo Services',
      subtitle: 'Small-scale demolition done right.',
      description:
        'Need a kitchen gutted? Bathroom torn down? Old deck removed? We handle small interior and exterior demolition jobs — clean, fast, and fully hauled away when we&apos;re done.',
      items: [
        'Kitchen demolition',
        'Bathroom teardown',
        'Deck & patio removal',
        'Drywall & flooring removal',
        'Fence & shed demo',
        'Garage cleanouts',
        'Interior wall removal',
        'Full room gut-outs',
      ],
      cta: 'Get Demo Quote',
      accent: '#0B1E3D',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">
            What We Do
          </p>
          <h2 className="font-display text-[#0B1E3D] text-5xl sm:text-6xl">
            TWO SERVICES. ONE CALL.
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Whether you need a single item hauled or a full room demolished and cleared, R&D has you covered.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`rounded-2xl border-2 overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
                idx === 0
                  ? 'border-[#F5A623]'
                  : 'border-[#0B1E3D]'
              }`}
            >
              {/* Card header */}
              <div
                className={`px-8 py-6 ${
                  idx === 0 ? 'bg-[#F5A623]' : 'bg-[#0B1E3D]'
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                    idx === 0
                      ? 'bg-[#0B1E3D] text-[#F5A623]'
                      : 'bg-white/10 text-white'
                  }`}
                >
                  {service.icon}
                </div>
                <h3
                  className={`font-display text-4xl ${
                    idx === 0 ? 'text-[#0B1E3D]' : 'text-white'
                  }`}
                >
                  {service.title.toUpperCase()}
                </h3>
                <p
                  className={`text-sm font-semibold mt-1 ${
                    idx === 0 ? 'text-[#0B1E3D]/70' : 'text-white/70'
                  }`}
                >
                  {service.subtitle}
                </p>
              </div>

              {/* Card body */}
              <div className="px-8 py-6 bg-white">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {idx === 0
                    ? 'We haul everything — furniture, appliances, mattresses, electronics, yard waste, construction debris, and more. You point, we load. No item too big, no load too heavy.'
                    : 'Need a kitchen gutted? Bathroom torn down? Old deck removed? We handle small interior and exterior demolition jobs — clean, fast, and fully hauled away when we\'re done.'}
                </p>

                {/* Item list */}
                <ul className="grid grid-cols-2 gap-2 mb-8">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#estimate"
                  className={`inline-flex items-center gap-2 font-semibold text-sm px-6 py-3 rounded transition-all hover:scale-105 active:scale-95 ${
                    idx === 0
                      ? 'bg-[#F5A623] text-[#0B1E3D] hover:bg-[#d48e10]'
                      : 'bg-[#0B1E3D] text-white hover:bg-[#1a3560]'
                  }`}
                >
                  {service.cta}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
