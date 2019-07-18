import Vue from 'vue';
import Router from 'vue-router';
import ListPage from './pages/UsersPages/ListPage.vue';
import AddPage from './pages/UsersPages/AddPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'users',
      component: ListPage,
    },
    {
      path: '/users/add',
      name: 'users-add',
      component: AddPage,
    },
  ],
});
