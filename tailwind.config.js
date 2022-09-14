/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        blue: "#505ECE",
        violet: "#1C122E",
        black: "#00000A",
        white: "#F5F5F5",
        purple: "#2C233D",
        grayish: "#EFF4F9",
        aqua: "#307388"
      },
    
    },
    
  },
  plugins: [],
};
