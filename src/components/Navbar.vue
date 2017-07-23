<template>
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">CUSTOMER APP</a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li @click="setActive('customers')" :class="{ active:isActive('customers') }"><router-link to="/">Customers</router-link></li>
                    <li @click="setActive('about')" :class="{ active:isActive('about') }"><router-link to="/about">About</router-link></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li @click="setActive('add')" :class="{ active:isActive('add') }"><router-link to="/add">Add Customer</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'navbar',
        data() {
            return {
                activeItem: 'customers'
            }
        },
        methods: {
            isActive: function (menuItem) {
                return this.activeItem === menuItem
            },
            setActive: function (menuItem) {
                this.activeItem = menuItem // no need for Vue.set()
            }
        }
    }
</script>