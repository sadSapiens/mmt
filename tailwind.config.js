module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
    },
    // screens: {
    //   tablet: "640px",
    //   // => @media (min-width: 640px) { ... }

    //   laptop: "1024px",
    //   // => @media (min-width: 1024px) { ... }

    //   desktop: "1280px",
    //   // => @media (min-width: 1280px) { ... }
    // },
  },
  plugins: [],
};
