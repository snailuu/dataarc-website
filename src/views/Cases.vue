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
            <span class="title-main company-main-title">客户案例</span>
            <span class="title-highlight title-multilevel">
              <span class="title-main company-future-title">创新应用与成果</span>
            </span>
            <span class="subtitle-en company-english-line">CUSTOMER CASES • INNOVATION APPLICATIONS & RESULTS</span>
          </h1>
          <div class="hero-description content-bilingual">
            <p class="content-main">
              DataArc 已成功为多家头部企业提供AI智能化解决方案，
              覆盖金融投资、制造业、云计算、教育培训、AI服务等多个行业领域。
            </p>
            <p class="content-en">
              DataArc has successfully provided AI intelligent solutions for multiple leading enterprises,
              covering finance, manufacturing, cloud computing, education, and AI services.
            </p>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">5+</span>
              <div class="stat-label-bilingual">
                <span class="stat-main">头部企业客户</span>
                <span class="stat-en">Leading Enterprise Clients</span>
              </div>
            </div>
            <div class="stat-item">
              <span class="stat-number">67%</span>
              <div class="stat-label-bilingual">
                <span class="stat-main">AI准确率提升</span>
                <span class="stat-en">AI Accuracy Improvement</span>
              </div>
            </div>
            <div class="stat-item">
              <span class="stat-number">90%</span>
              <div class="stat-label-bilingual">
                <span class="stat-main">数据风险降低</span>
                <span class="stat-en">Data Risk Reduction</span>
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
            <span class="title-main">行业覆盖</span>
            <span class="title-divider">|</span>
            <span class="title-en">Industry Coverage</span>
          </h2>
          <div class="content-bilingual">
            <p class="content-main">DataArc在多个核心行业领域都有成功实践</p>
            <p class="content-en">DataArc has successful practices across multiple core industry sectors</p>
          </div>
        </div>

        <div class="industry-grid">
          <div class="industry-item">
            <div class="icon-wrapper">
              <img src="/images/icons/金融投资行业图标.png" alt="金融投资行业" class="icon-img large">
              <div class="icon-glow"></div>
            </div>
            <div class="title-bilingual">
              <h3 class="title-main">金融投资</h3>
              <span class="title-divider">|</span>
              <span class="title-en">Finance & Investment</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">头部投资机构、保险服务机构</p>
              <p class="content-en">Leading investment institutions, insurance service providers</p>
            </div>
            <div class="industry-highlights">
              <span class="highlight">投资分析 | Investment Analysis</span>
              <span class="highlight">风险控制 | Risk Control</span>
              <span class="highlight">知识管理 | Knowledge Management</span>
            </div>
          </div>

          <div class="industry-item">
            <img src="/images/icons/制造业图标.png" alt="制造业" class="icon-img large">
            <div class="title-bilingual">
              <h3 class="title-main">制造业</h3>
              <span class="title-divider">|</span>
              <span class="title-en">Manufacturing</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">头部制造企业</p>
              <p class="content-en">Leading manufacturing enterprises</p>
            </div>
            <div class="industry-highlights">
              <span class="highlight">工艺知识 | Process Knowledge</span>
              <span class="highlight">质量管控 | Quality Control</span>
              <span class="highlight">人才培训 | Talent Training</span>
            </div>
          </div>

          <div class="industry-item">
            <div class="icon-wrapper">
              <img src="/images/icons/云计算图标.png" alt="云计算" class="icon-img">
              <div class="icon-glow"></div>
            </div>
            <div class="title-bilingual">
              <h3 class="title-main">云计算</h3>
              <span class="title-divider">|</span>
              <span class="title-en">Cloud Computing</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">头部云服务商</p>
              <p class="content-en">Leading cloud service providers</p>
            </div>
            <div class="industry-highlights">
              <span class="highlight">医疗AI | Medical AI</span>
              <span class="highlight">数据整合 | Data Integration</span>
              <span class="highlight">平台服务 | Platform Services</span>
            </div>
          </div>

          <div class="industry-item">
            <div class="icon-wrapper">
              <img src="/images/icons/教育培训图标.png" alt="教育培训" class="icon-img">
              <div class="icon-glow"></div>
            </div>
            <div class="title-bilingual">
              <h3 class="title-main">教育培训</h3>
              <span class="title-divider">|</span>
              <span class="title-en">Education & Training</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">头部教育机构</p>
              <p class="content-en">Leading education institutions</p>
            </div>
            <div class="industry-highlights">
              <span class="highlight">智能分类 | Intelligent Classification</span>
              <span class="highlight">知识图谱 | Knowledge Graph</span>
              <span class="highlight">考试系统 | Exam System</span>
            </div>
          </div>

          <div class="industry-item">
            <div class="icon-wrapper">
              <img src="/images/icons/AI服务图标.png" alt="AI服务" class="icon-img">
              <div class="icon-glow"></div>
            </div>
            <div class="title-bilingual">
              <h3 class="title-main">AI服务</h3>
              <span class="title-divider">|</span>
              <span class="title-en">AI Services</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">头部AI服务商</p>
              <p class="content-en">Leading AI service providers</p>
            </div>
            <div class="industry-highlights">
              <span class="highlight">智能客服 | Smart Customer Service</span>
              <span class="highlight">意图识别 | Intent Recognition</span>
              <span class="highlight">合成数据 | Synthetic Data</span>
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
            <span class="title-main">详细客户案例</span>
            <span class="title-divider">|</span>
            <span class="title-en">Detailed Customer Cases</span>
          </h2>
          <div class="content-bilingual">
            <p class="content-main">深入了解头部企业的AI转型实践与显著成果</p>
            <p class="content-en">In-depth insights into leading enterprises' AI transformation practices and
              significant results</p>
          </div>
        </div>

        <div class="cases-grid">
          <!-- Case 1: 头部投资机构 -->
          <div class="case-card premium-case">
            <div class="case-header">
              <div class="case-badge livingkb-badge">LivingKB</div>
              <div class="case-title-group">
                <div class="title-bilingual">
                  <h3 class="title-main">头部投资机构</h3>
                  <span class="title-divider">|</span>
                  <span class="title-en">Leading Investment Institution</span>
                </div>
                <div class="content-bilingual">
                  <span class="content-main">金融知识库</span>
                  <span class="content-en">Financial Knowledge Base</span>
                </div>
              </div>
              <div class="industry-bilingual">
                <span class="content-main">金融投资</span>
                <span class="content-en">Finance & Investment</span>
              </div>
            </div>

            <div class="case-body">
              <div class="case-section">
                <div class="title-bilingual">
                  <h4 class="title-main">客户背景</h4>
                  <span class="title-divider">|</span>
                  <span class="title-en">Client Background</span>
                </div>
                <div class="content-bilingual">
                  <p class="content-main">国内知名投资机构，管理资产规模数百亿，专注于科技、医疗、消费等多个领域的投资</p>
                  <p class="content-en">Well-known domestic investment institution managing hundreds of billions in
                    assets, focusing on technology, healthcare, consumer goods and other sectors</p>
                </div>
              </div>

              <div class="case-section">
                <div class="title-bilingual">
                  <h4 class="title-main">业务挑战</h4>
                  <span class="title-divider">|</span>
                  <span class="title-en">Business Challenges</span>
                </div>
                <div class="challenge-list">
                  <div class="challenge-item">
                    <div class="icon-wrapper">
                      <img src="/images/icons/数据分析图标.png" alt="数据分析" class="icon-img">
                      <div class="icon-glow"></div>
                    </div>
                    <div class="content-bilingual">
                      <p class="content-main">投资项目信息管理与分析效率低下</p>
                      <p class="content-en">Low efficiency in investment project information management and analysis</p>
                    </div>
                  </div>
                  <div class="challenge-item">
                    <div class="icon-wrapper">
                      <img src="/images/icons/知识检索图标.png" alt="知识检索" class="icon-img">
                      <div class="icon-glow"></div>
                    </div>
                    <div class="content-bilingual">
                      <p class="content-main">知识分散在各个系统，难以有效利用</p>
                      <p class="content-en">Knowledge scattered across systems, difficult to utilize effectively</p>
                    </div>
                  </div>
                  <div class="challenge-item">
                    <div class="icon-wrapper">
                      <img src="/images/icons/时间效率图标.png" alt="时间效率" class="icon-img">
                      <div class="icon-glow"></div>
                    </div>
                    <div class="content-bilingual">
                      <p class="content-main">项目尽调周期长，决策效率有待提升</p>
                      <p class="content-en">Long due diligence cycles, decision efficiency needs improvement</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="case-section">
                <div class="title-bilingual">
                  <h4 class="title-main">解决方案</h4>
                  <span class="title-divider">|</span>
                  <span class="title-en">Solutions</span>
                </div>
                <div class="solution-overview">
                  <div class="solution-title title-bilingual">
                    <span class="title-main">LivingKB + 投资分析Agent</span>
                    <span class="title-divider">|</span>
                    <span class="title-en">LivingKB + Investment Analysis Agent</span>
                  </div>
                  <div class="solution-details">
                    <div class="solution-module">
                      <div class="title-bilingual">
                        <h5 class="title-main">知识图谱构建</h5>
                        <span class="title-divider">|</span>
                        <span class="title-en">Knowledge Graph Construction</span>
                      </div>
                      <div class="content-bilingual">
                        <p class="content-main">整合企业尽调报告、财务数据、市场分析等多源信息，构建动态投资知识图谱</p>
                        <p class="content-en">Integrate multi-source information including due diligence reports,
                          financial data, and market analysis to build dynamic investment knowledge graphs</p>
                      </div>
                    </div>
                    <div class="solution-module">
                      <div class="title-bilingual">
                        <h5 class="title-main">智能分析工具</h5>
                        <span class="title-divider">|</span>
                        <span class="title-en">Intelligent Analysis Tools</span>
                      </div>
                      <div class="content-bilingual">
                        <p class="content-main">基于ToG技术的投资分析Agent，提供项目评估、风险分析、行业对比等功能</p>
                        <p class="content-en">Investment analysis Agent based on ToG technology, providing project
                          evaluation, risk analysis, industry comparison and other functions</p>
                      </div>
                    </div>
                    <div class="solution-module">
                      <div class="title-bilingual">
                        <h5 class="title-main">决策支持系统</h5>
                        <span class="title-divider">|</span>
                        <span class="title-en">Decision Support System</span>
                      </div>
                      <div class="content-bilingual">
                        <p class="content-main">利用RAG技术实现精准检索，为投资决策提供全面的知识支撑</p>
                        <p class="content-en">Utilize RAG technology for precise retrieval, providing comprehensive
                          knowledge support for investment decisions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="case-section">
                <div class="title-bilingual">
                  <h4 class="title-main">实施效果</h4>
                  <span class="title-divider">|</span>
                  <span class="title-en">Implementation Results</span>
                </div>
                <div class="results-grid">
                  <div class="result-item">
                    <div class="icon-wrapper">
                      <img src="/images/icons/效率提升图标.png" alt="效率提升" class="icon-img">
                      <div class="icon-glow"></div>
                    </div>
                    <div class="title-bilingual">
                      <h5 class="title-main">项目分析效率提升</h5>
                      <span class="title-divider">|</span>
                      <span class="title-en">Project Analysis Efficiency</span>
                    </div>
                    <div class="content-bilingual">
                      <p class="content-main">尽调周期缩短30%，分析准确性显著提高</p>
                      <p class="content-en">Due diligence cycle reduced by 30%, analysis accuracy significantly improved
                      </p>
                    </div>
                  </div>
                  <div class="result-item">
                    <div class="icon-wrapper">
                      <img src="/images/icons/知识检索图标.png" alt="知识检索" class="icon-img">
                      <div class="icon-glow"></div>
                    </div>
                    <div class="title-bilingual">
                      <h5 class="title-main">知识检索速度改善</h5>
                      <span class="title-divider">|</span>
                      <span class="title-en">Knowledge Retrieval Speed</span>
                    </div>
                    <div class="content-bilingual">
                      <p class="content-main">信息检索时间从小时级降低到分钟级</p>
                      <p class="content-en">Information retrieval time reduced from hours to minutes</p>
                    </div>
                  </div>
                  <div class="result-item">
                    <div class="icon-wrapper">
                      <img src="/images/icons/决策质量图标.png" alt="决策质量" class="icon-img">
                      <div class="icon-glow"></div>
                    </div>
                    <div class="title-bilingual">
                      <h5 class="title-main">决策质量提升</h5>
                      <span class="title-divider">|</span>
                      <span class="title-en">Decision Quality Improvement</span>
                    </div>
                    <div class="content-bilingual">
                      <p class="content-main">基于全量数据的智能分析，降低投资风险</p>
                      <p class="content-en">Intelligent analysis based on comprehensive data, reducing investment risks
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Case 2: 头部AI服务商 -->
          <div class="case-card premium-case">
            <div class="case-header">
              <div class="case-badge syndata-badge">SynData Platform</div>
              <div class="case-title-group">
                <div class="title-bilingual">
                  <h3 class="title-main">头部AI服务商</h3>
                  <span class="title-divider">|</span>
                  <span class="title-en">Leading AI Service Provider</span>
                </div>
                <div class="content-bilingual">
                  <span class="content-main">智能客服优化</span>
                  <span class="content-en">Smart Customer Service Optimization</span>
                </div>
              </div>
              <div class="industry-bilingual">
                <span class="content-main">AI服务</span>
                <span class="content-en">AI Services</span>
              </div>
            </div>

            <div class="case-body">
              <div class="case-section">
                <div class="title-bilingual">
                  <h4 class="title-main">客户背景</h4>
                  <span class="title-divider">|</span>
                  <span class="title-en">Client Background</span>
                </div>
                <div class="content-bilingual">
                  <p class="content-main">国内领先的银行AI客服解决方案提供商，服务于多家大型银行，处理日均百万级客服咨询</p>
                  <p class="content-en">Leading domestic provider of AI customer service solutions for banks, serving
                    multiple large banks and handling millions of daily customer inquiries</p>
                </div>
              </div>

              <div class="case-section">
                <div class="title-bilingual">
                  <h4 class="title-main">业务挑战</h4>
                  <span class="title-divider">|</span>
                  <span class="title-en">Business Challenges</span>
                </div>
                <div class="challenge-list">
                  <div class="challenge-item">
                    <div class="icon-wrapper">
                      <img src="/images/icons/准确率下降图标.png" alt="准确率下降" class="icon-img">
                      <div class="icon-glow"></div>
                    </div>
                    <div class="content-bilingual">
                      <p class="content-main">意图识别准确率仅为60%，影响客户体验</p>
                      <p class="content-en">Intent recognition accuracy only 60%, affecting customer experience</p>
                    </div>
                  </div>
                  <div class="challenge-item">
                    <div class="icon-wrapper">
                      <img src="/images/icons/数据稀缺图标.png" alt="数据稀缺" class="icon-img">
                      <div class="icon-glow"></div>
                    </div>
                    <div class="content-bilingual">
                      <p class="content-main">训练数据稀缺，特别是长尾场景数据不足</p>
                      <p class="content-en">Scarce training data, especially insufficient long-tail scenario data</p>
                    </div>
                  </div>
                  <div class="challenge-item">
                    <div class="icon-wrapper">
                      <img src="/images/icons/迭代周期图标.png" alt="迭代周期" class="icon-img">
                      <div class="icon-glow"></div>
                    </div>
                    <div class="content-bilingual">
                      <p class="content-main">模型迭代周期长，难以快速响应业务需求</p>
                      <p class="content-en">Long model iteration cycles, difficult to respond quickly to business needs
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="case-section">
                <div class="title-bilingual">
                  <h4 class="title-main">解决方案</h4>
                  <span class="title-divider">|</span>
                  <span class="title-en">Solutions</span>
                </div>
                <div class="solution-overview">
                  <div class="solution-title title-bilingual">
                    <span class="title-main">SynData Platform + 合成对话数据</span>
                    <span class="title-divider">|</span>
                    <span class="title-en">SynData Platform + Synthetic Dialog Data</span>
                  </div>
                  <div class="solution-details">
                    <div class="solution-module">
                      <div class="title-bilingual">
                        <h5 class="title-main">合成对话数据生成</h5>
                        <span class="title-divider">|</span>
                        <span class="title-en">Synthetic Dialog Data Generation</span>
                      </div>
                      <div class="content-bilingual">
                        <p class="content-main">基于SoG技术生成高质量银行客服对话数据，覆盖各种业务场景</p>
                        <p class="content-en">Generate high-quality banking customer service dialog data based on SoG
                          technology, covering various business scenarios</p>
                      </div>
                    </div>
                    <div class="solution-module">
                      <div class="title-bilingual">
                        <h5 class="title-main">意图识别优化</h5>
                        <span class="title-divider">|</span>
                        <span class="title-en">Intent Recognition Optimization</span>
                      </div>
                      <div class="content-bilingual">
                        <p class="content-main">利用合成数据扩充训练集，重点补强长尾场景和新业务场景</p>
                        <p class="content-en">Use synthetic data to expand training sets, focusing on strengthening
                          long-tail and new business scenarios</p>
                      </div>
                    </div>
                    <div class="solution-module">
                      <div class="title-bilingual">
                        <h5 class="title-main">模型持续迭代</h5>
                        <span class="title-divider">|</span>
                        <span class="title-en">Continuous Model Iteration</span>
                      </div>
                      <div class="content-bilingual">
                        <p class="content-main">建立合成数据驱动的模型迭代流程，快速响应业务变化</p>
                        <p class="content-en">Establish synthetic data-driven model iteration process to quickly respond
                          to business changes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="case-section">
                <div class="title-bilingual">
                  <h4 class="title-main">实施效果</h4>
                  <span class="title-divider">|</span>
                  <span class="title-en">Implementation Results</span>
                </div>
                <div class="results-grid">
                  <div class="result-item highlighted-result">
                    <div class="icon-wrapper">
                      <img src="/images/icons/准确率提升图标.png" alt="准确率提升" class="icon-img">
                      <div class="icon-glow"></div>
                    </div>
                    <div class="title-bilingual">
                      <h5 class="title-main">意图识别准确率提升</h5>
                      <span class="title-divider">|</span>
                      <span class="title-en">Intent Recognition Accuracy</span>
                    </div>
                    <div class="content-bilingual">
                      <p class="content-main">从60%提升到67%，提升幅度11.7%</p>
                      <p class="content-en">Improved from 60% to 67%, an increase of 11.7%</p>
                    </div>
                  </div>
                  <div class="result-item">
                    <div class="icon-wrapper">
                      <img src="/images/icons/数据质量图标.png" alt="数据质量" class="icon-img">
                      <div class="icon-glow"></div>
                    </div>
                    <div class="title-bilingual">
                      <h5 class="title-main">训练数据质量改善</h5>
                      <span class="title-divider">|</span>
                      <span class="title-en">Training Data Quality</span>
                    </div>
                    <div class="content-bilingual">
                      <p class="content-main">合成数据覆盖率提升3倍，数据分布更均衡</p>
                      <p class="content-en">Synthetic data coverage increased 3x, more balanced data distribution</p>
                    </div>
                  </div>
                  <div class="result-item">
                    <div class="icon-wrapper">
                      <img src="/images/icons/迭代速度图标.png" alt="迭代速度" class="icon-img">
                      <div class="icon-glow"></div>
                    </div>
                    <div class="title-bilingual">
                      <h5 class="title-main">模型迭代速度提升</h5>
                      <span class="title-divider">|</span>
                      <span class="title-en">Model Iteration Speed</span>
                    </div>
                    <div class="content-bilingual">
                      <p class="content-main">迭代周期从月级缩短到周级</p>
                      <p class="content-en">Iteration cycle shortened from monthly to weekly</p>
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
        <!-- Insurance Case -->
        <div class="detailed-case">
          <div class="case-overview">
            <div class="case-info">
              <div class="title-bilingual">
                <h3 class="title-main">保险行业 - AI智能客服</h3>
                <span class="title-divider">|</span>
                <span class="title-en">Insurance Industry - AI Smart Customer Service</span>
              </div>
              <div class="tag-group">
                <span class="tag">保险行业 | Insurance</span>
                <span class="tag">智能客服 | Smart Service</span>
                <span class="tag">合成数据 | Synthetic Data</span>
              </div>
              <div class="content-bilingual">
                <p class="content-main">
                  为大型保险公司提供AI智能客服解决方案，通过合成数据技术显著提升客服系统的对话质量和处理效率。
                </p>
                <p class="content-en">
                  Provide AI smart customer service solutions for large insurance companies, significantly improving
                  dialog quality and processing efficiency through synthetic data technology.
                </p>
              </div>
            </div>
            <div class="case-visual">
              <div class="case-placeholder">【需要图片：保险行业智能客服案例总览】</div>
            </div>
          </div>

          <div class="case-challenge">
            <div class="title-bilingual">
              <h4 class="title-main">业务挑战</h4>
              <span class="title-divider">|</span>
              <span class="title-en">Business Challenges</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">提升AI保险客服的对话质量，解决长尾问题和反例问题，降低人工转接率</p>
              <p class="content-en">Improve AI insurance customer service dialog quality, solve long-tail and
                counter-example issues, reduce human transfer rate</p>
            </div>
          </div>

          <div class="case-solution">
            <div class="title-bilingual">
              <h4 class="title-main">DataArc解决方案</h4>
              <span class="title-divider">|</span>
              <span class="title-en">DataArc Solutions</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">通过合成数据技术，为AI客服模型提供高质量训练数据，优化罕见问题和长尾知识的处理能力</p>
              <p class="content-en">Through synthetic data technology, provide high-quality training data for AI
                customer service models, optimizing handling of rare and long-tail knowledge</p>
            </div>
          </div>

          <div class="case-results">
            <div class="title-bilingual">
              <h4 class="title-main">业务效果</h4>
              <span class="title-divider">|</span>
              <span class="title-en">Business Results</span>
            </div>
            <div class="results-grid">
              <div class="result-item">
                <div class="icon-wrapper">
                  <img src="/images/icons/良品率提升图标.png" alt="良品率提升" class="icon-img">
                  <div class="icon-glow"></div>
                </div>
                <div class="result-stat">
                  <span class="result-number">+15.5%</span>
                  <div class="result-label-bilingual">
                    <span class="result-main">良品率提升</span>
                    <span class="result-en">Quality Rate Improvement</span>
                  </div>
                </div>
              </div>
              <div class="result-item">
                <div class="icon-wrapper">
                  <img src="/images/icons/长尾问题图标.png" alt="长尾问题" class="icon-img">
                  <div class="icon-glow"></div>
                </div>
                <div class="result-stat">
                  <span class="result-number">90%</span>
                  <div class="result-label-bilingual">
                    <span class="result-main">长尾问题覆盖</span>
                    <span class="result-en">Long-tail Issue Coverage</span>
                  </div>
                </div>
              </div>
              <div class="result-item">
                <div class="icon-wrapper">
                  <img src="/images/icons/转接率图标.png" alt="转接率" class="icon-img">
                  <div class="icon-glow"></div>
                </div>
                <div class="result-stat">
                  <span class="result-number">-60%</span>
                  <div class="result-label-bilingual">
                    <span class="result-main">人工转接率降低</span>
                    <span class="result-en">Human Transfer Rate Reduction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Finance Case -->
        <div class="detailed-case">
          <div class="case-overview">
            <div class="case-info">
              <div class="title-bilingual">
                <h3 class="title-main">金融领域 - IDEA FinAI经济超脑</h3>
                <span class="title-divider">|</span>
                <span class="title-en">Finance - IDEA FinAI Economic Super Brain</span>
              </div>
              <div class="tag-group">
                <span class="tag">金融科技 | FinTech</span>
                <span class="tag">经济分析 | Economic Analysis</span>
                <span class="tag">智能投研 | Smart Investment Research</span>
              </div>
              <div class="content-bilingual">
                <p class="content-main">
                  与IDEA研究院合作开发FinAI经济超脑，通过语境图谱技术提升金融数据分析和投研能力。
                </p>
                <p class="content-en">
                  Collaborate with IDEA Institute to develop FinAI Economic Super Brain, enhancing financial data
                  analysis and investment research capabilities through context graph technology.
                </p>
              </div>
            </div>
            <div class="case-visual">
              <div class="case-placeholder">【需要图片：金融IDEA FinAI经济超脑】</div>
            </div>
          </div>

          <div class="case-challenge">
            <div class="title-bilingual">
              <h4 class="title-main">业务挑战</h4>
              <span class="title-divider">|</span>
              <span class="title-en">Business Challenges</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">构建企业知识图谱，提升竞对分析与行业监控的效率，实现跨文档复杂推理</p>
              <p class="content-en">Build enterprise knowledge graphs, improve efficiency of competitive analysis and
                industry monitoring, achieve complex cross-document reasoning</p>
            </div>
          </div>

          <div class="case-solution">
            <div class="title-bilingual">
              <h4 class="title-main">DataArc解决方案</h4>
              <span class="title-divider">|</span>
              <span class="title-en">DataArc Solutions</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">通过语境图谱技术，实现金融行业企业知识的结构化管理，自动化采集海量数据并识别行业属性</p>
              <p class="content-en">Through context graph technology, achieve structured management of financial
                industry enterprise knowledge, automatically collect massive data and identify industry attributes</p>
            </div>
          </div>

          <div class="case-results">
            <div class="title-bilingual">
              <h4 class="title-main">业务效果</h4>
              <span class="title-divider">|</span>
              <span class="title-en">Business Results</span>
            </div>
            <div class="results-grid">
              <div class="result-item">
                <div class="icon-wrapper">
                  <img src="/images/icons/数据增量图标.png" alt="数据增量" class="icon-img">
                  <div class="icon-glow"></div>
                </div>
                <div class="result-stat">
                  <span class="result-number">20.3倍</span>
                  <div class="result-label-bilingual">
                    <span class="result-main">研报数据增量</span>
                    <span class="result-en">Research Report Data Volume</span>
                  </div>
                </div>
              </div>
              <div class="result-item">
                <div class="icon-wrapper">
                  <img src="/images/icons/推理准确率图标.png" alt="推理准确率" class="icon-img">
                  <div class="icon-glow"></div>
                </div>
                <div class="result-stat">
                  <span class="result-number">+21.2%</span>
                  <div class="result-label-bilingual">
                    <span class="result-main">推理准确率提升</span>
                    <span class="result-en">Reasoning Accuracy Improvement</span>
                  </div>
                </div>
              </div>
              <div class="result-item">
                <div class="icon-wrapper">
                  <img src="/images/icons/识别准确率图标.png" alt="识别准确率" class="icon-img">
                  <div class="icon-glow"></div>
                </div>
                <div class="result-stat">
                  <span class="result-number">80%+</span>
                  <div class="result-label-bilingual">
                    <span class="result-main">企业属性识别准确率</span>
                    <span class="result-en">Enterprise Attribute Recognition Accuracy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Education Case -->
        <div class="detailed-case">
          <div class="case-overview">
            <div class="case-info">
              <div class="title-bilingual">
                <h3 class="title-main">教培领域 - 上海高金金融知识大模型</h3>
                <span class="title-divider">|</span>
                <span class="title-en">Education - SAIF Financial Knowledge Large Model</span>
              </div>
              <div class="tag-group">
                <span class="tag">教育培训 | Education & Training</span>
                <span class="tag">金融知识 | Financial Knowledge</span>
                <span class="tag">考试系统 | Exam System</span>
              </div>
              <div class="content-bilingual">
                <p class="content-main">
                  为上海高金提供金融知识大模型，通过合成数据技术生成50万金融问答对，打造超越GPT-4的专业模型。
                </p>
                <p class="content-en">
                  Provide financial knowledge large model for Shanghai Advanced Institute of Finance, generate 500,000
                  financial Q&A pairs through synthetic data technology, creating a professional model that surpasses
                  GPT-4.
                </p>
              </div>
            </div>
            <div class="case-visual">
              <div class="case-placeholder">【需要图片：上海高金金融知识大模型】</div>
            </div>
          </div>

          <div class="case-challenge">
            <div class="title-bilingual">
              <h4 class="title-main">业务挑战</h4>
              <span class="title-divider">|</span>
              <span class="title-en">Business Challenges</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">解决金融大模型的题库不足问题，提升考试通过率，打造专业级金融知识AI</p>
              <p class="content-en">Solve the problem of insufficient question banks for financial large models, improve
                exam pass rates, create professional-level financial knowledge AI</p>
            </div>
          </div>

          <div class="case-solution">
            <div class="title-bilingual">
              <h4 class="title-main">DataArc解决方案</h4>
              <span class="title-divider">|</span>
              <span class="title-en">DataArc Solutions</span>
            </div>
            <div class="content-bilingual">
              <p class="content-main">通过合成数据技术生成大量高质量金融问答对，训练百亿参数级的金融知识大模型</p>
              <p class="content-en">Generate large amounts of high-quality financial Q&A pairs through synthetic data
                technology, train a hundred-billion parameter financial knowledge large model</p>
            </div>
          </div>

          <div class="case-results">
            <div class="title-bilingual">
              <h4 class="title-main">业务效果</h4>
              <span class="title-divider">|</span>
              <span class="title-en">Business Results</span>
            </div>
            <div class="results-grid">
              <div class="result-item">
                <div class="icon-wrapper">
                  <img src="/images/icons/题库数量图标.png" alt="题库数量" class="icon-img">
                  <div class="icon-glow"></div>
                </div>
                <div class="result-stat">
                  <span class="result-number">50万</span>
                  <div class="result-label-bilingual">
                    <span class="result-main">金融问答对</span>
                    <span class="result-en">Financial Q&A Pairs</span>
                  </div>
                </div>
              </div>
              <div class="result-item">
                <div class="icon-wrapper">
                  <img src="/images/icons/考试通过图标.png" alt="考试通过" class="icon-img">
                  <div class="icon-glow"></div>
                </div>
                <div class="result-stat">
                  <span class="result-number">CPA+CFA</span>
                  <div class="result-label-bilingual">
                    <span class="result-main">考试通过</span>
                    <span class="result-en">Exam Performance</span>
                  </div>
                </div>
              </div>
              <div class="result-item">
                <div class="icon-wrapper">
                  <img src="/images/icons/性能超越图标.png" alt="性能超越" class="icon-img">
                  <div class="icon-glow"></div>
                </div>
                <div class="result-stat">
                  <span class="result-number">超越GPT-4</span>
                  <div class="result-label-bilingual">
                    <span class="result-main">模型效果</span>
                    <span class="result-en">Model Performance</span>
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
            <span class="title-main">行业标杆对比</span>
            <span class="title-divider">|</span>
            <span class="title-en">Industry Benchmarks</span>
          </h2>
          <div class="content-bilingual">
            <p class="content-main">DataArc与国际领先方案的对比优势</p>
            <p class="content-en">DataArc's competitive advantages compared to international leading solutions</p>
          </div>
        </div>

        <div class="benchmarks-grid">
          <div class="benchmark-card">
            <div class="title-bilingual">
              <h3 class="title-main">Writer模型对比</h3>
              <span class="title-divider">|</span>
              <span class="title-en">Writer Model Comparison</span>
            </div>
            <div class="benchmark-content">
              <div class="benchmark-stat">
                <div class="stat-label-bilingual">
                  <span class="stat-main">传统训练成本</span>
                  <span class="stat-en">Traditional Training Cost</span>
                </div>
                <span class="stat-value">70万美元 | $700K USD</span>
              </div>
              <div class="benchmark-stat">
                <div class="stat-label-bilingual">
                  <span class="stat-main">DataArc方案</span>
                  <span class="stat-en">DataArc Solution</span>
                </div>
                <span class="stat-value highlight">显著降低 | Significantly Reduced</span>
              </div>
            </div>
            <div class="benchmark-improvement">
              <div class="content-bilingual">
                <span class="content-main">工具调用准确率提升19.3%</span>
                <span class="content-en">Tool Call Accuracy Improved by 19.3%</span>
              </div>
            </div>
          </div>

          <div class="benchmark-card">
            <div class="title-bilingual">
              <h3 class="title-main">数据合规风险</h3>
              <span class="title-divider">|</span>
              <span class="title-en">Data Compliance Risk</span>
            </div>
            <div class="benchmark-content">
              <div class="benchmark-stat">
                <div class="stat-label-bilingual">
                  <span class="stat-main">数据违规成本</span>
                  <span class="stat-en">Data Breach Cost</span>
                </div>
                <span class="stat-value">1480万美元 | $14.8M USD</span>
              </div>
              <div class="benchmark-stat">
                <div class="stat-label-bilingual">
                  <span class="stat-main">DataArc保障</span>
                  <span class="stat-en">DataArc Protection</span>
                </div>
                <span class="stat-value highlight">零风险 | Zero Risk</span>
              </div>
            </div>
            <div class="benchmark-improvement">
              <div class="content-bilingual">
                <span class="content-main">通过SoE技术完全规避数据泄露风险</span>
                <span class="content-en">Complete elimination of data leak risks through SoE technology</span>
              </div>
            </div>
          </div>

          <div class="benchmark-card">
            <div class="title-bilingual">
              <h3 class="title-main">Gretel对比优势</h3>
              <span class="title-divider">|</span>
              <span class="title-en">Gretel Comparison Advantage</span>
            </div>
            <div class="benchmark-content">
              <div class="benchmark-stat">
                <div class="stat-label-bilingual">
                  <span class="stat-main">传统合成数据</span>
                  <span class="stat-en">Traditional Synthetic Data</span>
                </div>
                <span class="stat-value">基础功能 | Basic Functions</span>
              </div>
              <div class="benchmark-stat">
                <div class="stat-label-bilingual">
                  <span class="stat-main">DataArc SoG</span>
                  <span class="stat-en">DataArc SoG</span>
                </div>
                <span class="stat-value highlight">智能图谱 | Intelligent Graph</span>
              </div>
            </div>
            <div class="benchmark-improvement">
              <div class="content-bilingual">
                <span class="content-main">基于知识图谱的深度合成技术</span>
                <span class="content-en">Deep synthesis technology based on knowledge graphs</span>
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-6);
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
  background: var(--glass-bg);
  border-radius: var(--radius-2xl);
  backdrop-filter: var(--glass-backdrop);
  border: 1px solid var(--glass-border);
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.premium-case {
  background: linear-gradient(135deg, var(--glass-bg) 0%, rgba(99, 102, 241, 0.05) 100%);
  border: 1px solid rgba(99, 102, 241, 0.2);
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
  border-left: 3px solid var(--primary-color);
}

.solution-overview {
  background: var(--glass-bg);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  backdrop-filter: var(--glass-backdrop);
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
  background: var(--bg-primary);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  border: 1px solid var(--neutral-200);
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
  background: var(--glass-bg);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  backdrop-filter: var(--glass-backdrop);
  border: 1px solid var(--glass-border);
}

.results-grid {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: var(--space-8);
  margin-top: var(--space-6);
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .results-grid {
    flex-direction: column;
    gap: var(--space-4);
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
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: var(--space-4);
  }
}

@media (max-width: 768px) {
  .industry-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-4);
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
