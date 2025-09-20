<template>
  <div class="products-page">
    <AppHeader />
    
    <section class="page-hero">
      <div class="container">
        <h1>产品方案</h1>
        <p>通过合成数据技术，解决大规模智能训练中的数据稀缺与质量问题，为各行业提供高质量、低成本的数据服务。</p>
      </div>
    </section>
    
    <!-- Product Matrix Section -->
    <section class="product-matrix">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">产品矩阵概览</h2>
          <p class="section-subtitle">DataArc通过两个核心标品发挥合成数据的价值</p>
        </div>
        <div class="matrix-visual">
          <div class="matrix-placeholder">【需要图片：产品矩阵概览图】</div>
        </div>
      </div>
    </section>
    
    <section class="page-content">
      <div class="container">
        <!-- 产品详细介绍 -->
        <div class="products-grid">
          <div class="product-card">
            <div class="product-badge">合成数据作为能力</div>
            <h2>DataArc Living KB</h2>
            <p class="product-desc">基于合成数据预设一批能力智能体&轻量化使用</p>
            
            <div class="product-visual">
              <img src="/images/icons/首页面-二屏-lkb图标.png" alt="Living KB 数据图表" class="visual-icon">
              <p>Living KB 可视化图谱</p>
            </div>
            
            <div class="product-features">
              <h3>核心功能特性</h3>
              <div class="features-list">
                <div class="feature-item">
                  <div class="feature-placeholder">【需要图片：产品页-LKB-链接整合.png - 数据链接/整合图标】</div>
                  <span>高效整合企业多源异构数据，让AI可读</span>
                </div>
                <div class="feature-item">
                  <div class="feature-placeholder">【需要图片：产品页-LKB-大脑理解.png - AI大脑/理解图标】</div>
                  <span>支持三元组与语境理解</span>
                </div>
                <div class="feature-item">
                  <div class="feature-placeholder">【需要图片：产品页-LKB-工具调用.png - 工具箱/多工具图标】</div>
                  <span>高效调用多种工具，在图上思考</span>
                </div>
                <div class="feature-item">
                  <div class="feature-placeholder">【需要图片：产品页-LKB-闪电部署.png - 闪电/快速部署图标】</div>
                  <span>轻量化智能体快速部署</span>
                </div>
              </div>
            </div>
          </div>

          <div class="product-card">
            <div class="product-badge">合成数据作为产品</div>
            <h2>DataArc SynData Platform</h2>
            <p class="product-desc">打造企业专家Agent/个人Agent</p>
            
            <div class="product-visual">
              <img src="/images/icons/首页面-二屏-合成数据图标.png" alt="SynData Platform 智能平台" class="visual-icon">
              <p>SynData Platform 智能平台</p>
            </div>
            
            <div class="product-features">
              <h3>平台核心能力</h3>
              <div class="features-list">
                <div class="feature-item">
                  <div class="feature-placeholder">【需要图片：产品页-平台-循环更新.png - 循环箭头/更新图标】</div>
                  <span>持续合成数据，让Living KB可更新</span>
                </div>
                <div class="feature-item">
                  <div class="feature-placeholder">【需要图片：产品页-平台-目标优化.png - 目标靶心/优化图标】</div>
                  <span>大模型自动评估反馈，强化学习，迭代进化</span>
                </div>
                <div class="feature-item">
                  <div class="feature-placeholder">【需要图片：产品页-平台-安全加密.png - 锁定/加密图标】</div>
                  <span>数据加密训练，规避隐私风险</span>
                </div>
                <div class="feature-item">
                  <div class="feature-placeholder">【需要图片：产品页-平台-核心模块.png - 齿轮/核心模块图标】</div>
                  <span>自研合成数据核心模块</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 技术架构流程 -->
        <div class="architecture-section">
          <h2>自研合成数据核心模块</h2>
          <div class="architecture-flow">
            <div class="flow-step">
              <div class="flow-number">1</div>
              <h4>数据采集与预处理</h4>
              <p>多源异构数据整合，智能化清洗与标准化</p>
            </div>
            
            <div class="flow-arrow">→</div>
            
            <div class="flow-step">
              <div class="flow-number">2</div>
              <h4>语境图谱构建</h4>
              <p>自动抽取实体关系，构建动态知识网络</p>
            </div>
            
            <div class="flow-arrow">→</div>
            
            <div class="flow-step">
              <div class="flow-number">3</div>
              <h4>合成数据生成</h4>
              <p>基于图谱生成高质量训练数据</p>
            </div>
            
            <div class="flow-arrow">→</div>
            
            <div class="flow-step">
              <div class="flow-number">4</div>
              <h4>智能体训练优化</h4>
              <p>持续学习与模型迭代优化</p>
            </div>
          </div>
        </div>

        <!-- 应用场景 -->
        <div class="scenarios-section">
          <h2>应用场景</h2>
          <div class="scenarios-grid">
            <div class="scenario-card">
              <div class="scenario-placeholder">【需要图片：产品页-场景-金融风控.png - 银行建筑/金融图标】</div>
              <h3>金融风控</h3>
              <p>智能风险评估，实时监控预警，提升风控效率</p>
            </div>
            
            <div class="scenario-card">
              <div class="scenario-placeholder">【需要图片：产品页-场景-智能投研.png - 上升趋势图表/投资图标】</div>
              <h3>智能投研</h3>
              <p>市场分析，投资决策支持，量化策略优化</p>
            </div>
            
            <div class="scenario-card">
              <div class="scenario-placeholder">【需要图片：产品页-场景-智能制造.png - 工厂建筑/制造图标】</div>
              <h3>制造业</h3>
              <p>生产优化，质量管控，供应链智能化管理</p>
            </div>
            
            <div class="scenario-card">
              <div class="scenario-placeholder">【需要图片：产品页-场景-经营分析.png - 数据分析图表/分析图标】</div>
              <h3>经营分析</h3>
              <p>业务数据洞察，运营效率优化，决策支持</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Architecture Section -->
    <section class="tech-architecture">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">技术架构详解</h2>
          <p class="section-subtitle">深入了解DataArc产品的核心技术架构与工作原理</p>
        </div>
        
        <div class="architecture-content">
          <div class="arch-section">
            <h3 class="arch-title">Living KB 语境图谱架构</h3>
            <div class="arch-visual">
              <div class="arch-placeholder">【需要图片：语境图谱详细架构图】</div>
            </div>
            <div class="arch-process">
              <div class="process-step">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h4>原始数据处理</h4>
                  <p>多源异构数据统一接入与预处理</p>
                </div>
              </div>
              <div class="process-step">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h4>知识脉络挖掘</h4>
                  <p>智能识别数据间的关联关系</p>
                </div>
              </div>
              <div class="process-step">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h4>智能检索</h4>
                  <p>基于语境图谱的精准检索</p>
                </div>
              </div>
              <div class="process-step">
                <div class="step-number">4</div>
                <div class="step-content">
                  <h4>合成生成</h4>
                  <p>高质量合成数据智能生成</p>
                </div>
              </div>
            </div>
          </div>

          <div class="arch-section">
            <h3 class="arch-title">SynData Platform 工作流程</h3>
            <div class="arch-visual">
              <div class="arch-placeholder">【需要图片：合成数据平台工作流程图】</div>
            </div>
            <div class="workflow-features">
              <div class="workflow-item">
                <div class="workflow-icon">【需要图片：SoG基于图谱合成图标】</div>
                <h4>SoG 基于图谱合成</h4>
                <p>基于知识图谱的智能合成</p>
              </div>
              <div class="workflow-item">
                <div class="workflow-icon">【需要图片：SoE加密训练图标】</div>
                <h4>SoE 加密训练</h4>
                <p>保护隐私的加密数据训练</p>
              </div>
              <div class="workflow-item">
                <div class="workflow-icon">【需要图片：Judge Agent图标】</div>
                <h4>Judge Agent 自动标注</h4>
                <p>智能质量评估与标注</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Data Synthesis Process Section -->
    <section class="synthesis-process">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">数据合成三步走</h2>
          <p class="section-subtitle">简单三步，完成高质量合成数据生成</p>
        </div>
        
        <div class="process-grid">
          <div class="process-card">
            <div class="process-header">
              <div class="process-icon">1</div>
              <h3>选择模版调整参数</h3>
            </div>
            <div class="process-visual">
              <div class="process-placeholder">【需要图片：步骤1选择模版调整参数】</div>
            </div>
            <p>根据业务需求选择合适的数据合成模版，灵活调整生成参数</p>
          </div>
          
          <div class="process-card">
            <div class="process-header">
              <div class="process-icon">2</div>
              <h3>数据合成结果预览</h3>
            </div>
            <div class="process-visual">
              <div class="process-placeholder">【需要图片：步骤2数据合成结果预览】</div>
            </div>
            <p>实时预览合成数据质量，支持多维度质量评估与调优</p>
          </div>
          
          <div class="process-card">
            <div class="process-header">
              <div class="process-icon">3</div>
              <h3>完成训练部署</h3>
            </div>
            <div class="process-visual">
              <div class="process-placeholder">【需要图片：步骤3完成训练界面】</div>
            </div>
            <p>一键完成模型训练与部署，快速投入生产应用</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Performance Advantages Section -->
    <section class="performance-advantages">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">性能优势对比</h2>
          <p class="section-subtitle">相比传统方案显著的性能提升</p>
        </div>
        
        <div class="performance-grid">
          <div class="perf-card">
            <div class="perf-icon">【需要图片：建图效率图标】</div>
            <div class="perf-stat">
              <span class="perf-number">218倍</span>
              <span class="perf-label">建图效率提升</span>
            </div>
            <p>相比传统方案，建图效率提升218倍</p>
          </div>
          
          <div class="perf-card">
            <div class="perf-icon">【需要图片：准确率图标】</div>
            <div class="perf-stat">
              <span class="perf-number">90.2%</span>
              <span class="perf-label">研究准确率</span>
            </div>
            <p>研究准确率提升至90.2%</p>
          </div>
          
          <div class="perf-card">
            <div class="perf-icon">【需要图片：良品率图标】</div>
            <div class="perf-stat">
              <span class="perf-number">95%</span>
              <span class="perf-label">实战良品率</span>
            </div>
            <p>实战良品率提升至95%</p>
          </div>
          
          <div class="perf-card">
            <div class="perf-icon">【需要图片：资源消耗图标】</div>
            <div class="perf-stat">
              <span class="perf-number">0.5%</span>
              <span class="perf-label">资源消耗</span>
            </div>
            <p>仅需传统方案0.5%的资源消耗</p>
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
</script>

<style scoped>
.products-page {
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
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.5;
}

.page-content {
  padding: 60px 0;
}

/* 产品卡片 */
.products-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 80px;
}

.product-card {
  background: #f8fafc;
  border-radius: 12px;
  padding: 40px 30px;
  text-align: center;
}

.product-badge {
  display: inline-block;
  background: #2563eb;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 20px;
}

.product-card h2 {
  color: #2563eb;
  font-size: 1.5rem;
  margin-bottom: 12px;
  font-weight: 600;
}

.product-desc {
  color: #64748b;
  margin-bottom: 30px;
  font-size: 1rem;
}

.product-visual {
  background: var(--bg-primary);
  border: 2px dashed var(--neutral-300);
  border-radius: var(--radius-lg);
  padding: 40px 20px;
  margin-bottom: 30px;
}

.visual-icon {
  width: 100%;
  max-width: 100px;
  height: auto;
  margin-bottom: 12px;
  border-radius: 8px;
}

.product-visual p {
  color: #64748b;
  font-size: 0.95rem;
  font-weight: 500;
}

.product-features h3 {
  color: #1e293b;
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-weight: 600;
}

.features-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background: var(--bg-primary);
  border-radius: var(--radius-md);
  text-align: left;
}

.feature-placeholder {
  background: var(--neutral-100);
  border: 1px dashed var(--neutral-300);
  border-radius: 4px;
  padding: 4px 8px;
  color: #64748b;
  font-size: 0.7rem;
  text-align: center;
  flex-shrink: 0;
  width: 60px;
}

.feature-item span:last-child {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.4;
}

/* 技术架构 */
.architecture-section {
  text-align: center;
  margin-bottom: 80px;
}

.architecture-section h2 {
  font-size: 2rem;
  color: #1e293b;
  margin-bottom: 40px;
  font-weight: 600;
}

.architecture-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.flow-step {
  text-align: center;
  max-width: 200px;
}

.flow-number {
  width: 50px;
  height: 50px;
  background: #2563eb;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 auto 16px;
}

.flow-step h4 {
  color: #1e293b;
  font-size: 1.1rem;
  margin-bottom: 8px;
  font-weight: 600;
}

.flow-step p {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.4;
}

.flow-arrow {
  font-size: 2rem;
  color: #2563eb;
  font-weight: bold;
}

/* 应用场景 */
.scenarios-section {
  text-align: center;
}

.scenarios-section h2 {
  font-size: 2rem;
  color: #1e293b;
  margin-bottom: 40px;
  font-weight: 600;
}

.scenarios-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.scenario-card {
  background: var(--bg-primary);
  padding: 30px 20px;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--neutral-200);
  transition: all var(--duration-normal) var(--ease-out);
}

.scenario-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.scenario-placeholder {
  background: var(--neutral-100);
  border: 2px dashed var(--neutral-300);
  border-radius: 8px;
  padding: 20px 10px;
  color: #64748b;
  font-size: 0.8rem;
  text-align: center;
  margin-bottom: 20px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scenario-card h3 {
  color: #1e293b;
  font-size: 1.2rem;
  margin-bottom: 12px;
  font-weight: 600;
}

.scenario-card p {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.5;
}

@media (max-width: 1024px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
  
  .scenarios-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .architecture-flow {
    flex-direction: column;
    gap: 30px;
  }
  
  .flow-arrow {
    transform: rotate(90deg);
  }
  
  .features-list {
    grid-template-columns: 1fr;
  }
  
  .scenarios-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

/* ===== New Product Sections Styles ===== */

/* Product Matrix Section */
.product-matrix {
  padding: var(--space-24) 0;
  background: var(--bg-secondary);
}

.matrix-visual {
  text-align: center;
  margin-top: var(--space-8);
}

.matrix-placeholder {
  background: var(--glass-bg);
  border: 2px dashed var(--primary-color);
  border-radius: var(--radius-lg);
  padding: var(--space-12) var(--space-8);
  color: var(--primary-color);
  font-weight: 500;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Technical Architecture Section */
.tech-architecture {
  padding: var(--space-32) 0;
  background: var(--bg-primary);
}

.architecture-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-16);
}

.arch-section {
  padding: var(--space-8);
  background: var(--glass-bg);
  border-radius: var(--radius-2xl);
  backdrop-filter: var(--glass-backdrop);
}

.arch-title {
  font-size: var(--font-2xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-6);
  text-align: center;
}

.arch-placeholder {
  background: var(--bg-secondary);
  border: 2px dashed var(--neutral-300);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  color: var(--neutral-500);
  text-align: center;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.arch-process {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-6);
}

.process-step {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
}

.step-number {
  width: 40px;
  height: 40px;
  background: var(--primary-color);
  color: var(--text-white);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-bold);
  flex-shrink: 0;
}

.workflow-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
}

.workflow-item {
  text-align: center;
  padding: var(--space-6);
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  border: 1px solid var(--neutral-200);
}

/* Synthesis Process Section */
.synthesis-process {
  padding: var(--space-32) 0;
  background: var(--bg-secondary);
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-8);
}

.process-card {
  background: var(--bg-primary);
  border-radius: var(--radius-2xl);
  padding: var(--space-8);
  border: 1px solid var(--neutral-200);
  text-align: center;
  transition: all var(--duration-normal) var(--ease-out);
}

.process-icon {
  width: 60px;
  height: 60px;
  background: var(--primary-color);
  color: var(--text-white);
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-2xl);
  font-weight: var(--font-weight-bold);
  margin: 0 auto var(--space-4);
}

.process-placeholder {
  background: var(--neutral-100);
  border: 2px dashed var(--neutral-300);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  color: var(--neutral-500);
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-sm);
}

/* Performance Advantages Section */
.performance-advantages {
  padding: var(--space-32) 0;
  background: var(--bg-primary);
}

.performance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-6);
}

.perf-card {
  text-align: center;
  padding: var(--space-8);
  background: var(--glass-bg);
  border-radius: var(--radius-2xl);
  backdrop-filter: var(--glass-backdrop);
  border: 1px solid var(--glass-border);
}

.perf-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
  margin: var(--space-4) 0;
}

.perf-number {
  font-size: var(--font-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--primary-color);
  line-height: 1;
}

.perf-label {
  font-size: var(--font-sm);
  color: var(--text-tertiary);
  font-weight: var(--font-weight-medium);
}
</style> 