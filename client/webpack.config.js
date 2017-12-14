var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:9090',
    './App/index'
  ],
  output: {
    path: path.join(__dirname, 'wwwroot/js'),
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot-loader', 'babel-loader'],
      include: path.join(__dirname, 'App'),
    }]
  },
  devServer: {
    port: 9090,
    inline: true,
    hot: true,
    contentBase: "./wwwroot"
  }
};