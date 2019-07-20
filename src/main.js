import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faEdit, faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Fragment from 'vue-fragment';
import router from './router';
import App from './App.vue';

library.add(faTrash, faEdit, faCamera);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(Fragment.Plugin);
Vue.use(VueAxios, axios);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
