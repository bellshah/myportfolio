import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'c-navy':   '#1B2A4A',
        'c-coral':  '#C8472E',
        'c-coral2': '#E06B53',
        'c-teal':   '#1A6B6B',
        'c-gold':   '#C49A3C',
        'c-paper':  '#F8F5EF',
        'c-paper2': '#EDE8DF',
        'c-dim':    '#7a7068',
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-plus-jakarta)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        mono:    ['ui-monospace', 'Inconsolata', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
