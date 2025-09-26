---

# Cursor Prompt

你现在是一个资深前端工程师，帮我基于 **Next.js + TailwindCSS + Markdown** 搭建一个适合 GitHub Pages 部署的个人网站 scaffold。
以下是需求：

---

## 技术要求

* 框架：**Next.js (App Router)**
* 样式：**TailwindCSS**
* 图标库：**lucide-react**
* 内容加载：**gray-matter**（解析 Markdown frontmatter）
* 部署方式：`next export` 生成静态文件，支持 GitHub Pages
* 博客与项目均使用 Markdown 文件存储

---

## 目录结构

```
root
├── content
│   ├── blog
│   │   ├── 2025-01-10-bigdata-to-ai.md
│   │   └── 2025-02-15-flink-kafka.md
│   └── projects
│       ├── realtime-log-analytics.md
│       └── ai-recommendation-system.md
├── app
│   ├── page.tsx               # 首页
│   ├── blog
│   │   ├── page.tsx           # 博客列表
│   │   └── [slug]/page.tsx    # 博客详情
│   ├── projects
│   │   ├── page.tsx           # 项目列表
│   │   └── [slug]/page.tsx    # 项目详情
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── BlogCard.tsx
│   └── MarkdownRenderer.tsx
├── styles/globals.css
├── package.json
└── tailwind.config.js
```

---

## 页面功能

### 首页 (Home)

* 显示一句话定位（「大数据工程师转型 AI 全栈开发者」）
* 简短介绍 & 按钮导航（博客 / 项目 / 关于 / 联系）

### 博客 (Blog)

* **列表页**：展示文章标题、日期、标签、摘要
* **详情页**：渲染 Markdown 内容

### 项目 (Projects)

* **列表页**：项目卡片，展示标题、简介、技术栈、GitHub 链接
* **详情页**：渲染 Markdown 内容

### 关于 (About)

* 背景介绍：

  * 5年大数据工程师
  * 正在向 AI 全栈开发转型
  * 技能栈：大数据（Kafka, Flink, Spark）、AI（PyTorch, Transformers）、全栈（Next.js, Node.js, Docker）

### 联系 (Contact)

* 展示 GitHub / LinkedIn / Email
* 可选：简单表单（提交到 Formspree）

---

## Mock 内容

### 博客

**文件**：`/content/blog/2025-01-10-bigdata-to-ai.md`

```markdown
---
title: "从大数据到 AI 全栈的转型思考"
date: "2025-01-10"
tags: ["职业发展", "大数据", "AI"]
summary: "分享了我在大数据领域的工作经验，并思考了如何将分布式计算的能力与 AI 技术结合，逐步向全栈 AI 方向演进。"
---

过去五年的大数据开发经验，让我对分布式计算和数据工程有了深入理解。但随着 AI 技术的崛起，我开始思考：大数据与 AI 如何结合？...
```

**文件**：`/content/blog/2025-02-15-flink-kafka.md`

```markdown
---
title: "Flink 与 Kafka 实战：构建高吞吐低延迟的数据管道"
date: "2025-02-15"
tags: ["Flink", "Kafka", "实时计算"]
summary: "通过一个实际项目案例介绍了如何利用 Kafka + Flink 实现实时数据处理，并给出一些性能优化的经验。"
---

在构建实时数据处理系统时，Kafka 与 Flink 是经典组合。本文将结合实践经验，介绍如何设计高吞吐、低延迟的数据管道，并分享一些调优经验。
```

---

### 项目

**文件**：`/content/projects/realtime-log-analytics.md`

```markdown
---
title: "实时日志分析平台"
tech: ["Kafka", "Flink", "Elasticsearch", "Docker", "Grafana"]
github: "https://github.com/yourname/realtime-log-analytics"
summary: "基于 Kafka + Flink + Elasticsearch 搭建的实时日志采集与分析系统，支持百万级 QPS，帮助业务实时监控异常。"
---

该平台的核心目标是实现 **低延迟、高吞吐** 的日志处理。通过 Kafka 进行日志采集，Flink 做实时计算，Elasticsearch 用于存储与查询，最终通过 Grafana 展示可视化报表。
```

**文件**：`/content/projects/ai-recommendation-system.md`

```markdown
---
title: "AI 驱动的个性化推荐系统"
tech: ["Python", "PyTorch", "FastAPI", "Redis", "PostgreSQL"]
github: "https://github.com/yourname/ai-recommendation-system"
summary: "利用 Transformer + 协同过滤，为电商平台实现个性化推荐，点击率提升 18%。"
---

本项目基于 Transformer 模型与协同过滤，结合用户历史行为数据，构建了电商推荐系统。模型通过 PyTorch 训练，并通过 FastAPI 提供推理服务，最终上线后点击率提升了 **18%**。
```

---

## 未来扩展

* 博客 / 项目增加标签筛选
* 博客支持全文搜索
* 网站支持中英文切换

---

👉 请你帮我生成一个完整的 Next.js scaffold，包含上述结构和样例内容，能在本地 `npm run dev` 运行，并支持 `next export` 导出静态文件到 GitHub Pages。

---