import { useMemo, useState } from 'react';

/**
 * Questão de arrastar-e-soltar.
 * Suporta drag nativo (mouse) e um modo "armar e tocar" para funcionar
 * bem em telas de toque: clica na ficha, depois clica na lacuna.
 *
 * Quando readOnly=true (usado na revisão da prova), o componente vira
 * somente leitura: mostra a resposta já dada, marca certo/errado em cada
 * lacuna e não renderiza a bandeja de fichas (não há mais o que arrastar).
 */
export default function FillBlankQuestion({ question, value, onChange, readOnly = false }) {
  const state = value?.value ?? new Array(question.blanksCorrect.length).fill(null);

  const [armedValue, setArmedValue] = useState(null);
  const [dragOverBlank, setDragOverBlank] = useState(null);

  const availableChips = useMemo(() => {
    if (readOnly) return [];
    const shuffled = shuffleOnce(question.options, question);
    return shuffled.filter((opt) => !state.includes(opt));
  }, [question, state, readOnly]);

  function placeInBlank(blankIndex, chipValue) {
    if (readOnly || !chipValue) return;
    const next = [...state];
    next[blankIndex] = chipValue;
    onChange({ type: 'fill', value: next });
  }

  function clearBlank(blankIndex) {
    if (readOnly) return;
    const next = [...state];
    next[blankIndex] = null;
    onChange({ type: 'fill', value: next });
  }

  const parts = question.template.split(/\{\{(\d+)\}\}/);

  return (
    <>
      <p className="q-text">
        {parts.map((part, i) => {
          if (i % 2 === 0) return <span key={i}>{part}</span>;

          const blankIndex = Number(part);
          const filled = state[blankIndex];
          const correctValue = question.blanksCorrect[blankIndex];
          const isRight = readOnly && filled === correctValue;
          const isWrong = readOnly && filled !== correctValue;

          return (
            <span className="blank-wrap" key={i}>
              <span
                className={
                  'blank' +
                  (filled ? ' is-filled' : '') +
                  (dragOverBlank === blankIndex ? ' is-dragover' : '') +
                  (readOnly ? ' is-locked' : '') +
                  (isRight ? ' is-correct' : '') +
                  (isWrong ? ' is-wrong' : '')
                }
                onDragOver={
                  readOnly
                    ? undefined
                    : (e) => {
                        e.preventDefault();
                        setDragOverBlank(blankIndex);
                      }
                }
                onDragLeave={readOnly ? undefined : () => setDragOverBlank(null)}
                onDrop={
                  readOnly
                    ? undefined
                    : (e) => {
                        e.preventDefault();
                        setDragOverBlank(null);
                        placeInBlank(blankIndex, e.dataTransfer.getData('text/plain'));
                      }
                }
                onClick={
                  readOnly
                    ? undefined
                    : () => {
                        if (filled) {
                          clearBlank(blankIndex);
                        } else if (armedValue) {
                          placeInBlank(blankIndex, armedValue);
                          setArmedValue(null);
                        }
                      }
                }
              >
                {filled || '________'}
              </span>
              {isWrong && <span className="blank-correct-hint">correto: {correctValue}</span>}
            </span>
          );
        })}
      </p>

      {!readOnly && (
        <div className="chip-tray">
          <div className="tray-label">Arraste (ou toque) uma opção até a lacuna certa</div>
          {availableChips.map((opt) => (
            <div
              key={opt}
              className={'chip' + (armedValue === opt ? ' is-armed' : '')}
              draggable
              onDragStart={(e) => e.dataTransfer.setData('text/plain', opt)}
              onClick={() => setArmedValue(armedValue === opt ? null : opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

// embaralha as opções uma única vez por questão (cacheado por referência de objeto)
const shuffleCache = new WeakMap();
function shuffleOnce(options, question) {
  if (shuffleCache.has(question)) return shuffleCache.get(question);
  const shuffled = [...options].sort(() => Math.random() - 0.5);
  shuffleCache.set(question, shuffled);
  return shuffled;
}
