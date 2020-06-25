const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const common = require('./webpack.common.config');

const config = {
	mode: 'production',
	optimization: {
		minimizer: [
			new OptimizeCSSAssetsPlugin({
				cssProcessorOptions: {
					map: {
						inline: false,
						annotation: true
					}
				}
			}),
			new TerserPlugin({
				parallel: true,
				cache: true,
				sourceMap: false
			})
		]
	}
};

module.exports = merge(common, config);
