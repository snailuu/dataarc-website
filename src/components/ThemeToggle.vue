<template>
  <button 
    @click="themeStore.toggleTheme()"
    class="theme-toggle nav-link"
    :title="themeStore.isDark ? '切换到亮色模式' : '切换到暗色模式'"
  >
    <div class="nav-bilingual">
      <span class="nav-main">{{ themeStore.isDark ? '浅色' : '深色' }}</span>
      <span class="nav-separator">|</span>
      <span class="nav-en">{{ themeStore.isDark ? 'Light' : 'Dark' }}</span>
    </div>
  </button>
</template>

<script setup>
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
</script>

<style scoped>
.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-2) var(--space-4);
  margin: 0;
  border-radius: 0;
  transition: all var(--duration-normal) var(--ease-out);
}

.theme-toggle .nav-bilingual {
  display: flex !important;
  flex-direction: row !important;
  align-items: center;
  gap: var(--space-2);
}

.nav-main {
  font-weight: 500;
  font-size: var(--font-sm);
  color: var(--text-primary);
  transition: all var(--duration-normal) var(--ease-out);
  line-height: 1.2;
}

.nav-separator {
  font-weight: 300;
  font-size: var(--font-sm);
  color: var(--text-tertiary);
  opacity: 0.6;
}

.nav-en {
  font-weight: 400;
  font-size: var(--font-sm);
  color: var(--text-tertiary);
  opacity: 0.8;
  transition: all var(--duration-normal) var(--ease-out);
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

.theme-toggle:hover {
  background: rgba(62, 70, 120, 0.15);  /* 深紫蓝色低饱和度 */
  transform: translateY(0);
}

.theme-toggle:hover .nav-main {
  color: #6b73b8;  /* 深紫蓝色 */
}

.theme-toggle:hover .nav-en {
  color: #6b73b8;  /* 深紫蓝色 */
  opacity: 1;
}
</style> 