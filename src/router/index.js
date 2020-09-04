/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Todo from '@/components/Todos'
import CreateTodo from '@/components/CreateTodo'
import SocialAuth from '@/components/SocialAuth'
import store from "../store/store"
import multiguard from 'vue-router-multiguard';

// const loggedIn = function(to, from, next) {
//   if (store.state.isUserLoggedIn) {
//      next()
//   }
//   next("/login")
// }

const guest = function (to, from, next) {
  if (!store.state.isUserLoggedIn) {
    next("/login")
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
      meta: {
        hideForAuth: true
      }
    },

    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        hideForAuth: true
      }
    },
    {
      path: '/auth',
      name: 'auth',
      component: SocialAuth
    },
    {
      path: '/todos',
      name: 'todos',
      component: Todo,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/todos/create',
      name: 'todos-create',
      component: CreateTodo,
      meta: {
        requiresAuth: true
      }
    },
  ]
  const router = new Router({
    mode: 'history',
    routes
  })
  router.beforeEach((to, from, next) => {
        if (to.matched.some(record => record.meta.requiresAuth)) {
            if (!store.state.isUserLoggedIn) {
                next({ path: '/login' });
            } else {
                next();
            }

        } else {
            next();
        }

        if (to.matched.some(record => record.meta.hideForAuth)) {
            if (store.state.isUserLoggedIn) {
                next({ path: '/todos' });
            } else {
                next();
            }
        } else {
            next();
        }
});
export default router
