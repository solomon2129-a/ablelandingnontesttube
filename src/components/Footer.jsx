import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

export default function Footer(){
  const reduce = useReducedMotion()

  const itemVariants = {
    hidden: reduce ? {} : { opacity: 0, y: 10 },
    visible: reduce ? {} : {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const containerVariants = {
    hidden: reduce ? {} : { opacity: 0 },
    visible: reduce ? {} : {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  return (
    <motion.footer
      initial={reduce ? {} : { opacity: 0, y: 8 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.9 }}
      className="mt-16 py-12 bg-choco-800 relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-16 -right-16 w-56 h-56 bg-gradient-to-bl from-coral-500/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-16 w-64 h-64 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <motion.div variants={itemVariants}>
            <div className="font-serif text-lg bg-gradient-to-r from-coral-400 via-sunny-400 to-teal-400 bg-clip-text text-transparent font-light flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-coral-400 to-sunny-400"></div>
              Abledots
            </div>
            <div className="text-xs text-choco-200 mt-2">Inclusion as infrastructure &mdash; verified talent, NGOs and corporates in one trusted system.</div>
            <div className="mt-4 text-xs flex gap-2">
              <span className="inline-block px-2 py-1 bg-coral-500/20 text-coral-300 border border-coral-500/30 rounded-full font-medium">India-First</span>
              <span className="inline-block px-2 py-1 bg-teal-500/20 text-teal-300 border border-teal-500/30 rounded-full font-medium">Social Impact</span>
            </div>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemVariants}>
            <div className="text-sm font-semibold bg-gradient-to-r from-sunny-400 to-coral-400 bg-clip-text text-transparent">Legal</div>
            <ul className="mt-3 text-sm space-y-2">
              <li>
                <motion.div whileHover={reduce ? {} : { x: 2 }}>
                  <Link to="/privacy" className="text-choco-200 hover:text-coral-400 transition-colors">Privacy Policy</Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={reduce ? {} : { x: 2 }}>
                  <Link to="/terms" className="text-choco-200 hover:text-coral-400 transition-colors">Terms & Conditions</Link>
                </motion.div>
              </li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div variants={itemVariants}>
            <div className="text-sm font-semibold bg-gradient-to-r from-teal-400 to-sunny-400 bg-clip-text text-transparent">Connect</div>
            <ul className="mt-3 text-sm space-y-2">
              <li>
                <motion.a whileHover={reduce ? {} : { scale: 1.05 }} href="#linkedin" className="inline-flex items-center gap-1 text-choco-200 hover:text-teal-400 transition-colors font-light">
                  LinkedIn <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </motion.a>
              </li>
              <li>
                <a href="mailto:antomichae03@gmail.com" className="text-choco-200 hover:text-sunny-400 transition-colors font-light flex items-center gap-2">
                  <EnvelopeIcon className="w-4 h-4" />
                  antomichae03@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919591562286" className="text-choco-200 hover:text-coral-400 transition-colors font-light">
                  +91 95915 62286
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="mt-10 pt-6 border-t border-choco-600/50 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <div className="text-xs text-choco-300">
            &copy; {new Date().getFullYear()} Abledots &mdash; Built with care for social impact.
          </div>
          <p className="text-xs bg-gradient-to-r from-coral-400 via-sunny-400 to-teal-400 bg-clip-text text-transparent font-medium">
            Made for every human, everywhere.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
