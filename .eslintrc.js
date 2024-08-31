// eslint-disable-next-line import/no-commonjs
module.exports = {
	root: true,
	extends: ["@modern-js-app"],
	rules: {
		indent: ["error", "tab", { SwitchCase: 1 }],
		"no-tabs": "off",
		singleQuote: true,
		"prettier/prettier": ["error", { useTabs: true, tabWidth: 4, printWidth: 120 }],
		"max-len": ["error", { code: 120, comments: 150, ignoreUrls: true }],
		"@typescript-eslint/prefer-for-of": "off",
	},
};
