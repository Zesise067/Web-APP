const express = require('express')
const cors = require('cors') // 1. 引入套件
const app = express()
const PORT = 3000

const { products } = require('./products')

app.use(cors()) // 2. 開啟跨域權限 (必須放在所有 API 路由之前)

// 允許 JSON
app.use(express.json())

// 測試用
app.get('/', (req, res) => {
  res.send('Warehouse API is running')
})

// 👉 取得商品列表
app.get('/api/products', (req, res) => {
  res.json(products)
})

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`)
})
