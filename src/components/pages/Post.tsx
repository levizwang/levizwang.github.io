import { CaseStudies } from '../CaseStudies';
import { BlogList } from '../BlogList';

export function Post() {
  return (
    <>
      <CaseStudies />
      <BlogList showViewAll={false} />
    </>
  );
}
