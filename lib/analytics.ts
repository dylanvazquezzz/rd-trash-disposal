/* eslint-disable @typescript-eslint/no-explicit-any */

export const fireEvent = (name: string, params?: Record<string, string>) => {
  if (typeof window === 'undefined') return

  const w = window as any

  // Ensure gtag stub exists so queued calls are replayed when the script loads.
  // The gtag loader drains dataLayer via `arguments` format — not {event:...} format.
  w.dataLayer = w.dataLayer || []
  w.gtag = w.gtag || function (...args: unknown[]) { w.dataLayer.push(args) }

  w.gtag('event', name, params)
}
