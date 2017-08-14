const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: `${__dirname}/src/index.js`,
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundle.[chunkhash].js'
	},
	devtool: 'source-map',
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
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			inject: 'body'
		}),
		new ExtractTextPlugin('[name].bundle.[chunkhash].css'),
		new UglifyJsPlugin({
			sourceMap: true,
			comments: false,
		})
	]
};
