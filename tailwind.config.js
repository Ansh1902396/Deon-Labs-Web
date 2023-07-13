/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        crimson: "#ff306e",
        gray: {
          "100": "#121212",
          "200": "rgba(255, 255, 255, 0.16)",
          "300": "rgba(255, 255, 255, 0.2)",
          "400": "rgba(14, 14, 14, 0.54)",
        },
      },
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "41xl": "60px",
        "7xl": "26px",
      },
    },
    fontSize: {
      xs: "12px",
      mini: "15px",
      "21xl": "40px",
      "3xl": "22px",
      "25xl": "44px",
      "77xl": "96px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
