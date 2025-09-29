import home from './home/ar'
import company from './company/ar'
import products from './products/ar'
import technology from './technology/ar'
import cases from './cases/ar'

const common = {
  brand: 'DataArc',
  language: {
    label: 'اللغة',
    zh: 'الصينية',
    en: 'الإنجليزية',
    ar: 'العربية',
  },
  buttons: {
    login: 'تسجيل الدخول',
    contact: 'تواصل معنا',
    getStarted: 'ابدأ الآن',
    learnMore: 'تعرف على المزيد',
    tryNow: 'جرب الآن',
    backToHome: 'العودة إلى الرئيسية',
    continueReading: 'متابعة القراءة',
  },
  graph: {
    hint: 'انقر على العقدة لبدء التركيب بالذكاء الاصطناعي',
    controls: 'اسحب العقد للتفاعل',
    interaction: 'اسحب أو انقر على العقد للتفاعل...',
    aiDialogue: {
      thinking: 'جارٍ التفكير...',
      analyzing: 'جارٍ تحليل علاقات البيانات...',
      generating: 'جارٍ توليد البيانات الاصطناعية...',
      completed: 'اكتمل التركيب بالذكاء الاصطناعي!',
    },
    nodes: {
      // العقد الأساسية
      finance: 'النواة المالية',
      education: 'النواة التعليمية',
      industry: 'النواة الصناعية',
      healthcare: 'النواة الصحية',
      technology: 'النواة التقنية',
      
      // المتعلقة بالمالية
      risk_control: 'بيانات المخاطر',
      transaction: 'سجلات المعاملات',
      customer_profile: 'ملف العميل',
      market_data: 'بيانات السوق',
      regulatory_compliance: 'الامتثال التنظيمي',
      credit_score: 'التقييم الائتماني',
      fraud_detect: 'كشف الاحتيال',
      loan_approval: 'موافقة القروض',
      stress_testing: 'اختبار الضغط',
      payment_flow: 'تدفق المدفوعات',
      trade_volume: 'حجم التداول',
      settlement: 'بيانات التسوية',
      algorithmic_trading: 'التداول الخوارزمي',
      demographic_data: 'البيانات الديموغرافية',
      spending_pattern: 'نمط الإنفاق',
      investment_preference: 'تفضيل الاستثمار',
      income_bracket: 'شريحة الدخل',
      stock_price: 'سعر الأسهم',
      bond_yield: 'عائد السندات',
      commodity_futures: 'العقود الآجلة للسلع',
      currency_exchange: 'صرف العملات',
      basel_requirements: 'متطلبات بازل',
      aml_compliance: 'امتثال مكافحة غسل الأموال',
      kyc_verification: 'التحقق من هوية العميل',
      regulatory_reporting: 'التقارير التنظيمية',
      
      // المتعلقة بالتعليم
      learning_behavior: 'سلوك التعلم',
      course_data: 'بيانات المقررات',
      grade_analysis: 'تحليل الدرجات',
      teacher_eval: 'تقييم المعلمين',
      educational_resources: 'المصادر التعليمية',
      study_time: 'وقت الدراسة',
      interaction: 'تكرار التفاعل',
      progress: 'تقدم التعلم',
      engagement_rate: 'معدل المشاركة',
      course_content: 'محتوى المقرر',
      learning_path: 'مسار التعلم',
      curriculum_design: 'تصميم المنهج',
      assessment_method: 'طريقة التقييم',
      grade_distribution: 'توزيع الدرجات',
      skill_assessment: 'تقييم المهارات',
      learning_outcomes: 'نتائج التعلم',
      academic_progress: 'التقدم الأكاديمي',
      teaching_quality: 'جودة التدريس',
      student_feedback: 'تقييم الطلاب',
      digital_textbooks: 'الكتب الرقمية',
      online_libraries: 'المكتبات الإلكترونية',
      
      // المتعلقة بالصناعة
      production_data: 'بيانات الإنتاج',
      equipment_status: 'حالة المعدات',
      quality_control: 'مراقبة الجودة',
      supply_chain: 'سلسلة التوريد',
      efficiency_metrics: 'مؤشرات الكفاءة',
      output_rate: 'معدل الإنتاج',
      efficiency: 'مؤشر الكفاءة',
      downtime: 'وقت التوقف',
      capacity_utilization: 'استغلال الطاقة',
      maintenance_schedule: 'جدولة الصيانة',
      sensor_data: 'بيانات المستشعرات',
      predictive_maintenance: 'الصيانة التنبؤية',
      equipment_efficiency: 'كفاءة المعدات',
      defect_rate: 'معدل العيوب',
      inspection_results: 'نتائج الفحص',
      compliance_standards: 'معايير الامتثال',
      process_optimization: 'تحسين العمليات',
      vendor_management: 'إدارة الموردين',
      logistics_optimization: 'تحسين اللوجستيات',
      inventory_level: 'مستوى المخزون',
      demand_forecasting: 'التنبؤ بالطلب',
      
      // المتعلقة بالرعاية الصحية
      patient_records: 'ملفات المرضى',
      clinical_trials: 'التجارب السريرية',
      medical_imaging: 'التصوير الطبي',
      drug_discovery: 'اكتشاف الأدوية',
      treatment_outcomes: 'نتائج العلاج',
      electronic_health_records: 'السجلات الصحية الإلكترونية',
      diagnosis_codes: 'رموز التشخيص',
      treatment_protocols: 'بروتوكولات العلاج',
      patient_monitoring: 'مراقبة المرضى',
      biomarker_analysis: 'تحليل العلامات الحيوية',
      genomic_data: 'البيانات الجينومية',
      clinical_trials_data: 'بيانات التجارب السريرية',
      adverse_events: 'الأحداث الضارة',
      ct_scan: 'الأشعة المقطعية',
      mri_analysis: 'تحليل الرنين المغناطيسي',
      x_ray_detection: 'كشف الأشعة السينية',
      radiology_ai: 'الذكاء الاصطناعي الإشعاعي',
      molecular_modeling: 'النمذجة الجزيئية',
      pharmacokinetics: 'الحرائك الدوائية',
      recovery_rates: 'معدلات الشفاء',
      patient_satisfaction: 'رضا المرضى',
      
      // المتعلقة بالتكنولوجيا
      ai_algorithms: 'خوارزميات الذكاء الاصطناعي',
      data_infrastructure: 'البنية التحتية للبيانات',
      software_development: 'تطوير البرمجيات',
      cybersecurity: 'الأمن السيبراني',
      cloud_computing: 'الحوسبة السحابية',
      machine_learning: 'التعلم الآلي',
      deep_learning: 'التعلم العميق',
      natural_language_processing: 'معالجة اللغة الطبيعية',
      computer_vision: 'الرؤية الحاسوبية',
      big_data_analytics: 'تحليل البيانات الضخمة',
      distributed_systems: 'الأنظمة الموزعة',
      agile_methodology: 'المنهجية المرنة',
      devops_practices: 'ممارسات DevOps',
      threat_detection: 'كشف التهديدات',
      encryption_protocols: 'بروتوكولات التشفير',
      serverless_computing: 'الحوسبة بلا خادم',
      container_orchestration: 'تنسيق الحاويات',
    },
    sampleConversations: [
      ["تحليل مستوى مخاطر ائتمان العميل", "بناءً على بيانات المعاملات التاريخية، مستوى مخاطر العميل هو B+، نوصي بحد ائتمان 500 ألف"],
      ["التنبؤ باتجاهات الاستثمار للربع القادم", "تشير المؤشرات الاقتصادية الكلية إلى احتمال ارتفاع قطاع التكنولوجيا بنسبة 72%، نوصي بتخصيص 15%"],
      ["تحديد سلوك التداول غير الطبيعي", "تم اكتشاف تكرار تداول غير طبيعي للحساب في آخر 7 أيام، مخاطر مشتبهة لغسل الأموال، نوصي بمراجعة يدوية"],
      ["تحسين استراتيجية توزيع الأصول", "تقلبات المحفظة الحالية عالية، نوصي بتقليل مركز الأسهم إلى 60%، زيادة تخصيص السندات"],
      ["توصية مسار تعلم مخصص", "بناءً على تحليل سلوك التعلم، نوصي بإعطاء الأولوية لوحدة أساسيات الرياضيات، متوقع 15 يوماً"],
      ["تحسين جدولة خط الإنتاج", "نوصي بضبط خط الإنتاج A على 85% من الطاقة، متوقع تحسن الكفاءة 12%، توفير تكلفة 80 ألف"],
      ["تحليل مساعدة التشخيص للمريض", "بناءً على الأعراض ونتائج الفحص، مشتبه بمرض القلب والأوعية الدموية، نوصي بفحص تخطيط القلب الإضافي"],
      ["تحسين أداء نموذج الذكاء الاصطناعي", "من خلال ضبط المعاملات الفائقة، تحسنت دقة النموذج إلى 94.5%، زادت سرعة الاستدلال بنسبة 30%"]
    ]
  },
}

const nav = {
  home: {
    label: 'الرئيسية',
  },
  products: {
    label: 'المنتجات',
  },
  technology: {
    label: 'التقنية',
  },
  cases: {
    label: 'الحالات',
  },
  company: {
    label: 'عن الشركة',
  },
}

const header = {
  dropdowns: {
    home: {
      market: {
        title: 'فرصة السوق',
        description: 'رؤى حول أزمة ندرة البيانات ونمو القطاع',
      },
      products: {
        title: 'حلول المنتجات',
        description: 'نظرة عامة على LivingKB وSynData Platform',
      },
      technology: {
        title: 'التقنيات',
        description: 'أذكى وأكثر موثوقية واحترافية',
      },
      team: {
        title: 'قوة الفريق',
        description: 'فريق خبراء وخبرة بحثية عميقة',
      },
    },
    products: {
      comparison: {
        title: 'مصفوفة المقارنة',
        description: 'مقارنة التمركز والقدرات الأساسية',
      },
      livingkb: {
        title: 'LivingKB',
        description: 'منصة ذكاء للمعرفة المؤسسية',
      },
      syndata: {
        title: 'SynData Platform',
        description: 'منصة توليد بيانات اصطناعية',
      },
      synergy: {
        title: 'القيمة التكاملية',
        description: 'قيمة النظام البيئي المغلق للمنتجين',
      },
      cases: {
        title: 'قصص النجاح',
        description: 'نتائج العملاء وردود الفعل',
      },
    },
    technology: {
      process: {
        title: 'العملية التقنية',
        description: 'تدفق متكامل من البيانات إلى القرار',
      },
      advantages: {
        title: 'المزايا الأساسية',
        description: 'ستة فروقات تقنية رئيسية',
      },
      performance: {
        title: 'الأداء',
        description: 'مكاسب كفاءة ودقة بناء الرسوم',
      },
      faq: {
        title: 'الأسئلة الشائعة',
        description: 'إجابات عن الأسئلة التقنية',
      },
    },
    cases: {
      coverage: {
        title: 'تغطية القطاعات',
        description: 'القطاع المالي والتصنيع والحوسبة السحابية وغيرها',
      },
      detail: {
        title: 'حالات تفصيلية',
        description: 'التحديات والحلول والنتائج',
      },
      benchmark: {
        title: 'المقارنة المعيارية',
        description: 'مقارنة مع رواد الصناعة',
      },
    },
    company: {
      about: {
        title: 'عن DataArc',
        description: 'الرؤية وفلسفة التطوير',
      },
      team: {
        title: 'الفريق الأساسي',
        description: 'تعريف بالفريق ونقاط قوته التقنية',
      },
      funding: {
        title: 'التمويل',
        description: 'جولات الاستثمار والشركاء',
      },
      history: {
        title: 'التطور',
        description: 'محطات النمو والإنجازات',
      },
    },
  },
}

const footer = {
  tagline: 'نقود ابتكار الذكاء الاصطناعي عبر بيانات اصطناعية لتوفير حلول ذكية للمؤسسات.',
  socials: {
    wechat: 'ويتشات',
    weibo: 'ويبو',
    email: 'البريد الإلكتروني',
  },
  nav: {
    products: {
      title: 'حلول المنتجات',
      links: {
        livingkb: 'Living KB',
        syndata: 'منصة SynData',
        apiDocs: 'وثائق API',
        devTools: 'أدوات المطورين',
      },
    },
    support: {
      title: 'الدعم التقني',
      links: {
        technology: 'المزايا التقنية',
        techDocs: 'الوثائق التقنية',
        faq: 'الأسئلة الشائعة',
        techBlog: 'مدونة التقنية',
      },
    },
    about: {
      title: 'عنّا',
      links: {
        company: 'نبذة عن الشركة',
        cases: 'قصص النجاح',
        news: 'الأخبار والإعلام',
        careers: 'الوظائف',
      },
    },
    contact: {
      title: 'التواصل',
      address: 'منتزه التكنولوجيا في نانشان، شنتشن',
      email: 'contact@dataarc.tech',
      phone: '+86 400-123-4567',
    },
  },
  bottom: {
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الخدمة',
    cookies: 'سياسة ملفات تعريف الارتباط',
    icp: '粤ICP备2024000000号',
    copyright: '© 2024 شركة DataArc Technology. جميع الحقوق محفوظة.',
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
