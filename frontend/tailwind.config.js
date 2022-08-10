module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": 'url("./src/assets/6.jpg")',
      },
    },
  },
  // eslint-disable-next-line
  plugins: [require("daisyui")],
};
