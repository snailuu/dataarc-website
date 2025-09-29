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
    tryNow: 'Try Now',
    backToHome: 'Back to Home',
    continueReading: 'Continue Reading',
  },
  graph: {
    hint: 'Click node to start AI synthesis',
    controls: 'Drag nodes to interact',
    interaction: 'Drag or click nodes to interact...',
    aiDialogue: {
      thinking: 'Thinking...',
      analyzing: 'Analyzing data relationships...',
      generating: 'Generating synthetic data...',
      completed: 'AI synthesis completed!',
    },
    nodes: {
      // Core nodes
      finance: 'Financial Core',
      education: 'Education Core',
      industry: 'Industrial Core',
      healthcare: 'Healthcare Core',
      technology: 'Technology Core',
      
      // Finance related
      risk_control: 'Risk Control',
      transaction: 'Transaction Records',
      customer_profile: 'Customer Profile',
      market_data: 'Market Data',
      regulatory_compliance: 'Regulatory Compliance',
      credit_score: 'Credit Score',
      fraud_detect: 'Fraud Detection',
      loan_approval: 'Loan Approval',
      stress_testing: 'Stress Testing',
      payment_flow: 'Payment Flow',
      trade_volume: 'Trade Volume',
      settlement: 'Settlement Data',
      algorithmic_trading: 'Algorithmic Trading',
      demographic_data: 'Demographic Data',
      spending_pattern: 'Spending Pattern',
      investment_preference: 'Investment Preference',
      income_bracket: 'Income Bracket',
      stock_price: 'Stock Price',
      bond_yield: 'Bond Yield',
      commodity_futures: 'Commodity Futures',
      currency_exchange: 'Currency Exchange',
      basel_requirements: 'Basel Requirements',
      aml_compliance: 'AML Compliance',
      kyc_verification: 'KYC Verification',
      regulatory_reporting: 'Regulatory Reporting',
      
      // Education related
      learning_behavior: 'Learning Behavior',
      course_data: 'Course Data',
      grade_analysis: 'Grade Analysis',
      teacher_eval: 'Teacher Evaluation',
      educational_resources: 'Educational Resources',
      study_time: 'Study Time',
      interaction: 'Interaction Frequency',
      progress: 'Learning Progress',
      engagement_rate: 'Engagement Rate',
      course_content: 'Course Content',
      learning_path: 'Learning Path',
      curriculum_design: 'Curriculum Design',
      assessment_method: 'Assessment Method',
      grade_distribution: 'Grade Distribution',
      skill_assessment: 'Skill Assessment',
      learning_outcomes: 'Learning Outcomes',
      academic_progress: 'Academic Progress',
      teaching_quality: 'Teaching Quality',
      student_feedback: 'Student Feedback',
      digital_textbooks: 'Digital Textbooks',
      online_libraries: 'Online Libraries',
      
      // Industry related
      production_data: 'Production Data',
      equipment_status: 'Equipment Status',
      quality_control: 'Quality Control',
      supply_chain: 'Supply Chain',
      efficiency_metrics: 'Efficiency Metrics',
      output_rate: 'Output Rate',
      efficiency: 'Efficiency Index',
      downtime: 'Downtime',
      capacity_utilization: 'Capacity Utilization',
      maintenance_schedule: 'Maintenance Schedule',
      sensor_data: 'Sensor Data',
      predictive_maintenance: 'Predictive Maintenance',
      equipment_efficiency: 'Equipment Efficiency',
      defect_rate: 'Defect Rate',
      inspection_results: 'Inspection Results',
      compliance_standards: 'Compliance Standards',
      process_optimization: 'Process Optimization',
      vendor_management: 'Vendor Management',
      logistics_optimization: 'Logistics Optimization',
      inventory_level: 'Inventory Level',
      demand_forecasting: 'Demand Forecasting',
      
      // Healthcare related
      patient_records: 'Patient Records',
      clinical_trials: 'Clinical Trials',
      medical_imaging: 'Medical Imaging',
      drug_discovery: 'Drug Discovery',
      treatment_outcomes: 'Treatment Outcomes',
      electronic_health_records: 'Electronic Health Records',
      diagnosis_codes: 'Diagnosis Codes',
      treatment_protocols: 'Treatment Protocols',
      patient_monitoring: 'Patient Monitoring',
      biomarker_analysis: 'Biomarker Analysis',
      genomic_data: 'Genomic Data',
      clinical_trials_data: 'Clinical Trials Data',
      adverse_events: 'Adverse Events',
      ct_scan: 'CT Scan',
      mri_analysis: 'MRI Analysis',
      x_ray_detection: 'X-ray Detection',
      radiology_ai: 'Radiology AI',
      molecular_modeling: 'Molecular Modeling',
      pharmacokinetics: 'Pharmacokinetics',
      recovery_rates: 'Recovery Rates',
      patient_satisfaction: 'Patient Satisfaction',
      
      // Technology related
      ai_algorithms: 'AI Algorithms',
      data_infrastructure: 'Data Infrastructure',
      software_development: 'Software Development',
      cybersecurity: 'Cybersecurity',
      cloud_computing: 'Cloud Computing',
      machine_learning: 'Machine Learning',
      deep_learning: 'Deep Learning',
      natural_language_processing: 'Natural Language Processing',
      computer_vision: 'Computer Vision',
      big_data_analytics: 'Big Data Analytics',
      distributed_systems: 'Distributed Systems',
      agile_methodology: 'Agile Methodology',
      devops_practices: 'DevOps Practices',
      threat_detection: 'Threat Detection',
      encryption_protocols: 'Encryption Protocols',
      serverless_computing: 'Serverless Computing',
      container_orchestration: 'Container Orchestration',
    },
    sampleConversations: [
      ["Analyze customer credit risk level", "Based on historical transaction data, customer risk level is B+, recommended credit limit 500K"],
      ["Predict next quarter investment trends", "Comprehensive macroeconomic indicators show 72% probability of tech sector rise, suggest 15% allocation"],
      ["Identify abnormal trading behavior", "Detected abnormal account trading frequency in past 7 days, suspected money laundering risk, recommend manual review"],
      ["Optimize asset allocation strategy", "Current portfolio volatility is high, recommend reducing equity position to 60%, increase bond allocation"],
      ["Recommend personalized learning path", "Based on learning behavior analysis, suggest prioritizing math foundation module, estimated 15 days needed"],
      ["Optimize production line scheduling", "Suggest adjusting production line A to 85% capacity, expect 12% efficiency improvement, save 80K cost"],
      ["Patient diagnosis assistance analysis", "Based on symptoms and test results, suspected cardiovascular disease, recommend further ECG examination"],
      ["AI model performance optimization", "Through hyperparameter tuning, model accuracy improved to 94.5%, inference speed increased by 30%"]
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
