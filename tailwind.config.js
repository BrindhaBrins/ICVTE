/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['poppins', 'sans-serif'],
    },
    colors: {
      blue : "#192c57",
      orange : "#d94426",
      white : "#ffffff",
    }
  },
},
  plugins: [],
}