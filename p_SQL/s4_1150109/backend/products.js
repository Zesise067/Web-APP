// let products = [
//   { id: 1, name: '鍵盤', stock: 50, location: 'A01' },
//   { id: 2, name: '滑鼠', stock: 30, location: 'B02' }
// ]

// module.exports = {
//   products
// }

// +++

// 1. 定義商品資料陣列 (通常作為模擬資料庫使用)
let products = [
  { id: 1, name: '鍵盤', stock: 55, location: 'A01' },
  { id: 2, name: '滑鼠', stock: 30, location: 'B02' }
]

/**
 * 2. 匯出模組 (CommonJS 語法)
 * 讓其他的 Node.js 檔案 (例如 server.js) 可以透過 require 讀取這份資料
 */
module.exports = {
  products // 這裡使用了 ES6 的縮寫，等同於 products: products
}
