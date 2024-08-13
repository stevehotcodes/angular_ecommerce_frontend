import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl:"http://localhost:4200",
    defaultCommandTimeout: 10000, // Slow down command execution by waiting 10 seconds
    pageLoadTimeout: 60000, 
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  
  },
});
