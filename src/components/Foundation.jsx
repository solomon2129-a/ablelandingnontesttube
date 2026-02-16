import React from 'react'
import GlassCard from './GlassCard'
import { CheckBadgeIcon, BuildingLibraryIcon, UsersIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const pillars = [
  {icon: <CheckBadgeIcon className="w-6 h-6 text-ablue-600" />, title: 'Verified Talent Pipelines', desc: "Direct, assessed and verified talent sourcing."},
  {icon: <BuildingLibraryIcon className="w-6 h-6 text-agold" />, title: 'NGO Credibility Systems', desc: "Standardised verification & reputation."},
  {icon: <UsersIcon className="w-6 h-6 text-ablue-400" />, title: 'Corporate Inclusion Infrastructure', desc: "Verified hires, measurable outcomes."},
  {icon: <ChartBarIcon className="w-6 h-6 text-ablue-300" />, title: 'Transparent Impact Tracking', desc: "Data & dashboards to show real impact."}
]

import { motion, useReducedMotion } from 'framer-motion'
import { containerStagger, itemFadeUp } from '../lib/motionVariants'

export default function Foundation(){
  const reduce = useReducedMotion()

  return (
    <section id="foundation" className="mt-14 pb-14">
      <motion.div variants={itemFadeUp} initial={reduce ? 'visible' : 'hidden'} whileInView={reduce ? 'visible' : 'visible'} viewport={{ once: true, amount: 0.12 }} className="text-center max-w-3xl mx-auto">
        <h3 className="text-sm font-semibold text-ablue-600">FOUNDATION</h3>
        <h2 className="text-2xl md:text-3xl font-bold mt-3 text-ablue-900">We're building the foundation.</h2>
        <p className="mt-4 text-ablue-700">Abledots is India's social wellbeing infrastructure layer. This isn't a platform. It's a foundation.</p>
      </motion.div>

      <motion.div variants={containerStagger} initial={reduce ? 'visible' : 'hidden'} whileInView={reduce ? 'visible' : 'visible'} viewport={{ once: true, amount: 0.12 }} className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((p, idx) => (
          <motion.div variants={itemFadeUp} key={idx}>
            <GlassCard className="hover:scale-[1.018] transition-transform">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-ablue-50 flex items-center justify-center text-ablue-700">{p.icon}</div>
                <div>
                  <div className="text-ablue-900 font-semibold">{p.title}</div>
                  <div className="text-sm text-ablue-600 mt-1">{p.desc}</div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-8 glass rounded-2xl p-6 border border-gray-100">
        <div className="text-sm text-ablue-700">Visual</div>
        <div className="mt-3 flex gap-6 items-center">
          <div className="w-20 h-20 rounded-lg bg-ablue-50 shadow-sm flex items-center justify-center"> <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 12h18" stroke="#9FB8C8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 8v8" stroke="#D8E6EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
          <div className="text-ablue-700">Layered infrastructure diagram with calm, editorial lines — connecting data, verification and placements.</div>
        </div>
      </div>
    </section>
  )
}
