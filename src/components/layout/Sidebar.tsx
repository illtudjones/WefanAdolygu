import { NavLink, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import type { TopicMeta } from '../../types/topic';
import { getTopicProgress } from '../../store/progressStore';

interface SidebarProps {
  topics: TopicMeta[];
}

function CompletionDot({ topicId }: { topicId: string }) {
  const p = getTopicProgress(topicId);
  const done = p.notesRead && p.quizBestScore !== null;
  const started = p.notesRead || p.quizBestScore !== null || p.flashcardsReviewed > 0;
  return (
    <span
      className={clsx(
        'ml-auto h-2 w-2 flex-shrink-0 rounded-full',
        done ? 'bg-green-500' : started ? 'bg-amber-400' : 'bg-slate-300 dark:bg-slate-600',
      )}
    />
  );
}

export function Sidebar({ topics }: SidebarProps) {
  const location = useLocation();

  return (
    <nav className="flex flex-col gap-1 py-4 px-3">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          clsx(
            'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
            isActive
              ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400'
              : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700',
          )
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        Home
      </NavLink>
      <NavLink
        to="/progress"
        className={({ isActive }) =>
          clsx(
            'flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
            isActive
              ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400'
              : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700',
          )
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/>
        </svg>
        Progress
      </NavLink>

      <div className="my-2 border-t border-slate-200 dark:border-slate-700" />
      <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
        Topics
      </p>

      {topics.map((topic) => {
        const isActive = location.pathname.startsWith(`/topics/${topic.id}`);
        return (
          <div key={topic.id}>
            <NavLink
              to={`/topics/${topic.id}/notes`}
              className={clsx(
                'flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors',
                isActive
                  ? 'bg-indigo-50 font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700',
              )}
            >
              <span className="min-w-0 truncate">{topic.title}</span>
              <CompletionDot topicId={topic.id} />
            </NavLink>
            {isActive && (
              <div className="ml-4 mt-0.5 flex flex-col gap-0.5 border-l border-slate-200 pl-3 dark:border-slate-700">
                {(['notes', 'flashcards', 'quiz'] as const).map((tab) => (
                  <NavLink
                    key={tab}
                    to={`/topics/${topic.id}/${tab}`}
                    className={({ isActive: a }) =>
                      clsx(
                        'rounded py-1 px-2 text-xs capitalize transition-colors',
                        a
                          ? 'text-indigo-600 font-medium dark:text-indigo-400'
                          : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200',
                      )
                    }
                  >
                    {tab}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
