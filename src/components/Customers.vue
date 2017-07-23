<template>
    <div class="customers container">
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
            <tr v-for="customer in customers">
                <td>{{customer.firstName}}</td>
                <td>{{customer.lastName}}</td>
                <td>{{customer.email}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'customers',
        data() {
            return {
                customers: []
            }
        },
        methods: {
            fetchCustomers() {
                return this.$http.get('https://jsonplaceholder.typicode.com/users')
                    .then(responce => responce.json())
                    .then(data => {
                        /*
                        let nameArr = [];
                        data.forEach(item => {
                            const obj = {};
                            obj.firstName = item.name.split(' ')[0];
                            obj.lastName = item.name.split(' ')[1];

                            nameArr.push(obj);
                        });
                        */
                        const newArr = data.map(item => {
                            const [firstName, lastName] = item.name.split(' ');

                            return {
                                ...item,
                                firstName,
                                lastName
                            }
                        });
                        this.customers = newArr;
                        console.log(this.customers);
                    })
            }
        },
        created: function () {
            this.fetchCustomers();
        }
    }
</script>

<style>

</style>
