const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const productionConfig = require('./webpack.production.config');

module.exports = {
  ...productionConfig,
  plugins: [...productionConfig.plugins, new BundleAnalyzerPlugin()],
};
