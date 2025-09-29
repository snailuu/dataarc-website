export default {
  hero: {
    title: '产品方案',
    subtitle: '双产品矩阵',
    englishLine: 'PRODUCT SOLUTIONS • DUAL PRODUCT MATRIX',
    description: '通过企业知识+合成数据的深度融合，为各行业提供适配GenAI的完整技术栈。',
    descriptionEn: 'Through deep integration of enterprise knowledge and synthetic data, providing complete GenAI-compatible technology stack for various industries.'
  },
  comparison: {
    title: '产品对比矩阵',
    subtitle: 'LivingKB vs SynData Platform 核心差异与协同价值',
    livingkb: {
      name: 'LivingKB',
      subtitle: '企业知识库平台'
    },
    syndata: {
      name: 'SynData Platform',
      subtitle: '合成数据生成平台'
    },
    rows: {
      positioning: {
        label: '核心定位',
        livingkb: '打造适配GenAI的企业知识库',
        syndata: '一站式合成数据解决方案'
      },
      value: {
        label: '主要价值',
        livingkb: '让知识库像「活体」一样不断丰富和更新',
        syndata: '通过合成数据扩展模型训练和测试能力'
      },
      technology: {
        label: '核心技术',
        livingkb: '语境图谱 + 智能搜索',
        syndata: '大模型微调 + 数据合成'
      },
      scenarios: {
        label: '适用场景',
        livingkb: 'Q&A、知识检索、决策支持',
        syndata: '模型训练、数据扩充、隐私保护'
      },
      coretech: {
        label: '核心技术'
      },
      usecases: {
        label: '适用场景'
      }
    }
  },
  livingkb: {
    badge: 'Living Knowledge Base',
    title: 'LivingKB 详细介绍',
    subtitle: '企业知识库智能化平台',
    description: '以语境图谱为核心的智能知识管理系统',
    modules: {
      title: '四大核心功能模块',
      access: {
        title: '知识接入与融合',
        description: '构建企业数据的统一知识表示',
        features: {
          contextGraph: {
            title: '语境图谱',
            description: '以图谱为"大纲"表示核心概念，以丰富上下文作为补充，实现"LLM Ready"'
          },
          multiSource: {
            title: '多源数据接入',
            description: '支持结构化数据库、文档、网页、聊天记录等多种数据源统一接入'
          },
          mining: {
            title: '知识挖掘',
            description: '自动文本解析、实体识别、关系抽取，形成知识片段并注入图谱'
          },
          syntheticData: {
            title: '轻量化合成数据扩充',
            description: '结合SoG技术，在知识稀缺领域通过合成数据补充语境图谱'
          }
        }
      },
      management: {
        title: '知识管理与权限控制',
        description: '企业级知识资产安全管理',
        features: {
          crud: {
            title: '知识增删改查',
            description: '完整知识管理功能，支持批量更新、版本管理、历史回溯和冲突解决'
          },
          permission: {
            title: '精细化权限管理',
            description: '按部门/项目/个人划分知识访问权限，支持基于图谱的精细化授权'
          }
        }
      },
      analysis: {
        title: '分析与决策工具',
        description: '基于语境图谱的智能分析能力',
        features: {
          rag: {
            title: 'RAG 检索增强生成',
            description: '准确率提升至92%，利用语境图谱和嵌入向量检索提供精准问答'
          },
          sql: {
            title: 'SQL-R1 智能查询',
            description: '基于合成数据定制的自然语言转SQL工具，数据查询更便捷'
          },
          tog: {
            title: 'ToG 图推理技术',
            description: '推理准确率升至90.2%，基于图的多步思考和因果链分析'
          },

          agent: {
            title: '企业决策分析 Agent',
            description: '复杂任务分解、结果解释、企业决策解读的一体化智能助手'
          }
        }
      },
      ecosystem: {
        title: 'Agent Hub 与生态扩展',
        description: '构建企业AI应用生态',
        features: {
          multiAgent: {
            title: '多能力 Agent 管理',
            description: '支持财务分析、法律合规、市场调研等多种专业Agent构建和管理'
          },
          devTools: {
            title: '开发工具与生态',
            description: '提供Agent开发调试工具、代码模板和接口标准，支持第三方插件接入'
          }
        }
      }
    },
    architecture: {
      title: 'LivingKB 技术架构',
      placeholder: '【需要图片：LivingKB完整技术架构图】'
    },
    scenarios: {
      title: '典型应用场景',
      items: {
        knowledge: {
          title: '企业知识智能化管理',
          description: '整合企业文档、项目资料、专业知识，构建动态更新的知识网络'
        },
        collaboration: {
          title: '跨部门知识协同与共享',
          description: '打破信息孤岛，实现不同部门间知识的有效流通和协同利用'
        },
        decision: {
          title: 'GenAI驱动的企业决策支持',
          description: '基于全量企业知识，为管理层提供智能化的决策分析和建议'
        }
      }
    }
  },
  syndata: {
    badge: 'SynData Platform',
    title: 'SynData Platform 详细介绍',
    description: '一站式合成数据解决方案',
    modules: {
      title: '四大核心功能模块',
      integration: {
        title: '多源数据整合',
        description: '构建统一的数据协议和整合流程',
        features: {
          sources: {
            title: '多样化数据来源',
            description: '支持开源数据集、大模型蒸馏数据、互联网公开数据、数据交易所等'
          },
          standardization: {
            title: '标准化整合流程',
            description: '对不同格式数据进行抽取、清洗和标准化，统一为可用训练数据集'
          },
          compliance: {
            title: '合规与风险分析',
            description: '评估数据隐私和合规风险，为后续合成提供安全依据'
          }
        }
      },
      generation: {
        title: '合成数据生成',
        description: '多模态合成数据的全面生成能力',
        features: {
          sog: {
            title: 'SoG 图谱合成技术',
            description: '基于知识图谱的智能合成，模型能力提升25.4%'
          },
          text: {
            title: '文本合成数据',
            description: '生成新闻、评论、对话等自然语言数据，用于语言模型训练'
          },
          timeSeries: {
            title: '时间序列合成数据',
            description: '生成传感器数据、金融时序、用户行为日志等时间相关数据'
          },
          tabular: {
            title: '表格合成数据',
            description: '拟合真实数据库的列分布与关联关系，支持数据库压缩和隐私保护'
          }
        }
      },
      training: {
        title: '合成数据加密与训练',
        description: '安全可信的模型训练解决方案',
        features: {
          soe: {
            title: 'SoE 加密训练技术',
            description: '敏感数据0泄露，提供差分隐私化训练工具'
          },
          quality: {
            title: '质量评估与反馈',
            description: '衡量合成数据统计相似度与隐私风险，优化生成策略'
          },
          judge: {
            title: 'Judge 自动评估',
            description: '智能评估合成数据质量，自动识别和优化数据生成效果'
          }
        }
      },
      customization: {
        title: 'Agent 定制与生态结合',
        description: '企业专属AI Agent快速构建',
        features: {
          prebuilt: {
            title: '能力型 Agent 预设',
            description: '基于大量合成数据训练的市场分析、语音识别、自动问答等内置Agent'
          },
          enterprise: {
            title: '企业定制支持',
            description: '根据企业架构和需求定制特定Agent，在线微调并一键部署'
          }
        }
      }
    },
    architecture: {
      title: 'SynData Platform 技术架构',
      placeholder: '【需要图片：SynData Platform完整技术架构图】'
    },
    scenarios: {
      title: '典型应用场景',
      items: {
        training: {
          title: '大模型训练数据扩充',
          description: '为AI模型提供高质量训练数据，解决数据稀缺和标注成本高的问题'
        },
        privacy: {
          title: '隐私保护数据共享',
          description: '在无法获得个人同意时，通过合成数据实现安全的数据访问和共享'
        },
        coldStart: {
          title: '冷启动数据问题解决',
          description: '在真实数据不存在、未标注或难以获取时，提供高质量合成数据'
        },
        support: {
          title: '为LivingKB提供数据支撑',
          description: '通过合成数据增强知识库内容，让企业知识库变得更加"Living"'
        }
      }
    }
  },
  techOverview: {
    title: '技术架构概览',
    subtitle: '深入了解DataArc产品的核心技术架构与工作原理',
    tabs: {
      livingkb: 'LivingKB 架构',
      syndata: 'SynData Platform 架构',
      integration: '协同架构'
    },
    placeholders: {
      livingkb: '【需要图片：LivingKB详细架构图-包含四大模块及技术栈】',
      syndata: '【需要图片：SynData Platform详细架构图-包含数据流和生成流程】',
      integration: '【需要图片：双产品协同架构图-展示数据流和知识流】'
    }
  },
  synergy: {
    title: '双产品协同价值',
    subtitle: 'LivingKB + SynData Platform 的深度融合优势',
    values: {
      living: {
        title: '合成数据让知识库变得"Living"',
        mechanism: {
          title: '核心机制',
          description: 'SynData Platform生成的合成数据持续注入LivingKB，让知识库内容动态更新'
        },
        value: {
          title: '应用价值',
          items: [
            '知识稀缺领域的数据补充',
            '新场景下的知识快速扩展',
            '保持知识库的时效性和完整性'
          ]
        }
      },
      context: {
        title: '知识库为合成数据提供语境支撑',
        mechanism: {
          title: '核心机制',
          description: 'LivingKB中的语境图谱为SynData Platform提供生成条件和知识约束'
        },
        value: {
          title: '应用价值',
          items: [
            '生成更符合业务语境的合成数据',
            '保持生成数据的知识一致性',
            '提升合成数据的质量和可用性'
          ]
        }
      },
      feedback: {
        title: '闭环反馈：知识-数据-模型-洞见',
        mechanism: {
          title: '核心机制',
          description: '形成知识积累→数据生成→模型学习→洞见产出→知识更新的闭环'
        },
        value: {
          title: '应用价值',
          items: [
            '构建自我增强的产品体系',
            '持续优化企业AI能力',
            '实现知识和数据的良性循环'
          ]
        }
      }
    }
  },
  cases: {
    title: '客户成功案例',
    subtitle: '头部企业的AI转型实践与成果',
    items: {
      livingkbInvestment: {
        badge: 'LivingKB',
        title: '头部投资机构',
        summary: '金融知识库',
        sections: {
          challenge: {
            title: '业务挑战',
            content: '投资项目信息管理与分析效率低下，知识分散难以有效利用'
          },
          solution: {
            title: '解决方案',
            content: 'LivingKB + 投资分析Agent，构建动态投资知识图谱'
          },
          result: {
            title: '实施效果',
            content: '项目分析效率提升，知识检索速度大幅改善'
          }
        }
      },
      syndataAIService: {
        badge: 'SynData Platform',
        title: '头部AI服务商',
        summary: '智能客服优化',
        sections: {
          challenge: {
            title: '业务挑战',
            content: '银行AI客服意图识别准确率不足，训练数据稀缺'
          },
          solution: {
            title: '解决方案',
            content: 'SynData Platform + 合成对话数据，优化意图识别模型'
          },
          result: {
            title: '实施效果',
            content: '意图识别准确率从60%提升到67%'
          }
        }
      },
      livingkbManufacturing: {
        badge: 'LivingKB',
        title: '头部制造企业',
        summary: '工业知识库',
        sections: {
          challenge: {
            title: '业务挑战',
            content: '工业制造工艺知识管理复杂，专业知识传承困难'
          },
          solution: {
            title: '解决方案',
            content: 'LivingKB + 工业场景定制，构建工艺知识图谱'
          },
          result: {
            title: '实施效果',
            content: '工艺知识标准化管理，新员工培训效率显著提升'
          }
        }
      },
      livingkbCloud: {
        badge: 'LivingKB',
        title: '头部云服务商',
        summary: '医疗知识库',
        sections: {
          challenge: {
            title: '业务挑战',
            content: '医疗知识整合与AI应用场景复杂，数据标准化困难'
          },
          solution: {
            title: '解决方案',
            content: 'LivingKB + 医疗AI，构建医疗专业知识图谱'
          },
          result: {
            title: '实施效果',
            content: '医疗AI应用准确性提升，知识更新效率改善'
          }
        }
      }
    }
  }
}