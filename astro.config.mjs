import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://themesberg.github.io/flowbite-astro-admin-dashboard',

	/* Like Vercel, Netlify, GH Pages… Mimicking for dev. server */
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
