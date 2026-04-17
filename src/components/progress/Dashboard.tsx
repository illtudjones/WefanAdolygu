import { Link } from 'react-router-dom';
import type { TopicMeta } from '../../types/topic';
import type { ProgressData } from '../../store/progressStore';
import { ProgressRing } from '../ui';

interface DashboardProps {
  topics: TopicMeta[];
  data: ProgressData;
}

export function Dashboard({ topics, data }: DashboardProps) {
  const topicProgress = topics.map((t) => {
    const p = data.topics[t.id] ?? { notesRead: false, quizBestScore: null, flashcardsReviewed: 0 };
    const completed = p.notesRead && p.quizBestScore !== null && p.quizBestScore >= 70;
    return { topic: t, progress: p, completed };
  });

  const overallPct = topics.length === 0 ? 0 : Math.round(
    (topicProgress.filter((t) => t.completed).length / topics.length) * 100,
  );

  return (
    <div>
      <div className="mb-6 flex items-center gap-6">
        <ProgressRing value={overallPct} size={72} stroke={6} />
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Overall Progress</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {topicProgress.filter((t) => t.completed).length} of {topics.length} topics completed
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {topicProgress.map(({ topic, progress, completed }) => (
          <Link
            key={topic.id}
            to={`/topics/${topic.id}/notes`}
            className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 hover:shadow-sm transition-shadow dark:border-slate-700 dark:bg-slate-800"
          >
            <div className="min-w-0 flex-1">
              <p className="font-medium text-slate-900 dark:text-slate-100">{topic.title}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Spec {topic.specSection}</p>
            </div>
            <div className="flex shrink-0 gap-4 text-center text-xs">
              <div>
                <p className={progress.notesRead ? 'text-green-500' : 'text-slate-300 dark:text-slate-600'}>●</p>
                <p className="text-slate-500">Notes</p>
              </div>
              <div>
                <p className={progress.flashcardsReviewed > 0 ? 'text-amber-400' : 'text-slate-300 dark:text-slate-600'}>●</p>
                <p className="text-slate-500">{progress.flashcardsReviewed} cards</p>
              </div>
              <div>
                <p className={progress.quizBestScore !== null ? (progress.quizBestScore >= 70 ? 'text-green-500' : 'text-amber-400') : 'text-slate-300 dark:text-slate-600'}>●</p>
                <p className="text-slate-500">{progress.quizBestScore !== null ? `${progress.quizBestScore}%` : 'Quiz'}</p>
              </div>
            </div>
            <span className={`ml-2 h-2.5 w-2.5 rounded-full flex-shrink-0 ${completed ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-600'}`} />
          </Link>
        ))}
      </div>
    </div>
  );
}
