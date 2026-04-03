const stats = [
  { value: '500+', label: 'Jobs Completed' },
  { value: 'Same Day', label: 'Service Available' },
  { value: '2', label: 'Counties Covered' },
  { value: '100%', label: 'Satisfaction Guarantee' },
]

const testimonials = [
  {
    quote:
      'Called at 9am and they were at my house by noon. Took a couch, two mattresses, and a ton of yard waste. Guys were professional and the price was fair.',
    name: 'Carlos M.',
    location: 'Hialeah, FL',
  },
  {
    quote:
      'We needed a kitchen gutted before our contractor showed up. R&D came in, demo\'d everything, and hauled it all out in one day. Saved us a ton of time.',
    name: 'Jennifer R.',
    location: 'Kendall, FL',
  },
  {
    quote:
      'Did a full house cleanout for my mom\'s estate. They were respectful, fast, and came back a second time when there was more than expected. Would hire again.',
    name: 'Mike T.',
    location: 'Hollywood, FL',
  },
]

export default function SocialProof() {
  return (
    <section className="py-20 bg-white">
      {/* Stats bar */}
      <div className="bg-[#0B1E3D] py-12 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-[#F5A623] text-5xl sm:text-6xl">{stat.value}</p>
                <p className="text-white/70 text-sm font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">
            What People Say
          </p>
          <h2 className="font-display text-[#0B1E3D] text-5xl sm:text-6xl">
            TRUSTED BY SOUTH FLORIDA.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#F5F7FA] rounded-2xl p-6 border border-gray-200 hover:border-[#0B1E3D] transition-colors hover:shadow-md"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#F5A623]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-gray-600 text-sm leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#0B1E3D] flex items-center justify-center">
                  <span className="text-[#F5A623] font-display text-base">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-[#0B1E3D] text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
