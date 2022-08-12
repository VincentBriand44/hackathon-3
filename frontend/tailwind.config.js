module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        "hero-image": 'url("./src/assets/6.jpg")',
        "hero-gif": 'url("./src/assets/brain.gif")',
        "tc-gif": 'url("./src/assets/tc.gif")',
      },
    },
  },
  // eslint-disable-next-line
  plugins: [require("daisyui")],
};
