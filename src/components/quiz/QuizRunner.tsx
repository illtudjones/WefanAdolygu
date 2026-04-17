import { useCallback, useEffect, useMemo, useState } from 'react';
import type { QuizFile } from '../../types/quiz';
import { shuffle } from '../../utils/scoring';
import { Spinner } from '../ui';
import { QuizQuestion } from './QuizQuestion';
import { QuizResults } from './QuizResults';

interface QuizRunnerProps {
  topicId: string;
  onScore: (score: number) => void;
}

const BASE = import.meta.env.BASE_URL;

export function QuizRunner({ topicId, onScore }: QuizRunnerProps) {
  const [quiz, setQuiz] = useState<QuizFile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [questions, setQuestions] = useState(quiz?.questions ?? []);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE}content/topics/${topicId}/quiz.json`)
      .then((r) => {
        if (!r.ok) throw new Error('Quiz not found');
        return r.json() as Promise<QuizFile>;
      })
      .then((data) => {
        setQuiz(data);
        const qs = data.shuffleQuestions ? shuffle(data.questions) : data.questions;
        setQuestions(
          qs.map((q) => ({
            ...q,
            options: data.shuffleOptions ? shuffle(q.options) : q.options,
          })),
        );
      })
      .catch(() => setError('Could not load quiz.'))
      .finally(() => setLoading(false));
  }, [topicId]);

  const score = useMemo(() => {
    if (!quiz) return 0;
    const correct = questions.filter((q) => answers[q.id] === q.correctOptionId).length;
    return Math.round((correct / questions.length) * 100);
  }, [quiz, questions, answers]);

  const handleSelect = useCallback((optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questions[index].id]: optionId }));
  }, [questions, index]);

  const handleNext = useCallback(() => {
    if (index + 1 >= questions.length) {
      setFinished(true);
      onScore(score);
    } else {
      setIndex((i) => i + 1);
    }
  }, [index, questions.length, score, onScore]);

  const handleRetry = useCallback(() => {
    if (!quiz) return;
    const qs = quiz.shuffleQuestions ? shuffle(quiz.questions) : quiz.questions;
    setQuestions(qs.map((q) => ({ ...q, options: quiz.shuffleOptions ? shuffle(q.options) : q.options })));
    setIndex(0);
    setAnswers({});
    setFinished(false);
  }, [quiz]);

  if (loading) return <div className="flex justify-center py-12"><Spinner size={36} /></div>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!quiz) return null;

  if (finished) {
    return <QuizResults quiz={{ ...quiz, questions }} answers={answers} topicId={topicId} onRetry={handleRetry} />;
  }

  return (
    <QuizQuestion
      question={questions[index]}
      index={index}
      total={questions.length}
      selectedId={answers[questions[index].id] ?? null}
      onSelect={handleSelect}
      onNext={handleNext}
    />
  );
}
