import axios from 'axios';

const state = {
    fleets: [],
    fleet: {}
}

const getters = {};
const actions = {
    getFleets( {commit} ){
        axios
            .get('/api/fleet')
            .then(response => {
                commit('setFleets', response.data.data );
            });
    },
    getFleet( {commit},id ){

        axios.get(`/api/fleet/${id}`)
            .then(response => {
                commit('setFleet', response.data.data );
            });
    }
};
const mutations = {
    setFleets( state, data ){
        state.fleets = data;
    },
    setFleet( state, data ){
        state.fleet = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
