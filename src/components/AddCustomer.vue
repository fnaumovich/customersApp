<template>
    <div class="add container">
        <h1 class="page-header">Add Customer</h1>
        <form v-on:submit="handleCustomerButton">
            <div class="well" :class="{ 'has-error': hasError }">
                <h4>Customer Info</h4>
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" placeholder="First Name" v-model="customer.firstName">
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" placeholder="Last Name" v-model="customer.lastName">
                </div>
            </div>
            <div class="well">
                <h4>Customer Contact</h4>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control" placeholder="Email" v-model="customer.email">
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" placeholder="Phone" v-model="customer.phone">
                </div>
            </div>
            <div class="well">
                <h4>Customer Location</h4>
                <div class="form-group">
                    <label>Address</label>
                    <input type="text" class="form-control" placeholder="Address" v-model="customer.address">
                </div>
                <div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-control" placeholder="City" v-model="customer.city">
                </div>
                <div class="form-group">
                    <label>State</label>
                    <input type="text" class="form-control" placeholder="State" v-model="customer.state">
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <hr>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'form-add-customer',
        data() {
            return {
                customer: {},
                hasError: false
            }
        },
        methods: {
            ...mapActions(['addCustomer']),
            handleCustomerButton(e) {
                e.preventDefault();

                if (!this.customer.firstName || !this.customer.lastName) {
                    console.log('Заполните поля');
                    return;
                }

                const {
                    firstName,
                    lastName,
                    email,
                    phone,
                    address,
                    city,
                    state
                } = this.customer;

                this.addCustomer({
                    firstName,
                    lastName,
                    email,
                    phone,
                    address,
                    city,
                    state
                })

                this.$router.push(
                    {
                        path: '/'
                        // query: {
                        //     alert: 'Customer Added'
                        // }
                    }
                )
            }
        }
    }
</script>

<style>

</style>
