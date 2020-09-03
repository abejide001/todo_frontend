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
     next('/todos')
  }
  next();
}

const notLoggedIn = function(to, from, next) {
    if (!store.state.isUserLoggedIn) {
       next('/login')
    }
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
      beforeEnter: multiguard([loggedIn])
    },

    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: multiguard([loggedIn])
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
const router = new Router({
  mode: 'history',
  routes
})
export default router
