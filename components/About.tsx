export default function About() {
  return (
    <section className="py-14 bg-[#0B1E3D]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-4">Who We Are</p>
        <p className="text-white text-lg leading-relaxed mb-4">
          R&amp;D Trash Disposal was founded by three friends — Randy, David, and Dylan. We almost went with
          R&amp;D&amp;D, but three letters felt more like a fantasy game than a hauling company. Randy and David
          got top billing. Dylan built the website. The name stuck.
        </p>
        <p className="text-white/60 text-base leading-relaxed mb-6">
          We&apos;re not a franchise or a call center. When you call us, you get us — licensed and insured,
          running routes through Miami-Dade and Broward County seven days a week.
        </p>
        <a
          href="/about"
          className="inline-flex items-center gap-1.5 text-[#F5A623] font-semibold text-sm hover:underline"
        >
          Our story →
        </a>
      </div>
    </section>
  )
}
