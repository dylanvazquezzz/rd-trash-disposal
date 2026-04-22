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

type Props = {
  weekDays: Date[]
  jobs: Job[]
  today: Date
  currentTimeMinutes: number
  onJobClick: (job: Job) => void
}

export default function WeekView({ weekDays, jobs, today, currentTimeMinutes, onJobClick }: Props) {
  const todayStr = today.toISOString().split('T')[0]

  function getJobsForDayAndHour(date: Date, hour: number): Job[] {
    const dateStr = date.toISOString().split('T')[0]
    return jobs.filter((j) => {
      const jobHour = getJobHour(j.job_time)
      return j.job_date === dateStr && jobHour === hour
    })
  }

  const currentTimeRow = Math.round(
    ((currentTimeMinutes - HOUR_START * 60) / 60) * 56
  )

  return (
    <div className="overflow-auto flex-1">
      <div className="min-w-0">
        {/* Day headers */}
        <div className="grid grid-cols-[28px_repeat(7,1fr)] sm:grid-cols-[56px_repeat(7,1fr)] border-b border-gray-100 sticky top-0 bg-white z-10">
          <div className="h-12" />
          {weekDays.map((day) => {
            const iso = day.toISOString().split('T')[0]
            const isToday = iso === todayStr
            const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
            const dayName = dayNames[day.getDay()]
            const dayNum = day.getDate()
            return (
              <div
                key={iso}
                className={[
                  'h-12 flex flex-col items-center justify-center text-xs font-medium border-l border-gray-100',
                  isToday ? 'bg-blue-50' : '',
                ].join(' ')}
              >
                <span className={isToday ? 'text-blue-600' : 'text-gray-500'}>{dayName}</span>
                <span
                  className={[
                    'text-sm font-semibold mt-0.5',
                    isToday
                      ? 'w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center'
                      : 'text-gray-800',
                  ].join(' ')}
                >
                  {isToday ? (
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                      {dayNum}
                    </span>
                  ) : (
                    dayNum
                  )}
                </span>
              </div>
            )
          })}
        </div>

        {/* Time grid */}
        <div className="relative">
          {HOURS.map((hour) => (
            <div
              key={hour}
              className="grid grid-cols-[28px_repeat(7,1fr)] sm:grid-cols-[56px_repeat(7,1fr)]"
              style={{ height: '56px' }}
            >
              <div className="flex items-start justify-end pr-1 sm:pr-2 pt-1 text-[9px] sm:text-[10px] text-gray-400 font-body">
                {formatHour(hour)}
              </div>
              {weekDays.map((day) => {
                const iso = day.toISOString().split('T')[0]
                const isToday = iso === todayStr
                const cellJobs = getJobsForDayAndHour(day, hour)
                return (
                  <div
                    key={iso}
                    className={[
                      'border-l border-t border-gray-100 relative px-0.5 py-0.5',
                      isToday ? 'bg-blue-50/40' : '',
                    ].join(' ')}
                  >
                    {cellJobs.map((job, idx) => {
                      const isDemo = job.job_type === 'demolition'
                      const topOffset = Math.round((getJobMinute(job.job_time) / 60) * 56)
                      return (
                        <button
                          key={job.id}
                          onClick={() => onJobClick(job)}
                          style={{
                            position: 'absolute',
                            top: `${topOffset}px`,
                            left: `${idx * 4}px`,
                            right: '2px',
                            zIndex: idx + 1,
                          }}
                          className={[
                            'text-left rounded px-1.5 py-0.5 text-[11px] leading-tight truncate',
                            'shadow-sm transition-all duration-150',
                            'hover:scale-[1.02] hover:shadow-md',
                            isDemo
                              ? 'bg-yellow-300 text-gray-900'
                              : 'bg-blue-500 text-white',
                          ].join(' ')}
                        >
                          <span className="font-semibold">{formatTime(job.job_time)}</span>
                          <span className="mx-1 opacity-70">·</span>
                          <span className="truncate">{job.address.split(',')[0]}</span>
                          <span
                            className={[
                              'ml-1 text-[9px] font-bold px-1 rounded',
                              isDemo
                                ? 'bg-yellow-400 text-gray-800'
                                : 'bg-blue-600 text-white',
                            ].join(' ')}
                          >
                            {isDemo ? 'DEM' : 'JR'}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                )
              })}
            </div>
          ))}

          {/* Current time line */}
          {currentTimeRow >= 0 && currentTimeRow <= HOURS.length * 56 && (
            <div
              className="absolute left-7 sm:left-14 right-0 flex items-center pointer-events-none z-20"
              style={{ top: `${currentTimeRow}px` }}
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 -ml-1" />
              <div className="flex-1 h-px bg-blue-500" />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
