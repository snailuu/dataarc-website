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
              <div class="badge-bilingual">
                <span class="badge-gray">面向大模型的合成数据</span>
                <span class="badge-divider">|</span>
                <span class="badge-gray">让企业AI更智能</span>
              </div>
                          <div class="title-container title-with-orbs orbs-hero">
              <div class="title-hierarchy">
                <h1 class="title-level-1">
                  <span class="title-main">合成数据</span>
                </h1>
                <h1 class="title-level-1 hero-main-title">
                  <span class="title-main">让企业数据沉淀为AI智能</span>
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
                          <div class="content-bilingual">
                <p class="content-main">
                  DataArc 通过企业知识+合成数据的深度融合，提供适配GenAI的完整技术栈。
                  让知识库像「活体」一样不断丰富和更新，为企业AI各个场景带来价值。
                </p>
                <p class="content-en">
                  DataArc integrates enterprise knowledge with synthetic data to provide 
                  a complete GenAI-ready technology stack, making knowledge bases "living" 
                  and continuously evolving for enterprise AI applications.
                </p>
              </div>
              <div class="hero-actions">
                <a href="#" class="btn btn-primary btn-lg btn-capsule">
                  <span class="btn-text-main">立即登录</span>
                  <span class="btn-separator"> | </span>
                  <span class="btn-text-en">Sign In</span>
                </a>
                <a href="#contact" class="btn btn-secondary btn-lg btn-capsule btn-white">
                  <span class="btn-text-main">联系我们</span>
                  <span class="btn-separator"> | </span>
                  <span class="btn-text-en">Contact Us</span>
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
            <h2 class="section-title title-stacked">
              <span class="title-main">为什么合成数据</span>
              <span class="title-en">Why Synthetic Data</span>
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
          <div class="content-bilingual">
            <p class="content-main">数据稀缺性问题日益严重，合成数据成为破局之路，市场迎来爆发式增长机遇。</p>
            <p class="content-en">Data scarcity is becoming increasingly serious. Synthetic data offers a breakthrough solution, bringing explosive market growth opportunities.</p>
          </div>
        </div>
        
        <div class="opportunity-grid">
          <div class="opportunity-card light-card">
            <div class="opportunity-icon">
              <div class="icon-wrapper market-icon-wrapper">
                <img src="/images/icons/数据稀缺趋势图标.png" alt="数据稀缺趋势" class="icon-img market-icon">
                <div class="icon-glow market-glow"></div>
              </div>
            </div>
            <div class="title-stacked">
              <h3 class="title-main">数据稀缺危机</h3>
              <span class="title-en">Data Scarcity Crisis</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">根据Epoch AI估算，互联网上可用的人类文本数据可能会在2028年底前耗尽</p>
              <p class="content-en">According to Epoch AI estimates, available human text data on the internet may be exhausted by the end of 2028</p>
            </div>
            <div class="highlight-stat">
              <span class="stat-number">2028</span>
              <div class="stat-label-bilingual">
                <span class="stat-main">数据耗尽预测</span>
                <span class="stat-en">Data Exhaustion Prediction</span>
              </div>
            </div>
          </div>
          
          <div class="opportunity-card light-card">
            <div class="opportunity-icon">
              <div class="icon-wrapper market-icon-wrapper">
                <img src="/images/icons/市场增长图标.png" alt="市场增长" class="icon-img market-icon">
                <div class="icon-glow market-glow"></div>
              </div>
            </div>
            <div class="title-stacked">
              <h3 class="title-main">市场高速增长</h3>
              <span class="title-en">Rapid Market Growth</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">全球合成数据市场预计在2023年至2028年复合年增长率达到45.7%</p>
              <p class="content-en">The global synthetic data market is expected to achieve a CAGR of 45.7% from 2023 to 2028</p>
            </div>
            <div class="highlight-stat">
              <span class="stat-number">45.7%</span>
              <div class="stat-label-bilingual">
                <span class="stat-main">年复合增长率</span>
                <span class="stat-en">Annual CAGR</span>
              </div>
            </div>
          </div>
          
          <div class="opportunity-card light-card">
            <div class="opportunity-icon">
              <div class="icon-wrapper market-icon-wrapper">
                <img src="/images/icons/行业共识图标.png" alt="行业共识" class="icon-img market-icon">
                <div class="icon-glow market-glow"></div>
              </div>
            </div>
            <div class="title-stacked">
              <h3 class="title-main">行业共识</h3>
              <span class="title-en">Industry Consensus</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">OpenAI CEO Sam Altman表示相信很快所有数据都会是合成数据</p>
              <p class="content-en">OpenAI CEO Sam Altman believes that soon all data will be synthetic data</p>
            </div>
            <div class="highlight-stat">
              <span class="stat-number">98%</span>
              <div class="stat-label-bilingual">
                <span class="stat-main">英伟达合成数据占比</span>
                <span class="stat-en">NVIDIA Synthetic Data Ratio</span>
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
            <h2 class="section-title title-stacked">
              <span class="title-main">产品方案</span>
              <span class="title-en">Product Solutions</span>
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
          <div class="content-bilingual">
            <p class="content-main">通过合成数据技术，解决大规模智能训练中的数据稀缺与质量问题，为各行业提供高质量、低成本的数据服务。</p>
            <p class="content-en">Through synthetic data technology, solve data scarcity and quality issues in large-scale intelligent training, providing high-quality, low-cost data services for various industries.</p>
          </div>
        </div>
        
        <div class="products-grid">
          <div class="product-card glass-card">
            <div class="product-badge">
              <span class="badge-text">合成数据作为能力</span>
            </div>
            <div class="product-header">
              <div class="product-visual">
                <img src="/images/icons/首页面-二屏-lkb图标.png" alt="Living KB 数据图表" class="product-icon">
                <div class="icon-glow"></div>
              </div>
              <div class="product-content">
                <h3 class="title-level-3">DataArc Living KB</h3>
                <div class="content-bilingual">
                  <p class="content-main">基于合成数据预设一批能力智能体&轻量化使用</p>
                  <p class="content-en">Pre-configured intelligent agents based on synthetic data for lightweight usage</p>
                </div>
              </div>
            </div>
            
            <div class="product-features">
              <ul class="list-bilingual">
                <li class="list-item-bilingual">
                  <span class="list-main">高效整合企业多源异构数据,让AI可读</span>
                  <span class="list-en">Efficiently integrate enterprise multi-source heterogeneous data for AI readability</span>
                </li>
                <li class="list-item-bilingual">
                  <span class="list-main">支持三元组与语境理解</span>
                  <span class="list-en">Support triplets and contextual understanding</span>
                </li>
                <li class="list-item-bilingual">
                  <span class="list-main">高效调用多种工具，在图上思考</span>
                  <span class="list-en">Efficiently invoke multiple tools, thinking on graphs</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="product-card glass-card">
            <div class="product-badge">
              <span class="badge-text">合成数据作为产品</span>
            </div>
            <div class="product-header">
              <div class="product-visual">
                <img src="/images/icons/首页面-二屏-合成数据图标.png" alt="SynData Platform 智能平台" class="product-icon">
                <div class="icon-glow"></div>
              </div>
              <div class="product-content">
                <h3 class="title-level-3">DataArc SynData Platform</h3>
                <div class="content-bilingual">
                  <p class="content-main">打造企业专家Agent/个人Agent</p>
                  <p class="content-en">Build enterprise expert agents and personal agents</p>
                </div>
              </div>
            </div>
            
            <div class="product-features">
              <ul class="list-bilingual">
                <li class="list-item-bilingual">
                  <span class="list-main">持续合成数据，让Living KB可更新</span>
                  <span class="list-en">Continuous synthetic data generation for Living KB updates</span>
                </li>
                <li class="list-item-bilingual">
                  <span class="list-main">大模型自动评估反馈，强化学习，迭代进化</span>
                  <span class="list-en">LLM automatic evaluation feedback, reinforcement learning, iterative evolution</span>
                </li>
                <li class="list-item-bilingual">
                  <span class="list-main">数据加密训练，规避隐私风险</span>
                  <span class="list-en">Encrypted data training, avoiding privacy risks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>


      </div>
    </section>

    <!-- Tech Advantages -->
    <section id="tech-advantages" class="tech-advantages">
      <div class="container">
        <div class="section-title-group text-center title-with-orbs orbs-tech">
          <h2 class="section-title title-stacked">
            <span class="title-main">技术优势</span>
            <span class="title-en">Technical Advantages</span>
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
          <p class="content-main">
            DataArc 自主研发7项核心技术，以语境图谱为基础，结合合成数据能力，
            让企业知识库真正适配GenAI，实现知识的动态更新与智能应用。
          </p>
          <p class="content-en">
            DataArc has independently developed 7 core technologies, based on context graphs and combined with synthetic data capabilities, 
            making enterprise knowledge bases truly GenAI-compatible for dynamic knowledge updates and intelligent applications.
          </p>
        </div>
        
        <div class="tech-architecture">
          <!-- 核心基础：语境图谱 -->
          <div class="core-foundation">
            <div class="foundation-card">
              <div class="foundation-title title-stacked-new">
                <h3 class="title-main">语境图谱</h3>
                <span class="title-en">Context Graph</span>
              </div>
              <div class="foundation-description">
                <div class="foundation-desc-main">
                  DataArc 自主研发7项核心技术，以语境图谱为基础，结合合成数据与智能搜索，
                  相比传统方案，建图效率提升218倍，研究准确率提升至90.2%，
                  实战良品率提升至95%，全面增强问答、洞察与决策能力。
                </div>
              </div>
            </div>
          </div>

          <!-- 连接指示器 -->
          <div class="connection-indicators">
            <div class="connection-indicator left">
              <div class="connection-arrow">↓</div>
              <div class="connection-label">
                <div class="connection-main">在图上思考</div>
                <div class="connection-en">Think on Graph</div>
              </div>
            </div>
            <div class="connection-indicator right">
              <div class="connection-arrow">↓</div>
              <div class="connection-label">
                <div class="connection-main">在图上合成</div>
                <div class="connection-en">Synthesis on Graph</div>
              </div>
            </div>
          </div>

          <!-- 技术分支 -->
          <div class="tech-branches">
            <!-- 左排：搜索技术 -->
            <div class="branch-section">
              <div class="tech-item">
                <div class="tech-title">
                  <div class="icon-wrapper">
                    <img src="/images/tech-icons/icon_01.png" alt="更聪明" class="tech-icon-img">
                    <div class="icon-glow"></div>
                  </div>
                  <div class="title-stacked-new">
                    <span class="title-main">更聪明</span>
                    <span class="title-en">Smarter</span>
                  </div>
                </div>
                <div class="tech-content">
                  <div class="tech-desc-main">ToG：推理更准，升至 90.2%</div>
                  <div class="tech-desc-en">ToG: More accurate reasoning, up to 90.2%</div>
                </div>
              </div>
              
              <div class="tech-item">
                <div class="tech-title">
                  <div class="icon-wrapper">
                    <img src="/images/tech-icons/icon_02.png" alt="更专业" class="tech-icon-img">
                    <div class="icon-glow"></div>
                  </div>
                  <div class="title-stacked-new">
                    <span class="title-main">更专业</span>
                    <span class="title-en">Professional</span>
                  </div>
                </div>
                <div class="tech-content">
                  <div class="tech-desc-main">SQL-R1：数据查询更便捷</div>
                  <div class="tech-desc-en">SQL-R1: More convenient data querying</div>
                </div>
              </div>
              
              <div class="tech-item">
                <div class="tech-title">
                  <div class="icon-wrapper">
                    <img src="/images/tech-icons/icon_03.png" alt="更准确" class="tech-icon-img">
                    <div class="icon-glow"></div>
                  </div>
                  <div class="title-stacked-new">
                    <span class="title-main">更准确</span>
                    <span class="title-en">Accurate</span>
                  </div>
                </div>
                <div class="tech-content">
                  <div class="tech-desc-main">RAG：准确率 提升至 92%</div>
                  <div class="tech-desc-en">RAG: Accuracy improved to 92%</div>
                </div>
              </div>
            </div>

            <!-- 右排：合成数据技术 -->
            <div class="branch-section">
              <div class="tech-item">
                <div class="tech-title">
                  <div class="icon-wrapper">
                    <img src="/images/tech-icons/icon_04.png" alt="更懂行" class="tech-icon-img">
                    <div class="icon-glow"></div>
                  </div>
                  <div class="title-stacked-new">
                    <span class="title-main">更懂行</span>
                    <span class="title-en">Expert</span>
                  </div>
                </div>
                <div class="tech-content">
                  <div class="tech-desc-main">SoG：提升模型能力 25.4%</div>
                  <div class="tech-desc-en">SoG: Model capability improved by 25.4%</div>
                </div>
              </div>
              
              <div class="tech-item">
                <div class="tech-title">
                  <div class="icon-wrapper">
                    <img src="/images/tech-icons/icon_05.png" alt="更靠谱" class="tech-icon-img">
                    <div class="icon-glow"></div>
                  </div>
                  <div class="title-stacked-new">
                    <span class="title-main">更靠谱</span>
                    <span class="title-en">Reliable</span>
                  </div>
                </div>
                <div class="tech-content">
                  <div class="tech-desc-main">Judge：降低90%的数据风险</div>
                  <div class="tech-desc-en">Judge: Reduce data risk by 90%</div>
                </div>
              </div>
              
              <div class="tech-item">
                <div class="tech-title">
                  <div class="icon-wrapper">
                    <img src="/images/tech-icons/icon_06.png" alt="更安全" class="tech-icon-img">
                    <div class="icon-glow"></div>
                  </div>
                  <div class="title-stacked-new">
                    <span class="title-main">更安全</span>
                    <span class="title-en">Secure</span>
                  </div>
                </div>
                <div class="tech-content">
                  <div class="tech-desc-main">SoE：敏感数据0泄露</div>
                  <div class="tech-desc-en">SoE: Zero sensitive data leakage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Context Graph -->
    <section class="context-graph">
      <div class="container">
        <div class="title-with-orbs orbs-context">
        <h2 class="section-title title-stacked text-center">
          <span class="title-main">Living Knowledge Base 核心技术</span>
          <span class="title-en">Core Technology</span>
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
          <p class="content-main">
          相比传统方案，建图效率提升 218倍，研究准确率提升至 90.2%，
          实战良品率提升至 95%，全面增强问答、洞察与决策能力。
        </p>
          <p class="content-en">
            Compared to traditional solutions, graph building efficiency improved by 218x, research accuracy improved to 90.2%, 
            actual good product rate improved to 95%, comprehensively enhancing Q&A, insights and decision-making capabilities.
          </p>
        </div>
        <div class="graph-visual-placeholder">
          【需要图片：首页-语境图谱-可视化图表.png - 知识图谱网络图/数据连接图】
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section class="news">
      <div class="container">
        <div class="title-with-orbs orbs-news">
        <h2 class="section-title title-stacked">
          <span class="title-main">新闻媒体</span>
          <span class="title-en">News & Media</span>
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
          <p class="content-main">以合成数据驱动的智能体为核心，提供多场景 AI 应用方案。</p>
          <p class="content-en">With synthetic data-driven agents at the core, providing multi-scenario AI application solutions.</p>
        </div>
        
        <div class="news-grid">
          <div class="news-card">
            <div class="news-image">
              <div class="news-placeholder">【需要图片：首页-新闻-AI教育趋势.png】</div>
            </div>
            <div class="news-content">
              <h4 class="title-level-4">AI赋能教育：新趋势与洞察</h4>
              <p class="news-date text-sm font-normal text-quaternary">2024年5月12日</p>
            </div>
          </div>
          
          <div class="news-card">
            <div class="news-image">
              <div class="news-placeholder">【需要图片：首页-新闻-数据安全.png】</div>
            </div>
            <div class="news-content">
              <h4 class="title-level-4">合成数据保护企业隐私安全</h4>
              <p class="news-date text-sm font-normal text-quaternary">2024年4月28日</p>
            </div>
          </div>
          
          <div class="news-card">
            <div class="news-image">
              <div class="news-placeholder">【需要图片：首页-新闻-行业峰会.png】</div>
            </div>
            <div class="news-content">
                              <h4 class="title-level-4">DataArc亮相AI行业峰会</h4>
              <p class="news-date text-sm font-normal text-quaternary">2024年4月15日</p>
            </div>
          </div>
          
          <div class="news-card">
            <div class="news-image">
              <div class="news-placeholder">【需要图片：首页-新闻-技术创新.png】</div>
            </div>
            <div class="news-content">
                              <h4 class="title-level-4">语境图谱技术重大突破</h4>
              <p class="news-date text-sm font-normal text-quaternary">2024年3月30日</p>
            </div>
          </div>
          
          <div class="news-card">
            <div class="news-image">
              <div class="news-placeholder">【需要图片：首页-新闻-合作伙伴.png】</div>
            </div>
            <div class="news-content">
                              <h4 class="title-level-4">与知名企业达成战略合作</h4>
              <p class="news-date text-sm font-normal text-quaternary">2024年3月20日</p>
            </div>
          </div>
          
          <div class="news-card">
            <div class="news-image">
              <div class="news-placeholder">【需要图片：首页-新闻-产品发布.png】</div>
            </div>
            <div class="news-content">
                              <h4 class="title-level-4">Living KB 2.0正式发布</h4>
              <p class="news-date text-sm font-normal text-quaternary">2024年3月10日</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Strength Section -->
    <section id="team-strength" class="team-strength">
      <div class="container">
        <div class="section-header">
          <div class="section-title-group title-with-orbs orbs-team">
            <h2 class="section-title title-stacked">
              <span class="title-main">团队实力</span>
              <span class="title-en">Team Strength</span>
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
            在沈向洋院士支持下由IDEA研究院孵化，拥有深厚研究积累和丰富项目资源的精英团队。
          </p>
        </div>
        
        <div class="team-grid">
          <div class="team-card glass-card">
            <div class="team-icon">
              <div class="icon-wrapper">
                <img src="/images/icons/团队规模图标.png" alt="团队规模" class="icon-img">
                <div class="icon-glow"></div>
              </div>
            </div>
            <div class="team-stat">
              <span class="stat-number">12人</span>
              <span class="stat-label">精英团队</span>
            </div>
            <p class="text-secondary">全职核心团队，计划维持15-20人精英规模</p>
          </div>
          
          <div class="team-card glass-card">
            <div class="team-icon">
              <div class="icon-wrapper">
                <img src="/images/icons/专家顾问图标.png" alt="专家顾问" class="icon-img">
                <div class="icon-glow"></div>
              </div>
            </div>
            <div class="team-stat">
              <span class="stat-number">世界级</span>
              <span class="stat-label">专家顾问</span>
            </div>
            <p class="text-secondary">沈向洋院士支持，世界知名专家作为项目顾问团队</p>
          </div>
          
          <div class="team-card glass-card">
            <div class="team-icon">
              <div class="icon-wrapper">
                <img src="/images/icons/研究积累图标.png" alt="研究积累" class="icon-img">
                <div class="icon-glow"></div>
              </div>
            </div>
            <div class="team-stat">
              <span class="stat-number">深厚</span>
              <span class="stat-label">研究积累</span>
            </div>
            <p class="text-secondary">团队相关领域研究积累深厚，业界知名度高</p>
          </div>
          
          <div class="team-card glass-card">
            <div class="team-icon">
              <div class="icon-wrapper">
                <img src="/images/icons/IDEA研究院图标.png" alt="IDEA研究院" class="icon-img">
                <div class="icon-glow"></div>
              </div>
            </div>
            <div class="team-stat">
              <span class="stat-number">IDEA</span>
              <span class="stat-label">研究院孵化</span>
            </div>
            <p class="text-secondary">由IDEA研究院推动孵化，项目资源丰富</p>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import KnowledgeGraphAnimation from '@/components/KnowledgeGraphAnimation.vue'
import { useFloatingOrbs } from '@/composables/useFloatingOrbs.js'

// 初始化浮动小球
const { orbSections, generateOrbs, getOrbStyle } = useFloatingOrbs()

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















 