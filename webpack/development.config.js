const path = require("path");
const express = require("express");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./common.config.js");

module.exports = merge(common, {
  devtool: "inline-source-map",
  mode: "development",
  output: {
    filename: "bundle.development.js",
    publicPath: "/"
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
      const assetsPath = path.resolve(__dirname, "../assets");
      app.use("/assets", express.static(assetsPath));
    }
  }
});
