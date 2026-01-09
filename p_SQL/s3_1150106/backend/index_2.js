// const express = require('express')
// const app = express()
// const PORT = 3000

// const { products } = require('./products')

// // 允許 JSON
// app.use(express.json())

// // 測試用
// app.get('/', (req, res) => {
//   res.send('Warehouse API is running')
// })

// // 👉 取得商品列表
// app.get('/api/products', (req, res) => {
//   res.json(products)
// })

// app.listen(PORT, () => {
//   console.log(`Backend running on http://localhost:${PORT}`)
// })

// +++

// 1. 匯入 Express 框架
const express = require('express')
const app = express()
const PORT = 3000

// 2. 匯入剛才定義的商品資料 (模擬資料庫)
const { products } = require('./products')

/**
 * 3. 設定中介軟體 (Middleware)
 * 讓伺服器能夠解析前端傳來的 JSON 格式請求主體 (Request Body)
 */
app.use(express.json())

/**
 * 4. 測試路由
 * 用於檢查伺服器是否活著。網址：http://localhost:3000/
 */
app.get('/', (req, res) => {
  res.send('Warehouse API is running (倉庫系統 API 運作中)')
})

/**
 * 5. 取得商品列表 API
 * 前端呼叫此網址時，會得到 JSON 格式的商品資料
 * 網址：http://localhost:3000/api/products
 */
app.get('/api/products', (req, res) => {
  // 將 products 陣列轉換為 JSON 格式發送給前端
  res.json(products)
})

/**
 * 6. 啟動伺服器並監聽 3000 埠
 */
app.listen(PORT, () => {
  console.log(`後端伺服器已啟動：http://localhost:${PORT}`)
})
