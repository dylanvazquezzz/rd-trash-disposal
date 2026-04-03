const categories = [
  {
    category: 'Furniture',
    icon: '🛋',
    items: ['Sofas & sectionals', 'Recliners', 'Bed frames', 'Dressers', 'Tables & chairs', 'Desks & shelves'],
  },
  {
    category: 'Appliances',
    icon: '🔌',
    items: ['Refrigerators', 'Washers & dryers', 'Dishwashers', 'Stoves & ovens', 'AC units', 'Water heaters'],
  },
  {
    category: 'Electronics',
    icon: '📺',
    items: ['TVs (all sizes)', 'Computers', 'Printers', 'Monitors', 'Stereo systems', 'Gaming consoles'],
  },
  {
    category: 'Yard & Outdoor',
    icon: '🌿',
    items: ['Yard waste & trimmings', 'Dirt & soil', 'Old fencing', 'Patio furniture', 'Sheds', 'Play equipment'],
  },
  {
    category: 'Construction',
    icon: '🏗',
    items: ['Drywall & plaster', 'Flooring & tile', 'Lumber & wood', 'Concrete (small loads)', 'Roofing debris', 'Demo materials'],
  },
  {
    category: 'Miscellaneous',
    icon: '📦',
    items: ['Mattresses', 'Hot tubs & spas', 'Exercise equipment', 'Boxes & clutter', 'Storage unit items', 'Estate cleanouts'],
  },
]

export default function WhatWeTake() {
  return (
    <section id="what-we-take" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">
            No Limits
          </p>
          <h2 className="font-display text-[#0B1E3D] text-5xl sm:text-6xl">
            WE TAKE EVERYTHING.
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Seriously. If you can point to it, we can haul it. Here&apos;s just some of what we accept.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.category}
              className="group rounded-xl border border-gray-200 p-6 hover:border-[#0B1E3D] hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="font-display text-[#0B1E3D] text-2xl group-hover:text-[#F5A623] transition-colors">
                  {cat.category.toUpperCase()}
                </h3>
              </div>
              <ul className="space-y-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg
                      className="w-3.5 h-3.5 text-[#F5A623] flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Not sure? Banner */}
        <div className="mt-12 bg-[#0B1E3D] rounded-2xl p-8 text-center">
          <h3 className="font-display text-white text-3xl sm:text-4xl mb-2">
            NOT SURE IF WE TAKE IT?
          </h3>
          <p className="text-white/70 mb-6">
            Just ask. If it&apos;s not hazardous waste, we can almost certainly haul it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3054500649"
              className="inline-flex items-center justify-center gap-2 bg-[#F5A623] text-[#0B1E3D] font-bold px-6 py-3 rounded-lg hover:bg-[#d48e10] transition-all hover:scale-105"
            >
              Call 305-450-0649
            </a>
            <a
              href="tel:9547088090"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3 rounded-lg hover:border-white transition-all"
            >
              Call 954-708-8090
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
