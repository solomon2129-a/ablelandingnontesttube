import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { EnvelopeIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export default function FooterNew(){
  const reduce = useReducedMotion()

  const containerVariants = {
    hidden: reduce ? {} : { opacity: 0 },
    visible: reduce ? {} : {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: reduce ? {} : { opacity: 0, y: 10 },
    visible: reduce ? {} : {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <motion.footer
      initial={reduce ? {} : { opacity: 0, y: 20 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="relative pt-16 md:pt-20 pb-8 overflow-hidden bg-choco-800"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-coral-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-32 right-0 w-80 h-80 bg-gradient-to-tl from-teal-500/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-sunny-400/10 to-poppy-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Main content */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-10 md:py-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
          >
            {/* Branding */}
            <motion.div variants={itemVariants} className="md:col-span-1">
              <div className="mb-6">
                <h3 className="font-serif text-2xl bg-gradient-to-r from-coral-400 via-sunny-400 to-teal-400 bg-clip-text text-transparent font-light mb-3">
                  Abledots
                </h3>
                <p className="text-sm text-choco-200 font-light leading-relaxed">
                  Infrastructure for genuine human connection.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-coral-500/20 text-coral-300 border border-coral-500/30">
                  India-First
                </span>
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  Social Impact
                </span>
              </div>
            </motion.div>

            {/* Legal */}
            <motion.div variants={itemVariants}>
              <h4 className="text-sm font-semibold bg-gradient-to-r from-sunny-400 to-coral-400 bg-clip-text text-transparent uppercase tracking-wider mb-6">
                Legal
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link to="/privacy" className="text-choco-200 font-light hover:text-coral-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-choco-200 font-light hover:text-coral-400 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <a href="mailto:antomichae03@gmail.com" className="text-choco-200 font-light hover:text-teal-400 transition-colors flex items-center gap-2">
                    <EnvelopeIcon className="w-4 h-4" />
                    antomichae03@gmail.com
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Connect */}
            <motion.div variants={itemVariants}>
              <h4 className="text-sm font-semibold bg-gradient-to-r from-teal-400 to-sunny-400 bg-clip-text text-transparent uppercase tracking-wider mb-6">
                Connect
              </h4>
              <ul className="space-y-4">
                <li>
                  <a href="#linkedin" className="text-choco-200 font-light hover:text-teal-400 transition-colors inline-flex items-center gap-2">
                    LinkedIn <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                  </a>
                </li>
                <li>
                  <a href="tel:+919591562286" className="text-choco-200 font-light hover:text-sunny-400 transition-colors">
                    +91 95915 62286
                  </a>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          variants={itemVariants}
          className="border-t border-choco-600/50 py-6"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-choco-300 font-light">
            <p>
              &copy; {new Date().getFullYear()} Abledots. Crafted with care.
            </p>
            <p className="bg-gradient-to-r from-coral-400 via-sunny-400 to-teal-400 bg-clip-text text-transparent font-medium">
              Made for every human, everywhere.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
