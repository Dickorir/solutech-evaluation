import axios from 'axios';

const state = {
    deliveries: []
}

const getters = {};
const actions = {
    getDeliveries( {commit} ){
        axios
            .get('/api/deliveries')
            .then(response => {
                commit('setDeliveries', response.data.data );
            });
    }
};
const mutations = {
    setDeliveries( state, data ){
        state.deliveries = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
