'use client'

import { useState, useRef, useCallback, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { supabase } from '@/lib/supabase'

type ContactPref = 'text' | 'email'
type PropertyType = 'office' | 'retail' | 'warehouse' | 'property-management' | 'restaurant-hospitality' | 'construction-site' | 'other'
type VolumeEstimate = 'small' | 'medium' | 'large'

interface CommercialFormState {
  companyName: string
  contactName: string
  city: string
  contactPreference: ContactPref
  contactValue: string
  propertyType: PropertyType | ''
  estimatedVolume: VolumeEstimate | ''
  invoiceNeeded: boolean
  description: string
  preferredDate: string
  preferredTime: string
}

const MAX_PHOTOS = 5
const MAX_FILE_SIZE_MB = 40

const propertyTypes: { value: PropertyType; label: string }[] = [
  { value: 'office', label: 'Office' },
  { value: 'retail', label: 'Retail / Storefront' },
  { value: 'warehouse', label: 'Warehouse / Industrial' },
  { value: 'property-management', label: 'Property Management / HOA' },
  { value: 'restaurant-hospitality', label: 'Restaurant / Hospitality' },
  { value: 'construction-site', label: 'Construction Site' },
  { value: 'other', label: 'Other' },
]

const volumeOptions: { value: VolumeEstimate; label: string; sub: string }[] = [
  { value: 'small', label: 'Small', sub: '1 truck load' },
  { value: 'medium', label: 'Medium', sub: '2 truck loads' },
  { value: 'large', label: 'Large', sub: '3+ loads / bulk' },
]

function sanitizeFileName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9.]/g, '-')
    .replace(/-+/g, '-')
}

function CommercialEstimateForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const cityParam = searchParams.get('city') ?? ''

  const [form, setForm] = useState<CommercialFormState>({
    companyName: '',
    contactName: '',
    city: cityParam,
    contactPreference: 'text',
    contactValue: '',
    propertyType: '',
    estimatedVolume: '',
    invoiceNeeded: true,
    description: '',
    preferredDate: '',
    preferredTime: '',
  })

  const [photos, setPhotos] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const [dragging, setDragging] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const addFiles = useCallback((files: FileList | File[]) => {
    const arr = Array.from(files)
    const valid = arr.filter((f) => {
      if (!f.type.startsWith('image/')) return false
      if (f.size > MAX_FILE_SIZE_MB * 1024 * 1024) return false
      return true
    })
    setPhotos((prev) => {
      const combined = [...prev, ...valid].slice(0, MAX_PHOTOS)
      setPreviews(combined.map((f) => URL.createObjectURL(f)))
      return combined
    })
  }, [])

  const removePhoto = (index: number) => {
    setPhotos((prev) => {
      const next = prev.filter((_, i) => i !== index)
      setPreviews(next.map((f) => URL.createObjectURL(f)))
      return next
    })
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragging(false)
    addFiles(e.dataTransfer.files)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)

    try {
      const photoUrls: string[] = []

      for (const file of photos) {
        const safeName = sanitizeFileName(file.name)
        const fileName = `commercial-${Date.now()}-${Math.random().toString(36).slice(2)}-${safeName}`

        const { error: uploadError } = await supabase.storage
          .from('quote-images')
          .upload(fileName, file, { contentType: file.type })

        if (uploadError) throw new Error('Photo upload failed. Please try again.')

        const { data: urlData } = supabase.storage
          .from('quote-images')
          .getPublicUrl(fileName)

        photoUrls.push(urlData.publicUrl)
      }

      const res = await fetch('/api/submit-commercial-estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: form.companyName,
          contactName: form.contactName,
          city: form.city,
          contactPreference: form.contactPreference,
          contactValue: form.contactValue,
          propertyType: form.propertyType,
          estimatedVolume: form.estimatedVolume,
          invoiceNeeded: form.invoiceNeeded,
          description: form.description,
          preferredDate: form.preferredDate || null,
          preferredTime: form.preferredTime || null,
          photoUrls,
        }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Submission failed')

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const gtag = (window as any).gtag
      if (typeof gtag === 'function') {
        gtag('event', 'generate_lead', { service_type: 'commercial-junk-removal' })
      }

      router.push('/estimate/thank-you')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#F8F6F1] pt-24 pb-20 px-4">
        <div className="max-w-2xl mx-auto">

          <div className="mb-10">
            <p className="text-[#F5A623] font-semibold text-sm uppercase tracking-widest mb-2">Commercial Quote</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#010c1c] mb-4">
              Get a Commercial Estimate
            </h1>
            <p className="text-gray-600 text-lg">
              Built for GCs, property managers, and businesses. Send us your job details and we&apos;ll call back within the hour with real pricing — no automated guessing.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {['Invoicing Available', 'COI on Request', 'Licensed & Insured'].map((badge) => (
                <span key={badge} className="bg-[#010c1c] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Company name */}
            <div>
              <label className="block text-sm font-semibold text-[#010c1c] mb-2">
                Company Name <span className="text-[#F5A623]">*</span>
              </label>
              <input
                type="text"
                required
                value={form.companyName}
                onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                placeholder="Your business or company name"
                className="w-full border border-gray-300 rounded px-4 py-3 text-[#010c1c] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent bg-white"
              />
            </div>

            {/* Contact name */}
            <div>
              <label className="block text-sm font-semibold text-[#010c1c] mb-2">
                Your Name <span className="text-[#F5A623]">*</span>
              </label>
              <input
                type="text"
                required
                value={form.contactName}
                onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                placeholder="First and last name"
                className="w-full border border-gray-300 rounded px-4 py-3 text-[#010c1c] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent bg-white"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-semibold text-[#010c1c] mb-2">
                Job City or ZIP Code <span className="text-[#F5A623]">*</span>
              </label>
              <input
                type="text"
                required
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                placeholder="e.g. Doral or 33122"
                className="w-full border border-gray-300 rounded px-4 py-3 text-[#010c1c] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent bg-white"
              />
            </div>

            {/* Property type */}
            <div>
              <label className="block text-sm font-semibold text-[#010c1c] mb-3">
                Property Type <span className="text-[#F5A623]">*</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {propertyTypes.map(({ value, label }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setForm({ ...form, propertyType: value })}
                    className={`py-3 px-4 rounded text-sm font-semibold border-2 text-left transition-all ${
                      form.propertyType === value
                        ? 'bg-[#010c1c] border-[#010c1c] text-white'
                        : 'bg-white border-gray-300 text-gray-600 hover:border-[#010c1c]'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              {!form.propertyType && (
                <input type="hidden" required value={form.propertyType} />
              )}
            </div>

            {/* Estimated volume */}
            <div>
              <label className="block text-sm font-semibold text-[#010c1c] mb-3">
                Estimated Volume <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                {volumeOptions.map(({ value, label, sub }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setForm({ ...form, estimatedVolume: value })}
                    className={`py-3 px-3 rounded text-sm font-semibold border-2 text-center transition-all ${
                      form.estimatedVolume === value
                        ? 'bg-[#010c1c] border-[#010c1c] text-white'
                        : 'bg-white border-gray-300 text-gray-600 hover:border-[#010c1c]'
                    }`}
                  >
                    <span className="block">{label}</span>
                    <span className={`text-xs font-normal ${form.estimatedVolume === value ? 'text-white/70' : 'text-gray-400'}`}>{sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Invoice needed */}
            <div>
              <label className="block text-sm font-semibold text-[#010c1c] mb-3">
                Do you need an invoice?
              </label>
              <div className="flex gap-3">
                {[
                  { value: true, label: 'Yes, invoice required' },
                  { value: false, label: 'No invoice needed' },
                ].map(({ value, label }) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setForm({ ...form, invoiceNeeded: value })}
                    className={`flex-1 py-3 rounded font-semibold text-sm border-2 transition-all ${
                      form.invoiceNeeded === value
                        ? 'bg-[#010c1c] border-[#010c1c] text-white'
                        : 'bg-white border-gray-300 text-gray-600 hover:border-[#010c1c]'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact preference */}
            <div>
              <label className="block text-sm font-semibold text-[#010c1c] mb-3">
                How should we send your quote? <span className="text-[#F5A623]">*</span>
              </label>
              <div className="flex gap-3 mb-4">
                {(['text', 'email'] as ContactPref[]).map((pref) => (
                  <button
                    key={pref}
                    type="button"
                    onClick={() => setForm({ ...form, contactPreference: pref, contactValue: '' })}
                    className={`flex-1 py-3 rounded font-semibold text-sm border-2 transition-all ${
                      form.contactPreference === pref
                        ? 'bg-[#010c1c] border-[#010c1c] text-white'
                        : 'bg-white border-gray-300 text-gray-600 hover:border-[#010c1c]'
                    }`}
                  >
                    {pref === 'text' ? 'Text Message' : 'Email'}
                  </button>
                ))}
              </div>
              {form.contactPreference === 'text' ? (
                <input
                  type="tel"
                  required
                  value={form.contactValue}
                  onChange={(e) => setForm({ ...form, contactValue: e.target.value })}
                  placeholder="(305) 000-0000"
                  className="w-full border border-gray-300 rounded px-4 py-3 text-[#010c1c] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent bg-white"
                />
              ) : (
                <input
                  type="email"
                  required
                  value={form.contactValue}
                  onChange={(e) => setForm({ ...form, contactValue: e.target.value })}
                  placeholder="you@company.com"
                  className="w-full border border-gray-300 rounded px-4 py-3 text-[#010c1c] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent bg-white"
                />
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-[#010c1c] mb-2">
                Job Description <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Type of materials, access notes, job site details, recurring needs, etc."
                rows={3}
                className="w-full border border-gray-300 rounded px-4 py-3 text-[#010c1c] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent bg-white resize-none"
              />
            </div>

            {/* Date & time */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#010c1c] mb-2">
                  Preferred Date <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  type="date"
                  value={form.preferredDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                  className="w-full border border-gray-300 rounded px-4 py-3 text-[#010c1c] focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#010c1c] mb-2">
                  Preferred Time <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <select
                  value={form.preferredTime}
                  onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                  className="w-full border border-gray-300 rounded px-4 py-3 text-[#010c1c] focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent bg-white"
                >
                  <option value="">Any time</option>
                  <option value="early-morning">Early morning (6am – 9am)</option>
                  <option value="morning">Morning (9am – 12pm)</option>
                  <option value="afternoon">Afternoon (12pm – 5pm)</option>
                </select>
              </div>
            </div>

            {/* Photos */}
            <div>
              <label className="block text-sm font-semibold text-[#010c1c] mb-2">
                Job Site Photos <span className="text-gray-400 font-normal">(optional, up to {MAX_PHOTOS})</span>
              </label>
              <div
                onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
                  dragging ? 'border-[#F5A623] bg-amber-50' : 'border-gray-300 hover:border-[#010c1c] bg-white'
                } ${photos.length >= MAX_PHOTOS ? 'opacity-50 pointer-events-none' : ''}`}
              >
                <svg className="w-10 h-10 text-gray-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-600 font-medium">
                  {photos.length >= MAX_PHOTOS ? 'Maximum photos reached' : 'Tap to add job site photos or drag and drop'}
                </p>
                <p className="text-gray-400 text-sm mt-1">JPG, PNG, HEIC supported</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={(e) => e.target.files && addFiles(e.target.files)}
                />
              </div>
              {previews.length > 0 && (
                <div className="mt-4 grid grid-cols-3 sm:grid-cols-5 gap-3">
                  {previews.map((src, i) => (
                    <div key={i} className="relative aspect-square rounded overflow-hidden shadow-sm group">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt={`Photo ${i + 1}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removePhoto(i)}
                        className="absolute top-1 right-1 w-6 h-6 bg-black/60 rounded-full text-white text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        x
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded px-4 py-3 text-red-700 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting || !form.propertyType}
              className="w-full bg-[#F5A623] text-[#010c1c] font-bold text-lg py-4 rounded hover:bg-[#d48e10] transition-all hover:scale-[1.01] active:scale-[0.99] shadow-md disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {submitting ? 'Uploading...' : 'Send Commercial Quote Request'}
            </button>

            <p className="text-center text-gray-400 text-sm">
              We respond within the hour during business hours. Invoicing and COI available on every job.
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function CommercialEstimatePage() {
  return (
    <Suspense fallback={null}>
      <CommercialEstimateForm />
    </Suspense>
  )
}
