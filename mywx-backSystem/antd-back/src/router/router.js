// import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router'

import Banner from '../components/banner/banner.vue'





const routes = [
    { path: '/banner', component: Banner }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router