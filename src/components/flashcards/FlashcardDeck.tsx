import { useCallback, useEffect, useState } from 'react';
import type { FlashcardDeckFile } from '../../types/flashcard';
import { shuffle } from '../../utils/scoring';
import { Button, Spinner } from '../ui';
import { FlashcardCard } from './FlashcardCard';

interface FlashcardDeckProps {
  topicId: string;
  onReviewed: (count: number) => void;
}

const BASE = import.meta.env.BASE_URL;

export function FlashcardDeck({ topicId, onReviewed }: FlashcardDeckProps) {
  const [deck, setDeck] = useState<FlashcardDeckFile | null>(null);
  const [cards, setCards] = useState(deck?.cards ?? []);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [seen, setSeen] = useState(new Set<string>());

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE}content/topics/${topicId}/flashcards.json`)
      .then((r) => {
        if (!r.ok) throw new Error('Deck not found');
        return r.json() as Promise<FlashcardDeckFile>;
      })
      .then((data) => {
        setDeck(data);
        setCards(data.cards);
        setIndex(0);
        setSeen(new Set());
      })
      .catch(() => setError('Could not load flashcards.'))
      .finally(() => setLoading(false));
  }, [topicId]);

  const markSeen = useCallback(() => {
    setSeen((prev) => {
      const next = new Set(prev).add(cards[index].id);
      onReviewed(next.size);
      return next;
    });
  }, [cards, index, onReviewed]);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => {
    markSeen();
    setIndex((i) => Math.min(cards.length - 1, i + 1));
  };
  const handleShuffle = () => {
    setCards((c) => shuffle(c));
    setIndex(0);
  };

  if (loading) return <div className="flex justify-center py-12"><Spinner size={36} /></div>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!deck || cards.length === 0) return <p className="text-center text-slate-500">No cards available.</p>;

  const card = cards[index];

  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
        <span>Card {index + 1} of {cards.length}</span>
        <span>{seen.size} reviewed</span>
      </div>

      <FlashcardCard key={card.id} front={card.front} back={card.back} hint={card.hint} />

      <div className="mt-6 flex items-center justify-between gap-3">
        <Button variant="secondary" size="sm" onClick={prev} disabled={index === 0}>
          ← Previous
        </Button>
        <Button variant="ghost" size="sm" onClick={handleShuffle}>
          Shuffle
        </Button>
        <Button variant="secondary" size="sm" onClick={next} disabled={index === cards.length - 1}>
          Next →
        </Button>
      </div>
    </div>
  );
}
