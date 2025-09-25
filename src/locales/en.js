import home from './home/en'
import company from './company/en'
import products from './products/en'
import technology from './technology/en'
import cases from './cases/en'

const common = {
  brand: 'DataArc',
  language: {
    label: 'Language',
    zh: '中文',
    en: 'English',
    ar: 'Arabic',
  },
  buttons: {
    login: 'Sign In',
    contact: 'Contact Us',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
  },
  graph: {
    hint: 'Click node to start AI synthesis',
    controls: 'Double-click to re-layout | Drag nodes to interact',
    aiDialogue: {
      thinking: 'Thinking...',
      analyzing: 'Analyzing data relationships...',
      generating: 'Generating synthetic data...',
      completed: 'AI synthesis completed!',
    },
    sampleConversations: [
      {q: "Analyze customer credit risk level", a: "Based on historical transaction data, customer risk level is B+, recommended credit limit 500K"},
      {q: "Predict next quarter investment trends", a: "Comprehensive macroeconomic indicators show 72% probability of tech sector rise, suggest 15% allocation"},
      {q: "Identify abnormal trading behavior", a: "Detected abnormal account trading frequency in past 7 days, suspected money laundering risk, recommend manual review"},
      {q: "Optimize asset allocation strategy", a: "Current portfolio volatility is high, recommend reducing equity position to 60%, increase bond allocation"},
      {q: "Recommend personalized learning path", a: "Based on learning behavior analysis, suggest prioritizing math foundation module, estimated 15 days needed"},
      {q: "Optimize production line scheduling", a: "Suggest adjusting production line A to 85% capacity, expect 12% efficiency improvement, save 80K cost"},
      {q: "Patient diagnosis assistance analysis", a: "Based on symptoms and test results, suspected cardiovascular disease, recommend further ECG examination"},
      {q: "AI model performance optimization", a: "Through hyperparameter tuning, model accuracy improved to 94.5%, inference speed increased by 30%"}
    ]
  },
}

const nav = {
  home: {
    label: 'Home',
  },
  products: {
    label: 'Products',
  },
  technology: {
    label: 'Technology',
  },
  cases: {
    label: 'Cases',
  },
  company: {
    label: 'About',
  },
}

const header = {
  dropdowns: {
    home: {
      market: {
        title: 'Market Opportunity',
        description: 'Data scarcity crisis and industry growth insights',
      },
      products: {
        title: 'Product Solutions',
        description: 'LivingKB and SynData Platform overview',
      },
      technology: {
        title: 'Technology',
        description: 'Smarter, more reliable, more professional',
      },
      team: {
        title: 'Team Strength',
        description: 'Expert team and deep research background',
      },
    },
    products: {
      comparison: {
        title: 'Comparison Matrix',
        description: 'Core positioning and capability comparison',
      },
      livingkb: {
        title: 'LivingKB',
        description: 'Intelligent enterprise knowledge base platform',
      },
      syndata: {
        title: 'SynData Platform',
        description: 'Synthetic data generation platform',
      },
      synergy: {
        title: 'Synergy Value',
        description: 'Closed-loop ecosystem value',
      },
      cases: {
        title: 'Success Cases',
        description: 'Customer outcomes and feedback',
      },
    },
    technology: {
      process: {
        title: 'Technical Process',
        description: 'End-to-end flow from data to decision',
      },
      advantages: {
        title: 'Core Advantages',
        description: 'Six key technical differentiators',
      },
      performance: {
        title: 'Performance',
        description: 'Graph efficiency and accuracy benefits',
      },
      faq: {
        title: 'FAQ',
        description: 'Answers to technical questions',
      },
    },
    cases: {
      coverage: {
        title: 'Industry Coverage',
        description: 'Finance, manufacturing, cloud and more',
      },
      detail: {
        title: 'Detailed Cases',
        description: 'Challenges, solutions, and impact',
      },
      benchmark: {
        title: 'Benchmark',
        description: 'Comparison with industry leaders',
      },
    },
    company: {
      about: {
        title: 'About DataArc',
        description: 'Vision and development philosophy',
      },
      team: {
        title: 'Core Team',
        description: 'Team strengths and expertise',
      },
      funding: {
        title: 'Funding',
        description: 'Investment rounds and partners',
      },
      history: {
        title: 'Development',
        description: 'Growth milestones and journey',
      },
    },
  },
}

const footer = {
  tagline: 'Driving AI innovation with synthetic data to deliver intelligent solutions for enterprises.',
  socials: {
    wechat: 'WeChat',
    weibo: 'Weibo',
    email: 'Email',
  },
  nav: {
    products: {
      title: 'Product Solutions',
      links: {
        livingkb: 'Living KB',
        syndata: 'SynData Platform',
        apiDocs: 'API Docs',
        devTools: 'Developer Tools',
      },
    },
    support: {
      title: 'Support',
      links: {
        technology: 'Technology Advantages',
        techDocs: 'Technical Docs',
        faq: 'FAQ',
        techBlog: 'Tech Blog',
      },
    },
    about: {
      title: 'About Us',
      links: {
        company: 'Company Overview',
        cases: 'Success Cases',
        news: 'News & Media',
        careers: 'Careers',
      },
    },
    contact: {
      title: 'Contact',
      address: 'Shenzhen Nanshan Technology Park',
      email: 'contact@dataarc.tech',
      phone: '+86 400-123-4567',
    },
  },
  bottom: {
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    cookies: 'Cookie Policy',
    icp: '粤ICP备2024000000号',
    copyright: '© 2024 DataArc Technology Co., Ltd. All rights reserved.',
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
