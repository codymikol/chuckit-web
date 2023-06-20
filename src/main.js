import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createWebHashHistory} from "vue-router";
import Admin from "@/components/admin/CreateCampaign.vue";
import { createRouter } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/user/:id', component: App, },
        { path: '/admin/:id', component: Admin}
    ]
})

createApp(App)
    .use(router)
    .mount('#app')
