import axios from 'axios';
import config from '../../config';
import {http, httpFile} from "../../services/http_service";
import qs from 'qs';

const state = {
    user: {}
}

const getters = {};
const actions = {
    getUser(){
        axios.get('http://bursary_v2.io/api/v1/login')
    },
    loginUser( {}, user ) {
        const data = {
            email: user.email,
            password: user.password
        };
        axios.post('http://bursary_v2.io/api/v1/login', data)
            .then( response => {
                console.log(response.data.data.info);
                if (response.data.data.token) {

                    localStorage.setItem("auth", true);
                    localStorage.setItem("user", response.data.data.info);
                    localStorage.setItem("token", response.data.data.token);

                    window.location.replace("/home")
                }
            })
            .catch((error) =>{
                this.error=true;
            }); // credentials didn't match
    },
    async loginUser2( {}, user ) {
        const url = 'https://api.wallet.co.ke/v1.0/login';
        const url2 = 'https://jsonplaceholder.typicode.com/posts';
        const data = {
            email: user.email,
            password: user.password
        };
        const data2 = {
            title: user.email,
            body: user.password,
            userId: 1,
        };

        // await fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Content-type': 'application/json',
        //         'Api-Key':  'DF602D0F18F38E4D-7MA4YWXKTRZU0GW',
        //         'App-Id': '19afe40a-4b56-4cb5-b525-f8ea5a16b9e3',
        //         'App-Secret': 'E21F5072ED1720166297AAB05093A688E6A477B26EB9D21DF3CEA7D2705DC740',
        //         'Grant-Type': 'wallet'
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then( (response) => response.json() )
        //     .then( (json) => console.log( json ))

        // this is the code. nakukal
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Api-Key':  'DF602D0F18F38E4D-7MA4YWXKTRZU0GW',
                'App-Id': '19afe40a-4b56-4cb5-b525-f8ea5a16b9e3',
                'App-Secret': 'E21F5072ED1720166297AAB05093A688E6A477B26EB9D21DF3CEA7D2705DC740',
                'Grant-Type': 'wallet'
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

        // const resa =  res.json()
        //         console.log( resa )


        // axios.post(url, data)
        //     .then( response => {
        //         console.log( response.data )
        //     })
        //     .catch(error => {
        //         this.errorMessage = error.message;
        //         console.error("There was an error!", error);
        //     });
    },
    loginUser3( {}, user ) {
        // console.log(httpFile())
        const url = 'https://api.wallet.co.ke/v1.0/login';
        const reqData = {
            email: user.email,
            password: user.password
        };
        // axios({
        //     method: 'post',
        //     url: url,
        //     // withCredentials: true,
        //     // crossdomain: true,
        //     data: qs.stringify(reqData),
        //     headers: {
        //         // 'Access-Control-Allow-Origin': '*',
        //         'Content-type': 'application/json; charset=UTF-8',
        //         'Api-Key':  'DF602D0F18F38E4D-7MA4YWXKTRZU0GW',
        //         'App-Id': '19afe40a-4b56-4cb5-b525-f8ea5a16b9e3',
        //         'App-Secret': 'E21F5072ED1720166297AAB05093A688E6A477B26EB9D21DF3CEA7D2705DC740',
        //         'Grant-Type': 'wallet'
        //     }
        // })
        //     http().post('/login', {
        //     email: user.email,
        //     password: user.password
        //  })
        // axios.post(`${url}`, qs.stringify(reqData))

        http().post("/login", qs.stringify(reqData))
            .then( response => {
                console.log( response.data )
            })
            .catch(error => {
                this.errorMessage = error.message;
                console.error("There was an error!", error);
            });
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
