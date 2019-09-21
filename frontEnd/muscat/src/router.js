import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Common/Home'
import NotFound from './components/Common/NotFound'
import PostList from './components/views/PostList'
import PostView from './components/views/PostView'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        },
        {
            name: 'PostList',
            path: '/post',
            component: PostList
        },
        {
            name: 'PostView',
            path: '/post/:id',
            component: PostView,
            meta: {
                goBack: true,
            },
        }

    ],
});
  