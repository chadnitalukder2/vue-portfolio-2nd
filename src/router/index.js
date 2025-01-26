import { createRouter, createWebHistory } from 'vue-router';
import ProjectDetails from '../page/ProjectDetails.vue';
import Home from '@/page/Home.vue';
import About from '@/page/About.vue';
import Skills from '@/page/Skills.vue';
import Work from '@/page/Work.vue';
import Contact from '@/page/Contact.vue';

const routes = [
    {
        path: '/',
        name: 'Home', // Name should be a string
        component: Home,
    },
    {
        path: '/about',
        name: 'About', // Name should be a string
        component: About,
    },
    {
        path: '/skills',
        name: 'Skills', // Name should be a string
        component: Skills,
    },
    {
        path: '/work',
        name: 'Work', // Name should be a string
        component: Work,
    },
    {
        path: '/contact',
        name: 'Contact', // Name should be a string
        component: Contact,
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
