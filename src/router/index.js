import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('../pages/home.vue').default,
    },
    {
      path: '/docs',
      name: 'docs',
      component: require('../pages/docs.vue').default,
    },
    {
      path: '/presets',
      name: 'presets',
      component: require('../pages/presets.vue').default,
    },
    {
      path: '/components',
      name: 'components',
      component: require('../pages/components.vue').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ]
})
