<template>
  <div class="company-page">
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
            <span class="badge-text">关于DataArc</span>
          </div>
          <h1 class="hero-title">
            <span class="title-line">数创弧光科技</span>
            <span class="title-highlight">智能化未来</span>
          </h1>
          <p class="hero-description">
            专注于人工智能合规管理与智能化技术创新，
            通过合成数据技术推动企业数字化转型。
          </p>
        </div>
      </div>
    </section>

    <!-- Company Introduction -->
    <section class="company-intro">
      <div class="container">
        <div class="intro-content">
          <div class="intro-text">
            <h2 class="section-title">关于 DataArc</h2>
            <p class="intro-description">
              DataArc 数创弧光科技有限公司，成立于2025年1月，是一家专注于人工智能合成数据与智能体技术创新的科技公司。
              公司由沈向洋院士在IDEA研究院推动孵化，致力于通过精准的数据模拟与增强技术，
              解决金融、制造等知识密集型行业在大数据模型训练和应用过程中面临的数据稀缺与高定制成本的难题，
              帮助各行各业实现高效决策与业务优化。
            </p>
            
            <div class="company-stats">
              <div class="stat-item">
                <div class="stat-number">2025</div>
                <div class="stat-label">成立年份</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">50+</div>
                <div class="stat-label">技术专利</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">30+</div>
                <div class="stat-label">合作企业</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">核心团队</h2>
          <p class="section-subtitle">汇聚顶尖人才，打造技术创新团队</p>
        </div>

        <!-- Leadership Team -->
        <div class="leadership-grid">
          <div class="leader-card glass-card">
            <div class="leader-photo">
              <img src="/images/icons/关于我们-团队介绍-cto.png" alt="CTO 徐铖晋博士" class="leader-avatar">
              <div class="photo-overlay">
                <div class="overlay-content">
                  <div class="leader-role">首席技术官</div>
                </div>
              </div>
            </div>
            <div class="leader-info">
              <h3 class="leader-name">徐铖晋 博士</h3>
              <div class="leader-title">CTO · 首席技术官</div>
              <p class="leader-bio">
                负责合成数据项目工程研发、算法创新、及技术路线规划，确保技术的领先性和解决方案的可行性。
              </p>
              <div class="leader-highlights">
                <div class="highlight-tag">德国波恩大学博士</div>
                <div class="highlight-tag">浙大竺可桢本硕</div>
                <div class="highlight-tag">华为天才少年offer</div>
                <div class="highlight-tag">IDEA研究科学家</div>
                <div class="highlight-tag">深圳市特聘专家</div>
              </div>
              <div class="leader-achievements">
                <div class="achievement-item">
                  <span class="achievement-number">50+</span>
                  <span class="achievement-label">顶会论文</span>
                </div>
              </div>
            </div>
          </div>

          <div class="leader-card glass-card">
            <div class="leader-photo">
              <img src="/images/icons/关于我们-团队介绍-ceo.png" alt="CEO 江旭晖博士" class="leader-avatar">
              <div class="photo-overlay">
                <div class="overlay-content">
                  <div class="leader-role">首席执行官</div>
                </div>
              </div>
            </div>
            <div class="leader-info">
              <h3 class="leader-name">江旭晖 博士</h3>
              <div class="leader-title">CEO · 首席执行官</div>
              <p class="leader-bio">
                负责公司战略规划、融资及团队建设，参与技术路线规划、推动公司业务发展和市场落地。
              </p>
              <div class="leader-highlights">
                <div class="highlight-tag">中科院博士</div>
                <div class="highlight-tag">腾讯技术大咖offer</div>
                <div class="highlight-tag">IDEA研究科学家</div>
                <div class="highlight-tag">知识图谱研发负责人</div>
              </div>
              <div class="leader-achievements">
                <div class="achievement-item">
                  <span class="achievement-number">20+</span>
                  <span class="achievement-label">顶会论文</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Team Features -->
        <div class="team-features glass-card">
          <h3 class="features-title">团队技术优势</h3>
          <p class="features-subtitle">合成数据相关技术丰富积累</p>
          
          <div class="features-grid">
            <div class="feature-item">
              <div class="feature-icon-placeholder">【需要图片：关于我们-技术-采样技术.png - 采样/数据收集图标】</div>
              <div class="feature-content">
                <h4>采样技术</h4>
                <p>语境图谱技术</p>
              </div>
            </div>
            
            <div class="feature-item">
              <div class="feature-icon-placeholder">【需要图片：关于我们-技术-合成技术.png - 合成/创造图标】</div>
              <div class="feature-content">
                <h4>合成技术</h4>
                <p>思维图谱（Think-on-Graph）</p>
              </div>
            </div>
            
            <div class="feature-item">
              <div class="feature-icon-placeholder">【需要图片：关于我们-技术-训练技术.png - 训练/机器学习图标】</div>
              <div class="feature-content">
                <h4>训练技术</h4>
                <p>垂域大模型开发</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Other Team Members -->
        <div class="other-members">
          <h3 class="members-title">核心团队成员</h3>
          <div class="members-grid">
            <div class="member-card glass-card">
              <div class="member-icon-placeholder">【需要图片：关于我们-成员-COO.png - COO/运营官图标】</div>
              <div class="member-role">COO</div>
              <div class="member-description">连续创业者，FinTech独角兽公司负责人</div>
            </div>
            
            <div class="member-card glass-card">
              <div class="member-icon-placeholder">【需要图片：关于我们-成员-算法团队.png - 算法/代码图标】</div>
              <div class="member-role">算法核心团队</div>
              <div class="member-description">前科技公司CTO、阿里P8业务负责人</div>
            </div>
            
            <div class="member-card glass-card">
              <div class="member-icon-placeholder">【需要图片：关于我们-成员-投融资BD.png - 投资/商务图标】</div>
              <div class="member-role">投融资负责人&BD</div>
              <div class="member-description">前国内头部VC投资总监</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-content">
          <div class="contact-info">
            <h2 class="section-title">联系我们</h2>
            <p class="contact-description">
              我们期待与您的合作，共同探索AI技术的无限可能。
            </p>
            
            <div class="contact-details">
              <div class="contact-item">
                <div class="contact-icon">
                  <svg viewBox="0 0 24 24" class="icon">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div class="contact-text">
                  <div class="contact-label">地址</div>
                  <div class="contact-value">深圳市南山区科技园</div>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <svg viewBox="0 0 24 24" class="icon">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div class="contact-text">
                  <div class="contact-label">邮箱</div>
                  <div class="contact-value">contact@dataarc.tech</div>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">
                  <svg viewBox="0 0 24 24" class="icon">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div class="contact-text">
                  <div class="contact-label">电话</div>
                  <div class="contact-value">+86 400-123-4567</div>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form-wrapper">
            <form class="contact-form glass-card" @submit.prevent="submitForm">
              <h3 class="form-title">留言咨询</h3>
              
              <div class="form-group">
                <label for="name">姓名 *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required 
                  placeholder="请输入您的姓名"
                  class="form-input"
                >
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="email">邮箱 *</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    required 
                    placeholder="name@example.com"
                    class="form-input"
                  >
                </div>
                <div class="form-group">
                  <label for="phone">电话 *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="form.phone" 
                    required 
                    placeholder="请输入联系电话"
                    class="form-input"
                  >
                </div>
              </div>
              
              <div class="form-group">
                <label for="message">咨询内容 *</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  required 
                  placeholder="请简单说明您想咨询的内容和目标"
                  class="form-textarea"
                ></textarea>
              </div>
              
              <div class="form-group checkbox-group">
                <input type="checkbox" id="agree" v-model="form.agree" required class="form-checkbox">
                <label for="agree" class="checkbox-label">
                  我已经阅读并同意<a href="#" class="form-link">服务条款</a>和<a href="#" class="form-link">隐私声明</a>
                </label>
              </div>
              
              <button type="submit" class="btn btn-primary btn-lg form-submit">
                提交咨询
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Details Section -->
    <section class="company-details">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">公司基本信息</h2>
          <p class="section-subtitle">数创弧光(深圳)科技有限公司详细信息</p>
        </div>
        
        <div class="details-grid">
          <div class="detail-card">
            <div class="detail-icon">【需要图片：公司标识图标】</div>
            <h3>公司全称</h3>
            <p>数创弧光（深圳）科技有限公司</p>
            <p class="detail-en">DataArc Technology Co., Ltd.</p>
          </div>
          
          <div class="detail-card">
            <div class="detail-icon">【需要图片：成立时间图标】</div>
            <h3>成立时间</h3>
            <p>2025年1月</p>
            <p class="detail-description">在沈向洋院士支持下成立</p>
          </div>
          
          <div class="detail-card">
            <div class="detail-icon">【需要图片：地址位置图标】</div>
            <h3>公司地址</h3>
            <p>深圳市福田区河套保税区</p>
            <p class="detail-description">长富金茂大厦3901</p>
          </div>
          
          <div class="detail-card">
            <div class="detail-icon">【需要图片：愿景目标图标】</div>
            <h3>发展愿景</h3>
            <p>打造合成数据时代的ScaleAI</p>
            <p class="detail-description">成为中国的下一代ScaleAI</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Details Section -->
    <section class="team-details">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">团队详细介绍</h2>
          <p class="section-subtitle">深厚的研究积累和丰富的项目资源</p>
        </div>
        
        <div class="team-overview">
          <div class="team-info">
            <h3>团队规模与结构</h3>
            <p>团队现全职12人，计划维持15-20人的精英规模。团队相关领域研究积累深厚，业界知名度高，拥有世界知名专家作为项目顾问团队。</p>
            
            <div class="team-advantages">
              <div class="advantage-item">
                <div class="advantage-icon">【需要图片：研究积累图标】</div>
                <div class="advantage-content">
                  <h4>深厚研究积累</h4>
                  <p>团队在相关领域有深厚的研究基础和技术积累</p>
                </div>
              </div>
              
              <div class="advantage-item">
                <div class="advantage-icon">【需要图片：业界知名图标】</div>
                <div class="advantage-content">
                  <h4>业界知名度高</h4>
                  <p>在人工智能和合成数据领域享有较高声誉</p>
                </div>
              </div>
              
              <div class="advantage-item">
                <div class="advantage-icon">【需要图片：专家顾问图标】</div>
                <div class="advantage-content">
                  <h4>专家顾问团队</h4>
                  <p>世界知名专家担任项目顾问，提供战略指导</p>
                </div>
              </div>
              
              <div class="advantage-item">
                <div class="advantage-icon">【需要图片：项目资源图标】</div>
                <div class="advantage-content">
                  <h4>项目资源丰富</h4>
                  <p>通过IDEA研究院获得丰富的项目资源支持</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="team-visual">
            <div class="team-placeholder">【需要图片：团队介绍页面设计】</div>
          </div>
        </div>
        
        <div class="advisors-section">
          <h3>项目顾问委员会</h3>
          <div class="advisors-grid">
            <div class="advisor-card">
              <div class="advisor-avatar">【需要图片：沈向洋院士头像】</div>
              <h4>沈向洋院士</h4>
              <p class="advisor-title">项目主要支持者</p>
              <p class="advisor-bio">IDEA研究院理事长，微软前全球执行副总裁</p>
            </div>
            
            <div class="advisor-card">
              <div class="advisor-avatar">【需要图片：顾问专家头像占位符】</div>
              <h4>世界级专家</h4>
              <p class="advisor-title">技术顾问团队</p>
              <p class="advisor-bio">来自国际顶尖科研机构的技术专家</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Funding Section -->
    <section class="funding-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">融资情况</h2>
          <p class="section-subtitle">获得头部投资机构认可，快速发展中</p>
        </div>
        
        <div class="funding-timeline">
          <div class="timeline-item">
            <div class="timeline-marker">
              <div class="timeline-number">1</div>
            </div>
            <div class="timeline-content">
              <h3>种子轮</h3>
              <div class="funding-stats">
                <span class="funding-amount">8000万估值</span>
                <span class="funding-date">2025年初</span>
              </div>
              <p>获得首轮种子投资，验证产品市场需求</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-marker">
              <div class="timeline-number">2</div>
            </div>
            <div class="timeline-content">
              <h3>种子加轮</h3>
              <div class="funding-stats">
                <span class="funding-amount">1.5亿估值</span>
                <span class="funding-date">2025年中</span>
              </div>
              <p>快速发展阶段，估值大幅提升</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-marker">
              <div class="timeline-number">3</div>
            </div>
            <div class="timeline-content">
              <h3>加加轮</h3>
              <div class="funding-stats">
                <span class="funding-amount">2.5亿估值</span>
                <span class="funding-date">2025年下半年</span>
              </div>
              <p>业务快速增长，市场认可度持续提升</p>
            </div>
          </div>
          
          <div class="timeline-item active">
            <div class="timeline-marker">
              <div class="timeline-number">4</div>
            </div>
            <div class="timeline-content">
              <h3>拟天使轮</h3>
              <div class="funding-stats">
                <span class="funding-amount">5亿估值</span>
                <span class="funding-date">进行中</span>
              </div>
              <p>目标成为合成数据领域的领军企业</p>
            </div>
          </div>
        </div>
        
        <div class="investors-section">
          <h3>投资机构</h3>
          <div class="investors-grid">
            <div class="investor-category">
              <h4>头部投资机构</h4>
              <div class="investor-placeholder">【需要图片：头部投资机构展示】</div>
            </div>
            
            <div class="investor-category">
              <h4>产业集团投资方</h4>
              <div class="investor-placeholder">【需要图片：产业集团投资方】</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Development Milestones Section -->
    <section class="milestones">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">发展历程</h2>
          <p class="section-subtitle">从概念到实现，持续创新的发展之路</p>
        </div>
        
        <div class="milestones-grid">
          <div class="milestone-card">
            <div class="milestone-date">2025年1月</div>
            <h3>公司成立</h3>
            <p>在沈向洋院士支持下，由IDEA研究院推动孵化成立</p>
          </div>
          
          <div class="milestone-card">
            <div class="milestone-date">2025年3月</div>
            <h3>业务启动</h3>
            <p>开始正式业务运营，进入PMF阶段</p>
          </div>
          
          <div class="milestone-card">
            <div class="milestone-date">2025年6月</div>
            <h3>技术突破</h3>
            <p>完成核心技术研发，推出Living KB和SynData Platform</p>
          </div>
          
          <div class="milestone-card">
            <div class="milestone-date">2025年9月</div>
            <h3>客户验证</h3>
            <p>完成多个POC项目，获得客户认可</p>
          </div>
          
          <div class="milestone-card">
            <div class="milestone-date">2025年12月</div>
            <h3>规模扩张</h3>
            <p>业务快速发展，团队规模持续优化</p>
          </div>
          
          <div class="milestone-card future">
            <div class="milestone-date">2026年+</div>
            <h3>未来规划</h3>
            <p>成为中国的下一代ScaleAI，引领合成数据时代</p>
          </div>
        </div>
      </div>
    </section>
    
    <AppFooter />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
  agree: false
})

const submitForm = () => {
  if (form.agree) {
    alert('感谢您的留言，我们会尽快与您联系！')
    // 这里可以添加实际的表单提交逻辑
    Object.assign(form, {
      name: '',
      email: '',
      phone: '',
      message: '',
      agree: false
    })
  }
}
</script>

<style scoped>
/* ===== Page Layout ===== */
.company-page {
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

/* ===== Company Introduction ===== */
.company-intro {
  padding: var(--space-32) 0;
  background: var(--bg-secondary);
}

.intro-content {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.intro-description {
  font-size: var(--font-lg);
  line-height: var(--leading-relaxed);
  color: var(--text-secondary);
  margin-bottom: var(--space-12);
}

.company-stats {
  display: flex;
  justify-content: center;
  gap: var(--space-12);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: var(--font-4xl);
  font-weight: 800;
  color: var(--primary-color);
  margin-bottom: var(--space-2);
}

.stat-label {
  font-size: var(--font-sm);
  color: var(--text-tertiary);
  font-weight: 500;
}

/* ===== Team Section ===== */
.team-section {
  padding: var(--space-32) 0;
  background: var(--bg-primary);
}

.section-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.leadership-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: var(--space-8);
  margin-bottom: var(--space-20);
}

.leader-card {
  padding: var(--space-8);
  transition: all var(--duration-normal) var(--ease-out);
}

.leader-card:hover {
  transform: translateY(-8px);
}

.leader-photo {
  position: relative;
  width: 150px;
  height: 200px;
  margin: 0 auto var(--space-6);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.leader-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  display: flex;
  align-items: flex-end;
  padding: var(--space-4);
  opacity: 0;
  transition: opacity var(--duration-normal) var(--ease-out);
}

.leader-card:hover .photo-overlay {
  opacity: 1;
}

.overlay-content {
  color: var(--text-white);
}

.leader-role {
  font-size: var(--font-sm);
  font-weight: 500;
}

.leader-info {
  text-align: center;
}

.leader-name {
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-1);
}

.leader-title {
  font-size: var(--font-sm);
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: var(--space-4);
}

.leader-bio {
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-4);
}

.leader-highlights {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.highlight-tag {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-full);
  padding: var(--space-1) var(--space-3);
  font-size: var(--font-xs);
  color: var(--primary-color);
  backdrop-filter: var(--glass-backdrop);
  -webkit-backdrop-filter: var(--glass-backdrop);
}

.leader-achievements {
  display: flex;
  justify-content: center;
  gap: var(--space-6);
}

.achievement-item {
  text-align: center;
}

.achievement-number {
  display: block;
  font-size: var(--font-2xl);
  font-weight: 700;
  color: var(--primary-color);
}

.achievement-label {
  font-size: var(--font-xs);
  color: var(--text-tertiary);
}

/* ===== Team Features ===== */
.team-features {
  margin-bottom: var(--space-16);
  padding: var(--space-8);
  text-align: center;
}

.features-title {
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.features-subtitle {
  color: var(--text-secondary);
  margin-bottom: var(--space-8);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-6);
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: var(--primary-color);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-4);
  box-shadow: var(--shadow-medium);
}

.icon-number {
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--text-white);
}

.feature-content h4 {
  font-size: var(--font-base);
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--space-1);
}

.feature-content p {
  font-size: var(--font-sm);
  color: var(--text-secondary);
}

/* ===== Other Members ===== */
.other-members {
  text-align: center;
}

.members-title {
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-8);
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
}

.member-card {
  padding: var(--space-6);
  text-align: center;
  transition: all var(--duration-normal) var(--ease-out);
}

.member-card:hover {
  transform: translateY(-4px);
}

.member-role {
  font-size: var(--font-base);
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: var(--space-2);
}

.member-description {
  color: var(--text-secondary);
  line-height: var(--leading-normal);
}

/* ===== Contact Section ===== */
.contact-section {
  padding: var(--space-32) 0;
  background: var(--bg-secondary);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: start;
}

.contact-info {
  max-width: 500px;
}

.contact-description {
  font-size: var(--font-lg);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-8);
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.contact-icon {
  width: 50px;
  height: 50px;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: var(--glass-backdrop);
  -webkit-backdrop-filter: var(--glass-backdrop);
}

.contact-icon .icon {
  width: 24px;
  height: 24px;
  fill: var(--primary-color);
}

.contact-text {
  flex: 1;
}

.contact-label {
  font-size: var(--font-sm);
  color: var(--text-tertiary);
  margin-bottom: var(--space-1);
}

.contact-value {
  font-size: var(--font-base);
  color: var(--text-primary);
  font-weight: 500;
}

/* ===== Contact Form ===== */
.contact-form-wrapper {
  position: sticky;
  top: var(--space-8);
}

.contact-form {
  padding: var(--space-8);
}

.form-title {
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: var(--space-6);
  text-align: center;
}

.form-group {
  margin-bottom: var(--space-4);
}

.form-group label {
  display: block;
  font-size: var(--font-sm);
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.form-input,
.form-textarea {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: var(--radius-md);
  font-size: var(--font-sm);
  background: var(--bg-primary);
  transition: all var(--duration-normal) var(--ease-out);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
}

.checkbox-group {
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
}

.form-checkbox {
  width: 18px;
  height: 18px;
  margin-top: 2px;
}

.checkbox-label {
  font-size: var(--font-sm);
  color: var(--text-secondary);
  line-height: var(--leading-normal);
  cursor: pointer;
}

.form-link {
  color: var(--primary-color);
  text-decoration: none;
}

.form-link:hover {
  text-decoration: underline;
}

.form-submit {
  width: 100%;
  margin-top: var(--space-4);
}

/* ===== Animations ===== */
.leader-card {
  animation: fadeInUp 0.6s var(--ease-out);
}

.leader-card:nth-child(1) { animation-delay: 0.1s; }
.leader-card:nth-child(2) { animation-delay: 0.2s; }

.feature-item {
  animation: fadeInUp 0.6s var(--ease-out);
}

.feature-item:nth-child(1) { animation-delay: 0.1s; }
.feature-item:nth-child(2) { animation-delay: 0.2s; }
.feature-item:nth-child(3) { animation-delay: 0.3s; }

.member-card {
  animation: fadeInScale 0.6s var(--ease-out);
}

.member-card:nth-child(1) { animation-delay: 0.1s; }
.member-card:nth-child(2) { animation-delay: 0.2s; }
.member-card:nth-child(3) { animation-delay: 0.3s; }

/* ===== Responsive Design ===== */
@media (max-width: 1024px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }
  
  .leadership-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 60vh;
    padding: var(--space-20) 0;
  }
  
  .hero-title {
    font-size: var(--font-4xl);
  }
  
  .company-stats {
    flex-direction: column;
    gap: var(--space-6);
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .members-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-form-wrapper {
    position: static;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: var(--font-3xl);
  }
  
  .leadership-grid {
    gap: var(--space-6);
  }
  
  .leader-highlights {
    flex-direction: column;
    align-items: center;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* ===== Company Details Section ===== */
.company-details {
  padding: var(--space-32) 0;
  background: var(--bg-secondary);
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
}

.detail-card {
  background: var(--bg-primary);
  border-radius: var(--radius-2xl);
  padding: var(--space-8);
  text-align: center;
  border: 1px solid var(--neutral-200);
}

.detail-icon {
  margin-bottom: var(--space-4);
  color: var(--primary-color);
  font-size: var(--font-sm);
}

.detail-card h3 {
  font-size: var(--font-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-3);
}

.detail-en {
  color: var(--text-tertiary);
  font-size: var(--font-sm);
  font-style: italic;
}

.detail-description {
  color: var(--text-secondary);
  font-size: var(--font-sm);
}

/* ===== Team Details Section ===== */
.team-details {
  padding: var(--space-32) 0;
  background: var(--bg-primary);
}

.team-overview {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--space-12);
  margin-bottom: var(--space-16);
}

.team-advantages {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
  margin-top: var(--space-8);
}

.advantage-item {
  display: flex;
  gap: var(--space-4);
  align-items: flex-start;
}

.advantage-icon {
  color: var(--primary-color);
  font-size: var(--font-sm);
  flex-shrink: 0;
}

.advantage-content h4 {
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.team-placeholder {
  background: var(--neutral-100);
  border: 2px dashed var(--neutral-300);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  color: var(--neutral-500);
  text-align: center;
  min-height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.advisors-section h3 {
  font-size: var(--font-2xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-8);
  text-align: center;
}

.advisors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-8);
}

.advisor-card {
  background: var(--glass-bg);
  border-radius: var(--radius-2xl);
  padding: var(--space-8);
  text-align: center;
  backdrop-filter: var(--glass-backdrop);
  border: 1px solid var(--glass-border);
}

.advisor-avatar {
  width: 100px;
  height: 100px;
  background: var(--neutral-100);
  border: 2px dashed var(--neutral-300);
  border-radius: var(--radius-full);
  margin: 0 auto var(--space-4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--neutral-500);
  font-size: var(--font-xs);
}

.advisor-card h4 {
  font-size: var(--font-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-2);
}

.advisor-title {
  color: var(--primary-color);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--space-3);
}

/* ===== Funding Section ===== */
.funding-section {
  padding: var(--space-32) 0;
  background: var(--bg-secondary);
}

.funding-timeline {
  position: relative;
  margin-bottom: var(--space-16);
}

.timeline-item {
  display: flex;
  gap: var(--space-6);
  margin-bottom: var(--space-8);
  align-items: flex-start;
}

.timeline-marker {
  flex-shrink: 0;
}

.timeline-number {
  width: 50px;
  height: 50px;
  background: var(--neutral-300);
  color: var(--text-white);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-bold);
}

.timeline-item.active .timeline-number {
  background: var(--primary-color);
}

.timeline-content {
  background: var(--bg-primary);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  border: 1px solid var(--neutral-200);
  flex: 1;
}

.timeline-content h3 {
  font-size: var(--font-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-3);
}

.funding-stats {
  display: flex;
  gap: var(--space-4);
  margin-bottom: var(--space-3);
}

.funding-amount {
  background: var(--primary-color);
  color: var(--text-white);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--font-sm);
  font-weight: var(--font-weight-medium);
}

.funding-date {
  background: var(--neutral-200);
  color: var(--text-secondary);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: var(--font-sm);
}

.investors-section h3 {
  font-size: var(--font-2xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-8);
  text-align: center;
}

.investors-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-8);
}

.investor-category h4 {
  font-size: var(--font-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-4);
  text-align: center;
}

.investor-placeholder {
  background: var(--neutral-100);
  border: 2px dashed var(--neutral-300);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  color: var(--neutral-500);
  text-align: center;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ===== Milestones Section ===== */
.milestones {
  padding: var(--space-32) 0;
  background: var(--bg-primary);
}

.milestones-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
}

.milestone-card {
  background: var(--glass-bg);
  border-radius: var(--radius-2xl);
  padding: var(--space-6);
  backdrop-filter: var(--glass-backdrop);
  border: 1px solid var(--glass-border);
  transition: all var(--duration-normal) var(--ease-out);
}

.milestone-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.milestone-card.future {
  border: 2px solid var(--primary-color);
  background: linear-gradient(135deg, var(--glass-bg), var(--primary-color-light));
}

.milestone-date {
  background: var(--primary-color);
  color: var(--text-white);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  font-size: var(--font-sm);
  font-weight: var(--font-weight-medium);
  display: inline-block;
  margin-bottom: var(--space-4);
}

.milestone-card h3 {
  font-size: var(--font-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-3);
}

/* ===== Responsive Design ===== */
@media (max-width: 768px) {
  .details-grid {
    grid-template-columns: 1fr;
  }
  
  .team-overview {
    grid-template-columns: 1fr;
  }
  
  .team-advantages {
    grid-template-columns: 1fr;
  }
  
  .advisors-grid {
    grid-template-columns: 1fr;
  }
  
  .timeline-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .investors-grid {
    grid-template-columns: 1fr;
  }
  
  .milestones-grid {
    grid-template-columns: 1fr;
  }
}
</style> 