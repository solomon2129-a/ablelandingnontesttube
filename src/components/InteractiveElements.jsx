import React, { useState } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'

export default function InteractiveElements() {
  const reduce = useReducedMotion()
  const [activeTab, setActiveTab] = useState(0)
  const [hoveredCard, setHoveredCard] = useState(null)

  const tabs = [
    { label: 'Features', icon: '⚡', color: 'from-pink-500 to-rose-600' },
    { label: 'Experience', icon: '✨', color: 'from-purple-500 to-violet-600' },
    { label: 'Impact', icon: '🎯', color: 'from-amber-500 to-orange-600' }
  ]

  const features = [
    { 
      title: 'Instant Connection', 
      icon: '⚡', 
      color: 'from-pink-500 to-rose-600',
      desc: 'Real-time matching with verified opportunities and talent' 
    },
    { 
      title: 'Transparent Trust', 
      icon: '🔐', 
      color: 'from-purple-500 to-violet-600',
      desc: 'Enterprise security with complete privacy and control' 
    },
    { 
      title: 'Infinite Scale', 
      icon: '📈', 
      color: 'from-amber-500 to-orange-600',
      desc: 'Grow from individuals to millions without limits' 
    }
  ]

  return (
    <section className="relative py-32 md:py-40 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden">
      {/* Artistic animated background blobs */}
      <motion.div 
        animate={reduce ? {} : { 
          y: [0, -60, 0],
          x: [0, 40, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-pink-500 via-purple-500 to-transparent blur-3xl opacity-30 mix-blend-screen"
      />
      <motion.div 
        animate={reduce ? {} : { 
          y: [0, 50, 0],
          x: [0, -40, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute -bottom-40 -left-32 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-amber-500 via-orange-400 to-transparent blur-3xl opacity-25 mix-blend-overlay"
      />

      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.p 
            className="text-sm tracking-widest text-white/50 uppercase font-bold mb-4 flex items-center justify-center gap-2"
            animate={reduce ? {} : { opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.span 
              className="w-8 h-1 bg-gradient-to-r from-pink-400 to-amber-400 rounded-full"
              animate={reduce ? {} : { width: [32, 48, 32] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Interactive Powers
          </motion.p>
          <h2 className="font-black text-5xl md:text-6xl text-white mb-6 leading-tight">
            What makes us
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-amber-400"
              animate={reduce ? {} : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              different.
            </motion.span>
          </h2>
        </motion.div>

        {/* Tab Navigation - artistic and playful */}
        <motion.div 
          className="flex gap-4 justify-center mb-16 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {tabs.map((tab, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className="relative group"
              whileHover={reduce ? {} : { scale: 1.1, y: -4 }}
              whileTap={reduce ? {} : { scale: 0.95 }}
            >
              <div className="relative px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-2">
                <span className="text-2xl">{tab.icon}</span>
                <span className="text-white">{tab.label}</span>
              </div>

              {/* Active tab animated background */}
              <AnimatePresence>
                {activeTab === idx && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute inset-0 rounded-full -z-10 bg-gradient-to-r ${tab.color} shadow-xl`}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </AnimatePresence>

              {/* Inactive tab border */}
              {activeTab !== idx && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/30 group-hover:border-white/60 -z-10 transition-all"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Content Area with tab switching */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className={`relative p-10 md:p-14 rounded-3xl bg-gradient-to-br ${tabs[activeTab].color} overflow-hidden mb-20`}
        >
          {/* Background pattern */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={reduce ? {} : { 
              backgroundPosition: ["0% 0%", "100% 100%"]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, white 0%, transparent 50%)",
              backgroundRepeat: "repeat"
            }}
          />

          <div className="relative z-10 text-white">
            <motion.h3 
              className="text-4xl md:text-5xl font-black mb-6"
              animate={reduce ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {tabs[activeTab].label}
            </motion.h3>

            <motion.p 
              className="text-xl leading-relaxed max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {activeTab === 0 && 'We connect brilliant people with transformative opportunities in real-time, cutting through noise to create meaningful matches instantly.'}
              {activeTab === 1 && 'Every interaction is crafted to feel intuitive, empowering, and alive. We obsess over the details that make platforms actually feel good to use.'}
              {activeTab === 2 && 'Measure what matters. See real outcomes. Build systems that change lives, not just dashboards that look impressive.'}
            </motion.p>

            {/* Decorative dots */}
            <div className="flex gap-3 mt-8">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 rounded-full bg-white/40"
                  animate={reduce ? {} : { scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Feature Cards - artistic grid */}
        <motion.div>
          <motion.h3 
            className="text-3xl md:text-4xl font-black text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-amber-400">Capabilities</span>
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                onHoverStart={() => setHoveredCard(idx)}
                onHoverEnd={() => setHoveredCard(null)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                whileHover={reduce ? {} : { y: -12, scale: 1.03 }}
                className="group relative"
              >
                <motion.div
                  className={`relative p-10 rounded-3xl bg-gradient-to-br ${feature.color} overflow-hidden`}
                >
                  {/* Animated background texture */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    animate={hoveredCard === idx && !reduce ? {
                      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
                    } : {}}
                    transition={{ duration: 6 }}
                    style={{
                      backgroundImage: "linear-gradient(45deg, white 25%, transparent 25%, transparent 75%, white 75%, white), linear-gradient(45deg, white 25%, transparent 25%, transparent 75%, white 75%, white)",
                      backgroundSize: "40px 40px",
                      backgroundPosition: "0 0, 20px 20px",
                      backgroundRepeat: "repeat"
                    }}
                  />

                  <div className="relative z-10">
                    <motion.div 
                      className="text-6xl mb-6"
                      animate={hoveredCard === idx && !reduce ? { 
                        scale: 1.3, 
                        rotate: 12,
                        y: -8
                      } : { 
                        scale: 1, 
                        rotate: 0,
                        y: 0
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {feature.icon}
                    </motion.div>

                    <motion.h4 
                      className="text-2xl font-black text-white mb-4"
                      animate={hoveredCard === idx && !reduce ? { x: 6 } : { x: 0 }}
                    >
                      {feature.title}
                    </motion.h4>

                    <motion.p 
                      className="text-white/80 font-light text-lg leading-relaxed mb-6"
                      animate={hoveredCard === idx && !reduce ? { x: 6 } : { x: 0 }}
                    >
                      {feature.desc}
                    </motion.p>

                    {/* Animated bottom accent */}
                    <motion.div 
                      className="h-1 rounded-full bg-white/30"
                      animate={hoveredCard === idx && !reduce ? { 
                        width: "100%",
                        backgroundColor: "rgba(255, 255, 255, 0.8)"
                      } : { 
                        width: "40%",
                        backgroundColor: "rgba(255, 255, 255, 0.3)"
                      }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
