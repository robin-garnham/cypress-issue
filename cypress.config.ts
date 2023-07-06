import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    defaultCommandTimeout: 10000,
    experimentalStudio: true,
    baseUrl: "https://www.google.com",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
});
