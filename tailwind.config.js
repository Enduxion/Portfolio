/** @type {import('tailwindcss').Config} */

const GOLD_COLOR = "#f0e2a3";
const BLACK_COLOR = "#000";
const RED_COLOR = "#f02e3a";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: GOLD_COLOR,
          2: BLACK_COLOR,
        },
        secondary: {
          1: RED_COLOR,
        }
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"]
      },
    },
  },
  plugins: [],
}

