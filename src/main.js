import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './styles/main.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// 初始化主题
import { useThemeStore } from './stores/theme'

// 挂载应用
const mountedApp = app.mount('#app')

// 在应用挂载后初始化主题
const themeStore = useThemeStore()

// 检测系统主题偏好（如果没有保存的主题设置）
if (!localStorage.getItem('theme')) {
  themeStore.setTheme(themeStore.detectSystemTheme())
} 