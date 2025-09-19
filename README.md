# DataArc 官方网站

## 🎯 项目概述

DataArc 官方网站采用 Vue 3 + Vite 现代化技术栈构建，完全复刻原网站设计，提供出色的用户体验和开发效率。

## 🚀 技术栈

- **Vue 3.3.0** - 渐进式JavaScript框架
- **Vite 4.5.0** - 快速的前端构建工具
- **Vue Router 4.2.0** - 官方路由管理器
- **Pinia 2.1.0** - 状态管理库

## 📱 页面结构

```
├── 首页 (/)              - 产品介绍、技术优势、新闻展示
├── 产品方案 (/products)   - Living KB、SynData Platform
├── 技术优势 (/technology) - 产品流程、FAQ、核心功能
├── 案例展示 (/cases)     - 客户案例展示
└── 关于我们 (/company)   - 公司介绍、团队信息、联系方式
```

## 🎨 设计特色

- ✅ **完全复刻**原网站设计风格
- ✅ **响应式布局**，完美适配移动端
- ✅ **现代化交互**，提升用户体验
- ✅ **组件化开发**，便于维护扩展

## 📷 图标系统

网站中的所有 emoji 表情符号已替换为图片占位符，便于使用自定义图标：

### 🔄 已替换内容
- **27个 emoji** → **图片占位符**
- **统一样式** - 灰色虚线边框占位符
- **详细说明** - 每个占位符都有具体的图片要求

详细清单请查看：[EMOJI_TO_IMAGES.md](./EMOJI_TO_IMAGES.md)

## 🛠️ 开发指南

### 环境要求
- Node.js 16.20.2+
- npm 8.0+

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```
访问：http://localhost:8000

### 生产构建
```bash
npm run build
```

### 预览构建
```bash
npm run preview
```

## 🌐 访问地址

- **开发环境**: http://localhost:8000
- **外网访问**: http://115.190.148.168:8000

## 📁 目录结构

```
src/
├── components/          # 可复用组件
│   ├── AppHeader.vue   # 网站头部
│   ├── AppFooter.vue   # 网站底部
│   ├── ProductCard.vue # 产品卡片
│   ├── TechCard.vue    # 技术卡片
│   └── NewsCard.vue    # 新闻卡片
├── views/              # 页面组件
│   ├── Home.vue        # 首页
│   ├── Products.vue    # 产品页
│   ├── Technology.vue  # 技术页
│   ├── Cases.vue       # 案例页
│   └── Company.vue     # 公司页
├── router/             # 路由配置
├── styles/             # 全局样式
└── main.js            # 应用入口
```

## 🎨 样式系统

使用 CSS 变量统一管理设计系统：

```css
:root {
  --primary-color: #2563eb;
  --gradient-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --bg-light: #f8fafc;
}
```

## 📊 性能特点

- ⚡ **快速开发** - Vite 提供极速热重载
- 📦 **组件复用** - 高度模块化的组件架构
- 🎯 **按需加载** - 路由懒加载优化性能
- 📱 **响应式** - 完美适配所有设备尺寸

## 🔧 自定义配置

### Vite 配置 (vite.config.js)
```javascript
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 8000,
    hmr: true
  }
})
```

### 路由配置
- 支持动态标题
- 滚动位置恢复
- 懒加载组件

## 🎨 图标系统

### 📋 图片需求规划
参考 [ALL_IMAGE_REQUIREMENTS.md](./ALL_IMAGE_REQUIREMENTS.md) 了解完整的图片需求规划

### 🏷️ 图片占位符说明
- 所有需要图片的位置都已用占位符标记
- 占位符格式：`【需要图片：文件名.png - 图片描述】`
- 占位符使用毛玻璃效果的虚线边框，方便识别
- 共需要48张新图片，分为5大类：功能图标、场景图标、技术图标、企业Logo、新闻配图

### 🎯 图片优先级
1. **高优先级** - 首页技术优势图标 (6个)
2. **高优先级** - 新闻媒体图片 (6个)  
3. **中优先级** - 产品页功能图标 (12个)
4. **中优先级** - 案例页公司Logo (6个)
5. **低优先级** - 其他页面图标 (18个)

## 📈 更新日志

### v2.1.0 (2024-09-19)
- ✅ 完成案例展示页面和关于我们页面排版重新设计
- ✅ 全面规划所有图片占位符需求 (48张图片)
- ✅ 标记所有无意义图标，提供具体图片需求说明
- ✅ 添加统一的图片占位符样式系统
- ✅ 创建详细的图片需求文档

### v2.0.0 (2024-09-19)
- ✅ 完全重新设计，采用Vue 3架构
- ✅ 一模一样复刻原网站样式
- ✅ 所有emoji替换为图片占位符
- ✅ 响应式设计优化
- ✅ 组件化开发架构

### v1.0.0
- 初始HTML版本

## 📝 许可证

MIT License

## 👥 维护团队

DataArc Technology Team

---

**当前版本**: v2.1.0  
**最后更新**: 2024年9月19日  
**技术栈**: Vue 3.3.0 + Vite 4.5.0 