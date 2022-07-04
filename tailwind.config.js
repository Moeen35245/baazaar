/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#434343",
        primary: "#1FB055",
        light: "#767779",
        lightX: "#8A8A8A",
        lightbg: "#E9F7EE",
        secondary: "#0048FF",
      },
      fontFamily: {
        signika: ["Signika Negative", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
