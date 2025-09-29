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
              <div v-for="orb in orbSections.hero || []" :key="orb.id" class="orb" :style="getOrbStyle(orb)"></div>
            </div>
          </div>
          <div class="content-bilingual" v-if="heroContent">
            <p class="content-main">{{ heroContent.descriptions?.[0] }}</p>
            <p class="content-en">{{ heroContent.descriptions?.[1] }}</p>
          </div>
          <div class="hero-actions" v-if="heroContent">
            <a href="#" class="btn btn-primary btn-lg btn-capsule">
              <span class="btn-text-main">{{ t('common.buttons.login') }}</span>
            </a>
            <a href="#contact" class="btn btn-secondary btn-lg btn-capsule btn-white">
              <span class="btn-text-main">{{ t('common.buttons.contact') }}</span>
            </a>
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
              <div v-for="orb in orbSections.market || []" :key="orb.id" class="orb" :style="getOrbStyle(orb)"></div>
            </div>
          </div>
          <div class="content-bilingual" v-if="marketContent">
            <p class="content-main">{{ marketContent.subtitle }}</p>
          </div>
        </div>

        <div class="opportunity-grid">
          <div v-for="card in marketCards" :key="card.key" class="opportunity-card light-card">
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
              <div v-for="orb in orbSections.products || []" :key="orb.id" class="orb" :style="getOrbStyle(orb)"></div>
            </div>
          </div>
          <div class="content-bilingual" v-if="productsContent">
            <p class="content-main">{{ productsContent.subtitle }}</p>
          </div>
        </div>

        <div class="products-grid" v-if="productsContent?.cards">
          <div v-for="card in productsContent.cards" :key="card.title" class="product-card glass-card">
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
                <li v-for="feature in card.features" :key="feature" class="list-item-bilingual">
                  <span class="list-main">{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- Product Actions -->
            <div class="product-actions">
              <button 
                @click="goToProductDetail(card.title)" 
                class="btn btn-secondary btn-lg">
                <span class="btn-text-main">{{ t('common.buttons.learnMore') }}</span>
              </button>
              <button 
                @click="openBookingModal(card.title)" 
                class="btn btn-primary btn-lg">
                <span class="btn-text-main">{{ t('common.buttons.tryNow') }}</span>
              </button>
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
            <div v-for="orb in orbSections.tech || []" :key="orb.id" class="orb" :style="getOrbStyle(orb)"></div>
          </div>
        </div>
        <div class="content-bilingual text-center">
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
            <div class="branch-section" v-for="branch in ['left', 'right']" :key="branch">
              <div v-for="item in technologyContent.branches?.[branch] || []" :key="item.title" class="tech-item">
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



    <!-- News Section -->
    <section class="news" v-if="newsContent">
      <div class="container">
        <div class="title-with-orbs orbs-news">
          <h2 class="section-title title-stacked">
            <span class="title-main">{{ newsContent.title }}</span>
          </h2>
          <div class="floating-orbs" @mouseenter="handleMouseMove" @mouseleave="handleMouseLeave">
            <div v-for="orb in orbSections.news || []" :key="orb.id" class="orb" :style="getOrbStyle(orb)"></div>
          </div>
        </div>
        <div class="content-bilingual">
          <p class="content-main">{{ newsContent.subtitle }}</p>
        </div>

        <div class="news-scroll-container" @mouseenter="pauseScroll" @mouseleave="resumeScroll" @wheel="handleWheel">
          <div class="news-track" ref="newsTrack">
            <a v-for="item in duplicatedNews" :key="`${item.title}-${item.index}`" :href="item.link" target="_blank" class="news-card">
            <div class="news-image">
              <div class="news-placeholder">{{ item.placeholder }}</div>
                <div class="news-tag" v-if="item.tag" :class="getTagClass(item.tag)">{{ item.tag }}</div>
            </div>
            <div class="news-content">
              <h4 class="title-level-4">{{ item.title }}</h4>
              <p class="news-date text-sm font-normal text-quaternary">{{ item.date }}</p>
            </div>
            </a>
          </div>
        </div>
      </div>
    </section>



    <!-- Booking Modal -->
    <div 
      v-if="showBookingModal" 
      class="modal-overlay" 
      @click="closeBookingModal">
      <div 
        class="modal-content glass-card" 
        @click.stop>
        <div class="modal-header">
          <h3 class="modal-title">{{ modalTitle }}</h3>
          <button 
            @click="closeBookingModal" 
            class="modal-close"
            aria-label="关闭">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
            </div>
        
        <form class="booking-form" @submit.prevent="submitBookingForm">
          <div class="form-row">
            <div class="form-group">
              <label for="booking-firstname">姓 *</label>
              <input 
                type="text" 
                id="booking-firstname" 
                v-model="bookingForm.firstname" 
                required 
                placeholder="请输入您的姓"
                class="form-input"
                :class="{ 'error': bookingErrors.firstname }">
              <div v-if="bookingErrors.firstname" class="error-message">{{ bookingErrors.firstname }}</div>
          </div>
            <div class="form-group">
              <label for="booking-lastname">名 *</label>
              <input 
                type="text" 
                id="booking-lastname" 
                v-model="bookingForm.lastname" 
                required 
                placeholder="请输入您的名"
                class="form-input"
                :class="{ 'error': bookingErrors.lastname }">
              <div v-if="bookingErrors.lastname" class="error-message">{{ bookingErrors.lastname }}</div>
            </div>
        </div>

          <div class="form-row">
            <div class="form-group">
              <label for="booking-email">邮箱 *</label>
              <input 
                type="email" 
                id="booking-email" 
                v-model="bookingForm.email" 
                required 
                placeholder="请输入您的邮箱"
                class="form-input"
                :class="{ 'error': bookingErrors.email }">
              <div v-if="bookingErrors.email" class="error-message">{{ bookingErrors.email }}</div>
              </div>
            <div class="form-group">
              <label for="booking-phone">电话 *</label>
              <input 
                type="tel" 
                id="booking-phone" 
                v-model="bookingForm.phone" 
                required 
                placeholder="请输入您的联系电话"
                class="form-input"
                :class="{ 'error': bookingErrors.phone }">
              <div v-if="bookingErrors.phone" class="error-message">{{ bookingErrors.phone }}</div>
            </div>
            </div>
          
          <div class="form-group">
            <label for="booking-message">试用需求 *</label>
            <textarea 
              id="booking-message" 
              v-model="bookingForm.other" 
              required 
              placeholder="请描述您的试用需求和期望..."
              class="form-textarea"
              :class="{ 'error': bookingErrors.message }"></textarea>
            <div v-if="bookingErrors.message" class="error-message">{{ bookingErrors.message }}</div>
          </div>
          
          <div class="form-group checkbox-group">
            <input type="checkbox" id="booking-agree" v-model="bookingForm.agree" required class="form-checkbox">
            <label for="booking-agree" class="checkbox-label">
              我同意<a href="#" class="form-link">服务条款</a>和<a href="#" class="form-link">隐私政策</a>
            </label>
        </div>
          
          <div v-if="bookingError" class="form-error">
            {{ bookingError }}
      </div>
          
          <div v-if="bookingSuccess" class="form-success">
            {{ bookingSuccess }}
          </div>
          
          <button type="submit" class="btn btn-primary btn-lg form-submit" :disabled="isBookingSubmitting">
            <span v-if="isBookingSubmitting">提交中...</span>
            <span v-else>提交试用申请</span>
          </button>
        </form>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, computed, ref, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import KnowledgeGraphAnimation from '@/components/KnowledgeGraphAnimation.vue'
import { useFloatingOrbs } from '@/composables/useFloatingOrbs.js'
import { sendContactForm, validateContactForm } from '@/services/contact.js'

const { tm, t } = useI18n()
const router = useRouter()

// Handle learn more navigation with language preservation
const goToProductDetail = (cardTitle) => {
  const hash = cardTitle.includes('Living KB') ? '#livingkb-intro' : '#syndata-intro'
  router.push({ 
    path: '/products',
    hash: hash
  })
}

// 初始化浮动小球
const { orbSections, generateOrbs, getOrbStyle } = useFloatingOrbs()

// 模态框状态
const showBookingModal = ref(false)
const modalTitle = ref('')
const isBookingSubmitting = ref(false)
const bookingError = ref('')
const bookingSuccess = ref('')

// 预约表单数据
const bookingForm = ref({
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  other: '',
  agree: false
})

const bookingErrors = ref({})

const heroContent = computed(() => {
  const content = tm('home.hero')
  return content && Object.keys(content).length > 0 ? content : {}
})

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

const marketContent = computed(() => {
  const content = tm('home.market')
  return content && Object.keys(content).length > 0 ? content : {}
})

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

const productsContent = computed(() => {
  const content = tm('home.products')
  return content && Object.keys(content).length > 0 ? content : {}
})

const technologyContent = computed(() => {
  const content = tm('home.technology')
  return content && Object.keys(content).length > 0 ? content : {}
})



const newsContent = computed(() => {
  const content = tm('home.news')
  return content && Object.keys(content).length > 0 ? content : {}
})

// 复制新闻数据用于无缝滚动
const duplicatedNews = computed(() => {
  if (!newsContent.value.items) return []
  const items = newsContent.value.items.map((item, index) => ({ ...item, index }))
  return [...items, ...items] // 复制一份用于无缝循环
})

// 新闻滚动相关
const newsTrack = ref(null)
let scrollTimer = null
const scrollSpeed = 0.5 // 滚动速度
let currentScroll = 0
let isScrollPaused = false

// 自动滚动函数
const autoScroll = () => {
  if (!newsTrack.value || isScrollPaused) return
  
  currentScroll += scrollSpeed
  const cardWidth = 344 // 卡片宽度320 + 间距24
  const maxScroll = (newsContent.value.items?.length || 0) * cardWidth
  
  if (currentScroll >= maxScroll) {
    currentScroll = 0
  }
  
  newsTrack.value.style.transform = `translateX(-${currentScroll}px)`
  requestAnimationFrame(autoScroll)
}

// 暂停滚动
const pauseScroll = () => {
  isScrollPaused = true
}

// 恢复滚动
const resumeScroll = () => {
  isScrollPaused = false
  autoScroll() // 重新启动滚动动画
}

// 处理鼠标滚轮事件
const handleWheel = (event) => {
  event.preventDefault()
  if (!newsTrack.value) return
  
  currentScroll += event.deltaY * 0.5
  const cardWidth = 344
  const maxScroll = (newsContent.value.items?.length || 0) * cardWidth
  
  if (currentScroll < 0) currentScroll = maxScroll - cardWidth
  if (currentScroll >= maxScroll) currentScroll = 0
  
  newsTrack.value.style.transform = `translateX(-${currentScroll}px)`
}

// 获取标签样式类
const getTagClass = (tag) => {
  return tag === 'DataArc观点' ? 'tag-dataarc' : 'tag-authority'
}



// 定义标题区域ID
const sectionIds = ['hero', 'market', 'products', 'tech', 'news']

onMounted(() => {
  // 页面加载后生成随机小球
  generateOrbs(sectionIds)
  
  // 启动自动滚动
  nextTick(() => {
    autoScroll()
  })
})

onBeforeUnmount(() => {
  isScrollPaused = true
})

// 鼠标互动效果
const handleMouseMove = (event) => {
  console.log('鼠标进入标题区域！')
  const container = event.currentTarget
  const orbs = container.querySelectorAll('.orb')

  console.log(`找到 ${orbs.length} 个小球`)

  orbs.forEach((orb) => {
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

// 模态框方法
const openBookingModal = (productName) => {
  modalTitle.value = `${productName} - 试用申请`
  showBookingModal.value = true
  resetBookingForm()
}

const closeBookingModal = () => {
  showBookingModal.value = false
  resetBookingForm()
}

const resetBookingForm = () => {
  bookingForm.value = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    other: '',
    agree: false
  }
  bookingErrors.value = {}
  bookingError.value = ''
  bookingSuccess.value = ''
}

const submitBookingForm = async () => {
  // 清除之前的错误
  bookingErrors.value = {}
  bookingError.value = ''
  bookingSuccess.value = ''

  // 验证表单
  const validation = validateContactForm(bookingForm.value)
  if (!validation.isValid) {
    bookingErrors.value = validation.errors
    bookingError.value = '请检查表单信息'
    return
  }

  if (!bookingForm.value.agree) {
    bookingError.value = '请先同意服务条款和隐私政策'
    return
  }

  try {
    isBookingSubmitting.value = true
    
    // 发送到飞书
    const result = await sendContactForm({
      firstname: bookingForm.value.firstname.trim(),
      lastname: bookingForm.value.lastname.trim(),
      email: bookingForm.value.email.trim(),
      phone: bookingForm.value.phone.trim(),
      other: `【${modalTitle.value}】${bookingForm.value.other.trim()}`
    })

    if (result.success) {
      bookingSuccess.value = '申请提交成功！我们将尽快与您联系。'
      
      // 3秒后关闭模态框
      setTimeout(() => {
        closeBookingModal()
      }, 3000)
    } else {
      bookingError.value = result.error || '提交失败，请稍后重试'
    }
  } catch (error) {
    console.error('Submit booking error:', error)
    bookingError.value = '网络错误，请稍后重试'
  } finally {
    isBookingSubmitting.value = false
  }
}


</script>

<style scoped>
.home{
  overflow-x: hidden;
}
/* ===== Hero Section ===== */
.hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  overflow-y: visible;
  padding: var(--space-12) 0;
  background: var(--bg-secondary);
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
}


/* ===== Market Opportunity Section ===== */
.market-opportunity {
  padding: var(--space-32) 0;
  background: #000000;
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

  0%,
  100% {
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

  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
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
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  align-items: flex-start;
  text-align: left;
  width: 100%;
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
  overflow: hidden;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

.visual-container {
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 480px;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
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

  0%,
  100% {
    transform: scale(1);
    opacity: 0.5;
  }

  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
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
  from {
    opacity: 0.5;
    transform: scale(1);
  }

  to {
    opacity: 1;
    transform: scale(1.1);
  }
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
  padding: var(--space-20) 0 var(--space-16) 0;
  background: #000000;
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



/* ===== News Section ===== */
.news {
  padding: var(--space-32) 0;
  background: var(--bg-secondary);
  position: relative;
}

.news::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
}

.news h2 {
  text-align: center;
  margin-bottom: var(--space-16);
}

/* 新闻滚动容器 */
.news-scroll-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-top: var(--space-8);
}

.news-track {
  display: flex;
  gap: var(--space-6);
  transition: transform 0.3s ease;
  will-change: transform;
}

.news-card {
  background: var(--bg-primary);
  border: 1px solid var(--neutral-200);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--duration-normal) var(--ease-out);
  text-decoration: none;
  color: inherit;
  display: block;
  flex-shrink: 0;
  width: 320px;
  height: 280px;
}

.news-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-medium);
}

.news-image {
  height: 160px;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-tertiary);
  font-size: var(--font-sm);
  position: relative;
}

.news-tag {
  position: absolute;
  top: var(--space-3);
  left: var(--space-3);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--font-xs);
  font-weight: var(--font-weight-medium);
  z-index: 10;
}

.tag-dataarc {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.tag-authority {
  background: linear-gradient(135deg, #f093fb, #f5576c);
  color: white;
}

.news-content {
  padding: var(--space-5);
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.news-title {
  font-size: var(--font-base);
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: var(--space-2);
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

@media screen and (max-width: 768px) {
  .home .hero .hero-content-wrapper {
    display: grid !important;
    grid-template-columns: 1fr !important;
    gap: var(--space-8) !important;
  }

  .home .hero .hero-text {
    order: 1 !important;
    text-align: center !important;
    align-items: center !important;
  }

  .home .hero .hero-text .badge-bilingual {
    margin: 0 auto !important;
    display: flex !important;
    justify-content: center !important;
  }

  .home .hero .hero-visual {
    order: 2 !important;
    padding: 0 var(--space-4) !important;
  }

  .home .hero .hero-visual .visual-container {
    height: 350px !important;
  }

  /* 确保KnowledgeGraphAnimation组件不超出容器 */
  .home .hero .hero-visual .visual-container > * {
    width: 100% !important;
    max-width: 100% !important;
    overflow: hidden !important;
  }

  .home .hero .hero-actions {
    display: flex !important;
    flex-direction: row !important;
    gap: var(--space-3) !important;
    width: 100% !important;
  }

  .home .hero .hero-actions .btn {
    flex: 1 !important;
    justify-content: center !important;
  }

  .hero {
    min-height: auto;
    padding: var(--space-20) 0;
  }

  .hero-title {
    font-size: var(--font-4xl);
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

@media screen and (max-width: 480px) {
  .home .hero .hero-content-wrapper {
    display: grid !important;
    grid-template-columns: 1fr !important;
    gap: var(--space-6) !important;
    padding: 0 var(--space-2) !important;
  }

  .home .hero .hero-text {
    order: 1 !important;
    text-align: center !important;
    align-items: center !important;
  }

  .home .hero .hero-text .badge-bilingual {
    margin: 0 auto !important;
    display: flex !important;
    justify-content: center !important;
    padding: var(--space-2) var(--space-3) !important;
  }

  .home .hero .hero-visual {
    order: 2 !important;
    padding: 0 var(--space-2) !important;
  }

  .home .hero .hero-visual .visual-container {
    height: 280px !important;
  }

  /* 确保KnowledgeGraphAnimation组件不超出容器 */
  .home .hero .hero-visual .visual-container > * {
    width: 100% !important;
    max-width: 100% !important;
    overflow: hidden !important;
  }

  .home .hero .hero-actions {
    display: flex !important;
    flex-direction: row !important;
    gap: var(--space-2) !important;
    width: 100% !important;
  }

  .home .hero .hero-actions .btn {
    flex: 1 !important;
    justify-content: center !important;
    padding: var(--space-3) var(--space-2) !important;
    font-size: var(--font-xs) !important;
  }

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
  .graph-metrics {
    grid-template-columns: 1fr;
  }
  
  .news-card {
    width: 280px;
    height: 240px;
  }
  
  .news-image {
    height: 140px;
  }
  
  .news-content {
    height: 100px;
    padding: var(--space-4);
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

.tech-card:nth-child(1) {
  animation-delay: 0.1s;
}

.tech-card:nth-child(2) {
  animation-delay: 0.2s;
}

.tech-card:nth-child(3) {
  animation-delay: 0.3s;
}

.tech-card:nth-child(4) {
  animation-delay: 0.4s;
}

.tech-card:nth-child(5) {
  animation-delay: 0.5s;
}

.tech-card:nth-child(6) {
  animation-delay: 0.6s;
}

.metric-card {
  animation: fadeInScale 0.6s var(--ease-out);
}

.metric-card:nth-child(1) {
  animation-delay: 0.1s;
}

.metric-card:nth-child(2) {
  animation-delay: 0.2s;
}

.metric-card:nth-child(3) {
  animation-delay: 0.3s;
}

.metric-card:nth-child(4) {
  animation-delay: 0.4s;
}

.news-card {
  animation: fadeInUp 0.6s var(--ease-out);
}

.news-card:nth-child(1) {
  animation-delay: 0.1s;
}

.news-card:nth-child(2) {
  animation-delay: 0.2s;
}

.news-card:nth-child(3) {
  animation-delay: 0.3s;
}

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
  margin-top: var(--space-12);
  display: flex;
  flex-direction: column;
  gap: var(--space-10);
}

/* 核心基础：语境图谱 */
.core-foundation {
  display: flex;
  justify-content: center;
  margin-bottom: var(--space-6);
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
  gap: var(--space-12);
  position: relative;
}

/* 分支区域 */
.branch-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
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
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: var(--space-4);
  position: relative;
  backdrop-filter: blur(16px);
  transition: all 0.3s ease;
  flex: 1;
  min-width: 0;
}

.sequential-flow .tech-item {
  width: 280px;
  flex: none;
}

.tech-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
}

.tech-item:hover {
  transform: translateY(-2px);
  border-color: rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.05);
}

.tech-item:hover::before {
  background: rgba(255, 255, 255, 0.4);
}



.tech-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.tech-icon-img {
  width: 32px;
  height: 32px;
  opacity: 0.8;
  filter: 
    drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))
    drop-shadow(0 0 16px rgba(255, 255, 255, 0.3));
  transition: all 0.3s ease;
}

.title-stacked-new {
  margin: 0;
  flex: 1;
}

.title-stacked-new .title-main {
  font-size: 1.4em !important;
  font-weight: 200 !important;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.3;
  letter-spacing: 0.02em;
  text-align: left;
  position: relative;
}

.title-stacked-new .title-main::after {
  content: '→';
  margin-left: var(--space-2);
  font-weight: 100;
  font-size: 0.9em;
  color: rgba(255, 255, 255, 0.6);
  transition: all 0.3s ease;
}



.tech-content {
  text-align: right;
}

.tech-desc-main {
  font-size: var(--font-sm);
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.65);
  font-weight: 400;
  letter-spacing: 0.01em;
  text-align: right;
}





.tech-item:hover .title-main {
  color: rgba(255, 255, 255, 1);
  font-weight: 400 !important;
}



.icon-glow {
  background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
  opacity: 0.3;
}

.tech-item:hover .icon-glow {
  background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, transparent 70%);
  opacity: 0.6;
}

.tech-item:hover .title-main::after {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 300;
  transform: translateX(4px);
}

.tech-item:hover .tech-icon-img {
  opacity: 1;
  filter: 
    drop-shadow(0 0 12px rgba(255, 255, 255, 0.8))
    drop-shadow(0 0 24px rgba(255, 255, 255, 0.5))
    drop-shadow(0 0 36px rgba(255, 255, 255, 0.2));
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

/* 连接指示器 */
.connection-indicators {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: var(--space-0) 0;
  gap: var(--space-32);
}

.connection-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.connection-indicator.left {
  transform: translateX(var(--space-8));
}

.connection-indicator.right {
  transform: translateX(calc(-1 * var(--space-8)));
}

.connection-arrow {
  font-size: var(--font-2xl);
  color: var(--text-primary);
  margin-bottom: var(--space-1);
}

.connection-label {
  font-size: var(--font-sm);
  color: var(--text-secondary);
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

  .tech-item::before {
    display: none;
  }

  .tech-title {
    gap: var(--space-2);
    margin-bottom: var(--space-3);
    padding-bottom: var(--space-2);
  }

  .icon-wrapper {
    width: 32px;
    height: 32px;
  }

  .tech-icon-img {
    width: 20px;
    height: 20px;
  }

  .title-main {
    font-size: var(--font-base);
  }

  .tech-desc-main {
    font-size: var(--font-xs);
  }

  .branch-title {
    font-size: var(--font-xl);
  }
}


/* ===== Product Actions ===== */
.product-actions {
  display: flex;
  gap: var(--space-3);
  margin-top: var(--space-6);
  padding-top: var(--space-6);
  border-top: 1px solid var(--glass-border);
}

.product-actions .btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-medium);
  transition: all var(--duration-normal) var(--ease-out);
  border-radius: var(--radius-full);
  padding: var(--space-2) var(--space-4);
}

.product-actions .btn-primary {
  background: rgba(0, 212, 255, 0.6);
  color: var(--text-white);
}

.product-actions .btn-primary:hover {
  background: rgba(0, 212, 255, 0.8);
}

/* ===== Modal Styles ===== */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
  animation: fadeIn 0.3s var(--ease-out);
}

.modal-content {
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: slideInUp 0.3s var(--ease-out);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-6);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--glass-border);
}

.modal-title {
  font-size: var(--font-xl);
  font-weight: var(--font-weight-bold);
  color: var(--text-primary);
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: var(--space-2);
  border-radius: var(--radius-md);
  transition: all var(--duration-normal) var(--ease-out);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-close:hover {
  color: var(--text-primary);
  background: var(--glass-bg);
}

/* ===== Booking Form ===== */
.booking-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.form-group label {
  font-size: var(--font-sm);
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
}

.form-input,
.form-textarea {
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  background: var(--glass-bg);
  color: var(--text-primary);
  font-size: var(--font-sm);
  transition: all var(--duration-normal) var(--ease-out);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
}

.form-input.error,
.form-textarea.error {
  border-color: #ef4444;
}

.error-message {
  font-size: var(--font-xs);
  color: #ef4444;
  margin-top: var(--space-1);
}

.checkbox-group {
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
}

.form-checkbox {
  margin-top: 2px;
}

.checkbox-label {
  font-size: var(--font-sm);
  color: var(--text-secondary);
  line-height: 1.5;
}

.form-link {
  color: var(--primary-color);
  text-decoration: none;
}

.form-link:hover {
  text-decoration: underline;
}

.form-error {
  padding: var(--space-3);
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: var(--radius-md);
  color: #ef4444;
  font-size: var(--font-sm);
}

.form-success {
  padding: var(--space-3);
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: var(--radius-md);
  color: #22c55e;
  font-size: var(--font-sm);
}

.form-submit {
  width: 100%;
  margin-top: var(--space-2);
}

.form-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* ===== Animations ===== */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInUp {
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

/* ===== Mobile Responsive ===== */
@media (max-width: 768px) {
  .product-actions {
    flex-direction: column;
    gap: var(--space-3);
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
  
  .modal-content {
    width: 95%;
    margin: var(--space-4);
  }
  
  .modal-title {
    font-size: var(--font-lg);
  }
}

@media (max-width: 480px) {
  .product-actions {
    padding-top: var(--space-4);
    margin-top: var(--space-4);
  }
  
  .product-actions .btn {
    padding: var(--space-2) var(--space-3);
    font-size: var(--font-sm);
  }
}
</style>
