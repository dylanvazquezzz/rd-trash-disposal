'use client'

import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div
              className={`w-9 h-9 rounded flex items-center justify-center font-display text-lg font-bold transition-colors ${
                scrolled ? 'bg-[#0B1E3D] text-white' : 'bg-white text-[#0B1E3D]'
              }`}
            >
              R&D
            </div>
            <span
              className={`font-display text-2xl tracking-wide transition-colors ${
                scrolled ? 'text-[#0B1E3D]' : 'text-white'
              }`}
            >
              TRASH DISPOSAL
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Services', 'How It Works', 'What We Take', 'Contact'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  className={`text-sm font-medium transition-colors hover:text-[#F5A623] ${
                    scrolled ? 'text-[#0B1E3D]' : 'text-white/90'
                  }`}
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* Phone + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:3054500649"
              className={`text-sm font-semibold transition-colors hover:text-[#F5A623] ${
                scrolled ? 'text-[#0B1E3D]' : 'text-white'
              }`}
            >
              305-450-0649
            </a>
            <a
              href="/estimate"
              className="bg-[#F5A623] text-[#0B1E3D] font-semibold text-sm px-5 py-2.5 rounded hover:bg-[#d48e10] transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              Free Estimate
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
                  className={`block h-0.5 w-6 transition-all ${
                    scrolled ? 'bg-[#0B1E3D]' : 'bg-white'
                  } ${
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
            {['Services', 'How It Works', 'What We Take', 'Contact'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  className="text-[#0B1E3D] font-medium text-base py-1 border-b border-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              )
            )}
            <div className="flex flex-col gap-2 pt-2">
              <a
                href="tel:3054500649"
                className="text-[#0B1E3D] font-semibold text-base"
              >
                305-450-0649
              </a>
              <a
                href="tel:9547088090"
                className="text-[#0B1E3D] font-semibold text-base"
              >
                954-708-8090
              </a>
              <a
                href="/estimate"
                className="mt-1 bg-[#F5A623] text-[#0B1E3D] font-semibold text-sm px-5 py-3 rounded text-center"
                onClick={() => setMenuOpen(false)}
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
