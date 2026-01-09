const express = require('express')
const cors = require('cors') // 1. 引入套件
const app = express()
const PORT = 3000

// const { products } = require('./products')
const fs = require('fs')
const path = require('path')
const db = require('./db')

app.use(cors()) // 2. 開啟跨域權限 (必須放在所有 API 路由之前)

// 允許 JSON
app.use(express.json())

// 讓 JSON 輸出自動排版（縮排 2 個空格）
app.set('json spaces', 2) 

// 測試用
app.get('/', (req, res) => {
  res.send('Warehouse API is running')
})

// // 👉 取得商品列表
// app.get('/api/products', (req, res) => {
//   res.json(products)
// })
app.get('/api/products', (req, res) => {
  db.all('SELECT * FROM products', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ message: 'DB error' })
    }
    res.json(rows)
  })
})

// // 入庫
// app.post('/api/products/:id/in', (req, res) => {
//   const id = Number(req.params.id)
//   const product = products.find(p => p.id === id)

//   if (!product) {
//     return res.status(404).json({ message: 'Product not found' })
//   }

//   product.stock += 1
//   res.json(product)
// })
app.post('/api/products/:id/in', (req, res) => {
  const id = req.params.id

  db.run(
    'UPDATE products SET stock = stock + 1 WHERE id = ?',
    [id],
    function (err) {
      if (err || this.changes === 0) {
        return res.status(400).json({ message: 'Stock in failed' })
      }
      res.json({ success: true })
    }
  )
})


// // 出庫
// app.post('/api/products/:id/out', (req, res) => {
//   const id = Number(req.params.id)
//   const product = products.find(p => p.id === id)

//   if (!product) {
//     return res.status(404).json({ message: 'Product not found' })
//   }

//   if (product.stock <= 0) {
//     return res.status(400).json({ message: 'Stock not enough' })
//   }

//   product.stock -= 1
//   res.json(product)
// })
app.post('/api/products/:id/out', (req, res) => {
  const id = req.params.id

  db.run(
    'UPDATE products SET stock = stock - 1 WHERE id = ? AND stock > 0',
    [id],
    function (err) {
      if (err || this.changes === 0) {
        return res.status(400).json({ message: 'Stock out failed' })
      }
      res.json({ success: true })
    }
  )
})


// // 新增商品
// app.post('/api/products', (req, res) => {
//   const { name, stock, location } = req.body

//   if (!name || stock == null || !location) {
//     return res.status(400).json({ message: 'Invalid data' })
//   }

//   const newProduct = {
//     id: Date.now(),
//     name,
//     stock,
//     location
//   }

//   products.push(newProduct)
//   res.status(201).json(newProduct)
// })
app.post('/api/products', (req, res) => {
  const { name, stock, location } = req.body

  const sql = `
    INSERT INTO products (name, stock, location)
    VALUES (?, ?, ?)
  `

  db.run(sql, [name, stock, location], function (err) {
    if (err) {
      return res.status(500).json({ message: 'Insert failed' })
    }

    res.status(201).json({
      id: this.lastID,
      name,
      stock,
      location
    })
  })
})


// 初始化資料表
const schemaPath = path.join(__dirname, 'schema.sql')
const schema = fs.readFileSync(schemaPath, 'utf8')

db.exec(schema, (err) => {
  if (err) {
    console.error('Failed to init DB schema', err)
  } else {
    console.log('DB schema ready')
  }
})

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`)
})
