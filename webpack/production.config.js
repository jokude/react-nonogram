const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const common = require("./common.config.js");

const resolve = location => path.resolve(__dirname, location);

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].bundle.production.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new CopyWebpackPlugin([
      {
        from: resolve("../src/assets"),
        to: resolve("../build/assets")
      }
    ])
  ],
  optimization: {
    minimizer: [new TerserWebpackPlugin()],
  }
});
