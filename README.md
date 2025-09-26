# Rum Mojito 个人网站

基于 Next.js + TailwindCSS + Markdown 构建的 AI 全栈开发者个人网站，支持 GitHub Pages 部署。

## 技术栈

- **框架**: Next.js 15 (App Router)
- **样式**: TailwindCSS 4
- **图标**: Lucide React
- **内容**: Markdown + gray-matter
- **部署**: GitHub Pages

## 功能特性

- 🏠 **首页**: 个人介绍和技能展示
- 📝 **博客**: Markdown 驱动的技术博客
- 🚀 **项目**: 项目展示和详细介绍
- 👤 **关于**: 个人背景和技能栈
- 📧 **联系**: 联系表单和社交链接

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建静态文件

```bash
npm run build
```

构建后的文件将输出到 `out` 目录。

## 部署到 GitHub Pages

### 自动部署

1. 将代码推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 "GitHub Actions" 作为部署源
4. 每次推送到 `main` 分支都会自动部署

### 手动部署

```bash
npm run deploy
```

然后将 `out` 目录的内容推送到 `gh-pages` 分支。

## 项目结构

```
├── app/                    # Next.js App Router 页面
│   ├── page.tsx            # 首页
│   ├── blog/               # 博客页面
│   ├── projects/           # 项目页面
│   ├── about/              # 关于页面
│   └── contact/            # 联系页面
├── components/             # 可复用组件
│   ├── Navbar.tsx          # 导航栏
│   ├── Footer.tsx          # 页脚
│   ├── BlogCard.tsx        # 博客卡片
│   ├── ProjectCard.tsx     # 项目卡片
│   └── MarkdownRenderer.tsx # Markdown 渲染器
├── content/                # Markdown 内容
│   ├── blog/               # 博客文章
│   └── projects/            # 项目介绍
├── lib/                    # 工具函数
│   └── markdown.ts         # Markdown 处理
└── styles/                 # 样式文件
    └── globals.css         # 全局样式
```

## 添加内容

### 添加博客文章

在 `content/blog/` 目录下创建 Markdown 文件：

```markdown
---
title: "文章标题"
date: "2025-01-10"
tags: ["标签1", "标签2"]
summary: "文章摘要"
---

文章内容...
```

### 添加项目

在 `content/projects/` 目录下创建 Markdown 文件：

```markdown
---
title: "项目名称"
tech: ["技术1", "技术2"]
github: "https://github.com/username/repo"
summary: "项目摘要"
---

项目详情...
```

## 自定义配置

### 修改个人信息

编辑 `app/layout.tsx` 中的 metadata 和各个页面中的个人信息。

### 修改样式

编辑 `app/globals.css` 文件来自定义样式。

### 修改导航

编辑 `components/Navbar.tsx` 中的导航链接。

## 许可证

MIT License