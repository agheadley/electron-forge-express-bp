import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: require('./views/Home').default
    },
    {
      path: '/route1',
      name: 'Route1',
      component: require('./views/Route1').default
    },
  ]
})