import { FilterType } from '../types';

interface Props {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  activeCount: number;
  hasCompleted: boolean;
  onClearCompleted: () => void;
}

const FILTERS: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'すべて' },
  { value: 'active', label: '未完了' },
  { value: 'completed', label: '完了' },
];

export function FilterBar({
  filter,
  onFilterChange,
  activeCount,
  hasCompleted,
  onClearCompleted,
}: Props) {
  return (
    <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
      <span className="text-sm text-gray-400 min-w-0">
        {activeCount > 0 ? (
          <>{activeCount}件残り</>
        ) : (
          <span className="text-blue-400">すべて完了！</span>
        )}
      </span>

      <div className="flex gap-1">
        {FILTERS.map(f => (
          <button
            key={f.value}
            onClick={() => onFilterChange(f.value)}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 ${
              filter === f.value
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <button
        onClick={onClearCompleted}
        disabled={!hasCompleted}
        className="text-xs text-gray-400 hover:text-red-500 transition-colors duration-150 disabled:opacity-0 disabled:pointer-events-none min-w-0"
      >
        完了をクリア
      </button>
    </div>
  );
}
