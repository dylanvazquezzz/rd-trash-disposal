'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Job, ViewMode } from './types'
import WeekView from './components/WeekView'
import DayView from './components/DayView'
import MonthView from './components/MonthView'
import AddJobModal from './components/AddJobModal'
import JobDetailModal from './components/JobDetailModal'
import UpcomingPanel from './components/UpcomingPanel'

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
    const f = weekDays[0], l = weekDays[6]
    if (f.getMonth() === l.getMonth()) return `${MONTH_SHORT[f.getMonth()]} ${f.getDate()} – ${l.getDate()}, ${f.getFullYear()}`
    return `${MONTH_SHORT[f.getMonth()]} ${f.getDate()} – ${MONTH_SHORT[l.getMonth()]} ${l.getDate()}, ${l.getFullYear()}`
  }
  if (view === 'day') return `${DAY_FULL[currentDate.getDay()]}, ${MONTH_SHORT[currentDate.getMonth()]} ${currentDate.getDate()}`
  return `${MONTH_FULL[currentDate.getMonth()]} ${currentDate.getFullYear()}`
}

function getCurrentTimeMinutes(): number {
  const now = new Date()
  return now.getHours() * 60 + now.getMinutes()
}

type JobFilter = 'active' | 'cancelled'
type MobileTab = 'calendar' | 'upcoming'

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
  const [jobFilter, setJobFilter] = useState<JobFilter>('active')
  const [upcomingOpen, setUpcomingOpen] = useState(true)
  const [mobileTab, setMobileTab] = useState<MobileTab>('calendar')

  const weekDays = getWeekDays(currentDate)

  const filteredJobs = jobs.filter(j =>
    jobFilter === 'active'
      ? j.status !== 'cancelled'
      : j.status === 'cancelled'
  )

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
    setMobileTab('calendar')
  }

  async function handleLogout() {
    await fetch('/api/admin/auth', { method: 'DELETE' })
    window.location.href = '/admin'
  }

  const calendarProps = {
    jobs: filteredJobs,
    today,
    currentTimeMinutes,
    onJobClick: setSelectedJob,
  }

  return (
    <div className="h-screen flex flex-col bg-white font-body overflow-hidden">
      {/* Top nav */}
      <header className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100 shrink-0">
        {/* Logo */}
        <div className="flex items-center gap-2 mr-3">
          <Image src="/logo_transparent.png" alt="RD Trash" width={32} height={32} className="rounded object-contain" />
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-lg tracking-wide text-gray-900 hidden sm:block">RD TRASH</span>
            <span className="text-xs text-gray-400">Admin</span>
          </div>
        </div>

        {/* Date nav — hidden on mobile when upcoming tab active */}
        <div className={['flex items-center gap-1', mobileTab === 'upcoming' ? 'hidden sm:flex' : 'flex'].join(' ')}>
          <button onClick={() => navigate(-1)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors" aria-label="Previous">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <span className="text-sm font-medium text-gray-700 min-w-[150px] text-center select-none hidden md:block">
            {navLabel(view, currentDate, weekDays)}
          </span>
          <button onClick={() => navigate(1)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors" aria-label="Next">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
          <button onClick={() => setCurrentDate(new Date())} className="ml-1 px-2.5 py-1.5 text-xs font-medium border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors hidden sm:block">
            Today
          </button>
        </div>

        <div className="ml-auto flex items-center gap-2">
          {/* Active / Cancelled toggle */}
          <div className="flex rounded-lg border border-gray-200 overflow-hidden text-xs">
            {(['active', 'cancelled'] as JobFilter[]).map((f) => (
              <button key={f} onClick={() => setJobFilter(f)}
                className={['px-3 py-1.5 font-medium capitalize transition-colors', jobFilter === f ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'].join(' ')}>
                {f}
              </button>
            ))}
          </div>

          {/* View toggle — desktop only */}
          <div className="hidden sm:flex rounded-lg border border-gray-200 overflow-hidden text-xs">
            {(['day', 'week', 'month'] as ViewMode[]).map((v) => (
              <button key={v} onClick={() => setView(v)}
                className={['px-3 py-1.5 font-medium capitalize transition-colors', view === v ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'].join(' ')}>
                {v}
              </button>
            ))}
          </div>

          <button onClick={() => { setAddDefaultDate(isoLocal(currentDate)); setAddModalOpen(true) }}
            className="px-3 py-1.5 rounded-lg bg-yellow-400 text-gray-900 text-xs font-semibold hover:bg-yellow-300 transition-all duration-150 shadow-sm hover:shadow-md">
            + Add Job
          </button>

          {/* Upcoming toggle — desktop only */}
          <button onClick={() => setUpcomingOpen(o => !o)}
            className={['hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors', upcomingOpen ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-200 text-gray-600 hover:bg-gray-50'].join(' ')}>
            Upcoming
            <svg className={['w-3 h-3 transition-transform', upcomingOpen ? 'rotate-180' : ''].join(' ')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <button onClick={handleLogout} className="text-xs text-gray-400 hover:text-gray-600 transition-colors hidden sm:block">
            Logout
          </button>
        </div>
      </header>

      {/* Mobile tab bar */}
      <div className="sm:hidden flex border-b border-gray-100 shrink-0">
        {(['calendar', 'upcoming'] as MobileTab[]).map((tab) => (
          <button key={tab} onClick={() => setMobileTab(tab)}
            className={['flex-1 py-2 text-xs font-medium capitalize transition-colors', mobileTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'].join(' ')}>
            {tab}
          </button>
        ))}
      </div>

      {/* Body */}
      {loading ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
        </div>
      ) : (
        <div className="flex flex-1 overflow-hidden">
          {/* Calendar — hidden on mobile when upcoming tab */}
          <div className={['flex flex-col flex-1 overflow-hidden', mobileTab === 'upcoming' ? 'hidden sm:flex' : 'flex'].join(' ')}>
            {view === 'week' && <WeekView weekDays={weekDays} {...calendarProps} />}
            {view === 'day'  && <DayView  date={currentDate} {...calendarProps} />}
            {view === 'month' && <MonthView year={currentDate.getFullYear()} month={currentDate.getMonth()} {...calendarProps} onDayClick={handleDayClick} />}
          </div>

          {/* Upcoming panel — desktop sidebar */}
          {upcomingOpen && (
            <div className="hidden sm:flex w-72 border-l border-gray-100 flex-col shrink-0 overflow-hidden">
              <UpcomingPanel jobs={jobs} onJobClick={setSelectedJob} />
            </div>
          )}

          {/* Upcoming panel — mobile full view */}
          {mobileTab === 'upcoming' && (
            <div className="sm:hidden flex-1 overflow-hidden">
              <UpcomingPanel jobs={jobs} onJobClick={setSelectedJob} />
            </div>
          )}
        </div>
      )}

      {addModalOpen && (
        <AddJobModal defaultDate={addDefaultDate} onClose={() => setAddModalOpen(false)} onCreated={fetchJobs} />
      )}
      {selectedJob && (
        <JobDetailModal job={selectedJob} onClose={() => setSelectedJob(null)} onUpdated={fetchJobs} />
      )}
    </div>
  )
}
