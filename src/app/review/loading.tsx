import { Header } from '@/components/Header';

export default function ReviewLoading() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-4xl animate-pulse space-y-8 p-6">
        <div className="h-8 w-48 rounded bg-[var(--color-surface)]" />
        <div className="flex gap-4">
          <div className="h-10 w-24 rounded bg-[var(--color-surface)]" />
          <div className="h-10 w-32 rounded bg-[var(--color-surface)]" />
        </div>
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
             <div key={i} className="h-64 rounded-[var(--radius-card)] bg-[var(--color-card)]" />
          ))}
        </div>
      </main>
    </div>
  );
}
