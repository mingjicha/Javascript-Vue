import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		// alias는 별칭을 의미
		alias: {
			// @ = src 주소
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
