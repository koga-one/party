/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      light: "#e9eaf5",
      neutral: "#0b1821",
      zen: "#00DC6E",
      shy: "#FFEB00",
      happy: "#FF663F",
      angry: "#FF0066",
      sad: "#0098C3",
    },
    fontFamily: {
      marker: "Permanent Marker, handwriting",
      slab: "Roboto Slab, sans-serif",
    },
  },
  plugins: [],
};
