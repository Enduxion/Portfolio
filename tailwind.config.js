/** @type {import('tailwindcss').Config} */

export const GOLD_COLOR = "#f0e2a3";
export const DARK_GOLD_COLOR = "#b2a879";
export const ACCENT_GRAY = "#c0c0c0";
export const BLACK_COLOR = "#000";
export const WHITE_COLOR = "#fff";
export const RED_COLOR = "#f02e3a";

export const NAV_HEIGHT = 3.5; // in rem

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          1: WHITE_COLOR,
          2: BLACK_COLOR,
          3: GOLD_COLOR,
          4: ACCENT_GRAY,
          5: DARK_GOLD_COLOR,
          6: RED_COLOR,
        },
      },
      fontFamily: {
        poppins: "poppins",
        public: "Public sans",
        roboto: "Roboto Mono",
        euro: "Eurostile",
      },
      height: {
        nav: `${NAV_HEIGHT}rem`,
        anav: `calc(100vh - ${NAV_HEIGHT}rem)`,
        "9/12": "calc(100% * 10 / 12)",
      },
      margin: {
        nav: `${NAV_HEIGHT}rem`,
      },
      screens: {
        'sm': '320px',
        'md': '640px',
        'lg': '768px',
        'xl': '1024px',
      },
      size: {
        'xs': '12px',
      },
    },
  },
  plugins: [],
};
