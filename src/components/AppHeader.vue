<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <nav class="nav container">
      <div class="nav-brand">
        <RouterLink to="/" class="brand-link" @click="closeMobileMenu">
          <div class="brand-logo">
            <img src="/images/icons/企业logo.png" :alt="`${t('common.brand')} Logo`" class="logo-image">
            <span class="brand-text">{{ t('common.brand') }}</span>
          </div>
        </RouterLink>
      </div>

      <ul class="nav-links" :class="{ 'nav-links-open': isMobileMenuOpen }">
        <li
          v-for="item in navItems"
          :key="item.id"
          class="nav-item dropdown-wrapper"
          @mouseenter="showDropdown(item.id)"
          @mouseleave="hideDropdown"
        >
          <RouterLink :to="item.route" class="nav-link" @click="closeMobileMenu">
            <div class="nav-bilingual">
              <span class="nav-main">{{ item.label }}</span>
            </div>
            <svg
              v-if="item.dropdown.length"
              class="dropdown-icon"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </RouterLink>

          <div
            v-if="item.dropdown.length"
            class="dropdown-menu"
            v-show="activeDropdown === item.id"
            @mouseenter="showDropdown(item.id)"
            @mouseleave="hideDropdown"
          >
            <div class="dropdown-content">
              <RouterLink
                v-for="dropdownItem in item.dropdown"
                :key="dropdownItem.key"
                class="dropdown-item"
                :to="dropdownItem.to"
                @click="closeMobileMenu"
              >
                <svg
                  class="dropdown-item-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 8H9"
                    stroke="currentColor"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div class="dropdown-item-content">
                  <span class="dropdown-item-title">{{ dropdownItem.title }}</span>
                  <span class="dropdown-item-desc">{{ dropdownItem.description }}</span>
                </div>
              </RouterLink>
            </div>
          </div>
        </li>
      </ul>

      <div class="nav-actions">
        <LanguageSwitcher />
        <button
          class="mobile-menu-btn"
          @click="toggleMobileMenu"
          :class="{ 'mobile-menu-btn-active': isMobileMenuOpen }"
          type="button"
          aria-label="Toggle navigation"
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
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue'

const navDefinition = [
  {
    id: 'home',
    route: '/',
    dropdown: [
      { key: 'market', route: '/', hash: '#market-opportunity' },
      { key: 'products', route: '/', hash: '#products-overview' },
      { key: 'technology', route: '/', hash: '#tech-advantages' },
      { key: 'team', route: '/', hash: '#team-strength' },
    ],
  },
  {
    id: 'products',
    route: '/products',
    dropdown: [
      { key: 'comparison', route: '/products', hash: '#comparison-matrix' },
      { key: 'livingkb', route: '/products', hash: '#livingkb-intro' },
      { key: 'syndata', route: '/products', hash: '#syndata-intro' },
      { key: 'synergy', route: '/products', hash: '#synergy-value' },
      { key: 'cases', route: '/products', hash: '#success-cases' },
    ],
  },
  {
    id: 'technology',
    route: '/technology',
    dropdown: [
      { key: 'process', route: '/technology', hash: '#product-process' },
      { key: 'advantages', route: '/technology', hash: '#tech-advantages' },
      { key: 'performance', route: '/technology', hash: '#performance-comparison' },
      { key: 'faq', route: '/technology', hash: '#faq' },
    ],
  },
  {
    id: 'cases',
    route: '/cases',
    dropdown: [
      { key: 'coverage', route: '/cases', hash: '#industry-coverage' },
      { key: 'detail', route: '/cases', hash: '#detailed-cases' },
      { key: 'benchmark', route: '/cases', hash: '#benchmark-comparison' },
    ],
  },
  {
    id: 'company',
    route: '/company',
    dropdown: [
      { key: 'about', route: '/company', hash: '#about-dataarc' },
      { key: 'team', route: '/company', hash: '#core-team' },
      { key: 'funding', route: '/company', hash: '#funding-status' },
      { key: 'history', route: '/company', hash: '#development-history' },
    ],
  },
]

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeDropdown = ref(null)
let hideTimer = null

const { t, tm } = useI18n()

const navItems = computed(() =>
  navDefinition.map((item) => {
    const dropdownMessages = tm(`header.dropdowns.${item.id}`) || {}
    const dropdown = (item.dropdown ?? []).map((entry) => {
      const message = dropdownMessages?.[entry.key] ?? {}
      const targetRoute = entry.route ?? item.route
      const to =
        entry.to ??
        (entry.hash
          ? { path: targetRoute, hash: entry.hash }
          : { path: targetRoute })
      return {
        ...entry,
        title: message.title ?? '',
        description: message.description ?? '',
        to,
      }
    })
    return {
      ...item,
      label: t(`nav.${item.id}.label`),
      dropdown,
    }
  })
)

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
  if (hideTimer) {
    clearTimeout(hideTimer)
  }
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
  background: rgba(74, 144, 180, 0.25);
  transform: translateY(0);
}

.nav-link:hover .nav-main {
  color: #4a90b4;
}

.nav-link:hover .nav-en {
  color: #4a90b4;
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
  color: #4a90b4;
  font-weight: 600;
}

.nav-link.router-link-active .nav-en {
  color: #4a90b4;
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
  background: rgba(74, 144, 180, 0.15);
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
  color: #4a90b4;
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
  color: #4a90b4;
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
