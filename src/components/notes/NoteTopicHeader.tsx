import { Link } from 'react-router-dom';
import type { TopicMeta } from '../../types/topic';
import { Badge, Button } from '../ui';

interface NoteTopicHeaderProps {
  topic: TopicMeta;
  notesRead: boolean;
  onToggleRead: () => void;
}

export function NoteTopicHeader({ topic, notesRead, onToggleRead }: NoteTopicHeaderProps) {
  return (
    <div className="mb-6 border-b border-slate-200 pb-6 dark:border-slate-700">
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
          Spec {topic.specSection}
        </span>
        <Badge variant={topic.difficulty}>{topic.difficulty}</Badge>
        <span className="text-xs text-slate-400">~{topic.estimatedMinutes} min</span>
      </div>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl">
        {topic.title}
      </h1>
      <p className="mt-1 text-slate-500 dark:text-slate-400">{topic.description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Button
          variant={notesRead ? 'secondary' : 'primary'}
          size="sm"
          onClick={onToggleRead}
        >
          {notesRead ? '✓ Marked as read' : 'Mark as read'}
        </Button>
        <Link
          to={`/topics/${topic.id}/flashcards`}
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          Flashcards
        </Link>
        <Link
          to={`/topics/${topic.id}/quiz`}
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          Take Quiz
        </Link>
      </div>
    </div>
  );
}
