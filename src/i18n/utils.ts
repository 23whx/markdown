import en from './locales/en.json';
import zh from './locales/zh.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';

export const languages = {
  en: 'English',
  zh: '简体中文',
  ja: '日本語',
  ko: '한국어',
};

export const defaultLang = 'en';

export const translations = {
  en,
  zh,
  ja,
  ko,
};

export type Language = keyof typeof languages;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = translations[lang];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
}

export function getLocalizedPath(lang: Language, path: string = ''): string {
  if (lang === defaultLang) {
    return path || '/';
  }
  return `/${lang}${path}`;
}


export function buildEditorTranslations(t: (key: string) => string) {
  return {
    placeholder: t('editor.placeholder'),
    wordCount: t('editor.wordCount'),
    charCount: t('editor.charCount'),
    readingTime: t('editor.readingTime'),
    export: t('editor.export'),
    clear: t('editor.clear'),
    copy: t('editor.copy'),
    exportHtml: t('export.html'),
    exportPdf: t('export.pdf'),
    exportWord: t('export.word'),
    exportJpg: t('export.jpg'),
    exportPng: t('export.png'),
    exportSuccess: t('export.success'),
    exportError: t('export.error'),
  };
}

