import Vue from 'vue';
import Router from 'vue-router';

import Customers from '@/components/Customers';
import AddCustomer from '@/components/AddCustomer';
import About from '@/components/About';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Customers',
            component: Customers
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/add',
            name: 'AddCustomer',
            component: AddCustomer
        }
    ]
});
