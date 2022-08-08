import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/notebooks',
      component: () => import('@/pages/NotebookList.vue')
    },
    {
      path: '/login',
      component: () => import('@/pages/Login.vue')
    },
    {
      path: '/note',
      component: () => import('@/pages/NoteDetail.vue')
    },
    {
      path: '/trash',
      component: () => import('@/pages/TrashDetail.vue')
    }
  ]
})
