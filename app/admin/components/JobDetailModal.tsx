'use client'

import { useState } from 'react'
import { Job, JobStatus } from '../types'

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  const d = new Date(year, month - 1, day)
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })
}

function formatTime(time: string): string {
  const [hStr, mStr] = time.split(':')
  const h = parseInt(hStr, 10)
  const suffix = h >= 12 ? 'PM' : 'AM'
  const display = h > 12 ? h - 12 : h === 0 ? 12 : h
  return `${display}:${mStr} ${suffix}`
}

const STATUS_CONFIG: Record<JobStatus, { label: string; activeClass: string; outlineClass: string }> = {
  scheduled: {
    label: 'Scheduled',
    activeClass: 'bg-blue-600 text-white border-blue-600',
    outlineClass: 'border-blue-300 text-blue-600 hover:bg-blue-50',
  },
  in_progress: {
    label: 'In Progress',
    activeClass: 'bg-yellow-400 text-gray-900 border-yellow-400',
    outlineClass: 'border-yellow-300 text-yellow-600 hover:bg-yellow-50',
  },
  complete: {
    label: 'Complete',
    activeClass: 'bg-green-600 text-white border-green-600',
    outlineClass: 'border-green-300 text-green-600 hover:bg-green-50',
  },
  cancelled: {
    label: 'Cancelled',
    activeClass: 'bg-gray-400 text-white border-gray-400',
    outlineClass: 'border-gray-300 text-gray-500 hover:bg-gray-50',
  },
}

const STATUS_ORDER: JobStatus[] = ['scheduled', 'in_progress', 'complete', 'cancelled']

type Props = {
  job: Job
  onClose: () => void
  onUpdated: () => void
  onEdit: () => void
}

export default function JobDetailModal({ job, onClose, onUpdated, onEdit }: Props) {
  const [currentStatus, setCurrentStatus] = useState<JobStatus>(job.status)
  const [updating, setUpdating] = useState(false)

  const isDemo = job.job_type === 'demolition'

  async function updateStatus(status: JobStatus) {
    if (status === currentStatus) return
    setUpdating(true)

    try {
      const res = await fetch(`/api/jobs/${job.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      })

      if (!res.ok) throw new Error('Failed to update')
      setCurrentStatus(status)
      onUpdated()
    } catch {
      // status reverts visually since we haven't updated state on failure
    } finally {
      setUpdating(false)
    }
  }

  async function cancelJob() {
    await updateStatus('cancelled')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={[
                'text-xs font-bold px-2 py-0.5 rounded font-body',
                isDemo
                  ? 'bg-yellow-300 text-gray-800'
                  : 'bg-blue-500 text-white',
              ].join(' ')}
            >
              {isDemo ? 'DEMOLITION' : 'JUNK REMOVAL'}
            </span>
            <h2 className="text-base font-semibold text-gray-900 font-body">
              {job.contact_name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors text-xl leading-none shrink-0"
          >
            &times;
          </button>
        </div>

        <div className="px-6 py-5 space-y-5">
          {/* Date + time */}
          <div>
            <p className="text-xs text-gray-400 font-body mb-0.5">Date &amp; Time</p>
            <p className="text-sm font-medium text-gray-900 font-body">
              {formatDate(job.job_date)} at {formatTime(job.job_time)}
            </p>
          </div>

          {/* Address */}
          <div>
            <p className="text-xs text-gray-400 font-body mb-0.5">Address</p>
            <p className="text-sm text-gray-900 font-body">
              {job.address}
            </p>
            <p className="text-xs text-gray-500 font-body">{job.zip_code}</p>
          </div>

          {/* Phone */}
          {job.contact_phone && (
            <div>
              <p className="text-xs text-gray-400 font-body mb-0.5">Phone</p>
              <a
                href={`tel:${job.contact_phone}`}
                className="text-sm text-blue-600 font-body hover:underline"
              >
                {job.contact_phone}
              </a>
            </div>
          )}

          {/* Description */}
          {job.description && (
            <div>
              <p className="text-xs text-gray-400 font-body mb-0.5">Description</p>
              <p className="text-sm text-gray-700 font-body leading-relaxed">{job.description}</p>
            </div>
          )}

          {/* Status */}
          <div>
            <p className="text-xs text-gray-400 font-body mb-2">Status</p>
            <div className="flex flex-wrap gap-2">
              {STATUS_ORDER.map((s) => {
                const cfg = STATUS_CONFIG[s]
                const isActive = s === currentStatus
                return (
                  <button
                    key={s}
                    onClick={() => updateStatus(s)}
                    disabled={updating}
                    className={[
                      'px-3 py-1.5 rounded-full text-xs font-medium border font-body',
                      'transition-all duration-150',
                      isActive ? cfg.activeClass : cfg.outlineClass,
                      updating ? 'opacity-50 cursor-not-allowed' : '',
                    ].join(' ')}
                  >
                    {cfg.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-5 pt-2 border-t border-gray-50 flex items-center justify-between">
          <button
            onClick={cancelJob}
            disabled={updating || currentStatus === 'cancelled'}
            className="text-xs text-red-400 hover:text-red-600 font-body transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            {currentStatus === 'cancelled' ? 'Job cancelled' : 'Cancel this job'}
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={onEdit}
              className="text-xs font-medium text-blue-600 hover:text-blue-800 font-body transition-colors"
            >
              Edit
            </button>
            <button
              onClick={onClose}
              className="text-xs text-gray-400 hover:text-gray-600 font-body transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
