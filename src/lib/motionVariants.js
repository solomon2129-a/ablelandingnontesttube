// Shared, reusable motion variants tuned for "calm, human, premium" animations
// NOTE: avoid importing easing helpers from framer-motion to keep compatibility.
const defaultEase = [0.4, 0, 0.2, 1]

export const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
}

export const itemFadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: defaultEase }
  }
}

export const slowPulse = {
  animate: {
    scale: [1, 1.02, 1],
    transition: { duration: 6, ease: defaultEase, repeat: Infinity }
  }
}

export const navFade = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: defaultEase } }
}

export const wordReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: defaultEase, delay: i * 0.06 }
  })
}

export const subtleFloat = {
  animate: (delay = 0) => ({
    y: [0, -6, 0],
    transition: { duration: 8 + Math.random() * 6, repeat: Infinity, ease: defaultEase, delay }
  })
}
