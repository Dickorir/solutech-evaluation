import Vue from 'vue';
import Router from 'vue-router'
import Fleet from './views/Fleet.vue';
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
        path: '/fleet',
        component:AppLayout,
        children:[{
            name: 'fleet',
            path:'',
            component:Fleet
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
        path: '/vehicles',
        component:AppLayout,
        children:[{
            name: 'vehicles',
            path:'',
            component: () => import('./views/Vehicles.vue')
        },
        ],
    },
    {
        path: '/depots',
        component:AppLayout,
        children:[{
            name: 'depots',
            path:'',
            component: () => import('./views/Depots.vue')
        },
        ],
    }
];

const router = new Router({
    mode: "history",
    routes: routes,
    linkActiveClass: 'active'
});

export default router;

