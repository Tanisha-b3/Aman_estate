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
          300: '#f0d27a',   // light gold
          400: '#daa520',   // goldenrod
          500: '#b8860b',   // darker goldenrod
          600: '#996515',   // goldenbrown
        },
        goldenrod: '#daa520',
        goldenbrown: '#996515',
      },
      fontFamily: {
        elegant: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
