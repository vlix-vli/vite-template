// test.ts

// test.ts
import type { MockMethod } from 'vite-plugin-mock'
const mockMethods: MockMethod[] = [
	{
		url: '/api/get',
		method: 'get',
		response: () => {
			return {
				code: 0,
				data: {
					name: 'vben',
				},
			}
		},
	},
	{
		url: '/api/post',
		method: 'post',
		timeout: 2000,
		response: {
			code: 0,
			data: {
				name: 'vben',
			},
		},
	},
	{
		url: '/api/text',
		method: 'post',
		rawResponse: async (req, res) => {
			let reqbody = ''
			await new Promise((resolve) => {
				req.on('data', (chunk) => {
					reqbody += chunk
				})
				req.on('end', () => resolve(undefined))
			})
			res.setHeader('Content-Type', 'text/plain')
			res.statusCode = 200
			res.end(`hello, ${reqbody}`)
		},
	},
]

export default function mockConfig() {
	return mockMethods.concat([
		{
			url: '/api/text',
			method: 'post',
			rawResponse: async (req, res) => {
				let reqbody = ''
				await new Promise((resolve) => {
					req.on('data', (chunk) => {
						reqbody += chunk
					})
					req.on('end', () => resolve(undefined))
				})
				res.setHeader('Content-Type', 'text/plain')
				res.statusCode = 200
				res.end(`hello, ${reqbody}`)
			},
		},
	])
}

export { mockMethods }
