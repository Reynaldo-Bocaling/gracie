/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Oswald", "sans-serif"],
        extra: [""],
      },
      fontSize: {
        "10xl": "9rem",
        "11xl": "10rem",
        "12xl": "12rem",
      },
      backgroundColor: {
        main: "",
      },
    },
  },
  plugins: [],
};
