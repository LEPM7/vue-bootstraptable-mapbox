import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faMapMarkerAlt, faUser, faImage, faExpandArrowsAlt} from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare, faSquare} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue'
library.add(faUser, faMapMarkerAlt, faImage, faCheckSquare, faSquare, faExpandArrowsAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
new Vue({
  render: h => h(App),
}).$mount('#app');
