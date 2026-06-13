import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SectionDivider } from './SectionDivider';
import { blogPosts } from '../data/posts';

export function BlogList({ limit, showViewAll = true }: { limit?: number; showViewAll?: boolean }) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // 计算分类统计
  const categories = useMemo(() => {
    const stats: Record<string, number> = {};
    blogPosts.forEach(post => {
      stats[post.category] = (stats[post.category] || 0) + 1;
    });
    return Object.entries(stats).sort((a, b) => b[1] - a[1]);
  }, []);

  // 计算标签统计
  const tags = useMemo(() => {
    const stats: Record<string, number> = {};
    blogPosts.forEach(post => {
      post.tags?.forEach(tag => {
        stats[tag] = (stats[tag] || 0) + 1;
      });
    });
    return Object.entries(stats).sort((a, b) => b[1] - a[1]);
  }, []);

  // 筛选文章
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      if (selectedCategory && post.category !== selectedCategory) return false;
      if (selectedTag && !post.tags?.includes(selectedTag)) return false;
      return true;
    });
  }, [selectedCategory, selectedTag]);

  const displayedPosts = useMemo(() => {
    if (!limit) return filteredPosts;
    return filteredPosts.slice(0, limit);
  }, [filteredPosts, limit]);

  const handleCategoryClick = (e: React.MouseEvent, category: string) => {
    e.preventDefault();
    e.stopPropagation(); // 防止冒泡
    setSelectedCategory(prev => prev === category ? null : category);
    setSelectedTag(null); // 切换分类时重置标签，可选
  };

  const handleTagClick = (e: React.MouseEvent, tag: string) => {
    e.preventDefault();
    e.stopPropagation(); // 防止冒泡
    setSelectedTag(prev => prev === tag ? null : tag);
  };

  const handlePostClick = (id: string) => {
    navigate(`/post/${id}`);
  };

  return (
    <>
      {showViewAll && <SectionDivider label="Writing" />}

      <section id="articles" className="max-w-4xl mx-auto px-7 lg:px-0">
        {showViewAll && (
          <h2 className="mb-3 text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
            Writing
          </h2>
        )}
        <p className="mb-2 mt-2 text-neutral-600 dark:text-neutral-400">
          Categories:{' '}
          {categories.map(([category, count], index) => (
            <span key={category}>
              {index > 0 && ', '}
              <button
                onClick={(e) => handleCategoryClick(e, category)}
                className={`hover:underline decoration-dashed underline-offset-4 ${
                  selectedCategory === category ? 'text-black dark:text-white font-bold underline' : ''
                }`}
              >
                {category} ({count})
              </button>
            </span>
          ))}
        </p>
        
        <p className="mb-6 text-neutral-600 dark:text-neutral-400">
          Tags:{' '}
          {tags.map(([tag, count], index) => (
            <span key={tag}>
              {index > 0 && ', '}
              <button
                onClick={(e) => handleTagClick(e, tag)}
                className={`hover:underline decoration-dashed underline-offset-4 ${
                  selectedTag === tag ? 'text-black dark:text-white font-bold underline' : ''
                }`}
              >
                #{tag} ({count})
              </button>
            </span>
          ))}
        </p>

        <div className="w-full max-w-4xl mx-auto my-7 xl:px-0">
          <div className="flex flex-col items-start justify-start md:flex-row md:space-x-7">
            <div className="w-full space-y-7">
              {displayedPosts.length > 0 ? (
                displayedPosts.map((post) => (
                  <article
                    key={post.id}
                    className="relative border border-transparent border-dashed cursor-pointer px-6 py-5 md:p-7 group rounded-2xl"
                    tabIndex={0}
                    onClick={() => handlePostClick(post.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handlePostClick(post.id);
                      }
                    }}
                  >
                    <span className="absolute inset-0 z-20 w-full h-full duration-300 ease-out bg-white border border-dashed dark:bg-transparent dark:group-hover:bg-neutral-800 rounded-2xl border-neutral-300 dark:border-neutral-600 group-hover:-translate-x-1 group-hover:-translate-y-1"></span>
                    <span className="absolute inset-0 z-10 w-full h-full duration-300 ease-out border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-600 group-hover:translate-x-1 group-hover:translate-y-1"></span>
                    
                    <div className="flex relative z-30 duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1">
                      <div className="flex-1">
                        <h3 className="flex items-center mb-3">
                          <Link 
                            to={`/post/${post.id}`}
                            onClick={(e) => e.stopPropagation()} // 防止触发 article 的 onClick
                            className="leading-tight tracking-tight dark:text-neutral-100 hover:underline decoration-dashed underline-offset-4"
                          >
                            {post.title}
                          </Link>
                          <svg
                            className="group-hover:translate-x-0 flex-shrink-0 translate-y-0.5 -translate-x-1 w-2.5 h-2.5 stroke-current ml-1 transition-all ease-in-out duration-200 transform"
                            viewBox="0 0 13 15"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              stroke="none"
                              strokeWidth="1"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <g stroke="currentColor" strokeWidth="2.4">
                                <polyline
                                  className="transition-all duration-200 ease-out opacity-0 delay-0 group-hover:opacity-100"
                                  points="5.33333333 0 10.8333333 5.5 5.33333333 11"
                                />
                                <line
                                  className="transition-all duration-200 ease-out transform -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                                  x1="10.8333333"
                                  y1="5.5"
                                  x2="0.833333333"
                                  y2="5.16666667"
                                />
                              </g>
                            </g>
                          </svg>
                        </h3>
                        
                        <p className="text-neutral-600 dark:text-neutral-400 line-clamp-3 break-all">
                          {post.excerpt}
                        </p>
                        
                        <div className="mt-2.5 text-neutral-800 dark:text-neutral-300">
                          {post.date} ·{' '}
                          <button 
                            onClick={(e) => handleCategoryClick(e, post.category)}
                            className="hover:underline decoration-dashed underline-offset-4"
                          >
                            {post.category}
                          </button>
                          {post.tags && (
                            <>
                              {' · '}
                              <span className="inline-flex flex-wrap gap-1">
                                {post.tags.map((tag) => (
                                  <button
                                    key={tag}
                                    onClick={(e) => handleTagClick(e, tag)}
                                    className="hover:underline decoration-dashed underline-offset-4"
                                  >
                                    #{tag}
                                  </button>
                                ))}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                      
                      {post.image && (
                        <div className="hidden ml-2 size-32 md:block md:ml-7">
                          <ImageWithFallback
                            src={post.image}
                            alt={post.title}
                            className="aspect-square object-cover rounded-xl"
                          />
                        </div>
                      )}
                    </div>
                  </article>
                ))
              ) : (
                <div className="text-center py-10 text-neutral-500">
                  No articles found matching your criteria
                </div>
              )}
            </div>
          </div>
        </div>

        {showViewAll && (
          <div className="flex items-center justify-center w-full py-5">
            <Link
              to="/posts"
              className="inline-flex w-auto px-4 py-2 mt-5 duration-300 ease-out border rounded-full bg-transparent border-gray-300 dark:border-[#333333] text-gray-600 dark:text-gray-400 hover:text-neutral-900 hover:border-neutral-900 dark:hover:text-[#CCFF00] dark:hover:border-[#CCFF00] active:text-[#CCFF00] active:border-[#CCFF00] active:bg-transparent"
            >
              View All Articles
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
