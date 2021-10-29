import store from "../store";
import axios from  'axios';
import config from  '../config';


export  function http() {
    return axios.create({
        baseURL: config.API_MIDAGA_URL
    });
}

export  function httpFile() {
    return axios.create({
        baseURL: config.API_MIDAGA_URL,
        headers: {
            'Content-Type': 'application/json',
            'Api-Key':  'DF602D0F18F38E4D-7MA4YWXKTRZU0GW',
            'App-Id': '19afe40a-4b56-4cb5-b525-f8ea5a16b9e3',
            'App-Secret': 'E21F5072ED1720166297AAB05093A688E6A477B26EB9D21DF3CEA7D2705DC740',
            'Grant-Type': 'wallet'
        }
    });
}
