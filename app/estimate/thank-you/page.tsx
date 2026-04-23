import Script from 'next/script'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Request Received | R&D Trash Disposal',
  robots: 'noindex',
}

export default function ThankYouPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#F8F6F1] flex items-center justify-center px-4 pt-20">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-[#0B1E3D] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#F5A623]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-display text-3xl font-bold text-[#0B1E3D] mb-3">
            Request Received
          </h1>
          <p className="text-gray-600 text-lg mb-2">
            We got your request and will review it shortly.
          </p>
          <p className="text-gray-500 mb-8">
            Expect a quote within 24 hours. For urgent jobs, call or text us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <a
              href="tel:7864083783"
              className="inline-block bg-[#0B1E3D] text-white font-semibold px-6 py-3 rounded hover:bg-[#1a3560] transition-all"
            >
              786-408-3783
            </a>
          </div>
          <a
            href="/"
            className="inline-block text-gray-500 underline text-sm hover:text-[#0B1E3D] transition-colors"
          >
            Back to Home
          </a>
        </div>
      </main>
      <Footer />
      <Script id="gtag-conversion" strategy="afterInteractive">
        {`gtag('event', 'conversion_event_submit_lead_form', {});`}
      </Script>
    </>
  )
}
