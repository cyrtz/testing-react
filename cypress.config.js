const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
  e2e: {
    viewportWidth: 800,
    viewportHeight: 800,
  }
});
