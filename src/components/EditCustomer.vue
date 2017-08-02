<template>
    <div class="customer-edit container">
        <h1 class="page-header">Edit Customer</h1>
        <form @submit.prevent="updateCustomerHandle">
            <div class="well">
                <h4>Customer Info</h4>
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" placeholder="First Name" v-model="currentCustomer.firstName">
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" placeholder="Last Name" v-model="currentCustomer.lastName">
                </div>
            </div>
            <div class="well">
                <h4>Customer Contact</h4>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" placeholder="Email" v-model="currentCustomer.email">
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" placeholder="Phone" v-model="currentCustomer.phone">
                </div>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" placeholder="Username" v-model="currentCustomer.username">
                </div>
                <div class="form-group">
                    <label>Website</label>
                    <input type="text" class="form-control" placeholder="Website" v-model="currentCustomer.website">
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <hr>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import cloneDeep from 'lodash.clonedeep';

    export default {
        name: 'editCustomer',
        data() {
            return {
                currentCustomer: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    name: this.firstName + ' ' + this.lastName
                }
            }
        },
        methods: {
            ...mapActions(['getCustomers', 'getOurCustomer', 'updateCustomer']),
            fetchCustomers(customerId) {
                if (this.customers.find(({ id }) => id === customerId)) return;

                this.getOurCustomer(customerId);
            },
            updateCustomerHandle() {
                this.updateCustomer(this.currentCustomer);
                this.$router.push('/');
            },
            setCustomerData() {
                this.currentCustomer = this.ourCustomer;
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
        watch: {
            ourCustomer(newVal, oldVal) {
                if (!Object.keys(oldVal).length && newVal) {
                    this.setCustomerData();
                }
            }
        },
        created() {
            this.fetchCustomers(this.customerId);
        },
        mounted() {
            this.setCustomerData();
        }
    }
</script>