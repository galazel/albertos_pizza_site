/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Flowbite React
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}", // Flowbite core
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["Birthstone", "cursive"],
        armata: ["Armata", "sans-serif"],
        "lexend-exa": ["Lexend Exa", "sans-serif"],
        "lexend-giga": ["Lexend Giga", "sans-serif"],
      },
    },
  },

  // eslint-disable-next-line no-undef
  plugins: [require("flowbite/plugin")],
};
