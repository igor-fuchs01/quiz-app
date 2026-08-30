/**
 * Funções puras usadas para validar respostas e montar a revisão final.
 * Mantidas fora dos componentes para ficar fácil de testar isoladamente.
 */

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

export function isAnswerComplete(question, answer) {
  if (answer == null) return false;

  if (question.type === 'mcq') {
    return typeof answer.value === 'number';
  }

  if (question.type === 'fill' || question.type === 'select') {
    return (
      Array.isArray(answer.value) &&
      answer.value.length === question.blanksCorrect.length &&
      answer.value.every((v) => v != null)
    );
  }

  return false;
}

export function isCorrect(question, answer) {
  if (!isAnswerComplete(question, answer)) return false;

  if (question.type === 'mcq') {
    return answer.value === question.correctIndex;
  }

  if (question.type === 'fill' || question.type === 'select') {
    return question.blanksCorrect.every((correct, i) => correct === answer.value[i]);
  }

  return false;
}

export function givenAnswerLabel(question, answer) {
  if (!answer) return '—';

  if (question.type === 'mcq') {
    return `${LETTERS[answer.value]} — ${question.options[answer.value]}`;
  }

  if (question.type === 'fill' || question.type === 'select') {
    return answer.value.join(' / ');
  }

  return '—';
}

export function correctAnswerLabel(question) {
  if (question.type === 'mcq') {
    return `${LETTERS[question.correctIndex]} — ${question.options[question.correctIndex]}`;
  }
  if (question.type === 'fill' || question.type === 'select') {
    return question.blanksCorrect.join(' / ');
  }
  return '';
}

export function plainQuestionText(question) {
  return question.template.replace(/\{\{\d+\}\}/g, '____');
}

export function questionTypeLabel(type) {
  return (
    {
      fill: 'Arraste as respostas',
      mcq: 'Múltipla escolha',
      select: 'Escolha no dropdown',
    }[type] || ''
  );
}

export { LETTERS };
