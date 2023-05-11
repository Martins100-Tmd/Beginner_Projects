/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins"],
      },
      width: {
        40: ["45%"],
        30: ["30%"],
        90: ["90%"],
        450: ["450px"],
        220: ["220px"],
      },
      backgroundImage: {
        bg: ["../static/src/Beard.jpg"],
      },
      backgroundColor: {
        dark: ["rgb(17, 17, 17)"],
      },
    },
  },
  plugins: [],
};
