# ESP32 Drone Website - Astro

基于 Astro 构建的 ESP32 无人机教育网站。

## 项目链接

| 类型 | 链接 |
|------|------|
| 🌐 **生产网站** | https://drone.imagrove.com |
| 📁 **GitHub 仓库** | https://github.com/imagrove/drone-website |
| ⚙️ **Vercel 设置** | https://vercel.com/imagroves-projects/drone-website/settings/build-and-deployment |

## 技术栈

- **框架**: [Astro](https://astro.build)
- **内容**: Markdown + Content Collections
- **样式**: 原生 CSS (极简灰白风格)
- **部署**: Vercel + GitHub 自动部署

## 项目结构

### 当前目录结构

```
drone-website/
├── src/                    # 源代码
│   ├── content/           # 内容集合
│   │   └── tutorials/     # 教程内容
│   │       ├── en/        # 英文教程
│   │       └── zh/        # 中文教程
│   ├── layouts/           # 页面布局
│   └── pages/             # 路由页面
│       ├── index.astro    # 英文首页
│       ├── hardware.astro # 硬件页面
│       ├── downloads.astro# 下载页面
│       ├── tutorials/     # 教程页面
│       └── zh/            # 中文页面
├── public/                # 静态资源
│   └── robots.txt         # 爬虫规则
├── astro.config.mjs       # Astro 配置
├── vercel.json            # Vercel 配置
├── package.json           # 依赖配置
└── README.md              # 项目文档
```

### 相关文档

- 初级教材: `1.1初级教材.md`
- 中级教材: `1.2中级教材.md`
- 高级教材: `1.3高级教材.md`

### 验证部署

部署成功后，验证以下 URL：

- 英文首页：https://drone.imagrove.com/
- 中文首页：https://drone.imagrove.com/zh/
- 硬件页面：https://drone.imagrove.com/hardware
- 下载页面：https://drone.imagrove.com/downloads
- 教程页面：https://drone.imagrove.com/tutorials
- 站点地图：https://drone.imagrove.com/sitemap.xml

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

### 自动部署（推荐）

项目已配置 GitHub + Vercel 自动部署。推送代码到 GitHub 后，Vercel 会自动构建并部署。

```bash
git add -A
git commit -m "更新内容"
git push origin main
```

### ⚠️ 重要：Vercel 配置

如果创建新项目或需要重新配置，按以下步骤设置：

#### 1. 连接 GitHub 仓库

1. 访问 https://vercel.com/imagroves-projects/drone-website/settings/git
2. 在 **Connected Git Repository** 部分点击 **Connect**
3. 选择 **GitHub** → 选择 `imagrove/drone-website` 仓库
4. 保存

#### 2. 配置构建设置

1. 访问 https://vercel.com/imagroves-projects/drone-website/settings/build-and-deployment
2. 修改以下配置：

| 设置项 | 值 | 说明 |
|--------|-----|------|
| **Framework Preset** | `Astro` | 框架类型 |
| **Build Command** | `npm run build` | 构建命令 |
| **Output Directory** | `dist` | ⚠️ **必须修改！** 默认为 `public` |
| **Install Command** | `npm install` | 依赖安装 |

3. 点击 **Save** 保存

> **注意**：如果 Output Directory 设置不正确（不是 `dist`），网站会返回 404 错误。详见下方的「故障排除」章节。

#### 3. 配置自定义域名

1. 访问 https://vercel.com/imagroves-projects/drone-website/settings/domains
2. 添加域名：`drone.imagrove.com`
3. 按提示配置 DNS

### 手动部署（备用）

如果自动部署失败，可以使用 Vercel CLI 手动部署：

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署到生产环境
vercel --prod
```

---

## 故障排除

### 问题：网站返回 404 错误

**症状**：
- 本地构建成功 (`npm run build` 生成 `dist/` 目录)
- Vercel 部署状态显示 "Ready"
- 访问网站返回 `HTTP 404` 或 `NOT_FOUND`
- Vercel 部署日志显示 `Builds: . [0ms]`

**根本原因**：
Vercel 项目的 **Output Directory** 默认为 `public` 或 `.`，而 Astro 构建输出到 `dist` 目录。

**解决方案**：
访问 https://vercel.com/imagroves-projects/drone-website/settings/build-and-deployment
将 **Output Directory** 修改为 `dist`，然后重新部署。

### 常用命令

```bash
# 本地构建测试
npm run build

# 检查 dist 目录
ls -la dist/

# 检查部署状态
vercel ls drone-website

# 查看项目设置
vercel project inspect drone-website
```

### 参考链接

- [Astro 部署指南 - Vercel](https://docs.astro.build/en/guides/deploy/vercel/)
- [Vercel 项目设置文档](https://vercel.com/docs/concepts/projects/project-settings)