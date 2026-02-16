import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { itemFadeUp } from '../lib/motionVariants'

export default function GlassCard({children, className = '', interactive = true}){
  const reduce = useReducedMotion()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`glass rounded-2xl p-6 md:p-8 border border-choco-100 shadow-warm hover:shadow-warm-lg transition-shadow ${className}`}
      variants={itemFadeUp}
      initial={reduce ? 'visible' : 'hidden'}
      whileInView={reduce ? 'visible' : 'visible'}
      viewport={{ once: true, amount: 0.12 }}
      whileHover={reduce || !interactive ? {} : { y: -8, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ type: 'spring', stiffness: 120, damping: 16 }}
    >
      {/* Animated background glow on hover */}
      {isHovered && !reduce && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-gradient-to-br from-coral-100 to-transparent rounded-2xl -z-10 blur-lg"
        />
      )}
      {children}
    </motion.div>
  )
}
