# Markdown Online – Markdown Live Preview & Converter

A pure frontend, no-login-required online Markdown tool website that supports **Markdown live preview, editing, and conversion to HTML/PDF/JPG/PNG/Word**.

Built with **Astro + React + Tailwind CSS + Lucide Icons**, featuring a minimalist UI with green, light green, and light red color scheme. Supports **Chinese/English/Japanese/Korean** multi-language switching, focusing on improving **Google SEO** performance through high-quality content.

## Features

- ✅ **Markdown Live Preview** - Real-time preview with syntax highlighting
- ✅ **Multiple Export Formats** - Export to HTML, PDF, Word, JPG/PNG
- ✅ **Pure Frontend** - No server uploads, data stays in browser
- ✅ **No Login Required** - Open and use immediately
- ✅ **Multi-language Support** - Chinese, English, Japanese, Korean
- ✅ **Dark Mode** - Eye-friendly dark theme
- ✅ **Auto Save** - Content automatically saved to localStorage
- ✅ **SEO Optimized** - Multi-language pages with structured data
- ✅ **Responsive Design** - Works on mobile, tablet, and desktop

## Tech Stack

- **Framework**: Astro (static site generation + partial hydration)
- **UI Library**: React
- **Styling**: Tailwind CSS
- **Icons**: Lucide
- **Markdown Parser**: react-markdown, remark-gfm, rehype-highlight
- **Export**: jspdf, html2canvas, docx, file-saver
- **i18n**: Astro i18n routing + JSON translations
- **SEO**: Static HTML, structured data, sitemap, multi-language hreflang

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure

```
src/
├── pages/              # Multi-language page entries
│   ├── index.astro    # English homepage
│   └── zh/            # Chinese pages
│       ├── index.astro
│       ├── markdown-to-pdf.astro
│       ├── markdown-to-word.astro
│       ├── markdown-online-preview.astro
│       └── markdown-syntax-guide.astro
├── components/         # Reusable components
│   ├── Header.astro
│   ├── Footer.astro
│   └── MarkdownEditor.tsx
├── layouts/           # Page layouts
│   └── BaseLayout.astro
├── i18n/              # Internationalization
│   ├── locales/
│   │   ├── en.json
│   │   ├── zh.json
│   │   ├── ja.json
│   │   └── ko.json
│   └── utils.ts
├── utils/             # Utility functions
│   └── exportUtils.ts
└── styles/            # Global styles
    └── global.css
```

## SEO Strategy

### Target Keywords

- **English**: markdown online preview, markdown editor, markdown to pdf, markdown to word
- **Chinese**: markdown在线预览, markdown编辑器, markdown转pdf, markdown转word
- **Japanese**: markdown オンラインプレビュー, markdown エディタ
- **Korean**: 마크다운 온라인 프리뷰, 마크다운 편집기

### SEO Features

- Multi-language pages with hreflang tags
- Structured data (JSON-LD) for WebApplication
- Semantic HTML with proper heading hierarchy
- Optimized meta titles and descriptions
- Auto-generated sitemap.xml
- Fast loading with Astro's static generation
- Mobile-friendly responsive design

## Deployment

This project can be deployed to any static hosting platform:

- **Vercel**: `vercel deploy`
- **Netlify**: Connect GitHub repository
- **Cloudflare Pages**: Connect repository
- **GitHub Pages**: Build and push to gh-pages branch

## Contact

- **Website**: [oumashu.top](https://oumashu.top)
- **Email**: wanghongxiang23@gmail.com
- **X/Twitter**: [@Rollkey4](https://x.com/Rollkey4)

## License

MIT License - feel free to use for your own projects.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ for the Markdown community

