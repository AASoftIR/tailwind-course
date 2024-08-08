/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        veryDark: "#1B262C",
        blueDark: "#0F4C75",
        blueLight: "#3282B8",
        secondary: "#BBE1FA",
      },
      fontFamily: {
        pro: ["pro", "sans-serif"],
        grenze: ["grenze", "poppins"],
        inter: ["inter", "sans-serif"],
        valencia: ["valencia", "serif"],
      },
      animation: {
        mover: "mover 2s ease-in-out infinite alternate",
        moverY: "moverY 2s ease-in-out infinite alternate",
      },
      screens: {
        small: { max: "420px" },
        mobile: { max: "600px" },
        notLg: { max: "1024px" },
      },
    },
  },
  plugins: [],
};
