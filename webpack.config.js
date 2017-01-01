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
	   {test: /\.ts$/, loaders: ['ts-loader', 'angular2-template-loader?keepUrl=true', 'angular2-router-loader']},
		 {test: /\.html$/, loader: 'html-loader'},
		 {test: /\.(jpe?g|png|gif|svg)$/i, loaders: [
      'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
      'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false']},
		 { test: /\.css$/, loader: "style-loader!css-loader?root=." },
		 {test: /\.js$/, loader: 'script-loader'}

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
