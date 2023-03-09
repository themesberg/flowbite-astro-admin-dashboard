import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://themesberg.github.io',
	base: process.env.CI ? '/flowbite-astro-admin-dashboard' : undefined,

	/* Like Vercel, Netlify,… Mimicking for dev. server */
	trailingSlash: 'always',

	server: {
		/* Dev. server only */
		port: 2121,
	},
	integrations: [
		//
		sitemap(),
		tailwind(),
	],
});
