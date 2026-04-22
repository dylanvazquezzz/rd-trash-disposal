'use client'

import { Job } from '../types'

const DAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

function isoDate(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

type Props = {
  year: number
  month: number
  jobs: Job[]
  today: Date
  onDayClick: (date: Date) => void
  onJobClick: (job: Job) => void
}

export default function MonthView({ year, month, jobs, today, onDayClick, onJobClick }: Props) {
  const todayStr = isoDate(today)

  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const startDow = firstDay.getDay()

  const cells: Array<Date | null> = []
  for (let i = 0; i < startDow; i++) cells.push(null)
  for (let d = 1; d <= lastDay.getDate(); d++) cells.push(new Date(year, month, d))
  while (cells.length % 7 !== 0) cells.push(null)

  const weeks: Array<Array<Date | null>> = []
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7))

  function getJobsForDate(date: Date): Job[] {
    const str = isoDate(date)
    return jobs.filter((j) => j.job_date === str)
  }

  return (
    <div className="flex-1 overflow-auto p-4">
      {/* Day headers */}
      <div className="grid grid-cols-7 mb-1">
        {DAY_LABELS.map((d) => (
          <div key={d} className="text-center text-xs font-medium text-gray-400 pb-2 font-body">
            {d}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-rows-[repeat(auto-fill,minmax(100px,1fr))] gap-px bg-gray-100 border border-gray-100 rounded-xl overflow-hidden">
        {weeks.map((week, wi) => (
          <div key={wi} className="grid grid-cols-7 gap-px">
            {week.map((day, di) => {
              if (!day) {
                return <div key={`empty-${wi}-${di}`} className="bg-gray-50 min-h-[100px]" />
              }

              const dayStr = isoDate(day)
              const isToday = dayStr === todayStr
              const isCurrentMonth = day.getMonth() === month
              const dayJobs = getJobsForDate(day)
              const visibleJobs = dayJobs.slice(0, 3)
              const overflow = dayJobs.length - 3

              return (
                <div
                  key={dayStr}
                  onClick={() => onDayClick(day)}
                  className={[
                    'bg-white min-h-[100px] p-1.5 cursor-pointer transition-colors duration-150',
                    'hover:bg-blue-50/50',
                    !isCurrentMonth ? 'opacity-40' : '',
                  ].join(' ')}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={[
                        'text-xs font-semibold font-body',
                        isToday
                          ? 'w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]'
                          : 'text-gray-700',
                      ].join(' ')}
                    >
                      {isToday ? (
                        <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">
                          {day.getDate()}
                        </span>
                      ) : day.getDate()}
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    {visibleJobs.map((job) => {
                      const isDemo = job.job_type === 'demolition'
                      return (
                        <button
                          key={job.id}
                          onClick={(e) => {
                            e.stopPropagation()
                            onJobClick(job)
                          }}
                          className={[
                            'w-full text-left text-[10px] px-1.5 py-0.5 rounded truncate',
                            'shadow-sm transition-all duration-150 hover:shadow-md hover:scale-[1.01]',
                            isDemo
                              ? 'bg-yellow-300 text-gray-800'
                              : 'bg-blue-500 text-white',
                          ].join(' ')}
                        >
                          {job.job_time.replace(':00', '')} {job.address.split(',')[0]}
                        </button>
                      )
                    })}

                    {overflow > 0 && (
                      <p className="text-[10px] text-blue-600 font-medium pl-0.5 font-body">
                        +{overflow} more
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
