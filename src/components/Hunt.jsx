import React from 'react'

const levels = [
  {level: 'Level 1', title: 'Qualified', percent: 72, color: 'from-ablue-500 to-ablue-300'},
  {level: 'Level 2', title: 'Experienced', percent: 46, color: 'from-[#D8E6EE] to-[#F2EDE0]'},
  {level: 'Level 3', title: 'Ready', percent: 22, color: 'from-agold to-[#F9F3E6]'}
]

import { motion, useReducedMotion } from 'framer-motion'
import { itemFadeUp } from '../lib/motionVariants'

export default function Hunt(){
  const reduce = useReducedMotion()

  return (
    <section id="hunt" className="mt-16 pb-14">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.div variants={itemFadeUp} initial={reduce ? 'visible' : 'hidden'} whileInView={reduce ? 'visible' : 'visible'} viewport={{ once: true, amount: 0.12 }}>
            <div className="text-sm font-semibold text-ablue-600">ACTIVE OPERATIONS</div>
            <h2 className="text-2xl md:text-3xl font-bold mt-3 text-ablue-900">The search is on.</h2>
            <p className="mt-4 text-ablue-700">We're actively on the ground in Bengaluru—partnering with facilities to identify and assess capable professionals. This isn't a pilot. This is active talent sourcing at scale.</p>

            <div className="mt-6 space-y-4">
              {levels.map((l, i) => (
                <motion.div key={i} className="bg-white p-4 rounded-2xl border border-gray-100" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.9 }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-ablue-900">{l.title}</div>
                      <div className="text-xs text-ablue-600">{l.level}</div>
                    </div>
                    <div className="text-sm font-semibold text-ablue-900">{l.percent}%</div>
                  </div>
                  <div className="mt-3 w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                    <motion.div className={`h-3 rounded-full bg-gradient-to-r ${l.color}`} style={{width: `0%`}} initial={{ width: 0 }} whileInView={{ width: `${l.percent}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.12 + i * 0.1 }} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div>
          <motion.div variants={itemFadeUp} initial={reduce ? 'visible' : 'hidden'} whileInView={reduce ? 'visible' : 'visible'} viewport={{ once: true, amount: 0.12 }} className="glass rounded-2xl p-6 border border-gray-100">
            <div className="text-sm text-ablue-600">Assessment UI</div>
            <div className="mt-3 grid gap-3">
              <div className="p-3 rounded-xl bg-white border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-ablue-900">Filtering — Skills & Readiness</div>
                  <div className="text-xs text-ablue-600">Real-time</div>
                </div>
                <div className="flex mt-3 items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-ablue-400" />
                  <div className="text-xs text-ablue-600">Verified training</div>
                </div>
              </div>

              <div className="p-3 rounded-xl glass border border-gray-100">
                <div className="text-sm font-semibold text-ablue-900">Grading — Qualified • Experienced • Ready</div>
                <div className="text-xs text-ablue-600 mt-2">Human-centred filtering with clear, humane assessment prompts and on-ground verification.</div>
              </div>

              <div className="p-3 rounded-xl bg-ablue-50 text-ablue-900 border border-gray-100">
                <div className="text-sm font-semibold">Scale-ready sourcing</div>
                <div className="text-xs text-ablue-600 mt-2">Channel partnerships + direct outreach across facilities.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
