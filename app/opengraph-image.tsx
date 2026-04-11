import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'R&D Trash Disposal — Same-Day Junk Removal South Florida'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0B1E3D',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        {/* Amber accent bar */}
        <div
          style={{
            width: '80px',
            height: '6px',
            background: '#F5A623',
            marginBottom: '32px',
            borderRadius: '3px',
          }}
        />

        <div
          style={{
            fontSize: '72px',
            fontWeight: '900',
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.1,
            letterSpacing: '-1px',
            marginBottom: '24px',
          }}
        >
          R&D TRASH DISPOSAL
        </div>

        <div
          style={{
            fontSize: '32px',
            color: '#F5A623',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '20px',
          }}
        >
          Same-Day Junk Removal &amp; Demolition
        </div>

        <div
          style={{
            fontSize: '24px',
            color: 'rgba(255,255,255,0.6)',
            textAlign: 'center',
          }}
        >
          Miami-Dade &amp; Broward County · Licensed &amp; Insured · Instant Estimates
        </div>
      </div>
    ),
    { ...size }
  )
}
