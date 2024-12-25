import { defineConfig, loadEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd())
	return {
		plugins: [
			vue(),
			viteMockServe({
				mockPath: 'mock',
				enable: env.VITE_APP_ENABLE_MOCK === 'true',
				watchFiles: true,
			}),
		],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
		server: {
			host: env.VITE_APP_SERVER_HOST,
			port: Number(env.VITE_APP_SERVER_PORT),
			proxy: {
				[env.VITE_APP_PROXY_BASE_API]: {
					target: env.VITE_APP_PROXY_TARGET,
					changeOrigin: env.VITE_APP_PROXY_CHANGE_ORIGIN === 'true',
				},
			},
		},
	}
})
