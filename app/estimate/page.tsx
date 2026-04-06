'use client'

import { useState, useRef, useCallback } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { supabase } from '@/lib/supabase'

type ContactPref = 'text' | 'email'
type ServiceType = 'junk-removal' | 'demolition'

interface FormState {
  name: string
  city: string
  contactPreference: ContactPref
  contactValue: string
  serviceType: ServiceType
  description: string
}

const MAX_PHOTOS = 5
const MAX_FILE_SIZE_MB = 40

function sanitizeFileName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9.]/g, '-')
    .replace(/-+/g, '-')
}

export default function EstimatePage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    city: '',
    contactPreference: 'text',
    contactValue: '',
    serviceType: 'junk-removal',
    description: '',
  })
  const [photos, setPhotos] = useState<File[]>([])
  const [previews, setPreviews] = useState<string[]>([])
  const [dragging, setDragging] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
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
      const newPreviews = combined.map((f) => URL.createObjectURL(f))
      setPreviews(newPreviews)
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

    if (photos.length === 0) {
      setError('Please add at least one photo of the items.')
      return
    }

    setSubmitting(true)

    try {
      // Upload photos directly from browser to Supabase Storage
      const photoUrls: string[] = []

      for (const file of photos) {
        const safeName = sanitizeFileName(file.name)
        const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}-${safeName}`

        const { error: uploadError } = await supabase.storage
          .from('quote-images')
          .upload(fileName, file, { contentType: file.type })

        if (uploadError) {
          console.error('Upload error:', uploadError)
          throw new Error('Photo upload failed. Please try again.')
        }

        const { data: urlData } = supabase.storage
          .from('quote-images')
          .getPublicUrl(fileName)

        photoUrls.push(urlData.publicUrl)
      }

      // Send form data + URLs to API (no files — just text + URLs)
      const res = await fetch('/api/submit-estimate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          city: form.city,
          contactPreference: form.contactPreference,
          contactValue: form.contactValue,
          serviceType: form.serviceType,
          description: form.description,
          photoUrls,
        }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Submission failed')

      setSubmitted(true)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <>
        <Nav />
        <main className="min-h-screen bg-[#F8F6F1] flex items-center justify-center px-4 pt-20">
          <div className="max-w-md w-full text-center">
            <div className="w-20 h-20 bg-[#0B1E3D] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#F5A623]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-display text-3xl font-bold text-[#0B1E3D] mb-3">
              Request Received
            </h1>
            <p className="text-gray-600 text-lg mb-2">
              We got your photos and will review them shortly.
            </p>
            <p className="text-gray-500 mb-8">
              Expect a quote via {form.contactPreference === 'text' ? 'text message' : 'email'} within 24 hours.
            </p>
            <a
              href="/"
              className="inline-block bg-[#F5A623] text-[#0B1E3D] font-semibold px-8 py-3 rounded hover:bg-[#d48e10] transition-all hover:scale-105"
            >
              Back to Home
            </a>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#F8F6F1] pt-24 pb-20 px-4">
        <div className="max-w-2xl mx-auto">

          {/* Header */}
          <div className="mb-10">
            <p className="text-[#F5A623] font-semibold text-sm uppercase tracking-widest mb-2">Free Quote</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-[#0B1E3D] mb-4">
              Get Your Estimate
            </h1>
            <p className="text-gray-600 text-lg">
              Send us photos of what you need removed. Our team reviews every request and gets back to you with a real quote — no automated guessing.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-[#0B1E3D] mb-2">
                Your Name <span className="text-[#F5A623]">*</span>
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="First and last name"
                className="w-full border border-gray-300 rounded px-4 py-3 text-[#0B1E3D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent bg-white"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-semibold text-[#0B1E3D] mb-2">
                City <span className="text-[#F5A623]">*</span>
              </label>
              <input
                type="text"
                required
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                placeholder="e.g. Miami, Fort Lauderdale"
                className="w-full border border-gray-300 rounded px-4 py-3 text-[#0B1E3D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent bg-white"
              />
            </div>

            {/* Contact preference */}
            <div>
              <label className="block text-sm font-semibold text-[#0B1E3D] mb-3">
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
                        ? 'bg-[#0B1E3D] border-[#0B1E3D] text-white'
                        : 'bg-white border-gray-300 text-gray-600 hover:border-[#0B1E3D]'
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
                  className="w-full border border-gray-300 rounded px-4 py-3 text-[#0B1E3D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent bg-white"
                />
              ) : (
                <input
                  type="email"
                  required
                  value={form.contactValue}
                  onChange={(e) => setForm({ ...form, contactValue: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full border border-gray-300 rounded px-4 py-3 text-[#0B1E3D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent bg-white"
                />
              )}
            </div>

            {/* Service type */}
            <div>
              <label className="block text-sm font-semibold text-[#0B1E3D] mb-3">
                What service do you need? <span className="text-[#F5A623]">*</span>
              </label>
              <div className="flex gap-3">
                {([
                  { value: 'junk-removal', label: 'Junk Removal' },
                  { value: 'demolition', label: 'Demolition' },
                ] as { value: ServiceType; label: string }[]).map(({ value, label }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setForm({ ...form, serviceType: value })}
                    className={`flex-1 py-3 rounded font-semibold text-sm border-2 transition-all ${
                      form.serviceType === value
                        ? 'bg-[#0B1E3D] border-[#0B1E3D] text-white'
                        : 'bg-white border-gray-300 text-gray-600 hover:border-[#0B1E3D]'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-[#0B1E3D] mb-2">
                Description <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Anything helpful — location, access, amount of items, etc."
                rows={3}
                className="w-full border border-gray-300 rounded px-4 py-3 text-[#0B1E3D] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5A623] focus:border-transparent bg-white resize-none"
              />
            </div>

            {/* Photo upload */}
            <div>
              <label className="block text-sm font-semibold text-[#0B1E3D] mb-2">
                Photos <span className="text-[#F5A623]">*</span>
                <span className="text-gray-400 font-normal ml-1">(up to {MAX_PHOTOS}, 40MB each)</span>
              </label>

              <div
                onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
                onDragLeave={() => setDragging(false)}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
                  dragging
                    ? 'border-[#F5A623] bg-amber-50'
                    : 'border-gray-300 hover:border-[#0B1E3D] bg-white'
                } ${photos.length >= MAX_PHOTOS ? 'opacity-50 pointer-events-none' : ''}`}
              >
                <svg className="w-10 h-10 text-gray-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-600 font-medium">
                  {photos.length >= MAX_PHOTOS
                    ? 'Maximum photos reached'
                    : 'Tap to add photos or drag and drop'}
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
              disabled={submitting}
              className="w-full bg-[#F5A623] text-[#0B1E3D] font-bold text-lg py-4 rounded hover:bg-[#d48e10] transition-all hover:scale-[1.01] active:scale-[0.99] shadow-md disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {submitting ? 'Uploading...' : 'Send for Quote'}
            </button>

            <p className="text-center text-gray-400 text-sm">
              We typically respond within a few hours. No commitment required.
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
