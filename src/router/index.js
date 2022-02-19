import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import RoastLogger from '../components/RoastLogger.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/roasts',
    name: 'Roasts',
    component: () => import(/* webpackChunkName: "roasts" */'../views/Roasts.vue'),
    children: [
      {
        path: 'new',
        component: RoastLogger
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
