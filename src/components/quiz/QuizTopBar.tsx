import React from 'react';
import { TimerRing } from './TimerRing';

interface QuizTopBarProps {
  currentIndex: number;
  totalCount: number;
  streak: number;
  timerEnabled: boolean;
  timeRemainingMs: number;
}

export function QuizTopBar({
  currentIndex,
  totalCount,
  streak,
  timerEnabled,
  timeRemainingMs,
}: QuizTopBarProps) {
  return (
    <div className="flex h-16 items-center justify-between px-6 bg-[var(--color-surface)] shadow">
      <div className="flex items-center gap-4">
        <span className="font-bold text-white">MedBank</span>
      </div>

      <div className="flex items-center gap-8">
        {streak >= 3 && (
          <div className="flex items-center gap-1 font-bold text-orange-500 animate-in slide-in-from-bottom">
            🔥 {streak}
          </div>
        )}
        
        {timerEnabled && (
          <TimerRing durationMs={30000} timeRemainingMs={timeRemainingMs} />
        )}
      </div>
      
      <div className="font-bold text-[var(--color-muted)]">
        Skip (Space)
      </div>
    </div>
  );
}
