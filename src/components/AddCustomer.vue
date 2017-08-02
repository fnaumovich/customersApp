<template>
    <div class="add container">
        <h1 class="page-header">Add Customer</h1>
        <form v-on:submit="handleCustomerButton">
            <div class="well">
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
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" placeholder="Username" v-model="customer.username">
                </div>
                <div class="form-group">
                    <label>Website</label>
                    <input type="text" class="form-control" placeholder="Website" v-model="customer.website">
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
                customer: {}
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
                    username,
                    website
                } = this.customer;

                this.addCustomer({
                    firstName,
                    lastName,
                    name: `${firstName} ${lastName}`,
                    email,
                    phone,
                    username,
                    website,
                    created: true
                });

                this.$router.push(
                    {
                        path: '/'
                    }
                )
            }
        }
    }
</script>

<style>

</style>
