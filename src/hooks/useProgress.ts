import { useCallback, useState } from 'react';
import {
  loadProgress,
  recordQuizScore,
  setFlashcardsReviewed,
  setNotesRead,
  type ProgressData,
  type TopicProgress,
} from '../store/progressStore';

export function useProgress() {
  const [data, setData] = useState<ProgressData>(loadProgress);

  const refresh = useCallback(() => setData(loadProgress()), []);

  const markNotesRead = useCallback(
    (topicId: string, read = true) => {
      setNotesRead(topicId, read);
      refresh();
    },
    [refresh],
  );

  const saveQuizScore = useCallback(
    (topicId: string, score: number) => {
      recordQuizScore(topicId, score);
      refresh();
    },
    [refresh],
  );

  const saveFlashcardsReviewed = useCallback(
    (topicId: string, count: number) => {
      setFlashcardsReviewed(topicId, count);
      refresh();
    },
    [refresh],
  );

  const getTopicProgress = useCallback(
    (topicId: string): TopicProgress =>
      data.topics[topicId] ?? { notesRead: false, quizBestScore: null, flashcardsReviewed: 0 },
    [data],
  );

  return { data, markNotesRead, saveQuizScore, saveFlashcardsReviewed, getTopicProgress };
}
