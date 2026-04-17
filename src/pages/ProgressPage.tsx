import { useEffect, useState } from 'react';
import type { TopicMeta } from '../types/topic';
import { Dashboard } from '../components/progress/Dashboard';
import { useProgress } from '../hooks/useProgress';

const BASE = import.meta.env.BASE_URL;

export function ProgressPage() {
  const [topics, setTopics] = useState<TopicMeta[]>([]);
  const { data } = useProgress();

  useEffect(() => {
    fetch(`${BASE}content/topics/manifest.json`)
      .then((r) => r.json())
      .then(setTopics)
      .catch(console.error);
  }, []);

  return (
    <div>
      <div className="mb-6 border-b border-slate-200 pb-4 dark:border-slate-700">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">My Progress</h1>
        <p className="mt-1 text-slate-500 dark:text-slate-400">
          Track your revision across all Unit 1 topics.
        </p>
      </div>
      <Dashboard topics={topics} data={data} />
    </div>
  );
}
