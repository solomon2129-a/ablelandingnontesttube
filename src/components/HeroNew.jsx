import React, { useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const bgY = useTransform(scrollYProgress, [0, 0.5], [0, -150])
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -200])

  const handleMouseMove = (e) => {
    if (reduce || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 25,
      y: (e.clientY - rect.top - rect.height / 2) / 25
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32"
    >
      {/* Animated background with artistic blobs */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        {/* Base gradient - bold artistic foundation */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />

        {/* Large animated blob - top right */}
        <motion.div
          animate={reduce ? {} : {
            y: [0, -60, 0],
            x: [0, 50, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 45, 90]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-96 -right-96 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-transparent blur-3xl opacity-35 mix-blend-screen"
        />

        {/* Animated blob - bottom left */}
        <motion.div
          animate={reduce ? {} : {
            y: [0, 80, 0],
            x: [0, -50, 0],
            scale: [1, 1.2, 1],
            rotate: [0, -90, -180]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute -bottom-96 -left-96 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-amber-500 via-orange-400 to-transparent blur-3xl opacity-30 mix-blend-overlay"
        />

        {/* Accent blob - center */}
        <motion.div
          animate={reduce ? {} : {
            scale: [1, 1.5, 1],
            opacity: [0.25, 0.5, 0.25]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 left-1/3 w-[450px] h-[450px] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 blur-3xl opacity-20 mix-blend-lighten"
        />

        {/* Subtle accent blob - right side */}
        <motion.div
          animate={reduce ? {} : {
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-gradient-to-bl from-cyan-400 to-transparent blur-3xl opacity-25 mix-blend-screen"
        />
      </motion.div>

      {/* Decorative animated shapes */}
      <motion.div
        className="absolute top-40 left-8 w-24 h-24 border-2 border-pink-400 rounded-xl opacity-30"
        animate={reduce ? {} : {
          rotate: [0, 45, 90, 135, 180],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute bottom-32 right-16 w-20 h-20 rounded-full border-2 border-amber-400 opacity-25"
        animate={reduce ? {} : {
          scale: [1, 1.5, 1],
          rotate: [0, -360]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-br from-violet-500 to-pink-500 rounded-lg opacity-20"
        animate={reduce ? {} : {
          y: [0, -40, 0],
          rotate: [0, 25, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-32 right-20 w-16 h-16 bg-amber-300 rounded-full opacity-50"
        animate={reduce ? {} : { 
          scale: [1, 1.5, 1],
          rotate: [0, -180, -360]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content - Asymmetrical layout */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12"
        style={{
          x: reduce ? 0 : mousePosition.x,
          y: reduce ? 0 : mousePosition.y
        }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - bold text */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: -50 }}
            animate={reduce ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-4 flex items-center gap-3"
            >
              <motion.div
                animate={reduce ? {} : { rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-3 h-3 bg-cyan-300 rounded-full"
              />
              <span className="text-white text-sm font-bold uppercase tracking-widest">Creative Studio</span>
            </motion.div>

            {/* Main headline - BOLD and artistic */}
            <motion.h1
              initial={reduce ? {} : { opacity: 0, y: 30 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 font-sans"
            >
              We Build{' '}
              <motion.span
                className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-pink-300 to-amber-300"
                animate={reduce ? {} : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                Experiences
              </motion.span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-white/80 font-light mb-8 max-w-md leading-relaxed"
            >
              Not platforms. Not infrastructure. Just beautiful, meaningful human connection through bold creative direction.
            </motion.p>

            {/* CTA Buttons - Playful */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              animate={reduce ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={reduce ? {} : { 
                  scale: 1.12,
                  boxShadow: "0 30px 60px rgba(34, 211, 238, 0.6)",
                  y: -4
                }}
                whileTap={reduce ? {} : { scale: 0.96 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold rounded-full shadow-2xl relative overflow-hidden group text-lg"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/30"
                  initial={{ x: "-100%" }}
                  whileHover={reduce ? {} : { x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative">Start Creating</span>
              </motion.button>

              <motion.button
                whileHover={reduce ? {} : { 
                  scale: 1.1,
                  y: -2
                }}
                whileTap={reduce ? {} : { scale: 0.96 }}
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg backdrop-blur-sm"
              >
                Our Work
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - Visual element */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: 50 }}
            animate={reduce ? {} : { opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 relative h-96 md:h-full"
          >
            {/* Floating cards with artistic shapes */}
            <motion.div
              className="absolute top-0 left-0 w-48 h-64 bg-gradient-to-br from-pink-400 to-rose-600 rounded-3xl shadow-2xl"
              animate={reduce ? {} : { 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute bottom-0 right-0 w-56 h-56 bg-gradient-to-tl from-amber-400 to-orange-500 rounded-3xl shadow-2xl"
              animate={reduce ? {} : { 
                y: [0, 20, 0],
                rotate: [0, -4, 0]
              }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <motion.div
              className="absolute top-32 -right-8 w-40 h-40 bg-gradient-to-br from-cyan-300 to-blue-500 rounded-full shadow-2xl opacity-80"
              animate={reduce ? {} : { 
                scale: [1, 1.3, 1],
                x: [0, 10, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator - Center bottom with playful animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        animate={reduce ? {} : { y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="w-1 h-8 rounded-full bg-gradient-to-b from-white to-white/20"
          animate={reduce ? {} : { scaleY: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.span 
          className="text-white text-xs font-bold uppercase tracking-widest"
          animate={reduce ? {} : { opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Explore
        </motion.span>
      </motion.div>
    </section>
  )
}
