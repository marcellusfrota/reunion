import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
// import { Layout } from 'bootstrap-vue/es/components';
import App from './App.vue'

/**
 * Routes modules
 */
import { routes } from './config/routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  saveScrollPosition: true,
  mode: 'history'
});

/**
 * Bootstrap
 */
Vue.use(BootstrapVue);
// Vue.use(Layout);

/**
 * Base assets
 */
import './assets/scss/base.scss';

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
