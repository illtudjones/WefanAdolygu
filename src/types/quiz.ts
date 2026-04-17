export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation: string;
  tags: string[];
}

export interface QuizFile {
  topicId: string;
  version: number;
  title: string;
  passMark: number;
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
  questions: QuizQuestion[];
}
