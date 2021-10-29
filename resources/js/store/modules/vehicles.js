import axios from 'axios';

const state = {
    vehicles: []
}

const getters = {};
const actions = {
    getVehicles( {commit} ){
        axios
            .get('/api/vehicles')
            .then(response => {
                commit('setVehicles', response.data.data );
            });
    }
};
const mutations = {
    setVehicles( state, data ){
        state.vehicles = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
