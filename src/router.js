import Vue from 'vue';
import Router from 'vue-router';
import ListUsers from './components/users/ListUsers.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/users',
      name: 'users',
      component: ListUsers,
    },
  ],
});
