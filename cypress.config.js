const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const dotenv = require('dotenv');
dotenv.config();

async function setupNodeEvents(on, config) {
  on('task', {
    log(message) {
      console.log(message)
      return null
    },
  })
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.ENVIRONMENT,
    specPattern: "**/*.feature",
    supportFile: false,
    setupNodeEvents,
  },
  env: {
    PATH: process.env.PATH,
  },
});