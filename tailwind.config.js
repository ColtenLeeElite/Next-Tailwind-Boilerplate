/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          default: '#74DEFF',
          100: '#74DEFF',
          200: '#0fc6ff',
          300: '#0094C2',
        },
        orange: '#FF7D05',
        purple: {
          default: '#7458B4',
          100: '#7458B4',
          200: '#573F8D',
          300: '#412F6A',
        },
        gray: {
          default: '#7D828B',
          50: '#F2F3F5',
          100: '#ADADAD',
          400: '#7D828B',
          500: '#5C6169',
          600: '#36393F',
          800: '#202225',
        },
        black: '#16171A',
        red: '#ED4245',
        dark: '#0B0D0E80',
        startGrey: 'rgba(41, 41, 41, 1)',
        endGrey: 'rgba(52, 52, 52, 0)',
        bgSub: 'rgba(22, 23, 26, 1)',
        darkGradientStart: '#562586',
        darkGradientEnd: '#00CDCD',
        startBlue: 'rgba(127, 232, 255, 1)',
        endBlue: 'rgba(23, 90, 118, 1)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
