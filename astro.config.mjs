import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: 'https://themesberg.github.io/flowbite-astro-admin-dashboard',

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
