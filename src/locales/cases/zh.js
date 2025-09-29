export default {
  hero: {
    title: '客户案例',
    subtitle: '创新应用与成果',
    englishLine: 'CUSTOMER CASES • INNOVATION APPLICATIONS & RESULTS',
    description: 'DataArc 已成功为多家头部企业提供 AI 智能化解决方案，覆盖金融投资、制造业、云计算、教育培训、AI 服务等多个行业领域。',
    stats: [
      { value: '5+', label: '头部企业客户' },
      { value: '67%', label: 'AI 准确率提升' },
      { value: '90%', label: '数据风险降低' }
    ]
  },
  industry: {
    title: '行业覆盖',
    description: 'DataArc 在多个核心行业领域都有成功实践',
    items: [
      {
        key: 'finance',
        title: '金融投资',
        description: '头部投资机构、保险服务机构',
        icon: '/images/icons/金融投资行业图标.png',
        iconAlt: '金融投资行业',
        iconSize: 'large',
        glow: true,
        highlights: ['投资分析', '风险控制', '知识管理']
      },
      {
        key: 'manufacturing',
        title: '制造业',
        description: '头部制造企业',
        icon: '/images/icons/制造业图标.png',
        iconAlt: '制造业',
        iconSize: 'large',
        glow: false,
        highlights: ['工艺知识', '质量管控', '人才培训']
      },
      {
        key: 'cloud',
        title: '云计算',
        description: '头部云服务商',
        icon: '/images/icons/云计算图标.png',
        iconAlt: '云计算',
        glow: true,
        highlights: ['医疗 AI', '数据整合', '平台服务']
      },
      {
        key: 'education',
        title: '教育培训',
        description: '头部教育机构',
        icon: '/images/icons/教育培训图标.png',
        iconAlt: '教育培训',
        glow: true,
        highlights: ['智能分类', '语境图谱', '考试系统']
      },
      {
        key: 'aiServices',
        title: 'AI 服务',
        description: '头部 AI 服务商',
        icon: '/images/icons/AI服务图标.png',
        iconAlt: 'AI 服务',
        glow: true,
        highlights: ['智能客服', '意图识别', '合成数据']
      }
    ]
  },
  featured: {
    title: '详细客户案例',
    description: '深入了解头部企业的 AI 转型实践与显著成果',
    items: [
      {
        id: 'investment',
        badge: { class: 'livingkb-badge', text: 'LivingKB' },
        title: '头部投资机构',
        subtitle: '金融知识库',
        industry: '金融投资',
        background: '国内知名投资机构，管理资产规模数百亿，专注于科技、医疗、消费等多个领域的投资。',
        challenges: [
          { icon: '/images/icons/数据分析图标.png', iconAlt: '数据分析', text: '投资项目信息管理与分析效率低下' },
          { icon: '/images/icons/知识检索图标.png', iconAlt: '知识检索', text: '知识分散在各个系统，难以有效利用' },
          { icon: '/images/icons/时间效率图标.png', iconAlt: '时间效率', text: '项目尽调周期长，决策效率有待提升' }
        ],
        solution: {
          title: 'LivingKB + 投资分析 Agent',
          modules: [
            {
              title: '语境图谱构建',
              text: '整合企业尽调报告、财务数据、市场分析等多源信息，构建动态投资语境图谱。'
            },
            {
              title: '智能分析工具',
              text: '基于 ToG 技术的投资分析 Agent，提供项目评估、风险分析、行业对比等功能。'
            },
            {
              title: '决策支持系统',
              text: '利用 RAG 技术实现精准检索，为投资决策提供全面的知识支撑。'
            },
            {
              title: '在图上思考',
              text: '在语境图谱上进行深度思考推理，考虑知识关联性，提供比传统方法更智能的分析洞察。'
            }
          ]
        },
        results: [
          {
            icon: '/images/icons/效率提升图标.png',
            iconAlt: '效率提升',
            title: '项目分析效率提升',
            text: '尽调周期缩短 30%，分析准确性显著提高。'
          },
          {
            icon: '/images/icons/知识检索图标.png',
            iconAlt: '知识检索',
            title: '知识检索速度改善',
            text: '信息检索时间从小时级降低到分钟级。'
          },
          {
            icon: '/images/icons/决策质量图标.png',
            iconAlt: '决策质量',
            title: '决策质量提升',
            text: '基于全量数据的智能分析，降低投资风险。'
          }
        ]
      },
      {
        id: 'aiService',
        badge: { class: 'syndata-badge', text: 'SynData Platform' },
        title: '头部 AI 服务商',
        subtitle: '智能客服优化',
        industry: 'AI 服务',
        background: '国内领先的银行 AI 客服解决方案提供商，服务于多家大型银行，处理日均百万级客服咨询。',
        challenges: [
          { icon: '/images/icons/准确率下降图标.png', iconAlt: '准确率下降', text: '意图识别准确率仅为 60%，影响客户体验' },
          { icon: '/images/icons/数据稀缺图标.png', iconAlt: '数据稀缺', text: '训练数据稀缺，特别是长尾场景数据不足' },
          { icon: '/images/icons/迭代周期图标.png', iconAlt: '迭代周期', text: '模型迭代周期长，难以快速响应业务需求' }
        ],
        solution: {
          title: 'SynData Platform + 合成对话数据',
          modules: [
            {
              title: '合成对话数据生成',
              text: '基于 SoG 技术生成高质量银行客服对话数据，覆盖各种业务场景。'
            },
            {
              title: '意图识别优化',
              text: '利用合成数据扩充训练集，重点补强长尾场景和新业务场景。'
            },
            {
              title: '模型持续迭代',
              text: '建立合成数据驱动的模型迭代流程，快速响应业务变化。'
            },
            {
              title: '专业领域小模型优化',
              text: '通过合成数据进行定向优化小模型，让其在专业领域搜索更加精准，在搜索场景下表现卓越。'
            }
          ]
        },
        results: [
          {
            icon: '/images/icons/准确率提升图标.png',
            iconAlt: '准确率提升',
            title: '意图识别准确率提升',
            text: '从 60% 提升到 67%，提升幅度 11.7%。'
          },
          {
            icon: '/images/icons/数据质量图标.png',
            iconAlt: '数据质量',
            title: '训练数据质量改善',
            text: '合成数据覆盖率提升 3 倍，数据分布更均衡。'
          },
          {
            icon: '/images/icons/迭代速度图标.png',
            iconAlt: '迭代速度',
            title: '模型迭代速度提升',
            text: '迭代周期从月级缩短到周级。'
          }
        ]
      }
    ]
  },
  additional: {
    items: [
      {
        id: 'insurance',
        title: '保险行业 - AI 智能客服',
        tags: ['保险行业', '智能客服', '合成数据'],
        description: '为大型保险公司提供 AI 智能客服解决方案，通过合成数据技术显著提升客服系统的对话质量和处理效率。',
        placeholder: '【需要图片：保险行业智能客服案例总览】',
        challenge: '提升 AI 保险客服的对话质量，解决长尾问题和反例问题，降低人工转接率。',
        solution: '通过合成数据技术，为 AI 客服模型提供高质量训练数据，优化罕见问题和长尾知识的处理能力。',
        results: [
          { value: '+15.5%', label: '良品率提升', icon: '/images/icons/良品率提升图标.png', iconAlt: '良品率提升' },
          { value: '90%', label: '长尾问题覆盖', icon: '/images/icons/长尾问题图标.png', iconAlt: '长尾问题覆盖' },
          { value: '-60%', label: '人工转接率降低', icon: '/images/icons/转接率图标.png', iconAlt: '人工转接率降低' }
        ]
      },
      {
        id: 'finance',
        title: '金融领域 - IDEA FinAI 经济超脑',
        tags: ['金融科技', '经济分析', '智能投研'],
        description: '与 IDEA 研究院合作开发 FinAI 经济超脑，通过语境图谱技术提升金融数据分析和投研能力。',
        placeholder: '【需要图片：金融 IDEA FinAI 经济超脑】',
        challenge: '构建企业语境图谱，提升竞对分析与行业监控的效率，实现跨文档复杂推理。',
        solution: '通过语境图谱技术，实现金融行业企业知识的结构化管理，自动化采集海量数据并识别行业属性。',
        results: [
          { value: '20.3 倍', label: '研报数据增量', icon: '/images/icons/数据增量图标.png', iconAlt: '研报数据增量' },
          { value: '+21.2%', label: '推理准确率提升', icon: '/images/icons/推理准确率图标.png', iconAlt: '推理准确率提升' },
          { value: '80%+', label: '企业属性识别准确率', icon: '/images/icons/识别准确率图标.png', iconAlt: '企业属性识别准确率' }
        ]
      },
      {
        id: 'education',
        title: '教培领域 - 上海高金金融知识大模型',
        tags: ['教育培训', '金融知识', '考试系统'],
        description: '为上海高金提供金融知识大模型，通过合成数据技术生成 50 万金融问答对，打造超越 GPT-4 的专业模型。',
        placeholder: '【需要图片：上海高金金融知识大模型】',
        challenge: '解决金融大模型的题库不足问题，提升考试通过率，打造专业级金融知识 AI。',
        solution: '通过合成数据技术生成大量高质量金融问答对，训练百亿参数级的金融知识大模型。',
        results: [
          { value: '50 万', label: '金融问答对', icon: '/images/icons/题库数量图标.png', iconAlt: '金融问答对' },
          { value: 'CPA+CFA', label: '考试通过表现', icon: '/images/icons/考试通过图标.png', iconAlt: '考试通过表现' },
          { value: '超越 GPT-4', label: '模型效果', icon: '/images/icons/性能超越图标.png', iconAlt: '模型效果' }
        ]
      }
    ]
  },
  benchmarks: {
    title: '行业标杆对比',
    description: 'DataArc 与国际领先方案的对比优势',
    cards: [
      {
        title: 'Writer 模型对比',
        stats: [
          { label: '传统训练成本', value: '70 万美元' },
          { label: 'DataArc 方案', value: '显著降低' }
        ],
        improvement: '工具调用准确率提升 19.3%'
      },
      {
        title: '数据合规风险',
        stats: [
          { label: '数据违规成本', value: '1480 万美元' },
          { label: 'DataArc 保障', value: '零风险' }
        ],
        improvement: '通过 SoE 技术完全规避数据泄露风险'
      },
      {
        title: 'Gretel 对比优势',
        stats: [
          { label: '传统合成数据', value: '基础功能' },
          { label: 'DataArc SoG', value: '智能图谱' }
        ],
        improvement: '基于语境图谱的深度合成技术'
      }
    ]
  },
  labels: {
    clientBackground: '客户背景',
    businessChallenges: '业务挑战',
    solutions: '解决方案',
    implementationResults: '实施效果',
    dataarcSolutions: 'DataArc 解决方案',
    businessResults: '业务效果'
  }
}
