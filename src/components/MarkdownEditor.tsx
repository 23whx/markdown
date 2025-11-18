import React, { useState, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import { 
  FileText, 
  Eye, 
  Download, 
  Copy, 
  Trash2, 
  FileCode, 
  FileType,
  Image as ImageIcon,
  FileSpreadsheet
} from 'lucide-react';
import { exportToHTML, exportToPDF, exportToWord, exportToImage } from '../utils/exportUtils';
import 'highlight.js/styles/github-dark.css';

interface MarkdownEditorProps {
  translations: {
    placeholder: string;
    wordCount: string;
    charCount: string;
    readingTime: string;
    export: string;
    clear: string;
    copy: string;
    exportHtml: string;
    exportPdf: string;
    exportWord: string;
    exportJpg: string;
    exportPng: string;
    exportSuccess: string;
    exportError: string;
  };
}

const defaultMarkdown = `# Welcome to Markdown Online Editor

## Features

- **Real-time Preview**: See your markdown rendered as you type
- **Export Options**: Export to PDF, Word, HTML, or Images
- **Syntax Highlighting**: Code blocks with syntax highlighting
- **Tables Support**: Create beautiful tables
- **Task Lists**: Manage your todos

## Code Example

\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}
greet('World');
\`\`\`

## Table Example

| Feature | Status |
|---------|--------|
| Live Preview | ✅ |
| Export to PDF | ✅ |
| Export to Word | ✅ |
| Dark Mode | ✅ |

## Task List

- [x] Create markdown editor
- [x] Add live preview
- [ ] Add more templates
- [ ] Add collaboration features

> **Note**: This is a pure frontend application. Your data stays in your browser and is never uploaded to any server.
`;

export default function MarkdownEditor({ translations }: MarkdownEditorProps) {
  const [markdown, setMarkdown] = useState('');
  const [showPreview, setShowPreview] = useState(true);

  useEffect(() => {
    // Load from localStorage
    const saved = localStorage.getItem('markdown-content');
    setMarkdown(saved || defaultMarkdown);
  }, []);

  useEffect(() => {
    // Auto-save to localStorage
    const timer = setTimeout(() => {
      localStorage.setItem('markdown-content', markdown);
    }, 500);
    return () => clearTimeout(timer);
  }, [markdown]);

  const stats = {
    words: markdown.trim().split(/\s+/).filter(Boolean).length,
    chars: markdown.length,
    readingTime: Math.ceil(markdown.trim().split(/\s+/).filter(Boolean).length / 200),
  };

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      alert(translations.exportSuccess);
    } catch (err) {
      alert(translations.exportError);
    }
  }, [markdown, translations]);

  const handleClear = useCallback(() => {
    if (confirm('Are you sure you want to clear all content?')) {
      setMarkdown('');
      localStorage.removeItem('markdown-content');
    }
  }, []);

  const handleExportHTML = useCallback(async () => {
    try {
      await exportToHTML(markdown);
      alert(translations.exportSuccess);
    } catch (err) {
      alert(translations.exportError);
    }
  }, [markdown, translations]);

  const handleExportPDF = useCallback(async () => {
    try {
      const previewElement = document.getElementById('markdown-preview');
      if (previewElement) {
        await exportToPDF(previewElement);
        alert(translations.exportSuccess);
      }
    } catch (err) {
      alert(translations.exportError);
    }
  }, [translations]);

  const handleExportWord = useCallback(async () => {
    try {
      await exportToWord(markdown);
      alert(translations.exportSuccess);
    } catch (err) {
      alert(translations.exportError);
    }
  }, [markdown, translations]);

  const handleExportImage = useCallback(async (format: 'png' | 'jpg') => {
    try {
      const previewElement = document.getElementById('markdown-preview');
      if (previewElement) {
        await exportToImage(previewElement, format);
        alert(translations.exportSuccess);
      }
    } catch (err) {
      alert(translations.exportError);
    }
  }, [translations]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Toolbar */}
      <div className="bg-white dark:bg-gray-800 rounded-t-lg border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Stats */}
          <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
            <span>{stats.words} {translations.wordCount}</span>
            <span>{stats.chars} {translations.charCount}</span>
            <span>{stats.readingTime} {translations.readingTime}</span>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="btn-secondary flex items-center space-x-2"
              title="Toggle Preview"
            >
              <Eye className="w-4 h-4" />
              <span className="hidden sm:inline">Preview</span>
            </button>
            
            <button
              onClick={handleCopy}
              className="btn-secondary flex items-center space-x-2"
              title={translations.copy}
            >
              <Copy className="w-4 h-4" />
              <span className="hidden sm:inline">{translations.copy}</span>
            </button>

            <div className="relative group">
              <button className="btn-primary flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>{translations.export}</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <button
                  onClick={handleExportHTML}
                  className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 first:rounded-t-lg"
                >
                  <FileCode className="w-4 h-4" />
                  <span>{translations.exportHtml}</span>
                </button>
                <button
                  onClick={handleExportPDF}
                  className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FileText className="w-4 h-4" />
                  <span>{translations.exportPdf}</span>
                </button>
                <button
                  onClick={handleExportWord}
                  className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>{translations.exportWord}</span>
                </button>
                <button
                  onClick={() => handleExportImage('png')}
                  className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <ImageIcon className="w-4 h-4" />
                  <span>{translations.exportPng}</span>
                </button>
                <button
                  onClick={() => handleExportImage('jpg')}
                  className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 last:rounded-b-lg"
                >
                  <ImageIcon className="w-4 h-4" />
                  <span>{translations.exportJpg}</span>
                </button>
              </div>
            </div>

            <button
              onClick={handleClear}
              className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 p-2"
              title={translations.clear}
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Editor and Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-x border-b border-gray-200 dark:border-gray-700 rounded-b-lg overflow-hidden">
        {/* Editor */}
        <div className={`${showPreview ? 'block' : 'hidden lg:block'}`}>
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder={translations.placeholder}
            className="w-full h-[600px] p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-mono text-sm resize-none focus:outline-none border-r border-gray-200 dark:border-gray-700"
          />
        </div>

        {/* Preview */}
        {showPreview && (
          <div
            id="markdown-preview"
            className="h-[600px] overflow-auto p-6 bg-white dark:bg-gray-900"
          >
            <div className="markdown-preview prose prose-sm sm:prose lg:prose-lg dark:prose-invert max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight, rehypeRaw]}
              >
                {markdown}
              </ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

