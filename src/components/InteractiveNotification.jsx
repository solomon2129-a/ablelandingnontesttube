import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function InteractiveNotification({ message = 'Welcome!', type = 'cyan', onDismiss }) {
  const configs = {
    cyan: {
      bg: 'linear-gradient(135deg, #00D4FF, #00A8CC)',
      icon: '✨'
    },
    magenta: {
      bg: 'linear-gradient(135deg, #FF00CC, #CC0099)',
      icon: '💫'
    },
    orange: {
      bg: 'linear-gradient(135deg, #FF8C00, #CC7000)',
      icon: '🔥'
    }
  }

  const config = configs[type] || configs.cyan

  return (
    <motion.div
      initial={{ opacity: 0, x: 100, y: -20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-8 right-8 z-50 max-w-sm"
    >
      <div
        className="px-6 py-4 rounded-full text-white font-semibold shadow-lg flex items-center gap-3 backdrop-blur-md"
        style={{ background: config.bg }}
      >
        <span className="text-xl">{config.icon}</span>
        <span>{message}</span>
        <button
          onClick={onDismiss}
          className="ml-4 text-xl hover:opacity-80 transition-opacity"
        >
          ×
        </button>
      </div>
    </motion.div>
  )
}

// Hook for managing notifications
export function useNotification() {
  const [notification, setNotification] = useState(null)

  const show = (message, type = 'cyan') => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 4000)
  }

  return {
    notification,
    show,
    dismiss: () => setNotification(null)
  }
}
