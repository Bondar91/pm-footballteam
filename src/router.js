import Vue from 'vue';
import Router from 'vue-router';
import ListPage from './pages/UsersPages/ListPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'users',
      component: ListPage,
    },
  ],
});
