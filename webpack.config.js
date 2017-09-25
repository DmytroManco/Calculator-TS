const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/index.ts',
	devtool: 'inline-source-map',
	module: {
		loaders: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader'
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}
		]
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js']
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};