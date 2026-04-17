import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import type { TopicMeta } from '../types/topic';
import { NoteRenderer } from '../components/notes/NoteRenderer';
import { NoteTopicHeader } from '../components/notes/NoteTopicHeader';
import { Spinner } from '../components/ui';
import { useProgress } from '../hooks/useProgress';

const BASE = import.meta.env.BASE_URL;

export function TopicNotesPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const [topic, setTopic] = useState<TopicMeta | null>(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { getTopicProgress, markNotesRead } = useProgress();
  const { lang, t } = useLang();

  useEffect(() => {
    if (!topicId) return;
    setLoading(true);
    setError('');
    const suffix = lang === 'cy' ? '-cy' : '';
    Promise.all([
      fetch(`${BASE}content/topics/manifest.json`).then((r) => r.json() as Promise<TopicMeta[]>),
      fetch(`${BASE}content/topics/${topicId}/notes${suffix}.md`).then((r) => {
        if (!r.ok) throw new Error('Notes not found');
        return r.text();
      }),
    ])
      .then(([topics, md]) => {
        const found = topics.find((t) => t.id === topicId);
        if (!found) throw new Error('Topic not found');
        setTopic(found);
        setContent(md);
      })
      .catch(() => setError(t('errorLoadNotes')))
      .finally(() => setLoading(false));
  }, [topicId, lang]);

  if (loading) return <div className="flex justify-center py-12"><Spinner size={36} /></div>;
  if (error || !topic) return (
    <div className="text-center">
      <p className="text-red-500 mb-3">{error || t('topicNotFound')}</p>
      <Link to="/" className="text-indigo-600 underline">{t('backToHome')}</Link>
    </div>
  );

  const notesRead = getTopicProgress(topicId!).notesRead;

  return (
    <div>
      <NoteTopicHeader
        topic={topic}
        notesRead={notesRead}
        onToggleRead={() => markNotesRead(topicId!, !notesRead)}
      />
      <NoteRenderer content={content} />
    </div>
  );
}
