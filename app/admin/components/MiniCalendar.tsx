'use client'
import { useState, useEffect } from 'react'

const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December']
const DAY_LABELS = ['S','M','T','W','T','F','S']

type Props = {
  currentDate: Date
  today: Date
  onDayClick: (date: Date) => void
}

export default function MiniCalendar({ currentDate, today, onDayClick }: Props) {
  const [year, setYear] = useState(currentDate.getFullYear())
  const [month, setMonth] = useState(currentDate.getMonth())

  useEffect(() => {
    setYear(currentDate.getFullYear())
    setMonth(currentDate.getMonth())
  }, [currentDate])

  const todayStr = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`
  const selectedStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth()+1).padStart(2,'0')}-${String(currentDate.getDate()).padStart(2,'0')}`

  const firstDayOfWeek = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells: (number | null)[] = [
    ...Array(firstDayOfWeek).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]
  while (cells.length % 7 !== 0) cells.push(null)

  function prevMonth() {
    if (month === 0) { setMonth(11); setYear(y => y - 1) }
    else setMonth(m => m - 1)
  }
  function nextMonth() {
    if (month === 11) { setMonth(0); setYear(y => y + 1) }
    else setMonth(m => m + 1)
  }

  return (
    <div className="px-4 pt-2 pb-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-gray-800">{MONTH_NAMES[month]} {year}</span>
        <div className="flex gap-0.5">
          <button onClick={prevMonth} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={nextMonth} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 mb-1">
        {DAY_LABELS.map((l, i) => (
          <div key={i} className="text-[10px] text-center text-gray-400 font-medium py-0.5">{l}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-0.5">
        {cells.map((day, i) => {
          if (day === null) return <div key={i} />
          const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`
          const isToday = dateStr === todayStr
          const isSelected = dateStr === selectedStr
          return (
            <button
              key={i}
              onClick={() => onDayClick(new Date(year, month, day))}
              className={[
                'text-[11px] w-7 h-7 mx-auto rounded-full flex items-center justify-center font-medium transition-colors',
                isToday
                  ? 'bg-blue-600 text-white'
                  : isSelected
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100',
              ].join(' ')}
            >
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}
