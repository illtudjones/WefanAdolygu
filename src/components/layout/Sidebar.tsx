import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import type { TopicMeta } from '../../types/topic';
import { useLang } from '../../context/LangContext';
import { getTopicProgress } from '../../store/progressStore';
import { quotes } from '../../data/quotes';

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

const tabs = ['notes', 'flashcards', 'quiz'] as const;

export function Sidebar({ topics }: SidebarProps) {
  const location = useLocation();
  const { t } = useLang();
  const [quote] = useState(() => quotes[Math.floor(Math.random() * quotes.length)]);

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
    <nav className="flex flex-1 flex-col gap-1 overflow-y-auto py-4 px-3">
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
        {t('navHome')}
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
        {t('navProgress')}
      </NavLink>

      <div className="my-2 border-t border-slate-200 dark:border-slate-700" />
      <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
        {t('navTopics')}
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
                {tabs.map((tab) => (
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
                    {t(tab === 'notes' ? 'tabNotes' : tab === 'flashcards' ? 'tabFlashcards' : 'tabQuiz')}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
    <div className="border-t border-slate-200 px-4 py-3 dark:border-slate-700">
      <p className="text-xs leading-snug text-slate-400 dark:text-slate-500">
        <span className={quote.pink ? 'italic font-semibold text-pink-500' : 'italic'}>{quote.text}</span>
        {quote.author && <span className="block mt-0.5 not-italic">— {quote.author}</span>}
      </p>
      <p className="mt-1.5 text-xs text-slate-400 dark:text-slate-500">Mr. I. Jones · 2026</p>
    </div>
    </div>
  );
}
