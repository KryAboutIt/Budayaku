/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "kinda-white": "#EBFBFF",
      "kinda-orange": "#D9D9D9"
    },
    extend: {
      fontFamily: {
        primary: "PT Serif Caption",
        secondary: "PT Serif",
      },
    },
  },
  plugins: [],
}

