/** @type {import('tailwindcss').Config} */
export const content = ["./pages/**/*.{html,js}", "./*.{html,js}"];
export const theme = {
  extend: {
    colors: {
      dark: {
        DEFAULT: "#18181b",
        700: "#0e0e11",
      },
      "rose-of-sharon": {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde58a",
        300: "#fbd24e",
        400: "#fabe25",
        500: "#f49d0c",
        600: "#d87607",
        700: "#bc560a",
        800: "#923f0e",
        900: "#78340f",
        950: "#451a03",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    gridTemplateColumns: {
      "auto-fit-300": "repeat(auto-fit, minmax(300px, 1fr))",
    },
  },
  darkMode: "class",
};
export const plugins = [];
