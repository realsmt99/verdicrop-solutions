/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#EEF6F0',
          100: '#D6E9DC',
          200: '#AED3BA',
          300: '#7FB893',
          400: '#4E9968',
          500: '#2E7D4A',
          600: '#1F6B3B',
          700: '#19542F',
          800: '#123E23',
          900: '#0C2B18',
        },
        leaf: {
          50: '#F3F9E9',
          100: '#E3F1CC',
          200: '#CCE6A1',
          300: '#AED66E',
          400: '#93C94B',
          500: '#7DBE3C',
          600: '#639C2E',
          700: '#4C7825',
        },
        marine: {
          400: '#22A98A',
          500: '#0E8C72',
          600: '#0B6F5B',
        },
        gold: {
          400: '#B08E55',
          500: '#8A6A3B',
          600: '#6E5430',
        },
        cream: '#FAF8F2',
        sand: '#F3EFE4',
        ink: '#16241B',
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.32, 0.72, 0, 1)',
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        soft: '0 24px 60px -28px rgba(18, 62, 35, 0.28)',
        glow: '0 18px 50px -20px rgba(125, 190, 60, 0.45)',
        card: '0 30px 80px -40px rgba(12, 43, 24, 0.35)',
        'inset-hi': 'inset 0 1px 1px rgba(255, 255, 255, 0.55)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-22px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
