import axios from 'axios';

const state = {
    stages: []
}

const getters = {};
const actions = {
    getStages( {commit} ){
        axios
            .get('/api/stage')
            .then(response => {
                commit('setStages', response.data.data );
            });
    }
};
const mutations = {
    setStages( state, data ){
        state.stages = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
