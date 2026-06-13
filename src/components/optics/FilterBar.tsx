import { useT, filterLabels } from '../../i18n/lang';

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
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              selectedFilter === filter
                ? 'border-foreground bg-foreground text-background'
                : 'border-hairline text-muted-foreground hover:text-foreground'
            }`}
          >
            {t(filterLabels[filter] ?? { en: filter, zh: filter })}
          </button>
        ))}
      </div>
    </div>
  );
}
