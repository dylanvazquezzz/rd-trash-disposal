'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { fireEvent } from '@/lib/analytics'

const trackCall = () => {
  fireEvent('phone_call_click', { source: 'nav', page_path: window.location.pathname })
}

const commercialLinks = [
  { label: 'Commercial Junk Removal', href: '/commercial/junk-removal' },
  { label: 'Dumpster Rental', href: '/dumpster-rental' },
  { label: 'Demolition', href: '/demolition/miami' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isCommercial = pathname.startsWith('/commercial') || pathname === '/dumpster-rental'
  const navHref = (anchor: string) => isHome ? anchor : `/${anchor}`

  const ctaHref = isCommercial ? '/commercial/estimate' : '/estimate'
  const ctaLabel = 'Instant Quote.'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href={isCommercial ? '/commercial' : '/'} className="flex items-center group md:-ml-8">
            <img
              src="/logo-nav.png"
              alt="R&D Trash Disposal logo"
              className="h-7 md:h-12 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {isCommercial ? (
              <>
                {/* Services dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className="text-sm font-medium text-[#010c1c] transition-colors hover:text-[#F5A623] flex items-center gap-1"
                    aria-expanded={dropdownOpen}
                  >
                    Services
                    <svg
                      className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50">
                      {commercialLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className="block px-5 py-3 text-sm font-medium text-[#010c1c] hover:bg-[#F5F7FA] transition-colors"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <a
                  href="/commercial#how-it-works"
                  className="text-sm font-medium text-[#010c1c] transition-colors hover:text-[#F5A623]"
                >
                  How It Works
                </a>
                <a
                  href="/commercial#reviews"
                  className="text-sm font-medium text-[#010c1c] transition-colors hover:text-[#F5A623]"
                >
                  Reviews
                </a>
                <a
                  href="/about"
                  className="text-sm font-medium text-[#010c1c] transition-colors hover:text-[#F5A623]"
                >
                  About
                </a>
              </>
            ) : (
              <>
                {['Services', 'How It Works', 'What We Take', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={navHref(`#${item.toLowerCase().replace(/ /g, '-')}`)}
                    className="text-sm font-medium text-[#010c1c] transition-colors hover:text-[#F5A623]"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="/about"
                  className="text-sm font-medium text-[#010c1c] transition-colors hover:text-[#F5A623]"
                >
                  About
                </a>
              </>
            )}
          </nav>

          {/* Phone + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm font-semibold text-[#010c1c]">
              786-408-3783
            </span>
            <a
              href={ctaHref}
              className="bg-[#F5A623] text-[#010c1c] font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-[#d48e10] transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              {ctaLabel}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block h-0.5 w-6 bg-[#010c1c] transition-all ${
                    menuOpen && i === 0
                      ? 'rotate-45 translate-y-2'
                      : menuOpen && i === 1
                      ? 'opacity-0'
                      : menuOpen && i === 2
                      ? '-rotate-45 -translate-y-2'
                      : ''
                  }`}
                />
              ))}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-4">
            {isCommercial ? (
              <>
                {/* Mobile Services toggle */}
                <div>
                  <button
                    className="w-full flex items-center justify-between text-[#010c1c] font-medium text-base py-1 border-b border-gray-100"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  >
                    Services
                    <svg
                      className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <div className="mt-1 flex flex-col gap-0">
                      {commercialLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className="pl-4 text-[#010c1c] font-medium text-sm py-2 border-b border-gray-50 hover:text-[#F5A623] transition-colors"
                          onClick={() => setMenuOpen(false)}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <a
                  href="/commercial#how-it-works"
                  className="text-[#010c1c] font-medium text-base py-1 border-b border-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  How It Works
                </a>
                <a
                  href="/commercial#reviews"
                  className="text-[#010c1c] font-medium text-base py-1 border-b border-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Reviews
                </a>
                <a
                  href="/about"
                  className="text-[#010c1c] font-medium text-base py-1 border-b border-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
              </>
            ) : (
              <>
                {['Services', 'How It Works', 'What We Take', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={navHref(`#${item.toLowerCase().replace(/ /g, '-')}`)}
                    className="text-[#010c1c] font-medium text-base py-1 border-b border-gray-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="/about"
                  className="text-[#010c1c] font-medium text-base py-1 border-b border-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
              </>
            )}
            <div className="flex flex-col gap-2 pt-2">
              <a
                href="tel:7864083783"
                onClick={trackCall}
                className="text-[#010c1c] font-semibold text-base"
              >
                786-408-3783
              </a>
              <a
                href={ctaHref}
                className="mt-1 bg-[#F5A623] text-[#010c1c] font-bold text-sm px-5 py-3 rounded-lg hover:bg-[#d48e10] transition-all hover:scale-105 active:scale-95 shadow-sm text-center"
                onClick={() => setMenuOpen(false)}
              >
                {ctaLabel}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
