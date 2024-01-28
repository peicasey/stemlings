/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      opacity: ["disabled"],
      // fontFamily: {
      //   poppins: ["Poppins", "sans-serif"],
      //   atkins: ["Atkinson Hyperlegible", "sans-serif"],

      // },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
