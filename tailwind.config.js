/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        14: "14px",
      },
      fontFamily: {
        sans: ['"Open Sans"'],
      },
    },
  },
  plugins: [],
};
