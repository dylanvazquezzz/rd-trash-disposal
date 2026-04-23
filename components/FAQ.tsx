'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How much does junk removal cost in Miami?',
    answer:
      'Most jobs in Miami-Dade and Broward range from $100 to $600 depending on volume and item type. A single item like a couch or appliance typically starts around $100–$150. Full property cleanouts are quoted individually. All estimates are free and upfront — no surprise fees.',
  },
  {
    question: 'Do you offer same-day junk removal?',
    answer:
      'Yes. Same-day service is available 7 days a week across Miami-Dade, Broward, and Palm Beach County. Call us in the morning and we can often be there the same day. Availability varies by schedule — call 786-408-3783 to confirm.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve all of Miami-Dade and Broward County including Miami, Miami Beach, Hialeah, Doral, Kendall, Homestead, Fort Lauderdale, Hollywood, Pembroke Pines, Miramar, Coral Springs, Pompano Beach, Boca Raton, Aventura, and North Miami.',
  },
  {
    question: 'What items do you haul away?',
    answer:
      'We haul furniture, mattresses, appliances, electronics, yard waste, construction debris, and general household junk. We also handle full property and estate cleanouts. Call us if you are unsure — we take most things.',
  },
  {
    question: 'Do you do demolition?',
    answer:
      'Yes. We offer interior demolition services including kitchen demolition, bathroom demolition, wall removal, and flooring tear-out. We haul away all debris the same day. Call for a free demolition estimate.',
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      'Yes. R&D Trash Disposal is fully licensed and insured in the state of Florida. We carry general liability insurance on every job.',
  },
  {
    question: 'How do I get a free estimate?',
    answer:
      'You can request a free estimate online at rdtrash.org/estimate or call us directly at 786-408-3783. We respond same day.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="py-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">
            FAQ
          </p>
          <h2 className="font-display text-[#0B1E3D] text-5xl sm:text-6xl">
            COMMON QUESTIONS.
          </h2>
        </div>

        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between py-5 text-left gap-4"
                aria-expanded={open === idx}
              >
                <span className="font-semibold text-[#0B1E3D] text-base leading-snug">
                  {faq.question}
                </span>
                <span className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-[#F5A623] transition-transform duration-200 ${open === idx ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {open === idx && (
                <p className="pb-5 text-gray-500 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
