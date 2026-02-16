import React from 'react'
import HeroNew from '../components/HeroNew'
import Story from '../components/Story'
import HowItWorks from '../components/HowItWorks'
import InteractiveElements from '../components/InteractiveElements'
import Invitation from '../components/Invitation'
import FooterNew from '../components/FooterNew'

export default function HomeNew(){
  return (
    <div className="min-h-screen bg-neutral-bg overflow-hidden">
      <main>
        <HeroNew />
        <Story />
        <InteractiveElements />
        <HowItWorks />
        <Invitation />
      </main>
      <FooterNew />
    </div>
  )
}
