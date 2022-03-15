import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home.vue'
import cart from '../views/cart.vue'
import catalog from '../views/catalog.vue'
import registration from '../views/registration.vue'
import product from '../views/product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: catalog
  },
  {
    path: '/registration',
    name: 'registration',
    component: registration
  },
  {
    path: '/product',
    name: 'product',
    component: product
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
