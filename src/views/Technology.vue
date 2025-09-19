<template>
  <div class="technology-page">
    <AppHeader />
    
    <section class="page-hero">
      <div class="container">
        <h1>产品方案</h1>
        <p>Living KB 动态知识库合成数据平台</p>
      </div>
    </section>
    
    <section class="page-content">
      <div class="container">
        <!-- 产品流程步骤 -->
        <div class="process-steps">
          <div class="step-item">
            <div class="step-icon">【需要图片：技术页-流程-数据采集.png - 数据收集/文档图标】</div>
            <div class="step-line"></div>
            <div class="step-content">
              <h3>用户数据</h3>
              <p>对企业多模态、跨部门、跨系统的原始数据（如 PDF、Word 、PPT 汇报、SQL 数据库、会议录屏等）等内容，进行抽取、结构化和建模等工作，让 AI 真正"读懂"企业知识。</p>
            </div>
          </div>
          
          <div class="step-item">
            <div class="step-icon">【需要图片：技术页-流程-图谱构建.png - 网络图谱/节点连接图标】</div>
            <div class="step-line"></div>
            <div class="step-content">
              <h3>语境图谱构建</h3>
              <p>语境图谱将分散的企业数据转化为动态知识网络，让隐藏的知识脉络和数据关联清晰可见。</p>
            </div>
          </div>
          
          <div class="step-item">
            <div class="step-icon">【需要图片：技术页-流程-多能体平台.png - 机器人/AI智能体图标】</div>
            <div class="step-line"></div>
            <div class="step-content">
              <h3>多能体平台</h3>
              <p>智能体可自主调用数据库、浏览器、语境图谱等多类工具，并借助合成数据持续训练与进化，快速掌握行业知识、人类偏好与协作模式，从而以更低成本、更高效率完成复杂业务的智能化执行。</p>
            </div>
          </div>
          
          <div class="step-item">
            <div class="step-icon">【需要图片：技术页-流程-交互平台.png - 对话框/交互界面图标】</div>
            <div class="step-line"></div>
            <div class="step-content">
              <h3>交互平台</h3>
              <p>可通过自然对话、图交互等多模态交互方式与产品互动，让用户高效、安全地获取知识和完成任务，大幅提升信息利用率与业务执行力。</p>
            </div>
          </div>
          
          <div class="step-item">
            <div class="step-icon">【需要图片：技术页-流程-自适应化.png - 自适应/进化图标】</div>
            <div class="step-line"></div>
            <div class="step-content">
              <h3>图谱自适化</h3>
              <p>AI 搜索和应用使用过程中产生的新数据会持续补全图谱，让 Living KB 始终保持鲜活。</p>
            </div>
          </div>
        </div>

        <!-- 核心功能和产品特点 -->
        <div class="feature-cards">
          <div class="feature-card">
            <img src="/images/icons/核心技术页面-核心功能-icon.png" alt="核心功能" class="feature-icon">
            <h3>核心功能</h3>
            <p>以 Context Graph 为核心，实现企业知识管理并使企业知识"LLM Ready"。通过知识挖掘、语境图谱和合成数据能力不断扩充企业的知识和语境，让 AI 和人类可以基于最新的企业数据进行检索、分析和决策。</p>
          </div>
          
          <div class="feature-card">
            <img src="/images/icons/核心技术页面-产品特点-icon.png" alt="产品特点" class="feature-icon">
            <h3>产品特点</h3>
            <ul>
              <li>高效构建知识图谱，提升数据处理和理解能力。</li>
              <li>支持三元组(实体-边-实体)与语境理解。</li>
              <li>提升图谱推理与信息查询效率，节省数据管理成本。</li>
              <li>采用更高效的Graph交互方式，提示工作效率与体验。</li>
            </ul>
          </div>
        </div>

        <!-- 技术优势 -->
        <div class="tech-section">
          <h2>技术优势</h2>
          <p class="tech-subtitle">DataArc 自主研发多项合成数据核心技术，覆盖从数据合成到模型训练的全周期，助力模型更准确、更高效、更安全。依托知识驱动的大模型推理框架，有效解决企业业务场景中推理深度不足、数据调用不准及多模态处理受限等难题。</p>
          
          <div class="tech-grid">
            <div class="tech-item">
              <div class="tech-icon-placeholder">【需要图片：技术页-优势-更懂行.png - 专家/行业知识图标】</div>
              <h4>更懂行</h4>
              <p>SoG提升模型能力 25.4%</p>
            </div>
            
            <div class="tech-item">
              <div class="tech-icon-placeholder">【需要图片：技术页-优势-更聪明.png - AI大脑/智能图标】</div>
              <h4>更聪明</h4>
              <p>ToG 推理更准，升至 90.2%</p>
            </div>
            
            <div class="tech-item">
              <div class="tech-icon-placeholder">【需要图片：技术页-优势-更靠谱.png - 信任/可靠图标】</div>
              <h4>更靠谱</h4>
              <p>Judge：降低90%的数据风险</p>
            </div>
            
            <div class="tech-item">
              <div class="tech-icon-placeholder">【需要图片：技术页-优势-更专业.png - 专业工具/技术图标】</div>
              <h4>更专业</h4>
              <p>SQL-R1:数据查询更便捷</p>
            </div>
            
            <div class="tech-item">
              <div class="tech-icon-placeholder">【需要图片：技术页-优势-更安全.png - 安全防护/加密图标】</div>
              <h4>更安全</h4>
              <p>SoE：敏感数据0泄露</p>
            </div>
            
            <div class="tech-item">
              <div class="tech-icon-placeholder">【需要图片：技术页-优势-更准确.png - 精确/准确率图标】</div>
              <h4>更准确</h4>
              <p>RAG：准确率 提升至 92%</p>
            </div>
          </div>
        </div>

        <!-- FAQ部分 -->
        <div class="faq-section">
          <h2>常见问题</h2>
          
          <div class="faq-tabs">
            <button 
              class="faq-tab" 
              :class="{ active: activeTab === 'kb' }"
              @click="activeTab = 'kb'"
            >
              关于知识库
            </button>
            <button 
              class="faq-tab" 
              :class="{ active: activeTab === 'data' }"
              @click="activeTab = 'data'"
            >
              关于合成数据
            </button>
          </div>
          
          <div class="faq-list" v-if="activeTab === 'kb'">
            <div class="faq-item" v-for="(item, index) in kbFaqs" :key="index">
              <div class="faq-question" @click="toggleFaq('kb', index)">
                <span class="faq-number">{{ String(index + 1).padStart(2, '0') }}</span>
                <span class="faq-text">{{ item.question }}</span>
                <span class="faq-toggle">{{ item.isOpen ? '-' : '+' }}</span>
              </div>
              <div class="faq-answer" v-show="item.isOpen">
                <p>{{ item.answer }}</p>
              </div>
            </div>
          </div>
          
          <div class="faq-list" v-if="activeTab === 'data'">
            <div class="faq-item" v-for="(item, index) in dataFaqs" :key="index">
              <div class="faq-question" @click="toggleFaq('data', index)">
                <span class="faq-number">{{ String(index + 1).padStart(2, '0') }}</span>
                <span class="faq-text">{{ item.question }}</span>
                <span class="faq-toggle">{{ item.isOpen ? '-' : '+' }}</span>
              </div>
              <div class="faq-answer" v-show="item.isOpen">
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
import { ref, reactive } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

const activeTab = ref('kb')

const kbFaqs = reactive([
  {
    question: '什么是DataArc的动态知识库？',
    answer: 'DataArc的动态知识库（Context Graph）是一种结构化的数据管理系统，它通过抓取并整理企业信息，构建语境图谱，帮助企业以更加高效、直观的方式管理和利用知识。它使得企业能够快速提取和应用相关知识，优化模型训练过程。',
    isOpen: true
  },
  {
    question: '如何构建知识图谱？',
    answer: '通过DataArc的动态知识库，企业可以将内部数据源转化为结构化的图谱，系统自动抓取企业的政策、文档、报告等信息，并将其转化为三元组形式（例如：政策-适用-企业）。这些知识点会自动连接并形成图谱，提升数据处理与知识管理效率。',
    isOpen: false
  },
  {
    question: '如何使用 DataArc 知识库进行数据查询？',
    answer: 'DataArc的知识库支持多种查询方式，包括结构化查询与自然语言查询。通过图谱的语境理解功能，用户可以输入问题或查询条件，系统会自动从图谱中提取相关知识，提供最准确的信息。',
    isOpen: false
  },
  {
    question: 'DataArc的知识库能否与现有的企业系统兼容？',
    answer: '是的，DataArc的知识库可以与现有的企业管理系统、CRM、ERP等无缝对接。我们提供灵活的API接口和技术支持，帮助企业将知识图谱与其他业务系统有效集成。',
    isOpen: false
  }
])

const dataFaqs = reactive([
  {
    question: '什么是合成数据？',
    answer: '合成数据是通过算法生成的人工数据，它具有与真实数据相似的统计特性，但不包含实际的敏感信息。这种数据可以用于机器学习模型训练，同时保护隐私和降低数据获取成本。',
    isOpen: false
  },
  {
    question: '合成数据的质量如何保证？',
    answer: 'DataArc采用先进的生成算法和质量评估体系，确保合成数据在保持统计特性的同时，具有足够的多样性和真实性。我们的系统会持续监控和优化数据质量。',
    isOpen: false
  }
])

const toggleFaq = (type, index) => {
  if (type === 'kb') {
    kbFaqs[index].isOpen = !kbFaqs[index].isOpen
  } else {
    dataFaqs[index].isOpen = !dataFaqs[index].isOpen
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

.page-content {
  padding: 60px 0;
}

/* 流程步骤 */
.process-steps {
  max-width: 800px;
  margin: 0 auto 80px;
}

.step-item {
  display: flex;
  margin-bottom: 40px;
  position: relative;
}

.step-line {
  width: 4px;
  background: #2563eb;
  margin-right: 24px;
  flex-shrink: 0;
  border-radius: 2px;
  min-height: 80px;
}

.step-content h3 {
  color: #2563eb;
  font-size: 1.2rem;
  margin-bottom: 12px;
  font-weight: 600;
}

.step-content p {
  color: #64748b;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* 功能卡片 */
.feature-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 80px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.feature-card {
  text-align: center;
  padding: 40px 30px;
  background: var(--bg-primary);
  border: 1px solid var(--neutral-200);
  border-radius: var(--radius-xl);
  transition: all var(--duration-normal) var(--ease-out);
}

.feature-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
  border-radius: 8px;
}

.feature-card h3 {
  color: var(--text-primary);
  font-size: 1.3rem;
  margin-bottom: 16px;
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
  margin-bottom: 8px;
  padding-left: 16px;
  position: relative;
  font-size: 0.95rem;
  line-height: 1.6;
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
  color: #1e293b;
  margin-bottom: 16px;
  font-weight: 600;
}

.tech-subtitle {
  color: #64748b;
  max-width: 800px;
  margin: 0 auto 50px;
  line-height: 1.6;
  font-size: 0.95rem;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 800px;
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
  color: #1e293b;
  font-size: 1.1rem;
  margin-bottom: 8px;
  font-weight: 600;
}

.tech-item p {
  color: #64748b;
  font-size: 0.9rem;
}

/* FAQ部分 */
.faq-section {
  max-width: 800px;
  margin: 0 auto;
}

.faq-section h2 {
  text-align: center;
  font-size: 2rem;
  color: #1e293b;
  margin-bottom: 40px;
  font-weight: 600;
}

.faq-tabs {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
}

.faq-tab {
  padding: 12px 24px;
  border: 2px solid #2563eb;
  background: transparent;
  color: #2563eb;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.faq-tab.active,
.faq-tab:hover {
  background: #2563eb;
  color: white;
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
  background: #f8fafc;
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
  color: #1e293b;
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
  color: #64748b;
  line-height: 1.6;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .feature-cards {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
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
  .tech-grid {
    grid-template-columns: 1fr;
  }
}
</style> 
 