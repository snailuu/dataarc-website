<template>
  <div class="technology-page">
    <AppHeader />

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background">
        <div class="hero-gradient"></div>
        <div class="hero-pattern"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title title-multilevel company-super-title">
            <span class="title-main company-main-title">{{ t('technology.hero.title') }}</span>
            <span class="title-highlight title-multilevel">
              <span class="title-main company-future-title">{{ t('technology.hero.subtitle') }}</span>
            </span>
            <span class="subtitle-en company-english-line">{{ t('technology.hero.englishLine') }}</span>
          </h1>
          <div class="hero-description content-bilingual">
            <p class="content-main">{{ t('technology.hero.description') }}</p>
            <p class="content-en">{{ t('technology.hero.descriptionEn') }}</p>
          </div>
          
          <!-- Tech Stats in Hero -->
          <div class="hero-stats">
            <div v-for="tech in techStatsItems" :key="tech.key" class="stat-item">
              <div class="stat-label-bilingual">
                <span class="stat-prefix">{{ tech.prefix }}</span>
                <span class="stat-suffix">{{ tech.suffix }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 第一屏：如何让你的企业 AI 更智能 -->
    <section class="fullscreen-section dark-bg">
      <div class="container">
        <!-- 标题 -->
        <div class="section-header">
          <div class="title-bilingual">
            <h2 class="title-main">{{ t('technology.process.title') }}</h2>
            <span class="title-en">{{ t('technology.process.titleEn') }}</span>
          </div>
          <div class="content-bilingual">
            <p class="content-main">{{ t('technology.process.description') }}</p>
          </div>
        </div>

        <!-- 产品流程步骤 -->
        <div class="process-steps">
          <div class="step-item">
            <div class="icon-wrapper">
              <img src="/images/icons/数据采集图标.png" alt="数据采集" class="icon-img">
              <div class="icon-glow"></div>
            </div>
            <div class="step-line"></div>
            <div class="step-content">
              <div class="title-bilingual">
                <h3 class="title-main">{{ t('technology.process.steps.userData.title') }}</h3>
              </div>
              <div class="content-bilingual">
                <p class="content-main">{{ t('technology.process.steps.userData.description') }}</p>
              </div>
            </div>
          </div>

          <div class="step-item">
            <div class="icon-wrapper">
              <img src="/images/icons/图谱构建图标.png" alt="图谱构建" class="icon-img">
              <div class="icon-glow"></div>
            </div>
            <div class="step-line"></div>
            <div class="step-content">
              <div class="title-bilingual">
                <h3 class="title-main">{{ t('technology.process.steps.contextGraph.title') }}</h3>
              </div>
              <div class="content-bilingual">
                <p class="content-main">{{ t('technology.process.steps.contextGraph.description') }}</p>
              </div>
            </div>
          </div>

          <div class="step-item">
            <div class="icon-wrapper">
              <img src="/images/icons/多能体平台图标.png" alt="多能体平台" class="icon-img">
              <div class="icon-glow"></div>
            </div>
            <div class="step-line"></div>
            <div class="step-content">
              <div class="title-bilingual">
                <h3 class="title-main">{{ t('technology.process.steps.multiAgent.title') }}</h3>
              </div>
              <div class="content-bilingual">
                <p class="content-main">{{ t('technology.process.steps.multiAgent.description') }}</p>
              </div>
            </div>
          </div>

          <div class="step-item">
            <div class="icon-wrapper">
              <img src="/images/icons/交互平台图标.png" alt="交互平台" class="icon-img">
              <div class="icon-glow"></div>
            </div>
            <div class="step-line"></div>
            <div class="step-content">
              <div class="title-bilingual">
                <h3 class="title-main">{{ t('technology.process.steps.interaction.title') }}</h3>
              </div>
              <div class="content-bilingual">
                <p class="content-main">{{ t('technology.process.steps.interaction.description') }}</p>
              </div>
            </div>
          </div>

          <div class="step-item">
            <div class="icon-wrapper">
              <img src="/images/icons/自适应化图标.png" alt="自适应化" class="icon-img">
              <div class="icon-glow"></div>
            </div>
            <div class="step-line"></div>
            <div class="step-content">
              <div class="title-bilingual">
                <h3 class="title-main">{{ t('technology.process.steps.graphAdaptation.title') }}</h3>
              </div>
              <div class="content-bilingual">
                <p class="content-main">{{ t('technology.process.steps.graphAdaptation.description') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 核心功能和产品特点 -->
        <div class="feature-cards">
          <div class="feature-card">
            <img src="/images/icons/核心技术页面-核心功能-icon.png" alt="核心功能" class="feature-icon">
            <div class="title-bilingual">
              <h3 class="title-main">{{ t('technology.features.core.title') }}</h3>
            </div>
            <ul class="list-bilingual">
              <li
                v-for="(item, index) in coreFeatureItems"
                :key="index"
                class="list-item-bilingual"
              >
                <span class="list-main">{{ item }}</span>
              </li>
            </ul>
          </div>

          <div class="feature-card">
            <img src="/images/icons/核心技术页面-产品特点-icon.png" alt="产品特点" class="feature-icon">
            <div class="title-bilingual">
              <h3 class="title-main">{{ t('technology.features.product.title') }}</h3>
            </div>
            <ul class="list-bilingual">
              <li
                v-for="(item, index) in productFeatureItems"
                :key="index"
                class="list-item-bilingual"
              >
                <span class="list-main">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 第二屏：核心技术 vs SOTA -->
    <section class="fullscreen-section pure-black-bg">
      <div class="container">
        <!-- 标题 -->
        <div class="section-header">
          <div class="title-bilingual">
            <h2 class="title-main">{{ t('technology.advantages.title') }}</h2>
          </div>
          <div class="content-bilingual">
            <p class="content-main">{{ t('technology.advantages.description') }}</p>
          </div>
        </div>

        <!-- 核心技术六个卡片 -->
        <div class="tech-grid">
          <div class="tech-item">
            <div class="icon-wrapper">
              <img src="/images/icons/更懂行图标.png" alt="更懂行" class="icon-img">
              <div class="icon-glow"></div>
            </div>
            <div class="title-bilingual">
              <h4 class="title-main">{{ t('technology.advantages.items.industry.title') }}</h4>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ t('technology.advantages.items.industry.description') }}</p>
            </div>
          </div>

          <div class="tech-item">
            <div class="icon-wrapper">
              <img src="/images/icons/更聪明图标.png" alt="更聪明" class="icon-img">
              <div class="icon-glow"></div>
            </div>
            <div class="title-bilingual">
              <h4 class="title-main">{{ t('technology.advantages.items.smart.title') }}</h4>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ t('technology.advantages.items.smart.description') }}</p>
            </div>
          </div>

          <div class="tech-item">
            <div class="icon-wrapper">
              <img src="/images/icons/更靠谱图标.png" alt="更靠谱" class="icon-img">
              <div class="icon-glow"></div>
            </div>
            <div class="title-bilingual">
              <h4 class="title-main">{{ t('technology.advantages.items.reliable.title') }}</h4>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ t('technology.advantages.items.reliable.description') }}</p>
            </div>
          </div>

          <div class="tech-item">
            <div class="icon-wrapper">
              <img src="/images/icons/更专业图标.png" alt="更专业" class="icon-img">
              <div class="icon-glow"></div>
            </div>
            <div class="title-bilingual">
              <h4 class="title-main">{{ t('technology.advantages.items.professional.title') }}</h4>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ t('technology.advantages.items.professional.description') }}</p>
            </div>
          </div>

          <div class="tech-item">
            <div class="icon-wrapper">
              <img src="/images/icons/更安全图标.png" alt="更安全" class="icon-img">
              <div class="icon-glow"></div>
            </div>
            <div class="title-bilingual">
              <h4 class="title-main">{{ t('technology.advantages.items.secure.title') }}</h4>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ t('technology.advantages.items.secure.description') }}</p>
            </div>
          </div>

          <div class="tech-item">
            <div class="icon-wrapper">
              <img src="/images/icons/更准确图标.png" alt="更准确" class="icon-img">
              <div class="icon-glow"></div>
            </div>
            <div class="title-bilingual">
              <h4 class="title-main">{{ t('technology.advantages.items.accurate.title') }}</h4>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ t('technology.advantages.items.accurate.description') }}</p>
            </div>
          </div>
        </div>

        <!-- 性能对比（原行业标杆对比）-->
        <div class="performance-comparison">
          <div class="section-header">
            <div class="title-bilingual">
              <h3 class="title-main">{{ t('technology.performance.title') }}</h3>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ t('technology.performance.description') }}</p>
            </div>
          </div>
          <div class="comparison-grid">
            <div class="comparison-card glass-border">
              <div class="comparison-header">
                <div class="title-bilingual">
                  <h3 class="title-main">{{ t('technology.performance.cards.graph.title') }}</h3>
                </div>
                <div class="icon-wrapper">
                  <img src="/images/icons/建图效率对比图标.png" alt="建图效率对比" class="icon-img">
                  <div class="icon-glow"></div>
                </div>
              </div>
              <div class="comparison-stats">
                <div class="stat-item">
                  <span class="stat-label">{{ t('technology.performance.cards.graph.stats.dataArc.label') }}</span>
                  <span class="stat-value highlight">{{ t('technology.performance.cards.graph.stats.dataArc.value') }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">{{ t('technology.performance.cards.graph.stats.benchmark.label') }}</span>
                  <span class="stat-value">{{ t('technology.performance.cards.graph.stats.benchmark.value') }}</span>
                </div>
              </div>
              <div class="improvement">
                <span class="improvement-text">{{ t('technology.performance.cards.graph.improvement.label') }}</span>
                <span class="improvement-value">{{ t('technology.performance.cards.graph.improvement.value') }}</span>
              </div>
            </div>

            <div class="comparison-card glass-border">
              <div class="comparison-header">
                <div class="title-bilingual">
                  <h3 class="title-main">{{ t('technology.performance.cards.reasoning.title') }}</h3>
                </div>
                <div class="icon-wrapper">
                  <img src="/images/icons/准确率对比图标.png" alt="准确率对比" class="icon-img">
                  <div class="icon-glow"></div>
                </div>
              </div>
              <div class="comparison-stats">
                <div class="stat-item">
                  <span class="stat-label">{{ t('technology.performance.cards.reasoning.stats.dataArc.label') }}</span>
                  <span class="stat-value highlight">{{ t('technology.performance.cards.reasoning.stats.dataArc.value') }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">{{ t('technology.performance.cards.reasoning.stats.benchmark.label') }}</span>
                  <span class="stat-value">{{ t('technology.performance.cards.reasoning.stats.benchmark.value') }}</span>
                </div>
              </div>
              <div class="improvement">
                <span class="improvement-text">{{ t('technology.performance.cards.reasoning.improvement.label') }}</span>
                <span class="improvement-value">{{ t('technology.performance.cards.reasoning.improvement.value') }}</span>
              </div>
            </div>

            <div class="comparison-card glass-border">
              <div class="comparison-header">
                <div class="title-bilingual">
                  <h3 class="title-main">{{ t('technology.performance.cards.data.title') }}</h3>
                </div>
                <div class="icon-wrapper">
                  <img src="/images/icons/合成数据扩充图标.png" alt="数据扩增对比" class="icon-img">
                  <div class="icon-glow"></div>
                </div>
              </div>
              <div class="comparison-stats">
                <div class="stat-item">
                  <span class="stat-label">{{ t('technology.performance.cards.data.stats.dataArc.label') }}</span>
                  <span class="stat-value highlight">{{ t('technology.performance.cards.data.stats.dataArc.value') }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">{{ t('technology.performance.cards.data.stats.benchmark.label') }}</span>
                  <span class="stat-value">{{ t('technology.performance.cards.data.stats.benchmark.value') }}</span>
                </div>
              </div>
              <div class="improvement">
                <span class="improvement-text">{{ t('technology.performance.cards.data.improvement.label') }}</span>
                <span class="improvement-value">{{ t('technology.performance.cards.data.improvement.value') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 第三屏：常见问题 -->
    <section class="fullscreen-section dark-bg">
      <div class="container">
        <!-- 标题 -->
        <div class="section-header">
          <div class="title-bilingual">
            <h2 class="title-main">{{ t('technology.faq.title') }}</h2>
          </div>
        </div>

        <!-- FAQ内容 -->
        <div class="faq-content">
          <div class="faq-tabs">
            <button class="faq-tab" :class="{ active: activeTab === 'kb' }" @click="activeTab = 'kb'">
              {{ t('technology.faq.tabs.kb') }}
            </button>
            <button class="faq-tab" :class="{ active: activeTab === 'data' }" @click="activeTab = 'data'">
              {{ t('technology.faq.tabs.data') }}
            </button>
          </div>

          <div class="faq-list" v-if="activeTab === 'kb'">
            <div class="faq-item" v-for="(item, index) in kbFaqItems" :key="index">
              <div class="faq-question" @click="toggleFaq('kb', index)">
                <span class="faq-number">{{ String(index + 1).padStart(2, '0') }}</span>
                <span class="faq-text">{{ item.question }}</span>
                <span class="faq-toggle">{{ kbFaqOpen[index] ? '-' : '+' }}</span>
              </div>
              <div class="faq-answer" v-show="kbFaqOpen[index]">
                <p>{{ item.answer }}</p>
              </div>
            </div>
          </div>

          <div class="faq-list" v-if="activeTab === 'data'">
            <div class="faq-item" v-for="(item, index) in dataFaqItems" :key="index">
              <div class="faq-question" @click="toggleFaq('data', index)">
                <span class="faq-number">{{ String(index + 1).padStart(2, '0') }}</span>
                <span class="faq-text">{{ item.question }}</span>
                <span class="faq-toggle">{{ dataFaqOpen[index] ? '-' : '+' }}</span>
              </div>
              <div class="faq-answer" v-show="dataFaqOpen[index]">
                <p>{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

const { t, tm } = useI18n()

const activeTab = ref('kb')

const coreFeatureItems = computed(() => {
  const items = tm('technology.features.core.items')
  return Array.isArray(items) ? items : []
})

const productFeatureItems = computed(() => {
  const items = tm('technology.features.product.items')
  return Array.isArray(items) ? items : []
})

const techStatsItems = computed(() => {
  const items = tm('technology.techStats.items')
  return Array.isArray(items) ? items : []
})

const kbFaqItems = computed(() => {
  const items = tm('technology.faq.kb.items')
  return Array.isArray(items) ? items : []
})

const dataFaqItems = computed(() => {
  const items = tm('technology.faq.data.items')
  return Array.isArray(items) ? items : []
})

const kbFaqOpen = ref([])
const dataFaqOpen = ref([])

watchEffect(() => {
  const length = kbFaqItems.value.length
  if (kbFaqOpen.value.length !== length) {
    kbFaqOpen.value = Array.from({ length }, () => false)
  }
})

watchEffect(() => {
  const length = dataFaqItems.value.length
  if (dataFaqOpen.value.length !== length) {
    dataFaqOpen.value = Array.from({ length }, () => false)
  }
})

const toggleFaq = (type, index) => {
  if (type === 'kb') {
    kbFaqOpen.value[index] = !kbFaqOpen.value[index]
  } else {
    dataFaqOpen.value[index] = !dataFaqOpen.value[index]
  }
}
</script>

<style scoped>
.technology-page {
  min-height: 100vh;
}

.page-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 120px 0 60px;
  text-align: center;
}

.page-hero h1 {
  font-size: 2.5rem;
  margin-bottom: 16px;
  font-weight: 600;
}

.page-hero p {
  font-size: 1.1rem;
  opacity: 0.9;
}

/* 全屏section布局 */
.fullscreen-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 80px 0;
}

/* 交替背景色 */
.dark-bg {
  background: #0a0a0a;
}

.pure-black-bg {
  background: #000000;
}

/* 统一的section标题样式 */
.section-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.section-header .title-bilingual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
}

.section-header .title-main {
  font-size: 3rem;
  font-weight: 300;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.section-header .title-en {
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.section-header .content-bilingual {
  margin-top: var(--space-6);
}

.section-header .content-main {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
}

/* 流程步骤 */
.process-steps {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
}

/* 核心功能和产品特点卡片 */
.feature-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-8);
  margin-top: var(--space-16);
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.feature-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  backdrop-filter: var(--glass-backdrop);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  text-align: center;
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto var(--space-6) auto;
  display: block;
}

.feature-card .title-bilingual {
  margin-bottom: var(--space-6);
}

.feature-card .title-main {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
}

.list-bilingual {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-item-bilingual {
  padding: var(--space-2) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  text-align: left;
}

.list-item-bilingual:last-child {
  border-bottom: none;
}

.list-main {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
}

.step-item {
  display: flex;
  margin-bottom: 40px;
  position: relative;
  align-items: stretch;
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.step-line {
  width: 4px;
  background: #2563eb;
  margin: 0 12px;
  flex-shrink: 0;
  border-radius: 2px;
  height: auto;
  align-self: stretch;
}

.step-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.step-content h3 {
  color: #709dff;
  font-size: 1.2rem;
  margin-bottom: 12px;
  font-weight: 600;
}

.step-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
}

/* 功能卡片 */
.feature-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 80px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.feature-card {
  text-align: center;
  padding: 25px 30px;
  background: var(--bg-primary);
  border: 1px solid var(--neutral-200);
  border-radius: var(--radius-xl);
  transition: all var(--duration-normal) var(--ease-out);
}

.list-item-bilingual{
  white-space: normal;
}

.feature-icon {
  width: 70px;
  height: 70px;
  margin-bottom: 12px;
  border-radius: 8px;
}

.feature-card h3 {
  color: var(--text-primary);
  font-size: 1.3rem;
  margin-bottom: 12px;
  font-weight: 600;
}

.feature-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.95rem;
}

.feature-card ul {
  text-align: left;
  padding-left: 0;
  list-style: none;
}

.feature-card li {
  color: var(--text-secondary);
  margin-bottom: 4px;
  padding-left: 16px;
  position: relative;
  font-size: 0.95rem;
  line-height: 1.3;
}

.feature-card li::before {
  content: '•';
  color: var(--primary-color);
  position: absolute;
  left: 0;
}

/* 技术优势 */
.tech-section {
  text-align: center;
  margin-bottom: 80px;
}

.tech-section h2 {
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 16px;
  font-weight: 600;
}

.tech-subtitle {
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto 50px;
  line-height: 1.6;
  font-size: 0.95rem;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.tech-item {
  text-align: center;
}

.tech-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #2563eb;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  font-weight: 600;
  font-size: 1.1rem;
}

.tech-item h4 {
  color: var(--text-primary);
  font-size: 1.1rem;
  margin-bottom: 8px;
  font-weight: 600;
}

.tech-item p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* FAQ部分 */
.faq-content {
  max-width: 800px;
  margin: 0 auto;
}

.faq-tabs {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 60px;
}

.faq-tab {
  position: relative;
  padding: 12px 24px;
  border: 2px solid rgba(37, 99, 235, 0.35);
  background: transparent;
  color: #2563eb;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.95rem;
  overflow: hidden;
  z-index: 0;
  transition: color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease,
    transform 0.3s ease;
}

.faq-tab::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #2563eb 0%, #60a5fa 100%);
  border-radius: inherit;
  opacity: 0;
  transform: scale(0.92, 0.88);
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: -1;
}

.faq-tab:hover {
  color: #ffffff;
  border-color: transparent;
  box-shadow: 0 12px 24px rgba(37, 99, 235, 0.25);
  transform: translateY(-3px);
}

.faq-tab:hover::after {
  opacity: 1;
  transform: scale(1);
}

.faq-tab.active {
  color: #ffffff;
  border-color: transparent;
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);
}

.faq-tab.active::after {
  opacity: 1;
  transform: scale(1);
}

.faq-list {
  background: var(--bg-primary);
  border: 1px solid var(--neutral-200);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.faq-item {
  border-bottom: 1px solid var(--neutral-200);
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-question {
  display: flex;
  align-items: center;
  padding: 24px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.faq-question:hover {
  background: rgba(#ffffff, 0.08);
}

.faq-number {
  background: #2563eb;
  color: white;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 600;
  margin-right: 20px;
  flex-shrink: 0;
}

.faq-text {
  flex: 1;
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.95rem;
}

.faq-toggle {
  color: #2563eb;
  font-size: 1.2rem;
  font-weight: 600;
  width: 24px;
  text-align: center;
}

.faq-answer {
  padding: 0 24px 24px 72px;
}

.faq-answer p {
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 0.9rem;
}

@media (max-width: 1024px) {
  .tech-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    max-width: 900px;
  }
}

@media (max-width: 768px) {
  .fullscreen-section {
    min-height: auto;
    padding: 60px 0;
  }
  
  .section-header .title-main {
    font-size: 2.2rem;
  }
  
  .section-header .title-en {
    font-size: 0.9rem;
  }

  .tech-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }

  .performance-comparison {
    padding: var(--space-8) var(--space-6);
  }

  .performance-comparison .title-main {
    font-size: 1.6rem;
  }

  .performance-comparison .content-main {
    font-size: 0.85rem;
  }

  .comparison-grid {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  .feature-cards {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .title-bilingual{
    display: flex;
    align-items: center;
  }

  .faq-tabs {
    flex-direction: column;
    align-items: center;
  }

  .faq-answer {
    margin-left: 0;
    padding-left: 24px;
  }
}

@media (max-width: 480px) {
  .section-header .title-main {
    font-size: 1.8rem;
  }

  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .performance-comparison {
    padding: var(--space-6) var(--space-4);
  }

  .performance-comparison .title-main {
    font-size: 1.4rem;
  }

  .performance-comparison .content-main {
    font-size: 0.8rem;
  }

  .process-steps {
    gap: var(--space-8);
  }
}

/* ===== Performance Comparison Section ===== */
.performance-comparison {
  margin-top: var(--space-16);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-2xl);
  padding: var(--space-12) var(--space-8);
}

.performance-comparison .section-header {
  margin-bottom: var(--space-12);
}

.performance-comparison .title-main {
  font-size: 2rem;
  font-weight: 300;
  color: var(--text-primary);
}

.performance-comparison .content-main {
  font-size: 0.9rem;
  font-weight: 300;
  color: var(--text-secondary);
  max-width: 600px;
  margin: var(--space-4) auto 0;
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  max-width: 1200px;
  margin: 0 auto;
}

.comparison-card {
  background: transparent;
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all var(--duration-normal) var(--ease-out);
}

/* 透明白边框样式 */
.glass-border {
  background: transparent !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
}

.comparison-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.comparison-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.comparison-card .comparison-header .title-main {
  font-size: 1.7rem !important;
  font-weight: 300 !important;
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.comparison-icon {
  color: var(--primary-color);
  font-size: var(--font-sm);
  margin-bottom: var(--space-4);
}

.stat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-2) 0;
  border-bottom: 1px solid var(--neutral-200);
}

.stat-value.highlight {
  color: var(--primary-color);
  font-weight: var(--font-weight-bold);
}

.improvement {
  text-align: center;
  padding: var(--space-3);
  background: var(--glass-bg);
  border-radius: var(--radius-lg);
  margin-top: var(--space-4);
}

.improvement-value {
  font-size: var(--font-xl);
  font-weight: var(--font-weight-bold);
  color: var(--primary-color);
  display: block;
  margin-top: var(--space-1);
}

/* ===== Hero Section ===== */
.hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  overflow: hidden;
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.hero-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.1) 1px, transparent 0);
  background-size: 20px 20px;
  animation: float 20s ease-in-out infinite;
}

.hero-content {
  text-align: center;
  color: var(--text-white);
  max-width: 1200px;
  margin: 0 auto;
}

.hero-title {
  font-size: var(--font-5xl);
  font-weight: 800;
  line-height: var(--leading-tight);
  margin-bottom: var(--space-6);
  animation: fadeInUp 0.8s var(--ease-out);
}

.title-line {
  display: block;
}

.title-highlight {
  background: linear-gradient(45deg, #ffecd2, #fcb69f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: var(--font-lg);
  line-height: var(--leading-relaxed);
  color: var(--text-white-secondary);
  max-width: 600px;
  margin: 0 auto;
  animation: fadeInUp 1s var(--ease-out);
}

/* Hero section文字颜色修复 */
.hero .company-super-title .company-main-title,
.hero .company-super-title .company-future-title {
  color: var(--text-white) !important;
}

.hero .company-super-title .company-english-line {
  color: var(--text-white-secondary) !important;
}

.hero .hero-description .content-main,
.hero .hero-description .content-en {
  color: var(--text-white-secondary) !important;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Hero Stats */
.hero .hero-stats {
  display: flex;
  justify-content: center;
  gap: var(--space-4);
  flex-wrap: wrap;
  max-width: 1000px;
  margin: var(--space-12) auto 0;
}

.hero .stat-item {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  padding: var(--space-6) var(--space-4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all var(--duration-normal) var(--ease-out);
  flex: 0 0 auto;
  min-width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero .stat-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.hero .stat-label-bilingual {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  width: 100%;
}

.hero .stat-prefix {
  font-size: var(--font-xl);
  font-weight: 300;
  color: var(--text-white);
  line-height: 1.2;
  display: block;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  margin-bottom: var(--space-1);
}

.hero .stat-suffix {
  font-size: var(--font-sm);
  font-weight: var(--font-weight-medium);
  color: var(--text-white);
  line-height: 1.3;
  display: block;
  word-break: break-word;
}
</style>
