export interface Quote {
  text: string;
  author?: string;
  pink?: boolean;
}

export const quotes: Quote[] = [
  { text: "Powered by chocolate biscuits and Hobnobs." },
  { text: "Do the revision. Get the grade. Simple." },
  { text: "Future you will thank you." },
  { text: "You’ve got this… but only if you actually revise." },
  { text: "Stop scrolling. Start scoring." },
  { text: "Mwy o waith nawr, llai o straen wedyn." },
  { text: "Dyma ti—revise a smash it."},
  { text: "On Wednesdays, we wear pink.", pink: true },
];
