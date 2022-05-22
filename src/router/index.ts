import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/HomePage.vue'

const routes = [{ path: '/:page?', component: Home }]

export const router = createRouter({
	history: createWebHistory(),
	routes,
})
