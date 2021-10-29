import Vue from 'vue';
import Router from 'vue-router'
import Welcome from './views/Welcome.vue';
import AppLayout from './layouts/App.vue';
import GuestLayout from './layouts/Guest.vue';

Vue.use(Router);

const routes = [
    {
        path: '/',
        component:GuestLayout,
        children:[{
            path:'',
            name: 'login',
            component: () => import('./views/auth/LoginForm.vue')
        },
        ],
    },
    {
        path: '/home',
        component:AppLayout,
        children:[{
            name: 'home',
            path:'',
            component:Welcome
        },
        ],
    },
    {
        path: '/orders',
        component:AppLayout,
        children:[{
            name: 'orders',
            path:'',
            component: () => import('./views/Orders.vue')
        },
        ],
    },
    {
        path: '/categories',
        name: 'categories',
        component: () => import('./views/Categories.vue')
        // component: () => Categories
    }
];

const router = new Router({
    mode: "history",
    routes: routes,
    linkActiveClass: 'active'
});

export default router;

