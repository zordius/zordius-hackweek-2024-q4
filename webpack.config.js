const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
	entry: './src/js/index.js',
	output: {
		path: __dirname + '/build',
		filename: '[name].js'
	},
  plugins: [new HtmlWebpackPlugin()],
};
