import React, { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import LordIcon, { ICONS } from './LordIcon'

export default function FloatingActionMenu() {
  const reduce = useReducedMotion()
  const [isOpen, setIsOpen] = useState(false)

  const actions = [
    {
      label: 'Email Us',
      icon:  <LordIcon src={ICONS.email} trigger="hover" size={20} palette="onDark" />,
      action: () => { window.location.href = 'mailto:abledots.official@gmail.com' },
    },
    {
      label: 'Call Us',
      icon:  <LordIcon src={ICONS.phone} trigger="hover" size={20} palette="onDark" />,
      action: () => { window.location.href = 'tel:+919591562286' },
    },
  ]

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col-reverse items-end gap-3">
      <AnimatePresence>
        {isOpen && actions.map((action, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{
              delay: reduce ? 0 : idx * 0.06,
              duration: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="flex items-center gap-3"
          >
            <motion.span
              className="bg-light text-forest text-xs font-bold px-4 py-2.5 tracking-wide border border-mist/60 whitespace-nowrap"
              whileHover={{ x: -2 }}
            >
              {action.label}
            </motion.span>
            <motion.button
              onClick={() => { action.action(); setIsOpen(false) }}
              whileHover={reduce ? {} : {
                boxShadow: '3px 3px 0px #0C2E2B',
                x: -2, y: -2,
              }}
              whileTap={{ x: 0, y: 0 }}
              transition={{ duration: 0.1 }}
              className="w-12 h-12 bg-forest text-light flex items-center justify-center border border-mist/20"
            >
              {action.icon}
            </motion.button>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        onClick={() => setIsOpen((p) => !p)}
        whileHover={reduce ? {} : {
          boxShadow: '4px 4px 0px #0C2E2B',
          x: -2, y: -2,
        }}
        whileTap={{ x: 0, y: 0 }}
        transition={{ duration: 0.1 }}
        className="w-14 h-14 bg-brick text-light flex items-center justify-center relative"
        aria-label="Contact options"
      >
        <motion.span
          animate={reduce ? {} : { rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="inline-block text-2xl font-light leading-none"
        >
          +
        </motion.span>

        {!isOpen && !reduce && (
          <motion.span
            className="absolute inset-0 border-2 border-brick"
            animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        )}
      </motion.button>
    </div>
  )
}
