module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		"project": "./tsconfig.json",
		"sourceType": "module",
		"ecmaVersion": 8
	},
	plugins: [
		'@typescript-eslint',
	],
	env: {
		node: true
	},
	extends: [
		"airbnb-base",
		"plugin:import/typescript",
		'plugin:@typescript-eslint/recommended',
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:prettier/recommended",
		"prettier/@typescript-eslint"
	],
	settings: {
		"import/resolver": {
			"node": {
				"moduleDirectory": ["node_modules", "src/"]
			}
		}
	}
};