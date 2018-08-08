const path = require('path');

module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "comma-dangle": 0,
    "no-shadow": 0,
    "no-use-before-define": [2, "nofunc"],
    "react/jsx-filename-extension": 0,
    "react/jsx-boolean-value": 0,
    "react/no-multi-comp": [2, { "ignoreStateless": true }],
    // "react/forbid-prop-types": 0,
    // "camelcase": ["error"],
    "indent": [2, 2, { "SwitchCase": 1 }],
    "id-length": 0,
    "react/require-extension": 0,
    "react/no-unsafe": 0,

    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",

    // Disable this check because of test code in the src folder
    // https://github.com/eslint/eslint/pull/7073
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "template-tag-spacing": ["off", "always"],
    "camelcase": [0, { "ignoreDestructuring": true }],
    "padded-blocks": 0,
    "import/imports-first": 0,
    "react/jsx-tag-spacing": ["error", { "beforeSelfClosing": "always" }],

    // ignored rules
    // "template-curly-spacing": "off",
    "react/no-access-state-in-setstate": 0,
    "react/destructuring-assignment": 0,
    "react/forbid-prop-types": 0,
    "implicit-arrow-linebreak": 0,
    "arrow-parens": 0,
    "object-curly-newline": 0,
    "react/jsx-wrap-multilines": 0,
    "react/no-unused-state": 0,
    "no-else-return": 0,
    "react/require-default-props": 0,
    "function-paren-newline": 0,
    "no-multiple-empty-lines": 0,
    "no-restricted-properties": 0,
    "import/no-useless-path-segments": 0,
    "no-multiple-empty-lines": 0,
    "prefer-destructuring": 0,
    "import/no-useless-path-segments": 0,
    "semi-style": 0,
    "class-methods-use-this": 0,
    "operator-linebreak": 0,
    "spaced-comment": 0,
    "no-restricted-globals": 0,
    "import/extensions": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-closing-tag-location": 0,
    "import/no-cycle": 0,
    "react/sort-comp": 0,
    "react/no-unused-prop-types": 0,
    "comma-style": 0,
    "no-plusplus": 0,
    "no-return-assign": 0,
    "jsx-a11y/label-has-for": 0,
    "react/jsx-curly-brace-presence": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "react/no-array-index-key": 0,
    "import/no-named-default": 0,
    "react/default-props-match-prop-types": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/tabindex-no-positive": 0,
    "jsx-a11y/no-noninteractive-tabindex": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/no-unescaped-entities": 0,
    "lines-between-class-members": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/button-has-type": 0,
    "no-useless-return": 0,
    "jsx-a11y/alt-text": 0,
    "import/named": 0,
    "react/jsx-max-props-per-line": 0,
    "react/no-danger": 0,
    "jsx-a11y/mouse-events-have-key-events": 0
  },

  "env": {
    "browser": true,
    "mocha": true,
    "jest/globals": true,
    "es6": true
  },

  "globals": {
    "Intercom": true,
    "PRODUCTION": true,
    "fashionTradeSettings": true,
    "dataLayer": true,
    "Cypress": true,
    "cy": true,
    "releaseVersion": true,
    "__DEV__": true,
    "__TEST__": true,
    "__PROD__": true,
    "__FEATURE_PROPOSAL__": true,
    "__FEATURE_SHOWROOM_PRODUCTS__": true,

    // Jest globals
    "jest": true,
    "mount": true,
    "shallow": true,
    "render": true,
    "shallowWithTheme": true,
    "mountWithTheme": true,
    "theme": true,
  },

  "plugins": [
    "jest",
    "react"
  ],

  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },

  settings: {
    'import/resolver': {
      node: {
        paths: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'src/components')
        ],
      },
    }
  }
};
