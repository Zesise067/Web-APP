import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: ProductList
    }
  ]
})

export default router
