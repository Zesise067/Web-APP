import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import AddProduct from '../views/AddProduct.vue'
import StockLogs from '../views/StockLogs.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: ProductList },
    { path: '/add', component: AddProduct },
    { path: '/logs', component: StockLogs }
  ]
})

export default router
