module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./public/index.html",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
