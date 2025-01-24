import { createRouter, createWebHistory  } from "vue-router";
import ProjectDetails from '../page/ProjectDetails.vue'
const routes = [
    {
        path: '/project-details',
        component: ProjectDetails
    },
]

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes,
})


export default router