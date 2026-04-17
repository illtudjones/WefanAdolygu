const STORAGE_KEY = 'cs-revision-progress';

export interface TopicProgress {
  notesRead: boolean;
  quizBestScore: number | null;
  flashcardsReviewed: number;
}

export interface ProgressData {
  version: number;
  topics: Record<string, TopicProgress>;
}

const defaultTopic = (): TopicProgress => ({
  notesRead: false,
  quizBestScore: null,
  flashcardsReviewed: 0,
});

const defaultProgress = (): ProgressData => ({ version: 1, topics: {} });

export function loadProgress(): ProgressData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress();
    return JSON.parse(raw) as ProgressData;
  } catch {
    return defaultProgress();
  }
}

function saveProgress(data: ProgressData): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function ensureTopic(data: ProgressData, topicId: string): void {
  if (!data.topics[topicId]) data.topics[topicId] = defaultTopic();
}

export function getTopicProgress(topicId: string): TopicProgress {
  const data = loadProgress();
  return data.topics[topicId] ?? defaultTopic();
}

export function setNotesRead(topicId: string, read: boolean): void {
  const data = loadProgress();
  ensureTopic(data, topicId);
  data.topics[topicId].notesRead = read;
  saveProgress(data);
}

export function recordQuizScore(topicId: string, score: number): void {
  const data = loadProgress();
  ensureTopic(data, topicId);
  const current = data.topics[topicId].quizBestScore;
  if (current === null || score > current) {
    data.topics[topicId].quizBestScore = score;
  }
  saveProgress(data);
}

export function setFlashcardsReviewed(topicId: string, count: number): void {
  const data = loadProgress();
  ensureTopic(data, topicId);
  data.topics[topicId].flashcardsReviewed = count;
  saveProgress(data);
}
