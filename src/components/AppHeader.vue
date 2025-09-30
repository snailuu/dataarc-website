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
        <li class="nav-close-item">
          <button
            type="button"
            class="nav-close-btn"
            @click="closeMobileMenu"
            aria-label="关闭导航"
          >
            <svg class="nav-close-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 4l8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              <path d="M12 4L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </button>
        </li>
        <li
          v-for="item in navItems"
          :key="item.id"
          class="nav-item dropdown-wrapper"
          @mouseenter="showDropdown(item.id)"
          @mouseleave="hideDropdown"
        >
          <div class="nav-item-header">
            <RouterLink :to="item.route" class="nav-link" @click="closeMobileMenu">
              <div class="nav-bilingual">
                <span class="nav-main">{{ item.label }}</span>
              </div>
              <svg
                v-if="item.dropdown.length && !isMobileView"
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
            <button
              v-if="item.dropdown.length"
              type="button"
              class="nav-sub-toggle"
              :class="{ 'nav-sub-toggle-open': activeDropdown === item.id }"
              @click.stop="toggleMobileDropdown(item.id)"
              :aria-expanded="activeDropdown === item.id"
              :aria-label="activeDropdown === item.id ? '收起子菜单' : '展开子菜单'"
            >
              <svg
                class="nav-sub-toggle-icon"
                width="14"
                height="14"
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
            </button>
          </div>

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
  <Teleport to="body">
    <div
      class="mobile-menu-overlay"
      :class="{ 'mobile-menu-overlay-visible': isMobileMenuOpen }"
      @click="closeMobileMenu"
    ></div>
  </Teleport>
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
const isMobileView = ref(false)
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

const updateViewport = () => {
  const wasMobile = isMobileView.value
  const next = window.innerWidth <= 768
  isMobileView.value = next

  if (wasMobile && !next) {
    isMobileMenuOpen.value = false
    activeDropdown.value = null
  }
}

const toggleMobileMenu = () => {
  const nextState = !isMobileMenuOpen.value
  isMobileMenuOpen.value = nextState

  if (!nextState) {
    activeDropdown.value = null
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  activeDropdown.value = null
}

const showDropdown = (dropdown) => {
  if (isMobileView.value) {
    return
  }
  if (hideTimer) {
    clearTimeout(hideTimer)
    hideTimer = null
  }
  activeDropdown.value = dropdown
}

const hideDropdown = () => {
  if (isMobileView.value) {
    return
  }
  if (hideTimer) {
    clearTimeout(hideTimer)
  }
  hideTimer = setTimeout(() => {
    activeDropdown.value = null
    hideTimer = null
  }, 200)
}

const toggleMobileDropdown = (dropdownId) => {
  if (!isMobileView.value) {
    return
  }
  activeDropdown.value = activeDropdown.value === dropdownId ? null : dropdownId
}

onMounted(() => {
  updateViewport()
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', updateViewport)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', updateViewport)
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
  padding:  0 12px;
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

/* .brand-link:hover .logo-image {
  filter: brightness(0.8);
  width: var(--logo-size) !important;
  height: var(--logo-size) !important;
} */

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

.nav-close-item {
  display: none;
}

.nav-item-header {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.nav-item-header .nav-link {
  flex: 1;
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
  background: rgba(0, 212, 255, 0.15);
  transform: translateY(0);
}

.nav-link:hover .nav-main {
  color: var(--primary-color);
}

.nav-link:hover .nav-en {
  color: var(--primary-color);
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
  color: var(--primary-color);
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
.mobile-menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 11, 31, 0.35);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--duration-normal) var(--ease-out);
  z-index: 999;
  display: none;
}

.mobile-menu-overlay-visible {
  opacity: 1;
  pointer-events: auto;
}

.nav-sub-toggle {
  display: none;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid transparent;
  background: transparent;
  border-radius: var(--radius-full);
  cursor: pointer;
  color: var(--text-tertiary);
  transition: all var(--duration-normal) var(--ease-out);
}

.nav-sub-toggle:hover {
  color: var(--primary-color);
  background: rgba(74, 144, 180, 0.12);
  border-color: rgba(74, 144, 180, 0.18);
}

.nav-sub-toggle-open {
  color: var(--primary-color);
}

.nav-sub-toggle:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

.nav-sub-toggle-icon {
  transition: transform var(--duration-normal) var(--ease-out);
}

.nav-sub-toggle-open .nav-sub-toggle-icon {
  transform: rotate(180deg);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.nav-close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-full);
  border: 1px solid transparent;
  background: transparent;
  color: var(--text-tertiary);
  transition: all var(--duration-normal) var(--ease-out);
}

.nav-close-btn:hover {
  color: var(--primary-color);
  background: rgba(74, 144, 180, 0.12);
  border-color: rgba(74, 144, 180, 0.18);
}

.nav-close-btn:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

.nav-close-icon {
  width: 16px;
  height: 16px;
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
    top: 0;
    right: 0;
    bottom: 0;
    left: auto;
    width: min(320px, 85%);
    max-width: 360px;
    background: var(--bg-primary);
    border-left: 1px solid var(--neutral-200);
    box-shadow: -12px 0 32px rgba(15, 23, 42, 0.22);
    flex-direction: column;
    padding: 72px var(--space-6) var(--space-8);
    gap: var(--space-1);
    transform: translateX(105%);
    opacity: 0;
    visibility: hidden;
    transition: all var(--duration-normal) var(--ease-out);
    overflow-y: auto;
    z-index: 1001;
    min-height: 100vh;
  }
  
  .nav-links-open {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }
  
  .nav-close-item {
    display: block;
    position: sticky;
    top: 16px;
    align-self: flex-end;
    margin-bottom: var(--space-4);
    margin-right: var(--space-2);
    z-index: 1;
  }

  .mobile-menu-overlay {
    display: block;
  }

  .nav-item,
  .nav-item-header {
    width: 100%;
  }
  
  .nav-link {
    width: 100%;
    justify-content: flex-start;
    padding: var(--space-3) var(--space-2);
    border-radius: 0;
    margin: 0;
  }
  
  .nav-sub-toggle {
    display: flex;
  }
  
  .nav-link .nav-bilingual,
  .nav-action-link .nav-bilingual,
  .theme-toggle .nav-bilingual {
    flex-direction: row !important;
    align-items: center !important;
  }
  
  .dropdown-icon {
    display: none;
  }
  
  .dropdown-menu {
    position: static;
    transform: none;
    margin-top: var(--space-2);
    width: 100%;
    box-shadow: none;
    border: 1px solid var(--neutral-200);
    border-radius: var(--radius-lg);
    background: rgba(248, 250, 252, 0.6);
  }
  
  .mobile-menu-btn {
    display: flex;
  }
  
  .mobile-menu-overlay {
    display: block;
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
    top: 0;
    padding: 20px var(--space-4) var(--space-6);
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
    color: var(--primary-color);
  }
  
  .menu-line {
    background: rgba(255, 255, 255, 0.9);
  }
}
</style>
