const path = require('path');
module.exports = {
	entry: './app.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loader: 'eslint-loader',
				exclude: /node_modules/,
				query: require(path.resolve(__dirname, 'eslint.config.js'))
			}
		],
		loaders: [
			{
				test: /\.coffee$/,
				loader: 'coffee-loader',
				exclude: /node_modules/
			},
			{
				// ? means a is optional
				test: /\.ya?ml$/,
				/* first apply yaml-loader to file (appConfig.yaml) and then give it to json-loader to transform yaml to json. can also be written like line 27 */
				loaders: ['json-loader', 'yaml-loader'],
				// loader: 'json-loader!yaml-loader',
				// where file resides
				include: path.resolve(__dirname, 'config')
			},
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				include: path.resolve(__dirname, 'ts')
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}
