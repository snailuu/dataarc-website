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
          <div class="hero-badge">
            <span class="badge-text">成功案例展示</span>
          </div>
          <h1 class="hero-title">
            <span class="title-line">客户案例</span>
            <span class="title-highlight">创新应用</span>
          </h1>
          <p class="hero-description">
            DataArc 已成功为多家知名企业提供AI智能化解决方案，
            覆盖金融、教育、制造、投资等多个行业领域。
          </p>
        </div>
      </div>
    </section>

    <!-- Cases Section -->
    <section class="cases-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">成功案例</h2>
          <p class="section-subtitle">
            从概念到实施，我们与客户携手共创智能化未来
          </p>
        </div>

        <div class="cases-grid">
          <div 
            v-for="(caseItem, index) in cases" 
            :key="caseItem.id"
            class="case-card glass-card"
            :class="`case-${index + 1}`"
          >
            <div class="case-header">
              <div class="case-icon">
                <div class="icon-placeholder">【需要图片：案例页-{{ caseItem.name }}-logo.png - 客户公司logo】</div>
              </div>
              <div class="case-category">{{ caseItem.category }}</div>
            </div>
            
            <div class="case-content">
              <h3 class="case-title">{{ caseItem.name }}</h3>
              <p class="case-description">{{ caseItem.description }}</p>
              
              <div class="case-highlights">
                <div class="highlight-item" v-for="highlight in caseItem.highlights" :key="highlight">
                  <div class="highlight-icon">
                    <svg viewBox="0 0 20 20" class="check-icon">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </div>
                  <span>{{ highlight }}</span>
                </div>
              </div>
            </div>

            <div class="case-footer">
              <div class="case-results">
                <div class="result-item">
                  <span class="result-label">效率提升</span>
                  <span class="result-value">{{ caseItem.efficiency }}</span>
                </div>
                <div class="result-item">
                  <span class="result-label">成本降低</span>
                  <span class="result-value">{{ caseItem.cost }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats Section -->
        <div class="stats-section">
          <div class="stats-grid">
            <div class="stat-card glass-card">
              <div class="stat-number">50+</div>
              <div class="stat-label">成功项目</div>
            </div>
            <div class="stat-card glass-card">
              <div class="stat-number">95%</div>
              <div class="stat-label">客户满意度</div>
            </div>
            <div class="stat-card glass-card">
              <div class="stat-number">30+</div>
              <div class="stat-label">合作企业</div>
            </div>
            <div class="stat-card glass-card">
              <div class="stat-number">7</div>
              <div class="stat-label">行业覆盖</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Customer Cases Section -->
    <section class="detailed-cases">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">重点客户案例</h2>
          <p class="section-subtitle">深度解析DataArc在各行业的创新应用与显著成效</p>
        </div>

        <!-- Insurance Case -->
        <div class="detailed-case">
          <div class="case-overview">
            <div class="case-info">
              <h3 class="case-title">保险行业 - AI智能客服</h3>
              <div class="case-tags">
                <span class="tag">保险行业</span>
                <span class="tag">智能客服</span>
                <span class="tag">合成数据</span>
              </div>
              <p class="case-description">
                为大型保险公司提供AI智能客服解决方案，通过合成数据技术显著提升客服系统的对话质量和处理效率。
              </p>
            </div>
            <div class="case-visual">
              <div class="case-placeholder">【需要图片：保险行业智能客服案例总览】</div>
            </div>
          </div>
          
          <div class="case-challenge">
            <h4>业务挑战</h4>
            <p>提升AI保险客服的对话质量，解决长尾问题和反例问题，降低人工转接率</p>
          </div>
          
          <div class="case-solution">
            <h4>DataArc解决方案</h4>
            <p>通过合成数据技术，为AI客服模型提供高质量训练数据，优化罕见问题和长尾知识的处理能力</p>
          </div>
          
          <div class="case-results">
            <h4>业务效果</h4>
            <div class="results-grid">
              <div class="result-item">
                <div class="result-icon">【需要图片：良品率提升图标】</div>
                <div class="result-stat">
                  <span class="result-number">+15.5%</span>
                  <span class="result-label">良品率提升</span>
                </div>
              </div>
              <div class="result-item">
                <div class="result-icon">【需要图片：长尾问题图标】</div>
                <div class="result-stat">
                  <span class="result-number">90%</span>
                  <span class="result-label">长尾问题覆盖</span>
                </div>
              </div>
              <div class="result-item">
                <div class="result-icon">【需要图片：转接率图标】</div>
                <div class="result-stat">
                  <span class="result-number">-60%</span>
                  <span class="result-label">人工转接率降低</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Finance Case -->
        <div class="detailed-case">
          <div class="case-overview">
            <div class="case-info">
              <h3 class="case-title">金融领域 - IDEA FinAI经济超脑</h3>
              <div class="case-tags">
                <span class="tag">金融科技</span>
                <span class="tag">经济分析</span>
                <span class="tag">智能投研</span>
              </div>
              <p class="case-description">
                与IDEA研究院合作开发FinAI经济超脑，通过语境图谱技术提升金融数据分析和投研能力。
              </p>
            </div>
            <div class="case-visual">
              <div class="case-placeholder">【需要图片：金融IDEA FinAI经济超脑】</div>
            </div>
          </div>
          
          <div class="case-challenge">
            <h4>业务挑战</h4>
            <p>构建企业知识图谱，提升竞对分析与行业监控的效率，实现跨文档复杂推理</p>
          </div>
          
          <div class="case-solution">
            <h4>DataArc解决方案</h4>
            <p>通过语境图谱技术，实现金融行业企业知识的结构化管理，自动化采集海量数据并识别行业属性</p>
          </div>
          
          <div class="case-results">
            <h4>业务效果</h4>
            <div class="results-grid">
              <div class="result-item">
                <div class="result-icon">【需要图片：数据增量图标】</div>
                <div class="result-stat">
                  <span class="result-number">20.3倍</span>
                  <span class="result-label">研报数据增量</span>
                </div>
              </div>
              <div class="result-item">
                <div class="result-icon">【需要图片：推理准确率图标】</div>
                <div class="result-stat">
                  <span class="result-number">+21.2%</span>
                  <span class="result-label">推理准确率提升</span>
                </div>
              </div>
              <div class="result-item">
                <div class="result-icon">【需要图片：识别准确率图标】</div>
                <div class="result-stat">
                  <span class="result-number">80%+</span>
                  <span class="result-label">企业属性识别准确率</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Education Case -->
        <div class="detailed-case">
          <div class="case-overview">
            <div class="case-info">
              <h3 class="case-title">教培领域 - 上海高金金融知识大模型</h3>
              <div class="case-tags">
                <span class="tag">教育培训</span>
                <span class="tag">金融知识</span>
                <span class="tag">考试系统</span>
              </div>
              <p class="case-description">
                为上海高金提供金融知识大模型，通过合成数据技术生成50万金融问答对，打造超越GPT-4的专业模型。
              </p>
            </div>
            <div class="case-visual">
              <div class="case-placeholder">【需要图片：上海高金金融知识大模型】</div>
            </div>
          </div>
          
          <div class="case-challenge">
            <h4>业务挑战</h4>
            <p>解决金融大模型的题库不足问题，提升考试通过率，打造专业级金融知识AI</p>
          </div>
          
          <div class="case-solution">
            <h4>DataArc解决方案</h4>
            <p>通过合成数据技术生成大量高质量金融问答对，训练百亿参数级的金融知识大模型</p>
          </div>
          
          <div class="case-results">
            <h4>业务效果</h4>
            <div class="results-grid">
              <div class="result-item">
                <div class="result-icon">【需要图片：题库数量图标】</div>
                <div class="result-stat">
                  <span class="result-number">50万</span>
                  <span class="result-label">金融问答对</span>
                </div>
              </div>
              <div class="result-item">
                <div class="result-icon">【需要图片：考试通过图标】</div>
                <div class="result-stat">
                  <span class="result-number">CPA+CFA</span>
                  <span class="result-label">考试通过</span>
                </div>
              </div>
              <div class="result-item">
                <div class="result-icon">【需要图片：性能超越图标】</div>
                <div class="result-stat">
                  <span class="result-number">超越GPT-4</span>
                  <span class="result-label">模型效果</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industry Benchmarks Section -->
    <section class="industry-benchmarks">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">行业标杆对比</h2>
          <p class="section-subtitle">DataArc与国际领先方案的对比优势</p>
        </div>
        
        <div class="benchmarks-grid">
          <div class="benchmark-card">
            <h3>Writer模型对比</h3>
            <div class="benchmark-content">
              <div class="benchmark-stat">
                <span class="stat-label">传统训练成本</span>
                <span class="stat-value">70万美元</span>
              </div>
              <div class="benchmark-stat">
                <span class="stat-label">DataArc方案</span>
                <span class="stat-value highlight">显著降低</span>
              </div>
            </div>
            <div class="benchmark-improvement">
              工具调用准确率提升19.3%
            </div>
          </div>
          
          <div class="benchmark-card">
            <h3>数据合规风险</h3>
            <div class="benchmark-content">
              <div class="benchmark-stat">
                <span class="stat-label">数据违规成本</span>
                <span class="stat-value">1480万美元</span>
              </div>
              <div class="benchmark-stat">
                <span class="stat-label">DataArc保障</span>
                <span class="stat-value highlight">零风险</span>
              </div>
            </div>
            <div class="benchmark-improvement">
              通过SoE技术完全规避数据泄露风险
            </div>
          </div>
          
          <div class="benchmark-card">
            <h3>Gretel对比优势</h3>
            <div class="benchmark-content">
              <div class="benchmark-stat">
                <span class="stat-label">传统合成数据</span>
                <span class="stat-value">基础功能</span>
              </div>
              <div class="benchmark-stat">
                <span class="stat-label">DataArc SoG</span>
                <span class="stat-value highlight">智能图谱</span>
              </div>
            </div>
            <div class="benchmark-improvement">
              基于知识图谱的深度合成技术
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

const cases = [
  {
    id: 1,
    name: '阿里云项目',
    category: '云计算',
    description: '为阿里云提供智能数据分析解决方案，优化云服务性能监控与预测分析能力',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    highlights: [
      '实时数据处理能力提升300%',
      '预测准确率达到95%',
      '降低运维成本40%'
    ],
    efficiency: '+300%',
    cost: '-40%'
  },
  {
    id: 2,
    name: '华图在线',
    category: '在线教育',
    description: '教育行业AI智能化应用，个性化学习推荐系统和智能题库生成',
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    highlights: [
      '学习效率提升250%',
      '个性化推荐准确率90%',
      '题库生成效率提升500%'
    ],
    efficiency: '+250%',
    cost: '-35%'
  },
  {
    id: 3,
    name: '东方富海',
    category: '金融投资',
    description: '金融投资智能决策支持系统，风险评估与投资组合优化',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    highlights: [
      '风险识别准确率98%',
      '投资回报率提升180%',
      '决策时间缩短70%'
    ],
    efficiency: '+180%',
    cost: '-50%'
  },
  {
    id: 4,
    name: 'TCL',
    category: '智能制造',
    description: '制造业智能化转型，生产流程优化与质量控制系统',
    gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    highlights: [
      '生产效率提升200%',
      '产品质量提升30%',
      '设备故障率降低60%'
    ],
    efficiency: '+200%',
    cost: '-30%'
  },
  {
    id: 5,
    name: '微软小冰',
    category: '人工智能',
    description: 'AI对话系统优化，自然语言处理与情感计算技术提升',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    highlights: [
      '对话准确率提升280%',
      '情感识别准确率95%',
      '响应速度提升400%'
    ],
    efficiency: '+280%',
    cost: '-25%'
  },
  {
    id: 6,
    name: '深智城项目',
    category: '智慧城市',
    description: '智慧城市建设解决方案，城市数据分析与智能决策系统',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    highlights: [
      '城市运营效率提升150%',
      '资源配置优化80%',
      '民生服务满意度提升90%'
    ],
    efficiency: '+150%',
    cost: '-45%'
  }
]
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

.case-card.case-1 { animation-delay: 0.1s; }
.case-card.case-2 { animation-delay: 0.2s; }
.case-card.case-3 { animation-delay: 0.3s; }
.case-card.case-4 { animation-delay: 0.4s; }
.case-card.case-5 { animation-delay: 0.5s; }
.case-card.case-6 { animation-delay: 0.6s; }

.stat-card {
  animation: fadeInScale 0.6s var(--ease-out);
}

.stat-card:nth-child(1) { animation-delay: 0.1s; }
.stat-card:nth-child(2) { animation-delay: 0.2s; }
.stat-card:nth-child(3) { animation-delay: 0.3s; }
.stat-card:nth-child(4) { animation-delay: 0.4s; }

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
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* ===== Detailed Cases Section ===== */
.detailed-cases {
  padding: var(--space-32) 0;
  background: var(--bg-primary);
}

.detailed-case {
  margin-bottom: var(--space-20);
  padding: var(--space-12);
  background: var(--glass-bg);
  border-radius: var(--radius-2xl);
  backdrop-filter: var(--glass-backdrop);
  border: 1px solid var(--glass-border);
}

.case-overview {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-8);
  margin-bottom: var(--space-8);
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-4);
  margin-top: var(--space-4);
}

.result-item {
  text-align: center;
  padding: var(--space-4);
  background: var(--glass-bg);
  border-radius: var(--radius-lg);
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
  padding: var(--space-3);
  background: var(--glass-bg);
  border-radius: var(--radius-lg);
  color: var(--primary-color);
  font-weight: var(--font-weight-medium);
  margin-top: var(--space-4);
}
</style> 