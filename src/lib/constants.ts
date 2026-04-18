export const SECTIONS = [
  { id: 'all', label: 'All' },
  { id: 'basic_sciences', label: 'Basic Sciences' },
  { id: 'clinical_sciences', label: 'Clinical Sciences' },
] as const;

export const ANSWER_COLORS = {
  A: 'bg-[var(--color-answer-a)]',
  B: 'bg-[var(--color-answer-b)]',
  C: 'bg-[var(--color-answer-c)]',
  D: 'bg-[var(--color-answer-d)]',
  E: 'bg-[var(--color-answer-e)]',
} as const;

export const TIMER_DURATION_MS = 30000;
export const MAX_QUESTIONS = 120;
