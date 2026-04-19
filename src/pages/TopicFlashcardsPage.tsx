import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import { useCourse } from '../context/CourseContext';
import type { TopicMeta } from '../types/topic';
import { FlashcardDeck } from '../components/flashcards/FlashcardDeck';
import { Spinner } from '../components/ui';
import { useProgress } from '../hooks/useProgress';

const BASE = import.meta.env.BASE_URL;

export function TopicFlashcardsPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const [topic, setTopic] = useState<TopicMeta | null>(null);
  const [loading, setLoading] = useState(true);
  const { saveFlashcardsReviewed } = useProgress();
  const { lang, t } = useLang();
  const { course } = useCourse();

  useEffect(() => {
    if (!topicId) return;
    fetch(`${BASE}content/${course.basePath}/manifest.json`)
      .then((r) => r.json() as Promise<TopicMeta[]>)
      .then((topics) => setTopic(topics.find((tp) => tp.id === topicId) ?? null))
      .finally(() => setLoading(false));
  }, [topicId, course.basePath]);

  if (loading) return <div className="flex justify-center py-12"><Spinner size={36} /></div>;
  if (!topic) return <p className="text-center text-red-500">{t('topicNotFound')}. <Link to="/" className="underline text-indigo-600">{t('navHome')}</Link></p>;

  return (
    <div>
      <div className="mb-6 border-b border-slate-200 pb-4 dark:border-slate-700">
        <p className="text-xs text-slate-500 dark:text-slate-400">§{topic.specSection}</p>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{topic.title} {t('flashcardsHeadingSuffix')}</h1>
      </div>
      <FlashcardDeck topicId={topicId!} lang={lang} basePath={course.basePath} onReviewed={(n) => saveFlashcardsReviewed(topicId!, n)} />
    </div>
  );
}
