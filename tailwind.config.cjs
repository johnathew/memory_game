const { default: ReactCardFlip } = require("react-card-flip");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        flip: "-1",
      },
    },
  },
  plugins: [],
};
