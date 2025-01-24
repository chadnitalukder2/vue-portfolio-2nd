import { createRouter, createWebHistory } from 'vue-router';
import ProjectDetails from '../page/ProjectDetails.vue';
import Home from '@/page/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home', // Name should be a string
        component: Home,
    },
    {
        path: '/project-details',
        name: 'ProjectDetails', // Name should be a string
        component: ProjectDetails,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
