import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Handler from '/src/components/Handler.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/handler',
        name: 'Handler',
        component: Handler,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router