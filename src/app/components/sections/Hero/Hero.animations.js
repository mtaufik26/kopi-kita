export const badge = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export const headline = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1, type: 'spring', stiffness: 100, damping: 18 } },
};

export const description = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, type: 'spring', stiffness: 100, damping: 18 } },
};

export const quote = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.25, type: 'spring', stiffness: 100, damping: 18 } },
};

export const ctas = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.35, type: 'spring', stiffness: 100, damping: 18 } },
};

export const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export const viewport = { once: true, margin: '-100px' };