/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#c7352f",
          yellow: "#f4c542",
          beige: "#f3e8d8",
        },
      },
    },
  },
  plugins: [],
}