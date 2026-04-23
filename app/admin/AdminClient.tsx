'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Job, ViewMode } from './types'
import WeekView from './components/WeekView'
import DayView from './components/DayView'
import MonthView from './components/MonthView'
import MiniCalendar from './components/MiniCalendar'
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
const MONTH_FULL  = ['January','February','March','April','May','June','July','August','September','October','November','December']
const DAY_FULL    = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

function navLabel(view: ViewMode, currentDate: Date, weekDays: Date[]): string {
  if (view === 'week') {
    const f = weekDays[0], l = weekDays[6]
    if (f.getMonth() === l.getMonth()) return `${MONTH_SHORT[f.getMonth()]} ${f.getDate()} – ${l.getDate()}, ${f.getFullYear()}`
    return `${MONTH_SHORT[f.getMonth()]} ${f.getDate()} – ${MONTH_SHORT[l.getMonth()]} ${l.getDate()}, ${l.getFullYear()}`
  }
  if (view === 'day') return `${DAY_FULL[currentDate.getDay()]}, ${MONTH_SHORT[currentDate.getMonth()]} ${currentDate.getDate()}`
  return `${MONTH_FULL[currentDate.getMonth()]} ${currentDate.getFullYear()}`
}

function monthYearLabel(date: Date): string {
  return `${MONTH_FULL[date.getMonth()]} ${date.getFullYear()}`
}

function getCurrentTimeMinutes(): number {
  const now = new Date()
  return now.getHours() * 60 + now.getMinutes()
}

type JobFilter = 'active' | 'cancelled'

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
  const [editingJob, setEditingJob] = useState<Job | null>(null)
  const [jobFilter, setJobFilter] = useState<JobFilter>('active')
  const [upcomingOpen, setUpcomingOpen] = useState(true)

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

  const calendar = (
    <>
      {view === 'week'  && <WeekView weekDays={weekDays} {...calendarProps} />}
      {view === 'day'   && <DayView  date={currentDate} {...calendarProps} />}
      {view === 'month' && <MonthView year={currentDate.getFullYear()} month={currentDate.getMonth()} {...calendarProps} onDayClick={handleDayClick} />}
    </>
  )

  return (
    <div className="h-screen flex flex-col bg-white font-body overflow-hidden">

      {/* ── Desktop header ─────────────────────────────────────────── */}
      <header className="hidden sm:flex items-center gap-2 px-4 py-2.5 border-b border-gray-100 shrink-0">
        <div className="flex items-center gap-2 mr-3">
          <Image src="/logo_transparent.png" alt="RD Trash" width={32} height={32} className="rounded object-contain" />
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-lg tracking-wide text-gray-900">RD TRASH</span>
            <span className="text-xs text-gray-400">Admin</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button onClick={() => navigate(-1)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors" aria-label="Previous">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={() => navigate(1)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors" aria-label="Next">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
          <button onClick={() => setCurrentDate(new Date())} className="ml-1 px-2.5 py-1.5 text-xs font-medium border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
            Today
          </button>
        </div>

        {/* Prominent month/year label */}
        <span className="text-base font-semibold text-gray-800 min-w-[220px] select-none">
          {navLabel(view, currentDate, weekDays)}
        </span>

        <div className="ml-auto flex items-center gap-2">
          <div className="flex rounded-lg border border-gray-200 overflow-hidden text-xs">
            {(['active', 'cancelled'] as JobFilter[]).map((f) => (
              <button key={f} onClick={() => setJobFilter(f)}
                className={['px-3 py-1.5 font-medium capitalize whitespace-nowrap transition-colors', jobFilter === f ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'].join(' ')}>
                {f}
              </button>
            ))}
          </div>

          <div className="flex rounded-lg border border-gray-200 overflow-hidden text-xs">
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

          <button onClick={() => setUpcomingOpen(o => !o)}
            className={['flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors', upcomingOpen ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-200 text-gray-600 hover:bg-gray-50'].join(' ')}>
            Upcoming
            <svg className={['w-3 h-3 transition-transform', upcomingOpen ? 'rotate-180' : ''].join(' ')} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <button onClick={handleLogout} className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
            Logout
          </button>
        </div>
      </header>

      {/* ── Mobile header ──────────────────────────────────────────── */}
      <header className="sm:hidden flex items-center gap-1.5 px-2 py-2 border-b border-gray-100 shrink-0">
        {/* Month/year + arrows */}
        <button onClick={() => navigate(-1)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors shrink-0" aria-label="Previous">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <span className="flex-1 text-sm font-semibold text-gray-800 text-center select-none truncate">
          {monthYearLabel(currentDate)}
        </span>
        <button onClick={() => navigate(1)} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors shrink-0" aria-label="Next">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* Today shortcut */}
        <button onClick={() => setCurrentDate(new Date())} className="px-2 py-1 text-[10px] font-medium border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors shrink-0">
          Today
        </button>

        {/* View dropdown */}
        <div className="relative shrink-0">
          <select
            value={view}
            onChange={e => setView(e.target.value as ViewMode)}
            className="text-[11px] font-medium text-gray-700 border border-gray-200 rounded-lg pl-2 pr-5 py-1.5 bg-white appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 4px center',
              backgroundSize: '10px',
            }}
          >
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
          </select>
        </div>

        {/* Add job */}
        <button
          onClick={() => { setAddDefaultDate(isoLocal(currentDate)); setAddModalOpen(true) }}
          className="px-2.5 py-1.5 rounded-lg bg-yellow-400 text-gray-900 text-[11px] font-semibold hover:bg-yellow-300 transition-colors shrink-0 shadow-sm"
        >
          + Add
        </button>
      </header>

      {/* ── Body ───────────────────────────────────────────────────── */}
      {loading ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
        </div>
      ) : (
        <>
          {/* ── Desktop body ── */}
          <div className="hidden sm:flex flex-1 overflow-hidden">
            <div className="flex flex-col flex-1 overflow-hidden">{calendar}</div>
            {upcomingOpen && (
              <div className="w-72 border-l border-gray-100 flex flex-col shrink-0 overflow-hidden">
                <UpcomingPanel jobs={jobs} onJobClick={setSelectedJob} />
              </div>
            )}
          </div>

          {/* ── Mobile body — always-on 2-column layout ── */}
          <div className="sm:hidden flex flex-1 overflow-hidden">

            {/* Left panel: filter + mini calendar + upcoming */}
            <div className="w-[120px] border-r border-gray-100 flex flex-col shrink-0 overflow-hidden bg-white">
              {/* Active / Cancelled filter */}
              <div className="px-2 py-2 border-b border-gray-100 shrink-0">
                <div className="flex rounded-lg overflow-hidden border border-gray-200 text-[10px]">
                  {(['active', 'cancelled'] as JobFilter[]).map((f) => (
                    <button
                      key={f}
                      onClick={() => setJobFilter(f)}
                      className={['flex-1 py-1.5 font-medium capitalize whitespace-nowrap transition-colors', jobFilter === f ? 'bg-blue-600 text-white' : 'bg-white text-gray-500'].join(' ')}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mini calendar */}
              <div className="border-b border-gray-100 shrink-0">
                <MiniCalendar currentDate={currentDate} today={today} onDayClick={handleDayClick} compact />
              </div>

              {/* Upcoming jobs */}
              <div className="flex-1 overflow-hidden">
                <UpcomingPanel jobs={jobs} onJobClick={setSelectedJob} compact />
              </div>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="px-3 py-2 text-[10px] text-gray-400 hover:text-gray-600 transition-colors text-left border-t border-gray-100 shrink-0"
              >
                Logout
              </button>
            </div>

            {/* Right panel: calendar */}
            <div className="flex flex-col flex-1 overflow-hidden min-w-0">{calendar}</div>
          </div>
        </>
      )}

      {addModalOpen && (
        <AddJobModal
          defaultDate={addDefaultDate}
          editJob={editingJob ?? undefined}
          onClose={() => { setAddModalOpen(false); setEditingJob(null) }}
          onCreated={fetchJobs}
        />
      )}
      {selectedJob && (
        <JobDetailModal
          job={selectedJob}
          onClose={() => setSelectedJob(null)}
          onUpdated={fetchJobs}
          onEdit={() => { setEditingJob(selectedJob); setSelectedJob(null); setAddModalOpen(true) }}
        />
      )}
    </div>
  )
}
