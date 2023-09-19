/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: "#150E28",
        },
        primary: {
          DEFAULT: "#903AFF",
        },
        tertiary: {
          DEFAULT: "#D434FE",
        },
        pink: {
          DEFAULT: "#FF26B9",
        },
      },
      background: {
        btnGradient:
          "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
      },
      boxShadow: {
        register: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};