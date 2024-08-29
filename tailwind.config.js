/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.liquid'
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        frostedBlue: '#c7d3dd',
        softWhite: '#fafafa',
        deepSlate: '#2a3439'
      }
    },
  },
  plugins: [],
}