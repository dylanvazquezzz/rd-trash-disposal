import Image from 'next/image'

const areas = [
  { name: 'Miami', slug: 'miami' },
  { name: 'Miami Beach', slug: 'miami-beach' },
  { name: 'Hialeah', slug: 'hialeah' },
  { name: 'Doral', slug: 'doral' },
  { name: 'Kendall', slug: 'kendall' },
  { name: 'Homestead', slug: 'homestead' },
  { name: 'Fort Lauderdale', slug: 'fort-lauderdale' },
  { name: 'Hollywood', slug: 'hollywood' },
  { name: 'Pembroke Pines', slug: 'pembroke-pines' },
  { name: 'Miramar', slug: 'miramar' },
  { name: 'Coral Springs', slug: 'coral-springs' },
  { name: 'Pompano Beach', slug: 'pompano-beach' },
  { name: 'Boca Raton', slug: 'boca-raton' },
  { name: 'Aventura', slug: 'aventura' },
  { name: 'North Miami', slug: 'north-miami' },
]

export default function ServiceAreas() {
  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">
              Service Area
            </p>
            <h2 className="font-display text-[#0B1E3D] text-5xl sm:text-6xl leading-none mb-6">
              WE COVER ALL OF SOUTH FLORIDA.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Based locally. We serve Miami-Dade, Broward, and Palm Beach counties.
              Same-day service available 7 days a week. Call us to confirm
              availability in your area.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {areas.map((area) => (
                <a
                  key={area.slug}
                  href={`/junk-removal-${area.slug}`}
                  className="bg-white border border-gray-200 text-[#0B1E3D] text-sm font-medium px-3 py-1.5 rounded-full shadow-sm hover:border-[#F5A623] hover:text-[#F5A623] transition-colors"
                >
                  {area.name}
                </a>
              ))}
              <span className="bg-[#F5A623] text-[#0B1E3D] text-sm font-bold px-3 py-1.5 rounded-full">
                + More
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:7864083783"
                className="inline-flex items-center justify-center gap-2 bg-[#0B1E3D] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1a3560] transition-all hover:scale-105"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 786-408-3783
              </a>
            </div>
          </div>

          {/* Trailer image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/trailer.jpg"
                alt="R&D Trash Disposal trailer ready for service"
                width={600}
                height={500}
                className="object-cover w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-white font-semibold text-sm">Available Today in South Florida</span>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-[#F5A623] text-[#0B1E3D] rounded-2xl p-4 shadow-xl">
              <p className="font-display text-2xl leading-none">SAME</p>
              <p className="font-display text-2xl leading-none">DAY</p>
              <p className="text-xs font-bold mt-1">SERVICE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
