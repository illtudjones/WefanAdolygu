export interface TopicMeta {
  id: string;
  title: string;
  description: string;
  specSection: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedMinutes: number;
  tags: string[];
}
