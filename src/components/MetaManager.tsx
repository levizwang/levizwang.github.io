import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { blogPosts } from '../data/posts';
import { useT } from '../i18n/lang';

const DEFAULT_TITLE = 'Levi Wang — Evaluation science & agentic systems for frontier AI';
const DEFAULT_DESC =
  typeof document !== 'undefined'
    ? (document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '')
    : '';

/** Writes document.title and meta description per route (posts get their own). */
export function MetaManager() {
  const { pathname } = useLocation();
  const t = useT();

  useEffect(() => {
    let title = DEFAULT_TITLE;
    let desc = DEFAULT_DESC;

    if (pathname.startsWith('/projects')) {
      title = `${t({ en: 'Projects', zh: '项目' })} — Levi Wang`;
    } else if (pathname === '/posts') {
      title = `${t({ en: 'Writing', zh: '文章' })} — Levi Wang`;
    } else if (pathname.startsWith('/post/')) {
      const post = blogPosts.find((p) => p.id === pathname.slice('/post/'.length));
      if (post) {
        title = `${t(post.title)} — Levi Wang`;
        desc = t(post.excerpt);
      }
    } else if (pathname.startsWith('/optics')) {
      title = `${t({ en: 'Optics', zh: '光影' })} — Levi Wang`;
    } else if (pathname.startsWith('/cv')) {
      title = `${t({ en: 'CV', zh: '简历' })} — Levi Wang`;
    }

    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', desc);
  }, [pathname, t]);

  return null;
}
