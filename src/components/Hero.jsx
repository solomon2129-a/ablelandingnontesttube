import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { containerStagger, wordReveal, itemFadeUp, subtleFloat } from '../lib/motionVariants'

export default function Hero(){
  const reduce = useReducedMotion()
  const headline = `Inclusion isn't charity. It's infrastructure.`
  const words = headline.split(' ')

  return (
    <section id="about" className="pt-28 pb-20 md:pt-36 md:pb-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <motion.div variants={containerStagger} initial={reduce ? 'visible' : 'hidden'} whileInView={reduce ? 'visible' : 'visible'} viewport={{ once: true, amount: 0.12 }} className="max-w-2xl">
            <div className="text-sm font-semibold text-ablue-600 mb-4">FUTURISTIC HUMANITY</div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-extrabold text-ablue-900">
              {words.map((w, i) => (
                <motion.span key={i} style={{ display: 'inline-block', marginRight: 6 }} custom={i} variants={wordReveal}>
                  {w}
                </motion.span>
              ))}
            </h1>

            <motion.p variants={itemFadeUp} className="mt-6 text-ablue-700 text-lg">We're building India's social wellbeing ecosystem—connecting underserved talent, NGOs, and corporates in one verified network.</motion.p>

            <motion.div className="mt-8 flex flex-col sm:flex-row gap-4" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}>
              <motion.a href="#vision" whileHover={reduce ? {} : { scale: 1.02 }} whileTap={reduce ? {} : { scale: 0.98 }} className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-ablue-600 text-white shadow-sm btn-glow">See Our Vision</motion.a>
              <motion.a href="#story" whileHover={reduce ? {} : { scale: 1.02 }} whileTap={reduce ? {} : { scale: 0.98 }} className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-white border border-gray-100 text-ablue-700">Our Story</motion.a>
            </motion.div>

            <motion.div variants={containerStagger} className="mt-8 flex gap-4 items-center text-sm text-ablue-700">
              <motion.div variants={itemFadeUp} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">🔗</div>
                <div>
                  <div className="text-sm font-semibold text-ablue-900">Verified network</div>
                  <div className="text-xs text-ablue-600">Talent, NGOs & corporates</div>
                </div>
              </motion.div>

              <div className="h-px w-6 bg-gray-100" />

              <motion.div variants={itemFadeUp} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">🌿</div>
                <div>
                  <div className="text-sm font-semibold text-ablue-900">Human-centred</div>
                  <div className="text-xs text-ablue-600">Warm, humane verification</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className="md:col-span-5 relative flex justify-center md:justify-end">
          <motion.div initial={reduce ? { opacity: 1 } : { scale:0.98, y:6 }} animate={{ scale:1, y:0, opacity: 1 }} transition={{duration:0.9}} className="w-[320px] sm:w-[420px] md:w-[460px] lg:w-[540px]">
            {/* hero art: soft floral + human silhouette, muted nodes for editorial warmth */}
            <div className="relative rounded-3xl overflow-visible">
              <motion.div aria-hidden className="absolute -inset-6 bg-acream/50 rounded-3xl opacity-90 blur-sm" animate={reduce ? {} : { x: [0, 12, 0], y: [0, 6, 0] }} transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }} />

              <div className="relative z-10 glass p-6 rounded-3xl border border-gray-100">
                <div className="relative h-[360px] md:h-[420px] rounded-2xl overflow-hidden bg-acream">
                  {/* muted nodes layer */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <radialGradient id="g1" cx="30%" cy="20%">
                        <stop offset="0%" stopColor="#B7CCD6" stopOpacity="0.22" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <rect width="100%" height="100%" fill="transparent" />
                    <g className="node" fill="#9fb6c2" opacity="0.9">
                      <motion.circle cx="480" cy="120" r="4" fill="#AFC6D1" opacity="0.95" animate={reduce ? {} : { scale: [1, 1.06, 1] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }} />
                      <motion.circle cx="420" cy="200" r="5" fill="#9FB8C8" animate={reduce ? {} : { scale: [1, 1.04, 1] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }} />
                      <motion.circle cx="520" cy="260" r="6" fill="#D9E6EA" animate={reduce ? {} : { scale: [1, 1.03, 1] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }} />
                      <motion.circle cx="300" cy="120" r="6" fill="#E9D9B8" animate={reduce ? {} : { scale: [1, 1.02, 1] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} />
                      <motion.circle cx="220" cy="240" r="5" fill="#D8E6EE" animate={reduce ? {} : { scale: [1, 1.03, 1] }} transition={{ duration: 7.4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }} />
                      <motion.circle cx="140" cy="180" r="8" fill="#E9D9B8" animate={reduce ? {} : { scale: [1, 1.015, 1] }} transition={{ duration: 6.6, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }} />
                    </g>

                    <g strokeWidth="1.2" stroke="#9FB8C8" strokeOpacity="0.25" fill="none">
                      <path d="M140 180 C200 120, 300 80, 360 140" />
                      <path d="M300 120 C340 160, 420 170, 480 120" />
                      <path d="M220 240 C280 260, 360 260, 420 200" />
                    </g>

                    {/* soft human + floral silhouette */}
                    <g transform="translate(80,190)">
                      <ellipse cx="220" cy="130" rx="72" ry="110" fill="url(#g1)" opacity="0.24" />
                      <path d="M180 80 C190 20, 260 10, 280 80 C300 160, 210 170, 180 80 Z" fill="#B7CCD6" opacity="0.06" />
                      <g transform="translate(150,50) scale(0.6)">
                        <path d="M40 10 C58 30, 70 70, 48 100 C28 125, -2 120, 0 90 C2 60, 22 40, 40 10 Z" fill="#E9D9B8" opacity="0.9" />
                        <circle cx="34" cy="36" r="6" fill="#223544" />
                      </g>
                    </g>
                  </svg>

                  {/* floating UI cards — white, soft shadow */}
                  <motion.div animate={reduce ? {} : subtleFloat.animate(0.4)} className="absolute left-6 top-6 w-36 glass rounded-xl p-3 border border-gray-100 shadow-sm transform -rotate-3">
                    <div className="text-xs text-ablue-600">Verified</div>
                    <div className="text-sm font-semibold mt-1 text-ablue-900">Talent pipelines</div>
                  </motion.div>

                  <motion.div animate={reduce ? {} : subtleFloat.animate(1.1)} className="absolute right-6 bottom-10 w-44 glass rounded-xl p-3 border border-gray-100 shadow-sm transform rotate-6">
                    <div className="text-xs text-ablue-600">Impact</div>
                    <div className="text-sm font-semibold mt-1 text-ablue-900">Transparent tracking</div>
                  </motion.div>

                  <motion.div animate={reduce ? {} : subtleFloat.animate(0.8)} className="absolute right-8 top-20 w-28 glass rounded-xl p-2 border border-gray-100 shadow-sm opacity-95">
                    <div className="text-xs text-ablue-600">NGO</div>
                    <div className="text-sm font-semibold mt-1 text-ablue-900">Credibility</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
