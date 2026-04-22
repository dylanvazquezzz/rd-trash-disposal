'use client'

import { useEffect, useState } from 'react'
import { Job, ViewMode } from './types'
import WeekView from './components/WeekView'
import DayView from './components/DayView'
import MonthView from './components/MonthView'
import AddJobModal from './components/AddJobModal'
import JobDetailModal from './components/JobDetailModal'

function isoLocal(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function getWeekDays(date: Date): Date[] {
  const d = new Date(date)
  const dow = d.getDay()
  const diff = dow === 0 ? -6 : 1 - dow
  d.setDate(d.getDate() + diff)
  return Array.from({ length: 7 }, (_, i) => {
    const day = new Date(d)
    day.setDate(d.getDate() + i)
    return day
  })
}

const MONTH_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const MONTH_FULL = ['January','February','March','April','May','June','July','August','September','October','November','December']
const DAY_FULL = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

function navLabel(view: ViewMode, currentDate: Date, weekDays: Date[]): string {
  if (view === 'week') {
    const f = weekDays[0]
    const l = weekDays[6]
    if (f.getMonth() === l.getMonth()) {
      return `${MONTH_SHORT[f.getMonth()]} ${f.getDate()} – ${l.getDate()}, ${f.getFullYear()}`
    }
    return `${MONTH_SHORT[f.getMonth()]} ${f.getDate()} – ${MONTH_SHORT[l.getMonth()]} ${l.getDate()}, ${l.getFullYear()}`
  }
  if (view === 'day') {
    return `${DAY_FULL[currentDate.getDay()]}, ${MONTH_SHORT[currentDate.getMonth()]} ${currentDate.getDate()}`
  }
  return `${MONTH_FULL[currentDate.getMonth()]} ${currentDate.getFullYear()}`
}

function getCurrentTimeMinutes(): number {
  const now = new Date()
  return now.getHours() * 60 + now.getMinutes()
}

export default function AdminClient() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState<ViewMode>('week')
  const [today] = useState(() => new Date())
  const [currentDate, setCurrentDate] = useState(() => new Date())
  const [currentTimeMinutes, setCurrentTimeMinutes] = useState(getCurrentTimeMinutes)
  const [addModalOpen, setAddModalOpen] = useState(false)
  const [addDefaultDate, setAddDefaultDate] = useState<string | undefined>()
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)

  const weekDays = getWeekDays(currentDate)

  async function fetchJobs() {
    try {
      const res = await fetch('/api/jobs')
      const data = await res.json()
      setJobs(Array.isArray(data) ? data : [])
    } catch {
      setJobs([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJobs()
    const timer = setInterval(() => setCurrentTimeMinutes(getCurrentTimeMinutes()), 60_000)
    return () => clearInterval(timer)
  }, [])

  function navigate(dir: -1 | 1) {
    setCurrentDate((prev) => {
      const d = new Date(prev)
      if (view === 'week') d.setDate(d.getDate() + dir * 7)
      else if (view === 'day') d.setDate(d.getDate() + dir)
      else d.setMonth(d.getMonth() + dir)
      return d
    })
  }

  function handleDayClick(date: Date) {
    setCurrentDate(date)
    setView('week')
  }

  async function handleLogout() {
    await fetch('/api/admin/auth', { method: 'DELETE' })
    window.location.href = '/admin'
  }

  return (
    <div className="h-screen flex flex-col bg-white font-body overflow-hidden">
      {/* Top nav */}
      <header className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 shrink-0 flex-wrap gap-y-2">
        <div className="flex items-center gap-2 mr-2">
          <span className="font-display text-xl tracking-wide text-gray-900">RD TRASH</span>
          <span className="text-xs text-gray-400">Admin</span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => navigate(-1)}
            className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
            aria-label="Previous"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="text-sm font-medium text-gray-700 min-w-[190px] text-center select-none">
            {navLabel(view, currentDate, weekDays)}
          </span>
          <button
            onClick={() => navigate(1)}
            className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors"
            aria-label="Next"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentDate(new Date())}
            className="ml-1 px-3 py-1.5 text-xs font-medium border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Today
          </button>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <div className="flex rounded-lg border border-gray-200 overflow-hidden text-xs">
            {(['day', 'week', 'month'] as ViewMode[]).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={[
                  'px-3 py-1.5 font-medium capitalize transition-colors',
                  view === v ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50',
                ].join(' ')}
              >
                {v}
              </button>
            ))}
          </div>

          <button
            onClick={() => { setAddDefaultDate(isoLocal(currentDate)); setAddModalOpen(true) }}
            className="px-4 py-1.5 rounded-lg bg-yellow-400 text-gray-900 text-xs font-semibold hover:bg-yellow-300 transition-all duration-150 shadow-sm hover:shadow-md"
          >
            + Add Job
          </button>

          <button
            onClick={handleLogout}
            className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      {loading ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
        </div>
      ) : (
        <>
          {view === 'week' && (
            <WeekView
              weekDays={weekDays}
              jobs={jobs}
              today={today}
              currentTimeMinutes={currentTimeMinutes}
              onJobClick={setSelectedJob}
            />
          )}
          {view === 'day' && (
            <DayView
              date={currentDate}
              jobs={jobs}
              today={today}
              currentTimeMinutes={currentTimeMinutes}
              onJobClick={setSelectedJob}
            />
          )}
          {view === 'month' && (
            <MonthView
              year={currentDate.getFullYear()}
              month={currentDate.getMonth()}
              jobs={jobs}
              today={today}
              onDayClick={handleDayClick}
              onJobClick={setSelectedJob}
            />
          )}
        </>
      )}

      {addModalOpen && (
        <AddJobModal
          defaultDate={addDefaultDate}
          onClose={() => setAddModalOpen(false)}
          onCreated={fetchJobs}
        />
      )}

      {selectedJob && (
        <JobDetailModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
          onUpdated={fetchJobs}
        />
      )}
    </div>
  )
}
