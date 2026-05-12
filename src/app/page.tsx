import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { DashboardCards } from '@/components/DashboardCards';
import { RecentImports } from '@/components/RecentImports';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  // Check auth - assuming we want to protect this page
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="flex h-screen flex-col bg-[var(--color-bg)] overflow-hidden">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto bg-[var(--color-bg)] p-6 md:p-8 lg:p-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="mb-2 text-3xl font-bold tracking-tight text-white">Welcome back, Doctor</h1>
                <p className="text-[var(--color-muted)]">Ready to crush some medical MCQs today?</p>
              </div>
              <Link
                href="/dashboard"
                className="w-fit rounded-[var(--radius-button)] bg-white px-5 py-2 text-sm font-bold text-black transition-colors hover:bg-white/85"
              >
                Dashboard
              </Link>
            </div>

            <DashboardCards />
            <RecentImports />
          </div>
        </main>
      </div>
    </div>
  );
}
