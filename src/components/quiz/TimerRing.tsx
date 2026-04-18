import React, { useEffect, useState } from 'react';

interface TimerRingProps {
  durationMs: number;
  timeRemainingMs: number;
}

export function TimerRing({ durationMs, timeRemainingMs }: TimerRingProps) {
  const size = 48;
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  
  const percentage = (timeRemainingMs / durationMs) * 100;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  let colorClass = 'text-[var(--color-correct-banner)]'; // green (>15s)
  if (timeRemainingMs <= 15000 && timeRemainingMs > 5000) {
    colorClass = 'text-[#eab308]'; // yellow
  } else if (timeRemainingMs <= 5000) {
    colorClass = 'text-[var(--color-wrong-banner)]'; // red
  }

  return (
    <div className="relative flex items-center justify-center font-bold" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="rotate-[-90deg]">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-[var(--color-surface)]"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className={`transition-all duration-100 linear ${colorClass}`}
        />
      </svg>
      <div className="absolute text-sm">
        {Math.ceil(timeRemainingMs / 1000)}
      </div>
    </div>
  );
}
