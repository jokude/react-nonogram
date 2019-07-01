const path = require("path");
const express = require("express");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./common.config.js");

const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = merge(common, {
  devtool: "inline-source-map",
  mode: "development",
  output: {
    filename: "[name].bundle.development.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
        }
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    inline: true,
    hot: true,
    port: 3000,
    host: "0.0.0.0",
    public: "localhost",
    publicPath: "/",
    historyApiFallback: true,
    before: function(app) {
      const assetsPath = path.resolve(__dirname, "../src/assets");
      app.use("/assets", express.static(assetsPath));
    }
  }
});
