/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07090b',
          900: '#0c0f12',
          800: '#12161a',
          700: '#1b2127',
          600: '#252d35',
        },
        accent: {
          400: '#e0374a',
          500: '#c8102e',
          600: '#a30d25',
        },
      },
      fontFamily: {
        display: ['"Oswald"', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(200,16,46,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(200,16,46,0.06) 1px, transparent 1px)',
      },
      boxShadow: {
        accent: '0 0 0 1px rgba(200,16,46,0.35), 0 8px 30px -6px rgba(200,16,46,0.25)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'grid-pan': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '48px 48px' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fade-in 1.1s ease forwards',
        'grid-pan': 'grid-pan 6s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}
