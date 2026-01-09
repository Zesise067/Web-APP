<template>
  <div id="app">
    <!-- 將 index.html 的導覽列搬到這裡，並改用 router-link -->
    <nav style="margin-bottom: 15px; background: #f4f4f4; padding: 10px;">
      <router-link to="/">📦 商品列表</router-link> |
      <router-link to="/add">➕ 新增商品</router-link> |
      <router-link to="/logs">📊 庫存異動紀錄</router-link>
    </nav>
    
    <router-view />
  </div>
</template>

<script>
export default { name: 'App' }
</script>
