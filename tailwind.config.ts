import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./src/routes/**/*.svelte'
	],

	theme: {
		extend: {}
	},

	plugins: []
} satisfies Config;
