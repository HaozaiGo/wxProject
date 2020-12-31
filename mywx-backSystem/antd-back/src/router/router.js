// import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router'

import Banner from '../components/banner/banner.vue';
import EasyIntroduction from '../components/easyIntroduction/easyIntroduction.vue';
import Pick1 from '../components/picker/pick1.vue';
import Pick2 from '../components/picker/pick2.vue';
import Pick3 from '../components/picker/pick3.vue'





const routes = [
    { path: '/banner', component: Banner },
    { path: '/easyIntroduction', component: EasyIntroduction },
    { path: '/pick1', component: Pick1 },
    { path: '/pick2', component: Pick2 },
    { path: '/pick3', component: Pick3 }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router