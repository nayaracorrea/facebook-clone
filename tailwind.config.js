/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "gray-facebook": "#F0F2F5",
        "gray2-facebook": "#8A8D9F",
        "blue-facebook": "#1877F2",
        "blue2-facebook": "#166FE5",
        "green-facebook": "#36A420",
      },
      spacing: {
        "980px": "980px",
        "580px": "580px",
        "380px": "380px",
        "40px": "40px",
        "80%": "80%",
        "75%": "75%",
        "25%": "25%",
        "30px": "30px",
      },
      fontFamily: {
        "facebook-family": [
          "SFProDisplay-Regular",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
