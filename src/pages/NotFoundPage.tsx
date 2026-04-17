import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';

export function NotFoundPage() {
  const { t } = useLang();
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <p className="text-6xl font-bold text-slate-200 dark:text-slate-700">{t('notFoundCode')}</p>
      <h1 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">{t('notFoundHeading')}</h1>
      <p className="mt-2 text-slate-500 dark:text-slate-400">{t('notFoundBody')}</p>
      <Link to="/" className="mt-6 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
        {t('backToHomeBtn')}
      </Link>
    </div>
  );
}
