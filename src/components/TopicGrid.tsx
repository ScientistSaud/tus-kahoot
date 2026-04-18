import { formatTopic } from '@/lib/utils';
import { AccuracyRing } from './ui/AccuracyRing';

export interface TopicStat {
  topic: string;
  total_questions: number;
  accuracy: number;
}

export function TopicGrid({ topics }: { topics: TopicStat[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {topics.map((t) => (
        <div
          key={t.topic}
          className="flex items-center justify-between rounded-[var(--radius-card)] bg-[var(--color-surface)] p-4 transition-colors hover:bg-[var(--color-surface)]/80"
        >
          <div className="flex flex-col">
            <span className="font-semibold text-white">
              {formatTopic(t.topic)}
            </span>
            <span className="mt-1 text-sm text-[var(--color-muted)]">
              {t.total_questions} questions
            </span>
          </div>
          <AccuracyRing percentage={t.accuracy} size={48} strokeWidth={4} />
        </div>
      ))}
    </div>
  );
}
