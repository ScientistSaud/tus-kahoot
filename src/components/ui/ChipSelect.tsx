import React from 'react';
import { cn } from '@/lib/utils';

interface ChipSelectProps {
  options: string[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
  className?: string;
}

export function ChipSelect({
  options,
  selectedOptions,
  onChange,
  className,
}: ChipSelectProps) {
  const toggleOption = (opt: string) => {
    if (selectedOptions.includes(opt)) {
      onChange(selectedOptions.filter((o) => o !== opt));
    } else {
      onChange([...selectedOptions, opt]);
    }
  };

  return (
    <div
      className={cn(
        'flex flex-wrap gap-2 max-h-48 overflow-y-auto p-1',
        className
      )}
    >
      {options.map((opt) => {
        const isSelected = selectedOptions.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() => toggleOption(opt)}
            className={cn(
              'px-3 py-1.5 text-sm rounded-[var(--radius-chip)] border transition-colors',
              isSelected
                ? 'bg-blue-600 border-blue-600 text-white'
                : 'border-[var(--color-surface)] bg-transparent text-[var(--color-body)] hover:border-[var(--color-muted)]'
            )}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
