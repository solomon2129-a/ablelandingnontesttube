import React from 'react'
import GlassCard from '../components/GlassCard'
import Footer from '../components/Footer'
import { motion, useReducedMotion } from 'framer-motion'
import { itemFadeUp, containerStagger } from '../lib/motionVariants'

export default function Partner(){
  return (
    <div>
      <header className="bg-white border-b border-gray-100 pt-28 pb-8 md:pt-36">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-sm text-ablue-600 font-semibold">PARTNER WITH US</div>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-ablue-900">Help us build the infrastructure.</h1>
          <p className="mt-4 text-ablue-700 max-w-2xl">We're partnering with facilities, NGOs, and corporates who believe inclusion needs a new foundation.</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 space-y-12">
        {/* For Facilities & NGOs */}
        <motion.section variants={containerStagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="text-sm font-semibold text-ablue-600">FOR TRAINING PARTNERS</div>
          <h3 className="text-2xl font-bold text-ablue-900 mt-2">You've been building talent. We're building systems to scale it.</h3>
          <p className="mt-3 text-ablue-700 max-w-3xl">We're actively sourcing talent across India—starting with Bengaluru. If you work with capable individuals who have degrees, experience, or career ambition but lack visibility, we want to partner with you.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <GlassCard>
              <div className="font-semibold text-ablue-900">We assess your trainees through our grading framework</div>
            </GlassCard>
            <GlassCard>
              <div className="font-semibold text-ablue-900">We verify their capabilities and career readiness</div>
            </GlassCard>
            <GlassCard>
              <div className="font-semibold text-ablue-900">We match them to corporate opportunities</div>
            </GlassCard>
            <GlassCard>
              <div className="font-semibold text-ablue-900">You get transparent outcome tracking</div>
            </GlassCard>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <GlassCard>
              <div className="font-semibold text-ablue-900">What we need from you</div>
              <ul className="mt-3 text-ablue-700 space-y-2">
                <li>Access to your trained/capable individuals</li>
                <li>Basic information: education, experience, career goals</li>
                <li>Support in the assessment process</li>
                <li>Commitment to tracking outcomes together</li>
              </ul>
            </GlassCard>

            <GlassCard>
              <div className="font-semibold text-ablue-900">What you get</div>
              <ul className="mt-3 text-ablue-700 space-y-2">
                <li>Free partnership (no fees)</li>
                <li>Dashboard access to track your talent's journey</li>
                <li>Connection to hiring corporates</li>
                <li>Provable impact data for funding and credibility</li>
              </ul>
            </GlassCard>
          </div>
          <div className="mt-6 text-ablue-700">Current Focus: Bengaluru facilities. Expanding city by city.</div>
          <div className="mt-4">
            <a className="px-5 py-3 rounded-full bg-ablue-600 text-white" href="#">Become a Sourcing Partner</a>
          </div>
        </motion.section>

        {/* For Corporates */}
        <motion.section variants={containerStagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="text-sm font-semibold text-ablue-600">FOR HIRING TEAMS</div>
          <h3 className="text-2xl font-bold text-ablue-900 mt-2">Real inclusion starts with real infrastructure.</h3>
          <p className="mt-3 text-ablue-700 max-w-3xl">Stop checking DEI boxes. Start building verified pipelines. AbleHires gives you access to talent that's been assessed, verified, and matched. Not resumes. Pipelines.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <GlassCard>
              <div className="font-semibold text-ablue-900">You share open roles and requirements</div>
            </GlassCard>
            <GlassCard>
              <div className="font-semibold text-ablue-900">We match you with verified, assessed talent</div>
            </GlassCard>
            <GlassCard>
              <div className="font-semibold text-ablue-900">You interview pre-vetted candidates</div>
            </GlassCard>
            <GlassCard>
              <div className="font-semibold text-ablue-900">You track inclusion outcomes through our dashboard</div>
            </GlassCard>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <GlassCard>
              <div className="font-semibold text-ablue-900">What you get</div>
              <ul className="mt-3 text-ablue-700 space-y-2">
                <li>Access to curated talent pipeline</li>
                <li>Pre-assessed candidates (save screening time)</li>
                <li>Real diversity hiring (not compliance theater)</li>
                <li>Impact tracking dashboard</li>
              </ul>
            </GlassCard>
            <GlassCard>
              <div className="font-semibold text-ablue-900">Status & next steps</div>
              <div className="mt-3 text-ablue-700">Bengaluru talent pool live. Next: Expanding to 5 cities by Q3 2025. Pilot partnerships available.</div>
            </GlassCard>
          </div>

          <div className="mt-6">
            <a className="px-5 py-3 rounded-full bg-ablue-600 text-white" href="#">Partner With Us</a>
          </div>
        </motion.section>

        {/* What Partnership Looks Like & CTA */}
        <section>
          <h3 className="text-2xl font-bold text-ablue-900">Building this together.</h3>
          <p className="mt-3 text-ablue-700 max-w-3xl">We're not a vendor. We're infrastructure. Early partners aren't just users—they're co-creators of the infrastructure.</p>

          <div className="mt-6 text-ablue-700">Current Focus: Bengaluru now. India soon. We're building city by city, ensuring quality at every stage.</div>
          <div className="mt-6">
            <a className="px-5 py-3 rounded-full bg-ablue-600 text-white" href="#">I'm a Facility/NGO Partner</a>
            <a className="ml-3 px-5 py-3 rounded-full bg-white border border-gray-100 text-ablue-700" href="#">I'm a Corporate Partner</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
