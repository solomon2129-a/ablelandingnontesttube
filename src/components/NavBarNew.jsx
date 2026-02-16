import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NavBarNew(){
  const [compact, setCompact] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)

  useEffect(() => {
    let last = window.pageYOffset
    const onScroll = () => {
      const cur = window.pageYOffset
      if (cur > last && cur > 40) setCompact(true)
      else setCompact(false)
      last = Math.max(0, cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'AbleHires', href: '/ablehires' },
    { label: 'Partner', href: '/partner' },
    { label: 'Contact', href: '/contact' }
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-x-0 top-0 z-40 backdrop-blur-md"
    >
      <motion.nav
        className="mx-auto max-w-7xl flex items-center justify-between py-4 md:py-6 px-6 md:px-8 lg:px-12"
        animate={compact ? { scale: 0.97, y: -8 } : { scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 140, damping: 18 }}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer"
        >
          <Link to="/">
            <div>
              <h1 className="font-serif text-xl md:text-2xl bg-gradient-to-r from-vibrant-cyan via-vibrant-magenta to-vibrant-orange bg-clip-text text-transparent font-light">
                Abledots
              </h1>
              <p className="text-xs bg-gradient-to-r from-vibrant-magenta to-vibrant-orange bg-clip-text text-transparent font-light -mt-1">
                For every way of being
              </p>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item, idx) => {
            const hoverColors = ['blush', 'lavender', 'sky', 'sage', 'gold']
            const hoverColor = hoverColors[idx % hoverColors.length]
            const bgColor = `${hoverColor}-100`
            const borderColor = `${hoverColor}-300`
            
            return (
              <li key={item.href}>
                <motion.div
                  onHoverStart={() => setHoveredLink(item.href)}
                  onHoverEnd={() => setHoveredLink(null)}
                  className="relative"
                >
                  <Link
                    to={item.href}
                    className={`px-4 py-2 text-sm font-light text-warm-gray hover:text-${hoverColor}-500 transition-colors`}
                  >
                    {item.label}
                  </Link>
                  {hoveredLink === item.href && (
                    <motion.div
                      layoutId="navbar-bg"
                      className={`absolute inset-0 bg-${bgColor}/40 rounded-lg -z-10 border border-${borderColor}/30`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.div>
              </li>
            )
          })}
        </ul>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Terms button - Desktop only */}
          <motion.div className="hidden sm:inline-flex">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/terms"
              className="px-4 py-2 text-xs font-light text-vibrant-magenta border border-vibrant-magenta/40 hover:border-vibrant-magenta/70 rounded-full transition-all"
            >
              Terms
            </motion.a>
          </motion.div>

          {/* Primary CTA */}
          <motion.div className="hidden sm:inline-flex">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="px-6 py-2 text-sm font-light text-white bg-gradient-to-br from-vibrant-cyan to-vibrant-magenta rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Let's talk
            </motion.a>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 text-vibrant-magenta hover:bg-vibrant-magenta/10 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
              <path d="M1 1h18M1 8h18M1 15h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </motion.button>
        </div>
      </motion.nav>
    </motion.header>
  )
}
