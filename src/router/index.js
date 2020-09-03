/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Todo from '@/components/Todos'
import CreateTodo from '@/components/CreateTodo'
import store from "../store/store"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },

    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/todos',
      name: 'todos',
      component: Todo,
    },
    {
      path: '/todos/create',
      name: 'todos-create',
      component: CreateTodo,
    },
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'login' && !store.state.isUserLoggedIn) next({ name: 'login' })
//   else next()
// })

export default router
