import React from 'react'

const items = [
  {title: 'For Talent', desc: "You have skill. The system has no door. We're building one.", cta: 'Join AbleHires'},
  {title: 'For Facilities & NGOs', desc: "You've been building talent. We're building infrastructure to scale it.", cta: 'Become a Partner'},
  {title: 'For Corporates', desc: "Stop checking boxes. Build real inclusion with verified talent.", cta: 'Partner With Us'}
]

import { motion, useReducedMotion } from 'framer-motion'
import { containerStagger, itemFadeUp } from '../lib/motionVariants'

export default function Audience(){
  const reduce = useReducedMotion()

  return (
    <section id="who" className="mt-16 pb-14">
      <div className="text-center">
        <motion.h2 variants={itemFadeUp} initial={reduce ? 'visible' : 'hidden'} whileInView={reduce ? 'visible' : 'visible'} viewport={{ once: true, amount: 0.12 }} className="text-2xl md:text-3xl font-bold text-ablue-900">Built for three audiences. Connected in one system.</motion.h2>
      </div>

      <motion.div variants={containerStagger} initial={reduce ? 'visible' : 'hidden'} whileInView={reduce ? 'visible' : 'visible'} viewport={{ once: true, amount: 0.12 }} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((it, idx) => (
          <motion.div key={idx} variants={itemFadeUp} className="glass p-6 rounded-2xl border border-gray-100 shadow-sm" whileHover={reduce ? {} : { y: -6, scale: 1.01 }} transition={{ type: 'spring', stiffness: 140, damping: 16 }}>
            <div className="text-sm text-ablue-600">{it.title}</div>
            <div className="mt-3 font-semibold text-ablue-900 text-lg">{it.title}</div>
            <p className="mt-3 text-sm text-ablue-600">{it.desc}</p>
            <div className="mt-6">
              <button className="px-4 py-2 rounded-full bg-ablue-600 text-white text-sm">{it.cta}</button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
