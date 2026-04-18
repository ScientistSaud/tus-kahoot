'use client';

import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export function Header() {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
    router.refresh();
  };

  return (
    <header className="flex items-center justify-between border-b border-[var(--color-surface)] bg-transparent px-6 py-4">
      <div className="text-xl font-bold tracking-tight text-white">MedBank</div>
      <div className="flex items-center gap-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-surface)] font-bold text-white">
          U
        </div>
        <button
          onClick={handleLogout}
          className="text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-white"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
