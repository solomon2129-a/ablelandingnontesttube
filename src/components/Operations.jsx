import React from 'react'

import { motion, useReducedMotion } from 'framer-motion'
import { itemFadeUp, subtleFloat } from '../lib/motionVariants'

export default function Operations(){
  const reduce = useReducedMotion()

  return (
    <section id="operations" className="mt-16 pb-14">
      <motion.div variants={itemFadeUp} initial={reduce ? 'visible' : 'hidden'} whileInView={reduce ? 'visible' : 'visible'} viewport={{ once: true, amount: 0.12 }} className="max-w-6xl mx-auto glass rounded-2xl p-6 border border-gray-100">
        <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
          <div className="max-w-xl">
            <div className="text-sm font-semibold text-ablue-600">LIVE NOW</div>
            <h3 className="text-2xl font-bold text-ablue-900 mt-2">Bengaluru operations active. Expanding city by city.</h3>
            <p className="mt-3 text-ablue-700">We're currently sourcing and assessing talent across Bengaluru. Direct-to-source. Verified. Ready.</p>
          </div>

          <div className="w-full md:w-1/2">
            <div className="relative bg-white rounded-2xl p-6 border border-gray-100">
              <svg viewBox="0 0 600 360" className="w-full h-56 md:h-40 rounded">
                <rect width="100%" height="100%" rx="12" fill="#FBF7EE" />
                {/* stylized India silhouette placeholder - simplified */}
                <g fill="#F4ECD9" stroke="#D8E6EE" strokeWidth="1">
                  <path d="M80 120 C120 70, 200 60, 260 80 C320 100, 420 100, 480 140 C500 160, 520 210, 470 240 C430 260, 370 260, 320 240 C280 220, 220 220, 180 200 C140 180, 100 160, 80 120 Z" fill="#F4ECD9"/>
                </g>
                {/* Bengaluru active node (muted blue) */}
                <g>
                  <motion.circle cx="420" cy="170" r="5" fill="#3b5f78" animate={reduce ? {} : { scale: [1, 1.25, 1] }} transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }} />
                  <motion.circle cx="420" cy="170" r="12" fill="#3b5f78" opacity="0.06" animate={reduce ? {} : { scale: [1, 1.08, 1] }} transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }} />
                  <text x="440" y="168" fill="#6b8aa3" fontSize="12">Bengaluru</text>
                </g>
              </svg>
              <div className="mt-4 text-xs text-ablue-600">Light map with active node — visualising live sourcing and verification footprint.</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
