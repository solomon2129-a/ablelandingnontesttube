import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FloatingActionMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const actions = [
    {
      icon: '📞',
      label: 'Call Us',
      action: () => { window.location.href = 'tel:+919591562286' }
    },
    {
      icon: '📧',
      label: 'Email Us',
      action: () => { window.location.href = 'mailto:antomichae03@gmail.com' }
    }
  ]

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-[2px] -z-10"
              onClick={() => setIsOpen(false)}
            />

            {actions.map((action, idx) => (
              <motion.button
                key={idx}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0, y: 20 }}
                transition={{ delay: idx * 0.08, type: 'spring', stiffness: 200, damping: 15 }}
                onClick={() => { action.action(); setIsOpen(false) }}
                className="absolute right-0 flex items-center gap-3"
                style={{ bottom: `${(idx + 1) * 72}px` }}
              >
                {/* Label */}
                <span className="bg-choco-800 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-warm-lg whitespace-nowrap">
                  {action.label}
                </span>
                {/* Icon button */}
                <span
                  className="w-14 h-14 rounded-full text-2xl flex items-center justify-center shadow-warm-lg hover:scale-110 transition-transform"
                  style={{
                    background: idx === 0
                      ? 'linear-gradient(135deg, #14B8A6, #0D9488)'
                      : 'linear-gradient(135deg, #FF6B35, #E85A2A)'
                  }}
                >
                  {action.icon}
                </span>
              </motion.button>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Main FAB Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 rounded-full text-3xl flex items-center justify-center shadow-warm-lg relative"
        style={{
          background: 'linear-gradient(135deg, #FF6B35, #E85A2A)',
          color: 'white'
        }}
      >
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="inline-block"
        >
          +
        </motion.span>
        {/* Pulse ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-coral-500/30 animate-ping" style={{ animationDuration: '2s' }} />
        )}
      </motion.button>
    </div>
  )
}
