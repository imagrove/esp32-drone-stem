# ESP32 Drone Tutorial Website

基于 [Astro Starlight](https://starlight.astro.build) 构建的 ESP32 无人机教育文档网站（中英双语）。

## 项目链接

| 类型 | 链接 |
|------|------|
| 🌐 **生产网站** | https://drone.imagrove.com |
| 📁 **GitHub 仓库** | https://github.com/imagrove/drone-website |
| ⚙️ **Vercel 部署** | https://vercel.com/imagroves-projects/drone/settings/build-and-deployment |

## 技术栈

- **框架**: [Astro](https://astro.build) + [Starlight](https://starlight.astro.build)
- **内容**: Markdown（Starlight Content Collections）
- **国际化**: Starlight 内置多语言系统
- **部署**: Vercel + GitHub 自动部署

## 项目结构

```
drone-website/
├── src/
│   ├── content/docs/          # Starlight 文档内容
│   │   ├── beginner/          # 英文初级教程
│   │   ├── intermediate/      # 英文中级教程
│   │   ├── advanced/          # 英文高级教程
│   │   └── zh/                # 中文教程（镜像结构）
│   │       ├── beginner/
│   │       ├── intermediate/
│   │       └── advanced/
│   ├── pages/                 # 自定义页面（非 Starlight 管理）
│   │   ├── index.astro        # 英文首页
│   │   ├── hardware.astro     # 英文硬件页
│   │   ├── downloads.astro    # 英文下载页
│   │   └── zh/                # 中文自定义页面
│   ├── components/Header/     # 自定义页面的 Header 组件
│   ├── config.ts              # 全局链接配置（Alibaba 等）
│   └── _archive/              # 归档旧文件（不参与构建）
├── public/                    # 静态资源
├── astro.config.mjs           # Astro + Starlight 配置
├── vercel.json                # Vercel 配置
└── package.json
```

## 国际化

Starlight 自动处理多语言路由：

| URL 路径 | 语言 | 内容来源 |
|----------|------|----------|
| `/beginner/first-flight` | English | `src/content/docs/beginner/01-first-flight.md` |
| `/zh/beginner/first-flight` | 中文 | `src/content/docs/zh/beginner/01-first-flight.md` |
| `/` | English | `src/pages/index.astro`（自定义页面） |
| `/zh/` | 中文 | `src/pages/zh/index.astro`（自定义页面） |

> 说明：教程文件名以 `XX-` 开头（如 `01-first-flight.md`）是为了在文件树中按学习顺序排列；URL 中的数字前缀会被 `src/content.config.ts` 中的 `generateId` 自动剥离，对外保持不变。

英文为默认语言（根路径），中文在 `/zh/` 路径下。

## 配置管理

### 外部链接

所有外部链接集中在 `src/config.ts`，修改一处即全站生效：

```ts
// src/config.ts
export const LINKS = {
  alibaba: 'https://www.alibaba.com/product-detail/...',
  email: 'mailto:dr@imagrove.com',
};
```

### Starlight 配置

侧边栏、社交图标、语言等配置在 `astro.config.mjs` 中管理。

## 开发命令

```bash
npm install        # 安装依赖
npm run dev        # 开发服务器 (localhost:4321)
npm run build      # 构建生产版本
npm run preview    # 预览构建结果
```

## 内容管理

教程使用 Markdown 编写，位于 `src/content/docs/`。

### 添加新教程

1. 在对应目录创建 `.md` 文件（如 `src/content/docs/beginner/new-topic.md`）
2. 添加 front matter：

```yaml
---
title: 教程标题
description: 简短描述
sidebar:
  order: 7
---
```

3. Starlight 自动生成侧边栏和前后翻页导航
4. 中文版放到 `src/content/docs/zh/` 对应目录下

## 部署

推送到 GitHub 后 Vercel 自动构建部署：

```bash
git add -A
git commit -m "更新内容"
git push origin main
```

### Vercel 构建设置

| 设置项 | 值 |
|--------|-----|
| Framework Preset | Astro |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

## 参考链接

- [Starlight 文档](https://starlight.astro.build)
- [Astro 部署指南 - Vercel](https://docs.astro.build/en/guides/deploy/vercel/)