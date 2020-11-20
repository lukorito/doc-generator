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
	rules: {
		"radix": 0,
		"no-restricted-syntax": 0,
		"no-await-in-loop": 0,
		"no-console": 0,
		"consistent-return": 0,
		"@typescript-eslint/no-unused-vars": 0,
		"@typescript-eslint/no-use-before-define": 0,
		"@typescript-eslint/no-explicit-any": 0,
		"import/prefer-default-export": 0,
		"import/no-cycle": 0,
		"@typescript-eslint/no-floating-promises" : 0,
		"import/extensions": [
			"error",
			"always",
			{
				ts: "never",
				tsx: "never",
				js: "never",
				jsx: "never"
			}
		]
	},
	settings: {
		"import/resolver": {
			"node": {
				"moduleDirectory": ["node_modules", "src/"],
			}
		}
	}
};