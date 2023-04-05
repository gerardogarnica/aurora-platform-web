/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        danger: colors.red,
        primary: colors.blue,
        success: colors.green
      },
      fontFamily: {
        roboto: ['Roboto', 'Helvetica Neue', 'sans-serif'],
        trebuchet: ['Trebuchet MS', 'Lucida Sans', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
