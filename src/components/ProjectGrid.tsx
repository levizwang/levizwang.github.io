import { ImageWithFallback } from './figma/ImageWithFallback';
import { Reveal } from './Reveal';
import { SectionHeader } from './ui/SectionHeader';
import { PillLink } from './ui/PillLink';
import { projects, type Project } from '../data/projects';
import { useT, ui } from '../i18n/lang';

function Thumb({ project, name }: { project: Project; name: string }) {
  if (project.image) {
    return (
      <ImageWithFallback
        src={project.image}
        alt={name}
        className="aspect-[16/10] w-full rounded-xl object-cover"
      />
    );
  }
  return (
    <span
      className="project-fallback-thumb flex aspect-[16/10] w-full items-center justify-center rounded-xl border border-hairline"
    >
      <span className="font-mono text-2xl tracking-tight text-muted-foreground">
        {name.split(' ')[0]}
      </span>
    </span>
  );
}

function Card({ project, expanded = false }: { project: Project; expanded?: boolean }) {
  const t = useT();
  const name = t(project.name);
  const external = project.link?.startsWith('http');
  const inner = (
    <>
      <Thumb project={project} name={name} />
      <div className="mt-5 flex items-baseline justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight">{name}</h3>
        {project.link && (
          <span className="shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            ↗
          </span>
        )}
      </div>
      {project.tag && (
        <span className="mt-1 block font-mono text-[11px] text-brand">{t(project.tag)}</span>
      )}
      <p className={`mt-2 text-sm leading-relaxed text-muted-foreground ${expanded ? '' : 'line-clamp-4'}`}>
        {t(project.description)}
      </p>
    </>
  );

  const cls = 'surface lift group flex h-full flex-col p-5';
  return project.link ? (
    <a href={project.link} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className={cls}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

export function ProjectGrid({ limit, showViewAll = true }: { limit?: number; showViewAll?: boolean }) {
  const t = useT();
  const shown = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className={`mx-auto max-w-content px-6 ${showViewAll ? 'mt-28 md:mt-36' : 'mt-8 md:mt-12'}`}>
      <Reveal>
        <SectionHeader
          eyebrow={ui.workEyebrow}
          title={showViewAll ? ui.selectedWork : ui.projectsTitle}
          size="page"
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((project, i) => (
          <Reveal key={project.id} delay={(i % 3) * 70}>
            <Card project={project} expanded={!showViewAll} />
          </Reveal>
        ))}
      </div>

      {showViewAll && (
        <div className="mt-12 flex justify-center">
          <PillLink to="/projects">
            {t(ui.viewAllProjects)} <span aria-hidden>→</span>
          </PillLink>
        </div>
      )}
    </section>
  );
}
