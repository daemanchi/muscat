import Vue from 'vue'
import Vuex from 'vuex'

import global from './modules/global'
import blog from './modules/blog';

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: false,
    modules: {
        global, blog
    },
});
export default store;
