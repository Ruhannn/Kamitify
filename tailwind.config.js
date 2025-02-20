/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#47D05D",
        background: "#121212",
        header: "#050505",
        hover: "#313131",
        textLight: "#FFFFFF",
        textFaded: "#ABABAB",
        border: "#313131",
      },
      gridTemplateColumns: {
        player: "85px repeat(10, minmax(0, 1fr)) 85px;",
      },
    },
  },
  plugins: [],
};
