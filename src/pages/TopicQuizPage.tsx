import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { TopicMeta } from '../types/topic';
import { QuizRunner } from '../components/quiz/QuizRunner';
import { Spinner } from '../components/ui';
import { useProgress } from '../hooks/useProgress';

const BASE = import.meta.env.BASE_URL;

export function TopicQuizPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const [topic, setTopic] = useState<TopicMeta | null>(null);
  const [loading, setLoading] = useState(true);
  const { saveQuizScore, getTopicProgress } = useProgress();

  useEffect(() => {
    if (!topicId) return;
    fetch(`${BASE}content/topics/manifest.json`)
      .then((r) => r.json() as Promise<TopicMeta[]>)
      .then((topics) => setTopic(topics.find((t) => t.id === topicId) ?? null))
      .finally(() => setLoading(false));
  }, [topicId]);

  if (loading) return <div className="flex justify-center py-12"><Spinner size={36} /></div>;
  if (!topic) return <p className="text-center text-red-500">Topic not found. <Link to="/" className="underline text-indigo-600">Home</Link></p>;

  const best = getTopicProgress(topicId!).quizBestScore;

  return (
    <div>
      <div className="mb-6 border-b border-slate-200 pb-4 dark:border-slate-700">
        <p className="text-xs text-slate-500 dark:text-slate-400">§{topic.specSection}</p>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{topic.title} — Quiz</h1>
        {best !== null && (
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Best score: <strong className="text-indigo-600 dark:text-indigo-400">{best}%</strong></p>
        )}
      </div>
      <QuizRunner topicId={topicId!} onScore={(s) => saveQuizScore(topicId!, s)} />
    </div>
  );
}
