/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#daa520',
          500: '#daa520',
          300: '#f0d27a',
          600: '#b8860b',
        },
      },
    },
  },
  plugins: [],
}