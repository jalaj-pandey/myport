/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      screens : {
        md: "770px"
      }
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

