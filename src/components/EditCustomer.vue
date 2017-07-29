<template>
    <div class="customer-edit container">
        <h1 class="page-header">Edit Customer</h1>
        <form v-on:submit="updateCustomerHandle">
            <div class="well">
                <h4>Customer Info</h4>
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" placeholder="First Name" v-model="ourCustomer.firstName">
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" placeholder="Last Name" v-model="ourCustomer.lastName">
                </div>
            </div>
            <div class="well">
                <h4>Customer Contact</h4>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" placeholder="Email" v-model="ourCustomer.email">
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" placeholder="Phone" v-model="ourCustomer.phone">
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <hr>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';

    export default {
        name: 'editCustomer',
        data() {
            return {}
        },
        methods: {
            ...mapActions(['getCustomers', 'getOurCustomer', 'updateCustomer']),
            fetchCustomers(customerId) {
                if (this.customers.find(({ id }) => id === customerId)) return;

                this.getOurCustomer(customerId);
            },
            updateCustomerHandle() {

            }
        },
        computed: {
            ...mapState(['customers']),
            ourCustomer() {
                const result = this.customers.find(({ id }) => id === parseInt(this.customerId));
                return result || {};
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