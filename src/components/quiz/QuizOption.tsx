import { clsx } from 'clsx';

type State = 'idle' | 'correct' | 'incorrect' | 'reveal';

interface QuizOptionProps {
  id: string;
  text: string;
  state: State;
  disabled: boolean;
  onSelect: (id: string) => void;
}

export function QuizOption({ id, text, state, disabled, onSelect }: QuizOptionProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onSelect(id)}
      className={clsx(
        'w-full rounded-lg border-2 px-4 py-3 text-left text-sm font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
        state === 'idle' && !disabled && 'border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 dark:border-slate-600 dark:hover:border-indigo-600 dark:hover:bg-indigo-900/20',
        state === 'idle' && disabled && 'border-slate-200 opacity-60 dark:border-slate-600',
        state === 'correct' && 'border-green-500 bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300',
        state === 'incorrect' && 'border-red-400 bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-300',
        state === 'reveal' && 'border-green-500 bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      )}
      aria-pressed={state !== 'idle'}
    >
      {text}
    </button>
  );
}
