import { createContext, useContext, useState, type ReactNode } from 'react';
import { translations, type Lang, type TranslationKey } from '../translations';

interface LangContextValue {
  lang: Lang;
  toggleLang: () => void;
  t: (key: TranslationKey, vars?: Record<string, string | number>) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem('lang');
    return stored === 'cy' ? 'cy' : 'en';
  });

  const toggleLang = () => {
    setLang((l) => {
      const next: Lang = l === 'en' ? 'cy' : 'en';
      localStorage.setItem('lang', next);
      return next;
    });
  };

  const t = (key: TranslationKey, vars?: Record<string, string | number>): string => {
    let str: string = translations[lang][key];
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        str = str.replace(`{{${k}}}`, String(v));
      }
    }
    return str;
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
