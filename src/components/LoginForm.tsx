'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push('/dashboard');
      router.refresh();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md rounded-[var(--radius-card)] bg-[var(--color-card)] p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold tracking-tight text-white">
          MedBank Login
        </h1>
        {error && (
          <div className="mb-4 rounded bg-red-900/50 p-3 text-sm text-red-200">
            {error}
          </div>
        )}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--color-muted)]">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full rounded border border-[var(--color-surface)] bg-[#111] p-2 text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-muted)]">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full rounded border border-[var(--color-surface)] bg-[#111] p-2 text-white focus:border-white focus:outline-none focus:ring-1 focus:ring-white"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-[var(--radius-button)] bg-white py-2 font-semibold text-black transition-colors hover:bg-gray-200 disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
