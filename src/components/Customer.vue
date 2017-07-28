<template>
    <div class="customer container">
        <h1 class="page-header">{{ ourCustomer.name }}</h1>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        name: 'customer',
        data() {
            return {
            }
        },
        methods: {
            ...mapActions(['getCustomers', 'getOurCustomer']),
            fetchCustomers(customerId) {
                if (this.customers.find(({ id }) => id === customerId)) return;

                this.getOurCustomer(customerId);
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

<style>

</style>
