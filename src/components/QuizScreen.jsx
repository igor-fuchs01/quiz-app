import { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar.jsx';
import FillBlankQuestion from './questions/FillBlankQuestion.jsx';
import MultipleChoiceQuestion from './questions/MultipleChoiceQuestion.jsx';
import SelectQuestion from './questions/SelectQuestion.jsx';
import { correctAnswerLabel, isAnswerComplete, questionTypeLabel } from '../utils/grading.js';

const QUESTION_COMPONENTS = {
  fill: FillBlankQuestion,
  mcq: MultipleChoiceQuestion,
  select: SelectQuestion,
};

export default function QuizScreen({
  subject,
  currentIndex,
  answer,
  onAnswer,
  onNext,
  onPrevious,
  onExit,
}) {
  const question = subject.questions[currentIndex];
  const total = subject.questions.length;
  const isLast = currentIndex === total - 1;
  const isFirst = currentIndex === 0;
  const canAdvance = isAnswerComplete(question, answer);

  const QuestionComponent = QUESTION_COMPONENTS[question.type];

  const [showAnswer, setShowAnswer] = useState(false);
  const reveal = () => setShowAnswer(true);
  const hide = () => setShowAnswer(false);

  // evita que a resposta fique "presa" visível ao trocar de questão
  useEffect(() => setShowAnswer(false), [currentIndex]);

  return (
    <section>
      <div className="quiz-header">
        <div>
          <div className="quiz-header__subject">{subject.name}</div>
          <ProgressBar current={currentIndex} total={total} />
        </div>
        <div className="quiz-header__progress-text">
          Questão {currentIndex + 1} de {total}
        </div>
      </div>

      <div className="question-card">
        <div className="q-card-top">
          <span className="q-type-tag">{questionTypeLabel(question.type)}</span>
          <button
            type="button"
            className="reveal-btn"
            onMouseDown={reveal}
            onMouseUp={hide}
            onMouseLeave={hide}
            onTouchStart={(e) => {
              e.preventDefault();
              reveal();
            }}
            onTouchEnd={hide}
            onTouchCancel={hide}
          >
            👁 Ver resposta
          </button>
        </div>

        {showAnswer && (
          <div className="reveal-answer">Resposta correta: {correctAnswerLabel(question)}</div>
        )}

        <QuestionComponent question={question} value={answer} onChange={onAnswer} />
      </div>

      <div className="quiz-footer">
        <button className="btn btn-secondary" onClick={onExit}>
          Sair para matérias
        </button>
        <button className="btn btn-primary" disabled={isFirst} onClick={onPrevious}>
          Anterior
        </button>
        <button className="btn btn-primary" onClick={onNext}>
          {isLast ? 'Finalizar' : 'Próxima →'}
        </button>
        
      </div>
    </section>
  );
}
