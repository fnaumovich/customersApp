<template>
    <div id="app">
        <Navbar></Navbar>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue';

    export default {
        name: 'app',
        components: {
            Navbar: Navbar
        }
    }
</script>

<style>
    @import "assets/style.scss";
</style>
