<template>
    <div class="customer container">
        <router-link to="/">Back</router-link>
        <h1 class="page-header">{{ ourCustomer.firstName }} {{ ourCustomer.lastName }}
            <span class="pull-right">
                <router-link :to="{name: 'EditCustomer', params: {id: ourCustomer.id}}" class="btn btn-default">Edit</router-link>
                <button class="btn btn-danger" @click="deleteCustomer({customerId: ourCustomer.id, callback: redirect})">Delete</button>
            </span>
        </h1>
        <ul class="list-group">
            <li class="list-group-item"><span class="glyphicon glyphicon-phone" aria-hidden="true"></span> {{ ourCustomer.phone }}</li>
            <li class="list-group-item"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span> {{ ourCustomer.email }}</li>
        </ul>

        <ul class="list-group">
            <li class="list-group-item"> {{ ourCustomer.username }}</li>
            <li class="list-group-item">{{ ourCustomer.website }}</li>
        </ul>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import cloneDeep from 'lodash.clonedeep';

    export default {
        name: 'customer',
        data() {
            return {}
        },
        methods: {
            ...mapActions(['getCustomers', 'getOurCustomer', 'deleteCustomer']),
            fetchCustomers(customerId) {
                if (this.customers.find(({ id }) => id === customerId)) return;

                this.getOurCustomer(customerId);
            },
            redirect() {
                this.$router.push('/');
            }
        },
        computed: {
            ...mapState(['customers']),
            ourCustomer() {
                const result = this.customers.find(({ id }) => id === parseInt(this.customerId));
                return cloneDeep(result) || {};
            },
            customerId() {
                return this.$route.params.id;
            }
        },
        created() {
            this.fetchCustomers(this.customerId);
        }
    }
</script>

<style>

</style>
