/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins"],
      },
      width: {
        70: ["70%"],
        97: ["97%"],
        12: ["12%"],
      },
    },
  },
  plugins: [],
};
