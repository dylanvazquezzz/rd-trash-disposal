'use client'

import { useState } from 'react'
import { CreateJobPayload, JobType } from '../types'

const TIME_OPTIONS: string[] = []
for (let h = 7; h <= 20; h++) {
  TIME_OPTIONS.push(`${String(h).padStart(2, '0')}:00`)
  if (h < 20) TIME_OPTIONS.push(`${String(h).padStart(2, '0')}:30`)
}

function formatTimeLabel(t: string): string {
  const [hStr, mStr] = t.split(':')
  const h = parseInt(hStr, 10)
  const suffix = h >= 12 ? 'PM' : 'AM'
  const display = h > 12 ? h - 12 : h === 0 ? 12 : h
  return `${display}:${mStr} ${suffix}`
}

type Props = {
  onClose: () => void
  onCreated: () => void
  defaultDate?: string
}

export default function AddJobModal({ onClose, onCreated, defaultDate }: Props) {
  const today = new Date().toISOString().split('T')[0]

  const [jobType, setJobType] = useState<JobType>('junk_removal')
  const [date, setDate] = useState(defaultDate ?? today)
  const [time, setTime] = useState('09:00')
  const [contactName, setContactName] = useState('')
  const [contactPhone, setContactPhone] = useState('')
  const [address, setAddress] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const payload: CreateJobPayload = {
      job_date: date,
      job_time: time,
      job_type: jobType,
      address,
      zip_code: zipCode,
      contact_name: contactName,
      contact_phone: contactPhone.trim() || null,
      description: description.trim() || null,
      status: 'scheduled',
    }

    try {
      const res = await fetch('/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error((data as { error?: string }).error ?? 'Failed to create job')
      }

      onCreated()
      onClose()
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setLoading(false)
    }
  }

  const inputClass =
    'w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 px-3 text-sm font-body text-gray-900 outline-none transition-all duration-150 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-base font-semibold text-gray-900 font-body">Book a Job</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors text-xl leading-none"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
          {/* Job type */}
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5 font-body">
              Job Type
            </label>
            <div className="flex rounded-lg border border-gray-200 overflow-hidden">
              <button
                type="button"
                onClick={() => setJobType('junk_removal')}
                className={[
                  'flex-1 py-2.5 text-sm font-medium font-body transition-all duration-150',
                  jobType === 'junk_removal'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50',
                ].join(' ')}
              >
                Junk Removal
              </button>
              <button
                type="button"
                onClick={() => setJobType('demolition')}
                className={[
                  'flex-1 py-2.5 text-sm font-medium font-body transition-all duration-150',
                  jobType === 'demolition'
                    ? 'bg-yellow-400 text-gray-900'
                    : 'bg-white text-gray-600 hover:bg-gray-50',
                ].join(' ')}
              >
                Demolition
              </button>
            </div>
          </div>

          {/* Date + Time */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5 font-body">
                Date
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5 font-body">
                Time
              </label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className={inputClass}
              >
                {TIME_OPTIONS.map((t) => (
                  <option key={t} value={t}>
                    {formatTimeLabel(t)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Contact */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5 font-body">
                Contact Name
              </label>
              <input
                type="text"
                required
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Full name"
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5 font-body">
                Phone
              </label>
              <input
                type="tel"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                placeholder="(305) 000-0000"
                className={inputClass}
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5 font-body">
              Address
            </label>
            <input
              type="text"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="123 Main St, Miami"
              className={inputClass}
            />
          </div>

          {/* ZIP */}
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5 font-body">
              ZIP Code
            </label>
            <input
              type="text"
              required
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value.slice(0, 6))}
              placeholder="33101"
              inputMode="numeric"
              className={inputClass}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5 font-body">
              Description <span className="text-gray-300">(optional)</span>
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What needs to go?"
              className={`${inputClass} resize-none`}
            />
          </div>

          {error && (
            <p className="text-sm text-red-500 font-body">{error}</p>
          )}

          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-800 font-body transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold font-body hover:bg-blue-700 transition-all duration-150 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Booking...' : 'Book Job'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
