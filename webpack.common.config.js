const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'drawer.js',
		publicPath: '/dist/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				resolve: { extensions: ['.js', '.jsx'] },
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.scss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
			{
				test: /\.less$/,
				use: ['css-loader', 'less-loader']
			},
			{
				test: /\.png$/,
				loader: 'url-loader?limit=100000'
			},
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff'
			},
			{
				test: /\.(ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?|(jpg|gif)$/,
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'drawer.css'
		})
	]
};
