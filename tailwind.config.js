/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-blue": "#183650",
        "light-blue": "#104C83",
        "deep-orange": "#E77620",
        "light-orange": "#E89759",
        "bg-grey": "#F0F0F0",
        "dark-grey": "#D9D9D9",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
