const path = require('path');
const webpack = require('webpack');

module.exports = {
  title: 'Wardrobe',
  defaultExample: true,
  pagePerSection: true,
  skipComponentsWithoutExample: true,
  assetsDir: 'src/static',

  sections: [
    { name: 'Style', components: 'src/style/**/*.js' },
    { name: 'Components', components: 'src/components/**/*.js' },
    { name: 'Animations', components: 'src/animations/**/*.js' },
  ],

  components: 'src/components/**/*.js',

  // TODO: Get the right import statement: import { Component } from '@fashiontrade/wardrobe`.
  // Current Problem: DropdownItem should be used as Dropdown.Item but is imported from Dropdown
  getComponentPathLine() {
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
          href: 'style.css',
        },
      ],
    },
  },

  compilerConfig: {
    transforms: { dangerousTaggedTemplateString: true },
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
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          IS_STYLEGUIDE: JSON.stringify(true),
        },
      }),
    ],
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
