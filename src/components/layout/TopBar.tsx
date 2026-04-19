import { Link } from 'react-router-dom';
import { useLang } from '../../context/LangContext';
import { CourseSwitcher } from './CourseSwitcher';
import { LangToggle } from './LangToggle';
import { ThemeToggle } from './ThemeToggle';

interface TopBarProps {
  onMenuClick: () => void;
}

export function TopBar({ onMenuClick }: TopBarProps) {
  const { t } = useLang();
  return (
    <header className="fixed inset-x-0 top-0 z-30 flex h-14 items-center gap-3 border-b border-slate-200 bg-white/90 px-4 backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Open navigation"
        className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700 lg:hidden"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
        </svg>
      </button>
      <Link to="/" className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
        <span className="rounded-md bg-indigo-600 px-2 py-0.5 text-sm font-bold text-white">{t('badgeAbbr')}</span>
        <span className="hidden sm:inline">{t('siteTitle')}</span>
      </Link>
      <div className="hidden sm:block h-4 w-px bg-slate-200 dark:bg-slate-700" />
      <CourseSwitcher />
      <div className="ml-auto flex items-center gap-2">
        <LangToggle />
        <ThemeToggle />
      </div>
    </header>
  );
}
