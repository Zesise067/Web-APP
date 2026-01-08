**🚀 Web App 開發專案筆記**

**📝 修改紀錄**

- ChatGPT 建議內容
- ChatGPT 遺漏內容

---

**🏗️ 基礎環境建立**

- **`_0_createNodeProject_1141227`**
    - 第一次運行 Node 專案
- **`_0_createVueProject_1141228`**
    - 第一次運行 Vue 專案
- **`images/`**
    - 存放相片用

---

**🗄️ 專案開發：`p_SQL`**

> s?: 階段區分，形同備份
> 

**🖥️ Backend (後端)**

- **`index.js`**
    1. Step 0-3：初始化後端（Node + Express）
    2. Step 2-1-3：建立商品 API
    3. 開啟 “跨網域 (CORS)”
    4. ✅ Step 2-3-1：後端新增「入庫 / 出庫 API」
    5. ✅ Step 2-4-1：後端新增「新增商品 API」
    6. 讓 JSON 輸出自動排版（縮排 2 個空格）
    7. ✅ Step 3-1-
    8. ✅ Step 3-2-2：後端「入庫時寫紀錄」
    9. ✅ Step 3-2-3：後端「出庫時寫紀錄」
    10. ✅ Step 3-2-4：新增「查詢紀錄 API」
- **`products.js`**
    1. Step 2-1-2：建立「商品資料（後端版）」
- **`package.json`**
    1. Node 伺服器重啟工具
- **`db.js`**
    1. ✅ Step 3-1-2：建立資料庫連線（db.js）
- **`schema.sql`**
    1. ✅ Step 3-1-3：建立資料表（schema.sql）
    2. ✅ Step 3-2-1：建立紀錄表 schema


**🎨 Frontend (前端)**

- **`src/views/` (頁面)**
    - **`ProductList.vue`**
        1. Step 1-1：建立「商品列表頁」
        2. Step 1-2-2：修改商品列表頁
        3. Step 1-2-5：在列表頁加「新增商品」按鈕
        4. ✅ Step 2-2-3：修改商品列表頁（用 API 取資料）
        5. ✅ Step 2-3-4：修改商品列表頁（改用後端）
    - **`AddProduct.vue`**
        1. Step 1-2-3：建立「新增商品頁」
        2. ✅ Step 2-4-4：修改「新增商品頁」（改用後端）
    - **`StockLogs.vue`**
        1. 未知領域：網頁切換
- **`src/router/index.js`**
    1. Step 1-1：建立「商品列表頁」
    2. Step 1-2-4：設定路由（加上 /add）
    3. 未知領域：網頁切換
- **`src/App.vue`**
    1. Step 1-1：建立「商品列表頁」(遺漏部分)
    2. 未知領域：網頁切換
- **`src/store/products.js`**
    1. Step 1-2-1：建立共用商品資料
- **`src/api/products.js`**
    1. ✅ Step 2-2-2：建立 API 工具（好習慣）
    2. ✅ Step 2-3-3：前端新增「入庫 / 出庫 API 呼叫」
    3. ✅ Step 2-4-3：前端新增「新增商品 API」
- **根目錄與設定檔**
    - **`logs.html`**
        1. ✅ Step 3-2-6-1：建立新頁面
    - **`logs.js`**
        1. ✅ Step 3-2-6-2：新增 JS 抓取紀錄
    - **`index.html`**
        1. 基本設定
        2. ✅ Step 3-2-7-1：加一個「導覽選單」
        3. .html 設定文本（無法銜接 .vue，未完成品）
    - **`main.js`**
        1. main.js 設定文本
        2. 未知領域：網頁切換