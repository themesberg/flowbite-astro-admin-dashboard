import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import solidJs from "@astrojs/solid-js";
import prefetch from "@astrojs/prefetch";
import partytown from "@astrojs/partytown";
import vue from "@astrojs/vue";
import react from "@astrojs/react";
import preact from "@astrojs/preact";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import yaml from "@rollup/plugin-yaml";


const DEV_PORT = 2121;


// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? 'https://devopsick.com' : `http://localhost:${DEV_PORT}`,
  base: process.env.CI ? '/flowbite-astro-admin-dashboard' : undefined,
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
	vite: {
			ssr: {
				external: ["svgo"],
			},
    plugins: [yaml()],
  },
  integrations: [
  //
  sitemap(), tailwind(), prefetch(), partytown(), vue(), 
	preact({
		include: ['**/preact/*'],
	}),
	react({
		include: ['**/react/*'],
	}),
	solidJs({
		include: ['**/solidJs/*'],
	}),
	svelte({ preprocess: [] })],
  
});
