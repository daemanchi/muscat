import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.prototype.$axios = axios
axios.defaults.baseURL = `http://localhost:9000/api`;
axios.defaults.headers.common['Content-Type'] = 'application/json';

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
