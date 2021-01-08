module.exports = {
  purge: ["./*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueish: "#1078b7",
        main: "#083b5b",
        green: "#63ca6b",
        // orange: "#f8b133",
        orange: {
          DEFAULT: "#F8B133",
          100: "#FFFCF8",
          200: "#FDEAC7",
          300: "#FBD796",
          400: "#FAC464",
          500: "#F8B133",
          600: "#F09C08",
          700: "#BE7C07",
          800: "#8D5C05",
          900: "#5C3C03",
        },
        "athens-gray": {
          DEFAULT: "#F6F7F9",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#F6F7F9",
          600: "#D7DCE5",
          700: "#B9C1D0",
          800: "#9AA5BC",
          900: "#7C8AA7",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
