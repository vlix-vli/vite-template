import { createMemoryHistory, createRouter } from 'vue-router'
import HelloWorld from '@/views/HelloWorld.vue'

const router = createRouter({
	history: createMemoryHistory(),
	routes: [
		{
			path: '/',
			component: HelloWorld,
			props: {
				msg: 'Vite + Vue',
			},
		},
	],
})
export default router
