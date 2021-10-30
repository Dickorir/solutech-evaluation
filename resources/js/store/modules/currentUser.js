import axios from 'axios';

const state = {
    user: {}
}

const getters = {};
const actions = {
    getUser(){
        axios.get('/login')
    },
    loginUser( {}, user ) {
        const data = {
            email: user.email,
            password: user.password
        };
        axios.post('/api/login', data)
            .then( response => {
                console.log(response.data.data.info);
                if (response.data.data.token) {

                    localStorage.setItem("auth", true);
                    localStorage.setItem("user", response.data.data.user);
                    localStorage.setItem("token", response.data.data.token);

                    window.location.replace("/fleet")
                }
            })
            .catch((error) =>{
                this.error=true;
            }); // credentials didn't match
    }
};
const mutations = {};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
