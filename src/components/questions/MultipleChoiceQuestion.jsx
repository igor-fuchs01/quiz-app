const LETTERS = ['A', 'B', 'C', 'D', 'E'];

/**
 * Quando readOnly=true (revisão), a lista fica travada: a opção que o
 * usuário marcou aparece em verde (se certa) ou vermelho (se errada), e
 * a alternativa correta é sinalizada mesmo que não tenha sido marcada.
 */
export default function MultipleChoiceQuestion({ question, value, onChange, readOnly = false }) {
  const selectedIndex = value?.value;

  return (
    <>
      <p className="q-text">{question.template}</p>
      <div className="mcq-list">
        {question.options.map((optionText, i) => {
          const isSelected = selectedIndex === i;
          const isAnswer = i === question.correctIndex;

          const classes = ['mcq-option'];
          if (readOnly) {
            classes.push('is-locked');
            if (isSelected && isAnswer) classes.push('is-correct');
            else if (isSelected && !isAnswer) classes.push('is-wrong');
            else if (!isSelected && isAnswer) classes.push('is-answer');
          } else if (isSelected) {
            classes.push('is-selected');
          }

          return (
            <div
              key={i}
              className={classes.join(' ')}
              onClick={readOnly ? undefined : () => onChange({ type: 'mcq', value: i })}
            >
              <span className="mcq-option__letter">{LETTERS[i]}</span>
              <span className="mcq-option__text">{optionText}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
