/* eslint-disable @typescript-eslint/no-explicit-any */
export const fireEvent = (name: string, params?: Record<string, string>) => {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    ;(window as any).gtag('event', name, params)
  }
}
