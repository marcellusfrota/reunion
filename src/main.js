// main.js

/**
 * Vue
 */
import Vue from 'vue'

/**
 * Define routes
 */
import routes from './routes'

/**
 * Bootstrap
 */
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

/**
 * VueSocketio
 */
// import VueSocketio from 'vue-socket.io';
// Vue.use(VueSocketio, 'http://localhost:3000');

/**
 * Init Reunion
 */
const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
    hashKey: 'maytheforcebewithyou'

  },
  computed: {
    ViewComponent () {
      let matchingView = routes[this.currentRoute]
      return (matchingView)
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render (h) {
    return h(this.ViewComponent.default)
  }
})

/**
 * Listener when page's change
 */
window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})