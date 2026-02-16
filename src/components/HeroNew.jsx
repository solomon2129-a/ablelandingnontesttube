import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function Hero(){
  const reduce = useReducedMotion()

  const containerVariants = {
    hidden: reduce ? {} : { opacity: 0 },
    visible: reduce ? {} : {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const textVariants = {
    hidden: reduce ? {} : { opacity: 0, y: 20 },
    visible: reduce ? {} : {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-40 pb-20 md:pt-48 md:pb-32">
      {/* Simplified background - neutral only */}
      <div className="absolute inset-0 bg-neutral-bg z-0" />
      
      {/* Vibrant decorative gradient blobs - far background */}
      <motion.div 
        animate={reduce ? {} : { y: [0, -30, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-vibrant-cyan to-transparent blur-3xl opacity-15 -mr-48 -mt-48"
      />
      <motion.div 
        animate={reduce ? {} : { y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-tr from-vibrant-magenta to-transparent blur-3xl opacity-12 -ml-48 -mb-48"
      />
      <motion.div 
        animate={reduce ? {} : { y: [0, 15, 0], x: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-gradient-to-bl from-vibrant-orange to-transparent blur-3xl opacity-10 -mr-40"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center"
      >
        {/* Overline with vibrant gradient accent */}
        <motion.div
          variants={textVariants}
          className="mb-8"
        >
          <div className="inline-block">
            <p className="text-sm md:text-base font-semibold tracking-widest text-neutral-text-secondary uppercase mb-3">
              A New Kind of Infrastructure
            </p>
            <div className="h-1 bg-gradient-to-r from-vibrant-cyan via-vibrant-magenta to-vibrant-orange rounded-full" />
          </div>
        </motion.div>

        {/* Main headline - clear, bold, readable */}
        <motion.h1
          variants={textVariants}
          className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight md:leading-tight text-neutral-text mb-6 md:mb-8 font-light"
        >
          Every human deserves
          <br />
          <motion.span 
            className="inline-block relative"
            animate={reduce ? {} : { y: [0, -2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            their moment.
          </motion.span>
        </motion.h1>

        {/* Subheading - clear secondary text */}
        <motion.p
          variants={textVariants}
          className="text-lg md:text-xl text-neutral-text-secondary max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          We're building the infrastructure for genuine human connection—where talent finds opportunity, organizations create impact, and inclusion becomes natural.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={textVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
        >
          <motion.a
            whileHover={reduce ? {} : { y: -3, scale: 1.05 }}
            whileTap={reduce ? {} : { scale: 0.96 }}
            href="/ablehires"
            className="px-8 md:px-10 py-4 md:py-5 rounded-full font-sans font-semibold text-base md:text-lg text-white bg-gradient-to-br from-vibrant-cyan to-vibrant-cyan-dark shadow-lg hover:shadow-vibrant-cyan/50 transition-all duration-300"
          >
            Begin your journey
          </motion.a>
          <motion.a
            whileHover={reduce ? {} : { y: -3, scale: 1.05 }}
            whileTap={reduce ? {} : { scale: 0.96 }}
            href="#story"
            className="px-8 md:px-10 py-4 md:py-5 rounded-full font-sans font-semibold text-base md:text-lg text-white bg-gradient-to-br from-vibrant-magenta to-vibrant-magenta-dark shadow-lg hover:shadow-vibrant-magenta/50 transition-all duration-300"
          >
            Our story
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={reduce ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-text-secondary text-xs"
        >
          <span>Scroll to explore</span>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
