module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 12
	},
	'plugins': [
		'react'
	],
	'rules': {
        "linebreak-style": 0,
        "arrow-parens": 0,
        "react/react-in-jsx-scope": 0,
        "require-jsdoc": 0,
		'indent': [
			'error',
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};
