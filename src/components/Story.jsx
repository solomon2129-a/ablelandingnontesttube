import React, { useState, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

export default function Story() {
  const reduce = useReducedMotion()
  const [hoveredCard, setHoveredCard] = useState(null)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <section id="story" className="relative py-32 md:py-40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden" ref={containerRef}>
      {/* Artistic animated background with blobs */}
      <motion.div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-pink-500 via-purple-500 to-transparent blur-3xl opacity-30 mix-blend-screen"
        animate={reduce ? {} : {
          y: [0, -80, 0],
          x: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -bottom-40 -left-40 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-amber-500 via-orange-400 to-transparent blur-3xl opacity-25 mix-blend-overlay"
        animate={reduce ? {} : {
          y: [0, 60, 0],
          x: [0, -40, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <motion.div
        className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full bg-gradient-to-bl from-cyan-400 to-transparent blur-3xl opacity-20 mix-blend-screen"
        animate={reduce ? {} : {
          scale: [1, 1.3, 1],
          x: [0, 30, 0]
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-16 md:space-y-24"
        >
          {/* Section intro - artistic and bold */}
          <motion.div variants={itemVariants} className="max-w-4xl">
            <motion.p 
              className="text-sm tracking-widest text-white/50 uppercase font-bold mb-4 flex items-center gap-2"
              animate={reduce ? {} : { opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.span 
                className="w-8 h-1 bg-gradient-to-r from-pink-400 to-amber-400 rounded-full"
                animate={reduce ? {} : { width: [32, 48, 32] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Our Story
            </motion.p>
            <h2 className="font-black text-5xl md:text-7xl leading-tight text-white mb-6">
              We believe
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-amber-400"
                animate={reduce ? {} : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                opportunity shouldn't be rare.
              </motion.span>
            </h2>
            <motion.p 
              className="text-xl text-white/70 font-light leading-relaxed max-w-2xl"
              style={{ y }}
            >
              Talent lives everywhere. Opportunity? It's bottlenecked, gatekept, and invisible to the billions who could change the world. We're dismantling that.
            </motion.p>
          </motion.div>

          {/* Three pillars - artistic asymmetrical cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: "✨",
                title: "Hidden Brilliance",
                description: "Talent is everywhere, suppressed by geography and circumstance. We see what's invisible to others.",
                color: "from-pink-500 to-rose-600",
                delay: 0
              },
              {
                icon: "🔗",
                title: "Broken Bridges",
                description: "Organizations and communities work in isolated silos. There's no infrastructure connecting them. We're fixing that.",
                color: "from-purple-500 to-violet-600",
                delay: 0.15
              },
              {
                icon: "🎯",
                title: "Real Impact",
                description: "Diversity is performative. We measure what matters: outcomes, growth, and genuine systems change.",
                color: "from-amber-500 to-orange-600",
                delay: 0.3
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group"
                onHoverStart={() => setHoveredCard(idx)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <motion.div
                  whileHover={reduce ? {} : { 
                    y: -8,
                    boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-xl overflow-hidden group"
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}
                  />

                  {/* Top accent line */}
                  <motion.div 
                    className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${item.color}`}
                    initial={{ width: 0 }}
                    animate={hoveredCard === idx && !reduce ? { width: "100%" } : { width: "60%" }}
                    transition={{ duration: 0.4 }}
                  />

                  <div className="relative space-y-4 z-10">
                    <motion.div 
                      className="flex items-start justify-between"
                      animate={hoveredCard === idx && !reduce ? { x: 4 } : { x: 0 }}
                    >
                      <motion.span 
                        className="text-5xl"
                        animate={hoveredCard === idx && !reduce ? { scale: 1.2, rotate: 8 } : { scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.icon}
                      </motion.span>
                      <motion.div
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-amber-400"
                        animate={hoveredCard === idx && !reduce ? { scale: 1.5, opacity: 1 } : { scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>

                    <motion.h3 
                      className="font-black text-2xl text-white"
                      animate={hoveredCard === idx && !reduce ? { x: 4, scale: 1.05 } : { x: 0, scale: 1 }}
                    >
                      {item.title}
                    </motion.h3>

                    <motion.p 
                      className="text-white/70 leading-relaxed"
                      animate={hoveredCard === idx && !reduce ? { x: 4 } : { x: 0 }}
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bridge section - artistic divider */}
          <motion.div variants={itemVariants} className="text-center py-12 md:py-16">
            <motion.div 
              className="flex items-center justify-center gap-4 mb-8"
            >
              <motion.div 
                className="h-1 bg-gradient-to-r from-transparent to-pink-400"
                animate={reduce ? {} : { width: [40, 60, 40] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-400 to-amber-400"
                animate={reduce ? {} : { scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="h-1 bg-gradient-to-l from-transparent to-amber-400"
                animate={reduce ? {} : { width: [40, 60, 40] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <motion.h3 
              className="text-3xl md:text-4xl font-black text-white"
              animate={reduce ? {} : { 
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              So we built something different.
            </motion.h3>
          </motion.div>

          {/* Solution section - bold vision */}
          <motion.div variants={itemVariants} className="max-w-4xl">
            <h2 className="font-black text-5xl md:text-6xl leading-tight text-white mb-8">
              A platform that
              <motion.span 
                className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-pink-300 to-amber-300"
                animate={reduce ? {} : { 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                actually works.
              </motion.span>
            </h2>
            <motion.ul className="space-y-6 text-lg text-white/70 font-light">
              {[
                "Connects hidden talent with organizations that value them",
                "Creates real partnership between nonprofits and enterprises",
                "Measures impact with rigor and transparency",
                "Makes inclusion systemic, not performative"
              ].map((item, idx) => (
                <motion.li 
                  key={idx}
                  className="flex items-start gap-4"
                  animate={reduce ? {} : { 
                    x: [0, 4, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: idx * 0.3 }}
                >
                  <motion.span 
                    className="text-pink-400 font-bold text-xl flex-shrink-0 mt-1"
                    animate={reduce ? {} : { scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                  >
                    ✦
                  </motion.span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
