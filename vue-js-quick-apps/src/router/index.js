import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import TodoList from '../views/TodoList.vue'
import Calculator from '../views/Calculator.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/todo-list',
      name:'todo',
      component:TodoList,
    },
    {
      path:'/calculator',
      name:'calculator',
      component:Calculator,
    },
  ]
})

export default router
