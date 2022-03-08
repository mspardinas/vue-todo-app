import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoApp from '../views/TodoApp.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/TodoApp',
    name: 'TodoApp',
    component: TodoApp
  },
  {
    path: '/HelloUser',
    name: 'HelloUser',
    component: () => import('../views/HelloUser.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
