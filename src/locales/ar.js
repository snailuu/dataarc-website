import home from './home/ar'

const common = {
  brand: 'DataArc',
  language: {
    label: 'اللغة',
    zh: 'الصينية',
    en: 'الإنجليزية',
    ar: 'العربية',
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
  footer,
}
