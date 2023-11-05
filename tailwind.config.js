/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui", "flowbite/plugin")],
};
