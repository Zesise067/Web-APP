import { reactive } from 'vue'

export const products = reactive([
  { id: 1, name: '鍵盤', stock: 50, location: 'A01' },
  { id: 2, name: '滑鼠', stock: 30, location: 'B02' }
])
