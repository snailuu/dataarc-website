export default {
  hero: {
    title: 'Product Solutions',
    subtitle: 'Dual Product Matrix',
    englishLine: 'PRODUCT SOLUTIONS • DUAL PRODUCT MATRIX',
    description: 'Through deep integration of enterprise knowledge and synthetic data, providing complete GenAI-compatible technology stack for various industries.',
    descriptionEn: 'Through deep integration of enterprise knowledge and synthetic data, providing complete GenAI-compatible technology stack for various industries.'
  },
  comparison: {
    title: 'Product Comparison Matrix',
    subtitle: 'Core differences and synergistic value between LivingKB and SynData Platform',
    livingkb: {
      name: 'LivingKB',
      subtitle: 'Enterprise Knowledge Base'
    },
    syndata: {
      name: 'SynData Platform',
      subtitle: 'Synthetic Data Platform'
    },
    rows: {
      positioning: {
        label: 'Core Positioning',
        livingkb: 'Build GenAI-compatible enterprise knowledge base',
        syndata: 'One-stop synthetic data solution'
      },
      value: {
        label: 'Core Value',
        livingkb: 'Make knowledge base continuously enrich and update like a "living organism"',
        syndata: 'Expand model training and testing capabilities through synthetic data'
      },
      technology: {
        label: 'Core Technology',
        livingkb: 'Context Graph + Intelligent Search',
        syndata: 'Large Model Fine-tuning + Data Synthesis'
      },
      scenarios: {
        label: 'Application Scenarios',
        livingkb: 'Q&A, Knowledge Retrieval, Decision Support',
        syndata: 'Model Training, Data Augmentation, Privacy Protection'
      },
      coretech: {
        label: 'Core Technologies'
      },
      usecases: {
        label: 'Use Cases'
      }
    }
  },
  livingkb: {
    badge: 'Living Knowledge Base',
    title: 'LivingKB Detailed Introduction',
    subtitle: 'Enterprise Knowledge Base Intelligence Platform',
    description: 'Intelligent knowledge management system centered on context graphs',
    modules: {
      title: 'Four Core Functional Modules',
      access: {
        title: 'Knowledge Access and Integration',
        description: 'Build unified knowledge representation of enterprise data',
        features: {
          contextGraph: {
            title: 'Context Graph',
            description: 'Use graph as "outline" to represent core concepts, with rich context as supplement, achieving "LLM Ready"'
          },
          multiSource: {
            title: 'Multi-source Data Access',
            description: 'Support unified access from multiple data sources including structured databases, documents, web pages, chat records'
          },
          mining: {
            title: 'Knowledge Mining',
            description: 'Automatic text parsing, entity recognition, relation extraction, forming knowledge fragments and injecting into graphs'
          },
          syntheticData: {
            title: 'Lightweight Synthetic Data Augmentation',
            description: 'Combined with SoG technology, supplement context graphs through synthetic data in knowledge-scarce areas'
          }
        }
      },
      management: {
        title: 'Knowledge Management and Access Control',
        description: 'Enterprise-level knowledge asset security management',
        features: {
          crud: {
            title: 'Knowledge CRUD Operations',
            description: 'Complete knowledge management functions supporting batch updates, version control, history rollback and conflict resolution'
          },
          permission: {
            title: 'Fine-grained Permission Management',
            description: 'Divide knowledge access permissions by department/project/individual, supporting graph-based fine-grained authorization'
          }
        }
      },
      analysis: {
        title: 'Analysis and Decision Tools',
        description: 'Intelligent analysis capabilities based on context graphs',
        features: {
          rag: {
            title: 'RAG Retrieval-Augmented Generation',
            description: 'Accuracy improved to 92%, providing precise Q&A through context graph and embedding vector retrieval'
          },
          sql: {
            title: 'SQL-R1 Intelligent Query',
            description: 'Natural language to SQL tool customized based on synthetic data, making data queries more convenient'
          },
          tog: {
            title: 'ToG Graph Reasoning Technology',
            description: 'Reasoning accuracy increased to 90.2%, multi-step thinking and causal chain analysis based on graphs'
          },

          agent: {
            title: 'Enterprise Decision Analysis Agent',
            description: 'Integrated intelligent assistant for complex task decomposition, result interpretation, and enterprise decision interpretation'
          }
        }
      },
      ecosystem: {
        title: 'Agent Hub and Ecosystem Extension',
        description: 'Build enterprise AI application ecosystem',
        features: {
          multiAgent: {
            title: 'Multi-capability Agent Management',
            description: 'Support building and managing various professional Agents for financial analysis, legal compliance, market research, etc.'
          },
          devTools: {
            title: 'Development Tools and Ecosystem',
            description: 'Provide Agent development debugging tools, code templates and interface standards, supporting third-party plugin integration'
          }
        }
      }
    },
    architecture: {
      title: 'LivingKB Technical Architecture',
      placeholder: '[Placeholder: Full LivingKB architecture diagram needed]'
    },
    scenarios: {
      title: 'Typical Application Scenarios',
      items: {
        knowledge: {
          title: 'Enterprise Knowledge Intelligent Management',
          description: 'Integrate enterprise documents, project materials, professional knowledge to build dynamically updated knowledge networks'
        },
        collaboration: {
          title: 'Cross-department Knowledge Collaboration and Sharing',
          description: 'Break information silos, achieve effective circulation and collaborative utilization of knowledge between different departments'
        },
        decision: {
          title: 'GenAI-driven Enterprise Decision Support',
          description: 'Based on comprehensive enterprise knowledge, provide intelligent decision analysis and recommendations for management'
        }
      }
    }
  },
  syndata: {
    badge: 'SynData Platform',
    title: 'SynData Platform Detailed Introduction',
    description: 'One-stop synthetic data solution',
    modules: {
      title: 'Four Core Functional Modules',
      integration: {
        title: 'Multi-source Data Integration',
        description: 'Build unified data protocols and integration processes',
        features: {
          sources: {
            title: 'Diverse Data Sources',
            description: 'Support open-source datasets, large model distilled data, internet public data, data exchanges, etc.'
          },
          standardization: {
            title: 'Standardized Integration Process',
            description: 'Extract, clean and standardize different format data, unify into usable training datasets'
          },
          compliance: {
            title: 'Compliance and Risk Analysis',
            description: 'Assess data privacy and compliance risks, provide security basis for subsequent synthesis'
          }
        }
      },
      generation: {
        title: 'Synthetic Data Generation',
        description: 'Comprehensive generation capabilities for multimodal synthetic data',
        features: {
          sog: {
            title: 'SoG Graph Synthesis Technology',
            description: 'Intelligent synthesis based on knowledge graphs, model capability improved by 25.4%'
          },
          text: {
            title: 'Text Synthetic Data',
            description: 'Generate natural language data like news, comments, dialogues for language model training'
          },
          timeSeries: {
            title: 'Time Series Synthetic Data',
            description: 'Generate time-related data like sensor data, financial time series, user behavior logs'
          },
          tabular: {
            title: 'Tabular Synthetic Data',
            description: 'Fit column distribution and correlation relationships of real databases, supporting database compression and privacy protection'
          },

          judge: {
            title: 'Judge Auto-Evaluation',
            description: 'Intelligently evaluate synthetic data quality, automatically identify and optimize data generation effectiveness'
          },
          embodied: {
            title: 'Embodied Synthetic Data',
            description: 'Provide virtual environment and behavioral data for robotics and simulation scenarios'
          }
        }
      },
      training: {
        title: 'Synthetic Data Encryption and Training',
        description: 'Secure and trustworthy model training solutions',
        features: {
          soe: {
            title: 'SoE Encryption Training Technology',
            description: 'Zero sensitive data leakage, providing differential privacy training tools'
          },
          quality: {
            title: 'Quality Assessment and Feedback',
            description: 'Measure statistical similarity and privacy risk of synthetic data, optimize generation strategies'
          }
        }
      },
      customization: {
        title: 'Agent Customization and Ecosystem Integration',
        description: 'Rapid construction of enterprise-specific AI Agents',
        features: {
          prebuilt: {
            title: 'Capability-based Agent Presets',
            description: 'Built-in Agents trained on large amounts of synthetic data for market analysis, speech recognition, automatic Q&A, etc.'
          },
          enterprise: {
            title: 'Enterprise Customization Support',
            description: 'Customize specific Agents according to enterprise architecture and needs, online fine-tuning and one-click deployment'
          }
        }
      }
    },
    architecture: {
      title: 'SynData Platform Technical Architecture'
    },
    scenarios: {
      title: 'Typical Application Scenarios',
      items: {
        training: {
          title: 'Large Model Training Data Augmentation',
          description: 'Provide high-quality training data for AI models, solving data scarcity and high annotation cost issues'
        },
        privacy: {
          title: 'Privacy-protected Data Sharing',
          description: 'Achieve secure data access and sharing through synthetic data when personal consent cannot be obtained'
        },
        coldStart: {
          title: 'Cold Start Data Problem Solution',
          description: 'Provide high-quality synthetic data when real data does not exist, is unlabeled or difficult to obtain'
        },
        support: {
          title: 'Provide Data Support for LivingKB',
          description: 'Enhance knowledge base content through synthetic data, making enterprise knowledge bases more "Living"'
        }
      }
    }
  },
  synergy: {
    title: 'Dual Product Synergy Value',
    subtitle: 'Deep integration advantages of LivingKB + SynData Platform',
    values: {
      living: {
        title: 'Synthetic Data Makes Knowledge Base "Living"',
        mechanism: {
          title: 'Core Mechanism',
          description: 'Synthetic data generated by SynData Platform continuously injected into LivingKB, making knowledge base content dynamically updated'
        },
        value: {
          title: 'Application Value',
          items: [
            'Data supplement for knowledge-scarce domains',
            'Rapid knowledge expansion in new scenarios',
            'Maintain knowledge base timeliness and completeness'
          ]
        }
      },
      context: {
        title: 'Knowledge Base Provides Context Support for Synthetic Data',
        mechanism: {
          title: 'Core Mechanism',
          description: 'Context graphs in LivingKB provide generation conditions and knowledge constraints for SynData Platform'
        },
        value: {
          title: 'Application Value',
          items: [
            'Generate synthetic data more aligned with business context',
            'Maintain knowledge consistency in generated data',
            'Improve quality and usability of synthetic data'
          ]
        }
      },
      feedback: {
        title: 'Closed-loop Feedback: Knowledge-Data-Model-Insights',
        mechanism: {
          title: 'Core Mechanism',
          description: 'Form closed loop of knowledge accumulation → data generation → model learning → insight output → knowledge update'
        },
        value: {
          title: 'Application Value',
          items: [
            'Build self-enhancing product ecosystem',
            'Continuously optimize enterprise AI capabilities',
            'Achieve virtuous cycle of knowledge and data'
          ]
        }
      },
      complete: {
        title: 'Provide Complete Solutions for Enterprise AI Scenarios',
        mechanism: {
          title: 'Core Mechanism',
          description: 'Dual products cover full-chain needs from data generation, knowledge management to AI applications'
        },
        value: {
          title: 'Application Value',
          items: [
            'Lower technical barriers for enterprise AI applications',
            'Provide standardized AI infrastructure',
            'Support rapid deployment and iteration of enterprise AI'
          ]
        }
      }
    }
  },
  techOverview: {
    title: 'Technical Architecture Overview',
    subtitle: 'In-depth understanding of DataArc products\' core technical architecture and working principles',
    tabs: {
      livingkb: 'LivingKB Architecture',
      syndata: 'SynData Platform Architecture',
      integration: 'Collaborative Architecture'
    },
    placeholders: {
      livingkb: '[Placeholder: Detailed LivingKB architecture diagram needed - including four modules and tech stack]',
      syndata: '[Placeholder: Detailed SynData Platform architecture diagram needed - including data flow and generation process]',
      integration: '[Placeholder: Dual product collaborative architecture diagram needed - showing data flow and knowledge flow]'
    }
  },
  cases: {
    title: 'Customer Success Cases',
    subtitle: 'AI transformation practices and achievements of leading enterprises',
    items: {
      livingkbInvestment: {
        badge: 'LivingKB',
        title: 'Leading Investment Institution',
        summary: 'Financial Knowledge Base',
        sections: {
          challenge: {
            title: 'Business Challenge',
            content: 'Low efficiency in investment project information management and analysis, scattered knowledge difficult to utilize effectively'
          },
          solution: {
            title: 'Solution',
            content: 'LivingKB + Investment Analysis Agent, building dynamic investment knowledge graphs'
          },
          result: {
            title: 'Implementation Results',
            content: 'Improved project analysis efficiency, significantly enhanced knowledge retrieval speed'
          }
        }
      },
      syndataAIService: {
        badge: 'SynData Platform',
        title: 'Leading AI Service Provider',
        summary: 'Smart Customer Service Optimization',
        sections: {
          challenge: {
            title: 'Business Challenge',
            content: 'Insufficient accuracy in banking AI customer service intent recognition, scarce training data'
          },
          solution: {
            title: 'Solution',
            content: 'SynData Platform + synthetic dialogue data to optimize intent recognition models'
          },
          result: {
            title: 'Implementation Results',
            content: 'Intent recognition accuracy improved from 60% to 67%'
          }
        }
      },
      livingkbManufacturing: {
        badge: 'LivingKB',
        title: 'Leading Manufacturing Enterprise',
        summary: 'Industrial Knowledge Base',
        sections: {
          challenge: {
            title: 'Business Challenge',
            content: 'Complex industrial manufacturing process knowledge management, difficult professional knowledge transfer'
          },
          solution: {
            title: 'Solution',
            content: 'LivingKB + industrial scenario customization, building process knowledge graphs'
          },
          result: {
            title: 'Implementation Results',
            content: 'Standardized process knowledge management, significantly improved new employee training efficiency'
          }
        }
      },
      livingkbCloud: {
        badge: 'LivingKB',
        title: 'Leading Cloud Service Provider',
        summary: 'Medical Knowledge Base',
        sections: {
          challenge: {
            title: 'Business Challenge',
            content: 'Complex medical knowledge integration and AI application scenarios, difficult data standardization'
          },
          solution: {
            title: 'Solution',
            content: 'LivingKB + Medical AI, building professional medical knowledge graphs'
          },
          result: {
            title: 'Implementation Results',
            content: 'Improved accuracy of medical AI applications, enhanced knowledge update efficiency'
          }
        }
      }
    }
  }
}