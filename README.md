# ESP32 Drone Website - Astro

基于 Astro 构建的 ESP32 无人机教育网站。

## 技术栈

- **框架**: [Astro](https://astro.build)
- **内容**: Markdown + Content Collections
- **样式**: 原生 CSS (极简灰白风格)
- **部署**: Vercel

## 项目结构

### 当前目录结构

```
drone-website/
├── src/
│   ├── content/           # 内容集合
│   │   └── tutorials/     # 教程内容
│   │       ├── en/        # 英文教程
│   │       └── zh/        # 中文教程
│   ├── layouts/           # 页面布局
│   ├── pages/             # 路由页面
│   │   ├── index.astro    # 英文首页
│   │   └── zh/            # 中文页面
│   └── components/        # 可复用组件
├── public/                # 静态资源
│   ├── assets/
│   └── images/
├── sitemap.xml            # 站点地图（SEO）
├── robots.txt             # 爬虫规则
├── CNAME                  # 自定义域名配置
└── vercel.json            # Vercel路由配置
```

### 关键URL

- 生产环境: https://drone.imagrove.com
- 站点地图: https://drone.imagrove.com/sitemap.xml
- Robots: https://drone.imagrove.com/robots.txt

### 相关文档

- 初级教材: `网站-社区/初级教材.md`
- 中级教材: `网站-社区/中级教材.md`
- 高级教材: `网站-社区/高级教材1.md`, `高级教材2.md`

## 开发命令

```bash
# 安装依赖
npm install

# 开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
```

## 内容管理

教程内容使用 Markdown 文件管理，位于 `src/content/tutorials/`。

### 创建新教程

1. 在 `src/content/tutorials/en/` 或 `zh/` 创建 `.md` 文件
2. 添加 front matter 元数据
3. 使用 Markdown 编写内容

### Front Matter 格式

```yaml
---
title: "教程标题"
description: "教程描述"
level: beginner | intermediate | advanced
order: 1
duration: "2 hours"
prerequisites: ["前置技能"]
draft: false
---
```

## 部署

### 自动部署

推送到 GitHub 后，Vercel 自动部署。

```bash
git add -A
git commit -m "更新内容"
git push
```

### ⚠️ 重要：Vercel 配置

首次部署或创建新项目时，需要在 Vercel Dashboard 中配置：

1. 访问项目 Settings → Build & Development Settings
2. 确保以下配置正确：
   - **Framework Preset**: `Astro`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist` ⚠️ （默认为 public，必须修改！）
   - **Install Command**: `npm install`

> **注意**：如果 Output Directory 设置不正确，网站会返回 404 错误。详见 [DEPLOYMENT.md](./DEPLOYMENT.md)

### 手动部署

```bash
# 使用 Vercel CLI
vercel --prod
```