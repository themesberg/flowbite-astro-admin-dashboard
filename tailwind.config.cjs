/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		//
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js',
	],
	theme: {
		extend: {},
	},

	plugins: [
		//
		require('flowbite/plugin'),
		require('flowbite-typography'),
	],

	safelist: ['justify-evenly'],
};
