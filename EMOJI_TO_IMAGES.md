# 📷 Emoji 替换为图片占位符清单

## 🎯 已完成替换的Emoji列表

### 🏠 首页 (Home.vue)
| 原Emoji | 替换为占位符 | 建议图片类型 | 用途说明 |
|---------|-------------|------------|----------|
| 📊 | `Living KB 数据图表可视化图` | 数据可视化图表，蓝色科技风格 | Living KB产品展示 |
| 🤖 | `AI机器人智能体图标` | 现代化AI机器人，蓝色主题 | SynData Platform产品展示 |
| ✓ (8个) | `勾选图标` | 蓝色勾选标记，简约风格 | 功能特性列表标记 |

### 🏢 产品页面 (Products.vue)
| 原Emoji | 替换为占位符 | 建议图片类型 | 用途说明 |
|---------|-------------|------------|----------|
| 📊 | `Living KB 数据图表可视化图` | 数据可视化图表，蓝色科技风格 | Living KB产品图标 |
| 🤖 | `AI机器人智能体图标` | 现代化AI机器人，蓝色主题 | SynData Platform产品图标 |
| 🔗 | `链接图标` | 连接链条图标，蓝色 | 数据整合功能 |
| 🧠 | `大脑图标` | 大脑/智能图标，蓝色科技风 | 智能理解功能 |
| 🛠️ | `工具图标` | 工具箱或扳手图标 | 工具调用功能 |
| ⚡ | `闪电图标` | 闪电符号，表示速度 | 快速部署功能 |
| 🔄 | `循环图标` | 循环箭头图标 | 持续更新功能 |
| 🎯 | `目标图标` | 靶心或目标图标 | 精准定位功能 |
| 🔐 | `锁定图标` | 安全锁图标 | 数据加密功能 |
| ⚙️ | `齿轮图标` | 设置齿轮图标 | 核心模块功能 |
| 🏦 | `银行建筑图标` | 银行或金融机构建筑 | 金融风控场景 |
| 📈 | `上升趋势图表` | 上升的折线图 | 智能投研场景 |
| 🏭 | `工厂建筑图标` | 工业厂房建筑 | 制造业场景 |
| 📊 | `数据分析图表` | 柱状图或饼图 | 经营分析场景 |

### 🔧 技术页面 (Technology.vue)
| 原Emoji | 替换为占位符 | 建议图片类型 | 用途说明 |
|---------|-------------|------------|----------|
| 🎯 | `目标瞄准图标` | 靶心或瞄准器图标 | 核心功能说明 |
| 💡 | `创意灯泡图标` | 亮起的灯泡图标 | 产品特点说明 |

### 🧩 组件 (ProductCard.vue)
| 原Emoji | 替换为占位符 | 建议图片类型 | 用途说明 |
|---------|-------------|------------|----------|
| ✓ | `勾选` | 蓝色勾选标记 | 功能列表标记 |

## 🎨 设计规范

### 📐 占位符样式规范
```css
/* 大型占位符 (产品图标) */
.visual-placeholder {
  background: #e2e8f0;
  border: 2px dashed #cbd5e1;
  border-radius: 8px;
  padding: 30-40px 15-20px;
  color: #64748b;
  font-size: 0.9rem;
  text-align: center;
}

/* 中型占位符 (功能图标) */
.feature-placeholder {
  background: #e2e8f0;
  border: 1px dashed #cbd5e1;
  border-radius: 4px;
  padding: 4px 8px;
  color: #64748b;
  font-size: 0.7rem;
  width: 60px;
}

/* 小型占位符 (勾选图标) */
.check-placeholder {
  background: #e2e8f0;
  border: 1px dashed #cbd5e1;
  border-radius: 4px;
  padding: 4px 8px;
  color: #64748b;
  font-size: 0.7rem;
  width: 60px;
}
```

### 🎨 建议图片风格
- **主色调**: 蓝色系 (#2563eb, #667eea)
- **辅助色**: 灰色系 (#64748b, #e2e8f0)
- **风格**: 现代化、扁平化、科技感
- **尺寸**: 矢量图标，支持多种分辨率
- **格式**: SVG 或高质量 PNG

## 📁 建议文件命名

### 🏠 首页图标
- `living-kb-chart.svg` - Living KB 数据图表
- `ai-robot-icon.svg` - AI机器人图标
- `check-icon.svg` - 勾选图标

### 🔧 功能图标
- `link-icon.svg` - 链接图标
- `brain-icon.svg` - 大脑图标
- `tool-icon.svg` - 工具图标
- `lightning-icon.svg` - 闪电图标
- `refresh-icon.svg` - 循环图标
- `target-icon.svg` - 目标图标
- `lock-icon.svg` - 锁定图标
- `gear-icon.svg` - 齿轮图标
- `bulb-icon.svg` - 灯泡图标

### 🏢 场景图标
- `bank-building.svg` - 银行建筑
- `trend-chart.svg` - 上升趋势图
- `factory-building.svg` - 工厂建筑
- `analytics-chart.svg` - 数据分析图

## 🔄 替换步骤

1. **准备图片**: 根据上述清单准备相应的图标图片
2. **上传图片**: 将图片放到 `public/images/icons/` 目录
3. **更新代码**: 将占位符 `div` 替换为 `img` 标签
4. **测试效果**: 确保所有图标正确显示

## 📝 更新后的代码示例

```vue
<!-- 替换前 -->
<div class="visual-placeholder">Living KB 数据图表可视化图</div>

<!-- 替换后 -->
<img src="/images/icons/living-kb-chart.svg" alt="Living KB 数据图表" class="visual-icon">
```

---

**总计**: 27个emoji已替换为图片占位符  
**状态**: ✅ 完成占位符替换，等待图片资源  
**下一步**: 准备图片资源并更新为实际图片 