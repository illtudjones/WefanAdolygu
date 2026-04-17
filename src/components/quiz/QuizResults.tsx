import { Link } from 'react-router-dom';
import type { QuizFile } from '../../types/quiz';
import { Badge, Button } from '../ui';

interface QuizResultsProps {
  quiz: QuizFile;
  answers: Record<string, string>;
  topicId: string;
  onRetry: () => void;
}

export function QuizResults({ quiz, answers, topicId, onRetry }: QuizResultsProps) {
  const correct = quiz.questions.filter((q) => answers[q.id] === q.correctOptionId).length;
  const total = quiz.questions.length;
  const pct = Math.round((correct / total) * 100);
  const passed = pct >= quiz.passMark;

  return (
    <div>
      <div className="mb-6 rounded-xl border border-slate-200 bg-white p-6 text-center dark:border-slate-700 dark:bg-slate-800">
        <p className="text-5xl font-bold text-slate-900 dark:text-slate-100">{pct}%</p>
        <p className="mt-1 text-slate-500 dark:text-slate-400">
          {correct} / {total} correct
        </p>
        <Badge className="mt-2" variant={passed ? 'success' : 'danger'}>
          {passed ? 'Passed' : 'Not yet'}
        </Badge>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Pass mark: {quiz.passMark}%
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-3">
        {quiz.questions.map((q, i) => {
          const userAnswer = answers[q.id];
          const isCorrect = userAnswer === q.correctOptionId;
          const userOption = q.options.find((o) => o.id === userAnswer);
          const correctOption = q.options.find((o) => o.id === q.correctOptionId);
          return (
            <div key={q.id} className="rounded-lg border border-slate-200 p-3 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                {i + 1}. {q.text}
              </p>
              <p className={`mt-1 text-xs ${isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                Your answer: {userOption?.text ?? 'No answer'}
              </p>
              {!isCorrect && (
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Correct: {correctOption?.text}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-3">
        <Button onClick={onRetry} variant="secondary">Try Again</Button>
        <Link
          to={`/topics/${topicId}/notes`}
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          Review Notes
        </Link>
      </div>
    </div>
  );
}
