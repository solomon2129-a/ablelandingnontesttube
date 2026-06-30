import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function HowItWorks(){
  const reduce = useReducedMotion()
  const [hoveredStep, setHoveredStep] = useState(null)

  const containerVariants = {
    hidden: reduce ? {} : { opacity: 0 },
    visible: reduce ? {} : {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: reduce ? {} : { opacity: 0, y: 20 },
    visible: reduce ? {} : {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const steps = [
    {
      icon: "✨",
      number: "1",
      title: "Verified",
      description: "Talent profiles are carefully assessed and graded—not through cold metrics, but through genuine human evaluation.",
      color: "from-vibrant-cyan",
      colorTo: "to-vibrant-cyan-dark"
    },
    {
      icon: "🔗",
      number: "2",
      title: "Connected",
      description: "Matched with opportunities that fit their skills, values, and aspirations. Real connections with real organizations.",
      color: "from-vibrant-magenta",
      colorTo: "to-vibrant-magenta-dark"
    },
    {
      icon: "📈",
      number: "3",
      title: "Tracked",
      description: "Impact is measured transparently. Organizations see real outcomes. Talent sees real progress.",
      color: "from-vibrant-orange",
      colorTo: "to-vibrant-orange-dark"
    },
    {
      icon: "🌱",
      number: "4",
      title: "Thrives",
      description: "When infrastructure works, humans flourish. Careers blossom. Organizations find meaning in inclusion.",
      color: "from-blush-500",
      colorTo: "to-blush-600"
    }
  ]

  return (
    <section className="relative py-24 md:py-32 bg-neutral-bg overflow-hidden">
      {/* Animated accent blobs */}
      <motion.div 
        animate={reduce ? {} : { 
          y: [0, -50, 0],
          x: [0, 20, 0]
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-lavender-500 to-transparent blur-3xl opacity-12 mix-blend-screen"
      />
      <motion.div 
        animate={reduce ? {} : { 
          y: [0, 30, 0],
          x: [0, -20, 0]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full bg-gradient-to-tl from-sky-500/20 to-transparent blur-3xl opacity-10 mix-blend-screen"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-16"
        >
          {/* Header - enhanced styling */}
          <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto">
            <motion.p 
              className="text-sm tracking-widest text-neutral-text-secondary uppercase font-semibold mb-4"
              animate={reduce ? {} : { opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              The Process
            </motion.p>
            <motion.h2 
              className="font-serif text-4xl md:text-5xl leading-tight text-neutral-text font-light mb-6"
            >
              From invisible to 
              <motion.span 
                className="block bg-gradient-to-r from-vibrant-cyan via-vibrant-magenta to-vibrant-orange bg-clip-text text-transparent"
                animate={reduce ? {} : { 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                unstoppable
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-lg text-neutral-text-secondary font-normal"
              animate={reduce ? {} : { opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Simple steps. Genuine care. Real transformation.
            </motion.p>
          </motion.div>

          {/* Steps - Enhanced interactive cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 pt-12">
            {steps.map((step, idx) => {
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group"
                  onHoverStart={() => setHoveredStep(idx)}
                  onHoverEnd={() => setHoveredStep(null)}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={reduce ? {} : { 
                      y: -4,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)"
                    }}
                    className="relative rounded-3xl bg-gradient-to-br from-neutral-surface to-neutral-bg border border-neutral-border hover:border-neutral-text/20 transition-all duration-300 overflow-hidden"
                  >
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${step.color} ${step.colorTo} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    {/* Top accent stripe */}
                    <motion.div 
                      className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${step.color} ${step.colorTo}`}
                      animate={hoveredStep === idx && !reduce ? { scaleX: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.5 }}
                    />
                    
                    <div className="relative p-8 md:p-8">
                      {/* Icon with animation */}
                      <motion.div 
                        className="text-5xl mb-6 inline-block"
                        animate={hoveredStep === idx && !reduce ? { 
                          scale: 1.2, 
                          rotate: 8,
                          y: -4
                        } : { scale: 1, rotate: 0, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.icon}
                      </motion.div>

                      {/* Step number and label */}
                      <div className="flex items-baseline gap-3 mb-4">
                        <motion.span 
                          className={`font-serif text-5xl font-light bg-gradient-to-br ${step.color} ${step.colorTo} bg-clip-text text-transparent`}
                          animate={hoveredStep === idx && !reduce ? { scale: 1.1, x: 4 } : { scale: 1, x: 0 }}
                        >
                          {step.number}
                        </motion.span>
                        <motion.span 
                          className="text-xs font-semibold text-neutral-text-secondary uppercase tracking-widest"
                          animate={hoveredStep === idx && !reduce ? { x: 4 } : { x: 0 }}
                        >
                          Step
                        </motion.span>
                      </div>

                      {/* Title */}
                      <motion.h3 
                        className="font-serif text-2xl text-neutral-text font-light mb-3"
                        animate={hoveredStep === idx && !reduce ? { x: 4 } : { x: 0 }}
                      >
                        {step.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p 
                        className="text-base text-neutral-text-secondary font-normal leading-relaxed"
                        animate={hoveredStep === idx && !reduce ? { x: 4 } : { x: 0 }}
                      >
                        {step.description}
                      </motion.p>

                      {/* Hover indicator dot */}
                      <motion.div
                        className={`absolute bottom-6 right-6 w-3 h-3 rounded-full bg-gradient-to-r ${step.color} ${step.colorTo}`}
                        animate={hoveredStep === idx && !reduce ? { scale: 1.5, opacity: 1 } : { scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA with enhanced styling */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-12"
          >
            <motion.a
              whileHover={reduce ? {} : { 
                y: -3, 
                scale: 1.08,
                boxShadow: "0 20px 40px rgba(255, 107, 74, 0.3)"
              }}
              whileTap={reduce ? {} : { scale: 0.96 }}
              href="/ablehires"
              className="inline-block px-8 md:px-10 py-4 md:py-5 rounded-full font-sans font-semibold text-lg text-white bg-gradient-to-br from-blush-500 to-blush-600 shadow-lg backdrop-blur-sm border border-blush-400/20 hover:border-blush-400/50 transition-all duration-300 group"
            >
              <span className="relative z-10">Get Started Today</span>
              <motion.svg
                className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </motion.svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
