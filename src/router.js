import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/three/1',
      name: 'home',
      component: () => import('./threeJs/1/index.vue')
    },
    {
      path: '/three/2',
      name: 'home',
      component: () => import('./threeJs/2/index.vue')
    }
  ]
})
