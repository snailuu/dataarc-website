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
            <div class="hero-badge">
              <span class="badge-text font-medium text-sm tracking-wide">AI合规管理</span>
              <span class="badge-divider">•</span>
              <span class="badge-text font-medium text-sm tracking-wide">智能化技术创新</span>
            </div>
                          <h1 class="hero-title">
                <div class="title-line">
                  <span class="main-title">合成数据</span>
                  <span class="title-en">Synthetic Data</span>
                </div>
                <div class="title-line">
                  <span class="sub-title">将企业知识转化为</span>
                </div>
                <div class="title-line">
                  <span class="highlight-title">AI 智能</span>
                  <span class="title-en">Artificial Intelligence</span>
                </div>
              </h1>
                          <div class="hero-description">
                <p class="main-desc">
                  通过合成数据驱动的智能体为核心，DataArc 提供多场景下的AI应用解决方案，涵盖金融、风险控制、智能投研、经济运营分析等多个领域。
                </p>
              </div>
              <div class="hero-actions">
                <a href="#" class="btn btn-primary btn-lg">立即登录</a>
                <a href="#contact" class="btn btn-secondary btn-lg">联系我们</a>
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

    <!-- Products Section -->
    <section class="products">
      <div class="container">
        <div class="section-header">
          <div class="section-title-group">
            <h2 class="section-title text-5xl font-extralight tracking-tight">产品方案</h2>
            <p class="section-title-en text-base font-extralight tracking-wider opacity-50">Product Solutions</p>
          </div>
          <p class="section-subtitle text-lg font-light text-tertiary leading-relaxed">
            通过合成数据技术，解决大规模智能训练中的数据稀缺与质量问题，为各行业提供高质量、低成本的数据服务。
          </p>
        </div>
        
        <div class="products-grid">
          <div class="product-card glass-card">
            <div class="product-badge-dual">
              <span class="badge-zh">合成数据作为能力</span>
              <span class="badge-en">Synthetic Data as Capability</span>
            </div>
            <div class="product-header">
              <div class="product-visual">
                <img src="/images/icons/首页面-二屏-lkb图标.png" alt="Living KB 数据图表" class="product-icon">
                <div class="icon-glow"></div>
              </div>
              <div class="product-content">
                <h3 class="text-2xl font-medium text-primary">DataArc Living KB</h3>
                <div class="product-desc-dual">
                  <p class="desc-zh text-base font-light text-secondary">基于合成数据预设一批能力智能体&轻量化使用</p>
                  <p class="desc-en text-sm font-extralight text-quaternary opacity-75">Pre-configured intelligent agents based on synthetic data for lightweight usage</p>
                </div>
              </div>
            </div>
            
            <div class="product-features">
              <div class="feature-item">
                <div class="feature-check">
                  <svg viewBox="0 0 20 20" class="check-icon">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                </div>
                <span>高效整合企业多源异构数据,让AI可读</span>
              </div>
              <div class="feature-item">
                <div class="feature-check">
                  <svg viewBox="0 0 20 20" class="check-icon">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                </div>
                <span>支持三元组与语境理解</span>
              </div>
              <div class="feature-item">
                <div class="feature-check">
                  <svg viewBox="0 0 20 20" class="check-icon">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                </div>
                <span>高效调用多种工具，在图上思考</span>
              </div>
            </div>
          </div>

          <div class="product-card glass-card">
            <div class="product-badge-dual">
              <span class="badge-zh">合成数据作为产品</span>
              <span class="badge-en">Synthetic Data as Product</span>
            </div>
            <div class="product-header">
              <div class="product-visual">
                <img src="/images/icons/首页面-二屏-合成数据图标.png" alt="SynData Platform 智能平台" class="product-icon">
                <div class="icon-glow"></div>
              </div>
              <div class="product-content">
                <h3 class="text-2xl font-medium text-primary">DataArc SynData Platform</h3>
                <div class="product-desc-dual">
                  <p class="desc-zh text-base font-light text-secondary">打造企业专家Agent/个人Agent</p>
                  <p class="desc-en text-sm font-extralight text-quaternary opacity-75">Build enterprise expert agents and personal agents</p>
                </div>
              </div>
            </div>
            
            <div class="product-features">
              <div class="feature-item">
                <div class="feature-check">
                  <svg viewBox="0 0 20 20" class="check-icon">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                </div>
                <span>持续合成数据，让Living KB可更新</span>
              </div>
              <div class="feature-item">
                <div class="feature-check">
                  <svg viewBox="0 0 20 20" class="check-icon">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                </div>
                <span>大模型自动评估反馈，强化学习，迭代进化</span>
              </div>
              <div class="feature-item">
                <div class="feature-check">
                  <svg viewBox="0 0 20 20" class="check-icon">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                </div>
                <span>数据加密训练，规避隐私风险</span>
              </div>
              <div class="feature-item">
                <div class="feature-check">
                  <svg viewBox="0 0 20 20" class="check-icon">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                </div>
                <span>自研合成数据核心模块</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 自研合成数据核心模块 -->
        <div class="core-module">
          <p>自研合成数据核心模块</p>
        </div>
      </div>
    </section>

    <!-- Tech Advantages -->
    <section class="tech-advantages">
      <div class="container">
        <div class="section-title-group text-center">
          <h2 class="section-title text-5xl font-extralight tracking-tight">技术优势</h2>
          <p class="section-title-en text-base font-extralight tracking-wider opacity-50">Technical Advantages</p>
        </div>
        <p class="section-subtitle text-lg font-light text-tertiary leading-relaxed text-center">
          DataArc 自主研发多项合成数据核心技术，覆盖从数据合成到模型训练的全周期，
          助力模型更准确、更高效、更安全。
        </p>
        
        <div class="tech-grid">
          <div class="tech-item">
            <div class="tech-icon-placeholder">【需要图片：首页-技术优势-更懂行.png - 行业专家/大脑图标】</div>
            <div class="tech-title-dual">
              <h4 class="text-xl font-semibold text-primary">更懂行</h4>
              <span class="tech-en text-xs font-light opacity-60">Industry Expert</span>
            </div>
            <p class="text-sm font-normal text-tertiary">SoG提升模型能力 25.4%</p>
          </div>
          
          <div class="tech-item">
            <div class="tech-icon-placeholder">【需要图片：首页-技术优势-更聪明.png - AI芯片/智能图标】</div>
            <div class="tech-title-dual">
              <h4 class="text-xl font-semibold text-primary">更聪明</h4>
              <span class="tech-en text-xs font-light opacity-60">Smarter</span>
            </div>
            <p class="text-sm font-normal text-tertiary">ToG 推理更准，升至 90.2%</p>
          </div>
          
          <div class="tech-item">
            <div class="tech-icon-placeholder">【需要图片：首页-技术优势-更靠谱.png - 安全盾牌/认证图标】</div>
            <div class="tech-title-dual">
              <h4 class="text-xl font-semibold text-primary">更靠谱</h4>
              <span class="tech-en text-xs font-light opacity-60">Reliable</span>
            </div>
            <p class="text-sm font-normal text-tertiary">Judge：降低90%的数据风险</p>
          </div>
          
          <div class="tech-item">
            <div class="tech-icon-placeholder">【需要图片：首页-技术优势-更专业.png - 专业工具/代码图标】</div>
            <div class="tech-title-dual">
              <h4 class="text-xl font-semibold text-primary">更专业</h4>
              <span class="tech-en text-xs font-light opacity-60">Professional</span>
            </div>
            <p class="text-sm font-normal text-tertiary">SQL-R1:数据查询更便捷</p>
          </div>
          
          <div class="tech-item">
            <div class="tech-icon-placeholder">【需要图片：首页-技术优势-更安全.png - 安全锁/防护图标】</div>
            <div class="tech-title-dual">
              <h4 class="text-xl font-semibold text-primary">更安全</h4>
              <span class="tech-en text-xs font-light opacity-60">Secure</span>
            </div>
            <p class="text-sm font-normal text-tertiary">SoE：敏感数据0泄露</p>
          </div>
          
          <div class="tech-item">
            <div class="tech-icon-placeholder">【需要图片：首页-技术优势-更准确.png - 精确目标/准确率图标】</div>
            <div class="tech-title-dual">
              <h4 class="text-xl font-semibold text-primary">更准确</h4>
              <span class="tech-en text-xs font-light opacity-60">Accurate</span>
            </div>
            <p class="text-sm font-normal text-tertiary">RAG：准确率 提升至 92%</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Context Graph -->
    <section class="context-graph">
      <div class="container">
        <h2 class="section-title text-5xl font-extralight tracking-tight text-center">语境图谱: LLM Ready</h2>
        <p class="section-subtitle text-lg font-light text-tertiary leading-relaxed text-center">
          相比传统方案，建图效率提升 218倍，研究准确率提升至 90.2%，
          实战良品率提升至 95%，全面增强问答、洞察与决策能力。
        </p>
        <div class="graph-visual-placeholder">
          【需要图片：首页-语境图谱-可视化图表.png - 知识图谱网络图/数据连接图】
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="news">
      <div class="container">
        <h2 class="section-title text-5xl font-extralight tracking-tight text-center">新闻媒体</h2>
        <p class="section-subtitle text-lg font-light text-tertiary leading-relaxed text-center">以合成数据驱动的智能体为核心，提供多场景 AI 应用方案。</p>
        
        <div class="news-grid">
          <div class="news-card">
            <div class="news-image">
              <div class="news-placeholder">【需要图片：首页-新闻-AI教育趋势.png】</div>
            </div>
            <div class="news-content">
              <h4 class="text-lg font-medium text-primary">AI赋能教育：新趋势与洞察</h4>
              <p class="news-date text-sm font-normal text-quaternary">2024年5月12日</p>
            </div>
          </div>
          
          <div class="news-card">
            <div class="news-image">
              <div class="news-placeholder">【需要图片：首页-新闻-数据安全.png】</div>
            </div>
            <div class="news-content">
              <h4 class="text-lg font-medium text-primary">合成数据保护企业隐私安全</h4>
              <p class="news-date text-sm font-normal text-quaternary">2024年4月28日</p>
            </div>
          </div>
          
          <div class="news-card">
            <div class="news-image">
              <div class="news-placeholder">【需要图片：首页-新闻-行业峰会.png】</div>
            </div>
            <div class="news-content">
              <h4 class="text-lg font-medium text-primary">DataArc亮相AI行业峰会</h4>
              <p class="news-date text-sm font-normal text-quaternary">2024年4月15日</p>
            </div>
          </div>
          
          <div class="news-card">
            <div class="news-image">
              <div class="news-placeholder">【需要图片：首页-新闻-技术创新.png】</div>
            </div>
            <div class="news-content">
              <h4 class="text-lg font-medium text-primary">语境图谱技术重大突破</h4>
              <p class="news-date text-sm font-normal text-quaternary">2024年3月30日</p>
            </div>
          </div>
          
          <div class="news-card">
            <div class="news-image">
              <div class="news-placeholder">【需要图片：首页-新闻-合作伙伴.png】</div>
            </div>
            <div class="news-content">
              <h4 class="text-lg font-medium text-primary">与知名企业达成战略合作</h4>
              <p class="news-date text-sm font-normal text-quaternary">2024年3月20日</p>
            </div>
          </div>
          
          <div class="news-card">
            <div class="news-image">
              <div class="news-placeholder">【需要图片：首页-新闻-产品发布.png】</div>
            </div>
            <div class="news-content">
              <h4 class="text-lg font-medium text-primary">Living KB 2.0正式发布</h4>
              <p class="news-date text-sm font-normal text-quaternary">2024年3月10日</p>
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
import KnowledgeGraphAnimation from '@/components/KnowledgeGraphAnimation.vue'
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
</style> 













 