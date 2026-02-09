'use client'

import { Box } from '@chakra-ui/react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import ServicesPreview from '@/components/home/ServicesPreview'
import FeaturedProject from '@/components/home/FeaturedProject'
import Stats from '@/components/home/Stats'
import TechStack from '@/components/home/TechStack'
import TechMarquee from '@/components/home/TechMarquee'
import Testimonials from '@/components/home/Testimonials'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <Box>
      <Navbar />
      <Box as="main" pt="73px">
        <Hero />
        <ServicesPreview />
        <FeaturedProject />
        <Stats />
        <TechMarquee />
        <TechStack />
        <Testimonials />
        <CTASection />
      </Box>
      <Footer />
    </Box>
  )
}
