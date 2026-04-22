'use client'

import { Job } from '../types'

const HOUR_START = 7
const HOUR_END = 20
const HOURS = Array.from({ length: HOUR_END - HOUR_START + 1 }, (_, i) => HOUR_START + i)

function formatHour(h: number) {
  if (h === 12) return '12pm'
  if (h > 12) return `${h - 12}pm`
  return `${h}am`
}

function getJobHour(time: string): number {
  return parseInt(time.split(':')[0], 10)
}

function getJobMinute(time: string): number {
  return parseInt(time.split(':')[1], 10)
}

function formatTime(time: string): string {
  const [hStr, mStr] = time.split(':')
  const h = parseInt(hStr, 10)
  const m = mStr
  const suffix = h >= 12 ? 'pm' : 'am'
  const displayH = h > 12 ? h - 12 : h === 0 ? 12 : h
  return m === '00' ? `${displayH}${suffix}` : `${displayH}:${m}${suffix}`
}

function isoDate(d: Date): string {
  return d.toISOString().split('T')[0]
}

type Props = {
  date: Date
  jobs: Job[]
  today: Date
  currentTimeMinutes: number
  onJobClick: (job: Job) => void
}

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default function DayView({ date, jobs, today, currentTimeMinutes, onJobClick }: Props) {
  const dateStr = isoDate(date)
  const todayStr = isoDate(today)
  const isToday = dateStr === todayStr

  const dayJobs = jobs.filter((j) => j.job_date === dateStr)

  const currentTimeRow = Math.round(
    ((currentTimeMinutes - HOUR_START * 60) / 60) * 64
  )

  return (
    <div className="overflow-auto flex-1">
      {/* Day header */}
      <div className="sticky top-0 bg-white z-10 border-b border-gray-100">
        <div className="px-6 py-3 flex items-center gap-3">
          <span className={[
            'text-lg font-semibold font-body',
            isToday ? 'text-blue-600' : 'text-gray-800',
          ].join(' ')}>
            {DAY_NAMES[date.getDay()]}
          </span>
          <span className={[
            'text-2xl font-bold',
            isToday
              ? 'w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-base'
              : 'text-gray-900',
          ].join(' ')}>
            {isToday ? (
              <span className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center text-base font-bold">
                {date.getDate()}
              </span>
            ) : date.getDate()}
          </span>
          <span className="text-sm text-gray-400 font-body">
            {MONTH_NAMES[date.getMonth()]} {date.getFullYear()}
          </span>
          {dayJobs.length === 0 && (
            <span className="ml-auto text-sm text-gray-300 font-body">No jobs</span>
          )}
        </div>
      </div>

      {/* Time grid */}
      <div className="relative">
        {HOURS.map((hour) => {
          const hourJobs = dayJobs.filter((j) => getJobHour(j.job_time) === hour)
          return (
            <div key={hour} className="grid grid-cols-[56px_1fr]" style={{ height: '64px' }}>
              <div className="flex items-start justify-end pr-3 pt-1 text-[11px] text-gray-400 font-body">
                {formatHour(hour)}
              </div>
              <div className="border-l border-t border-gray-100 relative px-2 py-1">
                {hourJobs.map((job, idx) => {
                  const isDemo = job.job_type === 'demolition'
                  const topOffset = Math.round((getJobMinute(job.job_time) / 60) * 64)
                  return (
                    <button
                      key={job.id}
                      onClick={() => onJobClick(job)}
                      style={{
                        position: 'absolute',
                        top: `${topOffset}px`,
                        left: `${8 + idx * 6}px`,
                        right: '8px',
                        zIndex: idx + 1,
                      }}
                      className={[
                        'text-left rounded-lg px-3 py-1.5 text-xs leading-snug',
                        'shadow-sm transition-all duration-150',
                        'hover:scale-[1.01] hover:shadow-md',
                        isDemo
                          ? 'bg-yellow-300 text-gray-900'
                          : 'bg-blue-500 text-white',
                      ].join(' ')}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold">{formatTime(job.job_time)}</span>
                        <span
                          className={[
                            'text-[9px] font-bold px-1 rounded',
                            isDemo
                              ? 'bg-yellow-400 text-gray-800'
                              : 'bg-blue-600 text-white',
                          ].join(' ')}
                        >
                          {isDemo ? 'DEM' : 'JR'}
                        </span>
                      </div>
                      <div className="truncate opacity-90 mt-0.5">{job.contact_name} — {job.address.split(',')[0]}</div>
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}

        {/* Current time line */}
        {isToday && currentTimeRow >= 0 && currentTimeRow <= HOURS.length * 64 && (
          <div
            className="absolute left-14 right-0 flex items-center pointer-events-none z-20"
            style={{ top: `${currentTimeRow}px` }}
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 -ml-1" />
            <div className="flex-1 h-px bg-blue-500" />
          </div>
        )}
      </div>
    </div>
  )
}
