/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins"],
      },
      width: {
        28: ["5%"],
        90: ["90%"],
      },
    },
  },
  plugins: [],
};
