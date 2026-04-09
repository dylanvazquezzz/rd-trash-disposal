import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: '404 — Page Not Found | R&D Trash Disposal',
}

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#F8F6F1] flex items-center justify-center px-4 pt-20">
        <div className="max-w-md w-full text-center">
          <p className="text-[#F5A623] font-bold text-sm uppercase tracking-widest mb-4">
            Page Not Found
          </p>
          <h1 className="font-display text-[#0B1E3D] text-6xl sm:text-7xl mb-6">
            404
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            That page doesn&apos;t exist. You can get a free estimate or head back home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="inline-flex items-center justify-center bg-[#0B1E3D] text-white font-semibold px-8 py-3 rounded hover:bg-[#1a3560] transition-all hover:scale-105"
            >
              Back to Home
            </a>
            <a
              href="/estimate"
              className="inline-flex items-center justify-center bg-[#F5A623] text-[#0B1E3D] font-bold px-8 py-3 rounded hover:bg-amber-400 transition-all hover:scale-105"
            >
              Get Free Estimate
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
