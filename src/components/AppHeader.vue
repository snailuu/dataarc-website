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
        <li class="nav-item dropdown-wrapper" @mouseenter="showDropdown('home')" @mouseleave="hideDropdown">
          <router-link to="/" class="nav-link">
            <div class="nav-bilingual">
              <span class="nav-main">首页</span>
              <span class="nav-separator">|</span>
              <span class="nav-en">Home</span>
            </div>
            <svg class="dropdown-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
          <div class="dropdown-menu" v-show="activeDropdown === 'home'" @mouseenter="showDropdown('home')" @mouseleave="hideDropdown">
            <div class="dropdown-content">
              <a href="#market-opportunity" class="dropdown-item" @click="closeMobileMenu">
                <svg class="dropdown-item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2L15 6V14H1V6L8 2Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="dropdown-item-content">
                  <span class="dropdown-item-title">市场机会 | Market Opportunity</span>
                  <span class="dropdown-item-desc">数据稀缺危机与行业增长</span>
                </div>
              </a>
              <a href="#products-overview" class="dropdown-item" @click="closeMobileMenu">
                <svg class="dropdown-item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 3H14V13H2V3Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 7H8.01" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="dropdown-item-content">
                  <span class="dropdown-item-title">产品方案 | Products</span>
                  <span class="dropdown-item-desc">LivingKB + SynData Platform</span>
                </div>
              </a>
              <a href="#tech-advantages" class="dropdown-item" @click="closeMobileMenu">
                <svg class="dropdown-item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L9.5 6H15L10.5 9.5L12 15L8 11.5L4 15L5.5 9.5L1 6H6.5L8 1Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="dropdown-item-content">
                  <span class="dropdown-item-title">技术优势 | Technology</span>
                  <span class="dropdown-item-desc">更懂行、更聪明、更靠谱</span>
                </div>
              </a>
              <a href="#team-strength" class="dropdown-item" @click="closeMobileMenu">
                <svg class="dropdown-item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z" fill="currentColor"/>
                  <path d="M8 10C4.69 10 2 12.69 2 16H14C14 12.69 11.31 10 8 10Z" fill="currentColor"/>
                </svg>
                <div class="dropdown-item-content">
                  <span class="dropdown-item-title">团队实力 | Team Strength</span>
                  <span class="dropdown-item-desc">专业团队与技术积累</span>
                </div>
              </a>
            </div>
          </div>
        </li>

        <li class="nav-item dropdown-wrapper" @mouseenter="showDropdown('products')" @mouseleave="hideDropdown">
          <router-link to="/products" class="nav-link">
            <div class="nav-bilingual">
              <span class="nav-main">产品方案</span>
              <span class="nav-separator">|</span>
              <span class="nav-en">Products</span>
            </div>
            <svg class="dropdown-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
          <div class="dropdown-menu" v-show="activeDropdown === 'products'" @mouseenter="showDropdown('products')" @mouseleave="hideDropdown">
            <div class="dropdown-content">
              <router-link to="/products#comparison-matrix" class="dropdown-item" @click="closeMobileMenu">
                <svg class="dropdown-item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 3H13V13H3V3Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 3V13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3 8H13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="dropdown-item-content">
                  <span class="dropdown-item-title">产品对比矩阵 | Comparison Matrix</span>
                  <span class="dropdown-item-desc">核心定位与功能对比</span>
                </div>
              </router-link>
              <router-link to="/products#livingkb-intro" class="dropdown-item" @click="closeMobileMenu">
                <svg class="dropdown-item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 6H12V10H4V6Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 2H14V14H2V2Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="8" cy="8" r="1" fill="currentColor"/>
                </svg>
                <div class="dropdown-item-content">
                  <span class="dropdown-item-title">LivingKB | Living Knowledge Base</span>
                  <span class="dropdown-item-desc">企业知识库智能化平台</span>
                </div>
              </router-link>
              <router-link to="/products#syndata-intro" class="dropdown-item" @click="closeMobileMenu">
                <svg class="dropdown-item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 14L8 2L14 14H2Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6 10H10" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="dropdown-item-content">
                  <span class="dropdown-item-title">SynData Platform | 合成数据平台</span>
                  <span class="dropdown-item-desc">智能合成数据生成平台</span>
                </div>
              </router-link>
              <router-link to="/products#synergy-value" class="dropdown-item" @click="closeMobileMenu">
                <svg class="dropdown-item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L9.5 6H15L10.5 9.5L12 15L8 11.5L4 15L5.5 9.5L1 6H6.5L8 1Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="dropdown-item-content">
                  <span class="dropdown-item-title">协同价值 | Synergy Value</span>
                  <span class="dropdown-item-desc">双产品闭环生态价值</span>
                </div>
              </router-link>
              <router-link to="/products#success-cases" class="dropdown-item" @click="closeMobileMenu">
                <svg class="dropdown-item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6 8L7.5 9.5L10.5 6.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="dropdown-item-content">
                  <span class="dropdown-item-title">成功案例 | Success Cases</span>
                  <span class="dropdown-item-desc">客户实施效果与反馈</span>
                </div>
              </router-link>
            </div>
          </div>
        </li>

        <li class="nav-item dropdown-wrapper" @mouseenter="showDropdown('technology')" @mouseleave="hideDropdown">
          <router-link to="/technology" class="nav-link">
            <div class="nav-bilingual">
              <span class="nav-main">技术优势</span>
              <span class="nav-separator">|</span>
              <span class="nav-en">Technology</span>
            </div>
            <svg class="dropdown-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
          <div class="dropdown-menu" v-show="activeDropdown === 'technology'" @mouseenter="showDropdown('technology')" @mouseleave="hideDropdown">
            <div class="dropdown-content">
              <router-link to="/technology#product-process" class="dropdown-item" @click="closeMobileMenu">
                <svg class="dropdown-item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10 5L13 8L10 11" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="5" cy="8" r="2" stroke="currentColor" stroke-width="1.2"/>
                </svg>
                <div class="dropdown-item-content">
                  <span class="dropdown-item-title">技术流程 | Technical Process</span>
                  <span class="dropdown-item-desc">从数据到智能决策的完整流程</span>
                </div>
              </router-link>
              <router-link to="/technology#tech-advantages" class="dropdown-item" @click="closeMobileMenu">
                <svg class="dropdown-item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L9.5 6H15L10.5 9.5L12 15L8 11.5L4 15L5.5 9.5L1 6H6.5L8 1Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="dropdown-item-content">
                  <span class="dropdown-item-title">核心优势 | Core Advantages</span>
                  <span class="dropdown-item-desc">六大技术优势详解</span>
                </div>
              </router-link>
              <router-link to="/technology#performance-comparison" class="dropdown-item" @click="closeMobileMenu">
                <svg class="dropdown-item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 13L4 9L7 11L14 3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11 3H14V6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="dropdown-item-content">
                  <span class="dropdown-item-title">性能对比 | Performance</span>
                  <span class="dropdown-item-desc">建图效率与准确率优势</span>
                </div>
              </router-link>
              <router-link to="/technology#faq" class="dropdown-item" @click="closeMobileMenu">
                <svg class="dropdown-item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6 6C6 5.33696 6.26339 4.70107 6.73223 4.23223C7.20107 3.76339 7.83696 3.5 8.5 3.5C9.16304 3.5 9.79893 3.76339 10.2678 4.23223C10.7366 4.70107 11 5.33696 11 6C11 6.66304 10.7366 7.29893 10.2678 7.76777C9.79893 8.23661 9.16304 8.5 8.5 8.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8.5 11.5H8.51" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="dropdown-item-content">
                  <span class="dropdown-item-title">常见问题 | FAQ</span>
                  <span class="dropdown-item-desc">技术问题解答</span>
                </div>
              </router-link>
            </div>
          </div>
        </li>

        <li class="nav-item dropdown-wrapper" @mouseenter="showDropdown('cases')" @mouseleave="hideDropdown">
          <router-link to="/cases" class="nav-link">
            <div class="nav-bilingual">
              <span class="nav-main">客户案例</span>
              <span class="nav-separator">|</span>
              <span class="nav-en">Cases</span>
            </div>
            <svg class="dropdown-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
          <div class="dropdown-menu" v-show="activeDropdown === 'cases'" @mouseenter="showDropdown('cases')" @mouseleave="hideDropdown">
            <div class="dropdown-content">
              <router-link to="/cases#industry-coverage" class="dropdown-item" @click="closeMobileMenu">
                <svg class="dropdown-item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 2H14V14H2V2Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 2V14" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2 8H14" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="dropdown-item-content">
                  <span class="dropdown-item-title">行业覆盖 | Industry Coverage</span>
                  <span class="dropdown-item-desc">金融、制造、云计算等行业</span>
                </div>
              </router-link>
              <router-link to="/cases#detailed-cases" class="dropdown-item" @click="closeMobileMenu">
                <svg class="dropdown-item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 4H13V12H3V4Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M5 2V4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11 2V4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3 8H13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="dropdown-item-content">
                  <span class="dropdown-item-title">详细案例 | Detailed Cases</span>
                  <span class="dropdown-item-desc">客户挑战、解决方案、效果</span>
                </div>
              </router-link>
              <router-link to="/cases#benchmark-comparison" class="dropdown-item" @click="closeMobileMenu">
                <svg class="dropdown-item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 13L4 9L7 11L14 3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11 3H14V6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="dropdown-item-content">
                  <span class="dropdown-item-title">标杆对比 | Benchmark</span>
                  <span class="dropdown-item-desc">与行业标杆产品对比</span>
                </div>
              </router-link>
            </div>
          </div>
        </li>

        <li class="nav-item dropdown-wrapper" @mouseenter="showDropdown('company')" @mouseleave="hideDropdown">
          <router-link to="/company" class="nav-link">
            <div class="nav-bilingual">
              <span class="nav-main">关于我们</span>
              <span class="nav-separator">|</span>
              <span class="nav-en">About</span>
            </div>
            <svg class="dropdown-icon" width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </router-link>
          <div class="dropdown-menu" v-show="activeDropdown === 'company'" @mouseenter="showDropdown('company')" @mouseleave="hideDropdown">
            <div class="dropdown-content">
              <router-link to="/company#about-dataarc" class="dropdown-item" @click="closeMobileMenu">
                <svg class="dropdown-item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L15 6V14H1V6L8 1Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M6 14V10H10V14" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="dropdown-item-content">
                  <span class="dropdown-item-title">公司介绍 | About DataArc</span>
                  <span class="dropdown-item-desc">公司愿景与发展理念</span>
                </div>
              </router-link>
              <router-link to="/company#core-team" class="dropdown-item" @click="closeMobileMenu">
                <svg class="dropdown-item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 10C4.69 10 2 12.69 2 16H14C14 12.69 11.31 10 8 10Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="dropdown-item-content">
                  <span class="dropdown-item-title">核心团队 | Core Team</span>
                  <span class="dropdown-item-desc">团队介绍与技术优势</span>
                </div>
              </router-link>
              <router-link to="/company#funding-status" class="dropdown-item" @click="closeMobileMenu">
                <svg class="dropdown-item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1V15" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 5L8 1L4 5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1 8H15" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="dropdown-item-content">
                  <span class="dropdown-item-title">融资情况 | Funding</span>
                  <span class="dropdown-item-desc">融资轮次与投资机构</span>
                </div>
              </router-link>
              <router-link to="/company#development-history" class="dropdown-item" @click="closeMobileMenu">
                <svg class="dropdown-item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 4V8L11 11" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div class="dropdown-item-content">
                  <span class="dropdown-item-title">发展历程 | Development</span>
                  <span class="dropdown-item-desc">公司成长历程与里程碑</span>
                </div>
              </router-link>
            </div>
          </div>
        </li>
      </ul>
      
      <div class="nav-actions">
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
const activeDropdown = ref(null)
let hideTimer = null

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  activeDropdown.value = null
}

const showDropdown = (dropdown) => {
  if (hideTimer) {
    clearTimeout(hideTimer)
    hideTimer = null
  }
  activeDropdown.value = dropdown
}

const hideDropdown = () => {
  if (hideTimer) {
    clearTimeout(hideTimer)
  }
  hideTimer = setTimeout(() => {
    activeDropdown.value = null
    hideTimer = null
  }, 200)
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
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: var(--glass-backdrop);
  -webkit-backdrop-filter: var(--glass-backdrop);
  border-bottom: 1px solid var(--glass-border);
  transition: all var(--duration-normal) var(--ease-out);
  --logo-size: min(4vw, 60px);
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
  padding: 0.25rem 0;
  min-height: 32px;
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
  width: var(--logo-size);
  height: var(--logo-size);
  flex-shrink: 0;
}

/* 强制覆盖任何可能的样式冲突 */
.nav-brand .brand-logo .logo-image {
  width: var(--logo-size) !important;
  height: var(--logo-size) !important;
}

.logo-image {
  width: var(--logo-size) !important;
  height: var(--logo-size) !important;
  min-width: var(--logo-size) !important;
  min-height: var(--logo-size) !important;
  max-width: var(--logo-size) !important;
  max-height: var(--logo-size) !important;
  object-fit: contain;
  border-radius: var(--radius-md);
  display: block !important;
  flex-shrink: 0;
}

/* Light theme - logo turns black */
:root:not([data-theme="dark"]) .logo-image {
  filter: brightness(0) invert(0);
  width: var(--logo-size) !important;
  height: var(--logo-size) !important;
}

/* Dark theme - logo turns white */
:root[data-theme="dark"] .logo-image {
  filter: brightness(0) invert(1);
  width: var(--logo-size) !important;
  height: var(--logo-size) !important;
}

.brand-link:hover .logo-image {
  filter: brightness(0.8);
  width: var(--logo-size) !important;
  height: var(--logo-size) !important;
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
  gap: var(--space-1);
  margin: 0;
  padding: 0;
}

.nav-item {
  position: relative;
}

.dropdown-wrapper {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0.3rem var(--space-3);
  text-decoration: none;
  border-radius: 0;
  transition: all var(--duration-normal) var(--ease-out);
  position: relative;
  overflow: hidden;
  margin: 0;
}

.nav-link .nav-bilingual,
.nav-action-link .nav-bilingual {
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

.dropdown-icon {
  color: var(--text-tertiary);
  transition: all var(--duration-fast) var(--ease-out);
}

.nav-link:hover {
  background: rgba(74, 144, 180, 0.25);  /* 更深的蓝色，更高透明度 */
  transform: translateY(0);
}

.nav-link:hover .nav-main {
  color: #4a90b4;  /* 更深的蓝色 */
}

.nav-link:hover .nav-en {
  color: #4a90b4;  /* 更深的蓝色 */
  opacity: 1;
}

.nav-link:hover .dropdown-icon {
  color: var(--primary-color);
  transform: rotate(180deg);
}

.nav-link.router-link-active {
  background: transparent;
}

.nav-link.router-link-active .nav-main {
  color: #4a90b4;  /* 更深的蓝色 */
  font-weight: 600;
}

.nav-link.router-link-active .nav-en {
  color: #4a90b4;  /* 更深的蓝色 */
  opacity: 1;
}

/* ===== Dropdown Menu ===== */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: var(--space-2);
  background: var(--bg-primary);
  border: 1px solid var(--neutral-200);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-large);
  overflow: hidden;
  z-index: 1001;
  min-width: 280px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.dropdown-content {
  padding: var(--space-2);
}

.dropdown-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-3);
  text-decoration: none;
  border-radius: var(--radius-lg);
  transition: all var(--duration-fast) var(--ease-out);
  position: relative;
}

.dropdown-item:hover {
  background: rgba(74, 144, 180, 0.15);  /* 更深的蓝色，更高透明度 */
  transform: translateX(0);
  margin: 0;
}

.dropdown-item-icon {
  color: var(--text-tertiary);
  transition: all var(--duration-fast) var(--ease-out);
  flex-shrink: 0;
  margin-top: 2px;
}

.dropdown-item:hover .dropdown-item-icon {
  color: #4a90b4;  /* 更深的蓝色 */
}

.dropdown-item-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.dropdown-item-title {
  font-weight: 500;
  font-size: var(--font-sm);
  color: var(--text-primary);
  transition: all var(--duration-fast) var(--ease-out);
  line-height: 1.4;
}

.dropdown-item:hover .dropdown-item-title {
  color: #4a90b4;  /* 更深的蓝色 */
}

.dropdown-item-desc {
  font-size: var(--font-xs);
  color: var(--text-tertiary);
  line-height: 1.4;
  transition: all var(--duration-fast) var(--ease-out);
}

.dropdown-item:hover .dropdown-item-desc {
  color: var(--text-secondary);
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

.nav-action-link {
  margin-left: var(--space-2);
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
    gap: 0;
  }
  
  .nav-link {
    padding: var(--space-2) var(--space-3);
  }
  
  .dropdown-menu {
    min-width: 260px;
  }
}

@media (max-width: 768px) {
  .header {
    --logo-size: min(4vw, 55px);
  }
  
  .nav {
    padding: 0.25rem 0;
    min-height: 32px;
  }
  
  .nav-links {
    position: fixed;
    top: 32px;
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
    padding: var(--space-3);
    border-radius: 0;
    margin: 0;
  }
  
  .nav-link .nav-bilingual,
  .nav-action-link .nav-bilingual,
  .theme-toggle .nav-bilingual {
    flex-direction: row !important;
    align-items: center !important;
  }
  
  .dropdown-menu {
    position: static;
    transform: none;
    margin-top: var(--space-2);
    width: 100%;
    box-shadow: none;
    border: 1px solid var(--neutral-200);
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .nav-action-link {
    display: none;
  }
  
  .nav-actions {
    gap: var(--space-3);
  }
  
  .brand-text {
    font-size: var(--font-lg);
  }
  

}

@media (max-width: 480px) {
  .header {
    --logo-size: min(5vw, 45px);
  }
  
  .nav {
    min-height: 30px;
    padding: 0.2rem 0;
  }
  
  .nav-links {
    top: 30px;
    padding: var(--space-4);
  }
  
  .nav-link .nav-bilingual,
  .nav-action-link .nav-bilingual,
  .theme-toggle .nav-bilingual {
    flex-direction: row !important;
    align-items: center !important;
  }
  
  .brand-text {
    font-size: var(--font-base);
  }
  

  
  .dropdown-item {
    padding: var(--space-2);
  }
  
  .dropdown-item-content {
    gap: 2px;
  }
  
  .dropdown-item-title {
    font-size: 12px;
  }
  
  .dropdown-item-desc {
    font-size: 11px;
  }
}

/* ===== Enhanced Animations ===== */
.dropdown-menu {
  animation: dropdownFadeIn 0.2s ease-out;
}

@keyframes dropdownFadeIn {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left var(--duration-slow) var(--ease-out);
  z-index: 1;
}

.nav-link:hover::before {
  left: 100%;
}

/* ===== Dark mode support ===== */
@media (prefers-color-scheme: dark) {
  .header {
    background: rgba(0, 0, 0, 0.8);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .header-scrolled {
    background: rgba(0, 0, 0, 0.95);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  .dropdown-menu {
    background: rgba(0, 0, 0, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .nav-main {
    color: rgba(255, 255, 255, 0.9);
  }
  
  .nav-en {
    color: rgba(255, 255, 255, 0.6);
  }
  
  .dropdown-item-title {
    color: rgba(255, 255, 255, 0.9);
  }
  
  .dropdown-item-desc {
    color: rgba(255, 255, 255, 0.6);
  }
  
  .nav-link:hover .nav-main,
  .nav-link:hover .nav-en,
  .nav-link.router-link-active .nav-main,
  .nav-link.router-link-active .nav-en {
    color: var(--primary-light);
  }
  
  .menu-line {
    background: rgba(255, 255, 255, 0.9);
  }
}
</style> 
 