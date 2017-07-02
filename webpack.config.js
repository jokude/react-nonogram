var path = require('path');

module.exports = {
   
  entry: {
    index: path.resolve(__dirname, 'src/main.js'),
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
    publicPath: 'http://vagrant.dev/',
  },

  devServer: {
    inline: true,
    hot: true,
    contentBase: path.resolve(__dirname, './src'),
    historyApiFallback: true
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.svg$/,
        loader: 'file-loader'
      }
    ]
  },

  resolve: {
    modules: [
      path.resolve('./node_modules')
    ]
  }
}