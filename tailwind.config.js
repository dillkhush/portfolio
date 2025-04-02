/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/globals.css',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0e0e0e',
        foreground: '#f4f4f5',
        accent: '#6366f1',
        card: 'rgba(255, 255, 255, 0.05)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(99, 102, 241, 0.4)',
      },
      borderRadius: {
        smooth: '1.25rem',
      },
      animation: {
        'text-glow': 'textGlow 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 40s linear infinite',
      },
      keyframes: {
        textGlow: {
          '0%, 100%': {
            textShadow: '0 0 8px #6366f1, 0 0 16px #6366f1',
          },
          '50%': {
            textShadow: '0 0 16px #6366f1, 0 0 32px #6366f1',
          },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
