/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: "Poppins"
    },
    extend: {
      colors: {
        Teal: "#36066D",
        HummingBird: "#d1f1ee",
        yellow: "#e4d63b",
        Solitude: "#9191EE",
        gray: "#000008"
      },
      animation: {
        slide: "slide 25s linear infinite"
      },
      keyframes: {
        slide: {
          "0%,100%" : {transform: "translateX(5%)"},
          "50%": {transform: "translateX(-120%)"}
        }
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}