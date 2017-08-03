const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const basePath = `${__dirname}/src/`;

module.exports = {
	devtool: 'inline-source-map',
	entry: `${basePath}index.js`,
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: './dist',
		compress: true,
		port: 8080
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
				options: {
					failOnError: true,
					failOnWarning: true
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'},
					{loader: 'sass-loader'}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: `${basePath}index.html`,
			filename: 'index.html',
			inject: 'body'
		})
	]
};
