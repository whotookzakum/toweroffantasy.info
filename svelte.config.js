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
		adapter: adapter(),
		prerender: {
			handleMissingId: 'ignore'
		}
	}
};

export default config;
