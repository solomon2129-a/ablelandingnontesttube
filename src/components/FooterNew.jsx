import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export default function FooterNew() {
  const sections = [
    {
      title: 'Company',
      links: [
        { label: 'About',   href: '/about' },
        { label: 'Vision',  href: '/about' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Products',
      links: [
        { label: 'AbleHires', href: '/ablehires' },
      ],
    },
    {
      title: 'Partners',
      links: [
        { label: 'Facilities', href: '/partner' },
        { label: 'Corporates', href: '/partner' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms',   href: '/terms' },
      ],
    },
  ]

  return (
    <footer className="bg-forest border-t border-mist/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-14 pt-16 pb-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="col-span-2">
            <Link to="/">
              <span className="font-serif font-black text-2xl text-light tracking-tight block mb-1">
                Abledots
              </span>
            </Link>
            <p className="text-sage text-xs tracking-widest uppercase mb-4">
              Inclusion as infrastructure
            </p>
            <p className="text-mist text-sm leading-relaxed max-w-xs">
              Building India's social wellbeing ecosystem—connecting underserved talent, NGOs, and corporates.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.linkedin.com/company/abledots/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mist hover:text-light text-xs font-bold tracking-widest uppercase transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-mist hover:text-light text-xs font-bold tracking-widest uppercase transition-colors"
              >
                Twitter
              </a>
            </div>
          </motion.div>

          {/* Links */}
          {sections.map((section) => (
            <motion.div key={section.title} variants={fadeUp} className="col-span-1">
              <h4 className="text-xs font-bold text-sage tracking-widest uppercase mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-mist hover:text-light transition-colors font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-mist/15 origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-mist/60 font-light">
          <p>&copy; {new Date().getFullYear()} Abledots. All rights reserved.</p>
          <p className="text-sage font-bold tracking-widest uppercase">
            Inclusion is infrastructure.
          </p>
        </div>
      </div>
    </footer>
  )
}
