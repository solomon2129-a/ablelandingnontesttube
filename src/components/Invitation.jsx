import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function Invitation(){
  const reduce = useReducedMotion()
  const [hoveredCard, setHoveredCard] = useState(null)

  const containerVariants = {
    hidden: reduce ? {} : { opacity: 0 },
    visible: reduce ? {} : {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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

  const roles = [
    {
      id: 'talent',
      title: 'For Talent',
      subtitle: 'Seeking clarity and opportunity',
      description: 'Show the world what you can do. Get matched with roles that value you. No algorithms, no luck—real verification, real connections.',
      cta: 'Find your fit',
      href: '/ablehires',
      icon: '⚡'
    },
    {
      id: 'ngo',
      title: 'For NGOs & Facilities',
      subtitle: 'Building futures together',
      description: 'Connect the talent you know with opportunities they deserve. Measure impact that matters. Build infrastructure that lasts.',
      cta: 'Partner with us',
      href: '/partner',
      icon: '🤝'
    },
    {
      id: 'corporate',
      title: 'For Organizations',
      subtitle: 'Building real inclusion',
      description: 'Access verified talent. Move beyond checking boxes. Create genuine impact. Build teams that reflect the world.',
      cta: "Let's talk",
      href: '/contact',
      icon: '🌍'
    }
  ]

  return (
    <section id="roles" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-gold-100/50 to-cream-100" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-sky-200 to-transparent rounded-full blur-3xl opacity-25 -mr-48" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-sage-200 to-transparent rounded-full blur-3xl opacity-20 -mb-48" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <p className="text-sm tracking-widest text-warm-taupe uppercase font-light mb-4">Join us</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-warm-taupe font-light mb-6">
              You belong here
            </h2>
            <p className="text-lg text-warm-gray font-light">
              Whether you're seeking opportunity, building community, or creating real change—there's a place for you in this infrastructure.
            </p>
          </motion.div>

          {/* Three cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {roles.map((role, idx) => {
              const cardColors = ['blush', 'lavender', 'sky']
              const cardColor = cardColors[idx]
              const bgGradients = [
                'from-blush-300/30 to-blush-100/20',
                'from-lavender-300/30 to-lavender-100/20',
                'from-sky-300/30 to-sky-100/20'
              ]
              const hoverGradients = [
                'from-blush-200/60 to-blush-100/40',
                'from-lavender-200/60 to-lavender-100/40',
                'from-sky-200/60 to-sky-100/40'
              ]
              const floatingGradients = [
                'from-blush-400 to-transparent',
                'from-lavender-400 to-transparent',
                'from-sky-400 to-transparent'
              ]
              const subtitleColors = ['blush-500', 'lavender-500', 'sky-500']
              const ctaColors = ['blush-500', 'lavender-500', 'sky-500']
              const hoverCtaColors = ['blush-400', 'lavender-400', 'sky-400']
              const borderColors = ['blush-300', 'lavender-300', 'sky-300']
              
              return (
                <motion.div
                  key={role.id}
                  variants={itemVariants}
                  onHoverStart={() => !reduce && setHoveredCard(role.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group relative"
                >
                  <motion.div
                    initial={{ opacity: 0, rotateY: 10 }}
                    whileInView={{ opacity: 1, rotateY: 0 }}
                    whileHover={reduce ? {} : { y: -8 }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative h-full overflow-hidden rounded-3xl"
                  >
                    {/* Card background */}
                    <div className="absolute inset-0">
                      <div className={`absolute inset-0 bg-gradient-to-br ${bgGradients[idx]} backdrop-blur-md`} />
                      <motion.div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${hoverGradients[idx]}`}
                        animate={hoveredCard === role.id && !reduce ? { scale: [1, 1.1] } : { scale: 1 }}
                        transition={{ duration: 0.7 }}
                      />
                      <div className={`absolute inset-0 rounded-3xl border border-white/60 group-hover:border-${borderColors[idx]}/60 transition-colors duration-500`} />
                    </div>

                    {/* Floating accent */}
                    <motion.div
                      className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-bl ${floatingGradients[idx]} blur-3xl opacity-40 group-hover:scale-150 group-hover:opacity-60`}
                      transition={{ duration: 0.7 }}
                    />

                    {/* Content */}
                    <div className="relative z-10 p-8 md:p-8 h-full flex flex-col justify-between">
                      {/* Icon */}
                      <motion.div
                        className="text-5xl mb-4"
                        animate={hoveredCard === role.id && !reduce ? { scale: 1.2, y: -4 } : { scale: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {role.icon}
                      </motion.div>

                      {/* Title */}
                      <div className="mb-6">
                        <h3 className="font-serif text-2xl text-warm-taupe font-light mb-2">
                          {role.title}
                        </h3>
                        <p className={`text-sm text-${subtitleColors[idx]} font-light`}>
                          {role.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-base text-warm-gray font-light leading-relaxed mb-8 flex-grow">
                        {role.description}
                      </p>

                      {/* CTA Button */}
                      <motion.a
                        whileHover={reduce ? {} : { x: 4 }}
                        href={role.href}
                        className={`inline-flex items-center gap-2 text-${ctaColors[idx]} font-light hover:text-${hoverCtaColors[idx]} transition-colors group/link`}
                      >
                        <span>{role.cta}</span>
                        <motion.svg
                          className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </motion.svg>
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom message */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-12 border-t border-warm-taupe/10"
          >
            <p className="text-lg text-warm-taupe font-light max-w-2xl mx-auto mb-6">
              Questions? We're here to chat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                whileHover={reduce ? {} : { y: -2, scale: 1.02 }}
                whileTap={reduce ? {} : { scale: 0.98 }}
                href="mailto:abledots.official@gmail.com"
                className="inline-block px-6 py-3 rounded-full text-warm-taupe border border-warm-taupe/20 hover:border-warm-taupe/50 hover:bg-warm-taupe/5 transition-all font-light"
              >
                abledots.official@gmail.com
              </motion.a>
              <motion.a
                whileHover={reduce ? {} : { y: -2, scale: 1.02 }}
                whileTap={reduce ? {} : { scale: 0.98 }}
                href="tel:+919591562286"
                className="inline-block px-6 py-3 rounded-full text-warm-taupe border border-warm-taupe/20 hover:border-warm-taupe/50 hover:bg-warm-taupe/5 transition-all font-light"
              >
                +91 95915 62286
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
