/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Todo from '@/components/Todos'
import CreateTodo from '@/components/CreateTodo'
import store from "../store/store"
import multiguard from 'vue-router-multiguard';

const loggedIn = function(to, from, next) {
  if (store.state.isUserLoggedIn) {
     next()
  }
  next("/login")
}

const guest = function (to, from, next) {
  if (store.state.isUserLoggedIn) {
    next("/todos")
  }
  next()
}

Vue.use(Router)

const routes = [
    {
      path: '/',
      name: 'root',
      component: Home,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      beforeEnter: multiguard([guest])
    },

    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: multiguard([guest])
    },
    {
      path: '/todos',
      name: 'todos',
      component: Todo,
      beforeEnter: multiguard([loggedIn]),
    },
    {
      path: '/todos/create',
      name: 'todos-create',
      component: CreateTodo,
      beforeEnter: multiguard([loggedIn])
    },
  ]
const router = new Router({
  mode: 'history',
  routes
})
export default router
