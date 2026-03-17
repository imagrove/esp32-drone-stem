# Vercel 部署问题记录

## 问题描述

Astro 项目构建成功，但部署到 Vercel 后返回 404 错误。

### 根本原因

Vercel 项目的 **Output Directory** 设置默认为 `public`（如果存在）或 `.`（当前目录），而 Astro 构建输出到 `dist` 目录。这导致 Vercel 无法找到构建后的文件。

### 错误表现

- 本地构建成功：`npm run build` 生成 `dist/` 目录，包含所有页面
- Vercel 部署状态显示 "Ready"
- 访问网站返回 `HTTP 404` 或 `NOT_FOUND` 错误
- Vercel 部署日志显示 Builds: `. [0ms]`（表示没有执行构建或找不到输出）

## 解决方案

### 方案一：修改 Vercel 项目设置（推荐）

通过 Vercel Dashboard 修改项目配置：

1. 访问 https://vercel.com/dashboard
2. 进入项目 `imagroves-projects/drone-website`
3. 点击 **Settings** → **Build & Development Settings**
4. 修改以下设置：
   | 设置项 | 值 |
   |--------|-----|
   | **Framework Preset** | `Astro` |
   | **Build Command** | `npm run build` |
   | **Output Directory** | `dist` |
   | **Install Command** | `npm install` |
   | **Root Directory** | `.` |

5. 保存设置
6. 重新部署：`vercel --prod`

### 方案二：使用 vercel.json 覆盖设置

在项目根目录创建 `vercel.json`：

```json
{
  "version": 2,
  "framework": "astro",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install"
}
```

**注意**：`vercel.json` 中的设置可能被项目级别的设置覆盖，建议优先使用方案一。

### 方案三：重命名输出目录（临时方案）

将 Astro 构建输出从 `dist` 改为 `public`：

1. 修改 `astro.config.mjs`：

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://drone.imagrove.com',
  output: 'static',
  outDir: 'public',  // 修改输出目录
  // ...
});
```

2. 重新构建并部署

**缺点**：`public/` 目录在 Astro 中有特殊用途（存放静态资源），可能与构建输出冲突。

## 验证部署

部署成功后，验证以下 URL 可访问：

- 英文首页：https://drone.imagrove.com/
- 中文首页：https://drone.imagrove.com/zh/
- 硬件页面：https://drone.imagrove.com/hardware
- 下载页面：https://drone.imagrove.com/downloads
- 教程页面：https://drone.imagrove.com/tutorials

## 相关命令

```bash
# 本地构建测试
npm run build

# 检查 dist 目录内容
ls -la dist/

# 部署到 Vercel
vercel --prod

# 检查部署状态
vercel ls

# 查看项目设置
vercel project inspect drone-website
```

## 项目结构

```
drone-website/
├── src/                    # 源代码
│   ├── content/           # Markdown 内容
│   ├── layouts/           # Astro 布局
│   └── pages/             # 页面组件
├── dist/                  # 构建输出（Astro 默认）
├── public/                # 静态资源
├── astro.config.mjs       # Astro 配置
├── package.json           # 依赖配置
├── vercel.json            # Vercel 配置
└── DEPLOYMENT.md          # 本文档
```

## 参考链接

- [Astro 部署指南 - Vercel](https://docs.astro.build/en/guides/deploy/vercel/)
- [Vercel 项目设置文档](https://vercel.com/docs/concepts/projects/project-settings)
- [Astro 静态构建配置](https://docs.astro.build/en/reference/configuration-reference/#outdir)

---

**记录时间**：2026-03-17  
**问题状态**：待解决（需修改 Vercel Dashboard 设置）
