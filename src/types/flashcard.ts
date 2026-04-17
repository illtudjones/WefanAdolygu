export interface Flashcard {
  id: string;
  front: string;
  back: string;
  hint?: string;
  tags: string[];
}

export interface FlashcardDeckFile {
  topicId: string;
  version: number;
  cards: Flashcard[];
}
