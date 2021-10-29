import Vue from 'vue';
import Vuex from 'vuex';
import currentUser from './modules/currentUser';
import theOrders from './modules/orders';
import theFleets from './modules/fleets';
import theDeliveries from './modules/deliveries';
import theDepots from './modules/depots';
import theStages from './modules/stages';
import theVehicles from './modules/vehicles';

Vue.use((Vuex));

export default new Vuex.Store ({
    modules: {
        currentUser,
        theOrders,
        theFleets,
        theDeliveries,
        theDepots,
        theStages,
        theVehicles
    }
})

