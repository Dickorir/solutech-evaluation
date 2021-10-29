import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import '../assets/css/app.min.css';
import '../assets/css/custom.css';
import 'feather-icons';
import { AirplayIcon, AtSignIcon} from 'vue-feather-icons';



// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { fas } from '@fortawesome/free-solid-svg-icons'
// library.add(fas);
// import { fab } from '@fortawesome/free-brands-svg-icons';
// library.add(fab);
// import { far } from '@fortawesome/free-regular-svg-icons';
// library.add(far);
// import { dom } from "@fortawesome/fontawesome-svg-core";
// dom.watch();

//support vuex
import Vuex from 'vuex'
Vue.use(Vuex)

import store from "./store"

import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
