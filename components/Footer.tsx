export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-[#060f1e] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-[#F5A623] rounded flex items-center justify-center">
                <span className="font-display text-[#0B1E3D] text-sm font-bold">R&D</span>
              </div>
              <span className="font-display text-2xl tracking-wide text-white">TRASH DISPOSAL</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              South Florida&apos;s local junk removal and demolition team. Same-day service, upfront pricing, no hassle.
            </p>
            <div className="space-y-2">
              <a
                href="tel:3054500649"
                className="flex items-center gap-2 text-[#F5A623] font-semibold hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                305-450-0649 (Miami-Dade)
              </a>
              <a
                href="tel:9547088090"
                className="flex items-center gap-2 text-[#F5A623] font-semibold hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                954-708-8090 (Broward)
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg text-white mb-4 tracking-wide">SERVICES</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              {[
                'Junk Removal',
                'Furniture Hauling',
                'Appliance Removal',
                'Yard Waste Pickup',
                'Construction Debris',
                'Kitchen Demolition',
                'Bathroom Teardown',
                'Full Cleanouts',
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-[#F5A623] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-display text-lg text-white mb-4 tracking-wide">SERVICE AREAS</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              {[
                'Miami',
                'Miami Beach',
                'Hialeah',
                'Doral',
                'Kendall',
                'Fort Lauderdale',
                'Hollywood',
                'Pembroke Pines',
                'Coral Springs',
              ].map((area) => (
                <li key={area} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#F5A623]" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; {currentYear} R&D Trash Disposal. All rights reserved. Based in Miami, FL.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-white/40 text-xs">
              Serving Miami-Dade &amp; Broward County
            </p>
            <a href="/privacy" className="text-white/30 text-xs hover:text-white/50 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
