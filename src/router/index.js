import Vue from 'vue';
import Router from 'vue-router';

import Customers from '@/components/Customers';
import Customer from '@/components/Customer';
import EditCustomer from '@/components/EditCustomer';
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
        },
        {
            path: '/customers/:id',
            name: 'Customer',
            component: Customer
        },
        {
            path: '/edit/:id',
            name: 'EditCustomer',
            component: EditCustomer
        }
    ]
});
