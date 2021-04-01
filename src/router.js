import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/link'
    },
    {
      path: '/home',
      name: '建模平台',
      component: () => import('./page/model-page/index.vue')
    },
    {
      path: '/test1',
      name: '箭头',
      component: () => import('./animation-base/test-arrow.vue')
    },
    {
      path: '/test2',
      name: '球',
      component: () => import('./animation-base/test-ball.vue')
    },
    {
      path: '/link',
      name: '拖拽盒子',
      component: () => import('./page/drag-link/index.vue')
    },
    {
      path: '/file-save',
      name: '文件保存',
      component: () => import('./page/file-saver/index.vue')
    },
    {
      path: '/flow',
      name: '流程关系图',
      component: () => import('./page/flow-page/index.vue')
    }
  ]
})
