/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'winai-orange': '#da4d2a',
        'winai-dark-blue': '#05162e',
        'winai-blue': '#084272',
      },
    },
  },
  plugins: [],
}
