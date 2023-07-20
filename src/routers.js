import HelloWorld from './components/HelloWorld.vue'
import SignUp from './components/SignUp.vue'
import { createRouter, createWebHistory } from 'veu-router';


const routes = [
    {
        name: 'HelloWorld',
        component: HelloWorld,
        path: '/',

    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,

});

export default router;
