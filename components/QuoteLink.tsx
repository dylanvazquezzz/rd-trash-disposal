'use client'

import { fireEvent } from '@/lib/analytics'

interface QuoteLinkProps {
  location: string
  serviceType: 'commercial_junk_removal' | 'dumpster_rental'
  source: string
  className?: string
  children: React.ReactNode
}

export default function QuoteLink({
  location,
  serviceType,
  source,
  className,
  children,
}: QuoteLinkProps) {
  const handleClick = () => {
    fireEvent('location_quote_request', {
      location,
      service_type: serviceType,
      source,
      page_path: window.location.pathname,
    })
  }

  return (
    <a href="/commercial/estimate" className={className} onClick={handleClick}>
      {children}
    </a>
  )
}
