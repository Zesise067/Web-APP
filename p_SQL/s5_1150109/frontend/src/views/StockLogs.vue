<template>
  <div class="log-container">
    <h1>📊 庫存異動紀錄</h1>

    <!-- Vue 的返回連結 -->
    <router-link to="/" class="back-link">⬅ 回商品列表</router-link>

    <table class="log-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>商品名稱</th>
          <th>動作</th>
          <th>數量</th>
          <th>時間</th>
        </tr>
      </thead>
      <tbody>
        <!-- 使用 v-for 渲染紀錄 -->
        <tr v-for="log in logs" :key="log.id">
          <td>{{ log.id }}</td>
          <td>{{ log.product_id }}</td>
          <!-- 根據動作動態綁定 class (IN/OUT) -->
          <td :class="log.action">{{ log.action }}</td>
          <td>{{ log.quantity }}</td>
          <td>{{ formatTime(log.created_at) }}</td>
        </tr>
        <tr v-if="logs.length === 0">
          <td colspan="5">目前尚無異動紀錄</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios' // 建議使用 axios，或維持用 fetch

const logs = ref([])

// 抓取紀錄資料
const fetchLogs = async () => {
  try {
    // 這裡對應你原本 logs.js 的 URL
    const response = await fetch('http://localhost:3000/api/logs')
    const data = await response.json()
    logs.value = data
  } catch (error) {
    console.error('無法取得紀錄:', error)
  }
}

// 格式化時間 (可選，讓顯示更美觀)
const formatTime = (timeString) => {
  if (!timeString) return ''
  const date = new Date(timeString)
  return date.toLocaleString()
}

onMounted(() => {
  fetchLogs()
})
</script>

<style scoped>
/* 搬移原本 html 裡的 CSS 並改為 scoped (只作用於此組件) */
.log-container {
  padding: 20px;
}

.log-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.log-table th, .log-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
}

.log-table th {
  background-color: #f5f5f5;
}

/* 動作狀態顏色 */
.IN {
  color: green;
  font-weight: bold;
}

.OUT {
  color: red;
  font-weight: bold;
}

.back-link {
  display: inline-block;
  margin-bottom: 10px;
  text-decoration: none;
  color: #42b983;
}
</style>
