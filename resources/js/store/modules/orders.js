import axios from 'axios';
import {http, httpFile} from "../../services/http_service";

const state = {
    orders: []
}

const getters = {};
const actions = {
    getOrders( {commit} ){
        axios
            .get('/api/orders')
            .then(response => {
                commit('setOrders', response.data.data );
            });
    }
};
const mutations = {
    setOrders( state, data ){
        state.orders = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
