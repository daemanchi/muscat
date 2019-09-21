import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store';

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
