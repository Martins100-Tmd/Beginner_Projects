/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins"],
      },
      width: {
        30: ["30%"],
        35: ["35%"],
        40: ["40%"],
        90: ["92%"],
        45: ["45%"],
        70: ["70%"],
        15: ["15%"],
        85: ["85%"],
      },
      backgroundColor: {
        white_op: ["rgba(255,255,255,0.3"],
      },
      backgroundImage: {
        news: ["url(News.jpg)"],
      },
    },
  },
  plugins: [],
};
