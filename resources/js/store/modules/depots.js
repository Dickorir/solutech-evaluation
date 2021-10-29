import axios from 'axios';

const state = {
    depots: []
}

const getters = {};
const actions = {
    getDepots( {commit} ){
        axios
            .get('/api/depots')
            .then(response => {
                commit('setDepots', response.data.data );
            });
    }
};
const mutations = {
    setDepots( state, data ){
        state.depots = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
