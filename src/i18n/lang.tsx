import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'zh';
export interface Localized {
  en: string;
  zh: string;
}
/** A string that may be plain (same in both languages) or localized. */
export type L = string | Localized;

export function pick(lang: Lang, v: L | undefined | null): string {
  if (v == null) return '';
  return typeof v === 'string' ? v : v[lang];
}

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
  toggle: () => {},
});

function initialLang(): Lang {
  try {
    const stored = localStorage.getItem('lang');
    if (stored === 'en' || stored === 'zh') return stored;
  } catch {
    /* ignore */
  }
  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('zh')) {
    return 'zh';
  }
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang);

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }, [lang]);

  const toggle = () => setLang((prev) => (prev === 'en' ? 'zh' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

/** Returns a translator `t(localized)` bound to the current language. */
export function useT() {
  const { lang } = useLang();
  return (v: L | undefined | null) => pick(lang, v);
}

/** UI chrome strings. */
export const ui = {
  experience: { en: 'Experience', zh: '工作经历' },
  experienceSub: { en: 'Agents · evaluation infra · synthetic data.', zh: '智能体 · 评测基础设施 · 合成数据' },
  selectedWork: { en: 'Selected Work', zh: '精选项目' },
  viewAllProjects: { en: 'View All Projects', zh: '查看全部项目' },
  writing: { en: 'Writing', zh: '文章' },
  categories: { en: 'Categories:', zh: '分类：' },
  tags: { en: 'Tags:', zh: '标签：' },
  viewAllArticles: { en: 'View All Articles', zh: '查看全部文章' },
  noArticles: { en: 'No articles found matching your criteria', zh: '没有符合条件的文章' },
  education: { en: 'Education', zh: '教育经历' },
  skillsInterests: { en: 'Skills & Interests', zh: '技能与兴趣' },
  beyondWork: { en: 'Beyond Work', zh: '工作之外' },
  runningFor: { en: 'Running for', zh: '已运行' },
  days: { en: 'days', zh: '天' },
  rights: { en: 'All rights reserved.', zh: '保留所有权利。' },
  inspiredBy: { en: 'Inspired by', zh: '灵感来自' },
  postsTitle: { en: 'Posts', zh: '文章' },
  postsSub: { en: 'Writing about evaluation, agents, and the occasional rabbit hole.', zh: '关于评测、智能体，以及偶尔的技术深坑。' },
  projectsTitle: { en: 'Projects', zh: '项目' },
  projectsSub: { en: 'A collection of my work and experiments.', zh: '我的作品与实验集合。' },
  opticsTitle: { en: 'Optics', zh: '光影' },
  opticsSub: { en: 'Capturing light in the Dark Forest. 35mm & Digital.', zh: '在黑暗森林中捕捉光。35mm 与数码。' },
  articleNotFound: { en: 'Article Not Found', zh: '文章未找到' },
  toc: { en: 'Contents', zh: '目录' },
  tocEmpty: { en: 'No headings', zh: '暂无目录' },
} satisfies Record<string, Localized>;

/** Post category display labels (category stays an English key for filtering). */
export const categoryLabels: Record<string, Localized> = {
  'AI Evaluation': { en: 'AI Evaluation', zh: 'AI 评测' },
  Web3: { en: 'Web3', zh: 'Web3' },
  MEV: { en: 'MEV', zh: 'MEV' },
};

/** Optics filter display labels (filter value stays an English key). */
export const filterLabels: Record<string, Localized> = {
  All: { en: 'All', zh: '全部' },
  Street: { en: 'Street', zh: '街拍' },
  Urban: { en: 'Urban', zh: '城市' },
  Monochrome: { en: 'Monochrome', zh: '黑白' },
  Nature: { en: 'Nature', zh: '自然' },
};
