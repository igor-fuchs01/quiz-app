/**
 * Quando readOnly=true (revisão), os selects ficam desabilitados com o
 * valor já escolhido, coloridos conforme certo/errado, e a lacuna errada
 * mostra a resposta correta ao lado.
 */
export default function SelectQuestion({ question, value, onChange, readOnly = false }) {
  const state = value?.value ?? new Array(question.blanksCorrect.length).fill(null);

  function handleSelect(blankIndex, newValue) {
    if (readOnly) return;
    const next = [...state];
    next[blankIndex] = newValue;
    onChange({ type: 'select', value: next });
  }

  const parts = question.template.split(/\{\{(\d+)\}\}/);

  return (
    <p className="q-text">
      {parts.map((part, i) => {
        if (i % 2 === 0) return <span key={i}>{part}</span>;

        const blankIndex = Number(part);
        const current = state[blankIndex] ?? '';
        const correctValue = question.blanksCorrect[blankIndex];
        const isRight = readOnly && current === correctValue;
        const isWrong = readOnly && current !== correctValue;

        return (
          <span className="blank-wrap" key={i}>
            <select
              className={
                'blank-select' + (isRight ? ' is-correct' : '') + (isWrong ? ' is-wrong' : '')
              }
              value={current}
              disabled={readOnly}
              onChange={(e) => handleSelect(blankIndex, e.target.value)}
            >
              <option value="" disabled>
                selecione...
              </option>
              {question.blanksOptions[blankIndex].map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {isWrong && <span className="blank-correct-hint">correto: {correctValue}</span>}
          </span>
        );
      })}
    </p>
  );
}
