import { ImageWithFallback } from './figma/ImageWithFallback';
import { SectionDivider } from './SectionDivider';
import { projects, type Project } from '../data/projects';
import { Link } from 'react-router-dom';

function ProjectThumb({ project }: { project: Project }) {
  if (project.image) {
    return (
      <ImageWithFallback
        src={project.image}
        alt={project.name}
        className="w-full h-auto rounded-lg aspect-[16/9] object-cover"
      />
    );
  }
  // Text placeholder for projects without a thumbnail.
  return (
    <span className="flex items-center justify-center w-full aspect-[16/9] rounded-lg border border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/40">
      <span className="font-mono text-2xl tracking-tight text-neutral-400 dark:text-neutral-600">
        {project.name.split(' ')[0]}
      </span>
    </span>
  );
}

function ProjectCardInner({ project }: { project: Project }) {
  return (
    <span className="relative z-30 block duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1">
      <span className="block w-full">
        <ProjectThumb project={project} />
      </span>
      <span className="block w-full px-1 mt-5 mb-1 sm:mt-3">
        <span className="flex items-center mb-0 tracking-tight text-neutral-900 dark:text-neutral-100">
          <span>{project.name}</span>
          {project.link && (
            <svg
              className="group-hover:translate-x-0 group-hover:translate-y-0 -rotate-45 translate-y-1 -translate-x-1 w-2.5 h-2.5 stroke-current ml-1 transition-all ease-in-out duration-200 transform"
              viewBox="0 0 13 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="none" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
          )}
        </span>
        {project.tag && (
          <span className="inline-block mt-1 font-mono text-[11px] text-neutral-500 dark:text-neutral-500">
            {project.tag}
          </span>
        )}
        <span className="block mt-1 text-neutral-600 dark:text-neutral-400 line-clamp-4">
          {project.description}
        </span>
      </span>
    </span>
  );
}

export function ProjectGrid({ limit, showViewAll = true }: { limit?: number; showViewAll?: boolean }) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  const cardClass =
    'relative flex flex-col items-stretch duration-300 ease-out p-7 sm:p-3 group rounded-2xl';
  const layers = (
    <>
      <span className="absolute inset-0 z-20 block w-full h-full duration-300 ease-out bg-transparent border border-transparent border-dashed group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:border group-hover:border-neutral-300 dark:group-hover:border-neutral-600 group-hover:border-dashed rounded-2xl group-hover:bg-white dark:group-hover:bg-neutral-800"></span>
      <span className="absolute inset-0 z-10 block w-full h-full duration-300 ease-out border border-dashed rounded-2xl border-neutral-300 dark:border-neutral-600 group-hover:translate-x-1 group-hover:translate-y-1"></span>
    </>
  );

  return (
    <>
      {showViewAll && <SectionDivider label="Projects" />}

      <section id="projects" className="max-w-4xl mx-auto px-7 lg:px-0">
        {showViewAll && (
          <h2 className="mb-1 text-2xl font-medium tracking-tight text-neutral-900 dark:text-neutral-100">
            Selected Work
          </h2>
        )}
        <div className="grid items-stretch w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-7">
          {displayedProjects.map((project) =>
            project.link ? (
              <a
                key={project.id}
                href={project.link}
                target={project.link.startsWith('http') ? '_blank' : undefined}
                rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={cardClass}
              >
                {layers}
                <ProjectCardInner project={project} />
              </a>
            ) : (
              <div key={project.id} className={cardClass}>
                {layers}
                <ProjectCardInner project={project} />
              </div>
            )
          )}
        </div>

        {showViewAll && (
          <div className="flex items-center justify-center w-full py-5">
            <Link
              to="/projects"
              className="inline-flex w-auto px-4 py-2 mt-5 duration-300 ease-out border rounded-full bg-transparent border-gray-300 dark:border-[#333333] text-gray-600 dark:text-gray-400 hover:text-neutral-900 hover:border-neutral-900 dark:hover:text-[#CCFF00] dark:hover:border-[#CCFF00] active:text-[#CCFF00] active:border-[#CCFF00] active:bg-transparent"
            >
              View All Projects
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
