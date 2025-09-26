---
title: "GitHub Pages 部署踩坑记：Next.js + GitHub Actions 完整解决方案"
date: "2025-09-27"
tags: ["GitHub Pages", "Next.js", "GitHub Actions", "部署"]
summary: "记录了使用 Next.js + GitHub Actions + GitHub Pages 部署个人网站时遇到的所有问题及解决方案，包括权限配置、Jekyll 处理、Next.js 15 兼容性等。"
---

在搭建个人网站时，我选择了 Next.js + GitHub Actions + GitHub Pages 的技术栈。本以为部署会很简单，结果踩了无数个坑。本文将详细记录遇到的问题和解决方案，希望能帮助到有同样需求的开发者。

## 技术栈选择

- **框架**：Next.js 15 (App Router)
- **样式**：TailwindCSS
- **部署**：GitHub Actions + GitHub Pages
- **内容管理**：Markdown 文件

## 问题1：GitHub Actions 权限不足

### 错误信息
```
Permission to Rum-Mojito/Rum-Mojito.github.io.git denied to github-actions[bot]
```

### 解决方案
在 `.github/workflows/deploy.yml` 中添加权限配置：

```yaml
permissions:
  contents: write
  pages: write
  id-token: write
```

**关键点**：`contents: write` 权限是必需的，否则无法推送到仓库。

## 问题2：Jekyll 处理冲突

### 错误信息
```
Invalid YAML front matter in /github/workspace/requirement_doc.md
```

### 问题分析
GitHub Pages 默认使用 Jekyll 处理静态文件，但我们的 Next.js 应用不需要 Jekyll 处理。

### 解决方案
1. 创建 `.nojekyll` 文件禁用 Jekyll 处理
2. 在构建后自动创建 `out/.nojekyll` 文件

```yaml
- name: Create .nojekyll file
  run: touch out/.nojekyll
```

## 问题3：Next.js 15 异步参数

### 错误信息
```
Type 'BlogPostPageProps' does not satisfy the constraint 'PageProps'
```

### 问题分析
Next.js 15 中，`params` 现在是异步的（Promise 类型）。

### 解决方案
更新组件类型定义和使用方式：

```typescript
// 之前
interface BlogPostPageProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);
}

// 之后
interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
}
```

## 问题4：静态资源加载失败

### 问题现象
网站显示纯文本，没有 CSS 样式。

### 问题分析
错误的 `basePath` 和 `assetPrefix` 配置导致静态资源路径错误。

### 解决方案
移除不必要的配置：

```javascript
// 错误的配置
const nextConfig = {
  basePath: '/Rum-Mojito.github.io',
  assetPrefix: '/Rum-Mojito.github.io/',
}

// 正确的配置
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}
```

## 问题5：文件冲突

### 问题现象
网站显示简单的 HTML 内容，而不是 Next.js 应用。

### 问题分析
根目录下的 `index.html` 文件覆盖了 Next.js 构建的应用。

### 解决方案
删除根目录下冲突的 `index.html` 文件，让 GitHub Pages 使用 `out/index.html`。

## 问题6：部署配置错误

### 问题现象
GitHub Actions 成功运行，但网站显示 404。

### 问题分析
使用了第三方 action `peaceiris/actions-gh-pages`，可能与最新的 GitHub Pages 机制不兼容。

### 解决方案
使用 GitHub 官方的 Pages 部署 actions：

```yaml
- name: Setup Pages
  uses: actions/configure-pages@v4
  
- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: ./out
    
- name: Deploy to GitHub Pages
  id: deployment
  uses: actions/deploy-pages@v4
```

## 最终配置

### GitHub Pages 设置
- **Source**: "GitHub Actions"
- **Branch**: 不需要设置

### 完整的工作流配置
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

permissions:
  contents: write
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Create .nojekyll file
      run: touch out/.nojekyll
      
    - name: Setup Pages
      uses: actions/configure-pages@v4
      
    - name: Upload artifact
      uses: actions/upload-pages-artifact@v3
      with:
        path: ./out
        
    - name: Deploy to GitHub Pages
      id: deployment
      uses: actions/deploy-pages@v4
```

## 经验总结

1. **权限配置很重要**：确保 GitHub Actions 有足够的权限
2. **禁用 Jekyll**：对于 Next.js 应用，必须禁用 Jekyll 处理
3. **Next.js 15 兼容性**：注意异步参数的变化
4. **使用官方 actions**：第三方 actions 可能不兼容最新的 GitHub Pages
5. **避免文件冲突**：确保没有冲突的静态文件

## 部署流程

1. 推送代码到 `main` 分支
2. GitHub Actions 自动触发构建
3. 构建完成后部署到 GitHub Pages
4. 网站自动更新

通过这次踩坑经历，我深刻体会到了技术栈选择的重要性。虽然过程曲折，但最终成功部署了网站，也为后续的项目积累了宝贵的经验。

**网站链接**：https://rum-mojito.github.io
