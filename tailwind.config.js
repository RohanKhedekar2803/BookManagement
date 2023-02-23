/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'hero': "url('../public/bg.png')"
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
