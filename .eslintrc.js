const path = require('path');

module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "comma-dangle": 0,
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "object-curly-newline": 0,
    "jsx-a11y/click-events-have-key-events": 0, // not all click handlers need keyboard events
    "arrow-parens": 0,
    "implicit-arrow-linebreak": 0,
    "react/button-has-type": 0, // does not recognize dynamic assignment
    "react/jsx-filename-extension": 0,
    "react/require-default-props": 0, // dont need every prop to have a default
    "react/jsx-one-expression-per-line": 0,
    "react/destructuring-assignment": 0,
    "react/forbid-prop-types": ['error', { forbid: ['any'] }]
  },
  "globals": {
    "document": true,
    "window": true
  }
};
