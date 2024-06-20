const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://ultimateqa.com/complicated-page',
    // viewportHeight: 550,
    // viewportWidth: 660,
    experimentalStudio: true,
    
    //to disable autorun
    // "watchForFileChanges": false
  },
});

require('@applitools/eyes-cypress')(module);

/*
npm init -y
npm install cypress
npx cypress open

//plugin
npm install @applitools/eyes-cypress
npx eyes-setup  
APPLITOOLS_API_KEY="..."

//run
npx cypress run //if command prompt run

*/

