import { useState } from 'react';
import ProgressBar from './ProgressBar.jsx';
import FillBlankQuestion from './questions/FillBlankQuestion.jsx';
import MultipleChoiceQuestion from './questions/MultipleChoiceQuestion.jsx';
import SelectQuestion from './questions/SelectQuestion.jsx';
import { isCorrect, questionTypeLabel } from '../utils/grading.js';

const QUESTION_COMPONENTS = {
  fill: FillBlankQuestion,
  mcq: MultipleChoiceQuestion,
  select: SelectQuestion,
};

const noop = () => {};

/**
 * Revisão da prova recém-finalizada. Usa o MESMO componente de cada tipo
 * de questão (fill/mcq/select) que aparece ao responder — só que em modo
 * readOnly, com a resposta dada travada e a correta sinalizada.
 *
 * Só é alcançável a partir do botão na tela de resultados. Ao voltar para
 * o menu, o App zera subject/answers, então essa tela deixa de ter o que
 * mostrar e não é mais possível chegar até ela.
 */
export default function ReviewAllScreen({ subject, answers, onBackToResults }) {
  const [index, setIndex] = useState(0);
  const total = subject.questions.length;
  const question = subject.questions[index];
  const answer = answers[index];
  const correct = isCorrect(question, answer);
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const QuestionComponent = QUESTION_COMPONENTS[question.type];

  return (
    <section>
      <div className="quiz-header">
        <div>
          <div className="quiz-header__subject">Revisão · {subject.name}</div>
          <ProgressBar current={index} total={total} />
        </div>
        <div className="quiz-header__progress-text">
          Questão {index + 1} de {total}
        </div>
      </div>

      <div className="question-card">
        <span className="q-type-tag">{questionTypeLabel(question.type)}</span>
        <span className={'review-status-tag' + (correct ? ' is-correct' : ' is-wrong')}>
          {correct ? 'Correta' : 'Incorreta'}
        </span>

        <QuestionComponent question={question} value={answer} onChange={noop} readOnly />
      </div>

      <div className="quiz-footer">
        <button className="btn btn-secondary" onClick={onBackToResults}>
          Voltar aos resultados
        </button>
        <div className="quiz-footer__nav">
          <button className="btn btn-secondary" disabled={isFirst} onClick={() => setIndex((i) => i - 1)}>
            ← Anterior
          </button>
          <button
            className="btn btn-primary"
            onClick={() => (isLast ? onBackToResults() : setIndex((i) => i + 1))}
          >
            {isLast ? 'Concluir revisão' : 'Próxima →'}
          </button>
        </div>
      </div>
    </section>
  );
}
