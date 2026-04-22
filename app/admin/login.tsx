'use client'

import { useRef, useState } from 'react'

export default function LoginScreen() {
  const [pin, setPin] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  async function submitPin(value: string) {
    setLoading(true)
    setError(false)

    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin: value }),
      })

      if (res.ok) {
        window.location.reload()
      } else {
        setError(true)
        setPin('')
        setLoading(false)
        setTimeout(() => inputRef.current?.focus(), 50)
      }
    } catch {
      setError(true)
      setPin('')
      setLoading(false)
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.replace(/\D/g, '').slice(0, 8)
    setPin(value)
    setError(false)

    if (value.length === 8) {
      submitPin(value)
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 w-full max-w-sm p-8">
        <div className="text-center mb-8">
          <span className="font-display text-3xl tracking-wide text-gray-900">
            RD TRASH
          </span>
          <p className="text-sm text-gray-400 mt-1 font-body">Admin</p>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700 text-center">
            Enter PIN
          </label>

          <input
            ref={inputRef}
            type="password"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={8}
            value={pin}
            onChange={handleChange}
            disabled={loading}
            autoFocus
            className={[
              'w-full text-center text-2xl tracking-[0.5em] py-3 px-4 rounded-lg border-2',
              'font-body outline-none transition-all duration-150',
              'focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
              error
                ? 'border-red-400 bg-red-50 text-red-700'
                : 'border-gray-200 bg-gray-50 text-gray-900',
              loading ? 'opacity-50 cursor-not-allowed' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            placeholder="----"
          />

          {error && (
            <p className="text-sm text-red-500 text-center font-body">
              Incorrect PIN. Try again.
            </p>
          )}

          <button
            type="button"
            onClick={() => pin.length === 8 && submitPin(pin)}
            disabled={pin.length < 8 || loading}
            className={[
              'w-full py-2.5 px-4 rounded-lg text-sm font-medium font-body',
              'bg-blue-700 text-white transition-all duration-150',
              'hover:bg-blue-800 hover:shadow-md',
              'disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none',
            ].join(' ')}
          >
            {loading ? 'Checking...' : 'Continue'}
          </button>
        </div>
      </div>
    </div>
  )
}
