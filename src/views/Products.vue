<template>
  <div class="products-page">
    <AppHeader />
    
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="container">
        <h1 class="hero-title">双产品矩阵：LivingKB + SynData Platform</h1>
        <p class="hero-subtitle">从知识管理到数据生成的完整AI解决方案</p>
        <div class="hero-description">
          <p>通过企业知识+合成数据的深度融合，为各行业提供适配GenAI的完整技术栈</p>
        </div>
      </div>
    </section>

    <!-- Product Comparison Matrix -->
    <section class="product-matrix">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">产品对比矩阵</h2>
          <p class="section-subtitle">LivingKB vs SynData Platform 核心差异与协同价值</p>
        </div>
        
        <div class="comparison-table">
          <div class="comparison-header">
            <div class="comparison-cell header-empty"></div>
            <div class="comparison-cell header-product">
              <h3>LivingKB</h3>
              <p>企业知识库平台</p>
            </div>
            <div class="comparison-cell header-product">
              <h3>SynData Platform</h3>
              <p>合成数据生成平台</p>
            </div>
          </div>
          
          <div class="comparison-row">
            <div class="comparison-cell row-label">
              <h4>核心定位</h4>
            </div>
            <div class="comparison-cell">
              <p>打造适配GenAI的企业知识库</p>
            </div>
            <div class="comparison-cell">
              <p>一站式合成数据解决方案</p>
            </div>
          </div>
          
          <div class="comparison-row">
            <div class="comparison-cell row-label">
              <h4>主要价值</h4>
            </div>
            <div class="comparison-cell">
              <p>让知识库像「活体」一样不断丰富和更新</p>
            </div>
            <div class="comparison-cell">
              <p>通过合成数据扩展模型训练和测试能力</p>
            </div>
          </div>
          
          <div class="comparison-row">
            <div class="comparison-cell row-label">
              <h4>核心技术</h4>
            </div>
            <div class="comparison-cell">
              <ul>
                <li>Context Graph 语境图谱</li>
                <li>ToG 图推理技术</li>
                <li>RAG 检索增强</li>
                <li>SQL-R1 智能查询</li>
                <li>Judge 风险控制</li>
              </ul>
            </div>
            <div class="comparison-cell">
              <ul>
                <li>SoG 图谱合成技术</li>
                <li>SoE 加密训练技术</li>
                <li>多模态数据生成</li>
                <li>Agent 定制平台</li>
              </ul>
            </div>
          </div>
          
          <div class="comparison-row">
            <div class="comparison-cell row-label">
              <h4>适用场景</h4>
            </div>
            <div class="comparison-cell">
              <ul>
                <li>企业知识智能化管理</li>
                <li>跨部门知识协同</li>
                <li>GenAI驱动决策支持</li>
              </ul>
            </div>
            <div class="comparison-cell">
              <ul>
                <li>大模型训练数据扩充</li>
                <li>隐私保护数据共享</li>
                <li>冷启动数据问题解决</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LivingKB Detailed Introduction -->
    <section class="product-detail livingkb-section">
      <div class="container">
        <div class="product-intro">
          <div class="product-badge">Living Knowledge Base</div>
          <h2 class="product-title">LivingKB 详细介绍</h2>
          <p class="product-subtitle">打造适配GenAI的企业知识库</p>
        </div>

        <!-- Four Core Modules -->
        <div class="modules-section">
          <h3 class="modules-title">四大核心功能模块</h3>
          
          <!-- Module 1: Knowledge Integration -->
          <div class="module-card">
            <div class="module-header">
              <div class="module-number">01</div>
              <h4 class="module-title">知识接入与融合</h4>
              <p class="module-subtitle">构建企业数据的统一知识表示</p>
            </div>
            
            <div class="module-content">
              <div class="feature-grid">
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：语境图谱构建icon】</div>
                  <h5>语境图谱 (Context Graph)</h5>
                  <p>以图谱为"大纲"表示核心概念，以丰富上下文作为补充，实现"LLM Ready"</p>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：多源数据接入icon】</div>
                  <h5>多源数据接入</h5>
                  <p>支持结构化数据库、文档、网页、聊天记录等多种数据源统一接入</p>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：知识挖掘icon】</div>
                  <h5>知识挖掘 (Knowledge Miner)</h5>
                  <p>自动文本解析、实体识别、关系抽取，形成知识片段并注入图谱</p>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：合成数据扩充icon】</div>
                  <h5>轻量化合成数据扩充</h5>
                  <p>结合SoG技术，在知识稀缺领域通过合成数据补充语境图谱</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Module 2: Knowledge Management -->
          <div class="module-card">
            <div class="module-header">
              <div class="module-number">02</div>
              <h4 class="module-title">知识管理与权限控制</h4>
              <p class="module-subtitle">企业级知识资产安全管理</p>
            </div>
            
            <div class="module-content">
              <div class="feature-grid">
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：知识管理icon】</div>
                  <h5>知识增删改查</h5>
                  <p>完整知识管理功能，支持批量更新、版本管理、历史回溯和冲突解决</p>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：权限管理icon】</div>
                  <h5>精细化权限管理</h5>
                  <p>按部门/项目/个人划分知识访问权限，支持基于图谱的精细化授权</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Module 3: Analysis Tools -->
          <div class="module-card">
            <div class="module-header">
              <div class="module-number">03</div>
              <h4 class="module-title">分析与决策工具</h4>
              <p class="module-subtitle">基于语境图谱的智能分析能力</p>
            </div>
            
            <div class="module-content">
              <div class="feature-grid">
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：RAG检索icon】</div>
                  <h5>RAG 检索增强生成</h5>
                  <p>准确率提升至92%，利用语境图谱和嵌入向量检索提供精准问答</p>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：SQL查询icon】</div>
                  <h5>SQL-R1 智能查询</h5>
                  <p>基于合成数据定制的自然语言转SQL工具，数据查询更便捷</p>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：图推理icon】</div>
                  <h5>ToG 图推理技术</h5>
                  <p>推理准确率升至90.2%，基于图的多步思考和因果链分析</p>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：风险控制icon】</div>
                  <h5>Judge 风险控制</h5>
                  <p>降低90%数据风险，自动识别和过滤潜在风险内容</p>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：决策分析icon】</div>
                  <h5>企业决策分析 Agent</h5>
                  <p>复杂任务分解、结果解释、企业决策解读的一体化智能助手</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Module 4: Agent Hub -->
          <div class="module-card">
            <div class="module-header">
              <div class="module-number">04</div>
              <h4 class="module-title">Agent Hub 与生态扩展</h4>
              <p class="module-subtitle">构建企业AI应用生态</p>
            </div>
            
            <div class="module-content">
              <div class="feature-grid">
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：Agent Hub icon】</div>
                  <h5>多能力 Agent 管理</h5>
                  <p>支持财务分析、法律合规、市场调研等多种专业Agent构建和管理</p>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：开发工具icon】</div>
                  <h5>开发工具与生态</h5>
                  <p>提供Agent开发调试工具、代码模板和接口标准，支持第三方插件接入</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- LivingKB Architecture -->
        <div class="architecture-section">
          <h3 class="arch-title">LivingKB 技术架构</h3>
          <div class="arch-visual">
            <div class="arch-placeholder">【需要图片：LivingKB完整技术架构图】</div>
          </div>
        </div>

        <!-- LivingKB Use Cases -->
        <div class="use-cases-section">
          <h3 class="cases-title">典型应用场景</h3>
          <div class="cases-grid">
            <div class="case-item">
              <div class="case-icon">【需要图片：企业知识管理icon】</div>
              <h4>企业知识智能化管理</h4>
              <p>整合企业文档、项目资料、专业知识，构建动态更新的知识网络</p>
            </div>
            
            <div class="case-item">
              <div class="case-icon">【需要图片：跨部门协同icon】</div>
              <h4>跨部门知识协同与共享</h4>
              <p>打破信息孤岛，实现不同部门间知识的有效流通和协同利用</p>
            </div>
            
            <div class="case-item">
              <div class="case-icon">【需要图片：AI决策支持icon】</div>
              <h4>GenAI驱动的企业决策支持</h4>
              <p>基于全量企业知识，为管理层提供智能化的决策分析和建议</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SynData Platform Detailed Introduction -->
    <section class="product-detail syndata-section">
      <div class="container">
        <div class="product-intro">
          <div class="product-badge syndata-badge">SynData Platform</div>
          <h2 class="product-title">SynData Platform 详细介绍</h2>
          <p class="product-subtitle">一站式合成数据解决方案</p>
        </div>

        <!-- Four Core Modules -->
        <div class="modules-section">
          <h3 class="modules-title">四大核心功能模块</h3>
          
          <!-- Module 1: Data Integration -->
          <div class="module-card">
            <div class="module-header">
              <div class="module-number">01</div>
              <h4 class="module-title">多源数据整合</h4>
              <p class="module-subtitle">构建统一的数据协议和整合流程</p>
            </div>
            
            <div class="module-content">
              <div class="feature-grid">
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：多源数据icon】</div>
                  <h5>多样化数据来源</h5>
                  <p>支持开源数据集、大模型蒸馏数据、互联网公开数据、数据交易所等</p>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：数据整合icon】</div>
                  <h5>标准化整合流程</h5>
                  <p>对不同格式数据进行抽取、清洗和标准化，统一为可用训练数据集</p>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：合规分析icon】</div>
                  <h5>合规与风险分析</h5>
                  <p>评估数据隐私和合规风险，为后续合成提供安全依据</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Module 2: Synthetic Data Generation -->
          <div class="module-card">
            <div class="module-header">
              <div class="module-number">02</div>
              <h4 class="module-title">合成数据生成</h4>
              <p class="module-subtitle">多模态合成数据的全面生成能力</p>
            </div>
            
            <div class="module-content">
              <div class="feature-grid">
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：SoG技术icon】</div>
                  <h5>SoG 图谱合成技术</h5>
                  <p>基于知识图谱的智能合成，模型能力提升25.4%</p>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：文本合成icon】</div>
                  <h5>文本合成数据</h5>
                  <p>生成新闻、评论、对话等自然语言数据，用于语言模型训练</p>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：时序数据icon】</div>
                  <h5>时间序列合成数据</h5>
                  <p>生成传感器数据、金融时序、用户行为日志等时间相关数据</p>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：表格数据icon】</div>
                  <h5>表格合成数据</h5>
                  <p>拟合真实数据库的列分布与关联关系，支持数据库压缩和隐私保护</p>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：多模态数据icon】</div>
                  <h5>多模态合成数据</h5>
                  <p>结合文本、图像、语音、视频生成多模态样本，用于跨媒体模型训练</p>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：具身数据icon】</div>
                  <h5>具身合成数据</h5>
                  <p>针对机器人和仿真场景提供虚拟环境和行为数据</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Module 3: Encryption Training -->
          <div class="module-card">
            <div class="module-header">
              <div class="module-number">03</div>
              <h4 class="module-title">合成数据加密与训练</h4>
              <p class="module-subtitle">安全可信的模型训练解决方案</p>
            </div>
            
            <div class="module-content">
              <div class="feature-grid">
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：SoE加密icon】</div>
                  <h5>SoE 加密训练技术</h5>
                  <p>敏感数据0泄露，提供差分隐私化训练工具</p>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：质量评估icon】</div>
                  <h5>质量评估与反馈</h5>
                  <p>衡量合成数据统计相似度与隐私风险，优化生成策略</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Module 4: Agent Customization -->
          <div class="module-card">
            <div class="module-header">
              <div class="module-number">04</div>
              <h4 class="module-title">Agent 定制与生态结合</h4>
              <p class="module-subtitle">企业专属AI Agent快速构建</p>
            </div>
            
            <div class="module-content">
              <div class="feature-grid">
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：预设Agent icon】</div>
                  <h5>能力型 Agent 预设</h5>
                  <p>基于大量合成数据训练的市场分析、语音识别、自动问答等内置Agent</p>
                </div>
                
                <div class="feature-item">
                  <div class="feature-icon">【需要图片：企业定制icon】</div>
                  <h5>企业定制支持</h5>
                  <p>根据企业架构和需求定制特定Agent，在线微调并一键部署</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- SynData Architecture -->
        <div class="architecture-section">
          <h3 class="arch-title">SynData Platform 技术架构</h3>
          <div class="arch-visual">
            <div class="arch-placeholder">【需要图片：SynData Platform完整技术架构图】</div>
          </div>
        </div>

        <!-- SynData Use Cases -->
        <div class="use-cases-section">
          <h3 class="cases-title">典型应用场景</h3>
          <div class="cases-grid">
            <div class="case-item">
              <div class="case-icon">【需要图片：模型训练icon】</div>
              <h4>大模型训练数据扩充</h4>
              <p>为AI模型提供高质量训练数据，解决数据稀缺和标注成本高的问题</p>
            </div>
            
            <div class="case-item">
              <div class="case-icon">【需要图片：隐私保护icon】</div>
              <h4>隐私保护数据共享</h4>
              <p>在无法获得个人同意时，通过合成数据实现安全的数据访问和共享</p>
            </div>
            
            <div class="case-item">
              <div class="case-icon">【需要图片：冷启动icon】</div>
              <h4>冷启动数据问题解决</h4>
              <p>在真实数据不存在、未标注或难以获取时，提供高质量合成数据</p>
            </div>
            
            <div class="case-item">
              <div class="case-icon">【需要图片：数据支撑icon】</div>
              <h4>为LivingKB提供数据支撑</h4>
              <p>通过合成数据增强知识库内容，让企业知识库变得更加"Living"</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Synergy Value -->
    <section class="synergy-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">双产品协同价值</h2>
          <p class="section-subtitle">LivingKB + SynData Platform 的深度融合优势</p>
        </div>
        
        <div class="synergy-grid">
          <div class="synergy-item">
            <div class="synergy-icon">【需要图片：知识驱动合成icon】</div>
            <h3>合成数据让知识库变得"Living"</h3>
            <div class="synergy-content">
              <h4>核心机制</h4>
              <p>SynData Platform生成的合成数据持续注入LivingKB，让知识库内容动态更新</p>
              <h4>应用价值</h4>
              <ul>
                <li>知识稀缺领域的数据补充</li>
                <li>新场景下的知识快速扩展</li>
                <li>保持知识库的时效性和完整性</li>
              </ul>
            </div>
          </div>
          
          <div class="synergy-item">
            <div class="synergy-icon">【需要图片：知识指导生成icon】</div>
            <h3>知识库为合成数据提供语境支撑</h3>
            <div class="synergy-content">
              <h4>核心机制</h4>
              <p>LivingKB中的语境图谱为SynData Platform提供生成条件和知识约束</p>
              <h4>应用价值</h4>
              <ul>
                <li>生成更符合业务语境的合成数据</li>
                <li>保持生成数据的知识一致性</li>
                <li>提升合成数据的质量和可用性</li>
              </ul>
            </div>
          </div>
          
          <div class="synergy-item">
            <div class="synergy-icon">【需要图片：闭环反馈icon】</div>
            <h3>闭环反馈：知识-数据-模型-洞见</h3>
            <div class="synergy-content">
              <h4>核心机制</h4>
              <p>形成知识积累→数据生成→模型学习→洞见产出→知识更新的闭环</p>
              <h4>应用价值</h4>
              <ul>
                <li>构建自我增强的产品体系</li>
                <li>持续优化企业AI能力</li>
                <li>实现知识和数据的良性循环</li>
              </ul>
            </div>
          </div>
          
          <div class="synergy-item">
            <div class="synergy-icon">【需要图片：完整解决方案icon】</div>
            <h3>为企业AI各个场景提供完整解决方案</h3>
            <div class="synergy-content">
              <h4>核心机制</h4>
              <p>双产品覆盖从数据生成、知识管理到AI应用的全链路需求</p>
              <h4>应用价值</h4>
              <ul>
                <li>降低企业AI应用的技术门槛</li>
                <li>提供标准化的AI基础设施</li>
                <li>支持企业AI的快速部署和迭代</li>
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
          <h2 class="section-title">技术架构概览</h2>
          <p class="section-subtitle">深入了解DataArc产品的核心技术架构与工作原理</p>
        </div>
        
        <div class="arch-tabs">
          <div class="arch-tab-nav">
            <button class="arch-tab active" data-tab="livingkb">LivingKB 架构</button>
            <button class="arch-tab" data-tab="syndata">SynData Platform 架构</button>
            <button class="arch-tab" data-tab="integration">协同架构</button>
          </div>
          
          <div class="arch-tab-content">
            <div class="arch-panel active" id="livingkb">
              <div class="arch-diagram">
                <div class="arch-placeholder">【需要图片：LivingKB详细架构图-包含四大模块及技术栈】</div>
              </div>
            </div>
            
            <div class="arch-panel" id="syndata">
              <div class="arch-diagram">
                <div class="arch-placeholder">【需要图片：SynData Platform详细架构图-包含数据流和生成流程】</div>
              </div>
            </div>
            
            <div class="arch-panel" id="integration">
              <div class="arch-diagram">
                <div class="arch-placeholder">【需要图片：双产品协同架构图-展示数据流和知识流】</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Success Cases -->
    <section class="customer-cases">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">客户成功案例</h2>
          <p class="section-subtitle">头部企业的AI转型实践与成果</p>
        </div>
        
        <div class="cases-grid">
          <div class="case-card livingkb-case">
            <div class="case-header">
              <div class="case-badge">LivingKB</div>
              <h3>头部投资机构</h3>
              <p class="case-category">金融知识库</p>
            </div>
            <div class="case-content">
              <div class="case-challenge">
                <h4>业务挑战</h4>
                <p>投资项目信息管理与分析效率低下，知识分散难以有效利用</p>
              </div>
              <div class="case-solution">
                <h4>解决方案</h4>
                <p>LivingKB + 投资分析Agent，构建动态投资知识图谱</p>
              </div>
              <div class="case-result">
                <h4>实施效果</h4>
                <p>项目分析效率提升，知识检索速度大幅改善</p>
              </div>
            </div>
          </div>
          
          <div class="case-card syndata-case">
            <div class="case-header">
              <div class="case-badge syndata-badge">SynData Platform</div>
              <h3>头部AI服务商</h3>
              <p class="case-category">智能客服优化</p>
            </div>
            <div class="case-content">
              <div class="case-challenge">
                <h4>业务挑战</h4>
                <p>银行AI客服意图识别准确率不足，训练数据稀缺</p>
              </div>
              <div class="case-solution">
                <h4>解决方案</h4>
                <p>SynData Platform + 合成对话数据，优化意图识别模型</p>
              </div>
              <div class="case-result">
                <h4>实施效果</h4>
                <p>意图识别准确率从60%提升到67%</p>
              </div>
            </div>
          </div>
          
          <div class="case-card livingkb-case">
            <div class="case-header">
              <div class="case-badge">LivingKB</div>
              <h3>头部制造企业</h3>
              <p class="case-category">工业知识库</p>
            </div>
            <div class="case-content">
              <div class="case-challenge">
                <h4>业务挑战</h4>
                <p>工业制造工艺知识管理复杂，专业知识传承困难</p>
              </div>
              <div class="case-solution">
                <h4>解决方案</h4>
                <p>LivingKB + 工业场景定制，构建工艺知识图谱</p>
              </div>
              <div class="case-result">
                <h4>实施效果</h4>
                <p>工艺知识标准化管理，新员工培训效率显著提升</p>
              </div>
            </div>
          </div>
          
          <div class="case-card livingkb-case">
            <div class="case-header">
              <div class="case-badge">LivingKB</div>
              <h3>头部云服务商</h3>
              <p class="case-category">医疗知识库</p>
            </div>
            <div class="case-content">
              <div class="case-challenge">
                <h4>业务挑战</h4>
                <p>医疗知识整合与AI应用场景复杂，数据标准化困难</p>
              </div>
              <div class="case-solution">
                <h4>解决方案</h4>
                <p>LivingKB + 医疗AI，构建医疗专业知识图谱</p>
              </div>
              <div class="case-result">
                <h4>实施效果</h4>
                <p>医疗AI应用准确性提升，知识更新效率改善</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
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
  font-size: 3.5rem;
  font-weight: 200;
  margin-bottom: var(--space-6);
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  background: var(--accent-color);
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
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%);
  color: white;
  padding: var(--space-6) var(--space-8);
  position: relative;
}

.module-number {
  position: absolute;
  top: -10px;
  left: var(--space-8);
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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-6);
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

.livingkb-case {
  border-left: 4px solid var(--primary-color);
}

.syndata-case {
  border-left: 4px solid var(--accent-color);
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
    grid-template-columns: 1fr;
    gap: 0;
  }
  
  .comparison-cell {
    border-bottom: 1px solid var(--glass-border);
    padding: var(--space-4);
  }
  
  .row-label {
    background: var(--primary-color);
    color: white;
  }
  
  .arch-tab-nav {
    flex-direction: column;
    align-items: center;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
  }
  
  .module-number {
    position: static;
    margin-bottom: var(--space-4);
  }
  
  .module-title,
  .module-subtitle {
    margin-left: 0;
    text-align: center;
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
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.75rem;
  }

  .product-title {
    font-size: 1.75rem;
  }

  .comparison-cell {
    padding: var(--space-3);
  }

  .module-content {
    padding: var(--space-4);
  }

  .synergy-item {
    padding: var(--space-6);
  }
}
</style> 