import { BlogList } from '../BlogList';
import { PageLayout } from '../PageLayout';
import { useT, ui } from '../../i18n/lang';

export function Post() {
  const t = useT();
  return (
    <PageLayout>
      <div className="mb-8">
        <h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-4 text-gray-900 dark:text-gray-100">
          {t(ui.postsTitle)}
        </h1>
        <p className="font-mono text-sm md:text-base text-gray-500 dark:text-gray-400 tracking-wide">
          {t(ui.postsSub)}
        </p>
      </div>
      <BlogList showViewAll={false} />
    </PageLayout>
  );
}
