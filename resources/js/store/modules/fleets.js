import axios from 'axios';

const state = {
    fleets: []
}

const getters = {};
const actions = {
    getFleets( {commit} ){
        axios
            .get('/api/fleet')
            .then(response => {
                commit('setFleets', response.data.data );
            });
    }
};
const mutations = {
    setFleets( state, data ){
        state.fleets = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
