/** @type {import('tailwindcss').Config} */

const GOLD_COLOR = "#f0e2a3";
const DARK_GOLD_COLOR = "#b2a879";
const BLACK_COLOR = "#000";
const WHITE_COLOR = "#fff";
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
          3: WHITE_COLOR,
        },
        secondary: {
          1: RED_COLOR,
          2: DARK_GOLD_COLOR,
        }
      },
      fontFamily: {
        poppins: "poppins",
        public: "Public sans",
        roboto: "Roboto Mono",
      },
    },
  },
  plugins: [],
}

