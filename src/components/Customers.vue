<template>
    <div class="customers container">
        <h1 class="page-header">Manage Customers</h1>
        <input type="text" class="form-control" placeholder="Enter customer name" v-model="filterInput">
        <br>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            <tr :key="customer.id" v-for="customer in filterBy(customers, filterInput)">
                <td>{{customer.firstName}}</td>
                <td>{{customer.lastName}}</td>
                <td>{{customer.email}}</td>
                <td>
                    <router-link :to="{name: 'Customer', params: { id: customer.id }}" class="btn btn-default">View</router-link>
                </td>
                <td><button class="btn btn-danger" @click="deleteCustomer({ customerId: customer.id })">Delete</button></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Alert from './Alert.vue';
    import { mapActions, mapState } from 'vuex';
    import localStorage from '@/services/local-storage';

    export default {
        name: 'customers',
        data() {
            return {
                filterInput: ''
            }
        },
        computed: {
            ...mapState(['customers', 'isFetched'])
        },
        methods: {
            ...mapActions(['getCustomers', 'deleteCustomer']),
            filterBy(list, value) {
                value = value.toLowerCase();
                return list.filter(customer => customer.firstName.toLowerCase().indexOf(value) > -1)
            }
        },
        created() {
            if (!this.isFetched) {
                this.getCustomers();
            }
        },
        components: {
            Alert: Alert
        }
    }
</script>

<style>

</style>
