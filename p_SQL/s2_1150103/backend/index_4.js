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

// 入庫
app.post('/api/products/:id/in', (req, res) => {
  const id = Number(req.params.id)
  const product = products.find(p => p.id === id)

  if (!product) {
    return res.status(404).json({ message: 'Product not found' })
  }

  product.stock += 1
  res.json(product)
})

// 出庫
app.post('/api/products/:id/out', (req, res) => {
  const id = Number(req.params.id)
  const product = products.find(p => p.id === id)

  if (!product) {
    return res.status(404).json({ message: 'Product not found' })
  }

  if (product.stock <= 0) {
    return res.status(400).json({ message: 'Stock not enough' })
  }

  product.stock -= 1
  res.json(product)
})

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`)
})
