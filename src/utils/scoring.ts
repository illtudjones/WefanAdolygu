export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function calcPercentage(correct: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
}
