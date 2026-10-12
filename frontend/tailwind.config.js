/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        luxury: {
          bg: "#0A050A",
          card: "#140A14",
          border: "#2A122A",
          pink: "#FF2A85",
          purple: "#9A1F6E",
          gold: "#FFD700",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
