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
		adapter: adapter(
			{
				pages: 'build',
				assets: 'build',
				fallback: null,
				precompress: false
			}
		)
	}
};

export default config;
