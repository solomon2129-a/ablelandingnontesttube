import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function HowItWorks(){
  const reduce = useReducedMotion()

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
      description: "Talent profiles are carefully assessed and graded—not through cold metrics, but through genuine human evaluation."
    },
    {
      icon: "🔗",
      number: "2",
      title: "Connected",
      description: "Matched with opportunities that fit their skills, values, and aspirations. Real connections with real organizations."
    },
    {
      icon: "📈",
      number: "3",
      title: "Tracked",
      description: "Impact is measured transparently. Organizations see real outcomes. Talent sees real progress."
    },
    {
      icon: "🌱",
      number: "4",
      title: "Thrives",
      description: "When infrastructure works, humans flourish. Careers blossom. Organizations find meaning in inclusion."
    }
  ]

  return (
    <section className="relative py-24 md:py-32 bg-neutral-bg overflow-hidden">
      {/* Subtle accent blob - far background */}
      <motion.div 
        animate={reduce ? {} : { y: [0, -50, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-lavender-500 to-transparent blur-3xl opacity-8"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-16"
        >
          {/* Header - clear, readable */}
          <motion.div variants={itemVariants} className="text-center max-w-2xl mx-auto">
            <p className="text-sm tracking-widest text-neutral-text-secondary uppercase font-semibold mb-4">The Process</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-neutral-text font-light mb-6">
              From invisible to unstoppable
            </h2>
            <p className="text-lg text-neutral-text-secondary font-normal">
              Simple steps. Genuine care. Real transformation.
            </p>
          </motion.div>

          {/* Steps - Clean cards with color accents */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 pt-12">
            {steps.map((step, idx) => {
              const gradients = ['from-blush-500', 'from-lavender-500', 'from-sky-500', 'from-sage-500']
              const gradientTo = ['to-blush-600', 'to-lavender-600', 'to-sky-600', 'to-sage-600']
              
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative rounded-2xl bg-neutral-surface border border-neutral-border hover:shadow-md transition-all"
                  >
                    {/* Left accent stripe */}
                    <div className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${gradients[idx]} ${gradientTo[idx]} rounded-l-2xl`} />
                    
                    <div className="relative p-8 md:p-6 pl-6">
                      {/* Icon with gradient fill */}
                      <div className="text-4xl mb-4">
                        <span className={`inline-block bg-gradient-to-r ${gradients[idx]} ${gradientTo[idx]} bg-clip-text text-transparent`}>{step.icon}</span>
                      </div>
                      {/* Step number */}
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="font-serif text-3xl text-neutral-text font-semibold">{step.number}</span>
                        <span className="text-xs font-normal text-neutral-text-secondary uppercase tracking-widest">Step</span>
                      </div>
                      {/* Title */}
                      <h3 className="font-serif text-xl text-neutral-text font-light mb-2">
                        {step.title}
                      </h3>
                      {/* Description */}
                      <p className="text-base text-neutral-text-secondary font-normal leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-8"
          >
            <motion.a
              whileHover={reduce ? {} : { y: -2, scale: 1.02 }}
              whileTap={reduce ? {} : { scale: 0.98 }}
              href="/ablehires"
              className="inline-block px-8 py-4 rounded-full font-sans font-semibold text-lg text-white bg-gradient-to-br from-blush-500 to-blush-600 shadow-md hover:shadow-lg transition-all"
            >
              Start your journey
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
