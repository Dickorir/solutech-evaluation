import Vue from 'vue';
import Login from './views/auth/LoginForm.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import '../assets/css/app.min.css';
import '../assets/css/custom.css';
import axios from "axios";

//support vuex
import Vuex from 'vuex'
Vue.use(Vuex)

import store from "./store"

Vue.component('login-form', require('./views/auth/LoginForm').default)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(Login)
});
