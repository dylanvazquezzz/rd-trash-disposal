export default function About() {
  return (
    <section className="py-14 bg-[#010c1c]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-4">Who We Are</p>
        <h2 className="font-display text-white text-4xl sm:text-5xl mb-6">
          NOT A FRANCHISE.<br />NOT A CALL CENTER.
        </h2>
        <p className="text-white/70 text-base leading-relaxed mb-4">
          When you call R&amp;D, the owners pick up. We&apos;re a South Florida-based, owner-operated junk removal crew — not a franchise dispatching strangers. The same people who answer the phone are the ones showing up to your property.
        </p>
        <p className="text-white/70 text-base leading-relaxed mb-6">
          That means hands-on work, fair pricing, and someone who actually cares if the job gets done right. Licensed and insured. Seven days a week.
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
