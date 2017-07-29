<template>
    <div class="customers container">
        <Alert v-if="alert" v-bind:message="alert"></Alert>
        <h1 class="page-header">Manage Customers</h1>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            <tr :key="customer.id" v-for="customer in customers">
                <td>{{customer.firstName}}</td>
                <td>{{customer.lastName}}</td>
                <td>{{customer.email}}</td>
                <td>
                    <router-link :to="{name: 'Customer', params: { id: customer.id }}" class="btn btn-default">View</router-link>
                </td>
                <td><button class="btn btn-danger" @click="deleteCustomer(customer)">Delete</button></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Alert from './Alert.vue';
    import { mapActions, mapState } from 'vuex';

    export default {
        name: 'customers',
        data() {
            return {
                alert: ''
            }
        },
        computed: {
            ...mapState(['customers', 'isFetched'])
        },
        methods: {
            ...mapActions(['getCustomers', 'deleteCustomer'])
        },
        created() {
            if (this.$route.query.alert) {
                this.alert = this.$route.query.alert
            }
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
