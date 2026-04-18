export function StatsStrip({
  totalQuestions,
  quizzesTaken,
  accuracy,
}: {
  totalQuestions: number;
  quizzesTaken: number;
  accuracy: number;
}) {
  const stats = [
    { label: 'Total Questions', value: totalQuestions },
    { label: 'Quizzes Taken', value: quizzesTaken },
    { label: 'Overall Accuracy', value: `${Math.round(accuracy)}%` },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {stats.map((s, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center rounded-[var(--radius-card)] bg-[var(--color-card)] p-6"
        >
          <span className="text-sm font-medium text-[var(--color-muted)]">
            {s.label}
          </span>
          <span className="mt-2 text-3xl font-bold text-white">{s.value}</span>
        </div>
      ))}
    </div>
  );
}
