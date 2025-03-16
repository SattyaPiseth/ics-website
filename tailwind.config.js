/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const flowbite = require("flowbite-react/tailwind");

module.exports = withMT({
  darkMode: "class", // enables class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}", // Ensure all files are included
    "node_modules/flowbite-react/**/*.js", // Ensure Flowbite components are scanned
  ],
  theme: {
    screens: {
      xxxs: '320px', // Define xxs for screens starting from 320px
      xxs: '360px',   // Adjusted from earlier example if you need another step between xxxs and xs
      xs: "512px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1408px",

      "3xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontSize: {
        '2xs': '.65rem',  // Custom smaller font sizes
        '3xs': '.5rem'
      },
      fontFamily: {
        suwannaphum: ["Suwannaphum", "serif"],// Add Moul font
        poppins: ["Poppins", "sans-serif"], // Add Poppins font
      },
      colors: {
        primary: {
          DEFAULT: "#0070C0", // A blue shade from the logo
          light: "#0080C0", // Lighter shade of primary
          dark: "#0050A0", // Darker shade of primary
        },
        secondary: {
          DEFAULT: "#FF0000", // A red shade from the logo
        },
        white: "#FFFFFF", // White for the text in the "ICS"
        dark: "#202124", // A dark color for background/contrast (if needed)
      },
      spacing: {
        '14': '3.5rem',
        '40': '10rem', // Adjust as per dropdown width needs
      },
    },
  },
  plugins: [
    require("tailgrids/plugin"),
    require("@tailwindcss/line-clamp"),
    require("tailwind-scrollbar"),
    flowbite.plugin(),
  ],
});
