var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app/main.ts',
	output: {
	 path: './dist',
	 filename: 'app.bundle.js'
	},
	module: {
	 loaders: [
	   {test: /\.ts$/, loader: 'ts-loader'}
	]
	},
	resolve: {
	 extensions: ['.js', '.ts']
  },
	plugins: [
		new HtmlWebpackPlugin ({
			template: './src/index.html'
		}),
		new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    )
]
};
