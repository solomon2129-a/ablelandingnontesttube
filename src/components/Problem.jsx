import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function Problem(){
  const reduce = useReducedMotion()
  const [showConnected, setShowConnected] = useState(false)

  const containerVariants = {
    hidden: reduce ? {} : { opacity: 0 },
    visible: reduce ? {} : {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: reduce ? {} : { opacity: 0, y: 20 },
    visible: reduce ? {} : {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="vision" className="mt-12 pb-14">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      >
        <motion.div variants={itemVariants}>
          <h3 className="text-sm font-semibold text-ablue-600 uppercase tracking-wide">The Problem</h3>
          <h2 className="text-2xl md:text-3xl font-bold mt-3 text-ablue-900 leading-tight">The system is broken. Not the people.</h2>
          <p className="mt-4 text-ablue-700 text-lg">Millions of talented individuals remain invisible—not because they lack skill, but because they lack access. NGOs work in isolation. Corporates check DEI boxes. No verification. No transparency. No system.</p>
          
          <motion.div
            variants={itemVariants}
            className="mt-6 flex items-center gap-3 p-4 rounded-xl bg-red-50 border border-red-100"
          >
            <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
            <p className="text-sm text-red-900"><strong>Current state:</strong> Fragmented, opaque, talent-unfriendly</p>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="relative"
          onMouseEnter={() => !reduce && setShowConnected(true)}
          onMouseLeave={() => !reduce && setShowConnected(false)}
        >
          <motion.div 
            className="glass rounded-2xl p-6 md:p-8 border border-gray-100 shadow-soft"
            animate={showConnected && !reduce ? { scale: 1.02, shadow: "0 20px 40px rgba(16,24,40,0.12)" } : {}}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between gap-4 mb-6">
              <motion.div 
                className="text-sm font-medium text-ablue-600 px-3 py-1 rounded-full bg-ablue-50"
                animate={reduce ? {} : { 
                  backgroundColor: showConnected ? "#d8e6ee" : "#f2f6f9"
                }}
              >
                Now vs Later
              </motion.div>
              <motion.div 
                className="text-xs text-ablue-500 font-semibold"
                animate={reduce ? {} : { 
                  opacity: showConnected ? 1 : 0.5,
                  x: showConnected ? 4 : 0
                }}
              >
                chaos → order
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Fragmented */}
              <motion.div 
                initial={reduce ? {} : { scale: 1, rotate: 0 }}
                whileHover={reduce ? {} : { scale: 1.05, rotate: -1 }}
                className="p-4 bg-white rounded-xl border border-gray-100 cursor-pointer transition-all"
              >
                <div className="text-sm font-semibold text-ablue-900">Fragmented</div>
                <svg className="mt-3 w-full h-28" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                  <g fill="#AFC6D1" opacity="0.85">
                    <motion.circle 
                      cx="30" cy="20" r="3"
                      animate={reduce || showConnected ? {} : { cx: [30, 32, 30], cy: [20, 22, 20] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.circle 
                      cx="70" cy="40" r="4"
                      animate={reduce || showConnected ? {} : { cx: [70, 68, 70], cy: [40, 38, 40] }}
                      transition={{ duration: 3.5, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.circle 
                      cx="50" cy="70" r="3.5"
                      animate={reduce || showConnected ? {} : { cx: [50, 48, 50], cy: [70, 72, 70] }}
                      transition={{ duration: 3.2, repeat: Infinity, delay: 0.4 }}
                    />
                    <motion.circle 
                      cx="10" cy="60" r="3"
                      animate={reduce || showConnected ? {} : { cx: [10, 12, 10], cy: [60, 58, 60] }}
                      transition={{ duration: 3.7, repeat: Infinity, delay: 0.1 }}
                    />
                    <motion.circle 
                      cx="160" cy="20" r="3"
                      animate={reduce || showConnected ? {} : { cx: [160, 158, 160], cy: [20, 22, 20] }}
                      transition={{ duration: 3.3, repeat: Infinity, delay: 0.3 }}
                    />
                  </g>
                  <motion.g 
                    stroke="#DEEAF0" strokeWidth="1" fill="none"
                    animate={reduce || showConnected ? { opacity: 0.2 } : { opacity: 0.5 }}
                  >
                    <path d="M30 20 L70 40"/>
                    <path d="M50 70 L10 60"/>
                  </motion.g>
                </svg>
              </motion.div>

              {/* Connected */}
              <motion.div 
                initial={reduce ? {} : { scale: 0.98, opacity: 0.7 }}
                whileHover={reduce ? {} : { scale: 1.05, opacity: 1 }}
                className="p-4 bg-gradient-to-br from-ablue-50 to-acream rounded-xl border border-ablue-200 cursor-pointer transition-all"
              >
                <div className="text-sm font-semibold text-ablue-900">Connected</div>
                <svg className="mt-3 w-full h-28" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                  <motion.g 
                    stroke="#9FB8C8" 
                    strokeWidth="1.6" 
                    fill="none"
                    animate={reduce || !showConnected ? { opacity: 0.3 } : { opacity: 0.95 }}
                  >
                    <motion.path 
                      d="M20 50 L60 30 L110 40 L160 30" 
                      strokeOpacity="0.9"
                      initial={reduce ? {} : { pathLength: 0 }}
                      whileInView={reduce ? {} : { pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <motion.path 
                      d="M60 30 L90 70 L160 30" 
                      strokeOpacity="0.65"
                      initial={reduce ? {} : { pathLength: 0 }}
                      whileInView={reduce ? {} : { pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                    />
                  </motion.g>
                  <motion.g 
                    fill="#D8E6EE" 
                    opacity="0.95"
                    animate={reduce || !showConnected ? { scale: 0.8 } : { scale: 1 }}
                  >
                    <motion.circle 
                      cx="20" cy="50" r="3"
                      whileHover={reduce ? {} : { r: 5, fill: "#6B8AA3" }}
                    />
                    <motion.circle 
                      cx="60" cy="30" r="4"
                      whileHover={reduce ? {} : { r: 6, fill: "#6B8AA3" }}
                    />
                    <motion.circle 
                      cx="90" cy="70" r="4"
                      whileHover={reduce ? {} : { r: 6, fill: "#6B8AA3" }}
                    />
                    <motion.circle 
                      cx="160" cy="30" r="4"
                      whileHover={reduce ? {} : { r: 6, fill: "#6B8AA3" }}
                    />
                  </motion.g>
                </svg>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="col-span-2 text-xs text-ablue-600 mt-2 p-3 bg-ablue-50 rounded-lg border border-ablue-100"
              >
                <strong>Hover interaction:</strong> Left shows fragmentation (chaos), right shows order — how Abledots connects people and systems
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
