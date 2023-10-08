import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Port_Page from '../components/Port_Page.vue'
import Blog_Page from '../components/Blog_Page.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Port_Page
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog_Page
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
