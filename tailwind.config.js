/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require('tailwindcss/colors');

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    screens: {
      xs: "512px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        moul: ['Moul', 'cursive'], // Add Moul font
        poppins: ['Poppins', 'sans-serif'], // Add Poppins font
      },
      colors: {
        primary: {
          DEFAULT: '#0070C0',  // A blue shade from the logo
        },
        secondary: {
          DEFAULT: '#FF0000',  // A red shade from the logo
        },
        white: '#FFFFFF',     // White for the text in the "ICS"
        dark: '#202124',      // A dark color for background/contrast (if needed)
      },
    },
  },
  plugins: [
    require("tailgrids/plugin"),
    require("@tailwindcss/line-clamp"),
    require('tailwind-scrollbar'), // Add the line-clamp plugin
  ],
});
