/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navbarmain": "#21222A",
        "navbartext": "#DEEBF8",
        "navbarmaintext": "#61DAFB",
        "bodycolor": "#282D35",
        "reactlogo": "#33373E",
      },
    },
  },
  plugins: [],
}
