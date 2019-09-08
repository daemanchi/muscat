import Vue from 'vue'
import Router from 'vue-router'
import WritePost from '@/views/WritePost';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/write',
      name: 'Write',
      component: WritePost
    }
  ]
})
