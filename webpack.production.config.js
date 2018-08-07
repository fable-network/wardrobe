const path = require('path');
const fs = require('fs');
const COMPONENTS_PATH = './src/components';

const isDirectory = name => fs.lstatSync(`${COMPONENTS_PATH}/${name}`).isDirectory();

// Gets all directories in the components folder, and creates entry points for them.
const getEntryPoints = () => {
  const componentNames = fs.readdirSync(COMPONENTS_PATH).filter(isDirectory);
  return componentNames.reduce((result, name) => {
    result[name] = path.resolve(__dirname, `${COMPONENTS_PATH}/index.js`);
    return result;
  }, {});
}

module.exports = {
  entry: getEntryPoints(),
  output: {
    path: path.resolve(__dirname, './dist/components'),
    filename: '[name].js',
    library: 'wardrobe',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react']
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1',
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  }
};
