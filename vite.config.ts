import { defineConfig } from 'vite';
import { UserConfigExport } from 'vite';

export default defineConfig({
	base: '/technical-assessment/',
	test: {
		globals: true,
		environment: 'jsdom',
	},
	plugins: [],
} as UserConfigExport);
