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
            <tr v-for="(customer, index) in customers">
                <td>{{customer.firstName}}</td>
                <td>{{customer.lastName}}</td>
                <td>{{customer.email}}</td>
                <td>
                    <router-link :to="{name: 'customer', params: { id: index }}"></router-link>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import Alert from './Alert.vue';

    export default {
        name: 'customers',
        data() {
            return {
                customers: [],
                alert: ''
            }
        },
        methods: {
            fetchCustomers() {
                return this.$http.get('https://jsonplaceholder.typicode.com/users')
                    .then(responce => responce.json())
                    .then(data => {
                        const newArr = data.map(item => {
                            const [firstName, lastName] = item.name.split(' ');

                            return {
                                ...item,
                                firstName,
                                lastName
                            }
                        });
                        this.customers = newArr;
//                        console.log(this.customers);
                    });
            }
        },
        created: function () {
            if (this.$route.query.alert) {
                this.alert = this.$route.query.alert
            }

            this.fetchCustomers();
        },
//        updated: function () {
//            this.fetchCustomers();
//        }
        components: {
            Alert: Alert
        }
    }
</script>

<style>

</style>
