'use client'

import { fireEvent } from '@/lib/analytics'

interface PhoneLinkProps {
  phone?: string
  display?: string
  source: string
  className?: string
  children?: React.ReactNode
}

export default function PhoneLink({
  phone = '7864083783',
  display = '786-408-3783',
  source,
  className,
  children,
}: PhoneLinkProps) {
  const handleClick = () => {
    fireEvent('phone_call_click', {
      source,
      page_path: window.location.pathname,
    })
  }

  return (
    <a href={`tel:${phone}`} className={className} onClick={handleClick}>
      {children ?? display}
    </a>
  )
}
