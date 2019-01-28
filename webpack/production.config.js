const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const common = require("./common.config.js");

const resolve = location => path.resolve(__dirname, location);

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "bundle.production.js"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new UglifyJsPlugin(),
    new CopyWebpackPlugin([
      {
        from: resolve("../assets"),
        to: resolve("../build/assets")
      }
    ])
  ]
});
