# 專案開發進度與修改紀錄

- **修改紀錄**
  - ChatGPT 建議內容
  - ChatGPT 遺漏內容

---

### 📂 Backend
- **`index.js`**
  1. Step 0-3：初始化後端（Node + Express）
  2. Step 2-1-3：建立商品 API
  3. 開啟 “跨網域 (CORS)”
  4. ✅ Step 2-3-1：後端新增「入庫 / 出庫 API」
  5. ✅ Step 2-4-1：後端新增「新增商品 API」
  6. 讓 JSON 輸出自動排版（縮排 2 個空格）
- **`products.js`**
  1. Step 2-1-2：建立「商品資料（後端版）」
- **`package.json`**
  1. Node 伺服器重啟工具

### 📂 Frontend
- **`src/`**
  - **`views/`**
    - **`ProductList.vue`**
      1. Step 1-1：建立「商品列表頁」
      2. Step 1-2-2：修改商品列表頁
      3. Step 1-2-5：在列表頁加「新增商品」按鈕
      4. ✅ Step 2-2-3：修改商品列表頁（用 API 取資料）
      5. ✅ Step 2-3-4：修改商品列表頁（改用後端）
    - **`AddProduct.vue`**
      1. Step 1-2-3：建立「新增商品頁」
      2. ✅ Step 2-4-4：修改「新增商品頁」（改用後端）
  - **`router/index.js`**
    1. Step 1-1：建立「商品列表頁」
    2. Step 1-2-4：設定路由（加上 `/add`）
  - **`App.vue`**
    1. Step 1-1：建立「商品列表頁」(遺漏部分)
  - **`store/products.js`**
    1. Step 1-2-1：建立共用商品資料
  - **`api/products.js`**
    1. ✅ Step 2-2-2：建立 API 工具（好習慣）
    2. ✅ Step 2-3-3：前端新增「入庫 / 出庫 API 呼叫」
    3. ✅ Step 2-4-3：前端新增「新增商品 API」
