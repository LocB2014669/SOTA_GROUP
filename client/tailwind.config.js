const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        brown: "#930d18",
        blueDe: "#2a3f50",
        soft: "#4D4D4D",
        price: "#eb0000",
        hard: "#777",
        inputBor: "#E0E0E0",
      },
      boxShadow: {
        display: "0px 1px 69.16px 6.84px rgba(20,64,51,0.05)",
      },
      keyframes: {
        popup: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(-50.0deg)" },
          "20%": { transform: "rotate(50.0deg)" },
          "30%": { transform: "rotate(-50.0deg)" },
          "40%": { transform: "rotate(50.0deg)" },
          "50%": { transform: "rotate(0.0deg)" },
          // "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        "popup-hand": "popup 1s infinite ease-out",
      },
    },
  },
  plugins: [require("daisyui")],
};
