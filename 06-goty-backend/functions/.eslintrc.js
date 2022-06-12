module.exports = {
	root: true,
	env: {
		es6: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'google',
		'plugin:@typescript-eslint/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	ignorePatterns: [
		'/lib/**/*', // Ignore built files.
		'.eslintrc.js',
	],
	plugins: ['@typescript-eslint', 'import'],
	rules: {
		'import/no-unresolved': 0,

		////////// Stylistic Issues //////////
		indent: [2, 'tab'],
		'no-tabs': 0,
		'object-curly-spacing': [0, 'allways'],
		'brace-style': 2, // enforce one true brace style (off by default)
		camelcase: 2, // require camel case names
		'comma-spacing': 0, // enforce spacing before and after comma
		'comma-style': [2, 'last'], // enforce one true comma style (off by default)
		'eol-last': 1, // enforce newline at the end of file, with no multiple empty lines
		'func-names': 1, // require function expressions to have a name (off by default)
		'func-style': [1, 'declaration'], // enforces use of function declarations or expressions (off by default)
		'no-inline-comments': 0, // disallow comments inline after code (off by default)
		'no-lonely-if': 0, // disallow if as the only statement in an else block (off by default)
		'no-mixed-spaces-and-tabs': 2, // disallow mixed spaces and tabs for indentation
		'no-multiple-empty-lines': 1, // disallow multiple empty lines (off by default)
		'no-nested-ternary': 0, // disallow nested ternary expressions (off by default)
		'semi-spacing': 2, // disallow space before semicolon
		'no-spaced-func': 2, // disallow space between function identifier and application
		'no-ternary': 0, // disallow the use of ternary operators (off by default)
		'no-trailing-spaces': 1, // disallow trailing whitespace at the end of lines
		'no-underscore-dangle': 0, // disallow dangling underscores in identifiers
		'one-var': 0, // allow just one var statement per function (off by default)
		'padded-blocks': 0, // enforce padding within blocks (off by default)
		'quote-props': [2, 'as-needed'], // require quotes around object literal property names (off by default)
		quotes: [1, 'single'], // specify whether double or single quotes should be used
		semi: [1, 'always'], // require or disallow use of semicolons instead of ASI
		'sort-vars': 0, // sort variables within the same declaration block (off by default)
		'space-after-function-name': 0, // require a space after function names (off by default)
		'space-after-keywords': 0, // require a space after certain keywords (off by default)
		'space-before-blocks': 0, // require or disallow space before blocks (off by default)
		'space-in-brackets': [0, 'allways'], // require or disallow spaces inside brackets (off by default)
		'spaced-line-comment': 0, // require or disallow a space immediately following the // in a line comment (off by default)
	},
};
