'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { fireEvent } from '@/lib/analytics'

const trackCall = () => {
  fireEvent('phone_call_click', { source: 'nav', page_path: window.location.pathname })
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const navHref = (anchor: string) => isHome ? anchor : `/${anchor}`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <img
              src="/favicon.svg"
              alt="R&D Trash Disposal logo"
              className="w-10 h-10"
            />
            <span className="font-display text-2xl tracking-wide text-[#0B1E3D]">
              TRASH DISPOSAL
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Services', 'How It Works', 'What We Take', 'Contact'].map(
              (item) => (
                <a
                  key={item}
                  href={navHref(`#${item.toLowerCase().replace(/ /g, '-')}`)}
                  className="text-sm font-medium text-[#0B1E3D] transition-colors hover:text-[#F5A623]"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* Phone + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:7864083783"
              onClick={trackCall}
              className="text-sm font-semibold text-[#0B1E3D] transition-colors hover:text-[#F5A623]"
            >
              786-408-3783
            </a>
            <a
              href="/estimate"
              className="bg-[#F5A623] text-[#0B1E3D] font-semibold text-sm px-5 py-2.5 rounded hover:bg-[#d48e10] transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              Instant Estimate
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
                  className={`block h-0.5 w-6 bg-[#0B1E3D] transition-all ${
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
                  href={navHref(`#${item.toLowerCase().replace(/ /g, '-')}`)}
                  className="text-[#0B1E3D] font-medium text-base py-1 border-b border-gray-100"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              )
            )}
            <div className="flex flex-col gap-2 pt-2">
              <a
                href="tel:7864083783"
                onClick={trackCall}
                className="text-[#0B1E3D] font-semibold text-base"
              >
                786-408-3783
              </a>
              <a
                href="/estimate"
                className="mt-1 bg-[#F5A623] text-[#0B1E3D] font-semibold text-sm px-5 py-3 rounded text-center"
                onClick={() => setMenuOpen(false)}
              >
                Get Instant Estimate
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
