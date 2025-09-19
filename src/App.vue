<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup>
// 根组件，所有页面的容器
</script>

<style>
#app {
  min-height: 100vh;
  font-family: 'Microsoft YaHei', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  transition: all var(--duration-normal) var(--ease-out);
}
</style> 