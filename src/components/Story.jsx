import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function Story(){
  const reduce = useReducedMotion()

  const containerVariants = {
    hidden: reduce ? {} : { opacity: 0 },
    visible: reduce ? {} : {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="story" className="relative py-24 md:py-32 bg-neutral-bg overflow-hidden">
      {/* Subtle gradient accent blob - far background */}
      <motion.div 
        animate={reduce ? {} : { y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 right-1/4 w-96 h-96 rounded-full bg-gradient-to-bl from-sky-500 to-transparent blur-3xl opacity-8"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-16 md:space-y-24"
        >
          {/* Section intro - clear, readable text */}
          <motion.div variants={itemVariants} className="max-w-3xl">
            <p className="text-sm tracking-widest text-neutral-text-secondary uppercase font-semibold mb-4">Our Why</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-neutral-text font-light mb-6">
              Opportunity shouldn't be a luxury good.
            </h2>
            <p className="text-lg text-neutral-text-secondary font-normal leading-relaxed">
              Right now, talent lives separately from opportunity. The most brilliant minds remain unseen. Organizations struggle to move beyond performative inclusion. Systems are built to exclude.
            </p>
          </motion.div>

          {/* Three pillars - clean cards with subtle structure */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {[
              {
                number: "01",
                title: "Millions remain invisible",
                description: "Not because they lack skill. Because they lack access. Talent is everywhere—connection is nowhere.",
                gradient: "from-blush-500 to-blush-600"
              },
              {
                number: "02",
                title: "Systems work in silos",
                description: "NGOs refer. Corporates hire. No one talks. There's no woven infrastructure—just isolated points of good intent.",
                gradient: "from-lavender-500 to-lavender-600"
              },
              {
                number: "03",
                title: "DEI became a checkbox",
                description: "Companies measure impact poorly. There's no transparency. No real partnership. Just surface-level moves that feel hollow.",
                gradient: "from-sky-500 to-sky-600"
              }
            ].map((item, idx) => (
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
                  className="relative p-8 md:p-6 rounded-2xl bg-neutral-surface border border-neutral-border hover:border-neutral-text/20 hover:shadow-md transition-all"
                >
                  {/* Top accent stripe with gradient */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} rounded-t-2xl`} />
                  
                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-neutral-text-secondary uppercase tracking-wider">
                      {item.number}
                    </p>
                    <h3 className="font-serif text-xl text-neutral-text font-light">
                      {item.title}
                    </h3>
                    <p className="text-base text-neutral-text-secondary font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bridge section - clean divider */}
          <motion.div variants={itemVariants} className="text-center py-12 md:py-16">
            <div className="w-16 h-1 bg-gradient-to-r from-blush-500 via-lavender-500 to-sky-500 mx-auto mb-8 rounded-full" />
            <p className="text-xl md:text-2xl text-neutral-text font-light max-w-2xl mx-auto leading-relaxed">
              But there's another possibility.
            </p>
          </motion.div>

          {/* Solution section - clear text */}
          <motion.div variants={itemVariants} className="max-w-3xl">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-neutral-text font-light mb-6">
              What if infrastructure felt like belonging?
            </h2>
            <p className="text-lg text-neutral-text-secondary font-normal leading-relaxed">
              We're building a different kind of system. One where talent is verified, visible, and valued. Where NGOs and corporates work together transparently. Where inclusion isn't a goal—it's how the system works.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
