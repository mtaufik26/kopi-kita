// tailwind.config.ts
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0f0f0f',        // Very dark
        surface: '#1a1a1a',           // Card background
        surface2: '#252525',          // Hover states
        'coffee-dark': '#2d2424',     // Primary dark
        'coffee-darker': '#1f1818',   // Secondary dark
        'coffee-gold': '#b8956a',     // Muted gold (less bright)
        'coffee-gold-light': '#d4b896', // Lighter gold for text
        'coffee-cream': '#e8dcc8',    // Cream for text
        'coffee-cream-dim': '#a89f91', // Dimmed text
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
}