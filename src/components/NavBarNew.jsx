import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function NavBarNew() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.pageYOffset > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const navItems = [
    { label: 'About',          href: '/about' },
    { label: 'AbleHires',      href: '/ablehires' },
    { label: 'Partner With Us', href: '/partner' },
  ]

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed inset-x-0 top-0 z-40 bg-forest transition-all duration-300 ${
          scrolled ? 'border-b border-mist/20' : ''
        }`}
      >
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 md:px-10 lg:px-14 py-5">
          {/* Logo */}
          <Link to="/" className="flex flex-col group">
            <span className="font-serif font-black text-xl text-light leading-none tracking-tight group-hover:text-mist transition-colors duration-200">
              Abledots
            </span>
            <span className="text-sage text-xs font-light tracking-widest uppercase mt-0.5">
              Inclusion as infrastructure
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`text-sm font-bold tracking-wide transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-light'
                      : 'text-mist hover:text-light'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.href && (
                    <motion.div
                      layoutId="nav-underline"
                      className="h-px bg-brick mt-0.5"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden md:block">
              <motion.span
                whileHover={{ boxShadow: '4px 4px 0px #C6CFD6', x: -2, y: -2 }}
                whileTap={{ boxShadow: '1px 1px 0px #C6CFD6', x: 0, y: 0 }}
                transition={{ duration: 0.1 }}
                className="inline-block px-6 py-2.5 bg-brick text-light text-xs font-bold tracking-widest uppercase cursor-pointer"
              >
                Join the Movement
              </motion.span>
            </Link>

            <button
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((p) => !p)}
              className="md:hidden p-2 text-light hover:text-mist transition-colors"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.svg
                    key="close"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    width="22" height="22" viewBox="0 0 22 22" fill="none"
                  >
                    <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="burger"
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    width="22" height="16" viewBox="0 0 22 16" fill="none"
                  >
                    <path d="M0 1h22M0 8h22M0 15h22" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-forest/70 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed inset-x-0 top-[73px] z-40 bg-forest border-t border-mist/20 md:hidden"
            >
              <nav className="max-w-7xl mx-auto px-6 py-6 space-y-0.5">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.07, duration: 0.25 }}
                  >
                    <Link
                      to={item.href}
                      className="block py-4 text-lg font-bold text-mist hover:text-light border-b border-mist/10 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.07, duration: 0.25 }}
                  className="pt-4"
                >
                  <Link to="/contact" className="btn-primary w-full justify-center">
                    Join the Movement
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
