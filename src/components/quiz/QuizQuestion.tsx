import type { QuizQuestion as IQuizQuestion } from '../../types/quiz';
import { Button } from '../ui';
import { QuizOption } from './QuizOption';

interface QuizQuestionProps {
  question: IQuizQuestion;
  index: number;
  total: number;
  selectedId: string | null;
  onSelect: (optionId: string) => void;
  onNext: () => void;
}

export function QuizQuestion({ question, index, total, selectedId, onSelect, onNext }: QuizQuestionProps) {
  const answered = selectedId !== null;
  const isLast = index + 1 === total;

  return (
    <div>
      <div className="mb-4 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
        <span>Question {index + 1} of {total}</span>
        <span className="h-1.5 w-32 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          <span
            className="block h-full rounded-full bg-indigo-500 transition-all"
            style={{ width: `${((index + 1) / total) * 100}%` }}
          />
        </span>
      </div>

      <p className="mb-5 text-base font-medium text-slate-900 dark:text-slate-100">
        {question.text}
      </p>

      <div className="flex flex-col gap-2">
        {question.options.map((opt) => {
          const state =
            !answered
              ? 'idle'
              : opt.id === question.correctOptionId
              ? opt.id === selectedId
                ? 'correct'
                : 'reveal'
              : opt.id === selectedId
              ? 'incorrect'
              : 'idle';
          return (
            <QuizOption
              key={opt.id}
              id={opt.id}
              text={opt.text}
              state={state}
              disabled={answered}
              onSelect={onSelect}
            />
          );
        })}
      </div>

      {answered && (
        <div className="mt-4 rounded-lg bg-slate-50 p-3 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          <strong>Explanation:</strong> {question.explanation}
        </div>
      )}

      {answered && (
        <div className="mt-4 flex justify-end">
          <Button onClick={onNext}>{isLast ? 'See Results' : 'Next Question'}</Button>
        </div>
      )}
    </div>
  );
}
