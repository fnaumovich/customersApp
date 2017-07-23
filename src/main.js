import Vue from 'vue';
import VueResource from 'vue-resource';
import Vuex from "vuex";

import App from './App';
import router from './router';
import Store from './store'

Vue.use(Vuex);
Vue.use(VueResource);
Vue.config.productionTip = false;

const store = new Vuex.Store(Store);

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
