<template>
    <div class="customer container">
        <h1 class="page-header">{{ customerName }}</h1>
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
            ...mapActions(['getCustomers'])
        },
        computed: {
            ...mapState(['customers']),
            customerName() {
                return this.customers[this.customerId] && this.customers[this.customerId].name;
            },
            customerId() {
                return this.$route.params.id;
            }
        },
        created: function () {
            this.getCustomers();
        }
    }
</script>

<style>

</style>
