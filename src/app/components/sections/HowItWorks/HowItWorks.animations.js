export const header = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const grid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export const card = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: 'spring', stiffness: 100, damping: 18 } },
};

export const helpLink = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const viewport = { once: true, margin: '-50px' };