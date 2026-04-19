import { useEffect, useState } from 'react';
import { useLang } from '../context/LangContext';
import { useCourse } from '../context/CourseContext';
import type { TopicMeta } from '../types/topic';
import { Dashboard } from '../components/progress/Dashboard';
import { useProgress } from '../hooks/useProgress';

const BASE = import.meta.env.BASE_URL;

export function ProgressPage() {
  const [topics, setTopics] = useState<TopicMeta[]>([]);
  const { data } = useProgress();
  const { t } = useLang();
  const { course } = useCourse();

  useEffect(() => {
    fetch(`${BASE}content/${course.basePath}/manifest.json`)
      .then((r) => r.json())
      .then(setTopics)
      .catch(console.error);
  }, [course.basePath]);

  return (
    <div>
      <div className="mb-6 border-b border-slate-200 pb-4 dark:border-slate-700">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{t('progressHeading')}</h1>
        <p className="mt-1 text-slate-500 dark:text-slate-400">{t('progressSubheading')}</p>
      </div>
      <Dashboard topics={topics} data={data} />
    </div>
  );
}
