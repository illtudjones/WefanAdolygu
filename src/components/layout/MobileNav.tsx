import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { TopicMeta } from '../../types/topic';
import { Sidebar } from './Sidebar';

interface MobileNavProps {
  topics: TopicMeta[];
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ topics, open, onClose }: MobileNavProps) {
  const location = useLocation();

  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  if (!open) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className="fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto bg-white shadow-xl dark:bg-slate-900 lg:hidden">
        <div className="flex h-14 items-center justify-between border-b border-slate-200 px-4 dark:border-slate-700">
          <span className="font-semibold text-slate-900 dark:text-slate-100">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation"
            className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>
        <Sidebar topics={topics} />
      </aside>
    </>
  );
}
