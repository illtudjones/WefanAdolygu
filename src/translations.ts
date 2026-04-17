export const translations = {
  en: {
    // Top bar
    siteTitle: 'WJEC Revision',
    badgeAbbr: 'CS',
    // Navigation
    navHome: 'Home',
    navProgress: 'Progress',
    navTopics: 'Topics',
    tabNotes: 'notes',
    tabFlashcards: 'flashcards',
    tabQuiz: 'quiz',
    // Home page
    homeHeading: 'WJEC GCSE Computer Science',
    homeSubheading: 'Unit 1 revision — notes, flashcards and quizzes for every spec section.',
    // Progress page
    progressHeading: 'My Progress',
    progressSubheading: 'Track your revision across all Unit 1 topics.',
    // Notes header
    specLabel: 'Spec',
    markedAsRead: '✓ Marked as read',
    markAsRead: 'Mark as read',
    goToFlashcards: 'Flashcards',
    takeQuiz: 'Take Quiz',
    // Flashcard card
    cardFrontLabel: 'Term',
    cardBackLabel: 'Definition',
    tapToFlip: 'Tap to flip',
    tapToFlipBack: 'Tap to flip back',
    showHint: 'Show hint',
    hideHint: 'Hide hint',
    // Flashcard deck
    cardCounter: 'Card {{index}} of {{total}}',
    reviewedCount: '{{count}} reviewed',
    prevCard: '← Previous',
    nextCard: 'Next →',
    shuffle: 'Shuffle',
    noCards: 'No cards available.',
    errorLoadFlashcards: 'Could not load flashcards.',
    // Quiz question
    questionCounter: 'Question {{index}} of {{total}}',
    explanationLabel: 'Explanation:',
    seeResults: 'See Results',
    nextQuestion: 'Next Question',
    // Quiz results
    correctCount: '{{correct}} / {{total}} correct',
    passed: 'Passed',
    notYet: 'Not yet',
    passMark: 'Pass mark:',
    yourAnswer: 'Your answer:',
    noAnswer: 'No answer',
    correctAnswer: 'Correct:',
    tryAgain: 'Try Again',
    reviewNotes: 'Review Notes',
    // Page headings
    quizHeadingSuffix: '— Quiz',
    flashcardsHeadingSuffix: '— Flashcards',
    bestScore: 'Best score:',
    // Errors & fallbacks
    errorLoadQuiz: 'Could not load quiz.',
    errorLoadNotes: 'Could not load notes.',
    topicNotFound: 'Topic not found',
    backToHome: 'Back to home',
    // 404 page
    notFoundCode: '404',
    notFoundHeading: 'Page not found',
    notFoundBody: "The page you're looking for doesn't exist.",
    backToHomeBtn: 'Back to Home',
  },
  cy: {
    // Top bar
    siteTitle: 'Adolygu CBAC',
    badgeAbbr: 'CS',
    // Navigation
    navHome: 'Hafan',
    navProgress: 'Cynnydd',
    navTopics: 'Pynciau',
    tabNotes: 'nodiadau',
    tabFlashcards: 'cardiau fflach',
    tabQuiz: 'cwis',
    // Home page
    homeHeading: 'Cyfrifiadureg TGAU CBAC',
    homeSubheading: "Adolygiad Uned 1 — nodiadau, cardiau fflach a chwisiau ar gyfer pob adran o'r fanyleb.",
    // Progress page
    progressHeading: 'Fy Nghynnydd',
    progressSubheading: 'Tracio eich adolygiad ar draws holl bynciau Uned 1.',
    // Notes header
    specLabel: 'Adran',
    markedAsRead: "✓ Wedi'i nodi fel wedi'i ddarllen",
    markAsRead: "Nodi fel wedi'i ddarllen",
    goToFlashcards: 'Cardiau Fflach',
    takeQuiz: 'Cymryd Cwis',
    // Flashcard card
    cardFrontLabel: 'Term',
    cardBackLabel: 'Diffiniad',
    tapToFlip: 'Tapiwch i droi',
    tapToFlipBack: "Tapiwch i droi'n ôl",
    showHint: 'Dangos awgrym',
    hideHint: 'Cuddio awgrym',
    // Flashcard deck
    cardCounter: 'Cerdyn {{index}} o {{total}}',
    reviewedCount: '{{count}} adolygwyd',
    prevCard: '← Blaenorol',
    nextCard: 'Nesaf →',
    shuffle: 'Cymysgu',
    noCards: 'Dim cardiau ar gael.',
    errorLoadFlashcards: 'Methu llwytho cardiau fflach.',
    // Quiz question
    questionCounter: 'Cwestiwn {{index}} o {{total}}',
    explanationLabel: 'Esboniad:',
    seeResults: 'Gweld Canlyniadau',
    nextQuestion: 'Cwestiwn Nesaf',
    // Quiz results
    correctCount: '{{correct}} / {{total}} cywir',
    passed: 'Wedi Pasio',
    notYet: 'Heb basio eto',
    passMark: 'Marc pasio:',
    yourAnswer: 'Eich ateb:',
    noAnswer: 'Dim ateb',
    correctAnswer: 'Cywir:',
    tryAgain: 'Ceisiwch Eto',
    reviewNotes: 'Adolygu Nodiadau',
    // Page headings
    quizHeadingSuffix: '— Cwis',
    flashcardsHeadingSuffix: '— Cardiau Fflach',
    bestScore: 'Sgôr orau:',
    // Errors & fallbacks
    errorLoadQuiz: 'Methu llwytho cwis.',
    errorLoadNotes: 'Methu llwytho nodiadau.',
    topicNotFound: 'Pwnc heb ei ganfod',
    backToHome: "Yn ôl i'r hafan",
    // 404 page
    notFoundCode: '404',
    notFoundHeading: 'Tudalen heb ei chanfod',
    notFoundBody: "Nid yw'r dudalen yr ydych yn chwilio amdani yn bodoli.",
    backToHomeBtn: "Yn ôl i'r Hafan",
  },
} as const;

export type Lang = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
