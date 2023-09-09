/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'theme': {
          light: '#e4ebf5',
          dark: '#cedeef'
        },
        'card': '#2c6d9d',
        'label': {
          DEFAULT: '#fafafa',
          opaque: '#dcdcdc',
          controls: '#000000'
        },
        'control': {
          primary: '#f5f5f5',
          DEFAULT: '#dcdcdc',
          secondary: '#989898'
        },
        'danger': {
          DEFAULT: '#f87171'
        },
        'info': {
          DEFAULT: '#44a3ec',
          dark: '#1c88db'
        },
        'highlight': {
          primary: '#38bcf8',
          DEFAULT: '#075e85',
          secondary: '#bae8fd'
        }
      },
      fontFamily: {
        roboto: ['Roboto', 'Helvetica Neue', 'sans-serif'],
        trebuchet: ['Trebuchet MS', 'Lucida Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
