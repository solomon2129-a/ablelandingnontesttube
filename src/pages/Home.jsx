import React from 'react'
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import Foundation from '../components/Foundation'
import Hunt from '../components/Hunt'
import EntryPoint from '../components/EntryPoint'
import Audience from '../components/Audience'
import Operations from '../components/Operations'
import FinalCta from '../components/FinalCta'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div>
      <main className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <Hero />
        <Problem />
        <Foundation />
        <Hunt />
        <EntryPoint />
        <Audience />
        <Operations />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
