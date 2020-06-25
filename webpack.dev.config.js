const merge = require('webpack-merge');
const common = require('./webpack.common.config');

const config = {
	mode: 'development',
	devtool: 'inline-source-map'
};

module.exports = merge(common, config);
