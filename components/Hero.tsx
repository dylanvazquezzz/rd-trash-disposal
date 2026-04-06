import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/truck.jpg"
          alt="R&D Trash Disposal truck ready for same-day pickup"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark navy overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060f1e]/90 via-[#0B1E3D]/80 to-[#0B1E3D]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F5A623] text-[#0B1E3D] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded mb-6 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0B1E3D] animate-pulse" />
            South Florida — Same Day Available
          </div>

          {/* H1 */}
          <h1 className="font-display text-white leading-none animate-fade-up">
            <span className="block text-7xl sm:text-8xl lg:text-9xl">SAME-DAY</span>
            <span className="block text-7xl sm:text-8xl lg:text-9xl text-[#F5A623]">JUNK REMOVAL.</span>
            <span className="block text-5xl sm:text-6xl lg:text-7xl mt-2">ANY TRASH. GONE TODAY.</span>
          </h1>

          {/* Sub */}
          <p className="mt-6 text-white/85 text-lg sm:text-xl leading-relaxed max-w-xl animate-fade-up delay-200">
            South Florida&apos;s local hauling team. Furniture, appliances, yard waste,
            construction debris — we take it all. Fast, affordable, no hassle.
          </p>

          {/* CTA row */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <a
              href="/estimate"
              className="group inline-flex items-center justify-center gap-2 bg-[#F5A623] text-[#0B1E3D] font-bold text-base px-8 py-4 rounded shadow-xl hover:bg-[#d48e10] transition-all hover:scale-105 active:scale-95"
            >
              Get Your Free Estimate
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="tel:3054500649"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/50 text-white font-semibold text-base px-8 py-4 rounded hover:border-white hover:bg-white/10 transition-all"
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
              305-450-0649
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-10 flex flex-wrap gap-6 animate-fade-up delay-400">
            {[
              { label: 'Same-Day Service', icon: '⚡' },
              { label: 'Free Estimates', icon: '✓' },
              { label: 'Fully Licensed', icon: '🛡' },
              { label: 'All Items Accepted', icon: '♻' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-white/80 text-sm">
                <span className="text-[#F5A623]">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 0C1200 50 240 50 0 0L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
