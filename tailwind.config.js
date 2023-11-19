/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    fontFamily: {
      'heading': ['Lato'],
      'body': ['Poppins']
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

