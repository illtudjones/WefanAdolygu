import { useCallback, useEffect, useState } from 'react';
import type { FlashcardDeckFile } from '../../types/flashcard';
import type { Lang } from '../../translations';
import { useLang } from '../../context/LangContext';
import { shuffle } from '../../utils/scoring';
import { Button, Spinner } from '../ui';
import { FlashcardCard } from './FlashcardCard';

interface FlashcardDeckProps {
  topicId: string;
  lang: Lang;
  onReviewed: (count: number) => void;
}

const BASE = import.meta.env.BASE_URL;

export function FlashcardDeck({ topicId, lang, onReviewed }: FlashcardDeckProps) {
  const { t } = useLang();
  const [deck, setDeck] = useState<FlashcardDeckFile | null>(null);
  const [cards, setCards] = useState(deck?.cards ?? []);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [seen, setSeen] = useState(new Set<string>());

  useEffect(() => {
    setLoading(true);
    const suffix = lang === 'cy' ? '-cy' : '';
    fetch(`${BASE}content/topics/${topicId}/flashcards${suffix}.json`)
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
      .catch(() => setError(t('errorLoadFlashcards')))
      .finally(() => setLoading(false));
  }, [topicId, lang]);

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
  if (!deck || cards.length === 0) return <p className="text-center text-slate-500">{t('noCards')}</p>;

  const card = cards[index];

  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
        <span>{t('cardCounter', { index: index + 1, total: cards.length })}</span>
        <span>{t('reviewedCount', { count: seen.size })}</span>
      </div>

      <FlashcardCard key={card.id} front={card.front} back={card.back} hint={card.hint} />

      <div className="mt-6 flex items-center justify-between gap-3">
        <Button variant="secondary" size="sm" onClick={prev} disabled={index === 0}>
          {t('prevCard')}
        </Button>
        <Button variant="ghost" size="sm" onClick={handleShuffle}>
          {t('shuffle')}
        </Button>
        <Button variant="secondary" size="sm" onClick={next} disabled={index === cards.length - 1}>
          {t('nextCard')}
        </Button>
      </div>
    </div>
  );
}
