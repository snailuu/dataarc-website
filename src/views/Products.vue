<template>
  <div class="products-page">
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
            <span class="title-main company-main-title">{{ t('products.hero.title') }}</span>
            <span class="title-highlight title-multilevel">
              <span class="title-main company-future-title">{{ t('products.hero.subtitle') }}</span>
            </span>
            <span class="subtitle-en company-english-line">{{ t('products.hero.englishLine') }}</span>
          </h1>
          <div class="hero-description content-bilingual">
            <p class="content-main">{{ t('products.hero.description') }}</p>
            <p class="content-en">{{ t('products.hero.descriptionEn') }}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Product Comparison Matrix -->
    <section id="comparison-matrix" class="product-matrix">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ t('products.comparison.title') }}</h2>
          <p class="section-subtitle">{{ t('products.comparison.subtitle') }}</p>
        </div>
        
        <div class="comparison-table">
          <div class="comparison-header">
            <div class="comparison-cell header-empty"></div>
            <div class="comparison-cell header-product">
              <h3 class="title-level-3">{{ t('products.comparison.livingkb.name') }}</h3>
              <p class="content-main">{{ t('products.comparison.livingkb.subtitle') }}</p>
            </div>
            <div class="comparison-cell header-product">
              <h3 class="title-level-3">{{ t('products.comparison.syndata.name') }}</h3>
              <p class="content-main">{{ t('products.comparison.syndata.subtitle') }}</p>
            </div>
            </div>
            
          <div class="comparison-row">
            <div class="comparison-cell row-label">
              <h4 class="title-main">{{ t('products.comparison.rows.positioning.label') }}</h4>
            </div>
            <div class="comparison-cell">
              <p class="content-main">{{ t('products.comparison.rows.positioning.livingkb') }}</p>
            </div>
            <div class="comparison-cell">
              <p class="content-main">{{ t('products.comparison.rows.positioning.syndata') }}</p>
            </div>
          </div>
          
          <div class="comparison-row">
            <div class="comparison-cell row-label">
              <h4 class="title-main">{{ t('products.comparison.rows.value.label') }}</h4>
            </div>
            <div class="comparison-cell">
              <p class="content-main">{{ t('products.comparison.rows.value.livingkb') }}</p>
            </div>
            <div class="comparison-cell">
              <p class="content-main">{{ t('products.comparison.rows.value.syndata') }}</p>
            </div>
          </div>
          
          <div class="comparison-row">
            <div class="comparison-cell row-label">
              <h4 class="title-main">{{ t('products.comparison.rows.technology.label') }}</h4>
            </div>
            <div class="comparison-cell">
              <p class="content-main">{{ t('products.comparison.rows.technology.livingkb') }}</p>
            </div>
            <div class="comparison-cell">
              <p class="content-main">{{ t('products.comparison.rows.technology.syndata') }}</p>
            </div>
          </div>
          
          <div class="comparison-row">
            <div class="comparison-cell row-label">
              <h4 class="title-main">{{ t('products.comparison.rows.scenarios.label') }}</h4>
            </div>
            <div class="comparison-cell">
              <p class="content-main">{{ t('products.comparison.rows.scenarios.livingkb') }}</p>
            </div>
            <div class="comparison-cell">
              <p class="content-main">{{ t('products.comparison.rows.scenarios.syndata') }}</p>
            </div>
          </div>
          
          <div class="comparison-row">
            <div class="comparison-cell row-label">
              <h4 class="title-main">{{ t('products.comparison.rows.coretech.label') }}</h4>
            </div>
            <div class="comparison-cell">
              <ul class="list-bilingual">
                <li class="list-item-bilingual">
                  <span class="list-main">{{ t('products.livingkb.modules.access.features.contextGraph.title') }}</span>
                  <span class="list-en">Context Graph</span>
                </li>
                <li class="list-item-bilingual">
                  <span class="list-main">{{ t('products.livingkb.modules.analysis.features.tog.title') }}</span>
                  <span class="list-en">Think-on-Graph</span>
                </li>
                <li class="list-item-bilingual">
                  <span class="list-main">{{ t('products.livingkb.modules.analysis.features.rag.title') }}</span>
                  <span class="list-en">Retrieval Augmented Generation</span>
                </li>
                <li class="list-item-bilingual">
                  <span class="list-main">{{ t('products.livingkb.modules.analysis.features.sql.title') }}</span>
                  <span class="list-en">SQL-R1 Smart Query</span>
                </li>

              </ul>
            </div>
            <div class="comparison-cell">
              <ul class="list-bilingual">
                <li class="list-item-bilingual">
                  <span class="list-main">{{ t('products.syndata.modules.generation.features.sog.title') }}</span>
                  <span class="list-en">SoG Graph Synthesis</span>
                </li>
                <li class="list-item-bilingual">
                  <span class="list-main">{{ t('products.syndata.modules.training.features.soe.title') }}</span>
                  <span class="list-en">SoE Encryption Training</span>
                </li>
                <li class="list-item-bilingual">
                  <span class="list-main">{{ t('products.syndata.modules.generation.features.judge.title') }}</span>
                  <span class="list-en">Judge Auto-Evaluation</span>
                </li>
                <li class="list-item-bilingual">
                  <span class="list-main">{{ t('products.syndata.modules.customization.title') }}</span>
                  <span class="list-en">Agent Customization Platform</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="comparison-row">
            <div class="comparison-cell row-label">
              <h4 class="title-main">{{ t('products.comparison.rows.usecases.label') }}</h4>
            </div>
            <div class="comparison-cell">
              <ul class="list-bilingual">
                <li class="list-item-bilingual">
                  <span class="list-main">{{ t('products.livingkb.scenarios.items.knowledge.title') }}</span>
                  <span class="list-en">Enterprise Knowledge Intelligence</span>
                </li>
                <li class="list-item-bilingual">
                  <span class="list-main">{{ t('products.livingkb.scenarios.items.collaboration.title') }}</span>
                  <span class="list-en">Cross-department Knowledge Collaboration</span>
                </li>
                <li class="list-item-bilingual">
                  <span class="list-main">{{ t('products.livingkb.scenarios.items.decision.title') }}</span>
                  <span class="list-en">GenAI-driven Decision Support</span>
                </li>
              </ul>
            </div>
            <div class="comparison-cell">
              <ul class="list-bilingual">
                <li class="list-item-bilingual">
                  <span class="list-main">大模型训练数据扩充</span>
                  <span class="list-en">LLM Training Data Augmentation</span>
                </li>
                <li class="list-item-bilingual">
                  <span class="list-main">隐私保护数据共享</span>
                  <span class="list-en">Privacy-preserving Data Sharing</span>
                </li>
                <li class="list-item-bilingual">
                  <span class="list-main">冷启动数据问题解决</span>
                  <span class="list-en">Cold Start Data Problem Solution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LivingKB Detailed Introduction -->
    <section id="livingkb-intro" class="product-detail livingkb-section">
      <div class="container">
        <div class="product-intro">
          <div class="product-badge">Living Knowledge Base</div>
          <h2 class="title-level-2">{{ t('products.livingkb.title') }}</h2>
          <p class="section-subtitle">{{ t('products.livingkb.subtitle') }}</p>
        </div>

        <!-- Four Core Modules -->
        <div class="modules-section">
          <h3 class="title-level-3">{{ t('products.livingkb.modules.title', 'Four Core Functional Modules') }}</h3>
          
          <!-- Module 1: Knowledge Integration -->
          <div class="module-card">
            <div class="module-header">
              <div class="module-number">01</div>
              <div class="module-content-wrapper">
                <h4 class="title-main">{{ t('products.livingkb.modules.access.title') }}</h4>
                <p class="content-main">{{ t('products.livingkb.modules.access.description') }}</p>
              </div>
            </div>
            
            <div class="module-content">
              <div class="feature-grid">
                <div class="feature-item">
                  <div class="icon-wrapper">
                  <img src="/images/icons/语境图谱构建图标.png" alt="语境图谱构建" class="icon-img small" />
                  <div class="icon-glow"></div>
                </div>
                  <h5 class="title-main">{{ t('products.livingkb.modules.access.features.contextGraph.title') }}</h5>
                  <p class="content-main">{{ t('products.livingkb.modules.access.features.contextGraph.description') }}</p>
                </div>
                
                <div class="feature-item">
                  <div class="icon-wrapper">
                  <img src="/images/icons/多源数据接入图标.png" alt="多源数据接入" class="icon-img small" />
                  <div class="icon-glow"></div>
                </div>
                  <h5 class="title-main">{{ t('products.livingkb.modules.access.features.multiSource.title') }}</h5>
                  <p class="content-main">{{ t('products.livingkb.modules.access.features.multiSource.description') }}</p>
                </div>
                
                <div class="feature-item">
                  <div class="icon-wrapper">
                  <img src="/images/icons/知识挖掘图标.png" alt="知识挖掘" class="icon-img small" />
                  <div class="icon-glow"></div>
                </div>
                  <h5 class="title-main">{{ t('products.livingkb.modules.access.features.mining.title') }}</h5>
                  <p class="content-main">{{ t('products.livingkb.modules.access.features.mining.description') }}</p>
                </div>
                
                <div class="feature-item">
                  <div class="icon-wrapper">
                  <img src="/images/icons/合成数据扩充图标.png" alt="合成数据扩充" class="icon-img small" />
                  <div class="icon-glow"></div>
                </div>
                  <h5 class="title-main">{{ t('products.livingkb.modules.access.features.syntheticData.title') }}</h5>
                  <p class="content-main">{{ t('products.livingkb.modules.access.features.syntheticData.description') }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Module 2: Knowledge Management -->
          <div class="module-card">
            <div class="module-header">
              <div class="module-number">02</div>
              <div class="module-content-wrapper">
                <h4 class="title-main">{{ t('products.livingkb.modules.management.title') }}</h4>
                <p class="content-main">{{ t('products.livingkb.modules.management.description') }}</p>
              </div>
            </div>
            
            <div class="module-content">
              <div class="feature-grid">
                <div class="feature-item">
                  <div class="icon-wrapper">
                <img src="/images/icons/知识管理图标.png" alt="知识管理" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
                  <h5 class="title-main">{{ t('products.livingkb.modules.management.features.crud.title') }}</h5>
                  <p class="content-main">{{ t('products.livingkb.modules.management.features.crud.description') }}</p>
                </div>
            
                <div class="feature-item">
                  <div class="icon-wrapper">
                <img src="/images/icons/权限管理图标.png" alt="权限管理" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
                  <h5 class="title-main">{{ t('products.livingkb.modules.management.features.permission.title') }}</h5>
                  <p class="content-main">{{ t('products.livingkb.modules.management.features.permission.description') }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Module 3: Analysis Tools -->
          <div class="module-card">
            <div class="module-header">
              <div class="module-number">03</div>
              <div class="module-content-wrapper">
                <h4 class="title-main">{{ t('products.livingkb.modules.analysis.title') }}</h4>
                <p class="content-main">{{ t('products.livingkb.modules.analysis.description') }}</p>
              </div>
            </div>
            
            <div class="module-content">
              <div class="feature-grid">
                <div class="feature-item">
                  <div class="icon-wrapper">
                <img src="/images/icons/RAG检索图标.png" alt="RAG检索" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
                  <h5 class="title-main">{{ t('products.livingkb.modules.analysis.features.rag.title') }}</h5>
                  <p class="content-main">{{ t('products.livingkb.modules.analysis.features.rag.description') }}</p>
                </div>
                
                <div class="feature-item">
                  <div class="icon-wrapper">
                <img src="/images/icons/SQL查询图标.png" alt="SQL查询" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
                  <h5 class="title-main">{{ t('products.livingkb.modules.analysis.features.sql.title') }}</h5>
                  <p class="content-main">{{ t('products.livingkb.modules.analysis.features.sql.description') }}</p>
                </div>
                
                <div class="feature-item">
                  <div class="icon-wrapper">
                <img src="/images/icons/图推理图标.png" alt="图推理" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
                  <h5 class="title-main">{{ t('products.livingkb.modules.analysis.features.tog.title') }}</h5>
                  <p class="content-main">{{ t('products.livingkb.modules.analysis.features.tog.description') }}</p>
                </div>
                


                <div class="feature-item">
                  <div class="icon-wrapper">
                <img src="/images/icons/决策分析图标.png" alt="决策分析" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
                  <h5 class="title-main">{{ t('products.livingkb.modules.analysis.features.agent.title') }}</h5>
                  <p class="content-main">{{ t('products.livingkb.modules.analysis.features.agent.description') }}</p>
                </div>
              </div>
            </div>
          </div>

        <!-- Module 4: Agent Hub -->
        <div class="module-card">
            <div class="module-header">
              <div class="module-number">04</div>
              <div class="module-content-wrapper">
                <h4 class="title-main">{{ t('products.livingkb.modules.ecosystem.title') }}</h4>
                <p class="content-main">{{ t('products.livingkb.modules.ecosystem.description') }}</p>
              </div>
            </div>
            
            <div class="module-content">
              <div class="feature-grid">
                <div class="feature-item">
                  <div class="icon-wrapper">
                <img src="/images/icons/Agent Hub图标.png" alt="Agent Hub" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
                  <h5 class="title-main">{{ t('products.livingkb.modules.ecosystem.features.multiAgent.title') }}</h5>
                  <p class="content-main">{{ t('products.livingkb.modules.ecosystem.features.multiAgent.description') }}</p>
                </div>
                
                <div class="feature-item">
                  <div class="icon-wrapper">
                <img src="/images/icons/开发工具图标.png" alt="开发工具" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
                  <h5 class="title-main">{{ t('products.livingkb.modules.ecosystem.features.devTools.title') }}</h5>
                  <p class="content-main">{{ t('products.livingkb.modules.ecosystem.features.devTools.description') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- LivingKB Architecture -->
        <div class="architecture-section">
          <h3 class="title-level-3">{{ t('products.livingkb.architecture.title') }}</h3>
          <div class="arch-visual">
            <div class="arch-placeholder">{{ t('products.livingkb.architecture.placeholder') }}</div>
          </div>
        </div>
            
        <!-- LivingKB Use Cases -->
        <div class="use-cases-section">
          <h3 class="title-level-3">{{ t('products.livingkb.scenarios.title') }}</h3>
          <div class="cases-grid">
            <div class="case-item">
              <div class="icon-wrapper">
                <img src="/images/icons/企业知识管理图标.png" alt="企业知识管理" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
              <h4 class="title-main">{{ t('products.livingkb.scenarios.items.knowledge.title') }}</h4>
              <p class="content-main">{{ t('products.livingkb.scenarios.items.knowledge.description') }}</p>
            </div>
            
            <div class="case-item">
              <div class="icon-wrapper">
                <img src="/images/icons/跨部门协同图标.png" alt="跨部门协同" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
              <h4 class="title-main">{{ t('products.livingkb.scenarios.items.collaboration.title') }}</h4>
              <p class="content-main">{{ t('products.livingkb.scenarios.items.collaboration.description') }}</p>
            </div>
            
            <div class="case-item">
              <div class="icon-wrapper">
                <img src="/images/icons/AI决策支持图标.png" alt="AI决策支持" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
              <h4 class="title-main">{{ t('products.livingkb.scenarios.items.decision.title') }}</h4>
              <p class="content-main">{{ t('products.livingkb.scenarios.items.decision.description') }}</p>
            </div>
          </div>
          
          <!-- Navigation Actions -->
          <div class="navigation-actions">
            <button @click="backToHome" class="btn btn-secondary btn-lg">
              <span class="btn-text-main">{{ t('common.buttons.backToHome') }}</span>
            </button>
            <a href="#synergy-value" class="btn btn-primary btn-lg">
              <span class="btn-text-main">{{ t('common.buttons.continueReading') }}</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- SynData Platform Detailed Introduction -->
    <section id="syndata-intro" class="product-detail syndata-section">
      <div class="container">
        <div class="product-intro">
          <div class="product-badge syndata-badge">{{ t('products.syndata.badge') }}</div>
          <h2 class="title-level-2">{{ t('products.syndata.title') }}</h2>
          <p class="section-subtitle">{{ t('products.syndata.description') }}</p>
            </div>
            
        <!-- Four Core Modules -->
        <div class="modules-section">
          <h3 class="title-level-3">{{ t('products.syndata.modules.title') }}</h3>
          
          <!-- Module 1: Data Integration -->
          <div class="module-card">
            <div class="module-header">
              <div class="module-number">01</div>
              <div class="module-content-wrapper">
                <h4 class="title-main">{{ t('products.syndata.modules.integration.title') }}</h4>
                <p class="content-main">{{ t('products.syndata.modules.integration.description') }}</p>
              </div>
            </div>

            <div class="module-content">
              <div class="feature-grid">
                <div class="feature-item">
                  <div class="icon-wrapper">
                <img src="/images/icons/多源数据图标.png" alt="多源数据" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
                  <h5 class="title-main">{{ t('products.syndata.modules.integration.features.sources.title') }}</h5>
                  <p class="content-main">{{ t('products.syndata.modules.integration.features.sources.description') }}</p>
            </div>
            
                <div class="feature-item">
                  <div class="icon-wrapper">
                <img src="/images/icons/数据整合图标.png" alt="数据整合" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
                  <h5 class="title-main">{{ t('products.syndata.modules.integration.features.standardization.title') }}</h5>
                  <p class="content-main">{{ t('products.syndata.modules.integration.features.standardization.description') }}</p>
            </div>
            
                <div class="feature-item">
                  <div class="icon-wrapper">
                <img src="/images/icons/合规分析图标.png" alt="合规分析" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
                  <h5 class="title-main">{{ t('products.syndata.modules.integration.features.compliance.title') }}</h5>
                  <p class="content-main">{{ t('products.syndata.modules.integration.features.compliance.description') }}</p>
                </div>
              </div>
            </div>
            </div>
            
          <!-- Module 2: Synthetic Data Generation -->
          <div class="module-card">
            <div class="module-header">
              <div class="module-number">02</div>
              <div class="module-content-wrapper">
                <h4 class="title-main">{{ t('products.syndata.modules.generation.title') }}</h4>
                <p class="content-main">{{ t('products.syndata.modules.generation.description') }}</p>
              </div>
            </div>
            
            <div class="module-content">
              <div class="feature-grid">
                <div class="feature-item">
                  <div class="icon-wrapper">
                <img src="/images/icons/SoG技术图标.png" alt="SoG技术" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
                  <h5 class="title-main">{{ t('products.syndata.modules.generation.features.sog.title') }}</h5>
                  <p class="content-main">{{ t('products.syndata.modules.generation.features.sog.description') }}</p>
            </div>
            
                <div class="feature-item">
                  <div class="icon-wrapper">
                <img src="/images/icons/文本合成图标.png" alt="文本合成" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
                  <h5 class="title-main">{{ t('products.syndata.modules.generation.features.text.title') }}</h5>
                  <p class="content-main">{{ t('products.syndata.modules.generation.features.text.description') }}</p>
            </div>
                
                <div class="feature-item">
                  <div class="icon-wrapper">
                <img src="/images/icons/时序数据图标.png" alt="时序数据" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
                  <h5 class="title-main">{{ t('products.syndata.modules.generation.features.timeSeries.title') }}</h5>
                  <p class="content-main">{{ t('products.syndata.modules.generation.features.timeSeries.description') }}</p>
          </div>
                
                <div class="feature-item">
                  <div class="icon-wrapper">
                <img src="/images/icons/表格数据图标.png" alt="表格数据" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
                  <h5 class="title-main">{{ t('products.syndata.modules.generation.features.tabular.title') }}</h5>
                  <p class="content-main">{{ t('products.syndata.modules.generation.features.tabular.description') }}</p>
                </div>
                
                <div class="feature-item">
                  <div class="icon-wrapper">
                <img src="/images/icons/质量评估图标.png" alt="自动评估" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
                  <h5 class="title-main">{{ t('products.syndata.modules.generation.features.judge.title') }}</h5>
                  <p class="content-main">{{ t('products.syndata.modules.generation.features.judge.description') }}</p>
                </div>
                
                <div class="feature-item">
                  <div class="icon-wrapper">
                <img src="/images/icons/具身数据图标.png" alt="具身数据" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
                  <h5 class="title-main">{{ t('products.syndata.modules.generation.features.embodied.title') }}</h5>
                  <p class="content-main">{{ t('products.syndata.modules.generation.features.embodied.description') }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Module 3: Encryption Training -->
          <div class="module-card">
            <div class="module-header">
              <div class="module-number">03</div>
              <div class="module-content-wrapper">
                <h4 class="title-main">{{ t('products.syndata.modules.training.title') }}</h4>
                <p class="content-main">{{ t('products.syndata.modules.training.description') }}</p>
              </div>
            </div>
            
            <div class="module-content">
              <div class="feature-grid">
                <div class="feature-item">
                  <div class="icon-wrapper">
                <img src="/images/icons/SoE加密图标.png" alt="SoE加密" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
                  <h5 class="title-main">{{ t('products.syndata.modules.training.features.soe.title') }}</h5>
                  <p class="content-main">{{ t('products.syndata.modules.training.features.soe.description') }}</p>
                </div>
                
                <div class="feature-item">
                  <div class="icon-wrapper">
                <img src="/images/icons/质量评估图标.png" alt="质量评估" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
                  <h5 class="title-main">{{ t('products.syndata.modules.training.features.quality.title') }}</h5>
                  <p class="content-main">{{ t('products.syndata.modules.training.features.quality.description') }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Module 4: Agent Customization -->
          <div class="module-card">
            <div class="module-header">
              <div class="module-number">04</div>
              <div class="module-content-wrapper">
                <h4 class="title-main">{{ t('products.syndata.modules.customization.title') }}</h4>
                <p class="content-main">{{ t('products.syndata.modules.customization.description') }}</p>
              </div>
            </div>
            
            <div class="module-content">
              <div class="feature-grid">
                <div class="feature-item">
                  <div class="icon-wrapper">
                <img src="/images/icons/预设Agent图标.png" alt="预设Agent" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
                  <h5 class="title-main">{{ t('products.syndata.modules.customization.features.prebuilt.title') }}</h5>
                  <p class="content-main">{{ t('products.syndata.modules.customization.features.prebuilt.description') }}</p>
                </div>
                
                <div class="feature-item">
                  <div class="icon-wrapper">
                <img src="/images/icons/企业定制图标.png" alt="企业定制" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
                  <h5 class="title-main">{{ t('products.syndata.modules.customization.features.enterprise.title') }}</h5>
                  <p class="content-main">{{ t('products.syndata.modules.customization.features.enterprise.description') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SynData Architecture -->
        <div class="architecture-section">
          <h3 class="title-level-3">{{ t('products.syndata.architecture.title') }}</h3>
          <div class="arch-visual">
            <div class="arch-placeholder">【需要图片：SynData Platform完整技术架构图】</div>
          </div>
        </div>

        <!-- SynData Use Cases -->
        <div class="use-cases-section">
          <h3 class="title-level-3">{{ t('products.syndata.scenarios.title') }}</h3>
          <div class="cases-grid">
            <div class="case-item">
              <div class="icon-wrapper">
                <img src="/images/icons/模型训练图标.png" alt="模型训练" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
              <h4 class="title-main">{{ t('products.syndata.scenarios.items.training.title') }}</h4>
              <p class="content-main">{{ t('products.syndata.scenarios.items.training.description') }}</p>
            </div>
            
            <div class="case-item">
              <div class="icon-wrapper">
                <img src="/images/icons/隐私保护图标.png" alt="隐私保护" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
              <h4 class="title-main">{{ t('products.syndata.scenarios.items.privacy.title') }}</h4>
              <p class="content-main">{{ t('products.syndata.scenarios.items.privacy.description') }}</p>
            </div>
            
            <div class="case-item">
              <div class="icon-wrapper">
                <img src="/images/icons/冷启动图标.png" alt="冷启动" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
              <h4 class="title-main">{{ t('products.syndata.scenarios.items.coldStart.title') }}</h4>
              <p class="content-main">{{ t('products.syndata.scenarios.items.coldStart.description') }}</p>
            </div>
            
            <div class="case-item">
              <div class="icon-wrapper">
                <img src="/images/icons/数据支撑图标.png" alt="数据支撑" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
              <h4 class="title-main">{{ t('products.syndata.scenarios.items.support.title') }}</h4>
              <p class="content-main">{{ t('products.syndata.scenarios.items.support.description') }}</p>
            </div>
          </div>
          
          <!-- Navigation Actions -->
          <div class="navigation-actions">
            <button @click="backToHome" class="btn btn-secondary btn-lg">
              <span class="btn-text-main">{{ t('common.buttons.backToHome') }}</span>
            </button>
            <a href="#synergy-value" class="btn btn-primary btn-lg">
              <span class="btn-text-main">{{ t('common.buttons.continueReading') }}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Product Synergy Value -->
    <section id="synergy-value" class="synergy-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ t('products.synergy.title') }}</h2>
          <p class="section-subtitle">{{ t('products.synergy.subtitle') }}</p>
        </div>
        
        <div class="synergy-grid">
          <div class="synergy-item">
            <div class="icon-wrapper">
                <img src="/images/icons/知识驱动合成图标.png" alt="知识驱动合成" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
            <h3 class="synergy-title">{{ t('products.synergy.values.living.title') }}</h3>
            <div class="synergy-content">
              <h4 class="content-subtitle">{{ t('products.synergy.values.living.mechanism.title') }}</h4>
              <p class="content-main">{{ t('products.synergy.values.living.mechanism.description') }}</p>
              <h4 class="content-subtitle">{{ t('products.synergy.values.living.value.title') }}</h4>
              <ul class="list-standard">
                <li v-for="(item, index) in synergyValueItems.living" :key="index">{{ item }}</li>
              </ul>
            </div>
          </div>
          
          <div class="synergy-item">
            <div class="icon-wrapper">
                <img src="/images/icons/知识指导生成图标.png" alt="知识指导生成" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
            <h3 class="synergy-title">{{ t('products.synergy.values.context.title') }}</h3>
            <div class="synergy-content">
              <h4 class="content-subtitle">{{ t('products.synergy.values.context.mechanism.title') }}</h4>
              <p class="content-main">{{ t('products.synergy.values.context.mechanism.description') }}</p>
              <h4 class="content-subtitle">{{ t('products.synergy.values.context.value.title') }}</h4>
              <ul class="list-standard">
                <li v-for="(item, index) in synergyValueItems.context" :key="index">{{ item }}</li>
              </ul>
            </div>
          </div>
          
          <div class="synergy-item">
            <div class="icon-wrapper">
                <img src="/images/icons/闭环反馈图标.png" alt="闭环反馈" class="icon-img" />
                <div class="icon-glow"></div>
              </div>
            <h3 class="synergy-title">{{ t('products.synergy.values.feedback.title') }}</h3>
            <div class="synergy-content">
              <h4 class="content-subtitle">{{ t('products.synergy.values.feedback.mechanism.title') }}</h4>
              <p class="content-main">{{ t('products.synergy.values.feedback.mechanism.description') }}</p>
              <h4 class="content-subtitle">{{ t('products.synergy.values.feedback.value.title') }}</h4>
              <ul class="list-standard">
                <li v-for="(item, index) in synergyValueItems.feedback" :key="index">{{ item }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Architecture Overview -->
    <section class="tech-overview">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ t('products.techOverview.title') }}</h2>
          <p class="section-subtitle">{{ t('products.techOverview.subtitle') }}</p>
        </div>
        
        <div class="arch-tabs">
          <div class="arch-tab-nav">
            <button
              class="arch-tab"
              :class="{ active: activeArchTab === 'livingkb' }"
              type="button"
              data-tab="livingkb"
              @click="setActiveArchTab('livingkb')"
            >
              {{ t('products.techOverview.tabs.livingkb') }}
            </button>
            <button
              class="arch-tab"
              :class="{ active: activeArchTab === 'syndata' }"
              type="button"
              data-tab="syndata"
              @click="setActiveArchTab('syndata')"
            >
              {{ t('products.techOverview.tabs.syndata') }}
            </button>
            <button
              class="arch-tab"
              :class="{ active: activeArchTab === 'integration' }"
              type="button"
              data-tab="integration"
              @click="setActiveArchTab('integration')"
            >
              {{ t('products.techOverview.tabs.integration') }}
            </button>
          </div>
          
          <div class="arch-tab-content">
            <div
              class="arch-panel"
              :class="{ active: activeArchTab === 'livingkb' }"
              id="livingkb"
            >
              <div class="arch-diagram">
                <div class="arch-placeholder">{{ t('products.techOverview.placeholders.livingkb') }}</div>
              </div>
            </div>
            
            <div
              class="arch-panel"
              :class="{ active: activeArchTab === 'syndata' }"
              id="syndata"
            >
              <div class="arch-diagram">
                <div class="arch-placeholder">{{ t('products.techOverview.placeholders.syndata') }}</div>
              </div>
            </div>
            
            <div
              class="arch-panel"
              :class="{ active: activeArchTab === 'integration' }"
              id="integration"
            >
              <div class="arch-diagram">
                <div class="arch-placeholder">{{ t('products.techOverview.placeholders.integration') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Success Cases -->
    <section id="success-cases" class="customer-cases">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">{{ t('products.cases.title') }}</h2>
          <p class="section-subtitle">{{ t('products.cases.subtitle') }}</p>
        </div>
        
          <div class="cases-grid">
            <div
              v-for="caseItem in productCases"
              :key="caseItem.id"
              class="case-card"
              :class="caseItem.cardClass"
            >
              <div class="case-header">
                <div class="case-badge" :class="caseItem.badgeClass">{{ caseItem.badge }}</div>
                <h3 class="case-title">{{ caseItem.title }}</h3>
                <p class="case-summary">{{ caseItem.summary }}</p>
              </div>
              <div class="case-content">
                <div
                  v-for="section in caseItem.sections"
                  :key="section.key"
                  :class="`case-${section.key}`"
                >
                  <h4 class="section-title">{{ section.title }}</h4>
                  <p class="section-content">{{ section.content }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="view-more-section">
            <router-link to="/cases" class="btn btn-primary btn-lg">
              <span class="btn-text-main">查看更多案例</span>
            </router-link>
          </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'

const { t, locale, messages } = useI18n()
const router = useRouter()

// Handle back to home with language preservation
const backToHome = () => {
  router.push({ 
    path: '/', 
    hash: '#products-overview'
  })
}

// Track which architecture tab is active
const activeArchTab = ref('livingkb')

const setActiveArchTab = (tabId) => {
  activeArchTab.value = tabId
}

// Get synergy value items as computed properties
const synergyValueItems = computed(() => {
  // Direct access to messages for arrays
  const currentLocale = locale.value
  const synergyData = messages.value[currentLocale]?.products?.synergy?.values

  if (synergyData) {
    return {
      living: synergyData.living?.value?.items || [
        '知识稀缺领域的数据补充',
        '新场景下的知识快速扩展',
        '保持知识库的时效性和完整性'
      ],
      context: synergyData.context?.value?.items || [
        '生成更符合业务语境的合成数据',
        '保持生成数据的知识一致性',
        '提升合成数据的质量和可用性'
      ],
      feedback: synergyData.feedback?.value?.items || [
        '构建自我增强的产品体系',
        '持续优化企业AI能力',
        '实现知识和数据的良性循环'
      ]
    }
  }

  // Fallback if messages not available
  return {
    living: ['知识稀缺领域的数据补充', '新场景下的知识快速扩展', '保持知识库的时效性和完整性'],
    context: ['生成更符合业务语境的合成数据', '保持生成数据的知识一致性', '提升合成数据的质量和可用性'],
    feedback: ['构建自我增强的产品体系', '持续优化企业AI能力', '实现知识和数据的良性循环'],
    complete: ['降低企业AI应用的技术门槛', '提供标准化的AI基础设施', '支持企业AI的快速部署和迭代']
  }
})

// Customer success data for the case grid - using computed for i18n
const productCases = computed(() => [
  {
    id: 'livingkb-investment',
    cardClass: 'livingkb-case',
    badge: 'LivingKB',
    badgeClass: null,
    title: t('products.cases.items.livingkbInvestment.title') || '头部投资机构',
    summary: t('products.cases.items.livingkbInvestment.summary') || '金融知识库',
    sections: [
      {
        key: 'challenge',
        title: t('products.cases.items.livingkbInvestment.sections.challenge.title') || '业务挑战',
        content: t('products.cases.items.livingkbInvestment.sections.challenge.content') || '投资项目信息管理与分析效率低下，知识分散难以有效利用'
      },
      {
        key: 'solution',
        title: t('products.cases.items.livingkbInvestment.sections.solution.title') || '解决方案',
        content: t('products.cases.items.livingkbInvestment.sections.solution.content') || 'LivingKB + 投资分析Agent，构建动态投资知识图谱'
      },
      {
        key: 'result',
        title: t('products.cases.items.livingkbInvestment.sections.result.title') || '实施效果',
        content: t('products.cases.items.livingkbInvestment.sections.result.content') || '项目分析效率提升，知识检索速度大幅改善'
      }
    ]
  },
  {
    id: 'syndata-ai-service',
    cardClass: 'livingkb-case',
    badge: 'SynData Platform',
    badgeClass: 'syndata-badge',
    title: t('products.cases.items.syndataAIService.title') || '头部AI服务商',
    summary: t('products.cases.items.syndataAIService.summary') || '智能客服优化',
    sections: [
      {
        key: 'challenge',
        title: t('products.cases.items.syndataAIService.sections.challenge.title') || '业务挑战',
        content: t('products.cases.items.syndataAIService.sections.challenge.content') || '银行AI客服意图识别准确率不足，训练数据稀缺'
      },
      {
        key: 'solution',
        title: t('products.cases.items.syndataAIService.sections.solution.title') || '解决方案',
        content: t('products.cases.items.syndataAIService.sections.solution.content') || 'SynData Platform + 合成对话数据，优化意图识别模型'
      },
      {
        key: 'result',
        title: t('products.cases.items.syndataAIService.sections.result.title') || '实施效果',
        content: t('products.cases.items.syndataAIService.sections.result.content') || '意图识别准确率从60%提升到67%'
      }
    ]
  },
  {
    id: 'livingkb-manufacturing',
    cardClass: 'livingkb-case',
    badge: 'LivingKB',
    badgeClass: null,
    title: t('products.cases.items.livingkbManufacturing.title') || '头部制造企业',
    summary: t('products.cases.items.livingkbManufacturing.summary') || '工业知识库',
    sections: [
      {
        key: 'challenge',
        title: t('products.cases.items.livingkbManufacturing.sections.challenge.title') || '业务挑战',
        content: t('products.cases.items.livingkbManufacturing.sections.challenge.content') || '工业制造工艺知识管理复杂，专业知识传承困难'
      },
      {
        key: 'solution',
        title: t('products.cases.items.livingkbManufacturing.sections.solution.title') || '解决方案',
        content: t('products.cases.items.livingkbManufacturing.sections.solution.content') || 'LivingKB + 工业场景定制，构建工艺知识图谱'
      },
      {
        key: 'result',
        title: t('products.cases.items.livingkbManufacturing.sections.result.title') || '实施效果',
        content: t('products.cases.items.livingkbManufacturing.sections.result.content') || '工艺知识标准化管理，新员工培训效率显著提升'
      }
    ]
  },
  {
    id: 'livingkb-cloud',
    cardClass: 'livingkb-case',
    badge: 'LivingKB',
    badgeClass: null,
    title: t('products.cases.items.livingkbCloud.title') || '头部云服务商',
    summary: t('products.cases.items.livingkbCloud.summary') || '医疗知识库',
    sections: [
      {
        key: 'challenge',
        title: t('products.cases.items.livingkbCloud.sections.challenge.title') || '业务挑战',
        content: t('products.cases.items.livingkbCloud.sections.challenge.content') || '医疗知识整合与AI应用场景复杂，数据标准化困难'
      },
      {
        key: 'solution',
        title: t('products.cases.items.livingkbCloud.sections.solution.title') || '解决方案',
        content: t('products.cases.items.livingkbCloud.sections.solution.content') || 'LivingKB + 医疗AI，构建医疗专业知识图谱'
      },
      {
        key: 'result',
        title: t('products.cases.items.livingkbCloud.sections.result.title') || '实施效果',
        content: t('products.cases.items.livingkbCloud.sections.result.content') || '医疗AI应用准确性提升，知识更新效率改善'
      }
    ]
  }
])
</script>

<style scoped>
.products-page {
  background: var(--bg-primary);
  color: var(--text-primary);
  min-height: 100vh;
}

/* Page Hero */
.page-hero {
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  padding: var(--space-20) 0 var(--space-16);
  text-align: center;
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

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: var(--space-4);
  font-weight: 300;
}

.hero-description p {
  font-size: 1.25rem;
  color: var(--text-tertiary);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Product Comparison Matrix */
.product-matrix {
  padding: var(--space-20) 0;
  background: var(--bg-secondary);
}

.comparison-table {
  background: var(--glass-bg);
  border-radius: var(--radius-xl);
  border: 1px solid var(--glass-border);
  overflow: hidden;
  backdrop-filter: var(--glass-backdrop);
}

.comparison-header {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  background: var(--bg-primary);
  border-bottom: 2px solid var(--primary-color);
}

.comparison-row {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  border-bottom: 1px solid var(--glass-border);
}

.comparison-row:last-child {
  border-bottom: none;
}

.comparison-cell {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.header-empty {
  background: var(--bg-secondary);
}

.header-product h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: var(--space-2);
}

.header-product p {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.row-label {
  background: var(--bg-secondary);
  align-items: center;
  justify-content: center;
}

.row-label h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
}

.comparison-cell p {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.comparison-cell ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.comparison-cell li {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: var(--space-2);
  position: relative;
  padding-left: var(--space-4);
}

.comparison-cell li::before {
  content: "•";
  color: var(--primary-color);
  position: absolute;
  left: 0;
  font-weight: bold;
}

/* Product Detail Sections */
.product-detail {
  padding: var(--space-20) 0;
}

.livingkb-section {
  background: var(--bg-primary);
}

.syndata-section {
  background: var(--bg-secondary);
}

.product-intro {
  text-align: center;
  margin-bottom: var(--space-16);
}

.product-badge {
  display: inline-block;
  background: var(--primary-color);
  color: white;
  padding: var(--space-2) var(--space-6);
  border-radius: var(--radius-full);
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: var(--space-4);
}

.syndata-badge {
  background: rgba( 31,181,250, 0.6);
}

.product-title {
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: var(--space-4);
  color: var(--text-primary);
}

.product-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  font-weight: 300;
}

/* Modules Section */
.modules-section {
  margin-bottom: var(--space-16);
}

.modules-title {
  font-size: 2.5rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: var(--space-12);
  color: var(--text-primary);
}

.module-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  backdrop-filter: var(--glass-backdrop);
  margin-bottom: var(--space-8);
  overflow: hidden;
}

.module-header {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 212, 255, 0.1) 100%);
  color: var(--text-primary);
  padding: var(--space-6) var(--space-8);
  padding-left: calc(var(--space-8) + 70px);
  position: relative;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.module-number {
  position: absolute;
  top: 50%;
  left: var(--space-6);
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  background: white;
  color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.module-title {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: var(--space-2);
  margin-left: 80px;
}

.module-subtitle {
  font-size: 1rem;
  opacity: 0.9;
  margin-left: 80px;
}

.module-content {
  padding: var(--space-8);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
}

.feature-item {
  text-align: center;
  padding: var(--space-4);
}

.feature-icon {
  width: 60px;
  height: 60px;
  background: var(--neutral-100);
  border-radius: var(--radius-lg);
  margin: 0 auto var(--space-4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: var(--text-tertiary);
  border: 1px solid var(--neutral-200);
}

.feature-item h5 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: var(--space-2);
  color: var(--text-primary);
}

.feature-item p {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Architecture Section */
.architecture-section {
  margin-bottom: var(--space-16);
}

.arch-title {
  font-size: 2rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: var(--space-8);
  color: var(--text-primary);
}

.arch-visual {
  text-align: center;
}

.arch-placeholder {
  background: var(--neutral-100);
  border: 2px dashed var(--neutral-300);
  border-radius: var(--radius-lg);
  padding: var(--space-16) var(--space-8);
  color: var(--text-tertiary);
  font-size: 1rem;
  margin: 0 auto;
  max-width: 800px;
}

/* Use Cases Section */
.use-cases-section {
  margin-bottom: var(--space-16);
}

.cases-title {
  font-size: 2rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: var(--space-8);
  color: var(--text-primary);
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-6);
}

.case-item {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  text-align: center;
  backdrop-filter: var(--glass-backdrop);
}

.case-icon {
  width: 60px;
  height: 60px;
  background: var(--neutral-100);
  border-radius: var(--radius-lg);
  margin: 0 auto var(--space-4);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: var(--text-tertiary);
  border: 1px solid var(--neutral-200);
}

.case-item h4 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: var(--space-2);
  color: var(--text-primary);
}

.case-item p {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Synergy Section */
.synergy-section {
  padding: var(--space-20) 0;
  background: var(--bg-primary);
}

.synergy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--space-8);
}

.synergy-item {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  backdrop-filter: var(--glass-backdrop);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.synergy-icon {
  width: 80px;
  height: 80px;
  background: var(--neutral-100);
  border-radius: var(--radius-lg);
  margin: 0 auto var(--space-6);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  color: var(--text-tertiary);
  border: 1px solid var(--neutral-200);
}

.synergy-item h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: var(--space-4);
  color: var(--text-primary);
  text-align: center;
}

.synergy-content h4 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: var(--space-2);
  color: var(--primary-color);
}

.synergy-content p {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: var(--space-4);
}

.synergy-content ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.synergy-content li {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: var(--space-2);
  position: relative;
  padding-left: var(--space-4);
}

.synergy-content li::before {
  content: "▶";
  color: var(--primary-color);
  position: absolute;
  left: 0;
  font-size: 0.75rem;
}

/* Tech Overview Section */
.tech-overview {
  padding: var(--space-20) 0;
  background: var(--bg-secondary);
}

.arch-tabs {
  margin-top: var(--space-12);
}

.arch-tab-nav {
  display: flex;
  justify-content: center;
  margin-bottom: var(--space-8);
  gap: var(--space-4);
}

.arch-tab {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  color: var(--text-secondary);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: var(--glass-backdrop);
}

.arch-tab.active {
  background: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.arch-tab:hover:not(.active) {
  background: var(--bg-primary);
  border-color: var(--primary-color);
}

.arch-tab-content {
  position: relative;
}

.arch-panel {
  display: none;
}

.arch-panel.active {
  display: block;
}

.arch-diagram {
  text-align: center;
}

/* Customer Cases Section */
.customer-cases {
  padding: var(--space-20) 0;
  background: var(--bg-primary);
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
}

.view-more-section {
  text-align: center;
  margin-top: var(--space-8);
}

.view-more-section .btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-medium);
  transition: all var(--duration-normal) var(--ease-out);
  border-radius: var(--radius-full);
  padding: var(--space-2) var(--space-6);
  min-width: 120px;
  text-decoration: none;
}

.view-more-section .btn-primary {
  background: rgba(0, 212, 255, 0.6);
  color: var(--text-white);
}

.view-more-section .btn-primary:hover {
  background: rgba(0, 212, 255, 0.8);
  transform: translateY(-1px);
}

.case-card {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  backdrop-filter: var(--glass-backdrop);
  transition: transform 0.3s ease;
}

.case-card:hover {
  transform: translateY(-4px);
}



.case-header {
  background: var(--bg-secondary);
  padding: var(--space-6);
  text-align: center;
}

.case-badge {
  display: inline-block;
  background: var(--primary-color);
  color: white;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: var(--space-2);
}

.case-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: var(--space-1);
  color: var(--text-primary);
}

.case-category {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.case-content {
  padding: var(--space-6);
  text-align: center;
}

.case-challenge,
.case-solution,
.case-result {
  margin-bottom: var(--space-4);
}

.case-challenge h4,
.case-solution h4,
.case-result h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: var(--space-2);
  color: var(--primary-color);
}

.case-challenge p,
.case-solution p,
.case-result p {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Section Headers */
.section-header {
  text-align: center;
  margin-bottom: var(--space-12);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: var(--space-4);
  color: var(--text-primary);
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .comparison-header,
  .comparison-row {
    grid-template-columns: 150px 1fr 1fr;
  }
  
  .synergy-grid {
    grid-template-columns: 1fr;
  }
  
  .cases-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .module-title {
    font-size: 1.5rem;
  }

  .product-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .comparison-header,
  .comparison-row {
    grid-template-columns: 120px 1fr 1fr;
    gap: 0;
  }
  
  .comparison-cell {
    padding: var(--space-3);
    font-size: 0.8rem;
  }
  
  .comparison-cell h3 {
    font-size: 1.1rem;
  }
  
  .comparison-cell h4 {
    font-size: 0.9rem;
  }
  
  .comparison-cell p,
  .comparison-cell li {
    font-size: 0.75rem;
    line-height: 1.4;
  }
  
  .section-header {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .arch-tab-nav {
    flex-direction: column;
    align-items: center;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
  }
  
  .module-header {
    display: flex;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-6);
  }
  
  .module-number {
    position: static;
    transform: none;
    margin-bottom: 0;
    flex-shrink: 0;
  }
  
  .module-content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }
  
  .module-title,
  .module-subtitle {
    margin-left: 0;
    text-align: left;
  }

  .product-title {
    font-size: 2rem;
  }

  .modules-title {
    font-size: 2rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .synergy-grid {
    grid-template-columns: 1fr;
  }
  
  .cases-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.75rem;
  }

  .product-title {
    font-size: 1.75rem;
  }

  .comparison-header,
  .comparison-row {
    grid-template-columns: 100px 1fr 1fr;
  }

  .comparison-cell {
    padding: var(--space-2);
    font-size: 0.7rem;
  }
  
  .comparison-cell h3 {
    font-size: 1rem;
  }
  
  .comparison-cell h4 {
    font-size: 0.8rem;
  }
  
  .comparison-cell p,
  .comparison-cell li {
    font-size: 0.65rem;
    line-height: 1.3;
  }

  .module-content {
    padding: var(--space-4);
  }

  .synergy-item {
    padding: var(--space-6);
  }
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

h3{
  margin-bottom: 8px;
}

/* Standard List Style for synergy values */
.list-standard {
  list-style: none;
  margin: 0;
  padding: 0;
}

.list-standard li {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: var(--space-2);
  position: relative;
  padding-left: var(--space-4);
  line-height: 1.5;
}

.list-standard li::before {
  content: "▶";
  color: var(--primary-color);
  position: absolute;
  left: 0;
  font-size: 0.75rem;
}

.synergy-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: var(--space-4);
  color: var(--text-primary);
  text-align: center;
}

.content-subtitle {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: var(--space-2);
  color: var(--primary-color);
}

/* ===== Navigation Actions ===== */
.navigation-actions {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  align-items: center;
  margin-top: var(--space-8);
  padding-top: var(--space-6);
  border-top: 1px solid var(--glass-border);
}

.navigation-actions .btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-medium);
  transition: all var(--duration-normal) var(--ease-out);
  border-radius: var(--radius-full);
  padding: var(--space-2) var(--space-6);
  min-width: 120px;
  text-decoration: none;
}

.navigation-actions .btn-primary {
  background: rgba(0, 212, 255, 0.6);
  color: var(--text-white);
}

.navigation-actions .btn-primary:hover {
  background: rgba(0, 212, 255, 0.8);
  transform: translateY(-1px);
}

.navigation-actions .btn-secondary {
  background: var(--glass-bg);
  color: var(--text-primary);
  border: 1px solid var(--glass-border);
}

.navigation-actions .btn-secondary:hover {
  background: var(--neutral-50);
  border-color: var(--primary-color);
  color: var(--primary-color);
  transform: translateY(-1px);
}

/* ===== Mobile Responsive ===== */
@media (max-width: 768px) {
  .navigation-actions {
    flex-direction: column;
    gap: var(--space-3);
  }
  
  .navigation-actions .btn {
    width: 100%;
    max-width: 280px;
  }
}

@media (max-width: 480px) {
  .navigation-actions {
    margin-top: var(--space-6);
    padding-top: var(--space-4);
  }
  
  .navigation-actions .btn {
    padding: var(--space-3) var(--space-5);
    font-size: var(--font-sm);
  }
}
</style> 
