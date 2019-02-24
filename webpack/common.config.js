const path = require("path");
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
    publicPath: "/"
  },

  resolve: {
    alias: getAliases(),
    extensions: [".js", ".jsx", ".ts", ".tsx"]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve("../src/html/template.html"),
      minify: {
        collapseWhitespace: true
      }
    })
  ]
};
