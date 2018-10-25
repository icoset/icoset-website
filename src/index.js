import Vue from 'vue'

import App from './app.vue'
import router from './router'
import './components/index';
import './styles/main.scss';

Vue.config.productionTip = false

new Vue({
  components: { App },
  router,
  render(h) {
    return h('App');
  }
}).$mount('#app');