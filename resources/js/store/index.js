import Vue from 'vue';
import Vuex from 'vuex';
import currentUser from './modules/currentUser';
import theOrders from './modules/orders'

Vue.use((Vuex));

export default new Vuex.Store ({
    modules: {
        currentUser,
        theOrders
    }
})

