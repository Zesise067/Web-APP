<template>
  <div>
    <h1>📦 商品列表</h1>
    <router-link to="/add">
      <button>➕ 新增商品</button>
    </router-link>
    <table border="1" cellpadding="8">
      <thead>
        <tr>
          <th>名稱</th>
          <th>庫存</th>
          <th>位置</th>
          <th>操作</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.stock }}</td>
          <td>{{ product.location }}</td>
          <td>
            <button @click="increase(product)">入庫</button>
            <button @click="decrease(product)">出庫</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { getProducts } from '../api/products'

export default {
  setup() {
    const products = ref([])

    const loadProducts = async () => {
      const res = await getProducts()
      products.value = res.data
    }

    const increase = (product) => {
      product.stock++
    }

    const decrease = (product) => {
      if (product.stock > 0) {
        product.stock--
      }
    }

    onMounted(() => {
      loadProducts()
    })

    return {
      products,
      increase,
      decrease
    }
  }
}
</script>


