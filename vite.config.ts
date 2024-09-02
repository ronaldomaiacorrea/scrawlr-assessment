import { defineConfig } from 'vite';
import { UserConfigExport } from 'vite';

export default defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
	},
	plugins: [],
} as UserConfigExport);
