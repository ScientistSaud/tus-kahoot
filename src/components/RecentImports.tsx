import { DocumentArrowUpIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

const recentImports = [
  {
    id: 1,
    filename: 'TUS_Clinical_2023_April.pdf',
    date: 'Today, 2:45 PM',
    questionsAdded: 120,
    status: 'completed',
  },
  {
    id: 2,
    filename: 'Pathology_Robbins_QBank_Ch1.pdf',
    date: 'Yesterday, 10:15 AM',
    questionsAdded: 45,
    status: 'completed',
  },
  {
    id: 3,
    filename: 'Basic_Sciences_Mixed_TUS.pdf',
    date: 'Oct 12, 2023',
    questionsAdded: 200,
    status: 'completed',
  },
];

export function RecentImports() {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Recent Imports</h2>
        <button className="flex items-center gap-2 text-sm font-medium text-[var(--color-answer-b)] hover:text-white transition-colors">
          <DocumentArrowUpIcon className="h-4 w-4" />
          Import PDF
        </button>
      </div>

      <div className="bg-[var(--color-surface)] rounded-[var(--radius-card)] overflow-hidden">
        {recentImports.length > 0 ? (
          <ul className="divide-y divide-[var(--color-bg)]">
            {recentImports.map((item) => (
              <li key={item.id} className="flex items-center justify-between p-4 hover:bg-black/20 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-button)] bg-[var(--color-bg)] text-[var(--color-muted)]">
                    <DocumentArrowUpIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{item.filename}</p>
                    <p className="text-xs text-[var(--color-muted)] mt-0.5">{item.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold text-white">+{item.questionsAdded}</p>
                    <p className="text-xs text-[var(--color-muted)]">Questions</p>
                  </div>
                  <CheckCircleIcon className="h-5 w-5 text-[var(--color-correct-banner)]" />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center p-12 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-bg)] mb-4">
              <DocumentArrowUpIcon className="h-8 w-8 text-[var(--color-muted)]" />
            </div>
            <h3 className="text-lg font-bold text-white">No imports yet</h3>
            <p className="text-sm text-[var(--color-muted)] mt-2 max-w-sm">
              Upload your first TUS question PDF to automatically extract and categorize MCQs into your bank.
            </p>
            <button className="mt-6 rounded-[var(--radius-button)] bg-[var(--color-answer-b)] px-6 py-2.5 text-sm font-bold text-white hover:bg-blue-600 transition-colors">
              Import Your First PDF
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
