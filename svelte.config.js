import adapter from '@sveltejs/adapter-static';
import path from 'path'
import { mdsvex } from 'mdsvex'
import preprocess from 'svelte-preprocess';

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
		alias: {
            $houdini: path.resolve('.', '$houdini'),
			$components: path.resolve('.', 'src/lib/components'),
        },
		prerender: {
			handleMissingId: 'warn',
			handleHttpError: 'warn',
			entries: [
				'/',
				// '/cn'
			]
		}
	}
};

export default config;
