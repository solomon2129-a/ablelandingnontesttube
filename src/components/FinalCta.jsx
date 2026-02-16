import React, { useState } from 'react'

import { motion, useReducedMotion } from 'framer-motion'
import { itemFadeUp, containerStagger } from '../lib/motionVariants'
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function FinalCta(){
  const reduce = useReducedMotion()
  const [hoveredBtn, setHoveredBtn] = useState(null)

  const buttonVariants = {
    hidden: reduce ? {} : { opacity: 0, y: 20 },
    visible: reduce ? {} : {
      opacity: 1,
      y: 0
    }
  }

  return (
    <section id="join" className="mt-16 pb-20">
      <motion.div 
        variants={itemFadeUp} 
        initial={reduce ? 'visible' : 'hidden'} 
        whileInView={reduce ? 'visible' : 'visible'} 
        viewport={{ once: true, amount: 0.12 }} 
        className="glass rounded-3xl p-8 border border-gray-100 text-center max-w-4xl mx-auto relative overflow-hidden"
      >
        {/* Background Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          className="absolute inset-0 bg-gradient-to-br from-ablue-600 to-transparent rounded-3xl"
        />

        <motion.h2 
          variants={itemFadeUp} 
          className="text-2xl md:text-3xl font-bold text-ablue-900 relative z-10"
        >
          Be part of building the infrastructure.
        </motion.h2>
        
        <motion.p 
          variants={itemFadeUp} 
          className="mt-3 text-ablue-700 text-lg relative z-10 max-w-2xl mx-auto"
        >
          Join Abledots — whether you're seeking opportunity, representing a facility/NGO, or building inclusion at a corporate scale. Read our transparent terms first.
        </motion.p>

        <motion.div 
          variants={containerStagger}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center relative z-10"
        >
          <motion.a 
            whileHover={reduce ? {} : { scale: 1.05, y: -2 }}
            whileTap={reduce ? {} : { scale: 0.98 }}
            onHoverStart={() => setHoveredBtn('talent')}
            onHoverEnd={() => setHoveredBtn(null)}
            className="px-6 py-4 rounded-full bg-gradient-to-r from-ablue-600 to-ablue-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
            href="#talent"
          >
            I'm Seeking Opportunity
            <motion.span
              animate={hoveredBtn === 'talent' && !reduce ? { x: 4 } : { x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRightIcon className="w-5 h-5 group-hover:opacity-100 opacity-70" />
            </motion.span>
          </motion.a>

          <motion.a 
            whileHover={reduce ? {} : { scale: 1.05, y: -2 }}
            whileTap={reduce ? {} : { scale: 0.98 }}
            onHoverStart={() => setHoveredBtn('ngo')}
            onHoverEnd={() => setHoveredBtn(null)}
            className="px-6 py-4 rounded-full bg-white border-2 border-ablue-200 text-ablue-700 font-semibold hover:border-ablue-600 hover:bg-ablue-50 transition-all flex items-center justify-center gap-2 group shadow-soft"
            href="#ngo"
          >
            I'm an NGO/Facility
            <motion.span
              animate={hoveredBtn === 'ngo' && !reduce ? { x: 4 } : { x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRightIcon className="w-5 h-5 group-hover:opacity-100 opacity-70" />
            </motion.span>
          </motion.a>

          <motion.a 
            whileHover={reduce ? {} : { scale: 1.05, y: -2 }}
            whileTap={reduce ? {} : { scale: 0.98 }}
            onHoverStart={() => setHoveredBtn('corporate')}
            onHoverEnd={() => setHoveredBtn(null)}
            className="px-6 py-4 rounded-full bg-white border-2 border-ablue-200 text-ablue-700 font-semibold hover:border-ablue-600 hover:bg-ablue-50 transition-all flex items-center justify-center gap-2 group shadow-soft"
            href="#corporate"
          >
            I'm a Corporate
            <motion.span
              animate={hoveredBtn === 'corporate' && !reduce ? { x: 4 } : { x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRightIcon className="w-5 h-5 group-hover:opacity-100 opacity-70" />
            </motion.span>
          </motion.a>
        </motion.div>

        <motion.div 
          variants={itemFadeUp} 
          className="mt-8 relative z-10 flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <div className="text-sm text-ablue-600 px-4 py-2 rounded-full bg-ablue-50 border border-ablue-100 flex items-center gap-2">
            <CheckCircleIcon className="w-5 h-5 text-ablue-600" />
            <span>Free forever for talent & partners</span>
          </div>
          <div className="text-sm text-ablue-600">
            Questions? <a href="mailto:antomichae03@gmail.com" className="text-ablue-900 font-semibold hover:text-agold transition-colors">Contact us</a> | <a href="tel:+919591562286" className="text-ablue-900 font-semibold hover:text-agold transition-colors">+91 95915 62286</a>
          </div>
        </motion.div>

        {/* Read Terms Link */}
        <motion.div
          variants={itemVariants}
          className="mt-6 relative z-10"
        >
          <motion.a
            whileHover={reduce ? {} : { scale: 1.02 }}
            href="/terms"
            className="inline-flex items-center gap-2 text-ablue-600 hover:text-ablue-900 font-medium transition-colors border-b border-transparent hover:border-ablue-600 pb-1"
          >
            <CheckCircleIcon className="w-5 h-5" />
            Read our transparent Terms & Conditions
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}
