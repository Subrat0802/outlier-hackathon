import React from 'react'
import HeroSection from '../components/Homepage/HeroSection'
import WhyBrioSection from '../components/Homepage/WhyBrioSection'
import TestimonialSection from '../components/Homepage/TestimonialSection'
import DailyProgressSection from '../components/Homepage/DailyProgressSection'
import WhatYouCanDoSection from '../components/Homepage/FeatureCard'

const Home = () => {
  return (
    <div className='w-full scroll-smooth'>
        <div className='max-w-7xl mx-auto '>
          <HeroSection />
          <WhatYouCanDoSection />
          <WhyBrioSection />
          <TestimonialSection />
          <DailyProgressSection />
        </div>
    </div>
  )
}

export default Home