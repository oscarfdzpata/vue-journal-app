import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import daybookRouter from "../modules/daybook/router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/daybook',
    //importo arriba el router del daybook
    // component: () => import(/* webpackChunkName: "daybook" */ '../modules/daybook/layouts/DayBookLayout.vue')
    ...daybookRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
