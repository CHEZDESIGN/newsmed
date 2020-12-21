module.exports = {
  purge: ["./*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blueish: "rgba(0, 120, 201, .9)",
        main: "rgba(0, 120, 201, 1)",
        green: "#63ca6b",
        orange: "#f8b133",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
