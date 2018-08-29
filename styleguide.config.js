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

  components: 'src/components/**/*.js',

  // TODO: Get the right import statement: import { Component } from '@fashiontrade/wardrobe`.
  // Current Problem: DropdownItem should be used as Dropdown.Item but is imported from Dropdown
  getComponentPathLine(componentPath) {
    return null;
  },

  styleguideComponents: {
    Wrapper: path.join(__dirname, 'tools/ThemeWrapper'),
  },

  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'style.css',
        },
      ],
    },
  },

  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules&importLoaders=1',
        },
        {
          test: /\.svg$/,
          loader: 'svg-sprite-loader',
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
