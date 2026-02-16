import React from 'react'
import GlassCard from '../components/GlassCard'
import Footer from '../components/Footer'
import { motion, useReducedMotion } from 'framer-motion'
import { itemFadeUp, containerStagger } from '../lib/motionVariants'

export default function Contact(){
  return (
    <div>
      <header className="bg-white border-b border-gray-100 pt-28 pb-8 md:pt-36">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-sm text-ablue-600 font-semibold">CONTACT</div>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-ablue-900">Get in touch.</h1>
          <p className="mt-4 text-ablue-700 max-w-2xl">We're building infrastructure for India's social wellbeing ecosystem. If you want to be part of it, let's talk.</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 space-y-12">
        <motion.section variants={containerStagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <GlassCard>
            <div className="font-semibold text-choco-800">Email Us</div>
            <a href="mailto:antomichae03@gmail.com" className="mt-2 text-coral-600 hover:underline font-medium block">antomichae03@gmail.com</a>
          </GlassCard>
          <GlassCard>
            <div className="font-semibold text-choco-800">Call Us</div>
            <a href="tel:+919591562286" className="mt-2 text-teal-600 hover:underline font-medium block">+91 95915 62286</a>
          </GlassCard>
        </motion.section>

        <motion.section variants={itemFadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className="text-lg font-semibold text-choco-800">Follow our journey</h3>
          <div className="mt-3 text-choco-600">LinkedIn | Twitter</div>
        </motion.section>

        <motion.section variants={itemFadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className="text-lg font-semibold text-choco-800">Headquarters</h3>
          <div className="mt-3 text-choco-600">Abledots — Bengaluru, India</div>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}
