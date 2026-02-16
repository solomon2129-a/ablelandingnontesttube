import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function InteractiveElements() {
  const [activeTab, setActiveTab] = useState(0)
  const [hoveredCard, setHoveredCard] = useState(null)

  const tabs = [
    { label: 'Features', color: 'vibrant-cyan' },
    { label: 'Solutions', color: 'vibrant-magenta' },
    { label: 'Benefits', color: 'vibrant-orange' }
  ]

  const features = [
    { title: 'Real-time Connection', icon: '⚡', color: 'vibrant-cyan' },
    { title: 'Secure & Private', icon: '🔒', color: 'vibrant-magenta' },
    { title: 'Scalable', icon: '📈', color: 'vibrant-orange' }
  ]

  return (
    <section className="py-20 px-6 md:px-12 bg-neutral-bg">
      {/* Vibrant Tab Navigation */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="flex gap-4 justify-center mb-12">
          {tabs.map((tab, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === idx
                  ? `text-white shadow-lg`
                  : 'text-neutral-text-secondary border-2 border-neutral-border'
              }`}
              style={activeTab === idx ? {
                background: idx === 0 
                  ? 'linear-gradient(135deg, #00D4FF, #00A8CC)'
                  : idx === 1
                  ? 'linear-gradient(135deg, #FF00CC, #CC0099)'
                  : 'linear-gradient(135deg, #FF8C00, #CC7000)'
              } : {}}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Interactive Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-serif mb-6 text-gradient-vibrant">
            {tabs[activeTab].label}
          </h3>
          <p className="text-neutral-text-secondary text-lg leading-relaxed">
            {activeTab === 0 && 'Connect with talented individuals and organizations in real-time, creating opportunities for meaningful collaboration.'}
            {activeTab === 1 && 'Your data is protected with enterprise-grade security while maintaining complete privacy and control.'}
            {activeTab === 2 && 'Build and scale your network without limitations, from individual users to millions of connections.'}
          </p>
        </motion.div>
      </div>

      {/* Interactive Feature Cards */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-gradient-vibrant">
          Interactive Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              onHoverStart={() => setHoveredCard(idx)}
              onHoverEnd={() => setHoveredCard(null)}
              className="card-vibrant cursor-pointer group"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Vibrant glow effect on hover */}
              {hoveredCard === idx && (
                <motion.div
                  className="absolute inset-0 rounded-2xl -z-10"
                  style={{
                    background: idx === 0 
                      ? 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(0, 168, 204, 0.1))'
                      : idx === 1
                      ? 'linear-gradient(135deg, rgba(255, 0, 204, 0.2), rgba(204, 0, 153, 0.1))'
                      : 'linear-gradient(135deg, rgba(255, 140, 0, 0.2), rgba(204, 112, 0, 0.1))'
                  }}
                  animate={{ blur: '12px' }}
                  transition={{ duration: 0.3 }}
                />
              )}
              
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-neutral-text mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-text-secondary text-sm">
                Experience seamless {feature.title.toLowerCase()} with our cutting-edge platform.
              </p>
              
              {/* Vibrant accent line */}
              <motion.div
                className="h-1 rounded-full mt-4"
                initial={{ width: 0 }}
                animate={{ width: hoveredCard === idx ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: idx === 0 
                    ? '#00D4FF'
                    : idx === 1
                    ? '#FF00CC'
                    : '#FF8C00'
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Toggle/Switch Element */}
      <div className="max-w-2xl mx-auto mt-20 p-8 bg-white/60 backdrop-blur-md rounded-2xl border border-white/30">
        <h3 className="text-2xl font-serif mb-8 text-gradient-vibrant">
          Choose Your Path
        </h3>
        
        <div className="flex gap-4 justify-center items-center">
          {['Individual', 'Organization'].map((item, idx) => (
            <React.Fragment key={idx}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full font-semibold transition-all"
                style={{
                  background: activeTab === idx 
                    ? (idx === 0 
                      ? 'linear-gradient(135deg, #00D4FF, #00A8CC)'
                      : 'linear-gradient(135deg, #FF00CC, #CC0099)')
                    : 'transparent',
                  color: activeTab === idx ? 'white' : '#5A5A5A',
                  border: activeTab === idx ? 'none' : '2px solid #E8DFD3'
                }}
                onClick={() => setActiveTab(idx)}
              >
                {item}
              </motion.button>
              {idx === 0 && (
                <div className="h-8 w-1 bg-gradient-to-b from-vibrant-cyan to-vibrant-magenta rounded-full" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
