<template>
  <div class="home">
    <AppHeader />
    
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background">
        <div class="hero-gradient"></div>
        <div class="hero-pattern"></div>
      </div>
      <div class="hero-content-wrapper">
      <div class="container">
                      <div class="hero-text">
              <div class="badge-bilingual" v-if="heroContent">
                <span class="badge-gray">{{ heroContent.badgeLines?.[0] }}</span>
                <span class="badge-divider">|</span>
                <span class="badge-gray">{{ heroContent.badgeLines?.[1] }}</span>
              </div>
                          <div class="title-container title-with-orbs orbs-hero">
              <div class="title-hierarchy">
                <h1 class="title-level-1" v-if="heroContent">
                  <span class="title-main">{{ heroContent.titles?.[0] }}</span>
                </h1>
                <h1 class="title-level-1 hero-main-title" v-if="heroContent">
                  <span class="title-main">{{ heroContent.titles?.[1] }}</span>
                </h1>
                </div>
                
                <!-- Floating Orbs -->
                <div class="floating-orbs" @mouseenter="handleMouseMove" @mouseleave="handleMouseLeave">
                  <div 
                    v-for="orb in orbSections.hero || []"
                    :key="orb.id"
                    class="orb"
                    :style="getOrbStyle(orb)"
                  ></div>
                </div>
              </div>
                          <div class="content-bilingual" v-if="heroContent">
                <p class="content-main">{{ heroContent.descriptions?.[0] }}</p>
                <p class="content-en">{{ heroContent.descriptions?.[1] }}</p>
              </div>
              <div class="hero-actions" v-if="heroContent">
                <a href="#" class="btn btn-primary btn-lg btn-capsule">
                  <span class="btn-text-main">{{ heroContent.buttons?.primary }}</span>
                </a>
                <a href="#contact" class="btn btn-secondary btn-lg btn-capsule btn-white">
                  <span class="btn-text-main">{{ heroContent.buttons?.secondary }}</span>
                </a>
              </div>
              </div>
            </div>
          <div class="hero-visual">
            <div class="visual-container">
              <!-- <img src="/images/icons/首页面-首屏-图.png" alt="数据智能化3D插图" class="hero-image"> -->
              <KnowledgeGraphAnimation />
              <div class="visual-glow"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Market Opportunity Section -->
          <section id="market-opportunity" class="market-opportunity">
      <div class="container">
        <div class="section-header">
          <div class="section-title-group title-with-orbs orbs-market">
            <h2 class="section-title title-stacked" v-if="marketContent">
              <span class="title-main">{{ marketContent.title }}</span>
            </h2>
            <div class="floating-orbs" @mouseenter="handleMouseMove" @mouseleave="handleMouseLeave">
              <div 
                v-for="orb in orbSections.market || []"
                :key="orb.id"
                class="orb"
                :style="getOrbStyle(orb)"
              ></div>
            </div>
          </div>
          <div class="content-bilingual" v-if="marketContent">
            <p class="content-main">{{ marketContent.subtitle }}</p>
          </div>
        </div>
        
        <div class="opportunity-grid">
          <div
            v-for="card in marketCards"
            :key="card.key"
            class="opportunity-card light-card"
          >
            <div class="opportunity-icon">
              <div class="icon-wrapper market-icon-wrapper">
                <img :src="card.icon" :alt="card.title" class="icon-img market-icon">
                <div class="icon-glow market-glow"></div>
              </div>
            </div>
            <div class="title-stacked">
              <h3 class="title-main">{{ card.title }}</h3>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ card.description }}</p>
            </div>
            <div class="highlight-stat">
              <span class="stat-number">{{ card.statValue }}</span>
              <div class="stat-label-bilingual">
                <span class="stat-main">{{ card.statLabel }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section id="products-overview" class="products">
      <div class="container">
        <div class="section-header">
          <div class="section-title-group title-with-orbs orbs-products">
            <h2 class="section-title title-stacked" v-if="productsContent">
              <span class="title-main">{{ productsContent.title }}</span>
            </h2>
            <div class="floating-orbs" @mouseenter="handleMouseMove" @mouseleave="handleMouseLeave">
              <div
                v-for="orb in orbSections.products || []"
                :key="orb.id"
                class="orb"
                :style="getOrbStyle(orb)"
              ></div>
            </div>
          </div>
          <div class="content-bilingual" v-if="productsContent">
            <p class="content-main">{{ productsContent.subtitle }}</p>
          </div>
        </div>

        <div class="products-grid" v-if="productsContent?.cards">
          <div
            v-for="card in productsContent.cards"
            :key="card.title"
            class="product-card glass-card"
          >
            <div class="product-badge" v-if="card.badge">
              <span class="badge-text">{{ card.badge }}</span>
            </div>
            <div class="product-header">
              <div class="product-visual">
                <img :src="card.icon" :alt="card.iconAlt" class="product-icon">
                <div class="icon-glow"></div>
              </div>
              <div class="product-content">
                <h3 class="title-level-3">{{ card.title }}</h3>
                <div class="content-bilingual">
                  <p class="content-main">{{ card.description }}</p>
                </div>
              </div>
            </div>

            <div class="product-features" v-if="card.features?.length">
              <ul class="list-bilingual">
                <li
                  v-for="feature in card.features"
                  :key="feature"
                  class="list-item-bilingual"
                >
                  <span class="list-main">{{ feature }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Advantages -->
    <section id="tech-advantages" class="tech-advantages">
      <div class="container" v-if="technologyContent">
        <div class="section-title-group text-center title-with-orbs orbs-tech">
          <h2 class="section-title title-stacked">
            <span class="title-main">{{ technologyContent.title }}</span>
          </h2>
          <div class="floating-orbs" @mouseenter="handleMouseMove" @mouseleave="handleMouseLeave">
            <div
              v-for="orb in orbSections.tech || []"
              :key="orb.id"
              class="orb"
              :style="getOrbStyle(orb)"
            ></div>
          </div>
        </div>
        <div class="content-bilingual">
          <p class="content-main">{{ technologyContent.description }}</p>
        </div>

        <div class="tech-architecture">
          <div class="core-foundation" v-if="technologyContent.foundation">
            <div class="foundation-card">
              <div class="foundation-title title-stacked-new">
                <h3 class="title-main">{{ technologyContent.foundation.title }}</h3>
              </div>
              <div class="foundation-description">
                <div class="foundation-desc-main">
                  {{ technologyContent.foundation.description }}
                </div>
              </div>
            </div>
          </div>

          <div class="connection-indicators" v-if="technologyContent.connectors">
            <div class="connection-indicator left">
              <div class="connection-arrow">↓</div>
              <div class="connection-label">
                <div class="connection-main">{{ technologyContent.connectors.left }}</div>
              </div>
            </div>
            <div class="connection-indicator right">
              <div class="connection-arrow">↓</div>
              <div class="connection-label">
                <div class="connection-main">{{ technologyContent.connectors.right }}</div>
              </div>
            </div>
          </div>

          <div class="tech-branches">
            <div class="branch-section" v-for="(branch, index) in ['left', 'right']" :key="branch">
              <div
                v-for="item in technologyContent.branches?.[branch] || []"
                :key="item.title"
                class="tech-item"
              >
                <div class="tech-title">
                  <div class="icon-wrapper">
                    <img :src="item.icon" :alt="item.iconAlt" class="tech-icon-img">
                    <div class="icon-glow"></div>
                  </div>
                  <div class="title-stacked-new">
                    <span class="title-main">{{ item.title }}</span>
                  </div>
                </div>
                <div class="tech-content">
                  <div class="tech-desc-main">{{ item.description }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Context Graph -->
    <section class="context-graph" v-if="contextContent">
      <div class="container">
        <div class="title-with-orbs orbs-context">
          <h2 class="section-title title-stacked text-center">
            <span class="title-main">{{ contextContent.title }}</span>
          </h2>
          <div class="floating-orbs" @mouseenter="handleMouseMove" @mouseleave="handleMouseLeave">
            <div
              v-for="orb in orbSections.context || []"
              :key="orb.id"
              class="orb"
              :style="getOrbStyle(orb)"
            ></div>
          </div>
        </div>
        <div class="content-bilingual">
          <p class="content-main">{{ contextContent.description }}</p>
        </div>
        <div class="graph-visual-placeholder">
          {{ contextContent.placeholder }}
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="news" v-if="newsContent">
      <div class="container">
        <div class="title-with-orbs orbs-news">
          <h2 class="section-title title-stacked">
            <span class="title-main">{{ newsContent.title }}</span>
          </h2>
          <div class="floating-orbs" @mouseenter="handleMouseMove" @mouseleave="handleMouseLeave">
            <div
              v-for="orb in orbSections.news || []"
              :key="orb.id"
              class="orb"
              :style="getOrbStyle(orb)"
            ></div>
          </div>
        </div>
        <div class="content-bilingual">
          <p class="content-main">{{ newsContent.subtitle }}</p>
        </div>

        <div class="news-grid">
          <div
            v-for="item in newsContent.items"
            :key="item.title"
            class="news-card"
          >
            <div class="news-image">
              <div class="news-placeholder">{{ item.placeholder }}</div>
            </div>
            <div class="news-content">
              <h4 class="title-level-4">{{ item.title }}</h4>
              <p class="news-date text-sm font-normal text-quaternary">{{ item.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Strength Section -->
    <section id="team-strength" class="team-strength" v-if="teamContent">
      <div class="container">
        <div class="section-header">
          <div class="section-title-group title-with-orbs orbs-team">
            <h2 class="section-title title-stacked">
              <span class="title-main">{{ teamContent.title }}</span>
            </h2>
            <div class="floating-orbs" @mouseenter="handleMouseMove" @mouseleave="handleMouseLeave">
              <div
                v-for="orb in orbSections.team || []"
                :key="orb.id"
                class="orb"
                :style="getOrbStyle(orb)"
              ></div>
            </div>
          </div>
          <p class="section-subtitle text-lg font-light text-tertiary leading-relaxed">
            {{ teamContent.subtitle }}
          </p>
        </div>

        <div class="team-grid">
          <div
            v-for="card in teamContent.cards"
            :key="card.label"
            class="team-card glass-card"
          >
            <div class="team-icon">
              <div class="icon-wrapper">
                <img :src="card.icon" :alt="card.iconAlt" class="icon-img">
                <div class="icon-glow"></div>
              </div>
            </div>
            <div class="team-stat">
              <span class="stat-number">{{ card.stat }}</span>
              <span class="stat-label">{{ card.label }}</span>
            </div>
            <p class="text-secondary">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import KnowledgeGraphAnimation from '@/components/KnowledgeGraphAnimation.vue'
import { useFloatingOrbs } from '@/composables/useFloatingOrbs.js'

const { tm } = useI18n()

// 初始化浮动小球
const { orbSections, generateOrbs, getOrbStyle } = useFloatingOrbs()

const heroContent = computed(() => tm('home.hero'))

const marketCardsConfig = [
  {
    key: 'scarcity',
    icon: '/images/icons/数据稀缺趋势图标.png',
  },
  {
    key: 'growth',
    icon: '/images/icons/市场增长图标.png',
  },
  {
    key: 'consensus',
    icon: '/images/icons/行业共识图标.png',
  },
]

const marketContent = computed(() => tm('home.market'))

const marketCards = computed(() =>
  marketCardsConfig.map((card) => {
    const content = marketContent.value?.cards?.[card.key] ?? {}
    return {
      ...card,
      title: content.title ?? '',
      description: content.description ?? '',
      statLabel: content.statLabel ?? '',
      statValue: content.statValue ?? '',
    }
  })
)

const productsContent = computed(() => tm('home.products'))
const technologyContent = computed(() => tm('home.technology'))
const contextContent = computed(() => tm('home.context'))
const newsContent = computed(() => tm('home.news'))
const teamContent = computed(() => tm('home.team'))

// 定义标题区域ID
const sectionIds = ['hero', 'market', 'products', 'tech', 'context', 'team', 'news']

onMounted(() => {
  // 页面加载后生成随机小球
  generateOrbs(sectionIds)
})

// 鼠标互动效果
const handleMouseMove = (event) => {
  console.log('鼠标进入标题区域！')
  const container = event.currentTarget
  const orbs = container.querySelectorAll('.orb')
  
  console.log(`找到 ${orbs.length} 个小球`)
  
  orbs.forEach((orb, index) => {
    // 随机抖动偏移
    const randomX = (Math.random() - 0.5) * 12 // -6px 到 6px
    const randomY = (Math.random() - 0.5) * 12 // -6px 到 6px
    
    // 应用抖动效果
    orb.style.transform = `translate(${randomX}px, ${randomY}px)`
    orb.style.animationPlayState = 'paused'
  })
}

const handleMouseLeave = (event) => {
  console.log('鼠标离开标题区域！')
  const container = event.currentTarget
  const orbs = container.querySelectorAll('.orb')
  
  orbs.forEach(orb => {
    // 恢复正常状态
    orb.style.transform = ''
    orb.style.animationPlayState = 'running'
  })
}
</script>

<style scoped>
/* ===== Hero Section ===== */
.hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  overflow-y: visible;
  padding: var(--space-12) 0;
}

@media (max-width: 768px) {
  .hero {
    min-height: 70vh;
    padding: var(--space-8) 0;
  }
  
  .hero-content-wrapper {
    grid-template-columns: 1fr;
    gap: var(--space-6);
    text-align: center;
  }
  
  .main-title {
    font-size: 3rem;
  }
  
  .sub-title {
    font-size: 2.5rem;
  }
  
  .highlight-title {
    font-size: 3rem;
  }
  
  .visual-container {
    width: 100%;
    height: 400px;
    margin-right: 0;
    margin-top: var(--space-6);
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 2.5rem;
  }
  
  .sub-title {
    font-size: 2rem;
  }
  
  .highlight-title {
    font-size: 2.5rem;
  }
  
  .main-desc {
    font-size: 1rem;
  }
}

/* ===== Market Opportunity Section ===== */
.market-opportunity {
  padding: var(--space-32) 0;
  background: var(--bg-primary);
  overflow: visible;
}

.opportunity-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-8);
  overflow: visible;
}

.opportunity-card {
  text-align: center;
  padding: var(--space-8);
  overflow: visible;
}

.light-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: var(--space-4) !important;
  transition: all var(--duration-normal) var(--ease-out);
  overflow: visible !important;
}

.light-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.opportunity-icon {
  margin-bottom: var(--space-6);
  padding: 30px;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
}

.highlight-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
  margin-top: var(--space-4);
}

.stat-number {
  font-size: var(--font-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--primary-color);
  line-height: 1;
}

.stat-label {
  font-size: var(--font-sm);
  color: var(--text-tertiary);
  font-weight: var(--font-weight-medium);
}

/* ===== Team Strength Section ===== */
.team-strength {
  padding: var(--space-32) 0;
  background: var(--bg-secondary);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
}

.team-card {
  text-align: center;
  padding: var(--space-6);
}

.team-icon {
  margin-bottom: var(--space-4);
}

.team-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
  margin-bottom: var(--space-4);
}

/* ===== Floating Orbs ===== */
.title-with-orbs {
  position: relative;
}

.floating-orbs {
  position: absolute;
  top: -30px;
  left: -30px;
  right: -30px;
  bottom: -30px;
  pointer-events: auto;
  z-index: 0;
}

.orb {
  position: absolute;
  border-radius: 50%;
  animation: floatOrb 6s ease-in-out infinite;
  transition: transform 0.3s ease-out;
}

/* 动态小球样式由 JavaScript 生成，无需硬编码 */

/* 所有小球样式由 JavaScript 动态生成 */

@keyframes floatOrb {
  0%, 100% { 
    transform: translateY(0px) translateX(0px); 
  }
  25% { 
    transform: translateY(-8px) translateX(3px); 
  }
  50% { 
    transform: translateY(-12px) translateX(-2px); 
  }
  75% { 
    transform: translateY(-6px) translateX(4px); 
  }
}

/* 鼠标跟随效果由 JavaScript 处理 */

@media (max-width: 768px) {
  .opportunity-grid,
  .team-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
  
  .stat-number {
    font-size: var(--font-2xl);
  }
  
  /* 移动端小球样式调整 */
  .orb {
    width: 4px !important;
    height: 4px !important;
    opacity: 0.25 !important;
  }
  
  .floating-orbs {
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
  }
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.hero-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
}

.hero-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 2px 2px, var(--primary-color) 1px, transparent 0);
  opacity: 0.05;
  background-size: 40px 40px;
  animation: float 30s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.hero-content-wrapper {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: var(--space-12);
  align-items: center;
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--space-4);
}

.hero-text {
  /* 移除固定的白色文字，使用主题变量 */
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-2) var(--space-4);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-full);
  backdrop-filter: var(--glass-backdrop);
  -webkit-backdrop-filter: var(--glass-backdrop);
  margin-bottom: var(--space-6);
  animation: fadeInUp 0.6s var(--ease-out);
}

.badge-text {
  font-size: var(--font-sm);
  font-weight: 500;
  color: var(--text-white-secondary);
}

.hero-title {
  margin-bottom: var(--space-6);
  animation: fadeInUp 0.8s var(--ease-out);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  position: relative;
  z-index: 2;
}

.title-line {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  margin-bottom: var(--space-2);
  }

.main-title {
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 1.1;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  }

.sub-title {
  font-size: 3.5rem;
  font-weight: 200;
  line-height: 1.2;
  color: var(--text-secondary);
  letter-spacing: -0.015em;
  }

.highlight-title {
  font-size: 4.5rem;
  font-weight: 400;
  line-height: 1.1;
  color: var(--primary-color);
  letter-spacing: -0.02em;
}

.title-en {
  font-size: 1rem;
  font-weight: 200;
  color: var(--text-quaternary);
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 0.25rem;
}

.hero-description {
    margin-bottom: var(--space-8);
  max-width: 580px;
  animation: fadeInUp 1s var(--ease-out);
  }

.main-desc {
  font-size: 1.125rem;
    line-height: 1.6;
  color: var(--text-secondary);
  font-weight: 400;
  }

  .badge-divider {
    margin: 0 0.75rem;
    opacity: 0.5;
    color: var(--text-quaternary);
}

.hero-actions {
  display: flex;
  gap: var(--space-4);
  animation: fadeInUp 1.2s var(--ease-out);
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInScale 1s var(--ease-out);
  position: relative;
}

.visual-container {
  position: relative;
  width: 130%;
  height: 480px;
  /* 让右侧Graph延伸出container边界到屏幕边缘 */
  margin-right: calc(-30% - var(--space-4));
  overflow: visible;
}

.hero-image {
  width: 100%;
  height: auto;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-strong);
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.2));
}

.visual-glow {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
  border-radius: var(--radius-xl);
  z-index: -1;
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
}

/* ===== Products Section ===== */
.products {
  padding: var(--space-32) 0;
  background: var(--bg-secondary);
  position: relative;
}

.products::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
}

.section-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
  gap: var(--space-8);
}

.product-card {
  position: relative;
  transition: all var(--duration-normal) var(--ease-out);
}

.product-card:hover {
  transform: translateY(-8px);
}

.section-title-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
}

.section-title-en {
  color: var(--text-quaternary);
  margin-top: 0.375rem;
}

.product-badge-dual {
  position: absolute;
  top: -12px;
  left: var(--space-6);
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.badge-zh {
  background: var(--primary-gradient);
  color: var(--text-white);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  font-size: var(--font-xs);
  font-weight: 600;
  box-shadow: var(--shadow-medium);
}

.badge-en {
  background: var(--glass-bg);
  color: var(--text-quaternary);
  padding: 2px var(--space-3);
  border-radius: var(--radius-full);
  font-size: 0.7rem;
  font-weight: 300;
  text-align: center;
  letter-spacing: 0.05em;
  opacity: 0.8;
}

.product-header {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.product-content {
  flex: 1;
}

.product-desc-dual {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.desc-zh {
  line-height: 1.5;
}

.desc-en {
  line-height: 1.6;
  font-style: italic;
  letter-spacing: 0.025em;
}

.product-visual {
  position: relative;
  flex-shrink: 0;
}

.product-icon {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: var(--radius-lg);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.icon-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: radial-gradient(circle, var(--primary-color) 0%, transparent 70%);
  opacity: 0.2;
  border-radius: var(--radius-lg);
  z-index: -1;
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from { opacity: 0.5; transform: scale(1); }
  to { opacity: 1; transform: scale(1.1); }
}

.product-title h3 {
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.product-title p {
  color: var(--text-secondary);
  font-size: var(--font-sm);
  line-height: var(--leading-normal);
}

.product-features {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
}

.feature-check {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  background: var(--primary-color);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
}

.check-icon {
  width: 12px;
  height: 12px;
  fill: var(--text-white);
}

.feature-item span {
  color: var(--text-secondary);
  font-size: var(--font-sm);
  line-height: var(--leading-normal);
}

/* ===== Core Module ===== */
.core-module {
  margin-top: var(--space-12);
  text-align: center;
  padding: var(--space-8);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  backdrop-filter: var(--glass-backdrop);
  -webkit-backdrop-filter: var(--glass-backdrop);
}

.core-module p {
  font-size: var(--font-lg);
  font-weight: 600;
  color: var(--primary-color);
}

/* ===== Tech Advantages Section ===== */
.tech-advantages {
  padding: var(--space-32) 0;
  background: var(--bg-primary);
}

.tech-advantages h2 {
  text-align: center;
  margin-bottom: var(--space-4);
}

.tech-advantages .section-subtitle {
  text-align: center;
  margin-bottom: var(--space-16);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
}

.tech-card {
  background: var(--bg-primary);
  border: 1px solid rgba(99, 102, 241, 0.1);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  text-align: center;
  transition: all var(--duration-normal) var(--ease-out);
}

.tech-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-medium);
  border-color: var(--primary-color);
}

.tech-icon {
  width: 60px;
  height: 60px;
  background: var(--primary-color);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-4);
  font-size: var(--font-2xl);
}

.tech-card h3 {
  font-size: var(--font-lg);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.tech-card p {
  color: var(--text-secondary);
  line-height: var(--leading-normal);
}

/* ===== Context Graph Section ===== */
.context-graph {
  padding: var(--space-32) 0;
  background: var(--bg-secondary);
}

.context-graph h2 {
  text-align: center;
  margin-bottom: var(--space-4);
}

.context-graph .section-subtitle {
  text-align: center;
  margin-bottom: var(--space-16);
}

.graph-visual {
  text-align: center;
  padding: var(--space-16);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  backdrop-filter: var(--glass-backdrop);
  -webkit-backdrop-filter: var(--glass-backdrop);
  margin-bottom: var(--space-12);
}

.graph-placeholder {
  color: var(--text-secondary);
  font-size: var(--font-lg);
  font-style: italic;
}

.graph-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-6);
}

.metric-card {
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  text-align: center;
  box-shadow: var(--shadow-soft);
  transition: all var(--duration-normal) var(--ease-out);
}

.metric-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-medium);
}

.metric-number {
  font-size: var(--font-3xl);
  font-weight: 800;
  color: var(--primary-color);
  margin-bottom: var(--space-2);
}

.metric-label {
  color: var(--text-secondary);
  font-size: var(--font-sm);
  font-weight: 500;
}

/* ===== News Section ===== */
.news {
  padding: var(--space-32) 0;
  background: var(--bg-primary);
}

.news h2 {
  text-align: center;
  margin-bottom: var(--space-16);
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
}

.news-card {
  background: var(--bg-primary);
  border: 1px solid var(--neutral-200);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--duration-normal) var(--ease-out);
}

.news-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-medium);
}

.news-image {
  height: 200px;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-tertiary);
}

.news-content {
  padding: var(--space-6);
}

.news-title {
  font-size: var(--font-lg);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-2);
  line-height: var(--leading-tight);
}

.news-date {
  color: var(--text-tertiary);
  font-size: var(--font-sm);
}

/* ===== Responsive Design ===== */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: var(--space-12);
    text-align: center;
  }
  
  .hero-title {
    font-size: var(--font-5xl);
  }
  
  .products-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: auto;
    padding: var(--space-20) 0;
  }
  
  .hero-title {
    font-size: var(--font-4xl);
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .products {
    padding: var(--space-20) 0;
  }
  
  .tech-advantages,
  .context-graph,
  .news {
    padding: var(--space-20) 0;
  }
  
  .product-header {
    flex-direction: column;
    text-align: center;
  }
  
  .product-icon {
    width: 60px;
    height: 60px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: var(--font-3xl);
  }
  
  .hero-description {
    font-size: var(--font-base);
  }
  
  .products-grid {
    gap: var(--space-6);
  }
  
  .product-card {
    padding: var(--space-6);
  }
  
  .tech-grid,
  .graph-metrics,
  .news-grid {
    grid-template-columns: 1fr;
  }
}

/* ===== Animation Enhancements ===== */
.product-card {
  animation: fadeInUp 0.6s var(--ease-out);
}

.product-card:nth-child(2) {
  animation-delay: 0.2s;
}

.tech-card {
  animation: fadeInUp 0.6s var(--ease-out);
}

.tech-card:nth-child(1) { animation-delay: 0.1s; }
.tech-card:nth-child(2) { animation-delay: 0.2s; }
.tech-card:nth-child(3) { animation-delay: 0.3s; }
.tech-card:nth-child(4) { animation-delay: 0.4s; }
.tech-card:nth-child(5) { animation-delay: 0.5s; }
.tech-card:nth-child(6) { animation-delay: 0.6s; }

.metric-card {
  animation: fadeInScale 0.6s var(--ease-out);
}

.metric-card:nth-child(1) { animation-delay: 0.1s; }
.metric-card:nth-child(2) { animation-delay: 0.2s; }
.metric-card:nth-child(3) { animation-delay: 0.3s; }
.metric-card:nth-child(4) { animation-delay: 0.4s; }

.news-card {
  animation: fadeInUp 0.6s var(--ease-out);
}

.news-card:nth-child(1) { animation-delay: 0.1s; }
.news-card:nth-child(2) { animation-delay: 0.2s; }
.news-card:nth-child(3) { animation-delay: 0.3s; }

.tech-title-dual {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;
  margin-bottom: 0.75rem;
}

.tech-en {
  color: var(--text-quaternary);
  font-style: italic;
  letter-spacing: 0.05em;
  text-transform: capitalize;
}

/* ===== Tech Architecture - 逻辑架构设计 ===== */
.tech-architecture {
  position: relative;
  margin-top: var(--space-16);
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
}

/* 核心基础：语境图谱 */
.core-foundation {
  display: flex;
  justify-content: center;
  margin-bottom: var(--space-8);
}

.foundation-card {
  background: linear-gradient(135deg, rgba(135, 173, 255, 0.15) 0%, rgba(135, 173, 255, 0.05) 100%);
  border: 2px solid rgba(135, 173, 255, 0.3);
  border-radius: 20px;
  padding: var(--space-8) var(--space-10);
  text-align: center;
  max-width: 600px;
  position: relative;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.foundation-title {
  font-size: var(--font-3xl);
  font-weight: var(--font-weight-extralight);
  color: var(--text-primary);
  letter-spacing: -0.02em;
  margin-bottom: var(--space-2);
}

.foundation-subtitle {
  font-size: var(--font-lg);
  color: var(--primary-color);
  font-weight: 500;
  margin-bottom: var(--space-6);
  opacity: 0.9;
}

.foundation-description {
  font-size: var(--font-sm);
  color: rgba(255, 255, 255, 0.8);
  line-height: var(--leading-relaxed);
  font-weight: 300;
}

/* 技术分支容器 */
.tech-branches {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  position: relative;
}

/* 分支区域 */
.branch-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.branch-header {
  text-align: center;
  margin-bottom: var(--space-6);
}

.branch-title {
  font-size: var(--font-2xl);
  font-weight: var(--font-weight-extralight);
  color: var(--text-primary);
  letter-spacing: -0.02em;
  margin-bottom: var(--space-2);
}

.branch-subtitle {
  font-size: var(--font-sm);
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
}

/* 技术流程 */
.tech-flow {
  display: flex;
  align-items: center;
}

/* 并列流程 (搜索技术) */
.parallel-flow {
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
}

/* 递进流程 (合成数据技术) */
.sequential-flow {
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}

/* 技术项目 */
.tech-item {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: var(--space-6);
  text-align: center;
  transition: all 0.4s ease;
  flex: 1;
  min-width: 0;
}

.sequential-flow .tech-item {
  width: 280px;
  flex: none;
}

.tech-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(135, 173, 255, 0.3);
  transform: translateY(-4px);
}

.tech-label {
  font-size: var(--font-sm);
  font-weight: 700;
  color: var(--primary-color);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: var(--space-2);
}

.tech-name {
  font-size: var(--font-lg);
  font-weight: var(--font-weight-extralight);
  color: var(--text-primary);
  letter-spacing: -0.01em;
  margin-bottom: var(--space-3);
}

.tech-desc {
  font-size: var(--font-xs);
  color: rgba(255, 255, 255, 0.7);
  line-height: var(--leading-relaxed);
  font-weight: 300;
}

/* 流程连接符 */
.flow-connector {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-xl);
  font-weight: 300;
  color: rgba(255, 255, 255, 0.4);
  margin: var(--space-2);
}

.flow-connector.parallel {
  width: 30px;
  height: 30px;
}

.flow-connector.sequential {
  width: 40px;
  height: 40px;
  font-size: var(--font-2xl);
}

/* 架构连接线 */
.architecture-connections {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .tech-branches {
    gap: var(--space-12);
  }
  
  .parallel-flow {
    flex-direction: column;
    gap: var(--space-4);
  }
  
  .flow-connector.parallel {
    transform: rotate(90deg);
  }
}

@media (max-width: 768px) {
  .tech-architecture {
    gap: var(--space-12);
  }
  
  .tech-branches {
    grid-template-columns: 1fr;
    gap: var(--space-16);
  }
  
  .foundation-card {
    padding: var(--space-6);
  }
  
  .foundation-title {
    font-size: var(--font-2xl);
  }
  
  .sequential-flow .tech-item {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .foundation-card {
    padding: var(--space-5);
  }
  
  .tech-item {
    padding: var(--space-4);
  }
  
  .branch-title {
    font-size: var(--font-xl);
  }
}
</style> 















 