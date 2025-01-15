/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './assets/**/*.{html,js,css}', // Ensure this includes your HTML and JS files
  ],
  theme: {
    extend: {
      colors: {
        'page-bg': '#151515',
        'dark-1': '#1d1d1d',
        'dark-2': '#222125',
        'dark-3': '#2d2d2d',
        'dark-4': '#4d4d4d',
        'dark-5': '#5d5d5d',
        'dark-6': '#6d6d6d',
        'dark-7': '#7d7d7d',
        'dark-8': '#8d8d8d',
        'dark-9': '#9d9d9d',
        'dark-10': '#adadad',
        'dark-11': '#bdbdbd',
        'dark-12': '#cdcdcd',
        'grade-a1': '#21C55E',
        'grade-a': '#42DC1B',
        'grade-b': '#9CE830',
        'grade-c': '#EBCC1A',
        'grade-d': '#FD591E',
        'grade-f': '#FF1C6D',
      },

      backgroundColor: {
        'grade-a1': 'rgba(33, 197, 94, 0.10)',  // Transparent Green (10% opacity)
        'grade-a': 'rgba(66, 220, 27, 0.10)',   // Transparent Light Green (10% opacity)
        'grade-b': 'rgba(156, 232, 48, 0.10)',   // Transparent Yellow Green (10% opacity)
        'grade-c': 'rgba(235, 204, 26, 0.10)',   // Transparent Yellow (10% opacity)
        'grade-d': 'rgba(253, 89, 30, 0.10)',    // Transparent Orange (10% opacity)
        'grade-f': 'rgba(255, 28, 109, 0.10)',   // Transparent Pink (10% opacity)
      },
      
      fontFamily: {
        sans: ['"Albert Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
