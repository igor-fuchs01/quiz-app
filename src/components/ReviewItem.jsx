import { correctAnswerLabel, plainQuestionText } from '../utils/grading.js';

export default function ReviewItem({ question }) {
  return (
    <div className="review-item">
      <div className="review-item__question">
        <b>Questão:</b> {plainQuestionText(question)}
      </div>
      <div className="review-item__answer">
        <span className="label">Resposta correta: </span>
        {correctAnswerLabel(question)}
      </div>
    </div>
  );
}
