import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { SparklesIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import { navFade, slowPulse } from '../lib/motionVariants'

const MotionLink = motion(Link)

export default function NavBar(){
  const reduce = useReducedMotion()
  const [compact, setCompact] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)

  useEffect(() => {
    let last = window.pageYOffset
    const onScroll = () => {
      const cur = window.pageYOffset
      // compress when scrolling down, expand on scroll up
      if (cur > last && cur > 40) setCompact(true)
      else setCompact(false)
      last = Math.max(0, cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'AbleHires', path: '/ablehires' },
    { label: 'Partner', path: '/partner' },
    { label: 'Contact', path: '/contact' }
  ]

  return (
    <motion.header initial="hidden" animate="visible" variants={navFade} className="fixed inset-x-4 top-6 z-40">
      <motion.nav
        className="mx-auto max-w-7xl flex items-center justify-between py-3 px-4 rounded-3xl bg-white/95 border border-gray-100 shadow-soft backdrop-blur-md"
        animate={compact ? { scale: 0.98, y: -4 } : { scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 160, damping: 18 }}
      >
        <motion.div 
          className="flex items-center gap-3 cursor-pointer"
          whileHover={reduce ? {} : { scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className="w-10 h-10 rounded-full bg-gradient-to-br from-ablue-600 to-ablue-800 flex items-center justify-center ring-1 ring-gray-100 shadow-md"
            animate={reduce ? {} : { rotateZ: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <SparklesIcon className="w-6 h-6 text-white" />
          </motion.div>
          <Link to="/">
            <div className="text-ablue-900 font-bold tracking-wide text-lg">Abledots</div>
            <div className="text-xs text-ablue-600 -mt-1 font-medium">Infrastructure</div>
          </Link>
        </motion.div>

        <ul className="hidden md:flex items-center gap-1 text-sm text-ablue-700">
          {navItems.map((item) => (
            <li key={item.path}>
              <motion.div
                onHoverStart={() => setHoveredLink(item.path)}
                onHoverEnd={() => setHoveredLink(null)}
                className="relative"
              >
                <Link 
                  className="px-3 py-2 hover:text-ablue-900 transition-colors rounded-lg"
                  to={item.path}
                >
                  {item.label}
                </Link>
                {hoveredLink === item.path && !reduce && (
                  <motion.div
                    layoutId="navbar-highlight"
                    className="absolute inset-0 bg-ablue-50 rounded-lg -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.div>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <motion.div
            whileHover={reduce ? {} : { scale: 1.05 }}
            whileTap={reduce ? {} : { scale: 0.95 }}
            className="hidden sm:inline-flex"
          >
            <MotionLink
              to="/terms"
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full text-xs font-medium bg-ablue-50 text-ablue-700 hover:bg-ablue-100 transition border border-ablue-100"
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <DocumentTextIcon className="w-4 h-4" />
              <span className="hidden md:inline">Terms</span>
            </MotionLink>
          </motion.div>

          <motion.div
            className="hidden sm:inline-flex"
            variants={reduce ? {} : slowPulse}
            aria-hidden={reduce}
          >
            <MotionLink
              to="/contact"
              className="inline-flex items-center gap-2 py-2 px-4 rounded-full text-sm font-semibold bg-gradient-to-r from-ablue-600 to-ablue-800 text-white shadow-lg hover:shadow-xl transition"
              whileHover={reduce ? {} : { scale: 1.05 }}
              whileTap={reduce ? {} : { scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <motion.span
                animate={reduce ? {} : { y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Join Now
              </motion.span>
            </MotionLink>
          </motion.div>

          <motion.button 
            className="md:hidden p-2 bg-white rounded-lg border border-gray-100 text-ablue-700 hover:bg-ablue-50 transition"
            whileHover={reduce ? {} : { scale: 1.05 }}
            whileTap={reduce ? {} : { scale: 0.95 }}
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.5" width="20" height="2" rx="1" fill="#203B4F" fillOpacity="0.9"/><rect y="6" width="20" height="2" rx="1" fill="#203B4F" fillOpacity="0.6"/><rect y="11.5" width="20" height="2" rx="1" fill="#203B4F" fillOpacity="0.4"/></svg>
          </motion.button>
        </div>
      </motion.nav>
    </motion.header>
  )
}
