import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'
import Setlist from './pages/Setlist.vue'
import Contact from './pages/Contact.vue'
import PageNotFound from './pages/PageNotFound.vue'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home,
    },
    {
        name: 'Setlist',
        path: '/setlist',
        component: Setlist,
    },
    {
        name: 'Contact',
        path: '/contact',
        component: Contact,
    },
    {
        name: 'PageNotFound',
        path: '/:pathMatch(.*)*',
        component: PageNotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router