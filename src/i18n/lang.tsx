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

/** Look up a display label, falling back to the raw key in both languages. */
export function labelFor(map: Record<string, Localized>, key: string): L {
  return map[key] ?? { en: key, zh: key };
}

/** UI chrome strings. */
export const ui = {
  viewWork: { en: 'Selected work', zh: '精选项目' },
  readWriting: { en: 'Read writing', zh: '阅读文章' },
  readDeepDive: { en: 'Read the deep dive', zh: '阅读深度文章' },
  atScale: { en: 'At scale', zh: '规模' },
  atScaleTitle: {
    en: 'Evaluation and synthetic-data systems, run at production scale.',
    zh: '在生产规模上运行的评测与合成数据系统。',
  },
  buildEyebrow: { en: 'What I build', zh: '我做什么' },
  buildTitle: { en: 'Four problems I keep coming back to.', zh: '我反复回到的四类问题。' },
  expEyebrow: { en: 'Career', zh: '履历' },
  workEyebrow: { en: 'Work', zh: '项目' },
  writingEyebrow: { en: 'Writing', zh: '文章' },
  eduEyebrow: { en: 'Background', zh: '背景' },
  experience: { en: 'Experience', zh: '工作经历' },
  experienceSub: { en: 'Agents · evaluation infra · synthetic data.', zh: 'Agent · evaluation 基础设施 · 合成数据' },
  selectedWork: { en: 'Selected Work', zh: '精选项目' },
  viewAllProjects: { en: 'View All Projects', zh: '查看全部项目' },
  writing: { en: 'Writing', zh: '文章' },
  viewAllArticles: { en: 'View All Articles', zh: '查看全部文章' },
  noArticles: { en: 'No articles found matching your criteria', zh: '没有符合条件的文章' },
  education: { en: 'Education', zh: '教育经历' },
  skillsInterests: { en: 'Skills & Interests', zh: '技能与兴趣' },
  beyondWork: { en: 'Beyond Work', zh: '工作之外' },
  runningFor: { en: 'Running for', zh: '已运行' },
  days: { en: 'days', zh: '天' },
  inspiredBy: { en: 'Inspired by', zh: '灵感来自' },
  projectsTitle: { en: 'Projects', zh: '项目' },
  opticsTitle: { en: 'Optics', zh: '光影' },
  opticsSub: { en: 'Capturing light in the Dark Forest. 35mm & Digital.', zh: '在黑暗森林中捕捉光。35mm 与数码。' },
  articleNotFound: { en: 'Article Not Found', zh: '文章未找到' },
  toc: { en: 'Contents', zh: '目录' },
  tocEmpty: { en: 'No headings', zh: '暂无目录' },
  loadMore: { en: 'Load More', zh: '加载更多' },
  closeLightbox: { en: 'Close', zh: '关闭' },
  techSpecs: { en: 'Technical Specifications', zh: '技术参数' },
  story: { en: 'The Story', zh: '拍摄手记' },
  camera: { en: 'Camera', zh: '机身' },
  lens: { en: 'Lens', zh: '镜头' },
  iso: { en: 'ISO', zh: 'ISO' },
  aperture: { en: 'Aperture', zh: '光圈' },
  shutter: { en: 'Shutter', zh: '快门' },
} satisfies Record<string, Localized>;

/** Post category display labels (category stays an English key for filtering). */
export const categoryLabels: Record<string, Localized> = {
  'AI Evaluation': { en: 'AI Evaluation', zh: 'AI 评测' },
  Web3: { en: 'Web3', zh: 'Web3' },
};

/** Optics filter display labels (filter value stays an English key). */
export const filterLabels: Record<string, Localized> = {
  All: { en: 'All', zh: '全部' },
  Street: { en: 'Street', zh: '街拍' },
  Urban: { en: 'Urban', zh: '城市' },
  Nature: { en: 'Nature', zh: '自然' },
};
