'use client'

import { useState } from 'react'

type LoadSize = 'small' | 'medium' | 'large' | 'full' | null
type ServiceType = 'junk' | 'demo' | null
type Step = 'service' | 'size' | 'items' | 'info' | 'result'

const PRICING: Record<string, { junk: string; demo: string }> = {
  small: { junk: '$99 – $149', demo: 'Call for quote' },
  medium: { junk: '$149 – $249', demo: '$400 – $600' },
  large: { junk: '$249 – $399', demo: '$600 – $1,200' },
  full: { junk: '$399 – $599', demo: '$1,200+' },
}

const LOAD_OPTIONS = [
  {
    id: 'small' as LoadSize,
    label: 'Small',
    sub: '1–2 items or bag-sized',
    visual: '▪',
    scale: 'text-xs',
  },
  {
    id: 'medium' as LoadSize,
    label: 'Medium',
    sub: '3–5 items or half a room',
    visual: '▪▪',
    scale: 'text-sm',
  },
  {
    id: 'large' as LoadSize,
    label: 'Large',
    sub: '6–10 items or full room',
    visual: '▪▪▪',
    scale: 'text-base',
  },
  {
    id: 'full' as LoadSize,
    label: 'Full Truck',
    sub: 'Full cleanout or estate',
    visual: '▪▪▪▪',
    scale: 'text-lg',
  },
]

const ITEM_EXTRAS = [
  { id: 'mattress', label: 'Mattress', surcharge: '+$25 each' },
  { id: 'fridge', label: 'Refrigerator / Freezer', surcharge: '+$25' },
  { id: 'ac', label: 'AC Unit', surcharge: '+$25' },
  { id: 'tv', label: 'TV / Electronics', surcharge: '+$25 each' },
  { id: 'concrete', label: 'Concrete / Heavy debris', surcharge: 'Call for quote' },
  { id: 'hottub', label: 'Hot tub / Spa', surcharge: 'Call for quote' },
]

export default function EstimateForm() {
  const [step, setStep] = useState<Step>('service')
  const [service, setService] = useState<ServiceType>(null)
  const [loadSize, setLoadSize] = useState<LoadSize>(null)
  const [extras, setExtras] = useState<string[]>([])
  const [form, setForm] = useState({ name: '', phone: '', zip: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)

  const toggleExtra = (id: string) => {
    setExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    )
  }

  const priceRange =
    loadSize && service ? PRICING[loadSize][service] : null

  const hasCallForQuote = extras.some(
    (e) => e === 'concrete' || e === 'hottub'
  )

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fireEvent = (name: string, params?: Record<string, string>) => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      ;(window as any).gtag('event', name, params)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    fireEvent('generate_lead', { method: 'estimate_form' })
    setSubmitted(true)
    setStep('result')
  }

  return (
    <section id="estimate" className="py-20 bg-[#0B1E3D]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-2">
            Instant Quote
          </p>
          <h2 className="font-display text-white text-5xl sm:text-6xl">
            GET YOUR FREE ESTIMATE
          </h2>
          <p className="mt-4 text-white/60 text-base">
            Takes 60 seconds. We&apos;ll call to confirm and can be there today.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Progress bar */}
          {step !== 'result' && (
            <div className="h-1 bg-gray-100">
              <div
                className="h-full bg-[#F5A623] transition-all duration-500"
                style={{
                  width:
                    step === 'service'
                      ? '20%'
                      : step === 'size'
                      ? '45%'
                      : step === 'items'
                      ? '65%'
                      : step === 'info'
                      ? '85%'
                      : '100%',
                }}
              />
            </div>
          )}

          <div className="p-8">
            {/* STEP 1: Service type */}
            {step === 'service' && (
              <div>
                <h3 className="font-display text-[#0B1E3D] text-2xl mb-6">
                  WHAT DO YOU NEED?
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      id: 'junk' as ServiceType,
                      label: 'Junk Removal',
                      desc: 'Hauling, lifting, disposal',
                      icon: (
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      ),
                    },
                    {
                      id: 'demo' as ServiceType,
                      label: 'Demolition',
                      desc: 'Kitchen, bathroom, room gut-outs',
                      icon: (
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      ),
                    },
                  ].map((opt) => (
                    <a
                      key={opt.id}
                      href={opt.id === 'demo' ? '/estimate?service=demolition' : '/estimate'}
                      className="group border-2 border-gray-200 rounded-xl p-6 text-left hover:border-[#F5A623] hover:shadow-md transition-all"
                    >
                      <div className="text-[#0B1E3D] group-hover:text-[#F5A623] transition-colors mb-3">
                        {opt.icon}
                      </div>
                      <p className="font-display text-[#0B1E3D] text-xl">{opt.label.toUpperCase()}</p>
                      <p className="text-gray-500 text-sm mt-1">{opt.desc}</p>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: Load size */}
            {step === 'size' && (
              <div>
                <button
                  onClick={() => setStep('service')}
                  className="text-sm text-gray-400 hover:text-gray-600 mb-6 flex items-center gap-1"
                >
                  ← Back
                </button>
                <h3 className="font-display text-[#0B1E3D] text-2xl mb-2">
                  HOW MUCH DO YOU HAVE?
                </h3>
                <p className="text-gray-500 text-sm mb-6">Rough estimate is fine — we&apos;ll confirm on-site.</p>
                <div className="grid grid-cols-2 gap-3">
                  {LOAD_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setLoadSize(opt.id)
                        setStep('items')
                      }}
                      className="group border-2 border-gray-200 rounded-xl p-4 text-left hover:border-[#0B1E3D] hover:shadow-md transition-all"
                    >
                      <p className={`text-[#F5A623] font-bold mb-2 ${opt.scale}`}>{opt.visual}</p>
                      <p className="font-semibold text-[#0B1E3D] text-base">{opt.label}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{opt.sub}</p>
                      {PRICING[opt.id!][service ?? 'junk'] && (
                        <p className="text-[#0B1E3D] font-bold text-sm mt-2">
                          {PRICING[opt.id!][service ?? 'junk']}
                        </p>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: Special items */}
            {step === 'items' && (
              <div>
                <button
                  onClick={() => setStep('size')}
                  className="text-sm text-gray-400 hover:text-gray-600 mb-6 flex items-center gap-1"
                >
                  ← Back
                </button>
                <h3 className="font-display text-[#0B1E3D] text-2xl mb-2">
                  ANY SPECIAL ITEMS?
                </h3>
                <p className="text-gray-500 text-sm mb-6">Some items have extra disposal fees. Select all that apply.</p>
                <div className="space-y-2 mb-8">
                  {ITEM_EXTRAS.map((item) => (
                    <label
                      key={item.id}
                      className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        extras.includes(item.id)
                          ? 'border-[#0B1E3D] bg-[#0B1E3D]/5'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                            extras.includes(item.id)
                              ? 'bg-[#0B1E3D] border-[#0B1E3D]'
                              : 'border-gray-300'
                          }`}
                        >
                          {extras.includes(item.id) && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm font-medium text-[#0B1E3D]">{item.label}</span>
                      </div>
                      <span className="text-xs text-gray-500 font-semibold">{item.surcharge}</span>
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={extras.includes(item.id)}
                        onChange={() => toggleExtra(item.id)}
                      />
                    </label>
                  ))}
                </div>
                <button
                  onClick={() => setStep('info')}
                  className="w-full bg-[#0B1E3D] text-white font-semibold py-3 rounded-xl hover:bg-[#1a3560] transition-all"
                >
                  Continue
                </button>
              </div>
            )}

            {/* STEP 4: Contact info */}
            {step === 'info' && (
              <form onSubmit={handleSubmit}>
                <button
                  type="button"
                  onClick={() => setStep('items')}
                  className="text-sm text-gray-400 hover:text-gray-600 mb-6 flex items-center gap-1"
                >
                  ← Back
                </button>
                <h3 className="font-display text-[#0B1E3D] text-2xl mb-6">
                  WHERE DO WE REACH YOU?
                </h3>

                {/* Price preview */}
                {loadSize && (
                  <div className="bg-[#F5F7FA] rounded-xl p-4 mb-6 border border-gray-200">
                    <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Estimated Price</p>
                    <p className="font-display text-[#0B1E3D] text-3xl">
                      {hasCallForQuote ? 'Call for Quote' : priceRange}
                    </p>
                    {!hasCallForQuote && (
                      <p className="text-xs text-gray-400 mt-1">Final price confirmed on-site. No hidden fees.</p>
                    )}
                  </div>
                )}

                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0B1E3D] focus:ring-1 focus:ring-[#0B1E3D]"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0B1E3D] focus:ring-1 focus:ring-[#0B1E3D]"
                        placeholder="305-000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">City or ZIP Code *</label>
                    <input
                      type="text"
                      required
                      value={form.zip}
                      onChange={(e) => setForm({ ...form, zip: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0B1E3D] focus:ring-1 focus:ring-[#0B1E3D]"
                      placeholder="Miami or 33101"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional notes (optional)</label>
                    <textarea
                      rows={3}
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#0B1E3D] focus:ring-1 focus:ring-[#0B1E3D] resize-none"
                      placeholder="Describe what needs to be removed, access notes, etc."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#F5A623] text-[#0B1E3D] font-bold py-4 rounded-xl hover:bg-[#d48e10] transition-all hover:scale-[1.02] active:scale-[0.98] text-base shadow-lg"
                  >
                    Get My Instant Estimate
                  </button>
                  <p className="text-center text-xs text-gray-400">
                    We&apos;ll call you within minutes to confirm. No spam, ever.
                  </p>
                </div>
              </form>
            )}

            {/* RESULT */}
            {step === 'result' && (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-[#0B1E3D] text-3xl mb-2">
                  REQUEST RECEIVED!
                </h3>
                <p className="text-gray-500 mb-2">
                  Thanks, {form.name}. We&apos;ll call{' '}
                  <span className="font-semibold text-[#0B1E3D]">{form.phone}</span> shortly to confirm your pickup.
                </p>
                {loadSize && !hasCallForQuote && (
                  <div className="mt-4 bg-[#F5F7FA] rounded-xl p-4 border border-gray-100 inline-block">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Estimated Range</p>
                    <p className="font-display text-[#0B1E3D] text-4xl mt-1">{priceRange}</p>
                  </div>
                )}
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="tel:3054500649"
                    onClick={() => fireEvent('phone_call', { phone: '305-450-0649' })}
                    className="inline-flex items-center justify-center gap-2 bg-[#0B1E3D] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#1a3560] transition-all"
                  >
                    Call Us Now — 305-450-0649
                  </a>
                  <a
                    href="tel:9547088090"
                    onClick={() => fireEvent('phone_call', { phone: '954-708-8090' })}
                    className="inline-flex items-center justify-center border-2 border-[#0B1E3D] text-[#0B1E3D] font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-all"
                  >
                    954-708-8090
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
