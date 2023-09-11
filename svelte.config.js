export default {
  // svelte options
  extensions: ['.svelte'],
  compilerOptions: { hydratable: true },
  preprocess: [],
  onwarn: (warning, handler) => handler(warning),
  // plugin options
  vitePlugin: {
    exclude: [],
    // experimental options
			experimental: {
				optimizeHoistedScript: true,
			},
  }
};
