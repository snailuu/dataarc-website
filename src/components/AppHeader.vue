<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <nav class="nav container">
      <div class="nav-brand">
        <router-link to="/" class="brand-link">
          <div class="brand-logo">
            <img src="/images/icons/企业logo.png" alt="DataArc Logo" class="logo-image">
            <span class="brand-text">DataArc</span>
          </div>
        </router-link>
      </div>
      
      <ul class="nav-links" :class="{ 'nav-links-open': isMobileMenuOpen }">
        <li class="nav-item">
          <router-link to="/" @click="closeMobileMenu" class="nav-link">
            <span class="nav-text">首页</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" @click="closeMobileMenu" class="nav-link">
            <span class="nav-text">产品方案</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/technology" @click="closeMobileMenu" class="nav-link">
            <span class="nav-text">技术优势</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/cases" @click="closeMobileMenu" class="nav-link">
            <span class="nav-text">案例展示</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/company" @click="closeMobileMenu" class="nav-link">
            <span class="nav-text">关于我们</span>
          </router-link>
        </li>
      </ul>
      
      <div class="nav-actions">
        <ThemeToggle />
        <a href="#" class="btn btn-primary btn-nav">立即登录</a>
        <button 
          class="mobile-menu-btn"
          @click="toggleMobileMenu"
          :class="{ 'mobile-menu-btn-active': isMobileMenuOpen }"
        >
          <span class="menu-line"></span>
          <span class="menu-line"></span>
          <span class="menu-line"></span>
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* ===== Header 基础样式 ===== */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--glass-bg);
  backdrop-filter: var(--glass-backdrop);
  -webkit-backdrop-filter: var(--glass-backdrop);
  border-bottom: 1px solid var(--glass-border);
  transition: all var(--duration-normal) var(--ease-out);
}

.header-scrolled {
  background: var(--bg-overlay);
  border-bottom: 1px solid var(--neutral-200);
  box-shadow: var(--shadow-medium);
}

/* ===== Navigation 布局 ===== */
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) 0;
  min-height: 72px;
}

/* ===== Brand 品牌区域 ===== */
.nav-brand {
  flex-shrink: 0;
}

.brand-link {
  text-decoration: none;
  transition: all var(--duration-normal) var(--ease-out);
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.logo-image {
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: var(--radius-md);
  transition: all var(--duration-normal) var(--ease-out);
  /* 为白色/透明背景优化，让logo显示为深色 */
  filter: brightness(0.3) contrast(1.8) saturate(0.8);
  mix-blend-mode: multiply;
}

.brand-link:hover .logo-image {
  transform: scale(1.1);
  filter: brightness(0.2) contrast(2) saturate(0.5);
}

.brand-text {
  font-size: var(--font-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  letter-spacing: -0.025em;
}

/* ===== Navigation Links ===== */
.nav-links {
  display: flex;
  list-style: none;
  gap: var(--space-2);
  margin: 0;
  padding: 0;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: var(--space-2) var(--space-4);
  text-decoration: none;
  border-radius: var(--radius-full);
  transition: all var(--duration-normal) var(--ease-out);
  position: relative;
  overflow: hidden;
}

.nav-text {
  font-weight: 500;
  font-size: var(--font-sm);
  color: var(--text-secondary);
  transition: all var(--duration-normal) var(--ease-out);
  position: relative;
  z-index: 2;
}

.nav-link:hover {
  background: rgba(99, 102, 241, 0.1);
  transform: translateY(-1px);
}

.nav-link:hover .nav-text {
  color: var(--primary-color);
}

.nav-link.router-link-active {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-backdrop);
  -webkit-backdrop-filter: var(--glass-backdrop);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow-soft);
}

.nav-link.router-link-active .nav-text {
  color: var(--primary-color);
  font-weight: 600;
}

/* ===== Actions 操作区域 ===== */
.nav-actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.btn-nav {
  padding: var(--space-3) var(--space-5);
  font-size: var(--font-sm);
  min-height: 40px;
  box-shadow: var(--shadow-soft);
}

/* ===== Mobile Menu Button ===== */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--duration-normal) var(--ease-out);
  backdrop-filter: var(--glass-backdrop);
  -webkit-backdrop-filter: var(--glass-backdrop);
}

.mobile-menu-btn:hover {
  background: rgba(99, 102, 241, 0.1);
  transform: scale(1.05);
}

.menu-line {
  display: block;
  width: 18px;
  height: 2px;
  background: var(--text-primary);
  margin: 2px 0;
  border-radius: var(--radius-full);
  transition: all var(--duration-normal) var(--ease-out);
}

.mobile-menu-btn-active .menu-line:nth-child(1) {
  transform: rotate(45deg) translate(4px, 4px);
}

.mobile-menu-btn-active .menu-line:nth-child(2) {
  opacity: 0;
  transform: scale(0);
}

.mobile-menu-btn-active .menu-line:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -4px);
}

/* ===== Responsive Design ===== */
@media (max-width: 1024px) {
  .nav-links {
    gap: var(--space-1);
  }
  
  .nav-link {
    padding: var(--space-2) var(--space-3);
  }
}

@media (max-width: 768px) {
  .nav {
    padding: var(--space-3) 0;
    min-height: 64px;
  }
  
  .nav-links {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    background: var(--glass-bg);
    backdrop-filter: var(--glass-backdrop);
    -webkit-backdrop-filter: var(--glass-backdrop);
    border-top: 1px solid var(--glass-border);
    border-bottom: 1px solid var(--glass-border);
    flex-direction: column;
    padding: var(--space-6);
    gap: var(--space-1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all var(--duration-normal) var(--ease-out);
  }
  
  .nav-links-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .nav-link {
    width: 100%;
    justify-content: center;
    padding: var(--space-4);
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .btn-nav {
    display: none;
  }
  
  .nav-actions {
    gap: var(--space-3);
  }
  
  .brand-text {
    font-size: var(--font-lg);
  }
  
  .logo-gradient {
    width: 28px;
    height: 28px;
  }
}

@media (max-width: 480px) {
  .nav {
    min-height: 56px;
  }
  
  .nav-links {
    top: 56px;
    padding: var(--space-4);
  }
  
  .brand-text {
    font-size: var(--font-base);
  }
  
  .logo-gradient {
    width: 24px;
    height: 24px;
  }
}

/* ===== Animation Enhancements ===== */
.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left var(--duration-slow) var(--ease-out);
  z-index: 1;
}

.nav-link:hover::before {
  left: 100%;
}

/* ===== Dark mode support (future) ===== */
@media (prefers-color-scheme: dark) {
  .header {
    background: rgba(0, 0, 0, 0.8);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .header-scrolled {
    background: rgba(0, 0, 0, 0.95);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  .nav-text {
    color: rgba(255, 255, 255, 0.8);
  }
  
  .nav-link:hover .nav-text,
  .nav-link.router-link-active .nav-text {
    color: var(--primary-light);
  }
  
  .menu-line {
    background: rgba(255, 255, 255, 0.9);
  }
}
</style> 
 