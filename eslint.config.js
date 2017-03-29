module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es6': true,
		'node': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaFeatures': {
			'experimentalObjectRestSpread': true,
			'jsx': true
		},
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			0
		],
		'quotes': [
			0
		],
		'semi': [
			0
		],
		'no-unused-vars': [
			0
		],
		'no-console': [
			0
		]
	}
}
