import React from 'react'
import HeroSection from '../components/Homepage/HeroSection'
import WhyBrioSection from '../components/Homepage/WhyBrioSection'
import TestimonialSection from '../components/Homepage/TestimonialSection'

const Home = () => {
  return (
    <div className='w-full scroll-smooth'>
        <div className='max-w-7xl mx-auto '>
          <HeroSection />
          <WhyBrioSection />
          <TestimonialSection />
        </div>
    </div>
  )
}

export default Home