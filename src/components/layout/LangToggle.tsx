import { useLang } from '../../context/LangContext';

export function LangToggle() {
  const { lang, toggleLang } = useLang();
  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label={lang === 'en' ? 'Switch to Welsh' : 'Switch to English'}
      className="rounded-lg px-2.5 py-1 text-xs font-bold tracking-widest text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
    >
      {lang === 'en' ? 'CY' : 'EN'}
    </button>
  );
}
