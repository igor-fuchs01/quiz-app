import ReviewItem from './ReviewItem.jsx';
import { isCorrect } from '../utils/grading.js';

export default function ResultsScreen({ subject, answers, onRestart, onReviewAll }) {
  const total = subject.questions.length;
  const wrongQuestions = subject.questions.filter(
    (q, i) => !isCorrect(q, answers[i])
  );
  const correctCount = total - wrongQuestions.length;

  return (
    <section>
      <div className="score-banner">
        <div className="score-banner__value">
          {correctCount}/{total}
        </div>
        <div className="score-banner__label">respostas corretas em {subject.name}</div>
      </div>

      <div className="review-list">
        <h2>Revisão dos erros</h2>
        {wrongQuestions.length === 0 ? (
          <div className="all-correct">Nenhum erro — todas as respostas corretas.</div>
        ) : (
          wrongQuestions.map((q, i) => <ReviewItem key={i} question={q} />)
        )}
      </div>

      <div className="results-footer">
        <button className="btn btn-secondary" onClick={onReviewAll}>
          Revisar todas as questões
        </button>
        <button className="btn btn-primary" onClick={onRestart}>
          Voltar para matérias
        </button>
      </div>
    </section>
  );
}
