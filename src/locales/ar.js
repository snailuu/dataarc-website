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
  },
  graph: {
    hint: 'انقر على العقدة لبدء التركيب بالذكاء الاصطناعي',
    controls: 'انقر مرتين لإعادة التخطيط | اسحب العقد للتفاعل',
    aiDialogue: {
      thinking: 'جارٍ التفكير...',
      analyzing: 'جارٍ تحليل علاقات البيانات...',
      generating: 'جارٍ توليد البيانات الاصطناعية...',
      completed: 'اكتمل التركيب بالذكاء الاصطناعي!',
    },
    sampleConversations: [
      {q: "تحليل مستوى مخاطر ائتمان العميل", a: "بناءً على بيانات المعاملات التاريخية، مستوى مخاطر العميل هو B+، نوصي بحد ائتمان 500 ألف"},
      {q: "التنبؤ باتجاهات الاستثمار للربع القادم", a: "تشير المؤشرات الاقتصادية الكلية إلى احتمال ارتفاع قطاع التكنولوجيا بنسبة 72%، نوصي بتخصيص 15%"},
      {q: "تحديد سلوك التداول غير الطبيعي", a: "تم اكتشاف تكرار تداول غير طبيعي للحساب في آخر 7 أيام، مخاطر مشتبهة لغسل الأموال، نوصي بمراجعة يدوية"},
      {q: "تحسين استراتيجية توزيع الأصول", a: "تقلبات المحفظة الحالية عالية، نوصي بتقليل مركز الأسهم إلى 60%، زيادة تخصيص السندات"},
      {q: "توصية مسار تعلم مخصص", a: "بناءً على تحليل سلوك التعلم، نوصي بإعطاء الأولوية لوحدة أساسيات الرياضيات، متوقع 15 يوماً"},
      {q: "تحسين جدولة خط الإنتاج", a: "نوصي بضبط خط الإنتاج A على 85% من الطاقة، متوقع تحسن الكفاءة 12%، توفير تكلفة 80 ألف"},
      {q: "تحليل مساعدة التشخيص للمريض", a: "بناءً على الأعراض ونتائج الفحص، مشتبه بمرض القلب والأوعية الدموية، نوصي بفحص تخطيط القلب الإضافي"},
      {q: "تحسين أداء نموذج الذكاء الاصطناعي", a: "من خلال ضبط المعاملات الفائقة، تحسنت دقة النموذج إلى 94.5%، زادت سرعة الاستدلال بنسبة 30%"}
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
