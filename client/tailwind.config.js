/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "body-bg": "#ecf0f3",
        "d-body-bg": "#212428",
        primary: "#ff014f",
        "d-primary": "#ff014f",
        secondary: "#3c3e41",
        "d-secondary": "#c4cfde",
        tertiary: "#0d1013",
        dark: "#d9dee2",
        "d-dark": "#17191c",
        darker: "#1e1f21",
        subtitle: "#f9004d",
        "color-lightn": "#3c3e41",
        "d-color-lightn": "#c4cfde",
        "primary-gradient": "#6A67CA",
        "gradient-to": "#fc636b",
        "d-tertiary": "#0d1013",
        "d-darker": "#1e1f21",
        "d-subtitle": "#f9004d",
        "d-primary-gradient": "#6a67ce",
        "d-gradient-to": "#fc636b",
        "color-border-white": "#dce1e4",
        "d-color-border-white": "#191b1e",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "5rem",
        },
      },
      backgroundImage: {
        "gradient-box-w": "linear-gradient(145deg, #e2e8ec, #ffffff)",
        "d-gradient-box-w": "linear-gradient(145deg, #1e2024, #23272b)",
      },
      boxShadow: {
        "light-white-3": "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff",
        "dark-white-3": "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
