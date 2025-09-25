# 飞书机器人联系表单集成说明

## 功能概述

已成功将飞书机器人留言功能集成到 Company.vue 页面的联系表单中。当用户提交表单时，信息将通过飞书 Webhook 发送到指定的飞书群或个人。

## 新增文件

### 1. API 服务文件
- `src/services/contact.js` - 联系表单API服务，包含发送逻辑和表单验证

### 2. 环境配置文件
- `.env.example` - 环境变量示例文件
- `.env.local` - 本地开发环境配置（需要配置实际值）

## 环境变量配置

### 必需的环境变量

在 `.env.local` 文件中配置以下变量：

```bash
# 飞书机器人的Webhook URL
VITE_WEB_HOOK_URL=https://open.feishu.cn/open-apis/bot/v2/hook/your_webhook_token_here

# 飞书消息卡片模板ID  
VITE_TEMPLATE_ID=ctp_your_template_id_here

# 飞书消息卡片模板版本
VITE_TEMPLATE_VERSION=1.0.0
```

## 飞书配置步骤

### 1. 创建飞书机器人应用

1. 登录 [飞书开放平台](https://open.feishu.cn/)
2. 创建自建应用
3. 在"机器人"功能中启用机器人
4. 获取 Webhook URL

### 2. 创建消息卡片模板

1. 在飞书开放平台创建消息卡片模板
2. 模板需要包含以下变量：
   - `lastname` - 姓
   - `firstname` - 名  
   - `email` - 邮箱
   - `phone` - 电话
   - `other` - 咨询内容

### 3. 示例消息卡片模板

```json
{
  "config": {
    "wide_screen_mode": true
  },
  "elements": [
    {
      "tag": "markdown",
      "content": "**新的联系表单提交**"
    },
    {
      "tag": "div",
      "fields": [
        {
          "is_short": true,
          "text": {
            "tag": "lark_md",
            "content": "**姓名**: {{lastname}}{{firstname}}"
          }
        },
        {
          "is_short": true,
          "text": {
            "tag": "lark_md", 
            "content": "**邮箱**: {{email}}"
          }
        },
        {
          "is_short": true,
          "text": {
            "tag": "lark_md",
            "content": "**电话**: {{phone}}"
          }
        }
      ]
    },
    {
      "tag": "div",
      "fields": [
        {
          "is_short": false,
          "text": {
            "tag": "lark_md",
            "content": "**咨询内容**:\n{{other}}"
          }
        }
      ]
    }
  ]
}
```

## 功能特性

### 1. 表单字段
- **姓** - 用户的姓 (lastname)
- **名** - 用户的名 (firstname)  
- **邮箱** - 邮箱地址验证
- **电话** - 电话号码验证
- **咨询内容** - 至少10个字符

### 2. 表单验证
- 客户端实时验证
- 错误消息显示
- 提交前数据验证

### 3. 用户体验
- 加载状态显示
- 成功/失败消息提示
- 表单自动重置
- 禁用重复提交

### 4. 错误处理
- 网络错误处理
- 服务器错误处理  
- 用户友好的错误提示

## 开发和测试

### 启动开发服务器
```bash
pnpm dev
```

### 测试表单
1. 访问 `/company` 页面
2. 填写联系表单
3. 查看浏览器控制台的调试信息
4. 检查飞书群是否收到消息

## 生产部署

### 环境变量设置
在生产环境中设置相同的环境变量：
- `VITE_WEB_HOOK_URL`
- `VITE_TEMPLATE_ID` 
- `VITE_TEMPLATE_VERSION`

### 构建项目
```bash
pnpm build
```

## 安全注意事项

1. **Webhook URL安全**: 不要将 Webhook URL 暴露在公开代码中
2. **环境变量**: 使用 `.env.local` 文件并添加到 `.gitignore`
3. **CORS设置**: 确保飞书API允许你的域名访问
4. **数据验证**: 客户端和服务端都需要进行数据验证

## 故障排除

### 常见问题

1. **环境变量未加载**
   - 检查 `.env.local` 文件是否存在
   - 确保变量名以 `VITE_` 开头
   - 重启开发服务器

2. **网络请求失败**
   - 检查 Webhook URL 是否正确
   - 检查网络连接
   - 查看浏览器控制台错误信息

3. **消息格式错误**
   - 检查模板ID和版本是否正确
   - 确认模板变量名匹配

### 调试信息
- 查看浏览器控制台的网络请求
- 检查飞书开放平台的日志
- 使用浏览器开发者工具调试

## 支持

如需帮助，请检查：
1. 飞书开放平台文档
2. 浏览器控制台错误信息
3. 网络请求详情