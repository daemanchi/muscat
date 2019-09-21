import Vue from 'vue'
import Vuex from 'vuex'

import global from './modules/global'

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: false,
    modules: {
        global
    },
});
export default store;