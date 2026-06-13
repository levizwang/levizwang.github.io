import { useT, filterLabels } from '../../i18n/lang';

interface FilterBarProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = ['All', 'Nature', 'Urban', 'Street'];

export function FilterBar({ selectedFilter, onFilterChange }: FilterBarProps) {
  const t = useT();
  return (
    <div className="px-6 pb-12">
      <div className="max-w-[1600px] mx-auto flex gap-3 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              selectedFilter === filter
                ? 'bg-neutral-900 text-white dark:bg-[#CCFF00] dark:text-black border border-transparent'
                : 'bg-transparent border border-gray-300 dark:border-[#333333] text-gray-600 dark:text-gray-400 dark:hover:border-[#CCFF00] dark:hover:text-[#CCFF00] dark:active:bg-[#CCFF00] dark:active:text-black'
            }`}
          >
            {t(filterLabels[filter] ?? { en: filter, zh: filter })}
          </button>
        ))}
      </div>
    </div>
  );
}
