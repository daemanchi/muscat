import Vue from 'vue'
import Vuex from 'vuex'
import list from "@/assets/data/data.js";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        post: list
    },
    getters: {
        fetchData: state => id => {
            return state.post[id]
        }
    },
    mutations: {
        TOGGLE_LIKED(state){
            state.post.postLiked = !state.post.postLiked;
        }
    }
    
})