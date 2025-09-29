<template>
  <div class="cases-page">
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
            <span class="title-main company-main-title">{{ heroContent.title }}</span>
            <span class="title-highlight title-multilevel">
              <span class="title-main company-future-title">{{ heroContent.subtitle }}</span>
            </span>
            <span class="subtitle-en company-english-line">{{ heroContent.englishLine }}</span>
          </h1>
          <div class="hero-description content-bilingual">
            <p class="content-main">{{ heroContent.description }}</p>
          </div>
          <div class="hero-stats">
            <div v-for="stat in heroContent.stats" :key="stat.value" class="stat-item">
              <span class="stat-number">{{ stat.value }}</span>
              <div class="stat-label-bilingual">
                <span class="stat-main">{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industry Coverage -->
    <section id="industry-coverage" class="industry-coverage">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title title-bilingual">
            <span class="title-main">{{ industryContent.title }}</span>
          </h2>
          <div class="content-bilingual">
            <p class="content-main">{{ industryContent.description }}</p>
          </div>
        </div>

        <div class="industry-grid">
          <div v-for="item in industryContent.items" :key="item.key" class="industry-item">
            <div v-if="item.glow" class="icon-wrapper">
              <img :src="item.icon" :alt="item.iconAlt" class="icon-img" :class="item.iconSize">
              <div class="icon-glow"></div>
            </div>
            <img v-else :src="item.icon" :alt="item.iconAlt" class="icon-img" :class="item.iconSize">
            <div class="title-bilingual">
              <h3 class="title-main">{{ item.title }}</h3>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ item.description }}</p>
            </div>
            <div class="industry-highlights">
              <span v-for="highlight in item.highlights" :key="highlight" class="highlight">{{ highlight }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Customer Cases -->
    <section id="detailed-cases" class="detailed-cases">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title title-bilingual">
            <span class="title-main">{{ featuredContent.title }}</span>
          </h2>
          <div class="content-bilingual">
            <p class="content-main">{{ featuredContent.description }}</p>
          </div>
        </div>

        <div class="cases-grid">
          <div v-for="caseItem in featuredContent.items" :key="caseItem.id" class="case-card premium-case">
            <div class="case-header">
              <div class="case-badge" :class="caseItem.badge.class">{{ caseItem.badge.text }}</div>
              <div class="case-title-group">
                <div class="title-bilingual">
                  <h3 class="title-main">{{ caseItem.title }}</h3>
                </div>
                <div class="content-bilingual">
                  <span class="content-main">{{ caseItem.subtitle }}</span>
                </div>
                <div class="content-bilingual">
                  <p class="content-main">{{ caseItem.background }}</p>
                </div>
              </div>
              <div class="industry-bilingual">
                <span class="content-main">{{ caseItem.industry }}</span>
              </div>
            </div>

            <div class="case-body">

              <div class="case-section">
                <div class="title-bilingual">
                  <h4 class="title-main">{{ labelsContent.businessChallenges }}</h4>
                </div>
                <div class="challenge-list">
                  <div v-for="challenge in caseItem.challenges" :key="challenge.text" class="challenge-item">
                    <div class="icon-wrapper">
                      <img :src="challenge.icon" :alt="challenge.iconAlt" class="icon-img">
                      <div class="icon-glow"></div>
                    </div>
                    <div class="content-bilingual">
                      <p class="content-main">{{ challenge.text }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="case-section">
                <div class="title-bilingual">
                  <h4 class="title-main">{{ labelsContent.solutions }}</h4>
                </div>
                <div class="solution-overview">
                  <div class="solution-title title-bilingual">
                    <span class="title-main">{{ caseItem.solution.title }}</span>
                  </div>
                  <div class="solution-details">
                    <div v-for="module in caseItem.solution.modules" :key="module.title" class="solution-module">
                      <div class="title-bilingual">
                        <h5 class="title-main">{{ module.title }}</h5>
                      </div>
                      <div class="content-bilingual">
                        <p class="content-main">{{ module.text }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="case-section">
                <div class="title-bilingual">
                  <h4 class="title-main">{{ labelsContent.implementationResults }}</h4>
                </div>
                <div class="results-grid">
                  <div v-for="result in caseItem.results" :key="result.title" class="result-item">
                    <div class="icon-wrapper">
                      <img :src="result.icon" :alt="result.iconAlt" class="icon-img">
                      <div class="icon-glow"></div>
                    </div>
                    <div class="title-bilingual">
                      <h5 class="title-main">{{ result.title }}</h5>
                    </div>
                    <div class="content-bilingual">
                      <p class="content-main">{{ result.text }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Detailed Cases -->
    <section class="additional-cases">
      <div class="container">
        <div v-for="item in additionalContent.items" :key="item.id" class="detailed-case">
          <div class="case-overview">
            <div class="case-info">
              <div class="title-bilingual">
                <h3 class="title-main">{{ item.title }}</h3>
              </div>
              <div class="tag-group">
                <span v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
              <div class="content-bilingual">
                <p class="content-main">{{ item.description }}</p>
              </div>
            </div>
            <div class="case-visual">
              <div class="case-placeholder">{{ item.placeholder }}</div>
            </div>
          </div>

          <div class="case-challenge">
            <div class="title-bilingual">
              <h4 class="title-main">{{ labelsContent.businessChallenges }}</h4>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ item.challenge }}</p>
            </div>
          </div>

          <div class="case-solution">
            <div class="title-bilingual">
              <h4 class="title-main">{{ labelsContent.dataarcSolutions }}</h4>
            </div>
            <div class="content-bilingual">
              <p class="content-main">{{ item.solution }}</p>
            </div>
          </div>

          <div class="case-results">
            <div class="title-bilingual">
              <h4 class="title-main">{{ labelsContent.businessResults }}</h4>
            </div>
            <div class="results-grid">
              <div v-for="result in item.results" :key="result.label" class="result-item">
                <div class="icon-wrapper">
                  <img :src="result.icon" :alt="result.iconAlt" class="icon-img">
                  <div class="icon-glow"></div>
                </div>
                <div class="result-stat">
                  <span class="result-number">{{ result.value }}</span>
                  <div class="result-label-bilingual">
                    <span class="result-main">{{ result.label }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industry Benchmarks Section -->
    <section id="benchmark-comparison" class="industry-benchmarks">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title title-bilingual">
            <span class="title-main">{{ benchmarksContent.title }}</span>
          </h2>
          <div class="content-bilingual">
            <p class="content-main">{{ benchmarksContent.description }}</p>
          </div>
        </div>

        <div class="benchmarks-grid">
          <div v-for="card in benchmarksContent.cards" :key="card.title" class="benchmark-card">
            <div class="title-bilingual">
              <h3 class="title-main">{{ card.title }}</h3>
            </div>
            <div class="benchmark-content">
              <div v-for="stat in card.stats" :key="stat.label" class="benchmark-stat">
                <div class="stat-label-bilingual">
                  <span class="stat-main">{{ stat.label }}</span>
                </div>
                <span class="stat-value" :class="{ 'highlight': stat.value.includes('显著') || stat.value.includes('零风险') || stat.value.includes('智能图谱') }">{{ stat.value }}</span>
              </div>
            </div>
            <div class="benchmark-improvement">
              <div class="content-bilingual">
                <span class="content-main">{{ card.improvement }}</span>
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
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

const { tm } = useI18n()

// 获取国际化内容
const heroContent = computed(() => {
  const content = tm('cases.hero')
  return content && Object.keys(content).length > 0 ? content : {}
})

const industryContent = computed(() => {
  const content = tm('cases.industry')
  return content && Object.keys(content).length > 0 ? content : {}
})

const featuredContent = computed(() => {
  const content = tm('cases.featured')
  return content && Object.keys(content).length > 0 ? content : {}
})

const additionalContent = computed(() => {
  const content = tm('cases.additional')
  return content && Object.keys(content).length > 0 ? content : {}
})

const benchmarksContent = computed(() => {
  const content = tm('cases.benchmarks')
  return content && Object.keys(content).length > 0 ? content : {}
})

const labelsContent = computed(() => {
  const content = tm('cases.labels')
  return content && Object.keys(content).length > 0 ? content : {}
})
</script>

<style scoped>
/* ===== Page Layout ===== */
.cases-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
  max-width: 800px;
  margin: 0 auto;
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

.case-title-group .content-bilingual{
  display: flex;
  justify-content: center;
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

/* ===== Cases Section ===== */
.cases-section {
  padding: var(--space-32) 0;
  background: var(--bg-secondary);
  position: relative;
}

.cases-section::before {
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
  position: relative;
  z-index: 2;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--space-8);
  margin-bottom: var(--space-20);
  position: relative;
  z-index: 2;
}

.case-card {
  position: relative;
  transition: all var(--duration-normal) var(--ease-out);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.case-card:hover {
  transform: translateY(-8px);
}

.case-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-6);
}

.case-icon {
  position: relative;
}

.icon-gradient {
  width: 50px;
  height: 50px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-medium);
  position: relative;
}

.icon-gradient::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: var(--text-white);
  border-radius: var(--radius-sm);
}

.case-category {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-full);
  padding: var(--space-1) var(--space-3);
  font-size: var(--font-xs);
  font-weight: 500;
  color: var(--primary-color);
  backdrop-filter: var(--glass-backdrop);
  -webkit-backdrop-filter: var(--glass-backdrop);
}

.case-content {
  margin-bottom: var(--space-6);
}

.case-title {
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-3);
}

.case-description {
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-4);
}

.case-highlights {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.highlight-icon {
  width: 16px;
  height: 16px;
  background: var(--primary-color);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.check-icon {
  width: 10px;
  height: 10px;
  fill: var(--text-white);
}

.highlight-item span {
  font-size: var(--font-sm);
  color: var(--text-secondary);
}

.case-footer {
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding-top: var(--space-4);
}

.case-results {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-4);
}

.result-item {
  text-align: center;
  flex: 1;
}

.result-label {
  display: block;
  font-size: var(--font-xs);
  color: var(--text-tertiary);
  margin-bottom: var(--space-1);
}

.result-value {
  display: block;
  font-size: var(--font-lg);
  font-weight: 700;
  color: var(--primary-color);
}

/* ===== Stats Section ===== */
.stats-section {
  position: relative;
  z-index: 2;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-6);
}

.stat-card {
  text-align: center;
  padding: var(--space-8);
  transition: all var(--duration-normal) var(--ease-out);
}

.stat-card:hover {
  transform: translateY(-4px);
}

.stat-number {
  font-size: var(--font-4xl);
  font-weight: 800;
  color: var(--primary-color);
  margin-bottom: var(--space-2);
}

.stat-label {
  font-size: var(--font-sm);
  color: var(--text-secondary);
  font-weight: 500;
}

/* ===== 企业Logo背景适配样式 ===== */
.company-logo {
  width: 48px;
  height: 48px;
  object-fit: contain;
  transition: all var(--duration-normal) var(--ease-out);
  filter: brightness(0.8) contrast(1.2);
  mix-blend-mode: multiply;
}

/* 为不同案例卡片设置不同的logo样式适配 */
.case-1 .company-logo {
  /* 阿里云 - 蓝色背景渐变，logo需要深色 */
  filter: brightness(0.3) contrast(1.5) saturate(0);
  mix-blend-mode: multiply;
}

.case-2 .company-logo {
  /* 华图在线 - 橙色背景渐变，logo需要深色 */
  filter: brightness(0.4) contrast(1.4) saturate(0.8);
  mix-blend-mode: multiply;
}

.case-3 .company-logo {
  /* 东方富海 - 绿色背景渐变，logo需要深色 */
  filter: brightness(0.3) contrast(1.6) saturate(0.6);
  mix-blend-mode: multiply;
}

.case-4 .company-logo {
  /* TCL - 紫色背景渐变，logo需要深色 */
  filter: brightness(0.4) contrast(1.3) saturate(0.5);
  mix-blend-mode: multiply;
}

.case-5 .company-logo {
  /* 微软小冰 - 粉色背景渐变，logo需要深色 */
  filter: brightness(0.35) contrast(1.5) saturate(0.7);
  mix-blend-mode: multiply;
}

.case-6 .company-logo {
  /* 深智城 - 青色背景渐变，logo需要深色 */
  filter: brightness(0.3) contrast(1.4) saturate(0.6);
  mix-blend-mode: multiply;
}

/* Hover效果 */
.case-card:hover .company-logo {
  filter: brightness(0.2) contrast(1.8) saturate(0);
  transform: scale(1.1);
  mix-blend-mode: difference;
}

/* 如果需要在浅色背景上显示，可以使用这个类 */
.company-logo.light-bg {
  filter: brightness(0.2) contrast(2) saturate(0);
  mix-blend-mode: multiply;
}

/* 如果需要在深色背景上显示，可以使用这个类 */
.company-logo.dark-bg {
  filter: brightness(5) contrast(1.5) invert(1);
  mix-blend-mode: screen;
}

/* ===== Animations ===== */
.case-card {
  animation: fadeInUp 0.6s var(--ease-out);
}

.case-card.case-1 {
  animation-delay: 0.1s;
}

.case-card.case-2 {
  animation-delay: 0.2s;
}

.case-card.case-3 {
  animation-delay: 0.3s;
}

.case-card.case-4 {
  animation-delay: 0.4s;
}

.case-card.case-5 {
  animation-delay: 0.5s;
}

.case-card.case-6 {
  animation-delay: 0.6s;
}

.stat-card {
  animation: fadeInScale 0.6s var(--ease-out);
}

.stat-card:nth-child(1) {
  animation-delay: 0.1s;
}

.stat-card:nth-child(2) {
  animation-delay: 0.2s;
}

.stat-card:nth-child(3) {
  animation-delay: 0.3s;
}

.stat-card:nth-child(4) {
  animation-delay: 0.4s;
}
.title-bilingual {
    padding-top: 24px;
  }
/* ===== Responsive Design ===== */
@media (max-width: 768px) {
  .hero {
    min-height: 60vh;
    padding: var(--space-20) 0;
  }

  .hero-title {
    font-size: var(--font-4xl);
  }

  .cases-grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }


  .title-bilingual{

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  


  .case-results {
    flex-direction: column;
    gap: var(--space-2);
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: var(--font-3xl);
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .cases-grid {
    gap: var(--space-4);
  }
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

/* ===== Industry Coverage Section ===== */
.industry-coverage {
  padding: var(--space-32) 0;
  background: var(--bg-secondary);
}

.industry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--space-4);
  margin-top: var(--space-12);
}

.industry-item {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  text-align: center;
  transition: all var(--duration-normal) var(--ease-out);
  border: 1px solid var(--neutral-200);
  box-shadow: var(--shadow-sm);
}

.industry-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.industry-icon {
  width: 60px;
  height: 60px;
  background: var(--neutral-100);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-4) auto;
  font-size: 0.8rem;
  color: var(--text-tertiary);
  border: 1px solid var(--neutral-200);
}

.industry-highlights {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-top: var(--space-4);
}

.industry-highlights .highlight {
  background: var(--glass-bg);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  font-size: var(--font-sm);
  color: var(--primary-color);
  font-weight: var(--font-weight-medium);
}

/* ===== Detailed Cases Section ===== */
.detailed-cases,
.additional-cases {
  padding: var(--space-32) 0;
  background: var(--bg-primary);
}

.detailed-case {
  margin-bottom: var(--space-20);
  padding: var(--space-12);
  background: transparent;
  border-radius: var(--radius-2xl);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.premium-case {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.case-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: var(--space-8);
  flex-wrap: wrap;
  gap: var(--space-4);
}

.case-badge {
  padding: var(--space-2) var(--space-4);
  border-bottom-right-radius: 12px;
  border-top-left-radius: 16px;
  font-size: var(--font-sm);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: absolute;
}

.livingkb-badge {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: var(--text-white);
}

.syndata-badge {
  background: linear-gradient(135deg, #f093fb, #f5576c);
  color: var(--text-white);
}

.case-title-group {
  flex: 1;
  margin: 0 var(--space-4);
}

.industry-bilingual {
  background: var(--neutral-400);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  font-size: var(--font-sm);
  color: var(--text-secondary);
  text-align: center;
  border: 1px solid var(--neutral-200);
  position: absolute;
  right: 4px;
  top: 4px;
}

.case-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.case-section {
  background: var(--bg-primary);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
}

.solution-overview {
  background: transparent;
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.solution-title {
  font-size: var(--font-lg);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-4);
  color: var(--primary-color);
}

.solution-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-4);
  margin-top: var(--space-4);
}

.solution-module {
  background: var(--glass-bg);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  border: 1px solid var(--glass-border);
  backdrop-filter: var(--glass-backdrop);
}

.challenge-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-top: var(--space-4);
}

.challenge-item{
  display: flex;
  align-items: center;
  gap: 16px;
  border-left: transparent;
}

/* Tag styles */
.tag-group {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.tag {
  background: var(--primary-color);
  color: var(--text-white);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--font-sm);
  font-weight: var(--font-weight-medium);
}

.case-overview {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-8);
  margin-bottom: var(--space-8);
  background: var(--bg-primary);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
}

.case-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.case-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--neutral-50);
  border-radius: var(--radius-md);
  border: 1px solid var(--neutral-200);
}

.case-placeholder {
  padding: var(--space-8);
  text-align: center;
  color: var(--text-tertiary);
  font-size: var(--font-sm);
  background: var(--neutral-100);
  border-radius: var(--radius-md);
  width: 100%;
}

.case-challenge,
.case-solution,
.case-results {
  background: transparent;
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.results-grid {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: var(--space-6);
  margin-top: var(--space-6);
  flex-wrap: nowrap;
}

@media (max-width: 768px) {
  .results-grid {
    flex-direction: row;
    gap: var(--space-4);
    flex-wrap: nowrap;
  }
}

.result-item {
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  text-align: center;
  transition: all var(--duration-normal) var(--ease-out);
  border: 1px solid var(--neutral-200);
  box-shadow: var(--shadow-sm);
}

.result-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.highlighted-result {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(76, 75, 162, 0.05) 100%);
  border-color: rgba(99, 102, 241, 0.3);
}

.result-icon {
  width: 50px;
  height: 50px;
  background: var(--neutral-100);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-4) auto;
  font-size: 0.7rem;
  color: var(--text-tertiary);
  border: 1px solid var(--neutral-200);
}

.result-stat {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.result-number {
  font-size: var(--font-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--primary-color);
  margin-bottom: var(--space-2);
}

.case-title {
  font-size: var(--font-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin-bottom: var(--space-4);
}

.case-tags {
  display: flex;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.tag {
  background: var(--primary-color);
  color: var(--text-white);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--font-sm);
  font-weight: var(--font-weight-medium);
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  margin-top: var(--space-4);
}

.result-item {
  text-align: center;
  padding: var(--space-4);
  background: transparent;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.result-number {
  font-size: var(--font-2xl);
  font-weight: var(--font-weight-bold);
  color: var(--primary-color);
  display: block;
}

.result-label {
  font-size: var(--font-sm);
  color: var(--text-tertiary);
}

/* Industry Benchmarks Section */
.industry-benchmarks {
  padding: var(--space-32) 0;
  background: var(--bg-secondary);
}

.benchmarks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-8);
}

.benchmark-card {
  background: var(--bg-primary);
  border-radius: var(--radius-2xl);
  padding: var(--space-8);
  border: 1px solid var(--neutral-200);
}

.benchmark-card h3 {
  font-size: var(--font-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-6);
  text-align: center;
}

.benchmark-stat {
  display: flex;
  justify-content: space-between;
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--neutral-200);
}

.stat-value.highlight {
  color: var(--primary-color);
  font-weight: var(--font-weight-bold);
}

.benchmark-improvement {
  text-align: center;
  padding: var(--space-4);
  background: var(--glass-bg);
  border-radius: var(--radius-lg);
  color: var(--primary-color);
  font-weight: var(--font-weight-medium);
  margin-top: var(--space-4);
  backdrop-filter: var(--glass-backdrop);
  border: 1px solid var(--glass-border);
}

/* Hero Stats Styles */
.hero-stats {
  display: flex;
  justify-content: center;
  gap: var(--space-8);
  margin-top: var(--space-8);
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  padding: var(--space-6) var(--space-4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all var(--duration-normal) var(--ease-out);
}

.stat-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.stat-number {
  font-size: var(--font-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-white);
  margin-bottom: var(--space-2);
  display: block;
}

/* Benchmark Stat Label Styles */
.benchmark-stat .stat-label-bilingual {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  margin-right: var(--space-4);
}

.benchmark-stat .stat-main {
  font-size: var(--font-sm);
  font-weight: var(--font-weight-medium);
  color: var(--text-secondary);
}

.benchmark-stat .stat-en {
  font-size: 0.75em;
  font-weight: var(--font-weight-light);
  color: var(--text-quaternary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.8;
}

/* Responsive improvements */
@media (max-width: 1024px) {
  .case-overview {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }

  .solution-details {
    grid-template-columns: 1fr;
  }

  .results-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-4);
  }
}

@media (max-width: 768px) {
  .industry-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-3);
  }

  .case-header {
    flex-direction: column;
    align-items: stretch;
  }

  .case-title-group {
    margin: 0;
  }

  .hero-stats {
    gap: var(--space-4);
  }

  .benchmarks-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {

  .detailed-case,
  .case-overview,
  .case-section {
    padding: var(--space-4);
  }

  .results-grid {
    grid-template-columns: 1fr;
  }

  .industry-grid {
    grid-template-columns: 1fr;
  }

  .stat-number {
    font-size: var(--font-2xl);
  }
}
</style>
