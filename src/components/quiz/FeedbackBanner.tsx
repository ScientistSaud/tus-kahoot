import React from 'react';

interface FeedbackBannerProps {
  status: 'correct' | 'wrong' | 'timeout' | null;
  pointsAdded: number;
  correctAnswerText: string;
}

export function FeedbackBanner({ status, pointsAdded, correctAnswerText }: FeedbackBannerProps) {
  if (!status) return null;

  let bgColor = 'bg-[var(--color-correct-banner)]';
  let title = 'Correct!';
  let subtitle = `+${pointsAdded} pts`;

  if (status === 'wrong') {
    bgColor = 'bg-[var(--color-wrong-banner)]';
    title = 'Wrong!';
    subtitle = `Correct answer: ${correctAnswerText}`;
  } else if (status === 'timeout') {
    bgColor = 'bg-[var(--color-timeout-banner)]';
    title = "Time's up!";
    subtitle = `Correct answer: ${correctAnswerText}`;
  }

  return (
    <div className={`fixed left-0 top-0 z-50 flex w-full animate-in slide-in-from-top flex-col items-center justify-center p-4 text-white shadow-lg ${bgColor}`}>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-1 font-medium">{subtitle}</p>
    </div>
  );
}
