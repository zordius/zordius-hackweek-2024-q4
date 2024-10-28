const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
	entry: './src/js/index.js',
	output: {
		path: __dirname + '/build',
		filename: '[name].js'
	},
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Select a delivery method...',
    template: './src/html/index.html',
  })],
};
