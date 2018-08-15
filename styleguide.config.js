const path = require('path');

module.exports = {
  title: 'Wardrobe',
  defaultExample: true,
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  assetsDir: 'src/static',

  sections: [
    { name: 'Components', components: 'src/components/**/*.js' },
    { name: 'Style', components: 'src/style/**/*.js' },
  ],

  // Global component style guide styling
  components: 'src/components/**/*.js',
  styles: {
    StyleGuide: {
      '@global body': {
        fontFamily: '"Avenir Next", Arial, "Helvetica Neue", Helvetica, sans-serif',
        fontSize: '16px',
      },
    },
  },

  // TODO: Get the right import statement: import { Component } from '@fashiontrade/wardrobe`.
  // Current Problem: DropdownItem should be used as Dropdown.Item but is imported from Dropdown
  getComponentPathLine(componentPath) {
    return null;
  },

  styleguideComponents: {
    Wrapper: path.join(__dirname, 'tools/ThemeWrapper'),
  },

  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules&importLoaders=1',
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader',
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: 'style-loader', // creates style nodes from JS strings
            },
            {
              loader: 'css-loader', // translates CSS into CommonJS
            },
            {
              loader: 'sass-loader', // compiles Sass to CSS
            },
          ],
        },
      ],
    },
    resolve: {
      modules: [
        path.join(__dirname, 'src'),
        path.join(__dirname, 'src/components'),
        'node_modules',
      ],
      extensions: ['.js', '.scss'],
    },
  },
};
