<template>
  <div>
    <h1>📦 商品列表</h1>

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
import { products } from '../store/products'

export default {
  setup() {
    const increase = (product) => {
      product.stock++
    }

    const decrease = (product) => {
      if (product.stock > 0) {
        product.stock--
      }
    }

    return {
      products,
      increase,
      decrease
    }
  }
}
</script>

