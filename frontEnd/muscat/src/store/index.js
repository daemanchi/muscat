import Vue from 'vue';
import Vuex from 'vuex';

import blog from './modules/blog';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: false,
  modules: {
    blog
  }
});

export default store;
