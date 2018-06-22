const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: './src/client/index.tsx',
	output: {
		path: path.resolve(__dirname, 'public/js'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.jsx', '.tsx', '.ts', '.js']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader'
			}
		]
	}
};

