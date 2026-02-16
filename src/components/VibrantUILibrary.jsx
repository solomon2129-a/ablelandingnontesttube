import React from 'react'
import { motion } from 'framer-motion'

// Vibrant Button Component Library
export function VibrantButton({ 
  children, 
  variant = 'cyan', 
  size = 'md', 
  onClick, 
  className = '',
  ...props 
}) {
  const variants = {
    cyan: 'from-vibrant-cyan to-vibrant-cyan-dark shadow-lg hover:shadow-vibrant-cyan/50',
    magenta: 'from-vibrant-magenta to-vibrant-magenta-dark shadow-lg hover:shadow-vibrant-magenta/50',
    orange: 'from-vibrant-orange to-vibrant-orange-dark shadow-lg hover:shadow-vibrant-orange/50',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`bg-gradient-to-br ${variants[variant]} text-white font-semibold rounded-full transition-all duration-300 ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

// Gradient Text Component
export function GradientText({ children, variant = 'full', className = '' }) {
  const variants = {
    full: 'bg-gradient-to-r from-vibrant-cyan via-vibrant-magenta to-vibrant-orange',
    cyan: 'bg-gradient-to-r from-vibrant-cyan-light to-vibrant-cyan-dark',
    magenta: 'bg-gradient-to-r from-vibrant-magenta-light to-vibrant-magenta-dark',
    orange: 'bg-gradient-to-r from-vibrant-orange-light to-vibrant-orange-dark'
  }

  return (
    <span className={`${variants[variant]} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}

// Animated Gradient Background
export function AnimatedGradientBg() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="w-full h-full"
        style={{
          background: 'linear-gradient(45deg, rgba(0, 212, 255, 0.1), rgba(255, 0, 204, 0.1), rgba(255, 140, 0, 0.1))',
          backgroundSize: '200% 200%'
        }}
      />
    </div>
  )
}

// Vibrant Card Component
export function VibrantCard({ 
  title, 
  description, 
  icon, 
  color = 'cyan',
  onClick,
  className = '',
  children
}) {
  const accentColors = {
    cyan: 'border-vibrant-cyan/30 hover:shadow-vibrant-cyan/30',
    magenta: 'border-vibrant-magenta/30 hover:shadow-vibrant-magenta/30',
    orange: 'border-vibrant-orange/30 hover:shadow-vibrant-orange/30'
  }

  const borderGradients = {
    cyan: 'linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(0, 168, 204, 0.1))',
    magenta: 'linear-gradient(135deg, rgba(255, 0, 204, 0.3), rgba(204, 0, 153, 0.1))',
    orange: 'linear-gradient(135deg, rgba(255, 140, 0, 0.3), rgba(204, 112, 0, 0.1))'
  }

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onClick={onClick}
      className={`relative bg-white/60 backdrop-blur-md border rounded-2xl p-6 md:p-8 cursor-pointer transition-all ${accentColors[color]} ${className}`}
      style={{ borderImage: `linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(0, 168, 204, 0.1)) 1` }}
    >
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      {title && <h3 className="text-xl font-semibold text-neutral-text mb-2">{title}</h3>}
      {description && <p className="text-neutral-text-secondary">{description}</p>}
      {children && children}
    </motion.div>
  )
}

// Loading Spinner with Vibrant Colors
export function VibrantLoader() {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="w-12 h-12 border-4 rounded-full"
        style={{
          borderImage: 'linear-gradient(135deg, #00D4FF, #FF00CC, #FF8C00) 1',
          borderTopColor: 'transparent'
        }}
      />
    </div>
  )
}
