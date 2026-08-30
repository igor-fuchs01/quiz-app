import { useState } from 'react';
import AppHeader from './components/AppHeader.jsx';
import HomeScreen from './components/HomeScreen.jsx';
import QuizScreen from './components/QuizScreen.jsx';
import ResultsScreen from './components/ResultsScreen.jsx';
import ReviewAllScreen from './components/ReviewAllScreen.jsx';
import { SUBJECTS } from './data/subjects.js';

const VIEWS = { HOME: 'home', QUIZ: 'quiz', RESULTS: 'results', REVIEW: 'review' };

export default function App() {
  const [view, setView] = useState(VIEWS.HOME);
  const [subject, setSubject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  function handleStart(selectedSubject) {
    setSubject(selectedSubject);
    setAnswers(new Array(selectedSubject.questions.length).fill(null));
    setCurrentIndex(0);
    setView(VIEWS.QUIZ);
  }

  function handleAnswer(newAnswer) {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = newAnswer;
      return next;
    });
  }

  function handleNext() {
    const isLast = currentIndex === subject.questions.length - 1;
    if (isLast) {
      setView(VIEWS.RESULTS);
    } else {
      setCurrentIndex((i) => i + 1);
    }
  }
  function handlePrevious() {
    const isFirst = currentIndex === 0;
    if (isFirst) {
      setView(VIEWS.RESULTS);
    } else {
      setCurrentIndex((i) => i - 1);
    }
  }

  function handleExitToHome() {
    // limpa a prova atual: sem subject/answers, a revisão completa
    // deixa de ter o que mostrar, então não fica mais acessível.
    setSubject(null);
    setAnswers([]);
    setCurrentIndex(0);
    setView(VIEWS.HOME);
  }

  function handleReviewAll() {
    setView(VIEWS.REVIEW);
  }

  function handleBackToResults() {
    setView(VIEWS.RESULTS);
  }

  return (
    <div className="app-shell">
      <AppHeader />
      <main className="app-main">
        {view === VIEWS.HOME && (
          <HomeScreen subjects={SUBJECTS} onStart={handleStart} />
        )}

        {view === VIEWS.QUIZ && subject && (
          <QuizScreen
            subject={subject}
            currentIndex={currentIndex}
            answer={answers[currentIndex]}
            onAnswer={handleAnswer}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onExit={handleExitToHome}
          />
        )}

        {view === VIEWS.RESULTS && subject && (
          <ResultsScreen
            subject={subject}
            answers={answers}
            onRestart={handleExitToHome}
            onReviewAll={handleReviewAll}
          />
        )}

        {view === VIEWS.REVIEW && subject && (
          <ReviewAllScreen
            subject={subject}
            answers={answers}
            onBackToResults={handleBackToResults}
          />
        )}
      </main>
    </div>
  );
}
