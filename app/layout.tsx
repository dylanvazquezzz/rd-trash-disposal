import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'R&D Trash Disposal | Same-Day Junk Removal — South Florida',
  description:
    'Local same-day junk removal and small-scale demolition in South Florida. Furniture, appliances, construction debris — we haul it all. Free estimates. Call 305-450-0649.',
  keywords:
    'junk removal south florida, same day trash pickup, junk hauling miami, demolition service broward, trash removal miami-dade',
  openGraph: {
    title: 'R&D Trash Disposal | Same-Day Junk Removal',
    description: 'Same-day junk removal across South Florida. Any trash, any size. Free estimates.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
