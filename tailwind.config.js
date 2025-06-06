/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid"],
  theme: {
    extend: {
      boxShadow: {
        highlightTitle: "0px 4px 48px 0px rgba(0, 0, 0, 0.12)",
        modal: "0px 2px 48px 0px rgba(0, 0, 0, 0.12);",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        frostedBlue: "#c7d3dd",
        softWhite: "#fafafa",
        deepSlate: "#2a3439",
        dissolvedDenim: "#e3ebf4",
      },
    },
  },
  safelist: ["overflow-hidden"],
  plugins: [],
};
