import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

/**
 * Routes modules
 */
import { routes } from './config/routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

/**
 * Base assets
 */
import './assets/scss/base.scss';

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
