import {
  correctAnswerLabel,
  givenAnswerLabel,
  isCorrect,
  plainQuestionText,
} from '../utils/grading.js';

export default function QuestionReviewItem({ question, answer, index }) {
  const correct = isCorrect(question, answer);

  return (
    <div className={'review-item' + (correct ? ' is-correct' : '')}>
      <div className="review-item__question">
        <b>Questão {index + 1}:</b> {plainQuestionText(question)}
      </div>
      <div className="review-item__answer">
        <span className="label">Sua resposta: </span>
        {givenAnswerLabel(question, answer)}
      </div>
      {!correct && (
        <div className="review-item__answer">
          <span className="label">Resposta correta: </span>
          {correctAnswerLabel(question)}
        </div>
      )}
      <span className={'review-item__badge' + (correct ? ' is-correct' : ' is-wrong')}>
        {correct ? 'Correta' : 'Incorreta'}
      </span>
    </div>
  );
}
