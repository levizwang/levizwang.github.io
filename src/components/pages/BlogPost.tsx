import { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../../data/posts';
import { ProjectFigure } from '../ui/figures';
import { ScrollProgress } from '../ui/ScrollProgress';
import { Rosette } from '../ui/Rosette';
import { PageLayout } from '../PageLayout';
import { PillLink } from '../ui/PillLink';
import { useT, ui, categoryLabels, labelFor } from '../../i18n/lang';
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
  const catLabel = (c: string) => t(labelFor(categoryLabels, c));
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

    // Keep CJK ideographs so all-Chinese headings still produce a real id
    // (\w is ASCII-only, which would otherwise collapse them to '').
    const slugify = (value: string) => value
      .trim()
      .toLowerCase()
      .replace(/[^\w一-鿿\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');

    const toc = headings.map((heading, index) => {
      const text = heading.textContent?.trim() ?? '';
      const baseId = slugify(text) || `section-${index}`;
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
    <PageLayout width="max-w-[1280px]">
      <ScrollProgress />
      <Link
        to="/posts"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <span aria-hidden>←</span> {t(ui.writing)}
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[190px_minmax(0,52rem)] lg:justify-center xl:grid-cols-[200px_minmax(0,54rem)] xl:gap-12">
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <div className="eyebrow mb-4">{t(ui.toc)}</div>
            <nav className="space-y-2.5 text-sm">
              {tocItems.length > 0 ? (
                tocItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleTocClick(item.id)}
                    className={`block w-full text-left leading-snug text-muted-foreground transition-colors hover:text-foreground ${
                      item.level === 3 ? 'pl-3.5 text-[0.8rem]' : ''
                    }`}
                  >
                    {item.text}
                  </button>
                ))
              ) : (
                <div className="text-muted-foreground">{t(ui.tocEmpty)}</div>
              )}
            </nav>
          </div>
        </aside>

        <div className="min-w-0">
          <header className="mb-9">
            <div className="flex items-center gap-2.5 font-mono text-xs text-muted-foreground">
              <span className="text-brand">{catLabel(post.category)}</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
              <span>{post.date}</span>
            </div>
            <h1 className="mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-balance md:text-[2.55rem]">
              {t(post.title)}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t(post.excerpt)}</p>
          </header>

          <div className="mx-auto mb-10 max-w-[46rem] overflow-hidden rounded-[2px] border border-line bg-surface">
            <ProjectFigure id={post.id} className="h-auto w-full" />
          </div>

          <article
            className="prose prose-neutral dark:prose-invert lg:prose-lg mb-16 max-w-none
              prose-headings:tracking-tight prose-headings:font-semibold
              prose-a:text-foreground prose-a:underline prose-a:decoration-brand prose-a:underline-offset-4
              prose-code:font-mono prose-code:text-[0.85em] prose-pre:rounded prose-pre:border prose-pre:border-line
              prose-img:rounded prose-th:text-left"
          >
            {contentHtml ? (
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            ) : (
              <p className="text-muted-foreground">…</p>
            )}
          </article>

          <div className="hr-line" />
          {/* end-of-sheet mark — the signing seal after the last line */}
          <div className="mt-10 flex flex-col items-center gap-5">
            <Rosette spin className="h-11 w-11 text-muted-foreground/50" />
            <PillLink to="/posts">
              {t(ui.viewAllArticles)} <span aria-hidden>→</span>
            </PillLink>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
