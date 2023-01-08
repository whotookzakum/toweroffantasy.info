import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md']
		})
	],
	extensions: ['.svelte', '.md'],
	kit: {
		// adapter: adapter(
		// 	{
		// 		// default options are shown. On some platforms
		// 		// these options are set automatically — see below
		// 		pages: 'build',
		// 		assets: 'build',
		// 		fallback: null,
		// 		precompress: false
		// 	}
		// ),
		// prerender: {
		// 	// This can be false if you're using a fallback (i.e. SPA mode)
		// 	default: true
		// }
		adapter: adapter()
	}
};

export default config;
