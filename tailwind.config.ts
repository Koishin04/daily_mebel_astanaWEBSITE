import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff7eb",
          100: "#ffeed6",
          200: "#ffd9ad",
          300: "#ffc584",
          400: "#ffb05b",
          500: "#ff9c33",     // <-- bg-brand-500
          600: "#cc7d29",
          700: "#995e1f",
          800: "#663e14",
          900: "#33200a",
        },
      },
    },
  },
  plugins: [],
};

export default config;