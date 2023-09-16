import { createRouter, createWebHistory } from "vue-router";

import AppPageStatusCode from './pages/AppPageStatusCode.vue';
import AppHome from './pages/AppHome.vue';
import AppProjects from './pages/AppProjects.vue';
// import AppAbout from './pages/AppAbout.vue';

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : '/',
            name : 'home',
            component : AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component : AppProjects,
            props: true,// Pass route params as props
        },
        {
            path: '/404', 
            name: '404', 
            component: AppPageStatusCode
        },
        {
            path: '/:catchAll(.*)', redirect:'404'
        },
    ],
});

export {router};