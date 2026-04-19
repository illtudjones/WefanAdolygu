import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LangProvider } from './context/LangContext';
import { CourseProvider } from './context/CourseContext';
import { AppShell } from './components/layout/AppShell';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProgressPage } from './pages/ProgressPage';
import { TopicFlashcardsPage } from './pages/TopicFlashcardsPage';
import { TopicNotesPage } from './pages/TopicNotesPage';
import { TopicQuizPage } from './pages/TopicQuizPage';

export default function App() {
  return (
    <CourseProvider>
    <LangProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<AppShell />}>
            <Route index element={<HomePage />} />
            <Route path="progress" element={<ProgressPage />} />
            <Route path="topics/:topicId" element={<Navigate to="notes" replace />} />
            <Route path="topics/:topicId/notes" element={<TopicNotesPage />} />
            <Route path="topics/:topicId/quiz" element={<TopicQuizPage />} />
            <Route path="topics/:topicId/flashcards" element={<TopicFlashcardsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </LangProvider>
    </CourseProvider>
  );
}
