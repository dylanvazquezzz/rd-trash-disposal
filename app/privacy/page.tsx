import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PhoneLink from '@/components/PhoneLink'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for R&D Trash Disposal. Learn how we handle your contact information submitted through our estimate form.',
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white pt-24 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-4xl text-[#0B1E3D] mb-8">Privacy Policy</h1>

          <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
            <p className="text-sm text-gray-400">Last updated: April 2026</p>

            <section>
              <h2 className="font-display text-2xl text-[#0B1E3D] mb-3">What We Collect</h2>
              <p>
                When you submit an estimate request through our website, we collect your name,
                city, phone number or email address, a description of your project, and any
                photos you upload. This information is used solely to prepare and deliver your
                quote.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#0B1E3D] mb-3">How We Use It</h2>
              <p>
                We use your contact information to respond to your estimate request. We do not
                sell, rent, or share your personal information with third parties for marketing
                purposes. Photos you upload are stored securely and used only to assess the
                scope of your project.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#0B1E3D] mb-3">Data Storage</h2>
              <p>
                Submitted information is stored securely via Supabase. Photos are stored in
                Supabase Storage. We retain this data for the purpose of managing your service
                request and for a reasonable period thereafter.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl text-[#0B1E3D] mb-3">Contact</h2>
              <p>
                If you have questions about your data or would like it removed, contact us at{' '}
                <PhoneLink source="privacy" className="text-[#F5A623] hover:underline" />
                .
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
