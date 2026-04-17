import { useState } from 'react';
import { clsx } from 'clsx';
import ReactMarkdown from 'react-markdown';

interface FlashcardCardProps {
  front: string;
  back: string;
  hint?: string;
}

export function FlashcardCard({ front, back, hint }: FlashcardCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleFlip = () => {
    setFlipped((f) => !f);
    setShowHint(false);
  };

  return (
    <div className="flashcard-scene w-full" style={{ height: 220 }}>
      <div
        className={clsx('flashcard-inner absolute inset-0 cursor-pointer', flipped && 'flipped')}
        onClick={handleFlip}
        role="button"
        tabIndex={0}
        aria-label="Click to flip card"
        onKeyDown={(e) => e.key === 'Enter' && handleFlip()}
      >
        {/* Front */}
        <div className="flashcard-face absolute inset-0 flex flex-col items-center justify-center rounded-2xl border-2 border-indigo-200 bg-white p-6 dark:border-indigo-700 dark:bg-slate-800">
          <span className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-400">Term</span>
          <p className="text-center text-lg font-semibold text-slate-900 dark:text-slate-100">{front}</p>
          {hint && !flipped && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setShowHint((s) => !s); }}
              className="mt-3 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
            >
              {showHint ? 'Hide hint' : 'Show hint'}
            </button>
          )}
          {showHint && hint && (
            <p className="mt-2 text-xs text-slate-500 italic">{hint}</p>
          )}
          <p className="absolute bottom-3 text-xs text-slate-300 dark:text-slate-600">Tap to flip</p>
        </div>

        {/* Back */}
        <div className="flashcard-face flashcard-back absolute inset-0 flex flex-col items-center justify-center rounded-2xl border-2 border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-slate-800">
          <span className="mb-3 text-xs font-semibold uppercase tracking-widest text-green-500">Definition</span>
          <div className="prose text-center text-sm text-slate-800 dark:text-slate-200">
            <ReactMarkdown>{back}</ReactMarkdown>
          </div>
          <p className="absolute bottom-3 text-xs text-slate-300 dark:text-slate-600">Tap to flip back</p>
        </div>
      </div>
    </div>
  );
}
