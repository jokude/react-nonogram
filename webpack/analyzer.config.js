const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const merge = require("webpack-merge");
const config = require('./production.config');

module.exports = merge(config, {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      logLevel: 'warn'
    }),
  ],
});