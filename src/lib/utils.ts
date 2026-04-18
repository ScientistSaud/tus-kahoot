export function formatTopic(slug: string): string {
  return slug
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function calculateScore(timerOn: boolean, timeRemainingMs: number): number {
  if (!timerOn) return 1000;
  if (timeRemainingMs <= 0) return 1000;
  // timer ON = 1000 + (remaining_ms / 30000 * 200) bonus
  const bonus = (timeRemainingMs / 30000) * 200;
  return Math.round(1000 + bonus);
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
