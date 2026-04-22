'use client'

import { Job } from '../types'

function isoToday(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function formatTime(time: string): string {
  const [hStr, mStr] = time.split(':')
  const h = parseInt(hStr, 10)
  const suffix = h >= 12 ? 'PM' : 'AM'
  const display = h > 12 ? h - 12 : h === 0 ? 12 : h
  return `${display}:${mStr} ${suffix}`
}

function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  const d = new Date(year, month - 1, day)
  const today = new Date()
  const tomorrow = new Date(today); tomorrow.setDate(today.getDate() + 1)
  if (d.toDateString() === today.toDateString()) return 'Today'
  if (d.toDateString() === tomorrow.toDateString()) return 'Tomorrow'
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
}

type Props = {
  jobs: Job[]
  onJobClick: (job: Job) => void
}

export default function UpcomingPanel({ jobs, onJobClick }: Props) {
  const today = isoToday()

  const upcoming = jobs
    .filter(j => ['scheduled', 'in_progress'].includes(j.status) && j.job_date >= today)
    .sort((a, b) => a.job_date.localeCompare(b.job_date) || a.job_time.localeCompare(b.job_time))

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="px-4 py-3 border-b border-gray-100 shrink-0">
        <h2 className="text-sm font-semibold text-gray-800 font-body">Upcoming Jobs</h2>
        <p className="text-xs text-gray-400 font-body mt-0.5">{upcoming.length} scheduled</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {upcoming.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-32 text-center px-4">
            <p className="text-sm text-gray-300 font-body">No upcoming jobs</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {upcoming.map((job) => {
              const isDemo = job.job_type === 'demolition'
              return (
                <button
                  key={job.id}
                  onClick={() => onJobClick(job)}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-100 group"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-medium text-gray-500 font-body">
                      {formatDate(job.job_date)} · {formatTime(job.job_time)}
                    </span>
                    <span className={[
                      'text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0',
                      isDemo ? 'bg-yellow-300 text-gray-800' : 'bg-blue-500 text-white',
                    ].join(' ')}>
                      {isDemo ? 'DEM' : 'JR'}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-900 font-body truncate group-hover:text-blue-600 transition-colors">
                    {job.contact_name}
                  </p>
                  <p className="text-xs text-gray-400 font-body truncate mt-0.5">
                    {job.address}, {job.zip_code}
                  </p>
                  {job.status === 'in_progress' && (
                    <span className="inline-block mt-1 text-[10px] font-medium text-yellow-600 bg-yellow-50 px-1.5 py-0.5 rounded">
                      In Progress
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
