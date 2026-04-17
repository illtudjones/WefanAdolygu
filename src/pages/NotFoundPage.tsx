import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <p className="text-6xl font-bold text-slate-200 dark:text-slate-700">404</p>
      <h1 className="mt-4 text-xl font-semibold text-slate-900 dark:text-slate-100">Page not found</h1>
      <p className="mt-2 text-slate-500 dark:text-slate-400">The page you're looking for doesn't exist.</p>
      <Link to="/" className="mt-6 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
        Back to Home
      </Link>
    </div>
  );
}
