import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
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

  useEffect(() => {
    if (!topicId) return;
    fetch(`${BASE}content/topics/manifest.json`)
      .then((r) => r.json() as Promise<TopicMeta[]>)
      .then((topics) => setTopic(topics.find((t) => t.id === topicId) ?? null))
      .finally(() => setLoading(false));
  }, [topicId]);

  if (loading) return <div className="flex justify-center py-12"><Spinner size={36} /></div>;
  if (!topic) return <p className="text-center text-red-500">Topic not found. <Link to="/" className="underline text-indigo-600">Home</Link></p>;

  return (
    <div>
      <div className="mb-6 border-b border-slate-200 pb-4 dark:border-slate-700">
        <p className="text-xs text-slate-500 dark:text-slate-400">§{topic.specSection}</p>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{topic.title} — Flashcards</h1>
      </div>
      <FlashcardDeck topicId={topicId!} onReviewed={(n) => saveFlashcardsReviewed(topicId!, n)} />
    </div>
  );
}
