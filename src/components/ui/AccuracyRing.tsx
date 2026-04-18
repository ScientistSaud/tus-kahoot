import React from 'react';

interface AccuracyRingProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
}

export function AccuracyRing({
  percentage,
  size = 60,
  strokeWidth = 6,
}: AccuracyRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  let colorClass = 'text-[var(--color-correct-banner)]'; // green
  if (percentage < 50) colorClass = 'text-[var(--color-wrong-banner)]'; // red
  else if (percentage < 75) colorClass = 'text-[var(--color-timeout-banner)]'; // orange

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
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
          className={`transition-all duration-1000 ease-out ${colorClass}`}
        />
      </svg>
      <div className="absolute font-bold text-sm">
        {Math.round(percentage)}%
      </div>
    </div>
  );
}
