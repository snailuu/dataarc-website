<template>
  <button 
    @click="themeStore.toggleTheme()"
    class="theme-toggle"
    :class="{ 'theme-toggle-dark': themeStore.isDark }"
    :title="themeStore.isDark ? '切换到亮色模式' : '切换到暗色模式'"
  >
    <div class="toggle-track">
      <div class="toggle-thumb">
        <div class="toggle-icon">
          <!-- 太阳图标 -->
          <svg v-if="!themeStore.isDark" viewBox="0 0 24 24" class="sun-icon">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <!-- 月亮图标 -->
          <svg v-else viewBox="0 0 24 24" class="moon-icon">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </div>
      </div>
    </div>
  </button>
</template>

<script setup>
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
</script>

<style scoped>
.theme-toggle {
  position: relative;
  width: 54px;
  height: 28px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  border-radius: var(--radius-full);
  transition: all var(--duration-normal) var(--ease-out);
}

.toggle-track {
  width: 100%;
  height: 100%;
  background: var(--neutral-200);
  border-radius: var(--radius-full);
  border: 2px solid var(--neutral-300);
  position: relative;
  transition: all var(--duration-normal) var(--ease-out);
}

.theme-toggle-dark .toggle-track {
  background: var(--neutral-700);
  border-color: var(--neutral-600);
}

.toggle-thumb {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background: var(--bg-primary);
  border-radius: var(--radius-full);
  transition: all var(--duration-normal) var(--ease-spring);
  box-shadow: var(--shadow-md);
  display: flex;
  align-items: center;
  justify-content: center;
}

.theme-toggle-dark .toggle-thumb {
  transform: translateX(26px);
  background: var(--bg-primary);
}

.toggle-icon {
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sun-icon,
.moon-icon {
  width: 100%;
  height: 100%;
  stroke: var(--primary-color);
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: all var(--duration-normal) var(--ease-out);
}

.moon-icon {
  fill: var(--primary-color);
  stroke: none;
}

.theme-toggle:hover .toggle-track {
  border-color: var(--primary-color);
  background: var(--primary-color);
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 100%);
}

.theme-toggle:hover .toggle-thumb {
  box-shadow: var(--shadow-lg);
  transform: scale(1.1);
}

.theme-toggle-dark:hover .toggle-thumb {
  transform: translateX(26px) scale(1.1);
}

.theme-toggle:active .toggle-thumb {
  transform: scale(0.95);
}

.theme-toggle-dark:active .toggle-thumb {
  transform: translateX(26px) scale(0.95);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .theme-toggle {
    width: 48px;
    height: 24px;
  }
  
  .toggle-thumb {
    width: 16px;
    height: 16px;
  }
  
  .theme-toggle-dark .toggle-thumb {
    transform: translateX(24px);
  }
  
  .toggle-icon {
    width: 10px;
    height: 10px;
  }
}
</style> 