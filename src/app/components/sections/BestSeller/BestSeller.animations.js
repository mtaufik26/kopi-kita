export const leftContent = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, type: 'spring', stiffness: 100, damping: 18 } },
};

export const rightImage = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2, type: 'spring', stiffness: 100, damping: 18 } },
};

export const viewport = { once: true, margin: '-100px' };