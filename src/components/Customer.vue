<template>
    <div class="customer container">
        <h1 class="page-header">Customer</h1>
    </div>
</template>

<script>
    export default {
        name: 'customer',
        data() {
            return {

            }
        },
        created: function () {
            let customerId = this.$route.params.id;

        }
    }
</script>

<style>

</style>
