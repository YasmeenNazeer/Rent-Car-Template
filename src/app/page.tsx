import HeroSection from '@/components/herosection'
import React from 'react'

async function page() {
  const HeroSectionComponent = await HeroSection();
  return (
    <>
      {HeroSectionComponent}
    </>
  )
}

export default page