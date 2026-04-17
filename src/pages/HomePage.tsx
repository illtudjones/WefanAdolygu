import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import type { TopicMeta } from '../types/topic';
import { Badge } from '../components/ui';
import { getTopicProgress } from '../store/progressStore';

const BASE = import.meta.env.BASE_URL;

export function HomePage() {
  const [topics, setTopics] = useState<TopicMeta[]>([]);
  const { t } = useLang();

  useEffect(() => {
    fetch(`${BASE}content/topics/manifest.json`)
      .then((r) => r.json())
      .then(setTopics)
      .catch(console.error);
  }, []);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{t('homeHeading')}</h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">{t('homeSubheading')}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {topics.map((topic) => {
          const p = getTopicProgress(topic.id);
          const done = p.notesRead && p.quizBestScore !== null && p.quizBestScore >= 70;
          const started = p.notesRead || (p.quizBestScore !== null) || p.flashcardsReviewed > 0;
          return (
            <Link
              key={topic.id}
              to={`/topics/${topic.id}/notes`}
              className="group flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-indigo-600"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
                    §{topic.specSection}
                  </span>
                  <h2 className="mt-0.5 font-semibold text-slate-900 group-hover:text-indigo-600 dark:text-slate-100 dark:group-hover:text-indigo-400">
                    {topic.title}
                  </h2>
                </div>
                <span
                  className={`mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full ${done ? 'bg-green-500' : started ? 'bg-amber-400' : 'bg-slate-200 dark:bg-slate-600'}`}
                  title={done ? 'Complete' : started ? 'In progress' : 'Not started'}
                />
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">{topic.description}</p>
              <div className="flex items-center gap-2 pt-1">
                <Badge variant={topic.difficulty}>{topic.difficulty}</Badge>
                <span className="text-xs text-slate-400">~{topic.estimatedMinutes} min</span>
              </div>
            </Link>
          );
        })}
      </div>

      {topics.length === 0 && (
        <p className="text-center text-slate-400 py-12">Loading topics…</p>
      )}
    </div>
  );
}
