/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Fire a gtag event.
 *
 * If gtag hasn't loaded yet (e.g. a very fast click on initial page load),
 * the event is pushed onto window.dataLayer directly. The gtag library
 * reads from dataLayer on initialization, so the event will be replayed
 * once the script loads — nothing is silently dropped.
 */
export const fireEvent = (name: string, params?: Record<string, string>) => {
  if (typeof window === 'undefined') return

  const w = window as any

  if (typeof w.gtag === 'function') {
    w.gtag('event', name, params)
  } else {
    // gtag not yet initialized — queue directly onto dataLayer.
    // The gtag loader drains this queue when it runs.
    w.dataLayer = w.dataLayer || []
    w.dataLayer.push({ event: name, ...params })
  }
}
