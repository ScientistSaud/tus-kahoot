import React from 'react';
import { cn } from '@/lib/utils';
import { ANSWER_COLORS } from '@/lib/constants';

interface Option {
  letter: 'A' | 'B' | 'C' | 'D' | 'E';
  text: string;
}

interface AnswerGridProps {
  options: Option[];
  selectedLetter: string | null;
  correctLetter: string | null;
  status: 'default' | 'selected' | 'revealed';
  onSelect: (letter: string) => void;
}

export function AnswerGrid({
  options,
  selectedLetter,
  correctLetter,
  status,
  onSelect,
}: AnswerGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {options.map((opt, idx) => {
        // Last item full width if odd (e.g. 5 options)
        const isOddLast = options.length % 2 !== 0 && idx === options.length - 1;
        const colSpanClass = isOddLast ? 'md:col-span-2' : '';
        
        const isSelected = selectedLetter === opt.letter;
        const isCorrect = correctLetter === opt.letter;
        
        let stateClasses = 'hover:brightness-110 active:scale-[0.98]';
        
        if (status === 'selected') {
          if (isSelected) {
            stateClasses = 'animate-pulse ring-4 ring-white shadow-xl';
          } else {
            stateClasses = 'opacity-50';
          }
        } else if (status === 'revealed') {
          if (isCorrect) {
            stateClasses = 'ring-4 ring-white shadow-[0_0_20px_rgba(255,255,255,0.5)] z-10';
          } else {
            stateClasses = 'opacity-30 grayscale';
          }
        }

        const colorClass = ANSWER_COLORS[opt.letter];

        return (
          <button
            key={opt.letter}
            onClick={() => status === 'default' && onSelect(opt.letter)}
            disabled={status !== 'default'}
            className={cn(
              'group relative flex min-h-[4rem] items-center rounded-[var(--radius-button)] shadow-md transition-all duration-300',
              colorClass,
              colSpanClass,
              stateClasses
            )}
          >
            <div className="flex h-full w-12 items-center justify-center bg-black/20 text-lg font-bold text-white rounded-l-[var(--radius-button)]">
              {opt.letter}
            </div>
            <div className="flex-1 p-4 text-left font-medium text-white shadow-sm">
              {opt.text}
            </div>
          </button>
        );
      })}
    </div>
  );
}
