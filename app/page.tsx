import React from 'react'
import HeroSection from './components/hero'
import AboutUsSection from './components/about'
import CanvasSection from './components/canvas'

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <CanvasSection />
    </div>
  )
}

export default Home