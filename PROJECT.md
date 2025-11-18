# Markdown Online – Markdown Live Preview & Converter

## 一、项目概述 / Overview

Markdown Online 是一个纯前端、无需登录注册的在线 Markdown 工具网站，支持 **Markdown 在线预览、Markdown 编辑、Markdown 转 HTML / PDF / JPG / PNG / Word** 等功能。  
技术栈采用 **Astro + React + Tailwind CSS + Lucide 图标库**，UI 风格简约，以 **绿色、淡绿、淡红** 为主色，支持 **中 / 英 / 日 / 韩多语言切换**，专注于通过高质量内容和良好性能提升 **Google SEO** 表现。

- **主站域名**: `https://oumashu.top`
- **主要目标关键词（中英混合）**:  
  - markdown 在线预览, markdown online preview  
  - markdown 在线编辑, markdown editor  
  - markdown 语法, markdown syntax  
  - markdown to html, markdown 转 html  
  - markdown to pdf, markdown 转 pdf  
  - markdown to jpg, markdown to png, markdown 转图片  
  - markdown to word, markdown 转 word  
  - markdown 表格, markdown tables, markdown checklist  
- **联系方式**: `wanghongxiang23@gmail.com` · X: `@Rollkey4`

---

## 二、受众与核心卖点

### 目标用户
- 想快速编写、预览并导出 Markdown 文档的开发者、学生、内容创作者
- 搜索「**markdown在线预览 / markdown online / markdown to pdf / markdown转word / markdown editor**」等的用户

### 核心卖点
- **纯前端 / 无需登录**: 打开即用，无账号、无数据上传到服务器，更安全隐私。
- **多格式导出**: 一次编辑，支持导出 **HTML、PDF、JPG/PNG、Word**。
- **实时 Markdown 在线预览**: 左侧编辑、右侧预览，所见即所得。
- **多语言支持**: 中英日韩界面，可自动根据浏览器语言或用户手动切换。
- **SEO 友好内容体系**: 覆盖「markdown 语法」「markdown 表格」「markdown to pdf」等长尾关键词的文档与示例页面。

---

## 三、功能设计 / Features

### 1. 编辑与预览

#### Markdown 在线编辑器
- React 组件实现，支持常见 Markdown 语法、快捷键（加粗、标题、列表、表格等）。
- 支持本地缓存（`localStorage`）自动保存草稿。

#### Markdown 实时预览（Markdown Live Preview）
- 双栏布局：左侧编辑区、右侧预览区。
- 支持暗色 / 浅色模式切换（Tailwind + CSS 变量）。
- 支持代码高亮、任务列表、表格、脚注等扩展语法。

### 2. 格式转换

- **Markdown 转 HTML**
  - 一键复制 HTML 或导出 `.html` 文件。
- **Markdown 转 PDF**
  - 基于浏览器打印或 Canvas 渲染生成 PDF，支持页面边距、字号、页眉页脚设置。
- **Markdown 转 JPG/PNG**
  - 将预览区域渲染为图片，支持自定义宽度、背景色。
- **Markdown 转 Word**
  - 将 Markdown 转换为 HTML/Docx 结构，打包为 `.docx` 下载。

#### 辅助工具
- 字数统计、阅读时间估算。
- Markdown 模板（如博客文章、技术文档、会议记录等）。

### 3. 多语言与国际化

- **支持语言**: 简体中文、English、日本語、한국어
- **国际化策略**
  - 使用 Astro + React 国际化方案，JSON 文本分语种管理。
  - 根据 `Accept-Language` 自动选择默认语言，并提供语言切换下拉菜单。
  - 主路径保持英文，语言用前缀区分，如：
    - `/` (English 默认)
    - `/zh/markdown-online-preview`
    - `/ja/markdown-online-editor`
    - `/ko/markdown-to-pdf`

---

## 四、SEO 策略 / SEO Strategy

### 1. 页面结构与信息架构

#### 首页（Landing Page）
- **URL**: `/`  
- **目标关键词**:  
  - markdown online, markdown在线预览, markdown editor  
- **内容模块**：
  - 主标题 H1（由 Astro 模板输出）：
    - 英文: "Online Markdown Editor & Live Preview (Markdown to PDF, Word, HTML, Image)"  
    - 中文: "Markdown 在线预览编辑器（支持转 PDF、Word、HTML、图片）"
  - 功能概览区块：使用 H2/H3 结构覆盖关键词如「Markdown 在线预览」「Markdown to PDF」「Markdown 转 Word」。
  - 在线编辑 Demo：直接可编辑的编辑器组件，增强停留时长和交互信号。
  - 优势说明：纯前端、隐私安全、无登录、多语言等。

#### 专题内容页（长尾关键词页）
每个用 H2/H3 清晰结构：
- `/zh/markdown-online-preview` – 针对「markdown 在线预览」「markdown online preview」
- `/zh/markdown-syntax-guide` – 针对「markdown 语法」「markdown 表格」
- `/zh/markdown-to-pdf` – 针对「markdown 转 pdf」「markdown to pdf」
- `/zh/markdown-to-word` – 针对「markdown 转 word」「markdown to word」
- `/zh/markdown-to-image` – 针对「markdown 转图片」「markdown to jpg/png」
- 英文、日文、韩文路径采用同样结构，对应翻译关键词。

#### 站点地图与结构化数据
- 自动输出 `sitemap.xml`（Astro 集成）。
- 为工具页面添加 `WebApplication` 类型的 JSON-LD 结构化数据（描述为「Markdown editor / Markdown converter」）。

### 2. 元信息配置（按语言）

#### 标题（Title）示例
- **中文首页**:  
  - `Markdown 在线预览编辑器 | Markdown 转 PDF/Word/HTML/JPG - Markdown Online`
- **英文首页**:  
  - `Online Markdown Editor & Live Preview | Markdown to PDF/Word/HTML/Image`

#### Meta Description 示例
- **中文**:  
  - `Markdown Online 是一款无需登录的在线 Markdown 编辑器，支持 Markdown 在线预览、Markdown 语法高亮，并一键将 Markdown 转换为 HTML、PDF、JPG/PNG、Word。纯前端运行，更安全更快捷。`
- **英文**:  
  - `Markdown Online is a fast, privacy-friendly markdown editor with live preview. Edit markdown online and export to HTML, PDF, JPG/PNG, and Word – no signup, runs fully in your browser.`

#### Keywords（可选 meta，但主要依靠自然内容）
- `markdown online preview, markdown editor, markdown to pdf, markdown to word, markdown转pdf, markdown在线预览, markdown 语法`

### 3. 内容与内链

- 在功能介绍、使用教程、FAQ 中自然插入关键词，不堆砌：
  - 例如：「使用本工具可以快速 **markdown 转 pdf**，也可以 **markdown 转 word**。」
- 页面之间通过相关链接互相指向：
  - 从首页「Markdown 转 PDF」卡片指向 `/zh/markdown-to-pdf`。
  - 在「Markdown 语法」文档页中插入「去 Markdown 在线预览编辑器」按钮，指向首页编辑器锚点。
- 提供 **示例模板** 和 **Markdown 教程**，吸引搜索「markdown 语法」「markdown 表格」的用户，并引导使用在线编辑器。

### 4. 性能与可访问性

- 使用 Astro 的 **静态预渲染 + 部分 React 交互**，减少 JS 体积。
- Tailwind 按需构建，启用 `content` 配置清理未用样式。
- 图片使用现代格式（WebP）和懒加载。
- 遵守可访问性规范：
  - 为图标与按钮提供 `aria-label`。
  - 明确的对比度（在绿色、淡绿、淡红搭配下保证 WCAG 对比度）。

---

## 五、前端技术架构

### 1. 框架与目录结构（建议）

使用 Astro 作为主框架，React 组件作为 UI、编辑器和工具逻辑。

**参考结构**：
```
src/
├── pages/          # 多语言页面入口（如 index.astro, zh/markdown-to-pdf.astro）
├── components/     # 通用组件，如 MarkdownEditor.tsx, LanguageSwitcher.tsx
├── layouts/        # 主布局 BaseLayout.astro，统一 <head>、导航栏、页脚
├── i18n/           # 多语言 JSON 文案文件
└── styles/         # Tailwind 配置、主题变量等
```

### 2. UI 设计风格

#### 主色
- **深绿**（主按钮、主链接）
- **淡绿**（背景块、标签）
- **淡红**（警示信息、删除按钮、小面积点缀）

#### 布局
- **顶部导航**：Logo + 「Markdown 在线预览」「Markdown 转 PDF」「Docs」「Language」。
- **主区域**：响应式双栏，移动设备时切换为上下布局。

#### 图标
使用 **Lucide** 图标库，如 `FileText`, `Eye`, `FileOutput`, `Languages`, `Moon`, `Sun` 等。

#### 交互细节
- 导出按钮区域以图标 + 文案呈现：  
  - `Markdown → PDF` · `Markdown → Word` · `Markdown → HTML` · `Markdown → JPG/PNG`。
- 提示用户该工具为「纯前端 / 无需登录 / 数据仅保留在本地」。

---

## 六、国际化文案要点示例

- **中文（简体）**: 使用"Markdown 在线预览""Markdown 在线编辑器""Markdown 转 PDF/Word/HTML/图片"等词汇。
- **English**: 重点使用 "online markdown editor", "markdown live preview", "markdown to pdf/word/html/image"。
- **日本語**: 例如「Markdown オンラインプレビュー」「Markdown エディタ」「Markdown を PDF/Word/HTML/画像に変換」。
- **한국어**: 例如「마크다운 온라인 프리뷰」「마크다운 편집기」「Markdown PDF/Word/HTML/이미지 변환」。

所有语言都在标题、说明文字、按钮文案中自然出现对应关键词，同时保持语义通顺。

---

## 七、品牌与联系信息展示

在页脚统一展示：
- **文本**：`© Markdown Online`  
- **链接**：
  - 主页: [oumashu.top](https://oumashu.top)
  - Email: wanghongxiang23@gmail.com
  - X/Twitter: @Rollkey4

在「关于 / About」页面进一步介绍项目、开源协议（如有）、隐私说明（强调纯前端、不上传文档内容）。

---

## 八、后续扩展方向（可选）

- 支持自定义导出模板（论文、博客、技术文档风格）。
- 支持将 Markdown 同步保存到 GitHub Gist 或本地文件（仍以用户主动操作为前提）。
- 添加浏览器插件入口，直接在任意页面打开小窗 Markdown 编辑器。

---

## 技术栈总结

- **框架**: Astro (静态站点生成 + 部分水合)
- **UI 库**: React
- **样式**: Tailwind CSS
- **图标**: Lucide
- **多语言**: Astro i18n 路由 + JSON 文案
- **SEO**: 静态 HTML、结构化数据、sitemap、多语言 hreflang

---

以上文档作为项目 README 与产品需求说明的综合版本，并为 SEO 规划页面结构与文案提供基础。

