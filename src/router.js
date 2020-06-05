import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '组件连线',
      component: () => import('./page/model-page/index.vue')
    },
    {
      path: '/link',
      name: '组件连线',
      component: () => import('./page/drag-link/index.vue')
    },
    {
      path: '/flow',
      name: '流程关系图',
      component: () => import('./page/flow-page/index.vue')
    }
  ]
})
