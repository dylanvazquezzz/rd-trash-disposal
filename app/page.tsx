import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import HowItWorks from '@/components/HowItWorks'
import WhatWeTake from '@/components/WhatWeTake'
import EstimateForm from '@/components/EstimateForm'
import SocialProof from '@/components/SocialProof'
import FAQ from '@/components/FAQ'
import ServiceAreas from '@/components/ServiceAreas'
import Footer from '@/components/Footer'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  name: 'R&D Trash Disposal',
  description:
    'Same-day junk removal and interior demolition serving Miami-Dade, Broward, and Palm Beach counties. Licensed and insured.',
  url: 'https://rdtrash.org',
  telephone: '+17864083783',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Miami',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  areaServed: ['Miami-Dade County', 'Broward County', 'Palm Beach County'],
  openingHours: 'Mo-Su 07:00-20:00',
  sameAs: [],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 5,
    reviewCount: 3,
    bestRating: 5,
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Carlos M.' },
      reviewBody:
        'Called at 9am and they were at my house by noon. Took a couch, two mattresses, and a ton of yard waste. Guys were professional and the price was fair.',
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
      locationCreated: { '@type': 'Place', name: 'Hialeah, FL' },
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Jennifer R.' },
      reviewBody:
        'We needed a kitchen gutted before our contractor showed up. R&D came in, demo\'d everything, and hauled it all out in one day. Saved us a ton of time.',
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
      locationCreated: { '@type': 'Place', name: 'Kendall, FL' },
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Mike T.' },
      reviewBody:
        'Did a full house cleanout for my mom\'s estate. They were respectful, fast, and came back a second time when there was more than expected. Would hire again.',
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
      locationCreated: { '@type': 'Place', name: 'Hollywood, FL' },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <HowItWorks />
        <WhatWeTake />
        <SocialProof />
        <FAQ />
        <ServiceAreas />
        <EstimateForm />
      </main>
      <Footer />
    </>
  )
}
