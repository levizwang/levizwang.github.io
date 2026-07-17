import { useT, filterLabels, labelFor } from '../../i18n/lang';

interface FilterBarProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = ['All', 'Nature', 'Urban', 'Street'];

export function FilterBar({ selectedFilter, onFilterChange }: FilterBarProps) {
  const t = useT();
  return (
    <div className="px-6 pb-10">
      <div className="max-w-content mx-auto flex gap-2.5 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors ${
              selectedFilter === filter
                ? 'border-foreground bg-foreground text-background'
                : 'border-line text-muted-foreground hover:text-foreground'
            }`}
          >
            {t(labelFor(filterLabels, filter))}
          </button>
        ))}
      </div>
    </div>
  );
}
