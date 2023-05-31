const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Battleship',
      favicon: './src/images/ship.ico'
    })
  ],
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"]
    }, {
      test: /\.(png|svg|jpg|jpeg|gif|mp4)$/i,
      type: 'asset/resource',
    }]
  }
};