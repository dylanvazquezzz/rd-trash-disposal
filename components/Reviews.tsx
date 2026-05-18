'use client'

import { useRef, useEffect, useCallback } from 'react'

const GBP_LINK =
  'https://www.google.com/search?sca_esv=c238079dbba20b5b&sxsrf=ANbL-n4OlmpkZlEBUVTXJmTNgOMpL6oPCw:1779123185559&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOe5CoFd54Ft90jUx9lPbGZLwL6DvOAewNVqRHw6I3yNZmvnGyFhOP-yt75TAAnDaS-sfOC_8t9miRqs5dCwuN5et-kr1fZE5XeVZHmIxqZnSLx12_Q%3D%3D&q=R%26D+Trash+Disposal+Reviews&sa=X&ved=2ahUKEwitnvKrpsOUAxWo5MkDHUCTLP4Q0bkNegQIKxAF&biw=1920&bih=992&dpr=1'

const reviews = [
  {
    name: 'Ryan Gallor',
    text: 'Had them take care of old and damaged furniture and they did an amazing job. Great customer service and professionalism. Highly reccomend if you need any trash removal they are efficient and effective.',
  },
  {
    name: 'Alice Fields',
    text: 'I had an amazing experience with these two guys and their junk removal service! They showed up in a big truck, were extremely professional, hardworking, and friendly from start to finish. They worked quickly, handled everything with care, and made the whole process completely stress-free. It\'s hard to find people this reliable and efficient these days. I highly recommend them to anyone needing junk removed — absolutely top-notch service!',
  },
  {
    name: 'Michelle',
    text: 'I cannot say enough good things about R & D Trash Disposal! Today my neighbor and friend Alice and I started tackling a massive garage clean-out. Very quickly we realized it was way more than we could handle ourselves, so we called R & D — and I am SO glad we did. They answered the phone immediately, showed up quickly, and got everything taken care of efficiently and professionally. The team was incredibly friendly, respectful, hardworking, and made what felt like an overwhelming job completely stress-free. Highly recommend!',
  },
  {
    name: 'Amelia Navarro',
    text: 'I was in the middle of moving and my backyard was a complete disaster. I hired this company to help me out and i was honestly so surprised of how good and quick they did it. They\'re so affordable too i would definitely recommend.',
  },
  {
    name: 'Rusty Vazquez',
    text: 'These two young men did an absolutely outstanding job with the trash pickup! From start to finish, they were hardworking, respectful, and incredibly dependable. They showed up on time, came ready to work, and handled everything quickly and efficiently without cutting corners. Their positive attitudes and strong work ethic were honestly impressive. It\'s refreshing to see kids who are this motivated, professional, and willing to put in real effort. I couldn\'t be happier with the results. Highly recommend!',
  },
]

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-[#FBBC04]" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function GoogleIcon({ size = 5 }: { size?: number }) {
  const px = size * 4
  return (
    <svg width={px} height={px} viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = useCallback((dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-card]')
    if (!card) return
    const gap = 24
    const amount = card.offsetWidth + gap
    el.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const interval = setInterval(() => {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 16) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        scroll('right')
      }
    }, 4500)
    return () => clearInterval(interval)
  }, [scroll])

  return (
    <section className="py-20 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">
            Google Reviews
          </p>
          <h2 className="font-display text-[#010c1c] text-5xl sm:text-6xl mb-4">
            WHAT PEOPLE SAY.
          </h2>
          <div className="flex items-center justify-center gap-2">
            <GoogleIcon size={5} />
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
            </div>
            <span className="text-gray-500 text-sm font-medium">5.0 · Google</span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll('left')}
            aria-label="Previous review"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full w-9 h-9 shadow-md hover:shadow-lg transition-shadow items-center justify-center hidden sm:flex"
          >
            <svg className="w-4 h-4 text-[#010c1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Track */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-2 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review) => (
              <a
                key={review.name}
                data-card=""
                href={GBP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow snap-start flex flex-col group"
              >
                {/* Card top row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#010c1c] flex items-center justify-center text-white font-bold text-sm flex-shrink-0 select-none">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-[#010c1c] text-sm leading-tight">{review.name}</p>
                      <div className="flex mt-1">
                        {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
                      </div>
                    </div>
                  </div>
                  <GoogleIcon size={5} />
                </div>

                {/* Review body */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-5 flex-1">
                  {review.text}
                </p>

                {/* Footer */}
                <p className="mt-4 text-xs text-gray-400 group-hover:text-[#F5A623] transition-colors">
                  Posted on Google
                </p>
              </a>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll('right')}
            aria-label="Next review"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full w-9 h-9 shadow-md hover:shadow-lg transition-shadow items-center justify-center hidden sm:flex"
          >
            <svg className="w-4 h-4 text-[#010c1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* See all link */}
        <div className="text-center mt-10">
          <a
            href={GBP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#010c1c] font-semibold hover:text-[#F5A623] transition-colors text-sm"
          >
            <GoogleIcon size={4} />
            See all our reviews on Google
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
