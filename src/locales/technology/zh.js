export default {
  hero: {
    title: '技术优势',
    subtitle: '核心技术栈',
    englishLine: 'TECHNOLOGY ADVANTAGES • CORE TECHNOLOGY STACK',
    description: 'Living KB 动态知识库合成数据平台，七项核心技术驱动 AI 智能化升级。',
    descriptionEn: 'Living KB dynamic knowledge base synthetic data platform, with seven core technologies driving AI intelligent upgrades.'
  },
  process: {
    title: '如何让你的企业 AI 更智能',
    titleEn: 'How to Make Your Enterprise AI Smarter',
    steps: {
      userData: {
        title: '用户数据',
        description: '对企业多模态、跨部门、跨系统的原始数据（如 PDF、Word、PPT 汇报、SQL 数据库、会议录屏等）进行抽取、结构化和建模，让 AI 真正“读懂”企业知识。'
      },
      contextGraph: {
        title: '语境图谱构建',
        description: '语境图谱将分散的企业数据转化为动态知识网络，让隐藏的知识脉络和数据关联清晰可见。'
      },
      multiAgent: {
        title: '多能体平台',
        description: '智能体可自主调用数据库、浏览器、语境图谱等多类工具，并借助合成数据持续训练与进化，快速掌握行业知识、人类偏好与协作模式，以更低成本、更高效率完成复杂业务的智能化执行。'
      },
      interaction: {
        title: '交互平台',
        description: '通过自然对话、图交互等多模态交互方式与产品互动，让用户高效、安全地获取知识和完成任务，大幅提升信息利用率与业务执行力。'
      },
      graphAdaptation: {
        title: '图谱自适化',
        description: 'AI 搜索和应用过程中产生的新数据会持续补全图谱，让 Living KB 始终保持鲜活。'
      }
    }
  },
  features: {
    core: {
      title: '核心功能',
      items: [
        '以 Context Graph 为核心，实现企业知识管理',
        '使企业知识 "LLM Ready"',
        '通过合成数据能力不断扩充企业知识库',
        '让 AI 可以基于最新的企业数据进行检索、分析和决策'
      ]
    },
    product: {
      title: '产品特点',
      items: [
        '高效构建知识图谱，提升数据处理和理解能力',
        '支持三元组（实体-边-实体）与语境理解',
        '提升图谱推理与信息查询效率，节省数据管理成本',
        '采用更高效的 Graph 交互方式，提升工作效率与体验'
      ]
    }
  },
  techStats: {
    items: [
      {
        key: 'tog',
        prefix: 'ToG',
        suffix: '思维图谱'
      },
      {
        key: 'sqlR1',
        prefix: 'SQL-R1',
        suffix: '数据库查询'
      },
      {
        key: 'rag',
        prefix: 'RAG',
        suffix: '检索增强生成'
      },
      {
        key: 'sog',
        prefix: 'SoG',
        suffix: '合成数据'
      },
      {
        key: 'judge',
        prefix: 'Judge',
        suffix: '自动评估'
      },
      {
        key: 'soe',
        prefix: 'SoE',
        suffix: '加密训练'
      },
      {
        key: 'contextGraph',
        prefix: 'Context Graph',
        suffix: '语境图谱'
      }
    ]
  },
  advantages: {
    title: '核心技术 vs SOTA',
    description: 'DataArc 自主研发多项合成数据核心技术，覆盖从数据合成到模型训练的全周期，助力模型更准确、更高效、更安全。依托知识驱动的大模型推理框架，有效解决企业业务场景中推理深度不足、数据调用不准及多模态处理受限等难题。',
    items: {
      industry: {
        title: '更懂行',
        description: 'SoG 提升模型能力 25.4%'
      },
      smart: {
        title: '更聪明',
        description: 'ToG 推理更准，升至 90.2%'
      },
      reliable: {
        title: '更靠谱',
        description: 'Judge：降低 90% 的数据风险'
      },
      professional: {
        title: '更专业',
        description: 'SQL-R1：数据查询更便捷'
      },
      secure: {
        title: '更安全',
        description: 'SoE：敏感数据 0 泄露'
      },
      accurate: {
        title: '更准确',
        description: 'RAG：准确率提升至 92%'
      }
    }
  },
  performance: {
    title: '行业标杆对比',
    description: 'DataArc 与国际领先方案的对比优势',
    cards: {
      graph: {
        title: 'vs GraphRAG',
        stats: {
          dataArc: {
            label: 'DataArc 语境图谱',
            value: '218 倍提升'
          },
          benchmark: {
            label: 'GraphRAG 建图效率',
            value: '基准水平'
          }
        },
        improvement: {
          label: '效率提升',
          value: '218 倍'
        }
      },
      reasoning: {
        title: 'vs Stanford EntiGraph',
        stats: {
          dataArc: {
            label: 'DataArc SoG 技术',
            value: '25.4% 提升'
          },
          benchmark: {
            label: 'EntiGraph 基础效果',
            value: '基准表现'
          }
        },
        improvement: {
          label: '效果提升',
          value: '25.4%'
        }
      },
      encryption: {
        title: '数据扩增能力',
        stats: {
          privacy: {
            label: 'DataArc SoG',
            value: '30 倍 + 多样化'
          },
          performance: {
            label: '传统数据扩增',
            value: '质量下降'
          }
        },
        improvement: {
          label: '数据扩增',
          value: '30 倍保持多样化'
        }
      }
    }
  },
  faq: {
    title: '常见问题',
    tabs: {
      kb: '关于知识库',
      data: '关于合成数据'
    },
    kb: {
      items: [
        {
          question: '什么是 DataArc 的动态知识库？',
          answer: 'DataArc 的动态知识库（Context Graph）是一种结构化的数据管理系统，它通过抓取并整理企业信息，构建语境图谱，帮助企业以更加高效、直观的方式管理和利用知识，使企业能够快速提取和应用相关知识，优化模型训练过程。'
        },
        {
          question: '如何使用 DataArc 知识库进行数据查询？',
          answer: 'DataArc 的知识库支持多种查询方式，包括结构化查询与自然语言查询。通过图谱的语境理解功能，用户可以输入问题或查询条件，系统会自动从图谱中提取相关知识，提供更准确的信息。'
        },
        {
          question: 'DataArc 的知识库能否与现有的企业系统兼容？',
          answer: '是的，DataArc 的知识库可以与现有的企业管理系统、CRM、ERP 等无缝对接。我们提供灵活的 API 接口和技术支持，帮助企业将知识图谱与其他业务系统有效集成。'
        }
      ]
    },
    data: {
      items: [
        {
          question: '什么是合成数据？',
          answer: '合成数据是通过算法生成的人工数据，它具有与真实数据相似的统计特性，但不包含实际的敏感信息。这种数据可以用于机器学习模型训练，同时保护隐私并降低数据获取成本。'
        },
        {
          question: '合成数据的质量如何保证？',
          answer: 'DataArc 采用先进的生成算法和质量评估体系，确保合成数据在保持统计特性的同时具备足够的多样性和真实性，并通过持续监控与优化来保持数据质量。'
        }
      ]
    }
  }
}
