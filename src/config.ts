// ─── Site configuration ───────────────────────────────────────────────────────
// Change these values when reusing this template for a different subject.
// Also update:
//   • vite.config.ts  →  base: '/YourRepoName/'
//   • index.html      →  <title> and <link rel="icon">
// ──────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  // Short abbreviation shown in the coloured badge in the top bar
  badgeAbbr: 'CS',

  // Site name shown next to the badge in the top bar
  siteTitle: 'WJEC Revision',

  // Heading on the home page
  homeHeading: 'WJEC GCSE Computer Science',

  // Subheading on the home page
  homeSubheading: 'Unit 1 revision — notes, flashcards and quizzes for every spec section.',

  // Heading on the progress page
  progressHeading: 'My Progress',

  // Subheading on the progress page
  progressSubheading: 'Track your revision across all Unit 1 topics.',
} as const;
