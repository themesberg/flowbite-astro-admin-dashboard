/** @type {import("@types/eslint").Linter.Config} */

module.exports = {
	root: true,

	settings: {
		/* This loads <rootdir>/tsconfig.json to eslint */
		'import/resolver': {
			typescript: { project: ['./tsconfig.json'] },
		},
	},

	env: {
		browser: true,
		node: true,
	},
	
	files: ["*.ts", "*.tsx"],
	parser: "typescript-eslint-parser-for-extra-files",
	parserOptions: {
			project: "./your/tsconfig.json"
			// ....
	},
},
{
	files: ["*.svelte"],
	parser: "svelte-eslint-parser",
	parserOptions: {
			parser: require("typescript-eslint-parser-for-extra-files"),
			// Or
			// "parser": {
			//     "ts": require("typescript-eslint-parser-for-extra-files")
			// }
			project: "./tsconfig.json"

	},

	overrides: [

		
		/* — TS — */
		{
			files: ['*.ts', '*.mts', '*.cts'],
			plugins: [
				//
				'eslint-plugin-tsdoc',
				'@typescript-eslint',
			],

			parser: 
			'@typescript-eslint/parser',
			parserOptions: {
				project: ['./tsconfig.json'] /* Specify it only for TypeScript files */,
				ecmaVersion: 'latest',
				sourceType: 'module',
			},

			extends: [
				'airbnb-base',
				'airbnb-typescript',
				'plugin:astro/recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:@typescript-eslint/recommended-requiring-type-checking',
				'plugin:@typescript-eslint/strict',
				'eslint:recommended',
				'prettier',
			],
			"overrides": [
        {
            "files": ["*.astro"],
            "parser": "astro-eslint-parser"
        }
    ],
			rules: {
				'tsdoc/syntax': 'warn',
				'@typescript-eslint/no-unused-vars': [
					'error',
					{ argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' },
				],
				'@typescript-eslint/no-non-null-assertion': 'off',
				'max-lines': [
					'warn',
					{ max: 250, skipComments: true, skipBlankLines: true },
				],
				'react/jsx-filename-extension': 'off',
				'import/prefer-default-export': 'off',
				'import/extensions': 'off',
			},
		},

		/* — JS — */
		{
			files: [
				// TODO: fix "Parsing error: The keyword 'import' is reserved" in `*.mjs`
				'*.js',
				'*.mjs',
				'*.cjs',
			],
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
			extends: ['airbnb-base', 'eslint:recommended', 'prettier'],
			rules: {
				'import/prefer-default-export': 'off',
			},
		},

		/* Astro */
		{
			files: ['*.astro'],
			extends: [
				//
				'airbnb-base',
				'plugin:astro/recommended',
				'prettier',
			],
			parser: 'astro-eslint-parser',
			parserOptions: {
				/* Prevents "unresolved" when using "paths" */
				// project: ['./tsconfig.json'],
				parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
			},
			rules: {
				'import/no-absolute-path': 'off',
				/* ESLint won't capture ambient declarations in Astro files. */
				"astro/no-conflict-set-directives": "error",
        "astro/no-unused-define-vars-in-style": "error",
				'no-undef': 'off',
				'import/extensions': 'off',
				'import/no-named-as-default-member': 'off',
				'import/no-named-as-default': 'off',
				'import/prefer-default-export': 'off',
				'import/no-unresolved': [
					2,
					{
						ignore: [
							//
							'@astrojs/image/components',
						],
					},
				],
				'import/no-extraneous-dependencies': 'off',
				'max-lines': [
					'error',
					{ max: 250, skipComments: true, skipBlankLines: true },
				],
				'no-unused-vars': ['error', { varsIgnorePattern: 'Props' }],
			},
			globals: {
				/* Fix for unfound Astro namespace */
				astroHTML: 'readonly',
			},
		},
			
			{
				files: ["**/*.astro/*.js", "*.astro/*.js"],
				env: {
					browser: true,
					es2020: true,
				},
				parserOptions: {
					sourceType: "module",
				},
				rules: {
					"prettier/prettier": "off",
				},

		},
	],
	
};
