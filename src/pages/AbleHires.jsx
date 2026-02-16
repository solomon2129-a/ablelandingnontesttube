import React from 'react'
import GlassCard from '../components/GlassCard'
import Footer from '../components/Footer'
import { motion, useReducedMotion } from 'framer-motion'
import { itemFadeUp, containerStagger } from '../lib/motionVariants'

export default function AbleHires(){
  return (
    <div>
      <header className="bg-white border-b border-gray-100 pt-28 pb-8 md:pt-36">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-sm text-ablue-600 font-semibold">ABLEHIRES</div>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-ablue-900">You have the talent. The system doesn't have the door.</h1>
          <p className="mt-4 text-ablue-700 max-w-2xl">AbleHires is where underserved talent gets verified, trained, and visible to companies who are actually hiring.</p>
          <div className="mt-6">
            <a className="px-5 py-3 rounded-full bg-ablue-600 text-white" href="#">Join AbleHires</a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 space-y-12">
        {/* The Reality */}
        <motion.section variants={itemFadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-ablue-700 max-w-3xl">You've applied to 47 jobs. You've been ghosted by 39. You've been told "we'll keep you in mind" by all of them. It's not your resume. It's not your skill. It's that no one verified you. No one vouched for you. No one opened the door. Until now.</p>
        </motion.section>

        {/* What AbleHires Does */}
        <motion.section variants={containerStagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className="text-2xl font-bold text-ablue-900">What if there was a place that actually saw you?</h3>
          <p className="mt-3 text-ablue-700 max-w-3xl">AbleHires isn't another job board. It's infrastructure.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <GlassCard>
              <div className="font-semibold text-ablue-900">Your skills get verified</div>
              <div className="text-ablue-600 mt-2">Actually assessed and vouched for</div>
            </GlassCard>
            <GlassCard>
              <div className="font-semibold text-ablue-900">You practice with AI coaches</div>
              <div className="text-ablue-600 mt-2">Mock interviews, instant feedback, free, unlimited</div>
            </GlassCard>
            <GlassCard>
              <div className="font-semibold text-ablue-900">Companies come to you</div>
              <div className="text-ablue-600 mt-2">They're accessing our verified talent pipeline</div>
            </GlassCard>
            <GlassCard>
              <div className="font-semibold text-ablue-900">You're talent, not a checkbox</div>
              <div className="text-ablue-600 mt-2">Real jobs for real capability</div>
            </GlassCard>
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section variants={containerStagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className="text-2xl font-bold text-ablue-900">Three steps. Zero barriers.</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <GlassCard>
              <div className="font-semibold">Step 1: Build your verified profile</div>
              <div className="text-ablue-600 mt-2">Your education, experience, skills all verified</div>
            </GlassCard>
            <GlassCard>
              <div className="font-semibold">Step 2: Practice with AI</div>
              <div className="text-ablue-600 mt-2">Mock interviews, instant feedback, build confidence</div>
            </GlassCard>
            <GlassCard>
              <div className="font-semibold">Step 3: Get matched with opportunities</div>
              <div className="text-ablue-600 mt-2">Real jobs from serious companies</div>
            </GlassCard>
          </div>
          <p className="mt-4 text-ablue-700">Visual: Phone mockups of each step</p>
        </motion.section>

        {/* How We Find You */}
        <motion.section variants={itemFadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="text-sm text-ablue-600 font-semibold">DIRECT-TO-SOURCE MODEL</div>
          <h3 className="text-2xl font-bold text-ablue-900 mt-2">We come to you.</h3>
          <p className="mt-3 text-ablue-700 max-w-3xl">Most platforms wait for you to apply. We don't. We're actively partnering with facilities across India (starting Bengaluru) to discover, assess, and verify professionals. Our assessment framework: Level 1 (Qualified), Level 2 (Experienced), Level 3 (Ready). By the time you're in the network, you're assessed, graded, and matched. We don't post jobs and hope. We source talent and deliver.</p>
        </motion.section>

        {/* Who This Is For */}
        <motion.section variants={itemFadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h3 className="text-2xl font-bold text-ablue-900">Is this for you?</h3>
          <p className="mt-3 text-ablue-700">AbleHires is for you if you've been overlooked because you don't "fit the profile", told you're not experienced enough, lost in WhatsApp groups, or stuck applying to jobs that ghost you. If you have skill, grit, and hunger—you belong here.</p>
        </motion.section>

        {/* Current Operations */}
        <motion.section variants={itemFadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="text-sm text-ablue-600 font-semibold">ACTIVE NOW</div>
          <h3 className="text-2xl font-bold text-ablue-900 mt-2">Bengaluru sourcing active.</h3>
          <p className="mt-3 text-ablue-700 max-w-3xl">We're currently partnering with facilities and training networks across Bengaluru to identify and assess talent. If you're in Bengaluru and connected to a facility we're partnering with, you may already be in our assessment pipeline. If not, join our network directly. We're expanding city by city.</p>
        </motion.section>

        {/* Final CTA */}
        <motion.section variants={itemFadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
          <h3 className="text-2xl font-bold text-ablue-900">Your next opportunity is waiting.</h3>
          <p className="mt-2 text-ablue-700">Join the AbleHires network. Get verified. Get visible. Get hired.</p>
          <div className="mt-4">
            <a className="px-5 py-3 rounded-full bg-ablue-600 text-white" href="#">Join AbleHires Now</a>
          </div>
          <div className="mt-3 text-xs text-ablue-600">🔒 Your data is yours. We verify you, we don't sell you.</div>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}
