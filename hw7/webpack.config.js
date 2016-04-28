var path = require('path');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: './src/entry',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel'],
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			loaders: ['style', 'css'],
			exclude: /node_modules/
		}],
	},
};
