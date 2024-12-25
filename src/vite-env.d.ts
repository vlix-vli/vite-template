/// <reference types="vite/client" />
interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string
	readonly VITE_APP_SERVER_HOST: string
	readonly VITE_APP_SERVER_PORT: number
	readonly VITE_APP_ENABLE_MOCK: boolean
	readonly VITE_APP_BASE_URL: string
	readonly VITE_APP_REQUEST_TIMEOUT: number
	readonly VITE_APP_PROXY_BASE_API: string
	readonly VITE_APP_PROXY_TARGET: string
	readonly VITE_APP_PROXY_CHANGE_ORIGIN: boolean
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
