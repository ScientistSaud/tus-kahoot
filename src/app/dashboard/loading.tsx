import { Header } from '@/components/Header';

export default function DashboardLoading() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-7xl animate-pulse space-y-8 p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-32 rounded-[var(--radius-card)] bg-[var(--color-surface)]"
            />
          ))}
        </div>
        
        <div className="flex gap-4">
          <div className="h-12 w-32 rounded-[var(--radius-button)] bg-[var(--color-surface)]" />
          <div className="h-12 w-48 rounded-[var(--radius-button)] bg-[var(--color-surface)]" />
        </div>

        <section>
          <div className="mb-4 h-6 w-48 rounded bg-[var(--color-surface)]" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-24 rounded-[var(--radius-card)] bg-[var(--color-surface)]"
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
