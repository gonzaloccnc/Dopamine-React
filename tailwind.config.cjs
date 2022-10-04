/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    screens: {
      xs: '240px',
      ...defaultTheme.screens,
    },

    fontSize: {
      h1: '1.563rem',
      h2: '1.25rem',
      h3: '0.813rem',
      h4: '0.688rem',
      mobile: '0.4rem',
    },
    extend: {
      colors: {
        blackCm: '#111110',
        night: '#22211f',
        gray: '#474141',
        mustard: '#F8B525',
        yellow: '#FFD160',
        white: '#FCF4E2',
        blackOpacity: 'rgba(0,0,0,0.5)',
      },

      transitionTimingFunction: {
        expo: 'cubic-bezier(1,-0.6,1,.91)',
      },

      fontFamily: {
        sans: ['Comfortaa', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
