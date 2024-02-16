/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "header-gray": "#0E0E0E",
        "shadow-color": "#28283d",
      },
      boxShadow: {
        "3xl": "0px 0px 3px 7px",
        "4xl": "3px 4px 23px 5px",
      },
      gap: {
        500: "500px",
        200: "200px",
      },
    },
  },
  plugins: [],
};
