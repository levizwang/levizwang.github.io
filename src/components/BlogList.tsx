import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Reveal } from './Reveal';
import { SectionHeader } from './ui/SectionHeader';
import { PillLink } from './ui/PillLink';
import { blogPosts } from '../data/posts';
import { useT, ui, categoryLabels, labelFor } from '../i18n/lang';

export function BlogList({ limit, showViewAll = true }: { limit?: number; showViewAll?: boolean }) {
  const t = useT();
  const catLabel = (c: string) => t(labelFor(categoryLabels, c));
  const navigate = useNavigate();
  const [category, setCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const stats: Record<string, number> = {};
    blogPosts.forEach((p) => (stats[p.category] = (stats[p.category] || 0) + 1));
    return Object.entries(stats).sort((a, b) => b[1] - a[1]);
  }, []);

  const filtered = useMemo(
    () => blogPosts.filter((p) => !category || p.category === category),
    [category],
  );
  const shown = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section id="articles" className={`mx-auto max-w-content px-6 ${showViewAll ? 'mt-28 md:mt-36' : 'mt-8 md:mt-12'}`}>
      <Reveal>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionHeader
              eyebrow={ui.writingEyebrow}
              title={ui.writing}
              size={showViewAll ? 'section' : 'page'}
            />
          </div>
          {!showViewAll && (
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCategory(null)}
                className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                  category === null ? 'border-foreground bg-foreground text-background' : 'border-hairline text-muted-foreground hover:text-foreground'
                }`}
              >
                {t({ en: 'All', zh: '全部' })}
              </button>
              {categories.map(([c, n]) => (
                <button
                  key={c}
                  onClick={() => setCategory((prev) => (prev === c ? null : c))}
                  className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                    category === c ? 'border-foreground bg-foreground text-background' : 'border-hairline text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {catLabel(c)} <span className="opacity-50">{n}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </Reveal>

      <div className="mt-12 space-y-4">
        {shown.map((post, i) => (
          <Reveal key={post.id} delay={Math.min(i, 4) * 55}>
            <article
              onClick={() => navigate(`/post/${post.id}`)}
              className="surface lift group flex cursor-pointer items-center gap-6 p-5 md:p-6"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2.5 font-mono text-[11px] text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                  <span className="text-brand">{catLabel(post.category)}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight transition-colors group-hover:text-foreground">
                  <Link to={`/post/${post.id}`} onClick={(e) => e.stopPropagation()}>
                    {t(post.title)}
                  </Link>
                </h3>
                <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {t(post.excerpt)}
                </p>
              </div>
              {post.image && (
                <div className="hidden size-24 shrink-0 overflow-hidden rounded-xl md:block">
                  <ImageWithFallback src={post.image} alt={t(post.title)} className="h-full w-full object-cover" />
                </div>
              )}
              <span className="hidden shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 sm:block">
                →
              </span>
            </article>
          </Reveal>
        ))}
        {shown.length === 0 && (
          <div className="py-10 text-center text-muted-foreground">{t(ui.noArticles)}</div>
        )}
      </div>

      {showViewAll && (
        <div className="mt-12 flex justify-center">
          <PillLink to="/posts">
            {t(ui.viewAllArticles)} <span aria-hidden>→</span>
          </PillLink>
        </div>
      )}
    </section>
  );
}
