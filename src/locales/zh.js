import home from './home/zh'
import company from './company/zh'
import products from './products/zh'
import technology from './technology/zh'
import cases from './cases/zh'

const common = {
  brand: 'DataArc',
  language: {
    label: '语言',
    zh: '中文',
    en: '英语',
    ar: '阿拉伯语',
  },
  buttons: {
    login: '立即登录',
    contact: '联系我们',
    getStarted: '立即体验',
    learnMore: '了解更多',
    tryNow: '立即试用',
    backToHome: '返回首页',
    continueReading: '继续阅读',
  },
  graph: {
    hint: '点击节点开始AI合成',
    controls: '拖拽节点交互',
    interaction: '拖动 or 点击 节点体验交互...',
    aiDialogue: {
      thinking: '正在思考...',
      analyzing: '正在分析数据关系...',
      generating: '正在生成合成数据...',
      completed: 'AI 合成完成！',
    },
    nodes: {
      // 核心节点
      finance: '金融核心',
      education: '教育核心',
      industry: '工业核心',
      healthcare: '医疗核心',
      technology: '科技核心',
      
      // 金融相关
      risk_control: '风控数据',
      transaction: '交易记录',
      customer_profile: '客户画像',
      market_data: '市场数据',
      regulatory_compliance: '监管合规',
      credit_score: '信用评分',
      fraud_detect: '反欺诈',
      loan_approval: '放贷审批',
      stress_testing: '压力测试',
      payment_flow: '支付流水',
      trade_volume: '交易量',
      settlement: '清算数据',
      algorithmic_trading: '算法交易',
      demographic_data: '人口统计',
      spending_pattern: '消费模式',
      investment_preference: '投资偏好',
      income_bracket: '收入区间',
      stock_price: '股票价格',
      bond_yield: '债券收益',
      commodity_futures: '商品期货',
      currency_exchange: '外汇汇率',
      basel_requirements: '巴塞尔要求',
      aml_compliance: '反洗钱合规',
      kyc_verification: '客户身份验证',
      regulatory_reporting: '监管报告',
      
      // 教育相关
      learning_behavior: '学习行为',
      course_data: '课程数据',
      grade_analysis: '成绩分析',
      teacher_eval: '教师评价',
      educational_resources: '教育资源',
      study_time: '学习时长',
      interaction: '互动频率',
      progress: '学习进度',
      engagement_rate: '参与度',
      course_content: '课程内容',
      learning_path: '学习路径',
      curriculum_design: '课程设计',
      assessment_method: '评估方法',
      grade_distribution: '成绩分布',
      skill_assessment: '技能评估',
      learning_outcomes: '学习成果',
      academic_progress: '学业进度',
      teaching_quality: '教学质量',
      student_feedback: '学生反馈',
      digital_textbooks: '数字教材',
      online_libraries: '在线图书馆',
      
      // 工业相关
      production_data: '生产数据',
      equipment_status: '设备状态',
      quality_control: '质量检测',
      supply_chain: '供应链',
      efficiency_metrics: '效率指标',
      output_rate: '产出率',
      efficiency: '效率指标',
      downtime: '停机时间',
      capacity_utilization: '产能利用率',
      maintenance_schedule: '维护计划',
      sensor_data: '传感器数据',
      predictive_maintenance: '预测性维护',
      equipment_efficiency: '设备效率',
      defect_rate: '缺陷率',
      inspection_results: '检验结果',
      compliance_standards: '合规标准',
      process_optimization: '工艺优化',
      vendor_management: '供应商管理',
      logistics_optimization: '物流优化',
      inventory_level: '库存水平',
      demand_forecasting: '需求预测',
      
      // 医疗相关
      patient_records: '病历档案',
      clinical_trials: '临床试验',
      medical_imaging: '医学影像',
      drug_discovery: '药物研发',
      treatment_outcomes: '治疗效果',
      electronic_health_records: '电子病历',
      diagnosis_codes: '诊断编码',
      treatment_protocols: '治疗方案',
      patient_monitoring: '患者监护',
      biomarker_analysis: '生物标记分析',
      genomic_data: '基因组数据',
      clinical_trials_data: '临床试验数据',
      adverse_events: '不良反应',
      ct_scan: 'CT扫描',
      mri_analysis: 'MRI分析',
      x_ray_detection: 'X光检测',
      radiology_ai: '放射学AI',
      molecular_modeling: '分子建模',
      pharmacokinetics: '药代动力学',
      recovery_rates: '康复率',
      patient_satisfaction: '患者满意度',
      
      // 科技相关
      ai_algorithms: 'AI算法',
      data_infrastructure: '数据基础设施',
      software_development: '软件开发',
      cybersecurity: '网络安全',
      cloud_computing: '云计算',
      machine_learning: '机器学习',
      deep_learning: '深度学习',
      natural_language_processing: '自然语言处理',
      computer_vision: '计算机视觉',
      big_data_analytics: '大数据分析',
      distributed_systems: '分布式系统',
      agile_methodology: '敏捷方法',
      devops_practices: 'DevOps实践',
      threat_detection: '威胁检测',
      encryption_protocols: '加密协议',
      serverless_computing: '无服务器计算',
      container_orchestration: '容器编排',
    },
    sampleConversations: [
      ["分析客户信贷风险等级", "基于历史交易数据，该客户风险等级为B+，建议授信额度50万"],
      ["预测下季度投资趋势", "综合宏观经济指标，科技板块上涨概率72%，建议配置15%"],
      ["识别异常交易行为", "检测到账户近7日交易频率异常，疑似洗钱风险，建议人工审核"],
      ["优化资产配置策略", "当前组合波动率偏高，建议降低股票仓位至60%，增加债券配置"],
      ["推荐个性化学习路径", "根据学习行为分析，建议优先加强数学基础模块，预计需要15天"],
      ["优化生产线排程", "建议调整生产线A至85%产能，预计提升效率12%，节约成本8万"],
      ["患者诊断辅助分析", "基于症状和检查结果，疑似心血管疾病，建议进一步心电图检查"],
      ["AI模型性能优化", "通过超参数调优，模型准确率提升至94.5%，推理速度提升30%"]
    ]
  },
}

const nav = {
  home: {
    label: '首页',
  },
  products: {
    label: '产品方案',
  },
  technology: {
    label: '技术优势',
  },
  cases: {
    label: '客户案例',
  },
  company: {
    label: '关于我们',
  },
}

const header = {
  dropdowns: {
    home: {
      market: {
        title: '市场机会',
        description: '数据稀缺危机与行业增长洞察',
      },
      products: {
        title: '产品方案',
        description: 'LivingKB 与 SynData Platform 概览',
      },
      technology: {
        title: '技术优势',
        description: '更聪明、更专业、更靠谱',
      },
      team: {
        title: '团队实力',
        description: '精英团队与深厚研究积累',
      },
    },
    products: {
      comparison: {
        title: '产品对比矩阵',
        description: '核心定位与能力对比',
      },
      livingkb: {
        title: 'LivingKB',
        description: '企业知识库智能化平台',
      },
      syndata: {
        title: 'SynData Platform',
        description: '合成数据生成平台',
      },
      synergy: {
        title: '协同价值',
        description: '双产品闭环生态价值',
      },
      cases: {
        title: '成功案例',
        description: '客户实施效果与反馈',
      },
    },
    technology: {
      process: {
        title: '技术流程',
        description: '从数据到智能决策的完整流程',
      },
      advantages: {
        title: '核心优势',
        description: '六大技术亮点解析',
      },
      performance: {
        title: '性能对比',
        description: '建图效率与准确率优势',
      },
      faq: {
        title: '常见问题',
        description: '技术问题解答',
      },
    },
    cases: {
      coverage: {
        title: '行业覆盖',
        description: '金融、制造、云计算等行业',
      },
      detail: {
        title: '详细案例',
        description: '客户挑战、解决方案与成效',
      },
      benchmark: {
        title: '标杆对比',
        description: '与行业标杆产品对比',
      },
    },
    company: {
      about: {
        title: '公司介绍',
        description: '愿景与发展理念',
      },
      team: {
        title: '核心团队',
        description: '团队介绍与技术优势',
      },
      funding: {
        title: '融资情况',
        description: '融资轮次与投资机构',
      },
      history: {
        title: '发展历程',
        description: '公司成长历程与里程碑',
      },
    },
  },
}

const footer = {
  tagline: '通过合成数据技术推动人工智能创新，为企业提供智能化解决方案。',
  socials: {
    wechat: '微信',
    weibo: '微博',
    email: '邮箱',
  },
  nav: {
    products: {
      title: '产品方案',
      links: {
        livingkb: 'Living KB',
        syndata: 'SynData Platform',
        apiDocs: 'API 文档',
        devTools: '开发者工具',
      },
    },
    support: {
      title: '技术支持',
      links: {
        technology: '技术优势',
        techDocs: '技术文档',
        faq: '常见问题',
        techBlog: '技术博客',
      },
    },
    about: {
      title: '关于我们',
      links: {
        company: '公司介绍',
        cases: '成功案例',
        news: '新闻动态',
        careers: '加入我们',
      },
    },
    contact: {
      title: '联系方式',
      address: '深圳市南山区科技园',
      email: 'contact@dataarc.tech',
      phone: '+86 400-123-4567',
    },
  },
  bottom: {
    privacy: '隐私政策',
    terms: '服务条款',
    cookies: 'Cookie 政策',
    icp: '粤ICP备2024000000号',
    copyright: '© 2024 数创弧光科技有限公司. 保留所有权利.',
  },
}

export default {
  common,
  nav,
  header,
  home,
  company,
  products,
  technology,
  cases,
  footer,
}
