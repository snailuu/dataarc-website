import { defineStore } from 'pinia'
import { ref, watchEffect, computed } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  // 主题状态，默认为light
  const theme = ref(localStorage.getItem('theme') || 'light')

  // 切换主题
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  // 设置特定主题
  const setTheme = (newTheme) => {
    if (['light', 'dark'].includes(newTheme)) {
      theme.value = newTheme
    }
  }

  // 监听主题变化并应用到DOM
  watchEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.value)
    localStorage.setItem('theme', theme.value)
    
    // 添加主题class到body
    if (theme.value === 'dark') {
      document.body.classList.add('dark-theme')
      document.body.classList.remove('light-theme')
    } else {
      document.body.classList.add('light-theme')
      document.body.classList.remove('dark-theme')
    }
  })

  // 检测系统主题偏好
  const detectSystemTheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  }

  // 是否为暗色主题
  const isDark = computed(() => theme.value === 'dark')

  return {
    theme,
    toggleTheme,
    setTheme,
    detectSystemTheme,
    isDark
  }
}) 