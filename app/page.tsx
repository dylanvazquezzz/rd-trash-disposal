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

export default function Home() {
  return (
    <>
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
