import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import HowItWorks from '@/components/HowItWorks'
import WhatWeTake from '@/components/WhatWeTake'
import EstimateForm from '@/components/EstimateForm'
import SocialProof from '@/components/SocialProof'
import Reviews from '@/components/Reviews'
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
    reviewCount: 5,
    bestRating: 5,
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Ryan Gallor' },
      reviewBody:
        'Had them take care of old and damaged furniture and they did an amazing job. Great customer service and professionalism. Highly reccomend if you need any trash removal they are efficient and effective.',
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Alice Fields' },
      reviewBody:
        'I had an amazing experience with these two guys and their junk removal service! They showed up in a big truck, were extremely professional, hardworking, and friendly from start to finish. They worked quickly, handled everything with care, and made the whole process completely stress-free.',
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Michelle' },
      reviewBody:
        'I cannot say enough good things about R & D Trash Disposal! They answered the phone immediately, showed up quickly, and got everything taken care of efficiently and professionally. Highly recommend them to anyone needing junk removal or trash disposal services.',
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Amelia Navarro' },
      reviewBody:
        'I was in the middle of moving and my backyard was a complete disaster. I hired this company to help me out and i was honestly so surprised of how good and quick they did it. They\'re so affordable too i would definitely recommend.',
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Rusty Vazquez' },
      reviewBody:
        'These two young men did an absolutely outstanding job with the trash pickup! From start to finish, they were hardworking, respectful, and incredibly dependable. They showed up on time, came ready to work, and handled everything quickly and efficiently without cutting corners.',
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
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
        <Reviews />
        <FAQ />
        <ServiceAreas />
        <EstimateForm />
      </main>
      <Footer />
    </>
  )
}
