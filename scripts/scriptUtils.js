/* eslint no-console: 0 */
const colors = require('colors');
const fs = require('fs');

module.exports = {
  logInfo: (message) => {
    console.log(colors.blue(message));
  },

  logWarning: (message) => {
    console.log(colors.yellow(message));
  },

  logError: (message) => {
    console.log(colors.red(message));
  },

  isComponentDirectory: (name) =>
    fs.lstatSync(`./src/components/${name}`).isDirectory(),
};
