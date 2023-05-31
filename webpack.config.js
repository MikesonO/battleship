const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Battleship'
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