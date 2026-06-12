import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        surface: '#0d1117',
        'surface-secondary': '#161b22',
        'surface-tertiary': '#21262d',
        // Accent
        accent: '#378ADD',
        'accent-hover': '#4d9ae6',
        'accent-muted': 'rgba(55,138,221,0.12)',
        // Text
        'on-surface': '#e6edf3',
        'on-surface-secondary': '#8b949e',
        'on-surface-muted': '#6e7681',
        // Borders
        'border-default': '#30363d',
        'border-subtle': '#21262d',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px #30363d',
        'card-hover': '0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px #378ADD44',
        glow: '0 0 20px rgba(55,138,221,0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
