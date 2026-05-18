const stats = [
  { value: '500+', label: 'Jobs Completed' },
  { value: 'Same Day', label: 'Service Available' },
  { value: '3', label: 'Counties Covered' },
  { value: '100%', label: 'Satisfaction Guarantee' },
]

export default function SocialProof() {
  return (
    <section className="bg-[#010c1c] py-12">
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
    </section>
  )
}
