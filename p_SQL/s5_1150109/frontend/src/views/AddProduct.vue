<template>
  <div>
    <h1>➕ 新增商品</h1>

    <form @submit.prevent="addProduct">
      <div>
        <label>商品名稱：</label>
        <input v-model="name" required />
      </div>

      <div>
        <label>初始庫存：</label>
        <input type="number" v-model.number="stock" required />
      </div>

      <div>
        <label>儲位：</label>
        <input v-model="location" required />
      </div>

      <button type="submit">新增</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { createProduct } from '../api/products'

export default {
  setup() {
    const router = useRouter()

    const name = ref('')
    const stock = ref(0)
    const location = ref('')

    const addProduct = async () => {
      await createProduct({
        name: name.value,
        stock: stock.value,
        location: location.value
      })

      router.push('/')
    }

    return {
      name,
      stock,
      location,
      addProduct
    }
  }
}
</script>
