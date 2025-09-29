export default {
  hero: {
    title: 'Customer Cases',
    subtitle: 'Innovation Applications & Results',
    englishLine: 'CUSTOMER CASES • INNOVATION APPLICATIONS & RESULTS',
    description: 'DataArc has successfully delivered AI intelligence solutions for multiple leading enterprises across finance, manufacturing, cloud computing, education, and AI services.',
    stats: [
      { value: '5+', label: 'Leading Enterprise Clients' },
      { value: '67%', label: 'AI Accuracy Improvement' },
      { value: '90%', label: 'Data Risk Reduction' }
    ]
  },
  industry: {
    title: 'Industry Coverage',
    description: 'DataArc has proven success across multiple core industries',
    items: [
      {
        key: 'finance',
        title: 'Finance & Investment',
        description: 'Leading investment institutions and insurance providers',
        icon: '/images/icons/金融投资行业图标.png',
        iconAlt: 'Finance and Investment',
        iconSize: 'large',
        glow: true,
        highlights: ['Investment Analysis', 'Risk Control', 'Knowledge Management']
      },
      {
        key: 'manufacturing',
        title: 'Manufacturing',
        description: 'Leading manufacturing enterprises',
        icon: '/images/icons/制造业图标.png',
        iconAlt: 'Manufacturing',
        iconSize: 'large',
        glow: false,
        highlights: ['Process Knowledge', 'Quality Control', 'Talent Training']
      },
      {
        key: 'cloud',
        title: 'Cloud Computing',
        description: 'Leading cloud service providers',
        icon: '/images/icons/云计算图标.png',
        iconAlt: 'Cloud Computing',
        glow: true,
        highlights: ['Medical AI', 'Data Integration', 'Platform Services']
      },
      {
        key: 'education',
        title: 'Education & Training',
        description: 'Leading education institutions',
        icon: '/images/icons/教育培训图标.png',
        iconAlt: 'Education and Training',
        glow: true,
        highlights: ['Intelligent Classification', 'Context Graph', 'Exam System']
      },
      {
        key: 'aiServices',
        title: 'AI Services',
        description: 'Leading AI service providers',
        icon: '/images/icons/AI服务图标.png',
        iconAlt: 'AI Services',
        glow: true,
        highlights: ['Smart Customer Service', 'Intent Recognition', 'Synthetic Data']
      }
    ]
  },
  featured: {
    title: 'Detailed Customer Cases',
    description: 'Insights into the AI transformation practices and outcomes of leading enterprises',
    items: [
      {
        id: 'investment',
        badge: { class: 'livingkb-badge', text: 'LivingKB' },
        title: 'Leading Investment Institution',
        subtitle: 'Financial Knowledge Base',
        industry: 'Finance & Investment',
        background: 'A renowned domestic investment institution managing hundreds of billions in assets and focusing on investments across technology, healthcare, consumer goods, and more.',
        challenges: [
          { icon: '/images/icons/数据分析图标.png', iconAlt: 'Data Analysis', text: 'Low efficiency in managing and analyzing investment project information' },
          { icon: '/images/icons/知识检索图标.png', iconAlt: 'Knowledge Retrieval', text: 'Knowledge scattered across systems, difficult to utilize effectively' },
          { icon: '/images/icons/时间效率图标.png', iconAlt: 'Time Efficiency', text: 'Lengthy due diligence cycles and slow decision making' }
        ],
        solution: {
          title: 'LivingKB + Investment Analysis Agent',
          modules: [
            {
              title: 'Context Graph Construction',
              text: 'Integrate due diligence reports, financial data, and market analysis to build a dynamic investment context graph.'
            },
            {
              title: 'Intelligent Analysis Tools',
              text: 'Investment analysis agent powered by ToG technology delivering project evaluation, risk analysis, and industry benchmarking.'
            },
            {
              title: 'Decision Support System',
              text: 'Leverage RAG technology for precise retrieval and comprehensive knowledge support for investment decisions.'
            },
            {
              title: 'Thinking on Graph',
              text: 'Deep reasoning on context graphs that considers knowledge correlations, providing more intelligent insights than traditional methods.'
            }
          ]
        },
        results: [
          {
            icon: '/images/icons/效率提升图标.png',
            iconAlt: 'Efficiency Improvement',
            title: 'Project Analysis Efficiency',
            text: 'Due diligence cycle shortened by 30% with markedly higher analysis accuracy.'
          },
          {
            icon: '/images/icons/知识检索图标.png',
            iconAlt: 'Knowledge Retrieval',
            title: 'Knowledge Retrieval Speed',
            text: 'Information lookup time reduced from hours to minutes.'
          },
          {
            icon: '/images/icons/决策质量图标.png',
            iconAlt: 'Decision Quality',
            title: 'Decision Quality Improvement',
            text: 'Comprehensive data-driven analysis lowered investment risks.'
          }
        ]
      },
      {
        id: 'aiService',
        badge: { class: 'syndata-badge', text: 'SynData Platform' },
        title: 'Leading AI Service Provider',
        subtitle: 'Smart Customer Service Optimization',
        industry: 'AI Services',
        background: 'A leading domestic banking AI customer service provider serving multiple large banks and handling millions of daily inquiries.',
        challenges: [
          { icon: '/images/icons/准确率下降图标.png', iconAlt: 'Accuracy Decline', text: 'Intent recognition accuracy at only 60%, hurting customer experience' },
          { icon: '/images/icons/数据稀缺图标.png', iconAlt: 'Data Scarcity', text: 'Limited training data, especially for long-tail scenarios' },
          { icon: '/images/icons/迭代周期图标.png', iconAlt: 'Iteration Cycle', text: 'Lengthy model iteration cycles unable to meet fast-changing business needs' }
        ],
        solution: {
          title: 'SynData Platform + Synthetic Dialog Data',
          modules: [
            {
              title: 'Synthetic Dialog Generation',
              text: 'Generate high-quality banking customer service dialogs using SoG technology to cover diverse scenarios.'
            },
            {
              title: 'Intent Recognition Optimisation',
              text: 'Expand training datasets with synthetic data to reinforce long-tail and emerging scenarios.'
            },
            {
              title: 'Continuous Model Iteration',
              text: 'Build a synthetic data-driven iteration pipeline to respond rapidly to business changes.'
            },
            {
              title: 'Specialized Small Model Optimization',
              text: 'Use synthetic data to fine-tune small models for precise domain-specific search, achieving exceptional performance in search scenarios.'
            }
          ]
        },
        results: [
          {
            icon: '/images/icons/准确率提升图标.png',
            iconAlt: 'Accuracy Improvement',
            title: 'Intent Recognition Accuracy',
            text: 'Accuracy increased from 60% to 67%, an 11.7% improvement.'
          },
          {
            icon: '/images/icons/数据质量图标.png',
            iconAlt: 'Data Quality',
            title: 'Training Data Quality',
            text: 'Synthetic data coverage tripled, delivering more balanced data distribution.'
          },
          {
            icon: '/images/icons/迭代速度图标.png',
            iconAlt: 'Iteration Speed',
            title: 'Model Iteration Speed',
            text: 'Iteration cycles reduced from monthly to weekly cadence.'
          }
        ]
      }
    ]
  },
  additional: {
    items: [
      {
        id: 'insurance',
        title: 'Insurance — AI Smart Customer Service',
        tags: ['Insurance', 'Smart Service', 'Synthetic Data'],
        description: 'Delivered AI-powered customer service for a major insurance group, dramatically improving dialog quality and handling efficiency with synthetic data.',
        placeholder: '[Image: Insurance Smart Customer Service Overview]',
        challenge: 'Increase AI customer service quality, resolve long-tail and corner cases, and lower human transfer rates.',
        solution: 'Provide high-quality synthetic training data to strengthen rare and long-tail intent handling for the AI customer service model.',
        results: [
          { value: '+15.5%', label: 'Quality Rate Improvement', icon: '/images/icons/良品率提升图标.png', iconAlt: 'Quality Rate Improvement' },
          { value: '90%', label: 'Long-tail Coverage', icon: '/images/icons/长尾问题图标.png', iconAlt: 'Long-tail Coverage' },
          { value: '-60%', label: 'Reduction in Human Transfers', icon: '/images/icons/转接率图标.png', iconAlt: 'Reduction in Human Transfers' }
        ]
      },
      {
        id: 'finance',
        title: 'Finance — IDEA FinAI Economic Super Brain',
        tags: ['FinTech', 'Economic Analysis', 'Smart Research'],
        description: 'Partnered with IDEA Research Institute to build the FinAI Economic Super Brain, enhancing financial analysis and research with context graph technology.',
        placeholder: '[Image: IDEA FinAI Economic Super Brain]',
        challenge: 'Build enterprise context graphs to accelerate competitive analysis, industry monitoring, and complex cross-document reasoning.',
        solution: 'Structure financial enterprise knowledge with context graphs, automatically gathering massive data and identifying industry attributes.',
        results: [
          { value: '20.3x', label: 'Research Data Volume', icon: '/images/icons/数据增量图标.png', iconAlt: 'Research Data Volume' },
          { value: '+21.2%', label: 'Reasoning Accuracy Gain', icon: '/images/icons/推理准确率图标.png', iconAlt: 'Reasoning Accuracy Gain' },
          { value: '80%+', label: 'Enterprise Attribute Precision', icon: '/images/icons/识别准确率图标.png', iconAlt: 'Enterprise Attribute Precision' }
        ]
      },
      {
        id: 'education',
        title: 'Education — SAIF Financial Knowledge Large Model',
        tags: ['Education & Training', 'Financial Knowledge', 'Exam System'],
        description: 'Supported SAIF with a financial knowledge large model, generating 500K Q&A pairs via synthetic data to outperform GPT-4 on domain tasks.',
        placeholder: '[Image: SAIF Financial Knowledge Large Model]',
        challenge: 'Address limited financial question banks, raise certification pass rates, and build a professional-grade financial AI.',
        solution: 'Generate large volumes of high-quality financial Q&A pairs with synthetic data to train a 10B-parameter financial model.',
        results: [
          { value: '500K', label: 'Financial Q&A Pairs', icon: '/images/icons/题库数量图标.png', iconAlt: 'Financial Q&A Pairs' },
          { value: 'CPA + CFA', label: 'Exam Performance', icon: '/images/icons/考试通过图标.png', iconAlt: 'Exam Performance' },
          { value: 'Outperforms GPT-4', label: 'Model Result', icon: '/images/icons/性能超越图标.png', iconAlt: 'Model Result' }
        ]
      }
    ]
  },
  benchmarks: {
    title: 'Industry Benchmarks',
    description: "DataArc's competitive advantages versus global leaders",
    cards: [
      {
        title: 'Writer Model Comparison',
        stats: [
          { label: 'Traditional Training Cost', value: 'US$700K' },
          { label: 'DataArc Solution', value: 'Significantly Reduced' }
        ],
        improvement: 'Tool-call accuracy improved by 19.3%'
      },
      {
        title: 'Data Compliance Risk',
        stats: [
          { label: 'Data Breach Cost', value: 'US$14.8M' },
          { label: 'DataArc Protection', value: 'Zero Risk' }
        ],
        improvement: 'SoE technology eliminates data leakage risk'
      },
      {
        title: 'Gretel Comparison Advantage',
        stats: [
          { label: 'Traditional Synthetic Data', value: 'Basic Functions' },
          { label: 'DataArc SoG', value: 'Intelligent Graph' }
        ],
        improvement: 'Deep synthesis powered by context graphs'
      }
    ]
  },
  labels: {
    clientBackground: 'Client Background',
    businessChallenges: 'Business Challenges',
    solutions: 'Solutions',
    implementationResults: 'Implementation Results',
    dataarcSolutions: 'DataArc Solutions',
    businessResults: 'Business Results'
  }
}
