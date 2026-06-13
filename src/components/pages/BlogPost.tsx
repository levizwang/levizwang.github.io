import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../../data/posts';
import { SectionDivider } from '../SectionDivider';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { PageLayout } from '../PageLayout';
import { useT, ui, categoryLabels } from '../../i18n/lang';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-yaml';

export function BlogPost() {
  const t = useT();
  const catLabel = (c: string) => t(categoryLabels[c] ?? { en: c, zh: c });
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);
  const rawContent = post?.content ? t(post.content) : '';

  const { contentHtml, tocItems } = useMemo(() => {
    if (!rawContent || typeof window === 'undefined') {
      return { contentHtml: rawContent, tocItems: [] as Array<{ id: string; text: string; level: number }> };
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(rawContent, 'text/html');
    // The page already renders post.title as the <h1>; drop the markdown's
    // leading H1 so the title doesn't appear twice.
    const leadingH1 = doc.body.querySelector('h1');
    if (leadingH1) leadingH1.remove();
    const headings = Array.from(doc.querySelectorAll('h2, h3'));
    const slugCounts = new Map<string, number>();

    const slugify = (value: string) => value
      .trim()
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

    const toc = headings.map((heading) => {
      const text = heading.textContent?.trim() ?? '';
      const baseId = slugify(text || 'section');
      const count = slugCounts.get(baseId) ?? 0;
      slugCounts.set(baseId, count + 1);
      const id = count === 0 ? baseId : `${baseId}-${count}`;
      heading.id = id;
      return { id, text, level: heading.tagName === 'H2' ? 2 : 3 };
    }).filter(item => item.text.length > 0);

    return { contentHtml: doc.body.innerHTML, tocItems: toc };
  }, [rawContent]);

  useEffect(() => {
    Prism.highlightAll();
  }, [contentHtml]);

  const handleTocClick = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (!post) {
    return (
      <PageLayout>
        <div className="min-h-[50vh] flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-4 dark:text-neutral-100">{t(ui.articleNotFound)}</h1>
          <Link to="/posts" className="text-blue-500 hover:underline">{t(ui.viewAllArticles)}</Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout className="max-w-[1240px] w-full">
      <div className="mx-auto w-full max-w-[1240px] px-2 lg:px-0">
        <div className="grid gap-10 lg:grid-cols-[240px_minmax(0,900px)]">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <div className="text-sm font-semibold text-neutral-800 dark:text-neutral-100 mb-3">{t(ui.toc)}</div>
              <nav className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                {tocItems.length > 0 ? (
                  tocItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleTocClick(item.id)}
                      className={`block w-full text-left hover:text-neutral-900 dark:hover:text-white ${item.level === 3 ? 'pl-3' : ''}`}
                    >
                      {item.text}
                    </button>
                  ))
                ) : (
                  <div className="text-neutral-500">{t(ui.tocEmpty)}</div>
                )}
              </nav>
            </div>
          </aside>

          <div className="min-w-0">
            <header className="max-w-[900px] w-full mb-8">
              <div className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
                {post.date} · {catLabel(post.category)}
                {post.tags && ` · #${post.tags.join(' #')}`}
              </div>
              <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl dark:text-neutral-100 leading-tight">
                {t(post.title)}
              </h1>
            </header>

            {post.image && (
              <div className="max-w-[900px] w-full mb-10">
                <ImageWithFallback
                  src={post.image}
                  alt={t(post.title)}
                  className="w-full h-auto rounded-xl shadow-sm"
                />
              </div>
            )}

            <article className="w-full max-w-[900px] prose prose-neutral dark:prose-invert lg:prose-lg px-2 lg:px-0 mb-20">
              <p className="lead">{t(post.excerpt)}</p>
              <hr />
              {contentHtml ? (
                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
              ) : (
                <div className="p-8 bg-neutral-100 dark:bg-neutral-900 rounded-lg text-center text-neutral-500 dark:text-neutral-400">
                  <p>Content loading...</p>
                  <p className="text-sm mt-2">(This is a generic template, actual content needs to be loaded)</p>
                </div>
              )}
            </article>

            <SectionDivider label="End" />

            <div className="flex justify-center mb-10">
              <Link to="/posts" className="px-6 py-2 border rounded-full transition-all bg-transparent border-gray-300 dark:border-[#333333] text-gray-600 dark:text-gray-400 dark:hover:text-[#CCFF00] dark:hover:border-[#CCFF00] dark:active:text-[#CCFF00] dark:active:border-[#CCFF00] dark:active:bg-transparent">
                {t(ui.viewAllArticles)}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
