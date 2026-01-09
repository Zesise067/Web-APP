// import { createRouter, createWebHistory } from 'vue-router'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [],
// })

// export default router

// ---

// 從 vue-router 套件中匯入必要的函式
// createRouter: 用來建立路由實例的主函式
// createWebHistory: 用來建立 HTML5 模式的歷史紀錄（網址不會有 # 號）
import { createRouter, createWebHistory } from 'vue-router'

// 呼叫 createRouter 函式來定義路由配置
const router = createRouter({
  /**
   * history: 設定網址路徑的模式
   * createWebHistory() 會使用瀏覽器原生的 History API
   * import.meta.env.BASE_URL 是 Vite 提供的環境變數，
   * 確保專案無論部署在根目錄或子目錄，路徑都能正確對接。
   */
  history: createWebHistory(import.meta.env.BASE_URL),

  /**
   * routes: 定義網址路徑 (Path) 與 組件 (Component) 的對應表
   * 目前是空陣列 []，代表尚未設定任何頁面路徑。
   * 範例結構：{ path: '/', component: HomeView }
   */
  routes: [],
})

// 將設定好的 router 實例匯出，
// 這樣在 main.js 中就可以透過 app.use(router) 來啟用路由功能
export default router