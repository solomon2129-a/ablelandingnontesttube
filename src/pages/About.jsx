import React from 'react'
import GlassCard from '../components/GlassCard'
import Footer from '../components/Footer'
import { motion, useReducedMotion } from 'framer-motion'
import { itemFadeUp, containerStagger } from '../lib/motionVariants'

export default function About(){
  const reduce = useReducedMotion()
  return (
    <div>
      <header className="bg-white border-b border-gray-100 pt-28 pb-8 md:pt-36">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-sm text-ablue-600 font-semibold">ABOUT</div>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-ablue-900">We're not fixing inclusion. We're rebuilding it from scratch.</h1>
          <p className="mt-4 text-ablue-700 max-w-2xl">Because the current system isn't broken—it was never designed to work for everyone.</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 space-y-12">
        {/* The Origin */}
        <motion.section variants={itemFadeUp} initial={reduce ? 'visible' : 'hidden'} whileInView={reduce ? 'visible' : 'visible'} viewport={{ once: true }}>
          <div className="text-sm font-semibold text-ablue-600">WHY THIS EXISTS</div>
          <h2 className="text-2xl md:text-3xl font-bold mt-3 text-ablue-900">The insight that started everything.</h2>
          <p className="mt-4 text-ablue-700 max-w-3xl">For years, we watched talented individuals get lost in a system that was never built for them. Not because they lacked skill, but because they lacked verified access. NGOs worked in isolation. Corporates checked boxes. Millions remained invisible. We realized: You need infrastructure. So we started building it.</p>
        </motion.section>

        {/* The Long Vision */}
        <motion.section id="vision" variants={containerStagger} initial={reduce ? 'visible' : 'hidden'} whileInView={reduce ? 'visible' : 'visible'} viewport={{ once: true }}>
          <div className="text-sm font-semibold text-ablue-600">WHERE WE'RE GOING</div>
          <h2 className="text-2xl md:text-3xl font-bold mt-3 text-ablue-900">Building the inclusion layer for India.</h2>
          <p className="mt-4 text-ablue-700 max-w-3xl">Abledots will evolve into full social wellbeing infrastructure.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <GlassCard>
              <div className="font-semibold text-ablue-900">Verified talent pipelines at scale</div>
            </GlassCard>
            <GlassCard>
              <div className="font-semibold text-ablue-900">NGO credibility scoring and fund flow</div>
            </GlassCard>
            <GlassCard>
              <div className="font-semibold text-ablue-900">Corporate inclusion dashboards</div>
            </GlassCard>
            <GlassCard>
              <div className="font-semibold text-ablue-900">Impact tracking</div>
            </GlassCard>
            <GlassCard>
              <div className="font-semibold text-ablue-900">Future: Accessible services marketplace</div>
            </GlassCard>
            <GlassCard>
              <div className="font-semibold text-ablue-900">Future: AI leveling systems</div>
            </GlassCard>
          </div>

          <p className="mt-6 text-ablue-700">This is 10-year work. We're just getting started.</p>
        </motion.section>

        {/* What We Believe */}
        <motion.section variants={containerStagger} initial={reduce ? 'visible' : 'hidden'} whileInView={reduce ? 'visible' : 'visible'} viewport={{ once: true }}>
          <h3 className="text-2xl font-bold text-ablue-900">What we stand for.</h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <GlassCard>
              <ul className="space-y-3 text-ablue-700">
                <li>Inclusion is infrastructure, not an initiative</li>
                <li>Talent exists everywhere. Access doesn't</li>
                <li>Verification builds trust. Trust unlocks opportunity</li>
                <li>Systems that exclude are designed that way</li>
                <li>We're redesigning the system</li>
                <li>This is generational work</li>
              </ul>
            </GlassCard>
            <GlassCard>
              <div>
                <h4 className="font-semibold text-ablue-900">Who's building this</h4>
                <p className="mt-3 text-ablue-700">Built by people who see what's missing.</p>
                <div className="mt-4">
                  <div className="text-sm text-ablue-600">Founder</div>
                  <div className="mt-2 font-semibold text-ablue-900">[Insert founder name, title]</div>
                  <p className="mt-2 text-ablue-700">[Founder story — 2–3 paragraphs go here. Replace this placeholder with the real founder bio to make the page personal and credible.]</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </motion.section>

        {/* Where we are now */}
        <motion.section variants={itemFadeUp} initial={reduce ? 'visible' : 'hidden'} whileInView={reduce ? 'visible' : 'visible'} viewport={{ once: true }}>
          <div className="text-sm font-semibold text-ablue-600">CURRENT STATE</div>
          <h3 className="text-2xl font-bold text-ablue-900 mt-2">Bengaluru. Active. Expanding.</h3>
          <p className="mt-3 text-ablue-700 max-w-2xl">We're on the ground in Bengaluru, partnering with facilities to source, assess, and verify talent. Every week, we're identifying professionals, assessing them, verifying capabilities, and matching to opportunities. City by city. Foundation by foundation.</p>
        </motion.section>

        {/* CTA */}
        <motion.section variants={itemFadeUp} initial={reduce ? 'visible' : 'hidden'} whileInView={reduce ? 'visible' : 'visible'} viewport={{ once: true }} className="text-center">
          <h3 className="text-2xl font-bold text-ablue-900">Want to build this with us?</h3>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a className="px-5 py-3 rounded-full bg-ablue-600 text-white" href="#">Join as Talent</a>
            <a className="px-5 py-3 rounded-full bg-white border border-gray-100 text-ablue-700" href="#">Partner as NGO/Facility</a>
            <a className="px-5 py-3 rounded-full bg-white border border-gray-100 text-ablue-700" href="#">Hire as Corporate</a>
          </div>
          <div className="mt-4 text-choco-600">Contact: <a href="mailto:antomichae03@gmail.com" className="text-coral-600 font-semibold hover:underline">antomichae03@gmail.com</a> | <a href="tel:+919591562286" className="text-teal-600 font-semibold hover:underline">+91 95915 62286</a></div>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}
