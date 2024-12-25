import axios from 'axios'

const service = axios.create({
	baseURL: import.meta.env.VITE_APP_BASE_URL,
	timeout: import.meta.env.VITE_REQUEST_TIMEOUT,
})

service.interceptors.request.use(
	(config) => {
		return config
	},
	(error) => {
		return Promise.reject(error)
	},
)

service.interceptors.response.use(
	(resp) => {
		return resp.data
	},
	(error) => {
		return Promise.reject(error)
	},
)

export default service
