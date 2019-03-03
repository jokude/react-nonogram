const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const getAliases = require("./aliases");

const resolve = location => path.resolve(__dirname, location);

module.exports = {
  target: "web",

  entry: {
    index: resolve("../src/index.ts")
  },

  output: {
    path: resolve("../build"),
    publicPath: process.env.PUBLIC_PATH || '/'
  },

  resolve: {
    alias: getAliases(),
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },

  plugins: [
    new webpack.DefinePlugin({
      BASE_PATH: JSON.stringify(process.env.PUBLIC_PATH || '/'),
      USE_HASH_ROUTER: Boolean(process.env.USE_HASH_ROUTER)
    }),
    new HtmlWebpackPlugin({
      template: resolve("../src/html/template.html"),
      minify: {
        collapseWhitespace: true
      }
    })
  ]
};
